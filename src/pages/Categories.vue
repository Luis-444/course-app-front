<script lang="ts" setup>
   import axiosClient from '../axios';
   import { ref } from 'vue';
   import { Category, defaultCategory } from '../types';

   
   const category = ref<Category>(defaultCategory);
   
    const createCategory = () => {
    axiosClient.post('categories', category.value)
     .then((response) => {
        if (response.data.error) return;
        console.log("Creada correctamente");
      })
      .catch((error) => {
        console.log("Error al crear",error.response.data)
      });
  }
</script>

<template>
    <div class="">
        <div class="max-h-screen flex items-center justify-center w-full">
            <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
            <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Crear categoria</h1>
            <form action="#" v-on:submit.prevent="createCategory">
                <div class="mb-4">
                    <label for="code" class="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">Nombre de categoria:</label>
                    <input id="code" type="number" v-model="category.code" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="" required>
                </div>
                <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">Nombre de categoria:</label>
                    <input id="name" type="text" v-model="category.name" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="" required>
                </div>
                <div class="flex justify-end">
                    <button class="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Cancelar</button>
                    <button type="submit" class="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Crear</button>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>