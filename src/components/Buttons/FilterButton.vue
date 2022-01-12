<template>
  <div class="outlined-buttons">
    <div class="button">
      <div v-for="(op, index) in opcoes" :key="index">
        <v-btn
            :color="op.color"
            :outlined="op.outlined"
            @click="op.outlined = !op.outlined"
        >
          {{ op.text }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FilterButton',
  props: {
    opcoes: {
      Type: Array,
    },
  }
}

</script>

<style scoped>
  .button {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .outlined-buttons {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .button_selected {

  }

</style>