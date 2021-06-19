const axios = require('axios');
module.exports = app => {
    const iniciarChamadas = async function(parametros) {
        let aux = parametros.PossuiNumero ? parametros.Numero : 0
        let payload = {cep: parametros.CEP,numero: aux};
        let res = await axios.post('https://api-bandalarga.wooza.com.br/api/busca', payload);
        let data = res.data;
        var count = Object.keys(data).length
        for (var i = 0; i < count; i++) {
            console.log(i)
            const obj = {
	        userId: parametros.id,
	        OperadoraId: data[i].idOperadora,
	        imgOperadora: data[i].logoOperadora,
	        Velocidade: data[i].download ? data[i].download : data[i].nome,
	        Tipo: 'Fibra',
	        Descricao: data[i].nome,
	        Valor: data[i].mensalidade
            }
            app.db('buscas')
                .insert(obj)
                .then(() => {
                    console.log('insert1')
                })
                .catch(() => {
                    console.log('erro1')
                })
                console.log(obj)
            }
            
    }
    return { iniciarChamadas}
}