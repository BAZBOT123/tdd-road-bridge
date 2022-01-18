class RoadBridge {

    constructor() {
        this.numOfCars = 0
        this.capacity = 2
        this.closed = false
    }


    numCars() {
        return this.numOfCars
    }

    recordedCars() {
        if (this.numOfCars === this.capacity) {
            return 'error'
        }
        if (this.closed === true) {
            return 'ACCIDENT - bridge is closed'
        }
        this.numOfCars++
    }
    reducedCars() {
        if (this.numOfCars === 0) {
            return this.numOfCars
        }
        return --this.numOfCars
    }
    changeCapacity(newCapacity) {
        this.capacity = newCapacity
        return this.capacity
    }
    closedBridge() {
        this.closed = true
    }
    openBridge() {
        this.closed = false
    }
}



module.exports = RoadBridge;