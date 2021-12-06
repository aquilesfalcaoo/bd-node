const { Diagramas } = require('../models');

(async () => {
    const resultado = await Diagramas.create({ nome: 'fake name2', disciplina:'fake disciplina2' });
    console.log(resultado);
})();