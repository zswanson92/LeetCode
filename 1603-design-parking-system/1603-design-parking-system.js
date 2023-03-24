/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.big = big;
    this.med = medium;
    this.small = small;
};



/** 
 * @param {number} carType
 * @return {boolean}
 */
let smallCount = 0
let medCount = 0
let bigCount = 0
ParkingSystem.prototype.addCar = function(carType) {
        if (carType==1) {
        if (this.big>0) {
            this.big--
            return true
        }
    }
    else if (carType==2) {
        if (this.med>0) {
            this.med--
            return true
        }
    }
    else if (carType==3) {
        if (this.small>0) {
            this.small--
            return true
        }
    }
    return false
        
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */