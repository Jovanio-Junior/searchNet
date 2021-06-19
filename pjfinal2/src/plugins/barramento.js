import Vue from 'vue'

export default new Vue({
    methods: {
        emitirBusca(busca) {
            this.$emit('buscar', busca)
        },
        monitorarBusca(callback) {
            this.$on('buscar', callback)
        }
    }
})