function volverInicio(){
    document.getElementById("crearEstudiante").style.display = "none";
    document.getElementById("verEstudiante").style.display = "none";
    document.getElementById("crearDocente").style.display = "none";
    document.getElementById("verDocente").style.display = "none";
    document.getElementById("verCursos").style.display = "none";

    document.getElementById("botonVolver").style.display = "none";

    document.querySelectorAll(".botonesPrincipales").forEach(function(boton){
        boton.style.display = "inline-block";
    });

    document.getElementById("botonVolver").style.display = "none";
}

function display(){
    document.getElementById("crearEstudiante").style.display = "none";
    document.getElementById("verEstudiante").style.display = "none";
    document.getElementById("crearDocente").style.display = "none";
    document.getElementById("verDocente").style.display = "none";
    document.getElementById("verCursos").style.display = "none";
}

function crearEstudiante(){
    document.getElementById("crearEstudiante").style.display = "block";
    document.getElementById("verEstudiante").style.display = "none";
    document.getElementById("crearDocente").style.display = "none";
    document.getElementById("verDocente").style.display = "none";
    document.getElementById("verCursos").style.display = "none";

    document.getElementById("botonVolver").style.display = "inline-block";

    document.querySelectorAll(".botonesPrincipales").forEach(function(boton){
        if (boton.id != "botonVolver") {
            boton.style.display = "none";
        }
    });
}

function verEstudiante(){
    document.getElementById("crearEstudiante").style.display = "none";
    document.getElementById("verEstudiante").style.display = "block";
    document.getElementById("crearDocente").style.display = "none";
    document.getElementById("verDocente").style.display = "none";
    document.getElementById("verCursos").style.display = "none";

    document.getElementById("botonVolver").style.display = "inline-block";

    document.getElementById("borrarTodoE").style.display = "inline-block";

    document.querySelectorAll(".botonesPrincipales").forEach(function(boton){
        if (boton.id != "botonVolver") {
            boton.style.display = "none";
        }
    });
}

function crearDocente(){
    document.getElementById("crearEstudiante").style.display = "none";
    document.getElementById("verEstudiante").style.display = "none";
    document.getElementById("crearDocente").style.display = "block";
    document.getElementById("verDocente").style.display = "none";
    document.getElementById("verCursos").style.display = "none";

    document.getElementById("botonVolver").style.display = "inline-block";

    document.querySelectorAll(".botonesPrincipales").forEach(function(boton){
        if (boton.id != "botonVolver") {
            boton.style.display = "none";
        }
    });
}

function verDocente(){
    document.getElementById("crearEstudiante").style.display = "none";
    document.getElementById("verEstudiante").style.display = "none";
    document.getElementById("crearDocente").style.display = "none";
    document.getElementById("verDocente").style.display = "block";
    document.getElementById("verCursos").style.display = "none";

    document.getElementById("botonVolver").style.display = "inline-block";

    document.getElementById("borrarTodoD").style.display = "inline-block";

    document.querySelectorAll(".botonesPrincipales").forEach(function(boton){
        if (boton.id != "botonVolver") {
            boton.style.display = "none";
        }
    });
}

function verCursos(){
    document.getElementById("crearEstudiante").style.display = "none";
    document.getElementById("verEstudiante").style.display = "none";
    document.getElementById("crearDocente").style.display = "none";
    document.getElementById("verDocente").style.display = "none";
    document.getElementById("verCursos").style.display = "block";

    document.getElementById("botonVolver").style.display = "inline-block";

    document.querySelectorAll(".botonesPrincipales").forEach(function(boton){
        if (boton.id != "botonVolver") {
            boton.style.display = "none";
        }
    });

    document.getElementById("verCursos").innerHTML = `
        <select id="cursoFiltro">
            <option value="">Curso</option>
            <option value="1ro">1ro</option>
            <option value="2do">2do</option>
            <option value="3ro">3ro</option>
            <option value="4to">4to</option>
            <option value="5to">5to</option>
            <option value="6to">6to</option>
            <option value="7mo">7mo</option>
        </select>

        <button class="botones" onclick="filtrarCurso()">FILTRAR</button>

        <div id="resultadoCursos"></div>
    `;
}








//Estudiante
const nombreEST_input = document.getElementById("nombreEST") 
const edad_input = document.getElementById("edad")
const curso_input = document.getElementById("curso")
const nota_input = document.getElementById("nota");
const materia_input = document.getElementById("materia");

const div_ultimoEstudiante = document.getElementById("ultimoEstudiante");

const div_resultadoEstudiante = document.getElementById("resultadoEstudiante")



let lista_E = JSON.parse(localStorage.getItem('lista_E')) || [];



function guardarEstudiante(){
    const estudiante = {
        'nombreEST': nombreEST_input.value, 
        'edad': edad_input.value, 
        'curso': curso_input.value, 
        'notas': [nota_input.value],
        'materias': [materia_input.value]
    }

    lista_E.push(estudiante);
    localStorage.setItem('lista_E', JSON.stringify(lista_E));
    mostrarListaEstudiante(lista_E);

    div_ultimoEstudiante.innerHTML =
        "<h3>Último estudiante creado:</h3>" +
        "<p>Nombre: " + estudiante.nombreEST + "</p>" +
        "<p>Edad: " + estudiante.edad + "</p>" +
        "<p>Curso: " + estudiante.curso + "</p>" +
        "<p>Nota: " + estudiante.notas + "</p>" +
        "<p>Materia: " + estudiante.materias + "</p>";
}



function borrarEstudiante() {
    nombreEST_input.value = "";
    edad_input.value = "";
    curso_input.value = "";
    nota_input.value = "";
    materia_input.value = "";
}



function mostrarListaEstudiante(lista) {
    div_resultadoEstudiante.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {

        let estudiante = lista[i];

        div_resultadoEstudiante.innerHTML += "<h6>---------------- ID " + i + " ----------------</h6>";
        div_resultadoEstudiante.innerHTML += "<h2>Nombre: " + estudiante.nombreEST + "</h2>";
        div_resultadoEstudiante.innerHTML += "<h3>Edad: " + estudiante.edad + "</h3>";
        div_resultadoEstudiante.innerHTML += "<h3>Curso: " + estudiante.curso + "</h3>";
        div_resultadoEstudiante.innerHTML += "<h3>Nota: " + estudiante.notas + "</h3>";
        div_resultadoEstudiante.innerHTML += "<h3>Materia: " + estudiante.materias + "</h3>";
    }
}



function borrarTodosEstudiantes() {
    lista_E = [];
    localStorage.removeItem("lista_E");
    div_resultadoEstudiante.innerHTML = "";

    document.getElementById("borrarTodoE").style.display = "none";
}





//Docente
const nombreDOC_input = document.getElementById("nombreDOC") 
const cursoDOC_input = document.getElementById("cursoDOC")
const especialidad_input = document.getElementById("especialidad")

const div_ultimoDocente = document.getElementById("ultimoDocente");

const div_resultadoDocente = document.getElementById("resultadoDocente")



let lista_D = JSON.parse(localStorage.getItem('lista_D')) || [];




function guardarDocente(){
    const docente = {
        'nombreDOC': nombreDOC_input.value, 
        'cursoDOC': cursoDOC_input.value, 
        'especialidad': especialidad_input.value 
    }

    lista_D.push(docente)
    localStorage.setItem('lista_D', JSON.stringify(lista_D));
    mostrarListaDocente(lista_D)

    div_ultimoDocente.innerHTML =
        "<h3>Último docente creado:</h3>" +
        "<p>Nombre: " + docente.nombreDOC + "</p>" +
        "<p>Curso: " + docente.cursoDOC + "</p>" +
        "<p>Especialidad: " + docente.especialidad + "</p>"
}



function borrarDocente() {
    nombreDOC_input.value = "";
    cursoDOC_input.value = "";
    especialidad_input.value = "";
}



function mostrarListaDocente(lista) {
    div_resultadoDocente.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {

        let docente = lista[i];

        div_resultadoDocente.innerHTML += "<h6>---------------- ID " + i + " ----------------</h6>";
        div_resultadoDocente.innerHTML += "<h2>Nombre: " + docente.nombreDOC + "</h2>";
        div_resultadoDocente.innerHTML += "<h3>Curso: " + docente.cursoDOC + "</h3>";
        div_resultadoDocente.innerHTML += "<h3>Especialidad: " + docente.especialidad + "</h3>";
    }
}



function borrarTodosDocentes() {
    lista_D = [];
    localStorage.removeItem("lista_D");
    div_resultadoDocente.innerHTML = "";

    document.getElementById("borrarTodoD").style.display = "none";
}





//Cursos
let cursoSeleccionado = "";

function filtrarCurso(){
    cursoSeleccionado = document.getElementById("cursoFiltro").value;

    if (cursoSeleccionado == "") {
        alert("Seleccioná un curso");
        return;
    }

    let resultado = document.getElementById("resultadoCursos");

    resultado.innerHTML = `
        <h2>Curso seleccionado: ${cursoSeleccionado}</h2>

        <div id="contenedorDocentes">
            <h2>DOCENTES</h2>
        </div>

        <div id="contenedorEstudiantes">
            <h2>ESTUDIANTES</h2>
        </div>
    `;

    let contenedorDocentes = document.getElementById("contenedorDocentes");
    let contenedorEstudiantes = document.getElementById("contenedorEstudiantes");

    let hayDocentes = false;
    let hayEstudiantes = false;

    //docentes
    for (let i = 0; i < lista_D.length; i++) {

        let docente = lista_D[i];

        if (docente.cursoDOC == cursoSeleccionado) {

            hayDocentes = true;

            contenedorDocentes.innerHTML +=
                "<h3>Nombre: " + docente.nombreDOC + "</h3>" +
                "<p>Curso: " + docente.cursoDOC + "</p>" +
                "<p>Especialidad: " + docente.especialidad + "</p>" +
                "<hr>";
        }
    }

    if (hayDocentes == false) {
        contenedorDocentes.innerHTML +=
            "<p>No hay docentes en este curso.</p>";
    }


    //estudiantes
    for (let i = 0; i < lista_E.length; i++) {

        let estudiante = lista_E[i];

        if (estudiante.curso == cursoSeleccionado) {

            hayEstudiantes = true;

            contenedorEstudiantes.innerHTML +=
                "<h3>Nombre: " + estudiante.nombreEST + "</h3>" +
                "<p>Edad: " + estudiante.edad + "</p>" +
                "<p>Curso: " + estudiante.curso + "</p>" +
                "<p>Nota: " + estudiante.notas + "</p>" +
                "<p>Materia: " + estudiante.materias + "</p>" +
                "<hr>";
        }
    }

    if (hayEstudiantes == false) {
        contenedorEstudiantes.innerHTML +=
            "<p>No hay estudiantes en este curso.</p>";
    }
}