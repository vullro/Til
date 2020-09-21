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

class Employee extends Human {

}

const park = new Employee()
	
console.log(park.getInfo())
