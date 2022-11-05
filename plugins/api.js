import Vue from 'vue'
import { Api } from '../classes/Api'

export default ({ app }, inject) => {
    inject('api', Vue.observable(new Api(app.store)))
}
