module.exports = {
    inscribir : {
        message: 'Matriculate en un curso, Ingresa id del curso, nombre y cedula',
        id: 'inscribir',
        constraints : {
            courseId: {
                demand: true,
                alias: 'id'
            },
            nombre: {
                demand: true,
                alias: 'n'
            },
            cedula: {
                demand: true,
                alias: 'cc'
            },
        }
    },
    listar: {
        message: 'Imprime en consola los cursos disponibles',
        id: 'listar',
        constraints : {
            courseId: {
                alias: 'id'
            }
        }
    }
}