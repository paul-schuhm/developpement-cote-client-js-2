//Exercice 3

class User{
    constructor(name, age, nbPosts){
        this.name = name;
        this.age = age;
        this.nbPosts = nbPosts;
    }
}

const users = [
    new User('Jane', 12, 12),
    new User('John', 28, 0),
    new User('Derek', 18, 3),
    new User('Andrea', 35, 6),
];

//1ere: En utilisant filter, map, reduce.

//Une première manière de faire, sans ces méthodes.
//Faire une boucle for
// const found = [];
// for(let user of users){
//     //Filtre : si nom commence par 'J' ou 'j'
//     if(user.name.charAt(0).toUpperCase() === 'J'){
//         found.push(user)
//     }
// }

//Approche avec filter, sans états
//Déclarative: on écrit une fonction qui est passée à .filter
const found = users.filter(function (user){
    //Retourne vrai si user passe le filtre, Faux sinon
    return user.name.charAt(0).toUpperCase() === 'J';
});



console.log(found)