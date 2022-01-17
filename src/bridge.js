class Bridge {

    constructor() {
        this.bridge = 0
    }


    numCars() {
        return this.bridge
    }

    recordedCars() {
        const capacity = 2
        if (this.bridge === capacity) {
            return 'error'
        }
        this.bridge++

    }
    reducedCars() {
        const capacity = 1
        if (this.bridge < capacity) {
            return this.bridge
        }
        return this.bridge--
    }

    changeCapacity() {
        const capacity = 1
        if (this.bridge === capacity) {
            return capacity
        }
        this.bridge
    }


}



module.exports = Bridge;