const { Diagramas } = require('../models');

(async () => {
    const resultado = await Diagramas.findOne({ where: { id: 2 } });
    console.log(resultado);
})();