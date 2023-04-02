//chargement du script après la page HTML
window.onload = function () {
  // recup DOM :
  let nom = document.getElementById("nom");
  let prenom = document.getElementById("prenom");
  let courriel = document.getElementById("courriel");
  let adresse = document.getElementById("adresse");
  let ville = document.getElementById("ville");
  let codePostal = document.getElementById("codePostal");
  let nomErr = document.getElementById("nomEr");
  console.log(nomErr);
  let prenomErr = document.getElementById("prenomEr");
  let courrielErr = document.getElementById("courrielEr");
  let adresseErr = document.getElementById("adresseEr");
  let codePostalErr = document.getElementById("codePostalEr");
  let villeErr = document.getElementById("villeEr");
  let boutonReset = document.getElementById("btnReset");
  let boutonValid = document.getElementById("valid");

  /////////////////////////////////////////////////////////////////////////////////////////////////

  // chaque champ est obligatoire, contrôle de chaque champ :
  function error(cadre, text) {
    cadre.style.border = "1px solid red";
    //  quanh .hidden= false le text, message d'erreur devient visible :
    text.hidden = false;
  }

  function annulError(cadre, text) {
    // je remets la bordure d'origine ( sans signalement d'erreur, donc en gris)
    cadre.style.border = "1px solid grey";
    // =true , la div qui contient l'hidden reste cachée
    // car il n'y a pas d'erreur, les champs saisis par l'utilisateur contiennent 3 caractéres minimum :
    text.hidden = true;
  }
  // création evenement avec bouton validation (envoyer) du formulaire :
  // quand l'utilisateur click sur le bouton envoyer :
  /* La méthode preventDefault() annule l'événement s'il est annulable,
    ce qui signifie que l'action par défaut qui appartient à l'événement ne se produira pas.
    exemple :En cliquant sur un bouton "Soumettre", l'empêcher de soumettre un formulaire
    En cliquant sur un lien, empêcher le lien de suivre l'URL*/

  boutonValid.addEventListener("click", (e) => {
    if (nom.value.length < 3) {
      // si valeur nom saisi inférieur à 3 caractères:
      // j'appelle fonction : error à se jouer
      // sinon j'appelle fonction annulError à se jouer :
      error(nom, nomErr);
      e.preventDefault();
    } else {
      annulError(nom, nomErr);
    }
    if (prenom.value.length < 3) {
      error(prenom, prenomErr);
      e.preventDefault();
    } else {
      annulError(prenom, prenomErr);
    }
    if (courriel.value.length < 3) {
      error(courriel, courrielErr);
      e.preventDefault();
    } else {
      annulError(courriel, courrielErr);
    }
    if (adresse.value.length < 3) {
      error(adresse, adresseErr);
      e.preventDefault();
    } else {
      annulError(adresse, adresseErr);
    }
    if (ville.value.length < 3) {
      error(ville, villeErr);
      e.preventDefault();
    } else {
      annulError(ville, villeErr);
    }
    if (codePostal.value.length < 3) {
      error(codePostal, codePostalErr);
      e.preventDefault();
    } else {
      annulError(codePostal, codePostalErr);
    }
  });

  /////////////////////////////////////////////////////////////

  nom.addEventListener("change", () => {
    if (nom.value.length >= 3) {
      // si valeur nom saisi sup à 3 caractères:
      // et que je change d'input (de "case" champ à saisir)
      // alors la bordure de mon input est sans "signalement" d' erreur
      // elle reste grise
      // sinon si erreur elle reste rouge
      nom.style.border = "1px solid grey";
      nomErr.hidden = true;
    } else {
      nom.style.border = "1px solid red";
    }
  });
  prenom.addEventListener("change", () => {
    if (prenom.value.length >= 3) {
      prenom.style.border = "1px solid grey";
      prenomErr.hidden = true;
    } else {
      prenom.style.border = "1px solid red";
    }
  });
  courriel.addEventListener("change", () => {
    if (courriel.value.length >= 3) {
      courriel.style.border = "1px solid grey";
      courrielErr.hidden = true;
    } else {
      courriel.style.border = "1px solid red";
    }
  });

  adresse.addEventListener("change", () => {
    if (adresse.value.length >= 3) {
      adresse.style.border = "1px solid grey";
      adresseErr.hidden = true;
    } else {
      adresse.style.border = "1px solid red";
    }
  });

  ville.addEventListener("change", () => {
    if (ville.value.length >= 3) {
      ville.style.border = "1px solid grey";
      villeErr.hidden = true;
    } else {
      ville.style.border = "1px solid red";
    }
  });

  codePostal.addEventListener("change", () => {
    if (codePostal.value.length >= 3) {
      codePostal.style.border = "1px solid grey";
      codePostalErr.hidden = true;
    } else {
      codePostal.style.border = "1px solid red";
    }
  });

  //////////////////////////////////////////////////////////////////////////////////////////////
  // Class Personne :
  class Personne {
    #nom;
    #prenom;
    #courriel;
    #adresse;
    #ville;
    #codePostal;

    constructor(nom, prenom, courriel, adresse, ville, codePostal) {
      this.#nom = nom;
      this.#prenom = prenom;
      this.#courriel = courriel;
      this.#adresse = adresse;
      this.#ville = ville;
      this.#codePostal = codePostal;
    }

    //   get (pour lire)
    getNom() {
      return this.#nom;
    }
    getPreom() {
      return this.#prenom;
    }
    getCourriel() {
      return this.#courriel;
    }
    getAdresse() {
      return this.#adresse;
    }
    getVille() {
      return this.#ville;
    }
    getCodePostal() {
      return this.#codePostal;
    }

    //   set (pour écrire):
    setNom(nom) {
      this.#nom = nom;
    }

    setPreom(prenom) {
      this.#prenom = prenom;
    }
    setCourriel(courriel) {
      this.#courriel = courriel;
    }
    setAdresse(adresse) {
      this.#adresse = adresse;
    }
    setVille(ville) {
      this.#ville = ville;
    }
    setCodePostal(codePostal) {
      this.#codePostal = codePostal;
    }
  }

  // création instance/objet :
  let personne = new Personne(
    "Le boiteux",
    "Alfred",
    "Alfred.leboiteux@gamil.com",
    "78 rue de paris",
    "Lyon",
    "69003"
  );
  console.log(personne);
};

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// En +:
// suppression de hidden (cacher le message dans le html)
// avec removeAttribute pour le rendre donc visible
// text.removeAttribute("hidden");
