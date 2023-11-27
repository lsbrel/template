<script>
export default{
  methods:{
    goTo(rota){
      this.$router.push(rota)
    }
  }
}
</script>
<template>
  <span class="d-flex flex-column-reverse w-50 h-100 gap-2 shadow shadow-sm">
    <div class="card h-50 bg-dark text-white">
      <img
        class="card-img h-100 w-100"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fd3%2FSoccer_goalkeeper.jpg&f=1&nofb=1&ipt=50f09601332ff8eb102e6671f08a5e93b8a89c74c3810cb0de56e419c54de84c&ipo=images"
        alt="Card image"
      />
      <div class="card-img-overlay bg-dark opacity-50"></div>
      <div class="card-img-overlay">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </p>
        <p class="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
    <span class="d-flex flex-row gap-1 w-100 h-50">
      <div
        class="d-flex flex-column h-100 w-50 bg-white text-dark rounded-1 p-4 border border-1 shadow shadow-sm"
      >
        <h4>Escale seu time</h4>
        <hr class="mt-0" />
        <p>
          Chute a tristeza para longe e venha ser feliz no nosso campo de futebol society! Aqui,
          alegria e diversão são os craques principais.
        </p>
      </div>
      <!-- dois -->
      <div
      @click="goTo('/tabela')"
        class="d-flex flex-column h-100 w-50 bg-white text-dark rounded-1 p-4 border border-1 shadow shadow-sm"
      >
        <h4>Tabela Desafio</h4>
        <hr class="mt-0" />
        <p>
          Chute a tristeza para longe e venha ser feliz no nosso campo de futebol society! Aqui,
          alegria e diversão são os craques principais.
        </p>
      </div>
    </span>
  </span>
</template>
