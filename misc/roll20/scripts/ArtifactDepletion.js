var ArtifactDeplete = ArtifactDeplete || (function() {
	'use strict';

	var version  = '0.0.1';

	var checkInstall = function() {
        log('----=> Artifact Depletion v'+version+' <=----');
	};

	var handleInput = function(msg) {
		// var args, matches, tables, tableIDs=[], errors=[], items, itemMatches, accum='';

		if (msg.type !== "api" || msg.content.indexOf("!adep ") == -1) {
			return;
		}

		//Get Arguments
		var values = msg.content.replace("!adep ", "");
		var args = values.split(" ");

		//!adep id 6

		//Get Artifact Character sheet
		var artifact = getObj("character", args[0]);

		//Check if artifact is valid
		if(!artifact) {
			log("failed to find artifact");
			return;
		}

		//Roll random number
		var roll = randomInteger(args[1]);

		log("!ammo @{" + artifact.name + "|character_id} charges -1 charge(s)");

		//Check result
		if(roll == 1) {
			//Reduce Charge
			sendChat(msg.who, "!ammo @{" + artifact.name + "|character_id} charges -1 charge(s)");
		} else {
			//Charge Remains
			sendChat(msg.who, "!ammo @{" + artifact.name + "|character_id} charges 0 charge(s)");
		}

		return;

	};

	var registerEventHandlers = function() {
		on('chat:message', handleInput);
	};

	return {
		CheckInstall: checkInstall,
		RegisterEventHandlers: registerEventHandlers
	};

}());

on("ready",function(){
	'use strict';

	ArtifactDeplete.CheckInstall();
	ArtifactDeplete.RegisterEventHandlers();
});