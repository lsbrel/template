<script>
import Server from '../../api/Server'

export default {
  data() {
    return {
      dias: [
        'segunda-feira',
        'terça-feira',
        'quarta-feira',
        'quinta-feira',
        'sexta-feira',
        'sabado'
      ],
      horarios: [
        {
          nome: 'Disponivel',
          obs: 'observacao',
          dia: '14/07/2024',
          hora: 19
        }
      ]
    }
  },
  methods: {},
  async created() {}
}
</script>
<template>
  <div class="horarios row row-cols-3 justify-content-center gap-5 mt-5">
    <div v-for="dia in dias" class="card mb-3 p-3">
      <img
        class="card-img-top w-25"
        src="https://static.vecteezy.com/system/resources/previews/000/550/428/original/soccer-ball-vector-icon.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title text-capitalize">{{ dia }}</h5>
        <div v-for="(horario, index) in 4" class="card-text flex flex-column">
          <label>{{ horarios[0].hora + index }}:00 - {{ horarios[0].nome }}</label>
        </div>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</template>
<style>
.horarios {
  height: 80vh;
}
</style>
