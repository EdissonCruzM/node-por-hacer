const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    default: true,
    alias: 'c'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemnto por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}