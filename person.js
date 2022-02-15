class Person {
    MOVEMENT_SPEED = 1;
    firstName;
    lastName;
    leftPostion;
    rightPosition;
    forwardPosition;
    backwardPosition;

    constructor(firstName = 'firstName',lastName='lastName',leftPostion=0,rightPosition=0,forwardPosition=0,backwardPosition=0) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.leftPostion = leftPostion;
        this.rightPosition = rightPosition;
        this.forwardPosition = forwardPosition;
        this.backwardPosition = backwardPosition;
    }

    running() { /* missing unit test for this method */
        this.forwardPosition += this.MOVEMENT_SPEED + this.MOVEMENT_SPEED;
        return this.firstName + ' ' + this.lastName + ' running.';
    }

    hello() { /* sample method */
        return 'hello how are you';
    }
    
    goingInCircles(){ /* function is responsible for too many actions */
        let retval  = '';
        this.leftPostion += (this.MOVEMENT_SPEED * 2);
        this.backwardPosition += (this.MOVEMENT_SPEED * 3);
        this.forwardPosition += (this.MOVEMENT_SPEED * 4);
        this.rightPosition += (this.MOVEMENT_SPEED * 5);
        retval = this.firstName + ' ' + this.lastName + ' stepped left.\n';
        retval += this.firstName + ' ' + this.lastName + ' stepped right.\n';
        retval += this.firstName + ' ' + this.lastName + ' stepped forward.\n';
        retval += this.firstName + ' ' + this.lastName + ' stepped backward.\n';
        return retval;

    }
}
module.exports = Person;