var path = require('path')
var should = require("chai").should()
var Animal = require(path.join(process.cwd() + '/Animal'));

describe('Tests', function() {
    it('Truthiness', function () {
      	true.should.equal(true);
    });
});

describe('Animal', function () {
	describe('constructor', function () {
		it('should return an animal object', function () {
			var animal = new Animal();


			animal.should.be.an('object');
			animal.should.be.an.instanceOf(Animal);
		});
	});
});



describe('Array', function () {
	describe('#filter()', function () {
		it('should return an array of items that return truthy in the inn fn', function () {
			var array = [1,2,3,4,5]

			var output = array.filter(function (item) {
				return item % 2;
			})

			output.should.eql([1,3,5])
		});
	});


	describe('#map()', function () {
		it('should createa  new array with a return value of the inner function', function (){
			var array = [1,2,3,4,5];

			var output = array.map(function (item) {
				return item * item;
			});

			output.should.eql([1,4,9,16,25])

		});

		it('should keep the same length', function () {
			var array = [1,2,3,4,5];

			var arrayLength = array.map(function (item) {
				return false;
			}).length;

			arrayLength.should.equal(array.length);
		});

		it('should not mutate the original array', function () {

			var array = [1,2,3,4,5]

			array.map(function() {
				return false
			});

			array.should.eql([1,2,3,4,5])
			
		})
	});
});