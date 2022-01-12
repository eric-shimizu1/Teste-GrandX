<template>
  <div class="card-content">
    <div class="teste">
      <div v-for="(ar, index) in array" :key="index" class="line">
        <div :class="ar.color" class="card">
          <h5>{{ ar.text }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MiniCard',
  props: {
    array: {
      Type: Array
    }
  },
}
</script>


<style scoped>

  h5 {
    padding: 0 10px 0 10px;
    font-size: small;
  }

  .line {
    display: flex;
    flex-direction: row;
  }

  .card {
    display: flex;
    justify-content: center;
    border-radius: 4px;
    width: 100%;
  }
  .teste {
    height: 20px;
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
  }

  .card-content {
    width: 100% !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 0 !important;
    height: 100% !important;
  }
</style>