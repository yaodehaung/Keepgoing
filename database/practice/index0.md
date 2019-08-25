表格是資料庫中儲存資料的基本架構。在絕大部份的情況下，資料庫廠商不可能知道您需要如何儲存您的 資料，所以通常您會需要自己在資料庫中建立表格。雖然許多資料庫工具可以讓您在不需用到 SQL 的情況下 建立表格，不過由於表格是一個最基本的架構，我們決定包括 CREATE TABLE 的語法在這個網站中。

在我們跳入 CREATE TABLE 的語法之前，我們最好先對表格這個東西 有些多一點的瞭解。表格被分為欄位 (column) 及列位 (row)。每一列代表一筆資料，而每一欄代表一筆資料的 一部份。舉例來說，如果我們有一個記載顧客資料的表格，那欄位就有可能包括姓、名、地址、城市、國家、 生日‧‧‧等等。當我們對表格下定義時，我們需要註明欄位的標題，以及那個欄位的資料種類。

那，資料種類是什麼呢？資料可能是以許多不同的形式存在的。它可能是一個整數 (例如 1)，、一個實數 (例如 0.55)、一個字串 (例如 'sql')、一個日期/時間 (例如 '2000-JAN-25 03:22:22')、或甚至是 以二進法 (binary) 的狀態存在。當我們在對一個表格下定義時，我們需要對每一個欄位的資料種類下定義。 (例如 '姓' 這個欄位的資料種類是 char(50)──代表這是一個 50 個字元的字串)。我們需要注意的一點是 不同的資料庫有不同的資料種類，所以在對表格做出定義之前最好先參考一下資料庫本身的說明。
CREATE TABLE 的語法是：
```
CREATE TABLE table_name(
   column1 datatype,
   column2 datatype,
   column3 datatype,
   .....
   columnN datatype,
   PRIMARY KEY( one or more columns )
);
```
-----
column1: 欄位 ;
datatype: 資料型態;

----



若我們要建立我們上面提過的顧客表格，我們就鍵入以下的 SQL：

```
CREATE TABLE Customer
(
	First_Name char(50),
	Last_Name char(50),
	Address char(50),
	City char(50),
	Country char(25),
	Birth_Date datetime
);
```



你可以使用DESC的指令來確定table內部的資訊。

```
SQL> DESC CUSTOMERS;
+---------+---------------+------+-----+---------+-------+
| Field   | Type          | Null | Key | Default | Extra |
+---------+---------------+------+-----+---------+-------+
| ID      | int(11)       | NO   | PRI |         |       |
| NAME    | varchar(20)   | NO   |     |         |       |
| AGE     | int(11)       | NO   |     |         |       |
| ADDRESS | char(25)      | YES  |     | NULL    |       |
| SALARY  | decimal(18,2) | YES  |     | NULL    |       |
+---------+---------------+------+-----+---------+-------+
5 rows in set (0.00 sec)

```
