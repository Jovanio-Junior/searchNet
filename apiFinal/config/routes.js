module.exports = app => {
    app.route('/resultado')
        .post(app.api.resultados.post)
    
    // app.route('/operadoras')
        .post(app.api.resultados.postoperadoras)
    
    app.route('/dados')
        .get(app.api.resultados.getDados)
    
    app.route('/busca')
        .get(app.api.resultados.getBuscas)
    
    app.route('/buscaid/:id')
        .get(app.api.resultados.getDisp)
}