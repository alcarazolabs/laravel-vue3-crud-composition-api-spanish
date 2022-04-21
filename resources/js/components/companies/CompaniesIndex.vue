<template>
    
   <h5> <span class="badge bg-success">Listado de Compañias</span></h5>
   
   <div class="text-right">
      <router-link :to="{name: 'companies.create'}" class="btn btn-sm btn-primary">Nuevo</router-link>
   </div>

   <table class="table table-striped table-hover">
         <thead>
            <tr>
               <th scope="col">#</th>
               <th scope="col">Nombre</th>
               <th scope="col">Email</th>
               <th scope="col">Dirección</th>
               <th scope="col">Página web</th>
               <th scope="col">Acciones</th>
            </tr>
         </thead>
         <tbody>
            <template v-for="item in companies.data" :key="item.id">
             <tr>
               <th scope="row">{{ item.id }}</th>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.website }}</td>
                <td>
                  
                     <router-link :to="{name: 'companies.edit', params: {id: item.id} }" class="btn btn-sm btn-primary">Editar </router-link>
                     &nbsp; 
                     <button type="button" @click="deleteCompany(item.id)" class="btn btn-sm btn-danger">Eliminar</button>
                </td>
             </tr>
            </template>   
         </tbody>
   </table>

      <Pagination :data="companies" @pagination-change-page="getCompanies"></Pagination> 


</template>


<script>
import useCompanies from "../../composables/companies";
import { onMounted } from "vue";

export default {


   setup(){
         const {companies, getCompanies, destroyCompany } = useCompanies()

         onMounted(getCompanies)

         const deleteCompany = async (id) => {
            if(!window.confirm("Estas seguro?")){
               return 
            }
            await destroyCompany(id)
            await getCompanies()
         }

      return {
         companies,
         getCompanies,
         deleteCompany  

      }
   }



}

</script>
