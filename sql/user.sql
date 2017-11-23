 SET NAMES GBK;
 CREATE DATABASE pianke CHARSET=UTF8;
 USE pianke;
 CREATE TABLE t_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(20),
    upwd VARCHAR(20)
 );
 INSERT INTO t_user VALUES(null,'xiao','123');
 INSERT INTO t_user VALUES(null,'iao','23');
 INSERT INTO t_user VALUES(null,'xiao','13');

