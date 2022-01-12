<template>
  <div class="wrap-buttons">
    <div class="buttons">
      <div v-for="(b, index) in botoes" class="ok">
        <v-btn
            color="primary"
            text
            :disabled="b.disabled"
            @click="$router.push({name: b.rota}).catch(()=>{});"
        >
          {{ b.text }}
        </v-btn>
        <VerticalDivider v-if="index+1 != botoes.length" />
      </div>
    </div>
  </div>
</template>

<script>
import VerticalDivider from "@/components/Divider/VerticalDivider";

export default {
  name: 'InicialButtons',
  components: {
    VerticalDivider
  },
  props: {
    botoes: {
      Type: Array,
    }
  }
}
</script>

<style scoped>

  .wrap-buttons {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .buttons {
    margin-top: 20px;
    display: flex;
    height: 40px;
    flex-direction: row;
    width: 75%;
  }

  .ok {
    display: flex;
    flex-direction: row;
  }

</style>