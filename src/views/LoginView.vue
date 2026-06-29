<script setup>
import { ref } from 'vue';
import { login } from '@/services/authService';
import {  useRouter } from 'vue-router';

const router = useRouter()
const email = ref('')
const password = ref('')

async function handleLogin() {

    const credentials ={
        email: email.value,
        password: password.value,
    }
    const authData = await login(credentials)

    localStorage.setItem('token', authData.token)

    router.push('/dashboard')

}

</script>
<template>
    <main>
        <h1>GreenDesk</h1>
        <p>Seja Bem-Vindo</p>

        <form @submit.prevent="handleLogin">
            <input v-model="email" type="email" placeholder="E-mail" />
            <input v-model="password" type="password" placeholder="Senha" />

            <button type="submit">Entrar</button>
        </form>
    </main>
</template>