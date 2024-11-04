//Exercice 3

class User {
    constructor(name, age, nbPosts) {
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
let found = users.filter(function (user) {
    //Retourne vrai si user passe le filtre, Faux sinon
    return user.name.charAt(0).toUpperCase() === 'J';
});

//Filtre : age >= 18

const filterIsMajor = function (user) {
    return user.age >= 18;
}

//Retourner les users majeurs avec une nouvelle clef
//map : associer une nouvelle valeur à chaque élément
let selected = users
    .filter(filterIsMajor)
    .map(function (user) {
        user.selected = "yes";
        return user;
    });

//Reduce : transformer une collection à une valeur (ça peut être assez large)
//A utiliser avec parcimonie

//Calculer le nombre total de posts ?

//Version sans reduce
//total => accumulateur
// console.log(selected)

let total = 0;
for (user of selected) {
    total += user.nbPosts;
}

//Version avec reduce
//accumulateur : valeur dans laquelle on stocke le résultat
//de chaque itération
total = selected.reduce(function (acc, user) {
    //Comment modifier l'accumulateur
    acc += user.nbPosts;
    //Retourner l'accumulateur
    return acc;
}, 0);

//Question 5 : Les users dont le nom commence par la lettre D

const usersStartWithD = users.filter(function (user) {
    //Retourne vrai si user passe le filtre, Faux sinon
    return user.name.charAt(0).toUpperCase() === 'D';
});

//Un générateur de filtres
const by = function(letter){
    //Cette fonction est une "closure"
    //Retourne un filtre sur la lettre
    return function(user){
        return user.name.charAt(0).toLowerCase() === letter;
    }
}

// const filterByJ = filterByLetter('j');
// const filterByD = filterByLetter('d');

//input user (recupérée depuis l'exterieur)
const letter = 'a';

console.log(users.filter(by('p')))


// console.log(total)