const { Diagramas } = require('../models');

(async () => {
    const resultado = await Diagramas.findAll();
    console.log(resultado);
})();