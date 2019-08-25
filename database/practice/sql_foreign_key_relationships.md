SQL Foreign Key Relationships
We can use foreign keys to represent:

1 - 1 (invertible injective relationship a.k.a. bijective relationship)
1 - 0,1 (partially injective relationship or partially surjective relationship)
1 - * (0 or more)
1 - + (1 or more)
M - N
And then variations of that.

Note that these relationships can be modelled as functions from the left domain to right codomain.

Let's take a look at how we can do that for different databases. We're going to use the example of 2 tables a and b.

MySQL
1 - 1
The ideal way to do 1 to 1 is through mutual foreign keys and deferrable constraints. This way the constraint is only checked at the end of the transaction. MySQL doesn't support the above, however there are a few options.

If you want to allow the ability to insert and delete on both tables.

Then you use the 1 - 0,1 method and write:

An after insertion trigger from a to b.
An after delete trigger from b to a.
A before insertion trigger from b to a (this one is optional, you may not have enough data to know how to insert into a).
Setup ON UPDATE CASCADE ON DELETE CASCADE on the foreign key from b to a.
1 - 0,1
CREATE TABLE a (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE b (
    id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES a(id) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE utf8mb4_unicode_ci;
The above ensures that for each row in table a, there will either no corresponding row in b, or exactly 1 row in b. Without the ON UPDATE CASCADE ON DELETE CASCADE, it would mean you couldn't delete from a and get automatic deletion from b, in fact it just won't let you delete unless you explicitly first delete from b and then a in the same transaction.

If you actually want instead a partially surjective relationship, where multiple rows on the a can point to the same row on b. Then you need a nullable foreign key to b on table a.

CREATE TABLE b (
    id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE a (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    bId INT UNSIGNED DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (bId) REFERENCES b(id) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE utf8mb4_unicode_ci;
It is possible to adjust the ON DELETE CASCADE to other kinds of actions depending on how the relationship is intended to be mutated.

1 - *
This is the basic relationship, just remember to use ON UPDATE CASCADE ON DELETE CASCADE if you want to allow deletion from table a.

1 - +
To do this we need to use an insertion trigger on a (that inserts on b) and delete trigger on table b (that checks for at-least-one constraint), and a foreign key relationship from table b to a.

CREATE TABLE a (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE b (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    aId INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (aId) REFERENCES a(id) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE utf8mb4_unicode_ci;

DELIMITER //

CREATE TRIGGER aInsertTrigger AFTER INSERT ON `a` FOR EACH ROW BEGIN
    INSERT INTO `b` (aId) VALUES (NEW.id);
END //

CREATE TRIGGER bDeleteTrigger BEFORE DELETE ON `b` FOR EACH ROW BEGIN
    IF (SELECT NOT EXISTS (SELECT 1 FROM `b` WHERE id <> OLD.id AND aId = OLD.aId LIMIT 1)) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Table b must have at least 1 row referencing table a';
    END IF;
END //

DELIMITER ;
Try it out with INSERT INTO a (id) VALUES (NULL); and then delete various parts of it.

M - N
This is where multiple rows at table a can point to multiple rows on table b, but multiple rows on table b can also point to multiple rows on table a. For this we need a closure table.

CREATE TABLE a (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE b (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE ab (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    aId INT UNSIGNED NOT NULL,
    bId INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (aId) REFERENCES a(id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (bId) REFERENCES b(id) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE utf8mb4_unicode_ci;
This can be useful for relating even more table than just 2.

PostgreSQL
1 - +
See this: https://dba.stackexchange.com/a/112144/45632
