<script lang='ts' setup>
    import {ref} from 'vue';
    import axiosClient from '../axios';
    import { User } from '../types';
    import { useUserStore } from '../store/useUserStore';
    import { useTokenStore } from '../store/useTokenStore';
    import router from '../router';

  const user = ref<User>(useUserStore().user);

  const register = () => {
    axiosClient.post('register', user.value)
     .then((response) => {
        if (response.data.error)return;
        useUserStore().setUser(response.data.user);
        useTokenStore().setToken(response.data.token);
        router.push({ name: 'Dashboard'})
      })
      .catch((error) => {
        console.log(error.response.data)
      });
  }
</script>
<template>
  <div class="max-h-screen flex items-center justify-center w-full">
    <div class="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
      <h1 class="text-2xl dark:text-gray-400">Registrate!</h1>
      <form v-on:submit.prevent="register">
        <div class="mb-4 mt-2">
          <label for="" class="block text-sm text-gray-700 mb-2">Ingresa tu nombre</label>
          <input type="text" v-model="user.name" class="shadown-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none" required>
        </div>
        <div class="mb-4">
          <label for="" class="block text-sm text-gray-700 mb-2">Ingresa tu email</label>
          <input type="email" v-model="user.email" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none" required>
        </div>
        <div class="mb-4">
          <label for="" class="block text-sm text-gray-700 mb-2">Ingresa tu contraseña</label>
          <input type="password" v-model="user.password" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none" required>
        </div>
        <div class="mb-2">
          <label for="" class="block text-sm text-gray-700 mb-2">Confirma tu contraseña</label>
          <input type="password" v-model="user.password_confirmation" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none" required>
        </div>
        <div class="flex items-center justify-between mb-4">
          <a href="/login" class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >Ya tengo una cuenta</a>
        </div>
        <div>
          <button type="submit">Registrarme</button>
        </div>
      </form>
    </div>
  </div>
    <!-- <div>
    <form v-on:submit.prevent="register">
      <input type="text" v-model="user.name" />
      <input type="email" v-model="user.email" />
      <input type="password" v-model="user.password" />
      <input type="password" v-model="user.password_confirmation" />
      <button type="submit">Registrarme</button>
    </form>
  </div> -->
</template>