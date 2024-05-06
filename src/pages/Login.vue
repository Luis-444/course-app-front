<script lang='ts' setup>
    import {ref} from 'vue';
    import axiosClient from '../axios';
    import { User } from '../types';
    import { useUserStore } from '../store/useUserStore';
    import { useTokenStore } from '../store/useTokenStore';
    import router from '../router';

  const user = ref<User>(useUserStore().user);

  const login = () => {
    axiosClient.post('login', user.value)
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
    <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
      <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
      <form action="#" v-on:submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
          <input type="email" v-model="user.email" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required>
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
          <input type="password" v-model="user.password" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required>
        </div>
        <div class="flex items-center justify-between mb-4">
          <a href="/register" class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >Registrar Cuenta</a>
        </div>
        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
      </form>
    </div>
  </div>
    <!-- <div>
    <form v-on:submit.prevent="login">
      <input type="email" v-model="user.email" />
      <input type="password" v-model="user.password" />
      <button type="submit">Ingresar</button>
    </form>
    {{ user.name }}
  </div> -->
</template>