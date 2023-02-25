# NewBalance-Thingsboard


### GET_INITIAL_CONTACT


- The main Rule Engine in this project
- check the operation of the application
- calculate the magnitude of the input value
- check the running state : 
  - "foot contact" : contacting with the ground
  - "swing" : being away form the ground 
![image](https://user-images.githubusercontent.com/62338783/221370156-04757841-757f-4d93-8c07-16131022bb22.png)


### STOP_RUNNING

- Processing of data at the end of the Running state
- calculate average of the foot angle
- return save all the analysis data
![image](https://user-images.githubusercontent.com/62338783/221370403-fc62a19a-01a7-4a94-aed9-f4563fa7a0be.png)


### GET_FOOT_ANGLE

- Measure the amount of change in the foot angle when in the swing state.
- calculate the changes and get current foot angle
![image](https://user-images.githubusercontent.com/62338783/221370583-87610ad0-270e-4775-8132-b122727bf816.png)


### GET_STRIKE
- Accumulate all the force data from the Force Sensitive Register 
![image](https://user-images.githubusercontent.com/62338783/221370666-321b78c5-92c6-4415-848f-2475eb75ac61.png)
