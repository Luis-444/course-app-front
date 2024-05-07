<script lang="ts" setup>
   import axiosClient from '../axios';
   import { ref } from 'vue';
   import { Course, defaultCourse } from '../types';

   
   const course = ref<Course>(defaultCourse);
   
    const createCourse = () => {
    axiosClient.post('courses', course.value)
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
            <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6">
            <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-400">Crear curso</h1>
            <form action="#" v-on:submit.prevent="createCourse">
                <div class="">
                    <div class="relative z-0 w-full mb-5">
                        <label for="title" class="block text-sm font-medium text-gray-900 dark:text-gray-500 mb-2">Titulo de curso:</label>
                        <input id="title" type="text" v-model="course.title" class="shadow-sm rounded-md w-full px-16 py-2 border border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="" required>
                    </div>
                    <div class="mb-4">
                        <label for="description" class="block text-sm font-medium text-gray-800 dark:text-gray-500 mb-2">Descripcion:</label>
                        <input id="description" type="text" v-model="course.description" class="shadow-sm rounded-md w-full px-auto py-2 border border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="" required>
                    </div>
                    <div class="mb-4">
                        <label for="instructor" class="block text-sm font-medium text-gray-800 dark:text-gray-500 mb-2">Instructor:</label>
                        <input id="instructor" type="text" v-model="course.instructor" class="shadow-sm rounded-md w-full px-auto py-2 border border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="" required>
                    </div>
                    <div class="mb-4">
                        <label for="duration" class="block text-sm font-medium text-gray-800 dark:text-gray-500 mb-2">Duracion:</label>
                        <input id="duration" type="number" v-model="course.duration" class="shadow-sm rounded-md w-full px-auto py-2 border border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="" required>
                    </div>
                    <div class="mb-4">
                        <label for="price" class="block text-sm font-medium text-gray-800 dark:text-gray-500 mb-2">Precio:</label>
                        <input id="price" type="text" v-model="course.price" class="shadow-sm rounded-md w-full px-auto py-2 border border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="" required>
                    </div>
                    <div class="mb-4">
                        <label for="image" class="block text-sm font-medium text-gray-800 dark:text-gray-500 mb-2">Sube una imagen:</label>
                        <input id="image" type="text" v-model="course.image" class="shadow-sm rounded-md w-full px-auto py-2 border border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="">
                    </div>
                    <div class="mb-4">
                        <label for="category" class="block text-sm font-medium text-gray-800 dark:text-gray-500 mb-2">Categoria:</label>
                        <input id="category" type="text" v-model="course.category" class="shadow-sm rounded-md w-full px-auto py-2 border border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="" required>
                    </div>
                    <div class="mb-4">
                        <label for="language" class="block text-sm font-medium text-gray-800 dark:text-gray-500 mb-2">Lenguaje:</label>
                        <input id="language" type="text" v-model="course.language" class="shadow-sm rounded-md w-full px-auto py-2 border border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="" required>
                    </div>
                    <div class="mb-4">
                        <label for="level" class="block text-sm font-medium text-gray-800 dark:text-gray-500 mb-2">Nivel:</label>
                        <input id="level" type="text" v-model="course.level" class="shadow-sm rounded-md w-full px-auto py-2 border border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="" required>
                    </div>
                    <div class="flex justify-end">
                        <button class="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Cancelar</button>
                        <button type="submit" class="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Crear</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>