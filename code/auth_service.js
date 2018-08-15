
let VoteIps = require('./vote_ip_model');

function getCodesUserHasVotedOn(userIp) {
	VoteIps.find({ip: userIp}, function(err, user) {
		return user;
	})	
}

function checkIfUserAlreadyVotedForCode(votedCodes, codeId) {
	votedCodes.find((votedCodeId) => {
		if(votedCodeId === vodeId) {
			return true;
		};
	});

	return false;
}

function saveUserIpAddress(userIp, codeId) {
	var votedIp = new VoteIps();
    votedIp.ip = userIp;
    votedIp.voteObjects = [codeId];


    votedIp.save((err, result) => {
        if (err)
           console.log(err);
    }); 
}

module.exports = function (userIp, codeId) {
	let votedCodes = getCodesUserHasVotedOn(userIp);

	if(votedCodes === undefined) {
		saveUserIpAddress(userIp, codeId);
		return false;
	}

	return checkIfUserAlreadyVotedForCode(votedCodes, codeId);
};