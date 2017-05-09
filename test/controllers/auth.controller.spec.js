var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;
var should = require('chai').should();
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();

describe('AuthController', function () {
    beforeEach(function settiingUpRoles() {
        console.log('running before each');
        authController.setRoles(['users']);
    })
    describe('isAuthorized', function () {
        it('it should return false if not authorized', function () {
            var isAuth = authController.isAuthorized('admin');
            expect(isAuth).to.be.false;
        })
        it('should return true if authorized', function () {
            authController.setRoles(['user', 'admin']);
            var isAuth = authController.isAuthorized('admin');
            isAuth.should.be.true;
        })
        it('should not allow a get if not authorized');
        it('should allow get if authorized');
    });
    describe('isAuthorizedAsync', function () {
        it('it should return false if not authorized', function (done) {
            this.timeout(2500);
            authController.isAuthorizedAsync('admin',
                function (isAuth) {
                    assert.equal(false, isAuth);
                    done();
                });
        })
    })
        describe('isAuthorizedPromise', function () {
        it('it should return false if not authorized', function () {
            return authController.isAuthorizedPromise('admin').should.eventually.be.false;
        })
    })

});