<template>
    
   <h5> <span class="badge bg-success">Listado de Compañias</span></h5>
   
   <div class="text-right">
      <router-link :to="{name: 'companies.create'}" class="btn btn-sm btn-primary">Nuevo</router-link>
   </div>

   <div class="row">
      <div class="col-md-4">
         <div class="form-group d-flex">
            <input type="text" class="form-control" placeholder="Buscar por nombre" v-model="query_name">
            &nbsp;
            <button @click="getCompanies" class="btn btn-sm btn-primary">Buscar</button>
         </div>
      </div>
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
         const {query_name, companies, getCompanies, destroyCompany } = useCompanies()

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
         deleteCompany,
         query_name 

      }
   }



}

</script>
