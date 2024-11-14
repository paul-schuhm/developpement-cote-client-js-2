//Module qui gère les personnes

//Element HTML qui contient la liste des personnes gérées par l'application
const ulPersons = document.getElementById('persons');
//Formulaire pour ajouter une personne
const formAddPerson = document.getElementById('form_add_person');

//Traitement du formulaire pour ajouter une personne
formAddPerson.addEventListener('submit', (event) => {
    //Empêcher la soumission du formulaire via une requête HTTP
    event.preventDefault();
    //Récupérer les valeurs soumises via les inputs
    //Créer une nouvelle personne à partir des inputs
    //Attention, complexité: l'ordre des inputs compte ici !!!
    let p = new Person(
        formAddPerson[0].value,
        formAddPerson[1].value,
        formAddPerson[2].value,
    );
    addPerson(p);
});

//Cette classe est visibile et utilisable par les autres modules
export class Person {
    constructor(firstName = 'Jane', lastName = 'Doe', pseudo = 'jd') {
        this.firstName = firstName;
        this.lastName = lastName,
            this.pseudo = pseudo;
    }
}

//Fonction pour ajouter une personne à la liste
export function addPerson(person) {

    //Le pseudo doit être unique !

    //Mettre des règles de validation pour empêcher les autres
    //modules de faire n'importe quoi avec ma collection de personnes
    //C'est l'encapsulation.
    persons.push(person);
    render();
}

//Met à jour la liste des personnes sur l'interface/la page
function render(){

    ulPersons.innerHTML = '';

    //Map chaque personne à un élément li
    const lis = persons.map(person => {
        //Crée un élément li
        let li = document.createElement('li');
        //Ajouter les données au li
        li.innerText = `${person.firstName}, ${person.lastName}, ${person.pseudo}`;
        return li;
    });

    lis.forEach((li) => {  
        ulPersons.appendChild(li);
    });
}

//Liste de personnes
//Tout ce qui n'est pas exporté est privé au module.
const persons = [];