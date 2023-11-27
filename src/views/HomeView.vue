<script>
import Calendario from '../components/calendario/Calendario.vue'
import Carousel from '../components/home/Carousel.vue'
import Fotos from '../components/home/Fotos.vue'
import Depoimentos from '../components/home/Depoimentos.vue'
import Horarios from '../components/home/Horarios.vue'
import Footer from '../components/global/Footer.vue'

export default {
  components: {
    Calendario,
    Carousel,
    Fotos,
    Depoimentos,
    Horarios,
    Footer
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<template>
  <!-- <Calendario /> -->
  <Carousel />
  <Fotos />
  <Depoimentos />
  <Horarios />
  <Footer />
</template>
