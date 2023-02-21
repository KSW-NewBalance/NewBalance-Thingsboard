/* getFootAngle(angle, counter, sum_of_angle)
 * Calaulate foot angle using gyro sensor's data
 * @param angle, counter, sum_of_angle
 * @return integer
*/ 

function getFootAngle(angle, counter, sum_of_angle){
  var counter = parseInt(metadata.counter);
  var gyro_diff = (parseFloat(msg.gyro_x) + parseFloat(metadata.angle)) * 0.02*0.5;
  var angle = parseFloat(metadata.angle) + gyro_diff;

  msg.angle = angle;
  msg.counter = counter+1;
  msg.sum_of_angle = parseFloat(metadata.sum_of_angle)+ angle;

  return {msg: msg, metadata: metadata, msgType: msgType};
}
