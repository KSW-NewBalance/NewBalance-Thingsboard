/* getFootAngle(angle, counter, sum_of_angle)
 * Calaulate foot angle using gyro sensor's data
 * @param angle, counter, sum_of_angle
 * @return integer
*/ 

function getFootAngle(angle, counter, sum_of_angle){
  var newMsgType = "POST_TELEMETRY_REQUEST";
  var time = 0.01; //measurement interval
  var rad2deg = 57.3;// a value to change radian value to degree value

  var gyro_diff = parseFloat(msg.gyro_z) * rad2deg * time; // calculate the difference of angle
  var angle = parseFloat(metadata.angle) + gyro_diff; // get the current angle

  msg.gyro_diff = gyro_diff;
  msg.angle = angle.toFixed(2);
  msg.counter = parseInt(metadata.counter)+1;
  msg.sum_of_angle = (parseFloat(metadata.sum_of_angle) + parseFloat(msg.angle)).toFixed(2);
  
  return {msg: msg, metadata: metadat
}
