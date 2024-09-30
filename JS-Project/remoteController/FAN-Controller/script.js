const power = document.getElementById("power");
const swing = document.getElementById("swing");
const currentSpeed = document.getElementById("currentSpeed");


const fan = {
    isPower: false,
    isSwing: false,
    isSpeed: 0,
    isMaxSpeed: 5,
    isMinSpeed: 0,

    powerOnOff: function () {
        if (this.isPower === false) {
            power.innerText = "ON";
            return this.isPower = true;
        } else {
            power.innerText = "OFF";
            swing.innerText = "OFF";
            return this.isPower = false;
        }
    },
    swingOnOff: function () {
        if (this.isPower === true) {
            if (this.isSwing === false) {
                swing.innerText = "ON";
                return this.isSwing = true;
            } else {
                swing.innerText = "OFF";
                return this.isSwing = false;
            }
        }
    },
    increaseSpeed: function () {
        if (this.isPower === true) {
            if (this.isSpeed < this.isMaxSpeed) {
                this.isSpeed++ 
                currentSpeed.innerText = this.isSpeed 
            }
        }
    },
    decreaseSpeed: function(){
        if(this.isPower === true){
            if(this.isSpeed > this.isMinSpeed){
                this.isSpeed--
                currentSpeed.innerText = this.isSpeed
            }
        }
    }
};