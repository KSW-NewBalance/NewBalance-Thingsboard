/* getFootAngleAvg(sum_of_angle, counter)
 * Get average of foot angles
 * @param sum_of_angle, counter
 * @return integer
*/ 

function getFootAngleAvg(msg, metadata, msgType){
  var avg_foot_angle = parseFloat(metadata.sum_of_angle) / parseInt(metadata.counter);
  msg.avg_foot_angle = avg_foot_angle;
  return {msg: msg, metadata: metadata, msgType: msgType};
}



/* setMsgForAttributes(total_fsr_1st,total_fsr_2nd,total_fsr_3rd,total_fsr_4th,avg_foot_angle )
 * set message to save for shared attribute 
 * @param total_fsr_1st,total_fsr_2nd,total_fsr_3rd,total_fsr_4th,avg_foot_angle
 * @return void
*/ 

function setMsgForAttributes(msg, metadata, msgType){

  var newMsg ={};
  var newMsgType = "POST_ATTRIBUTES_REQUEST";

  newMsg.total_fsr_1st = metadata.total_fsr_1st;
  newMsg.total_fsr_2nd = metadata.total_fsr_2nd;
  newMsg.total_fsr_3rd = metadata.total_fsr_3rd;
  newMsg.total_fsr_4th = metadata.total_fsr_4th;

  newMsg.avg_foot_angle = msg.avg_foot_angle;

  return {msg: newMsg, metadata: metadata, msgType: newMsgType};
}


