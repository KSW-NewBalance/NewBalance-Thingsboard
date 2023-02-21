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

