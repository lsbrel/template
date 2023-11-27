<script>
import Server from '../../api/Server'

export default {
  props: {
    tipo: String
  },
  data() {
    return {
      classePage: {
        'horarios row row-cols-3 justify-content-center gap-2 mt-5': true
      },
      dias: [
        'segunda-feira',
        'terça-feira',
        'quarta-feira',
        'quinta-feira',
        'sexta-feira',
        'sábado'
      ],
      horarios: [
        {
          id: 0,
          nome: 'Disponivel',
          obs: 'observacao',
          dia: '14/07/2024',
          hora: 19
        }
      ]
    }
  },
  methods: {},
  async created() {
    if (this.tipo == 'widget') {
      this.classePage = {
        'horarios row row-cols-3 justify-content-center gap-2 mt-5': true
      }
    } else {
      this.classePage = {
        'horarios row row-cols-2 justify-content-center gap-1 mt-2': true
      }
    }
  }
}
</script>
<template>
  <div :class="classePage">
    <div v-for="dia in dias" class="card mb-3 p-3">
      <img
        class="card-img-top w-25"
        src="https://static.vecteezy.com/system/resources/previews/000/550/428/original/soccer-ball-vector-icon.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title text-capitalize">{{ dia }}</h5>
        <p class="card-text"><small class="text-muted">01/07/2024</small></p>
        <hr />
        <div v-for="(horario, index) in 4" class="card-text flex flex-column w-100">
          <div
            v-if="horario.id == 0"
            class="item-horario w-100 bg-secondary rounded text-white mt-2"
          >
            {{ horarios[0].hora + index }}:00 - {{ horarios[0].nome }}
          </div>
          <div v-else class="item-horario w-100 bg-success rounded-1 text-white mt-2">
            {{ horarios[0].hora + index }}:00 - {{ horarios[0].nome }}
          </div>
        </div>
        <p class="card-text"><small class="text-muted">*** Sujeito a alterações</small></p>
      </div>
    </div>
  </div>
</template>
<style>
.item-horario {
  height: 2rem !important;
}
</style>
