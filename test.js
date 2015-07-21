var should = require("chai").should()

describe('Tests', function() {
    it('Truthiness', function () {
      	true.should.equal(true);

    });
});

describe('Array', function () {
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