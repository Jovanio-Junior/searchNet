import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://vuejs-9f2a6-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'http://127.0.1.1:3001/'
        })
    }
})