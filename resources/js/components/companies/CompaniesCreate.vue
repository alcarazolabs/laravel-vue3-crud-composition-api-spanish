<template>
   <h5> <span class="badge bg-success">Crear Compañia</span></h5>  

    <div v-if="errors"> 
          <div v-for="(v, k) in errors" :key="k">
              <p class="text-danger" v-for="error in v" :key="error">  
                  {{ error }}
              </p>
          </div>
    </div>

    <form  @submit.prevent="saveCompany">
        <div class="form-group">
            <label>Nombre Compañia</label>
            <input v-model="form.name" type="text" name="name" class="form-control">
        </div>

         <div class="form-group">
            <label>Correo Compañia</label>
            <input v-model="form.email" type="text" name="email" class="form-control">
        </div>

         <div class="form-group">
            <label>Dirección Compañia</label>
            <input v-model="form.address" type="text" name="address" class="form-control">
        </div>

         <div class="form-group">
            <label>Sitio Web Compañia</label>
            <input v-model="form.website" type="text" name="website" class="form-control">
        </div>


        <div class="form-group mt-2">
            <button type="submit" class="btn btn-success btn-sm">Guardar</button>
        </div>


    </form>

  
</template>


<script>
import { reactive } from 'vue';
import useCompanies from "../../composables/companies";

export default {

    setup() {
        const {errors, storeCompany } = useCompanies()

        const form = reactive({
            'name': '',
            'email': '',
            'address': '',
            'website': '',
        })

        const saveCompany = async()=> {
            await storeCompany({...form})
        }

    return {
        form,
        errors,
        saveCompany
    }
    }
}
</script>