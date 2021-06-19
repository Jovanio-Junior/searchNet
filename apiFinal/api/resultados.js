const { response } = require("express")


module.exports = app => {
    
    const getDados = (req, res) => {
        app.db('dados')
            .select()
            .then(data => res.json(data))
            .catch(err => res.status(500).send(err))
    }
    const getBuscas = (req, res) => {
        app.db('buscas')
            .select()
            .then(data => res.json(data))
            .catch(err => res.status(500).send(err))
    }

    const postoperadoras = (req, res) => {
        const data = { ...req.body }
        var count = Object.keys(data).length
        var i = 0
        for (i = 0; i < count; i++) {
            const aux = data[i]
            app.db('operadoras')
            .insert(aux)
                .then(() => {
                console.log('ok')
            })
                .catch(() => {
                console.log('erro')
            })
        }
        if (i == count) {
            res.status(204).send()
        } else {
            res.status(500).send()
        }
        
    }
    // metodos para teste ^^

    const post = async (req, res) => {
        const data = { ...req.body }
        
        if(data.flag) {
            delete data.flag
            // console.log("cheguei aquii")
            const asdd = await app.db('dados')
            .insert(data)
            .returning('id')
            .then((id) => {
                app.db('dados')
                .select()
                .where({ id: id[0] })
                .first()
                    .then(data => {
                    app.api.chamadas.iniciarChamadas(data)
                })
                console.log('post realizado')
                res.send({ id: id })
            })
                .catch(err => {
                    console.log('post não realizado')
                    res.status(500).send(err)
                })
            // 

            
        } else {
            return res.status(400).send('erro')
        }
    }

     const getDisp = async (req, res) => {
        await app.db('buscas')
            .select('imgOperadora', 'Velocidade', 'Tipo', 'Descricao', 'Valor', 'OperadoraId')
            .from('buscas')
            .where({
                userId: req.params.id
            })
            .then(response => {
                console.log('Consulta realiza')
                res.json(response)
            })
            .catch(() => {
                console.log('consulta não realizada')
            })
        
    }


    return { getDados, getBuscas , post, postoperadoras, getDisp}
}