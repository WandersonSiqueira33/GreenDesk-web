<script setup>
import { ref, onMounted } from 'vue';
import { getTickets } from '@/services/ticketService';

const tickets = ref([])
const loading = ref(true)

onMounted(async () => {
    const response = await getTickets()
    tickets.value = response.ticketsAll ?? response.ticketUser ?? []
    loading.value = false
})

</script>
<template>
    <main>
        <h1>Chamados</h1>
        <p v-if="loading">
            Carregando...
        </p>

        <ul v-else>
            <li v-for="ticket in tickets">
                <RouterLink :to="`/tickets/${ticket.id}`">
                    #{{ ticket.id }} - {{ ticket.title }}
                </RouterLink>
            </li>
        </ul>
    </main>
</template>