
const argv = require('yargs');
const { inscribir, listar } = require('./config')
const { listarCursos, matricularEstudiante } = require('./utils');


 const args = argv
                    .command(inscribir.id, inscribir.message,inscribir.constraints)
                    .command(listar.id, listar.message,listar.constraints)
                    .help()
                    .argv;

const comando = args._[0];
switch (comando) {
    case 'listar':
        return listarCursos();
    case 'inscribir':
        const data = {
            courseId: args.courseId,
            nombre: args.nombre,
            cedula: args.cedula
        }
        return matricularEstudiante(data, (message) => console.log(message));
    default:
        console.log('Ingresa un comando Valido listar o incribir ');
        return listarCursos();
}
