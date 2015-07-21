module.exports = Cheer

function Cheer(name) {
	this.name = name
}

Cheer.prototype.hurrah = function () {
	var nameArray = this.name.toUpperCase().split('')
	var cheerString;
	var fullThing = []
	var dissallowedCharacters = ["!","@","#","$","%","^","&","*","(",")"]


	nameArray.forEach(function (elem){
		var firstStaticPart = "Give me "
		var secondDynamicPart;

		if (elem === " ") {

		} else if (elem === 'A' || elem === 'F' || elem === 'L'|| elem === 'M'|| elem === 'N'|| elem === 'O'|| elem === 'R'|| elem === 'S'|| elem === 'X') {
			secondDynamicPart = 'an '
			fullThing.push(firstStaticPart)
			fullThing.push(secondDynamicPart)
			fullThing.push(elem + '!' + '\n')
		} else {
			secondDynamicPart = 'a '
			fullThing.push(firstStaticPart)
			fullThing.push(secondDynamicPart)
			fullThing.push(elem + '!' + '\n')
		}


		cheerString = fullThing.join('')

	})

	console.log(cheerString)
	return cheerString
}