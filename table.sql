CREATE TABLE `customers_auth` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `l_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created` date DEFAULT NULL,
  `stat` varchar(50) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;



CREATE TABLE `task_list` (
  `TASK_ID` int(11) NOT NULL,
  `GROUP_ID` int(11) NOT NULL,
  `FREQUENCY` int(11) NOT NULL,
  `START_DATE` date NOT NULL,
  `END_DATE` date NOT NULL,
  `LOGIN_ID` int(11) NOT NULL,
  `CREATED_BY` int(11) NOT NULL,
  `STATUS` varchar(45) NOT NULL,
  `MULTIPLE` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE DATABASE `split_task` /*!40100 DEFAULT CHARACTER SET utf8 */;
CREATE TABLE `task_master` (
  `TASK_ID` int(11) NOT NULL AUTO_INCREMENT,
  `TASK_NAME` varchar(45) NOT NULL,
  PRIMARY KEY (`TASK_ID`),
  UNIQUE KEY `TASK_ID_UNIQUE` (`TASK_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;


CREATE TABLE `task_status` (
  `PK_TS` int(11) NOT NULL AUTO_INCREMENT,
  `TASK_ID` int(11) NOT NULL,
  `DUE_DATE` date NOT NULL,
  `LOGIN_ID` int(11) NOT NULL,
  `STATUS` varchar(45) NOT NULL,
  PRIMARY KEY (`PK_TS`)
) ENGINE=InnoDB AUTO_INCREMENT=877 DEFAULT CHARSET=utf8;

