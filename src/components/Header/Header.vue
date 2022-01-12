<template>
  <div class="header">
    <h2>GrandX</h2>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

h2 {
  color: white;
  text-align: center;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: black;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

</style>