<script>
export default {
  data() {
    return {}
  }
}
</script>
<template>
  <div class="container-fluid">
    <!-- ROW GRID -->
    <div
      class="row gap-3 p-3 mt-4 justify-content-md-center justify-content-lg-between align-items-center"
    >
      <!-- COL GRID -->
      <div class="col-12 col-lg-3 text-center text-lg-start">
        <a
          class="text-decoration-none text-secondary fs-6 text-muted"
          href="http://dool.mundiflos.com.br/"
          >@mundiflos
        </a>
      </div>
      <!-- COL GRID -->
      <div class="col-12 col-lg-3 text-center text-lg-start">
        <a href="/" class="mx-auto"
          ><img src="../../../public/campo.png" width="92" height="92"
        /></a>
      </div>
      <!-- COL GRID -->
      <div class="col-12 col-lg-4 text-center text-lg-center text-uppercase fs-5">
        <!-- <div class="d-flex flex-row gap-2 text-uppercase"> -->
        <router-link class="text-decoration-none text-dark m-1" to="/horarios"
          >Horários</router-link
        >
        <router-link class="text-decoration-none text-dark m-1" to="/">Contato</router-link>
        <router-link class="text-decoration-none text-dark m-1" to="/">Sobre</router-link>
        <router-link class="text-decoration-none text-dark m-1" to="/entrar"
          >Entrar</router-link
        >
        <!-- </div> -->
      </div>
    </div>
    <hr class="w-75 mx-auto" />
  </div>
</template>
