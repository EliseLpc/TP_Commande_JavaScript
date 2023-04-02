window.onload = function () {
  let nbLigne = 2;
  //function getAllUrlParams() {
  function getUrlParameter(parameter) {
    parameter = parameter.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?|&]" + parameter.toLowerCase() + "=([^&#]*)");
    var results = regex.exec(
      "?" + document.location.href.toLowerCase().split("?")[1]
    );
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  // Utilisation de la fonction getUrlParameter() :
  // Exemple : récupération du paramètre "nom" :
  // let nom = getUrlParameter("nom");

  let recupNom = document.getElementById("nom");
  let recupPrenom = document.getElementById("prenom");
  let recupMail = document.getElementById("mail");
  let recupAdresse = document.getElementById("adresse");
  let recupVille = document.getElementById("ville");
  let recupcodePostal = document.getElementById("codepostal");

  recupNom.innerText = "Nom : " + getUrlParameter("nom");
  recupPrenom.innerText = "Prénom : " + getUrlParameter("prenom");
  recupMail.innerText = "Email: " + getUrlParameter("mail");
  recupAdresse.innerText = "Adresse : " + getUrlParameter("adresse");
  recupVille.innerText = "Ville : " + getUrlParameter("ville");
  recupcodePostal.innerText = "CodePostal : " + getUrlParameter("codepostal");

  ///////////////////////////////////////////////
  ////////////////////////////////////////////////

  // recup DOM:
  // recup input Référence :
  let inputRef1 = document.getElementById("ref1");
  console.log(inputRef1);
  // recup input Prix unitaire :
  let inputPrixUnit1 = document.getElementById("prixUnitaire1");
  let inputRef2 = document.getElementById("ref2");
  let inputPrixUnit2 = document.getElementById("prixUnitaire2");
  // recup input (prix total de la ligne 1):
  let inputPrixTotalL1 = document.getElementById("prix1");
  let inputQuantite1 = document.getElementById("quantite1");
  let inputQuantite2 = document.getElementById("quantite2");
  let inputPrixTotalL2 = document.getElementById("prix2");
  let selectDesign1 = document.getElementById("designation1");
  let selectDesign2 = document.getElementById("designation2");
  let inputTotal = document.getElementById("total");
  // let bouton1 = document.getElementById("sup1");
  // let bouton2 = document.getElementById("sup2");

  //////////////////////////////////////////////////////////////////////

  const listeLivre = [
    {
      ref: "",
      nom: "Choisir un livre",
      prix: "",
    },
    {
      ref: "lol01",
      nom: "Le grand livre de JavaScript",
      prix: "15",
    },
    {
      ref: "lol02",
      nom: "HTML encore plus vite",
      prix: "20",
    },
    {
      ref: "lol03",
      nom: "Windows NT",
      prix: "25",
    },
    {
      ref: "lol04",
      nom: "Le kit de Ressource technique de NT",
      prix: "30",
    },
    {
      ref: "lol05",
      nom: "Formation Java",
      prix: "35",
    },
    {
      ref: "lol06",
      nom: "Comment créer son site web",
      prix: "40",
    },
  ];

  console.log(listeLivre);

  // possibilité de ranger chaque élément des lignes dans des tableaux

  let designation = [];
  let refTable = [];
  let prixUnit = [];
  let prixTotLigne = [];
  let quant = [];
  let sup = [];

  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////

  selectDesign1.addEventListener("change", () => {
    //   création evenement sur le select, quand utilisateur selectionne un livre dans la liste :
    // afficher ref et prix unitaire:
    inputRef1.value = listeLivre[selectDesign1.selectedIndex].ref;
    inputPrixUnit1.value = listeLivre[selectDesign1.selectedIndex].prix;
    // création autre evenement :
    // j'imbrique un event dans un autre event car il y a un lien entre les deux
    // l'utilisateur selectionne un livre puis saisi une quantité pour obtenir les totaux
    // création evenement 'input', quand l'utilisateur saisi une quantité:
    inputQuantite1.addEventListener("input", () => {
      // si la valeur saisi est sup à 0 :
      if (inputQuantite1.value > 0) {
        // la valeur du prix total de la ligne 1 sera égale à :
        // la valeur de la quantié saisi * la valeur du prix unitaire :
        inputPrixTotalL1.value = inputQuantite1.value * inputPrixUnit1.value;
        // pour l'input : total de la commande
        // j'additionne les prix totaux des 2 lignes :
        // pour additionner 2 var : Number() + Numner()
        inputTotal.value =
          Number(inputPrixTotalL1.value) + Number(inputPrixTotalL2.value);
      }
    });
  });

  selectDesign2.addEventListener("change", () => {
    //   création evenement sur le select, quand utilisateur selectionne un livre :
    // afficher ref et prix unitaire:
    inputRef2.value = listeLivre[selectDesign2.selectedIndex].ref;
    inputPrixUnit2.value = listeLivre[selectDesign2.selectedIndex].prix;

    inputQuantite2.addEventListener("input", () => {
      if (inputQuantite2.value > 0) {
        inputPrixTotalL2.value = inputQuantite2.value * inputPrixUnit2.value;
        inputTotal.value =
          Number(inputPrixTotalL1.value) + Number(inputPrixTotalL2.value);
      }
    });
  });

  ///////////////////////////////////////////////////////////////

  /* foreach : parcours tout le tableau listelivre
    // et range chq cellule de ce tableau dans le paramètre élément.*/

  listeLivre.forEach((element) => {
    // création balise option pour le select 1 :
    let optionSelect = document.createElement("option");
    // j'injecte le text
    optionSelect.innerText = element.nom;
    // j'apparente
    selectDesign1.appendChild(optionSelect);
  });

  // pour le select 2, ligne 2:
  listeLivre.forEach((element) => {
    let optionSelect2 = document.createElement("option");
    optionSelect2.innerText = element.nom;
    selectDesign2.appendChild(optionSelect2);
  });
};

// acces au nom d'un élément : element.nom
// acces à la ref d'un élément : element.ref

// Pour la suppression, l'utilisation de la fonction javascript eval pourra être utile
// eval('ligne' + index)
// Cette fonction permet d'utiliser des noms de variables dynamiques

///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/*CODE PAS BON :
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


   // création Class Livre:
  //
  class Livre {
    #libelle;
    #reference;
    #prixUnitaire;

    constructor(libelle, reference, prixUnitaire) {
      this.#libelle = libelle;
      this.#reference = reference;
      this.#prixUnitaire = prixUnitaire;
    }

    // get (pour lire)
    getLibelle() {
      return this.#libelle;
    }
    getReference() {
      return this.#reference;
    }
    getPrixUnitaire() {
      return this.#prixUnitaire;
    }

    //  set (pour écrire):
    setLibelle(libelle) {
      this.#libelle = libelle;
    }

    setReference(reference) {
      this.#reference = reference;
    }
    setPrixUnitaire(prixUnitaire) {
      this.#prixUnitaire = prixUnitaire;
    }
  }

  // création instance/objet :
  let livre = new Livre("HTML", "1007", "25");
  console.log(livre);


  let designation = [
    "Choisir un livre",
    "Le grand livre de JavaScript",
    "HTML encore plus vite",
    "Windows NT",
    "Le kit de Ressource technique de NT",
    "Formation Java",
    "Comment créer son site web",
  ];
  console.log(designation);

  let refTable = ["", "lol01", "lol02", "lol03", "lol04", "lol05", "lol06"];

  let prixUnit = ["", "15", "20", "25", "30", "35", "40"];

/*

 selectDesign1.addEventListener("change", () => {
    //   création evenement sur le select, quand utilisateur selectionne un livre :
    inputRef1 = designation[selectDesign1.selectedIndex].getReference();
    inputPrixUnit1 = designation[selectDesign1.selectedIndex].getPrixUnitaire();
  });

  for (let i = 0; i < designation.length; i++) {
    libel = document.createElement("option");
    designation[i] = new Livre(designation[i]);
    libel.value = designation[i].getLibelle();
    libel.innerText = designation[i].getLibelle();
    console.log(libel);
    selectDesign1.appendChild(libel);
    console.log(selectDesign1);
  }

  for (let i = 0; i < designation.length; i++) {
    libel = document.createElement("option");
    libel.value = designation[i].getLibelle();
    libel.innerText = designation[i].getLibelle();
    console.log(libel);
    selectDesign2.appendChild(libel);
    console.log(selectDesign2);
  }

  for (let i = 0; i < refTable.length; i++) {
    reference = document.createElement("input");
    reference.value = refTable[i];
    reference.innerText = refTable[i];
    console.log(reference);
  }

  for (let i = 0; i < prixUnit.length; i++) {
    prixUnitaire = document.createElement("input");
    prixUnitaire.value = prixUnit[i];
    prixUnitaire.innerText = prixUnit[i];
    console.log(prixUnitaire);
  }:*/
