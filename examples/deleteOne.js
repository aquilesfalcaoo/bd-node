const { Diagramas } = require('../models');

(async () => {
    const resultado = await Diagramas.destroy({ where: { id:1 } });
    console.log(resultado);
})();