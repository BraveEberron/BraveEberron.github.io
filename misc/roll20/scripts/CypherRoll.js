var CypherRoll = CypherRoll || (function() {
	'use strict';

	var version  = '0.2.3';

	var checkInstall = function() {
        log('----=> CypherRoll v'+version+' <=----');
	};

	var handleInput = function(msg) {
		// var args, matches, tables, tableIDs=[], errors=[], items, itemMatches, accum='';
		
		if (msg.type !== "api") {
			return;
		}

		if (msg.content.indexOf("!cr ") == -1) {
			return;
		}

		var values = msg.content.replace("!cr ", "");

		var args = values.split("|");

		for (var i = 0; i < args.length; i++) {
			args[i] = parseInt(args[i]);
		}

		log(args);
		// 2|2|1|2
		//!cr ?{Effort|0}|?{Asser|0}|?{Adv|0}|?{Bonus|0}
		var roll = randomInteger(20);
		var result = roll + (args[0] * 3) + (args[1] * 3) + (args[2] * 3) + (args[3])
		var lvResult = Math.floor(result / 3);

		var s = "&{template:default}{{name=Roll by " + msg.who + "}}";
		if(args[0]) {
			s += "{{Effort=" + args[0] + "}}";
		}

		if(args[1]) {
			s += "{{Effort=" + args[1] + "}}";
		}

		if(args[2]) {
			s += "{{Effort=" + args[2] + "}}";
		}

		if(args[3]) {
			s += "{{Effort=" + args[3] + "}}";
		}

		s += "{{Roll=" + roll + "}}";

		if(roll)

		s += "{{Result=" + result + " | beats a " + lvResult + "}}";

		sendChat(msg.who, s);

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

	CypherRoll.CheckInstall();
	CypherRoll.RegisterEventHandlers();
});