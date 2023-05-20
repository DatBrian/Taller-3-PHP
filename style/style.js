//Primera Sección

//Agregar Trainer o camper
const tipoP = document.querySelector('#tipoP');
const contactoCampers = document.querySelector('.contactoCampers');
const primerPaso = document.querySelector(".primerPaso")
const contactoTrainers = document.querySelector('.contactoTrainers');

tipoP.addEventListener('change', (e) => {
    e.preventDefault();
    let valorOption = tipoP.value;

    (valorOption === "camper") ? (contactoCampers.style.display = "block", primerPaso.style.display = "none")
        : (contactoCampers.style.display = "block", primerPaso.style.display = "none");

});

//Añadir

const añadir = document.querySelector('#añadir');
const sedesSection = document.querySelector('.sedesSection');
const nivelesSection = document.querySelector('.nivelesSection');
const tecnologiasSection = document.querySelector('.tecnologiasSection');
const teamsSection = document.querySelector('.teamsSection');
const roadMapSection = document.querySelector('.roadMapSection');

//Mostrar y ocultar secciones

añadir.addEventListener('change', (e) => {
    e.preventDefault();
    let valorOption = añadir.value;

    switch (valorOption) {
        case "sedes":
            showSections(primerPaso, sedesSection);
            break;
        case "niveles":
            showSections(primerPaso, nivelesSection);
            break;
        case "tecnologias":
            showSections(primerPaso, tecnologiasSection);
            break;
        case "teams":
            showSections(primerPaso, teamsSection);
            break;
        case "roadMap":
            showSections(primerPaso, roadMapSection);
            break;
        default:
            break;
    }

});

//Botones de navegación
const next1 = document.querySelector('.next1');
const previous1 = document.querySelector('.previous1');

const next2 = document.querySelector('.next2');
const previous2 = document.querySelector('.previous2');

const enviar = document.querySelector('.enviar');
const previous3 = document.querySelector('.previous3');

//Botón primera sección campers
next1.addEventListener("click", (e) => {
    showSections(contactoCampers, campusCampers);
})
previous1.addEventListener("click", (e) => {
    showSections(contactoCampers, primerPaso);
})
//Botón primera seccion campers
//Botón segunda sección campers
next2.addEventListener("click", (e) => {
    showSections(campusCampers, nivelesCampers);
})
previous2.addEventListener("click", (e) => {
    showSections(campusCampers, contactoCampers);
});

//Funciones

function showSections(sec1, sec2) {
    sec1.style.display = "none";
    sec2.style.display = "block";
}


