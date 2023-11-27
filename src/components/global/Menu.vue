<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
<template>
  <div class="menu d-flex flex-row justify-content-between align-items-center border border-2 p-4">
    <img src="../../../public/campo.png" width="92" height="92" />
    <div class="d-flex flex-row gap-4 text-capitalize items">
      <h5>Horários</h5>
      <h5>Contato</h5>
      <h5>Sobre</h5>
    </div>
  </div>
</template>
<style>
.menu{
  height: 20vh;
  color: ghostwhite;
  background-color: #06121f;
}
h5{
  cursor: pointer;
}
</style>
