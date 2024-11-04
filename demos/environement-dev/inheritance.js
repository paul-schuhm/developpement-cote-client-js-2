console.log('Heritage')


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