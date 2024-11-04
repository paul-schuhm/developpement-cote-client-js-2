console.log('Heritage')

//Faire de l'héritage (partage de code entre objets)

class Person {
    constructor(prenom, nom) {
        this.firstName = prenom;
        this.lastName = nom;
    }
}

//Friend hérite de Person
class Friend extends Person {
    constructor(prenom, nom, surnom) {
        super(prenom, nom)
        this.nickName = surnom
    }

    //Methode en plus
    askForHelp(){
        console.log('Help me please !')
    }
}

let friend = new Friend('John', 'Doe', 'Jojo');

//Classes
class Foo{
    constructor(){
        this.bar = 'bar'
    }

    //Enregistrer une méthode
    method(){
        //Faire référence à une donnée de l'objet
        return this.bar;
    }
}

let tableau = [1,2,3];
