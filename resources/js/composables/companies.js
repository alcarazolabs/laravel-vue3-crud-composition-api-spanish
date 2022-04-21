import { ref } from 'vue';
import axios from "axios";

import { useRouter } from 'vue-router';

export default function useCompanies(){
    const errors = ref('')
    const router = useRouter()
    const companies = ref([])
    const company = ref([])

    /*
    - Sin paginación
    const getCompanies = async() => {
        let response = await axios.get('/api/companies')
        companies.value = response.data.data
    }*/

    
    const getCompanies = async(page) => {
        axios.get('/api/companies?page=' + page)
        .then(response => {
            companies.value = response.data.data
        })
       
    }

    const getCompany = async(id) => {
        let response = await axios.get('/api/companies/' + id)
        company.value = response.data.data
    }

    const storeCompany = async(data) => {
        errors.value = ''
        try{
            await axios.post('/api/companies', data)
            await router.push({name: 'companies.index'})
        }catch(e){
            if(e.response.status === 422){
                errors.value = e.response.data.errors
            }
            
        }
    }

    const updateCompany = async(id) => {
        errors.value = ''
        try{
            await axios.put('/api/companies/' + id, company.value)
            await router.push({name: 'companies.index'})
        }catch(e){
            if(e.response.status === 422){
                errors.value = e.response.data.errors
            }
            
        }
    }


    const destroyCompany = async (id) => {
        await axios.delete('api/companies/' + id)
    }


    return {
        errors,
        companies,
        company,
        getCompanies,
        getCompany,
        storeCompany,
        updateCompany,
        destroyCompany
    }

}