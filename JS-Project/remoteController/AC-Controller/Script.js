const acPower = document.getElementById("On-Off");
const Tempreture = document.getElementById("temp");
const Swing = document.getElementById("swing");
const modeOn = document.getElementById("mode")


const acFunction = {
    currentTempreture: 16,
    minTempreture: 16,
    maxTempreture: 30,
    isMode: false,
    isOn: false,
    swing: false,
    powerOn: function () {
        if (this.isOn === false) {
            acPower.innerText = "ON";
            return this.isOn = true;
        } else {
            acPower.innerText = "OFF";
            Swing.innerText = "OFF";
            return this.isOn = false;

        }
    },

    swingOn: function () {
        if (this.isOn === true) {
            if (this.swing === false) {
                Swing.innerText = "ON";
                return this.swing = true;
            } else {
                Swing.innerText = "OFF";
                return this.swing = false;
            }
        }
    },
    isMaxTempreture: function () {

        if (this.isOn === true) {
            if (this.currentTempreture < this.maxTempreture) {
                this.currentTempreture++
                Tempreture.innerText = this.currentTempreture
            }
        }
    },

    isMinTempreture: function () {
        if (this.isOn === true) {
            if (this.currentTempreture > this.minTempreture) {
                this.currentTempreture--
                Tempreture.innerText = this.currentTempreture
            }
        }
    },
    Mode: function () {
        if (this.isOn === true) {
            if (this.isMode === false) {
                modeOn.innerText = "Turbo"
                return this.isMode = true;
            } else {
                modeOn.innerText = "Normal"
                return this.isMode = false;

            }

        }
    }



}
