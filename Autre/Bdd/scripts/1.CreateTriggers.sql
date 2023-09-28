DELIMITER //

//
DROP TRIGGER IF EXISTS triggerDeleteTournament;
CREATE TRIGGER triggerDeleteTournament
BEFORE DELETE
	ON `CSGOTournamenentMaker`.`T_Tournoi` FOR EACH ROW

BEGIN
	DELETE FROM `CSGOTournamenentMaker`.`T_Phase`
    WHERE `CSGOTournamenentMaker`.`T_Phase`.`idTournoi` = OLD.idTournoi;

END;
//

//
DROP TRIGGER IF EXISTS triggerDeletePhase;
CREATE TRIGGER triggerDeletePhase
BEFORE DELETE
	ON `CSGOTournamenentMaker`.`T_Phase` FOR EACH ROW

BEGIN
	DELETE FROM `CSGOTournamenentMaker`.`T_Match`
    WHERE `T_Match`.`idPhase` = OLD.idPhase;

END;
//

//
DROP TRIGGER IF EXISTS triggerDeleteMatch;
CREATE TRIGGER triggerDeleteMatch
BEFORE DELETE
	ON `CSGOTournamenentMaker`.`T_Match` FOR EACH ROW

BEGIN
	DELETE FROM `CSGOTournamenentMaker`.`T_Round`
    WHERE `T_Round`.`idMatch` = OLD.idMatch;
    
    DELETE FROM `CSGOTournamenentMaker`.`JoueMatch`
    WHERE `JoueMatch`.`idMatch` = OLD.idMatch;

END;
//

//
DROP TRIGGER IF EXISTS triggerDeleteRound;
CREATE TRIGGER triggerDeleteRound
BEFORE DELETE
	ON `CSGOTournamenentMaker`.`T_Round` FOR EACH ROW

BEGIN
	DELETE FROM `CSGOTournamenentMaker`.`joueRound`
    WHERE `joeuRound`.`idRound` = OLD.idRound;
    
    DELETE FROM `CSGOTournamenentMaker`.`Score`
    WHERE `Score`.`idRound` = OLD.idRound;

END;
//