const cursos = require('./cursos');
const fs = require('fs');

const mostrarCurso = (curso) => {
    console.log(
        `
        Nombre : ${curso.nombre}
        Duracion: ${curso.duracion}
        Valor: ${curso.valor}
        _id: ${curso._id}

        ---------------------------`
    )
}

const setDelay = (item, count) => setTimeout(mostrarCurso, count, item);

const listarCursos = () => {
    console.log( '----Cursos disponibles -----------')
    cursos.map((curso, key) => setDelay(curso, key*2000));
}
const findCourse = (id) => cursos.find(curso => curso._id === id)

const register = (curso, nombre, cedula, cb) => {
    const fileDescription = 
    `
    nombre: ${nombre}
    cedula: ${cedula}
    curso:  nombre:  ${curso.nombre}
            Valor:   ${curso.valor}
            duracion:${curso.duracion} dias
            id:      ${curso._id}
    `
    fs.writeFile(`./Estudiantes/${nombre}_${curso.nombre}.txt`, fileDescription,(err) => {
        if(err){
            cb('parece que hay un error con la creacion el archivo')
        }
        cb(`
            ----------Matricula Realizada con exito--------
            ${fileDescription}
        `)
    })
}

const matricularEstudiante = (data, cb) => {
    const curso = findCourse(data.courseId);
    if(curso){
        cb('---- Matriculando....')
         return register(curso, data.nombre,data.cedula, cb);
    }
    cb('----- El curso no ha sido encontrado - Ingresa un curso Valido----')
     return listarCursos();
}

module.exports = {
    listarCursos,
    matricularEstudiante,
}