// Galeria de fotos
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("imatgeModal");
    
    if (!modal) return; 

    const imatgeGran = document.getElementById("imatgeGran");
    const botoTancar = document.querySelector(".tancar");
    const imatgesGraella = document.querySelectorAll(".Graella_2x2 img");

    imatgesGraella.forEach(imatge => {
        imatge.addEventListener("click", function() {
            modal.style.display = "block";    
            imatgeGran.src = this.src;       
        });
    });

    botoTancar.addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Menu hamburguessa
const botonHamburguesa = document.querySelector('.menu-hamburguesa');
const nav = document.querySelector('nav');
if (botonHamburguesa && nav) {
    botonHamburguesa.addEventListener('click', () => {
        nav.classList.toggle('activo');
    });
}

// Missatge de benvinguda
document.addEventListener("DOMContentLoaded", () => {
    const modalBenvinguda = document.getElementById("modalBenvinguda");
    const botoTancarBenvinguda = document.querySelector(".tancar-benvinguda");

    if (modalBenvinguda) {
        
        if (!localStorage.getItem("vist")) {
            modalBenvinguda.style.display = "flex";
        }

        if (botoTancarBenvinguda) {
            botoTancarBenvinguda.onclick = function() {
                modalBenvinguda.style.display = "none";
                localStorage.setItem("vist", "si"); 
            };
        }
    }
});


// VALIDACIÓ DE REGISTRE DELS CAMPS
document.addEventListener("DOMContentLoaded", () => {
    console.log("1. El document ha carregat correctament. JS connectat!");
    
    const formulari = document.getElementById("formulariRegistre");
    console.log("2. Buscant el formulari... Resultat:", formulari ? "Trobat!" : "No trobat!");
    
    if (!formulari) return;

    const email = document.getElementById("email");
    const contrasenya = document.getElementById("contrasenya");
    const confirmarContrasenya = document.getElementById("confirmarContrasenya");

    let errorEmail = document.getElementById("errorEmail");
    let errorContrasenya = document.getElementById("errorContrasenya");

    if (!errorEmail) {
        errorEmail = document.createElement("small");
        errorEmail.id = "errorEmail";
        errorEmail.className = "error-msg";
        email.insertAdjacentElement("afterend", errorEmail);
    }

    if (!errorContrasenya) {
        errorContrasenya = document.createElement("small");
        errorContrasenya.id = "errorContrasenya";
        errorContrasenya.className = "error-msg";
        confirmarContrasenya.insertAdjacentElement("afterend", errorContrasenya);
    }

    const patroEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    formulari.addEventListener("submit", (e) => {
        console.log("3. S'ha clicat el botó de registre! Aturant l'enviament automàtic...");
        e.preventDefault();

        errorEmail.textContent = "";
        errorContrasenya.textContent = "";

        email.classList.remove("input-error");
        contrasenya.classList.remove("input-error");
        confirmarContrasenya.classList.remove("input-error");

        let valid = true;

        if (!patroEmail.test(email.value.trim())) {
            console.log("4a. Error detectat: El correu no és vàlid.");
            errorEmail.textContent = "Posa un correu vàlid, per exemple nom@domini.ext.";
            email.classList.add("input-error");
            valid = false;
        }

        console.log("--- Comprovant les contrasenyes ---");
        console.log("Contrasenya 1: [" + contrasenya.value + "]");
        console.log("Contrasenya 2: [" + confirmarContrasenya.value + "]");

        if (contrasenya.value !== confirmarContrasenya.value) {
            console.log("4b. Error detectat: Les contrasenyes NO coincideixen.");
            errorContrasenya.textContent = "Les contrasenyes no coincideixen.";
            contrasenya.classList.add("input-error");
            confirmarContrasenya.classList.add("input-error");
            valid = false;
        } else {
            console.log("4b. Èxit: Les contrasenyes coincideixen.");
        }

        if (valid) {
            console.log("5. Tot correcte! Enviant el formulari de veritat...");
            errorEmail.textContent = "";
            errorContrasenya.textContent = "";
            alert("Registre correcte!");
            formulari.submit();
        } else {
            console.log("6. Resum: El formulari té errors i es bloqueja l'enviament.");
        }
    });
});