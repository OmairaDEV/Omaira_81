    /** Analisis
    * Se tienen los siguientes datos de un estudiante:
    * Nombre, Calificacion numerica
    * Se desea conocer la calificacion en letras de cada estudiante, usando los datos
    * de las calificaciones numericos (Calificacion numerica) en forma de escala, en funcion de su nota final
    */

import Cl_IEstudiante from "./Cl_IEstudiante.js";
import Cl_Estudiante from "./Cl_Estudiante.js";
import Estudiante from "./Cl_Estudiante.js";

const estudiante = new Cl_IEstudiante();
const name = estudiante.readName();
const finalGrade = estudiante.readFinalGrade();
const report = estudiante.reportStudent(name, finalGrade);
document.getElementById("Salida").innerHTML = report;