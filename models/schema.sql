DROP DATABASE IF EXISTS DnDB;
CREATE DATABASE DnDB;
USE DnDB;
CREATE TABLE Characters(
    id int NOT NULL AUTO_INCREMENT KEY,
    CharacterName varchar(30),
    CharacterClass varchar(30),
    CharacterRace varchar(30),  
    HitPoints int,
    ArmorClass int NOT NULL,
    ToHitBonus int NOT NULL,
    StrScore int, DexScore int, ConScore int, IntScore int, WisScore int, ChaScore int,
    StrSave int, DexSave int, ConSave int, IntSave int, WisSave int, ChaSave int,
    StealthSkill int,
    PerceptionSkill int,
    FailedDeathSaves int,
    PassedDeathSaves int,
    CampaignName varchar (40),
    DMid varchar(10)
);
CREATE TABLE Logins
(  id int NOT NULL AUTO_INCREMENT KEY,
  UN varchar(20) NOT NULL,
  PW varchar(20) NOT NULL,
  DMid varchar (10)
  );
CREATE TABLE Campaigns
(
    CampaignID int NOT NULL AUTO_INCREMENT KEY,
    DMid varchar(10),
    CampaignName varchar (40)
);
