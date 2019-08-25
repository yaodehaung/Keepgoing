CREATE TABLE users (
  `id` int(11) DEFAULT NULL auto_increment PRIMARY KEY,
  `login` varchar(255),
  `password` varchar(255),
  `email` text,
  `name` text,
  `notify_via_email` tinyint(1),
  `notify_on_new_articles` tinyint(1),
  `notify_on_comments` tinyint(1),
  `notify_watch_my_articles` tinyint(1),
  `notify_via_jabber` tinyint(1),
  `jabber` varchar(255)
) ENGINE=InnoDB;
/*
 
 CREATE TABLE users (
  `id` int(11) DEFAULT NULL auto_increment PRIMARY KEY,
  `login` varchar(255),
  `password` varchar(255),
  `email` text,
  `name` text,
  `notify_via_email` tinyint(1),
  `notify_on_new_articles` tinyint(1),
  `notify_on_comments` tinyint(1),
  `notify_watch_my_articles` tinyint(1),
  `notify_via_jabber` tinyint(1),
  `jabber` varchar(255)
) ENGINE=InnoDB;

  'id' : 預設不能有NULL值; 自動疊加數字; 
 
 
 */
