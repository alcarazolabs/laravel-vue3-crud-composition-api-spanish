<template>
        
    <h5> <span class="badge bg-success">Editar Compañia</span></h5>

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
            <input v-model="company.name" type="text" name="name" class="form-control">
        </div>

         <div class="form-group">
            <label>Correo Compañia</label>
            <input v-model="company.email" type="text" name="email" class="form-control">
        </div>

         <div class="form-group">
            <label>Dirección Compañia</label>
            <input v-model="company.address" type="text" name="address" class="form-control">
        </div>

         <div class="form-group">
            <label>Sitio Web Compañia</label>
            <input v-model="company.website" type="text" name="website" class="form-control">
        </div>


        <div class="form-group mt-2">
            <button type="submit" class="btn btn-success btn-sm">Guardar</button>
        </div>


    </form>


</template>

<script>
import useCompanies from "../../composables/companies";
import { onMounted } from "vue"

export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },

    setup(props) {
     
    const { errors, company, getCompany, updateCompany} = useCompanies()

    onMounted(getCompany(props.id))

    const saveCompany = async () => {
        await updateCompany(props.id)
    }
     return{
         errors,
         company,
         saveCompany
     }
    }
    
}
</script>