<script setup>
import { ref } from 'vue';

const email = ref('')
const password = ref('')

function login(){
    console.log('email:', email.value)
    console.log('senha:', password.value)
}


</script>
<template>
    <main>
        <h1>GreenDesk</h1>
        <p>Seja Bem-Vindo</p>

        <form @submit.prevent="login">
            <input v-model="email" type="email" placeholder="E-mail" />
            <input v-model="password" type="password" placeholder="Senha" />

            <button type="submit">Entrar</button>
        </form>
    </main>
</template>