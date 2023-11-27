function recupererCarte() {

    atkCarte1 = document.getElementById("atkCarte1").value;
    console.log("L'attaque de la carte 1 est " + atkCarte1 + ".");
    
    defCarte1 = document.getElementById("defCarte1").value;
    console.log("La defense de la carte 1 est " + defCarte1 + ".");

    atkCarte2 = document.getElementById("atkCarte2").value;
    console.log("L'attaque de la carte 2 est " + atkCarte2 + ".");

    defCarte2 = document.getElementById("defCarte2").value;
    console.log("La defense de la carte 2 est " + defCarte2 + ".");

    if (atkCarte1 > atkCarte2) {
        alert("La carte 1 gagne");
    } else if (atkCarte1 < atkCarte2) {
        alert("La carte 2 gagne");
    } else {
        alert("Egalite");
    }
}