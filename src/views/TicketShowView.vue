<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getTicket } from '@/services/ticketService';

const route = useRoute()

const ticket = ref(null)
const loading = ref(true)

onMounted(async () => {
    const response = await getTicket(route.params.id)
    ticket.value = response.ticket
    loading.value = false
})
</script>
<template>
    <main>
        <p v-if="loading">
            Carregando chamado...
        </p>

        <div v-else>
            <h1>{{ ticket.title }}</h1>
            <p>{{ ticket.description }}</p>
            <p>status: {{ ticket.status }}</p>
            <p>Prioridade: {{ ticket.priority }}</p>
        </div>
    </main>
</template>