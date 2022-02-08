class Vehicle {
    SPEED = 25 /* km */
    numOfDoors;
    transmission;
    color;
    maxSpeed;
    numOfWheels;
    currentGear;
    currentSpeed;
    constructor(currentGear=0,currentSpeed=0,numOfWheels=4,maxSpeed=250,color='blue',transmission='standard',numOfDoors=0 /* motobike */){
        this.numOfDoors = numOfDoors;
        this.transmission = transmission;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.numOfWheels = numOfWheels;
        this.currentGear = currentGear;
        this.currentSpeed = currentSpeed;
    }

    changeGears(direction){
        /* missing tests */
        if (direction = 'up'){
            this.currentSpeed =+ (this.SPEED * 0.98);
        } else {
            /* missing functionality */

        }
    }
    speedUp(){
        /* missing tests */
        this.currentSpeed =+ this.SPEED;
    }
    slowDown(){
        /* missing tests */
        /* missing functionality */
    }
    
    race(){
        /* missing tests */
        /*
            proposed functionality
        */
        /*
        reset values to inital values e.g. gear = 0, speed = 0
        call speedUp eight times
            if speed > 0 then change gears
            change gears at every ~65 km to ~75 km
        slow down after the sixth speedUp  event
        */
    }
}

module.exports = Vehicle;