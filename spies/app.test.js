const expect = require('expect');
const rewire = require('rewire'); // will help to rewire vars

// will load the app like require() and add __set__() & __get__() to the prototype
let app = rewire('./app');


describe('app', () => {

    let db = {
        // createSpy() returns a function that will be swapped for the real one
        saveUser: expect.createSpy()
    };

    // moccking the db object in app.js with the db spy
    app.__set__('db', db);


    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Toto', 45);
        expect(spy).toHaveBeenCalledWith('Toto', 45);
    });

    it('should call saveUser with a user object', () => {
        let email = 'toto@totomail.com';
        let password = '@To-TO';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password
        });
    });

})