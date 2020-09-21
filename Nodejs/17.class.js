class Human {
	constructor(){
		this._name = 'park'
		this._age = 35
	}

	getName(){
		return this._name
	}
	setName(name){
		this._name = name
	}
	getAge(){
		return this._age
	}
	setAge(age){
		this._age = age
	}
	getInfo(){
		return `I am ${this._name} and ${this._age} years old`
	}

}


const park = new Human()

park.setName('park beom yong')
park.setAge(36)

console.log(park.getInfo())
