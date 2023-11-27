<script>
import Vue3Datatable from '@bhplugin/vue3-datatable'
import '@bhplugin/vue3-datatable/dist/style.css'

export default {
  components: {
    'vue3-datatable': Vue3Datatable
  },
  data() {
    return {
      cols: [
        {
          field: 'posicao',
          title: 'Posição'
        },
        {
          field: 'nome',
          title: 'Nome'
        },
        {
          field: 'partidas',
          title: 'Partidas'
        },
        {
          field: 'vitorias',
          title: 'Vitórias'
        },
        {
          field: 'empates',
          title: 'Empates'
        },
        {
          field: 'derrotas',
          title: 'Derrotas'
        },
        {
          field: 'pontos',
          title: 'Pontos'
        }
      ],
      rows: [
        {
          posicao: 1,
          nome: 'Time teste FC',
          partidas: '4',
          vitorias: '2',
          empates: '1',
          derrotas: '1',
          ultimas: 'VEVD',
          pontos: '7'
        },
        {
          posicao: 2,
          nome: 'Corinthians FC',
          partidas: '4',
          vitorias: '4',
          empates: '0',
          derrotas: '0',
          pontos: '12'
        },
        {
          posicao: 3,
          nome: 'Flamengo FC',
          partidas: '4',
          vitorias: '1',
          empates: '2',
          derrotas: '1',
          pontos: '5'
        }
      ]
    }
  }
}
</script>
<template>
  <vue3-datatable
    class="w-full shadow-md rounded p-2 alt-pagination whitespace-wrap p-5 rounded"
    :rows="rows"
    :columns="cols"
    :totalRows="rows?.length"
  >
  </vue3-datatable>
</template>
