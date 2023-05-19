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

añadir.addEventListener('change', (e) => {
    e.preventDefault();
    let valorOption = añadir.value;

    switch (valorOption) {
        case "sedes":
            sedesSection.style.display = "block";
            primerPaso.style.display = "none";
            break;
        case "niveles":
            nivelesSection.style.display = "block";
            primerPaso.style.display = "none";
            break;
        case "tecnologias":
            tecnologiasSection.style.display = "block";
            primerPaso.style.display = "none";
            break;
        case "teams":
            teamsSection.style.display = "block";
            primerPaso.style.display = "none";
            break;
        case "roadMap":
            roadMapSection.style.display = "block";
            primerPaso.style.display = "none";
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
    e.preventDefault();
    contactoCampers.style.display = "none";
    campusCampers.style.display = "block";
})
previous1.addEventListener("click", (e) => {
    e.preventDefault();
    contactoCampers.style.display = "none";
    primerPaso.style.display = "block";
})
//Botón primera seccion campers
//Botón segunda sección campers
next2.addEventListener("click", (e) => {
    e.preventDefault();
    campusCampers.style.display = "none";
    nivelesCampers.style.display = "block";
})
previous2.addEventListener("click", (e) => {
    e.preventDefault();
    campusCampers.style.display = "none";
    contactoCampers.style.display = "block";
});


