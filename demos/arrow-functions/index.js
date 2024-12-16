"use strict";

const btn_fonction_classique = document.getElementById(
  "btn_fonction_classique"
);
const btn_fonction_flechee = document.getElementById("btn_fonction_flechee");

btn_fonction_classique.addEventListener("click", function (e) {
  console.log("Fonction classique");
  console.log(e);
  //this fait référence à l'élément bouton car elle
  //y est 'attachée comme une méthode'
  console.log(this);
  console.log(this === e.target);
});

btn_fonction_flechee.addEventListener("click", (e) => {
  console.log("Fonction fléchée");
  console.log(e);
  //La fonction fléchée
  //prend la valeur du contexte parent, le contexte global
  console.log(this);
  //Pour accéder à l'élément, utiliser e.target
  console.log(e.target);
  console.log(this === e.target);
});
