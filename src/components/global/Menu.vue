<script>
export default {
  data() {
    return {}
  }
}
</script>
<template>
  <div class="menu d-flex flex-row shadow shadow-md justify-content-between align-items-center p-4">
    <router-link to="/"><img src="../../../public/campo.png" width="92" height="92" /></router-link>
    <div class="d-flex flex-row gap-4 text-capitalize">
      <router-link class="text-decoration-none text-white fs-5" to="/horarios"
        >Horários</router-link
      >
      <router-link class="text-decoration-none text-white fs-5" to="/">Contato</router-link>
      <router-link class="text-decoration-none text-white fs-5" to="/">Sobre</router-link>
      <router-link class="text-decoration-none text-white fs-5" to="/entrar">Entrar</router-link>
    </div>
  </div>
</template>
<style>
.menu {
  height: 20vh;
  color: ghostwhite;
  background-color: #06121f;
}
</style>
