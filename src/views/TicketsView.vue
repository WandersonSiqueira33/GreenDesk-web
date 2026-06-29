<script setup>
import { ref, onMounted } from 'vue';
import { getTickets } from '@/services/ticketService';

const tickets = ref([])
const loading = ref(true)

onMounted(async () => {
    tickets.value = await getTickets()
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
            <p>{{ tickets }}</p>
        </ul>
    </main>
</template>