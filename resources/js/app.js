require('./bootstrap');

//require jquery
global.$ = global.jQuery = require('jquery');

import { createApp, defineComponent  } from "vue";

import router from './router'
import CompaniesIndex from './components/companies/CompaniesIndex'
import CompaniesCreate from './components/companies/CompaniesCreate'
import CompaniesEdit from './components/companies/CompaniesEdit'

import LaravelVuePagination from "laravel-vue-pagination";

const root = defineComponent({ 
    CompaniesIndex
    })

const app = createApp(root)

app.use(router)

app.component('CompaniesIndex', CompaniesIndex);
app.component('CompaniesCreate', CompaniesCreate);
app.component('CompaniesEdit', CompaniesEdit);

app.component('Pagination', LaravelVuePagination);


app.mount('#app')