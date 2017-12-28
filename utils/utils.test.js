const expect = require('expect');
const utils = require('./utils');



describe('Utils test suite', () => {
    // '#add' = the add method
    describe('#add', () => {
        // test case
        it('should add two numbers', () => {
            let res = utils.add(12, 34);
            expect(res)
                .toBe(46, `******Expected 46 but got ${res} ******`)
                .toBeA('number');
        });


        // thz done param allows Mocha to know that it is a async test and to wait for callback to finish
        it('should async add two numbers', (done) => {
            utils.asyncAdd(45, 67, (sum) => {
                expect(sum).toBe(112).toBeA('number');
                done(); // necessary to tell Mocha that callback function is done executing
            })
        });

    });

    describe('#square', () => {

        it('should square a number', () => {
            let res = utils.square(12);
            expect(res)
                .toBe(144, `******Expected 144 but got ${res}******`)
                .toBeA('number');
        });


        it('should async square a number', (done) => {
            utils.asyncSquare(11, (square) => {
                expect(square)
                    .toBe(121, `******Expected 121 but got ${square}******`)
                    .toBeA('number');
                done();
            });
        });
    });

});

it('should check equality of arrays or object properties', () => {
    expect(['Timbuktu']).toEqual(['Timbuktu']);

    expect({
        city: 'Timbuktu'
    }).toEqual({
        city: 'Timbuktu'
    });

    expect({
        city: 'Timbuktu'
    }).toNotEqual({
        city: 'Luganda'
    });

});


it('should check inclusion/exclusion of arrays or object properties', () => {
    expect(['Timbuktu', 1, 2]).toInclude(1);

    expect({
        continent: 'Europe'
    }).toExclude({
        continent: 'Africa'
    });
});


it('should verify that the user has a first and lastname', () => {
    let user = {
        location: 'Dakar',
        age: 36
    };
    let res = utils.setName(user, 'Ibrahima Toure');

    expect(user).toEqual(res); // object are passed by reference
    expect(res).toInclude({
        fname: 'Ibrahima',
        lname: 'Toure'
    })
});