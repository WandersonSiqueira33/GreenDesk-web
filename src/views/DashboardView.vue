<script setup>
import { ref, onMounted } from 'vue';
import { logout, me } from '@/services/authService';
import router from '@/router';

const user = ref(null)
const loading = ref(true)

onMounted(async() => {
    user.value = await me()
    loading.value = false
})

async function handleLogout() {
    await logout()

    localStorage.removeItem('token')

    router.push('/')
}

</script>
<template>
    <main>
        <h1>Dashboard</h1>
        <p v-if="loading">
            Carregando usuário...
        </p>

        <p v-else>
            Bem-Vindo, {{ user.name }}
        </p>

        <button @click="handleLogout">Sair</button>
    </main>
</template>