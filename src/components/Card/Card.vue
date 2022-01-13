<template>
  <div class="carde">
    <div class="bord" :class="classObject">
        <div class="image">
          <v-icon class="icon">mdi-emoticon-excited-outline</v-icon>
        </div>
      <div class="title">
        <div class="color" />
        <h3>{{ informacoes.vaga }}</h3>
      </div>
      <div class="subtitle">
        <span>{{ informacoes.hora }}</span>
      </div>
    </div>
    <div class="informacao">
      <div class="coluna">
        <div class="info-content">
          <h5>Áreas</h5>
        </div>
        <MiniCard :array="opcao" />
      </div>
    </div>
  </div>
</template>

<script>

import MiniCard from "@/components/Card/MiniCard";
export default {
  name: 'Card',
  components: {MiniCard},
  props: {
    classe: {
      Type: Boolean,
      Default: 'cor-azul'
    },
    informacoes: {
      Type: Object
    },
    opcao: {
      Type: Array
    }
  },
  computed: {
    classObject() {
      if (this.classe) {
        return 'cor-vermelho'
      }else {
        return 'cor-azul'
      }
    }
  }

}
</script>

<style scoped>

  h5 {
    margin-top: 10px;
  }

  h3 {
    color: white;
    margin-left: 20px;
  }

  .carde {
    display: flex;
    width: 300px;
    flex-direction: column;
  }

  .image {
    display: flex;
    justify-content: center;
    height: 200px;
  }

  .icon {
    width: 100%;
  }

  .title {
    display: flex;
    flex-direction: row;
  }

  .color {
    border-left: 8px solid #F9B118;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 100%;

  }
  .bord {
    display: flex;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
    width: 300px;
    height: 350px;
    flex-direction: column;
  }

  .cor-azul {
    background-color: #0EB481;
  }

  .cor-vermelho {
    background-color: #E76331;
  }

  .subtitle {
    margin-left: 30px;
  }

  .informacao {
    width: 100%;
    border: 1px solid black;
    height: 75px;
  }

  .coluna {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .info-content {
    /*margin-top: 15px;*/
    width: 80%;
    height: 40%;
  }
</style>