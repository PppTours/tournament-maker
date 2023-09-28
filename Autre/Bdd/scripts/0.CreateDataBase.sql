CREATE database CSGOTournamenentMaker CHARACTER SET utf8 COLLATE utf8_general_ci;
USE CSGOTournamenentMaker;

-- Creation Table T_Joueur
CREATE TABLE T_Joueur(
   idJoueur INT AUTO_INCREMENT,
   pseudoJoueur VARCHAR(50) ,
   nomJoueur VARCHAR(50) ,
   prenomJoueur VARCHAR(50) ,
   idDiscord VARCHAR(50) ,
   identifiant VARCHAR(50) ,
   motDePasse VARCHAR(50) ,
   role VARCHAR(50) ,
   PRIMARY KEY(idJoueur)
);

-- Creation Table T_Type
CREATE TABLE T_Type(
   idType INT AUTO_INCREMENT,
   nomType VARCHAR(50) ,
   PRIMARY KEY(idType)
);

-- Creation Table T_Map
CREATE TABLE T_Map(
   idMap INT AUTO_INCREMENT,
   nomMap VARCHAR(50) ,
   PRIMARY KEY(idMap)
);

-- Creation Table T_Status
CREATE TABLE T_Status(
   idStatus INT AUTO_INCREMENT,
   nomStatus VARCHAR(50) ,
   PRIMARY KEY(idStatus)
);

-- Creation Table T_Tournoi
CREATE TABLE T_Tournoi(
   idTournoi INT AUTO_INCREMENT,
   nomTournoi VARCHAR(50) ,
   dateDebut TIMESTAMP,
   idStatus INT NOT NULL,
   idType INT NOT NULL,
   PRIMARY KEY(idTournoi),
   FOREIGN KEY(idStatus) REFERENCES T_Status(idStatus),
   FOREIGN KEY(idType) REFERENCES T_Type(idType)
);

-- Creation Table T_Equipe
CREATE TABLE T_Equipe(
   idEquipe INT AUTO_INCREMENT,
   nomEquipe VARCHAR(50) ,
   dateCreation TIMESTAMP,
   idType INT NOT NULL,
   PRIMARY KEY(idEquipe),
   FOREIGN KEY(idType) REFERENCES T_Type(idType)
);

-- Creation Table T_Phase
CREATE TABLE T_Phase(
   idPhase INT AUTO_INCREMENT,
   nomPhase VARCHAR(50) ,
   idTournoi INT NOT NULL,
   PRIMARY KEY(idPhase),
   FOREIGN KEY(idTournoi) REFERENCES T_Tournoi(idTournoi)
);

-- Creation Table T_Match
CREATE TABLE T_Match(
   idMatch INT AUTO_INCREMENT,
   BO TINYINT,
   Ip VARCHAR(50) ,
   LienRediff VARCHAR(50) ,
   LienLive VARCHAR(50) ,
   dateMatch TIMESTAMP,
   idPhase INT NOT NULL,
   idTournoi INT NOT NULL,
   PRIMARY KEY(idMatch),
   FOREIGN KEY(idPhase) REFERENCES T_Phase(idPhase),
   FOREIGN KEY(idTournoi) REFERENCES T_Tournoi(idTournoi)
);

-- Creation Table T_Round
CREATE TABLE T_Round(
   idRound INT AUTO_INCREMENT,
   idMatch INT NOT NULL,
   PRIMARY KEY(idRound),
   FOREIGN KEY(idMatch) REFERENCES T_Match(idMatch)
);

-- Creation Table ParticiperTournoi
CREATE TABLE ParticiperTournoi(
   idTournoi INT,
   idEquipe INT,
   PRIMARY KEY(idTournoi, idEquipe),
   FOREIGN KEY(idTournoi) REFERENCES T_Tournoi(idTournoi),
   FOREIGN KEY(idEquipe) REFERENCES T_Equipe(idEquipe)
);

-- Creation Table JoueMatch
CREATE TABLE JoueMatch(
   idMatch INT,
   idEquipe INT,
   Vainqueur TINYINT,
   PRIMARY KEY(idMatch, idEquipe),
   FOREIGN KEY(idMatch) REFERENCES T_Match(idMatch),
   FOREIGN KEY(idEquipe) REFERENCES T_Equipe(idEquipe)
);

-- Creation Table avoirMap
CREATE TABLE avoirMap(
   idMap INT,
   idRound INT,
   PRIMARY KEY(idMap, idRound),
   FOREIGN KEY(idMap) REFERENCES T_Map(idMap),
   FOREIGN KEY(idRound) REFERENCES T_Round(idRound)
);

-- Creation Table joueRound
CREATE TABLE joueRound(
   idJoueur INT,
   idRound INT,
   nbKill TINYINT,
   nbAssist TINYINT,
   nbDeath TINYINT,
   PRIMARY KEY(idJoueur, idRound),
   FOREIGN KEY(idJoueur) REFERENCES T_Joueur(idJoueur),
   FOREIGN KEY(idRound) REFERENCES T_Round(idRound)
);

-- Creation Table appartient
CREATE TABLE appartient(
   idEquipe INT,
   idJoueur INT,
   PRIMARY KEY(idEquipe, idJoueur),
   FOREIGN KEY(idEquipe) REFERENCES T_Equipe(idEquipe),
   FOREIGN KEY(idJoueur) REFERENCES T_Joueur(idJoueur)
);

-- Creation Table Score
CREATE TABLE Score(
   idEquipe INT,
   idRound INT,
   nbMancheGagnee TINYINT,
   Vainqueur TINYINT,
   PRIMARY KEY(idEquipe, idRound),
   FOREIGN KEY(idEquipe) REFERENCES T_Equipe(idEquipe),
   FOREIGN KEY(idRound) REFERENCES T_Round(idRound)
);
