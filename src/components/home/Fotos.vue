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
        }
      ],
      imagemPrincipal:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1936431.jpg&f=1&nofb=1&ipt=a469233ef40d3d284609e759d7748bffa724f7e05f526a7ebd3a82c3d5baa5d4&ipo=images'
    }
  },
  methods: {}
}
</script>
<template>
  <div class="container-fluid">
    <div class="row row-cols-2 p-4">
      <div class="col-12 col-lg-6 mb-4">
        <h5 class="text-capitalize">marque seu horario</h5>
        <hr />
        <p>
          Chute a tristeza para longe e venha ser feliz no nosso campo de futebol society! Aqui,
          alegria e diversão são os craques principais. Junte-se a nós e faça parte do time da
          felicidade!
        </p>
        <button class="btn btn-success">Entre em contato</button>
      </div>
      <div class="col-12 col-lg-6 mb-4">
        <div class="card h-100 bg-dark text-white">
          <img
            class="card-img h-100 w-100"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1936431.jpg&f=1&nofb=1&ipt=a469233ef40d3d284609e759d7748bffa724f7e05f526a7ebd3a82c3d5baa5d4&ipo=images"
            alt="Card image"
          />
          <div class="card-img-overlay bg-dark opacity-75"></div>
          <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <button class="btn btn-sm btn-success">Entre em contato</button>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
