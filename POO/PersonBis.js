class Person{
    constructor(peso, altura){

        this.name
        this.peso = peso
        this.altura = altura
        this.edad
        this.sexo
        this.nacionalidad
        this.yearOfBirth
        this.hobbies = []

    }
    calcularIMC(){
        let IMC = (this.peso / (this.altura * this.altura) * 10000);

        IMC = Math.round(IMC);    
        return IMC;    
    }
    
    calcularEdad(currentYear){

        return currentYear - this.dateOfBirth
    }
    
    printAll(){

        return `Mi nombre es - ${this.nombre} \nMi peso es ${this.peso} \nMi altura es - ${this.altura} \nMi edad es - ${this.edad} \nMi sexo es - ${this.sexo}
Soy - ${this.nacionalidad} \nNaci en - ${this.dateOfBirth} 
Y mis hobbies son - ${this.hobbies}`
    }

    printHobbies(){

        return this.hobbies
    }    
}

module.exports = {Person}