<script>
export default {
  data() {
    return {}
  }
}
</script>
<template>
  <div class="menu d-flex flex-row justify-content-between align-items-center p-5">
    <a class="text-decoration-none text-secondary fs-6 text-muted" href="http://dool.mundiflos.com.br/">@mundiflos </a>
    <a href="/" class="mx-auto"
      ><img src="../../../public/campo.png" width="92" height="92"
    /></a>
    <div class="d-flex flex-row gap-4 text-uppercase mr-5">
      <router-link class="text-decoration-none text-dark fs-5" to="/horarios">Horários</router-link>
      <router-link class="text-decoration-none text-dark fs-5" to="/">Contato</router-link>
      <router-link class="text-decoration-none text-dark fs-5" to="/">Sobre</router-link>
      <router-link class="text-decoration-none text-dark fs-5" to="/entrar">Entrar</router-link>
    </div>
  </div>
  <hr class="w-75 mx-auto" />
</template>
<style>
.menu {
  height: 15vh;
}
</style>
