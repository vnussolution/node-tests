const expect = require('expect');
const utils = require('./utils');

describe('UTILS', () => {
    describe('#add', () => {
        it('should add 2 numbers', () => {
            var res = utils.add(33, 44);
            expect(res).toBe(77).toBeA('number');
        });

        it('should async add 2 numbers', (done) => {
            utils.asyncAdd(1, 2, (sum) => {
                expect(sum).toBe(3).toBeA('number');
                done();
            });
        });

    });

    describe('#square', () => {
        it('should square a numbers', () => {
            var res = utils.square(4);
            expect(res).toBe(16).toBeA('number');

        });

        it('should async square a number', (done) => {
            utils.asyncSquare(2, (square) => {
                expect(square).toBe(4).toBeA('number');
                done();
            });
        });
    });

    describe('#misc', () => {
        it('should verify last and first names are set', () => {
            var user = { age: 24 };
            var fullname = 'frank truc';
            var res = utils.setName(user, fullname);
            expect(res).toInclude({ firstName: 'frank', lastName: 'truc' });
        });

        it('should expect some values', () => {
            // expect(12).toNotBe(12);
            // expect({name:'andrew'}).toNotEqual({name:'Andrew'});
            // expect([1,2,3,4]).toExclude([1]);
            expect({ name: 'andrew', age: 23, location: 'california' }).toExclude({ age: 22 });
        });
    });
});


