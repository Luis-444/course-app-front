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
    <div>
    <form v-on:submit.prevent="login">
      <input type="email" v-model="user.email" />
      <input type="password" v-model="user.password" />
      <button type="submit">Ingresar</button>
    </form>
    {{ user.name }}
  </div>
</template>