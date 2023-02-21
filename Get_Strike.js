/* calculatePressureData()
 * Calculate cumulative values
 * @param 
 * @return integer
*/ 

function calculatePressureData(msg, metadata, msgType){
  var newMsgType = "POST_TELEMETRY_REQUEST";

  msg.total_fsr_1st = parseFloat(metadata.total_fsr_1st)+ parseFloat(msg.fsr_1st);
  msg.total_fsr_2nd = parseFloat(metadata.total_fsr_2nd) + parseFloat(msg.fsr_2nd);
  msg.total_fsr_3rd = parseFloat(metadata.total_fsr_3rd) + parseFloat(msg.fsr_3rd);
  msg.total_fsr_4th = parseFloat(metadata.total_fsr_4th) + parseFloat(msg.fsr_4th);

  return {msg: msg, metadata: metadata, msgType: newMsgType};
}
