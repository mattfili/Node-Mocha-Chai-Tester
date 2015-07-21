var should = require("chai").should()

describe('Tests', function() {
    it('Truthiness', function () {
      	true.should.equal(true);

    });
});

describe('Array', function () {
	describe('#map()', function () {
		it('should keep the same length', function () {
			var array = [1,2,3,4,5];

			var arrayLength = array.map(function (item) {
				return false;
			}).length;

			arrayLength.should.equal(array.length);
		})
	});
});