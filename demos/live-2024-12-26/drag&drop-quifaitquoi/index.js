const speDevDropList = document.getElementById("dev");
const speDesignDropList = document.getElementById("design");
const speMarketingDropList = document.getElementById("marketing");
const studentsElement = document.getElementById("students");
const result = document.getElementById("drag_and_drop_result");

//Recupérer tous les elements draggable, enregistrer eventListener pour récupérer l'id
studentsElement.childNodes.forEach((student) => {
  student.addEventListener("dragstart", (ev) => {
    ev.dataTransfer.setData("text/plain", ev.target.dataset.spe);
    ev.dataTransfer.setData("id", ev.target.id);
  });
});

const dropLists = [speDesignDropList, speDevDropList, speMarketingDropList];

//Configurer les zones de dépôt

dropLists.forEach((dropList) => {
  //Mettre un indice visuel et prevenir le comportement par défaut
  //qui empeche le drag
  dropList.addEventListener("dragover", (ev) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  });

  dropList.addEventListener("drop", (ev) => {
    ev.preventDefault();
    var studentSpe = ev.dataTransfer.getData("text/plain");
    var id = ev.dataTransfer.getData("id");
    //Contrainte : un étudiant ne peut être placé que dans une 
    if (studentSpe === ev.target.id) {
      ev.target.appendChild(document.getElementById(id));
      result.innerText = "Bravo !";
    } else {
      result.innerText = "Raté !";
    }
  });
});
