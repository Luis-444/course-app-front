<script lang='ts' setup>
    import { useUserStore } from '../store/useUserStore';
    import { useTokenStore } from '../store/useTokenStore';
    import router from '../router';
    import { defaultUser } from '../types';
    import axiosClient from '../axios';

    const logout = () => {
        axiosClient.post('logout')
        .then(() => {
         useUserStore().setUser(defaultUser);
         useTokenStore().setToken('');
         router.push({name: 'Login'});
      }).catch(err => {
        console.log(err);
      })
    }
</script>
<template>
    <div>
        <v-btn @click="logout">
            Logout
        </v-btn>
    </div>
</template>