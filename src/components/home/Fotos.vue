<script>
export default {
  data() {
    return {
      imagens: [
        {
          id: 0,
          nome: 'foto1',
          check: true,
          source:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1936431.jpg&f=1&nofb=1&ipt=a469233ef40d3d284609e759d7748bffa724f7e05f526a7ebd3a82c3d5baa5d4&ipo=images'
        },
        {
          id: 1,
          nome: 'foto2',
          check: false,
          source:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fd3%2FSoccer_goalkeeper.jpg&f=1&nofb=1&ipt=50f09601332ff8eb102e6671f08a5e93b8a89c74c3810cb0de56e419c54de84c&ipo=images'
        },
        {
          id: 2,
          nome: 'foto3',
          check: false,
          source: ''
        },
        {
          id: 3,
          nome: 'foto4',
          check: false,
          source: ''
        }
      ],
      imagemPrincipal:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1936431.jpg&f=1&nofb=1&ipt=a469233ef40d3d284609e759d7748bffa724f7e05f526a7ebd3a82c3d5baa5d4&ipo=images'
    }
  },
  methods: {
    trocarImagem(source) {
      this.imagemPrincipal = source
    }
  }
}
</script>
<template>
  <div class="fotos d-flex flex-row mt-2">
    <div class="d-flex flex-column p-4 w-75 h-100">
      <img class="w-75 h-100 rounded mx-auto" :src="imagemPrincipal" alt="imagem-principal" />
    </div>
    <div class="d-flex flex-column gap-2 w-25 h-100 p-4 justify-content-center">
      <button
        v-for="(imagem, index) in imagens"
        class="d-flex flex-row border border-1 p-4 rounded"
        @click="trocarImagem(imagem.source)"
      >
        <label>{{ imagem.nome }}</label>
        <img src="" alt="imagens" />
    </button>
    </div>
  </div>
</template>
<style>
.fotos {
  height: 50vh;
}
</style>
