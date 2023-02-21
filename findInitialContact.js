/* checkIsRunning(shared_isRunning)
 * Check if the runner is running.
 * @param shared_isRunning
 * @return string
*/ 

function checkIsRunning(msg, metadata, msgType){
  var newMsgType = "";

  // If the runner is not running, change the msg type to "STOP"
  if(metadata.shared_isRunning == "false"){
      newMsgType = "STOP";
      return {msg: msg, metadata: metadata, msgType: newMsgType};
  }

  return {msg: msg, metadata: metadata, msgType: newMsgType};
}




/* getAccelerationMagnitude(acc_x, acc_y, acc_z)
 * Calculate the magnitude of the input acceleration data
 * @param acc_x, acc_y, acc_z
 * @return integer
*/ 

function getMagnitudeAccelerationData(msg, metadata, msgType){

  //A function can get magnitude of the acceleration data
  function getAccelerationMagnitude(x,y,z){
      var square_of_data = x*x + y*y+ z*z;
      var magnitudeOfAcceleration = Math.floor(Math.sqrt(square_of_data));
      return magnitudeOfAcceleration;
  }

  // get acceleration 
  var acceleration = getAccelerationMagnitude(msg.acc_x,msg.acc_y,msg.acc_z);

  msg.acceleration = acceleration;

  return {msg: msg, metadata: metadata, msgType: msgType};
}



/* findPeakData(acceleration)
 * Calculate the local maximum value
 * @param acceleration, previous_acceleration(metadata)
*/ 

function findPeakData(msg, metadata, msgType){

  // Get inclination by subtracting from the previous value
  var inclination = msg.acceleration - metadata.acceleration;
  var newMsgType = "";

  /*
   If current acceleration has a large value than threshold(6 in here) and also bigger than previous peak data.
   Then, change the peak value
  */
  if(inclination > 0){ // upward curve : Need to find peak data
      if(msg.acceleration-6>0 && metadata.peak < msg.acceleration){
          msg.peak = msg.acceleration;
      }
  }else{// down curve : No need to find a peak data. Peak is not changed.
      msg.peak = metadata.peak;
  }

  msg.inclination = inclination; // stroe the current inclination data on DB

  return {msg: msg, metadata: metadata, msgType: msgType};
}




/* contactOrSwing(shared_isRunning)
 * Check current running posture state : initial contact or swing 
 * @param inclination, acceleration, peak
 * @return boolean
*/ 

function contactOrSwing(msg, metadata, msgType){
  /*
   * initial contact starts when the peak point detected
   * Find a peak point by comparing the previous inclination(metadata) and current inclination 
   * The point where the slope of the graph changes from plus to minus is the peak.
  */
  if(metadata.inclination > 0 && msg.inclination < 0 && metadata.acceleration == metadata.peak){ 

      msg.initial_contact = true;
    
  }else if(msg.inclination>0 && msg.acceleration - 2 == 0){
      /* Check swing state's start point
       * If current inclination is positive and acceleration is near the under threshold(in here 2), then swing state starts.
      */
      msg.peak = -1; //initialize the peak value
      msg.initial_contact= false;
  }else{
      msg.initial_contact= false;
  }

  return {msg: msg, metadata: metadata, msgType: msgType};
}



