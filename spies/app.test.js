const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

describe('App', () => {
    var db = { saveUser: expect.createSpy() };
    app.__set__('db', db);
    it('should call saveUser with user object', () => {
        var email = 'frank@frank.com';
        var password = '12345';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('frank', 21);
        expect(spy).toHaveBeenCalledWith('frank', 21);

    });



});


