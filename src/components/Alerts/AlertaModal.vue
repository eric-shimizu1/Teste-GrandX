<template>
  <div class="alerta">
    <v-dialog
        v-model="alert"
        :width="tam"
        class="dialog"
    >
      <v-card class="bord">
        <div class="box-img">
          <div class="img">
            <v-icon size="100" color="#0EB481">mdi-check</v-icon>
          </div>
        </div>
        <v-card-title class="text-h5">
          <div class="texto-title">
            {{ title }}
          </div>
        </v-card-title>
        <v-divider />
        <v-card-text>
          <div class="text-msg">
            {{ msg }}
          </div>        </v-card-text>
        <v-card-actions class="button-wo">
<!--          <v-spacer></v-spacer>-->
          <v-btn
              class="white--text btn"
              color=indigo
              x-large
              @click="disableAlert(); enableDocumentField()"
          >
            WOOHOO!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'AlertModal',
  props: {
    alert: {},
    msg: {
      Type: Array
    },
    title: {
      Type: String,
    },
    tam: {
      Type: Number,
      Default: 700
    },
    cancelar: {
      Type: Boolean,
      Default: true
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    disableAlert() {
      this.$emit('update:value', false)
    },
    enableDocumentField() {
      this.$emit('documentField:value', 1)
    },
    disableDocumentField() {
      this.$emit('documentField:value', 0)
    }
  },
  watch: {
  }

}
</script>

<style scoped>

.btn {
  width: 200px;
  height: 50px;
}

.button-wo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog {
  border-radius: 40px;
  border: 4px solid black
}

.alerta {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.img {
  height: 100px;
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 20px;
}

.texto-title {
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 30px;
  color: #E76331;
  text-align: center;
}

.box-img {
  display: flex;
  width: 100%;
  justify-content: center;
}

.text-msg {
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
}

</style>
