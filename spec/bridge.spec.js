const RoadBridge = require('../src/bridge.js')

describe('bridge', () => {
    let bridge

    beforeEach(() => {
        bridge = new RoadBridge();
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
    it('making sure the counter doesnt not increase when cars on the bridge are at capacity', () => {
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
        const expected = 0
        // execute
        bridge.recordedCars()
        let result = bridge.reducedCars()
        // verify
        expect(result).toEqual(expected)
    })
    //Q4
    it('Be able to decrease the capacity on the bridge when it is super windy', () => {
        // set up 
        const expected = 'error'
        // execute
        bridge.changeCapacity(1)
        bridge.recordedCars()
        const result = bridge.recordedCars()
        // verify
        expect(result).toEqual(expected)
    })
    it('Close the bridge completely, if an accident occurs', () => {
        // set up 
        const expected = 'ACCIDENT - bridge is closed'
        // execute
        bridge.closedBridge()
        let result = bridge.recordedCars()
        // verify
        expect(result).toEqual(expected)
    })
    it('When the bridge is closed, cars can still move off', () => {
        // set up 
        const expected = 0
        // execute
        bridge.closedBridge()
        let result = bridge.reducedCars()
        // verify
        expect(result).toEqual(expected)
    })
    //Q5
    it('Reopen the bridge when it is closed.', () => {
        // set up 
        const expectedError = 'ACCIDENT - bridge is closed'
        // execute
        bridge.closedBridge()
        let errorResult = bridge.recordedCars()
        bridge.openBridge()
        let result = bridge.recordedCars()
        // verify
        expect(errorResult).toEqual(expectedError)
        expect(result).toEqual(undefined)
    })
})