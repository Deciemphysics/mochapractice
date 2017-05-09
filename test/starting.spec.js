var assert = require('assert'); // What is an assert? How do they pass or fail?

/*



*/
describe('Basic Mocha Test', function(){
    it('should deal with objects',function(){
        var obj = {name:'Ron', gender:'male'};
        var obj2 = {name:'Ron', gender:'male'};

        obj.should.deep.equal(obj2);
    });
    it.skip('should allow testing nulls', function(){
        var iAmNull = null;
        should.not.exist(iAmNull);
    });
});
