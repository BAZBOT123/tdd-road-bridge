const Bridge = require('../src/bridge.js')

describe('bridge', () => {
    let bridge

    beforeEach(() => {
        bridge = new Bridge();
    })

    //Q1
    it('Starts with zero cars on bridge', () => {
        // set up 
        const expected = 0
        // execute
        let result = bridge.numCars()
        // verify
        expect(result).toEqual(expected)
    })
    //Q2
    it('Return error when cars on bridge reach capacity', () => {
        // set up 
        const expected = 'error'
        // execute
        bridge.recordedCars()
        bridge.recordedCars()
        let result = bridge.recordedCars()
        // verify
        expect(result).toEqual(expected)
    })
    it('testing: car move on bridge increases counter', () => {
        // set up 
        const expected = 2
        // execute
        bridge.recordedCars()
        bridge.recordedCars()
        let result = bridge.numCars()
        // verify
        expect(result).toEqual(expected)
    })
    it('making sure the counter never goes above capacity', () => {
        // set up 
        const expected = 2
        // execute
        bridge.recordedCars()
        bridge.recordedCars()
        bridge.recordedCars()
        let result = bridge.numCars()
        // verify
        expect(result).toEqual(expected)
    })
    //Q3
    it('Record when a car moves off the bridge', () => {
        // set up 
        const expected = 1
        // execute
        bridge.recordedCars()
        let result = bridge.reducedCars()
        // verify
        expect(result).toEqual(expected)
    })
    //Q4
    it('Be able to decrease the capacity on the bridge when it is super windy', () => {
        // set up 
        const expected = 1
        // execute
        bridge.recordedCars()
        let result = bridge.changeCapacity()
        // verify
        expect(result).toEqual(expected)
    })


})