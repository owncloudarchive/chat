/*
 * Ajax jQuery Layer
 */
function sendMSG(type, param, success, error){
	param.user = OC.currentUser;
	param.sessionID = sessionID;
	$.post(OC.Router.generate("command_" + type), param).done(function(data){
    	if(data.status === "success"){
    		success(data);
    	} else if (data.status === "error"){
    		error(data.data.msg);
    	}
	});
	
}

function getPushMessge(callback){
	$.post(OC.Router.generate('push_get'), {receiver: OC.currentUser, sessionID: sessionID}, function(data){
	   callback(data);
	});
}

function deletePushMessage(id, callback){
	$.post(OC.Router.generate('push_delete'), {id: id}, function(data){
	   callback();
	});
}