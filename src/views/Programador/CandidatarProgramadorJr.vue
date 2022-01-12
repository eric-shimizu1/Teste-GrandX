<template>
  <div>
    <InicialButtons :botoes="[
        {
          text:'Página Inicial',
          disabled: false,
          rota: ''

        },
        {
          text:'Home',
          disabled: false,
          rota: 'Home'
        },
        {
          text:'Programador Jr.',
          disabled: true
        },
    ]"/>
    <div class="card">
      <div class="card-content">
        <div class="card-esq">
          <div class="form">
            <h4>CANDIDATAR-SE A VAGA</h4>
            <h1>Programador Jr.</h1>
            <p class="mt-3">Por favor, preencha suas informações no formulário abaixo.</p>
            <div class="divider" />
            <div class="form-fields mt-7">
              <FormFields
                  :fields="fields"
                  :validate="validateFields"
                  @update:values="inputsValue = $event"
                  @checkValidity="sendValues($event)"
              />
            </div>
          </div>
            <div class="bbutton mb-10">
              <v-btn @click="enviar()" class="button white--text" color="indigo">Candidatar-se</v-btn>
              <v-btn @click="$router.back()" text class="button white--text" color="red">Voltar</v-btn>
            </div>
        </div>
        <div class="card-dir">
          <div style="display: flex; justify-content: end">
            <div class="x-button" @click="$router.back()">X</div>
          </div>
          <div class="img">
            <img class="mr-10" src="../../assets/teste.png" alt="programador" width="400" height="300">
          </div>
        </div>
      </div>
    </div>
    <AlertModal @update:value="flag = $event" :alert="flag" tam="600" :msg="msg" title="Aplicação Enviada!"/>
  </div>
</template>

<script>
import InicialButtons from "@/components/Buttons/InicialButtons";
import FormFields from "@/components/FieldsComponents/FormFields";
import AlertModal from "@/components/Alerts/AlertaModal";

export default {
  name: 'CandidatarJr',
  components: {
    AlertModal,
    InicialButtons,
    FormFields
  },
  data() {
    return {
      flag: false,
      msg: 'Muito obrigado por estar participando em nosso processo seletivo. Fique ligado em seu email para informações sobre as próximas fases!',
      fields: {},
      validateFields: 0,
      inputsValue: {
        nome_usuario: null,
        email_usuario: null,
        whats_usuario: null,
        link_repositorio: null,
        link_curriculo: null,
        info_adicional: null,
      },

    }
  },
  mounted() {
    this.init()
  },
  methods: {
    enviar() {
      this.validateFields++
    },
    sendValues(event){
      if(event.isValid){
        this.flag=true
      }
    },
    init() {
      this.fields = {
        nome_usuario: {
          identificacao_interna: 'nome_usuario',
          field: 'TextField',
          cols: 12,
          label: 'NOME COMPLETO',
          dinamicRules: [(v) => !!v || "Preencha o nome completo", (v) => /\s/.test(v) || "Preencha o nome completo"],
          disabled: false,
          valueField: this.inputsValue.nome_usuario,
        },
        email_usuario: {
          identificacao_interna: 'email_usuario',
          field: 'TextField',
          cols: 12,
          label: 'EMAIL',
          dinamicRules: [(v) => !!v || "Preencha o e-mail"],
          type: 'e-mail',
          disabled: false,
          valueField: this.inputsValue.email_usuario,
        },
        whats_usuario: {
          identificacao_interna: 'whats_usuario',
          field: 'TextField',
          cols: 12,
          label: 'WHATSAPP',
          dinamicRules: [(v) => !!v || "Preencha o WHATSAPP"],

          disabled: false,
          valueField: this.inputsValue.whats_usuario,
        },
        link_repositorio: {
          identificacao_interna: 'link_repositorio',
          field: 'TextField',
          cols: 12,
          label: 'LINK PARA REPOSITÓRIO',
          dinamicRules: [(v) => !!v || "Preencha o link do repositório"],
          disabled: false,
          valueField: this.inputsValue.link_repositorio,
        },
        link_curriculo: {
          identificacao_interna: 'link_curriculo',
          field: 'TextField',
          cols: 12,
          label: 'LINK PARA CURRÍCULO',
          dinamicRules: [(v) => !!v || "Preencha o link do currículo"],
          disabled: false,
          valueField: this.inputsValue.link_curriculo,
        },
        info_adicional: {
          identificacao_interna: 'info_adicional',
          field: 'TextField',
          cols: 12,
          label: 'INFORMAÇÕES ADICIONAIS',
          disabled: false,
          valueField: this.inputsValue.info_adicional,
        },
      }
    }
  }
}
</script>

<style scoped>

  .white--text /deep/ label {
    color: white;
  }

  h1 {
    color: #E76331;
    font-size: 25px;
  }

  h4 {
    color: #656161;
    margin-top: 20px;
  }

  h2 {
    color: white;
  }

  h5 {
    color: white;
  }

  .bord {
    border-radius: 30px !important;

  }

  .x-button {
    width: 30px;
    height: 30px;
    background-color: white;
    border: 1px solid black;
    align-items: center;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    cursor: pointer;
  }

  .img {
    display: flex;
    justify-content: center;
    align-items: end;
    height: 99%;
    width: 100%;
    margin-right: 50px;

  }

  .card {
    display: flex;
    justify-content: center;
    flex-direction: row;
    height: 100%;
    width: 100%;
    align-items: center;
    margin-bottom: 35px;
  }

  .card-content {
    display: flex;
    flex-direction: row;
    /*background-color: #F89B33;*/
    width: 60%;
    height: 1100px;
    /*justify-content: center;*/
    border: 1px solid black;
    border-radius: 60px;
    margin-bottom: 40px;
  }

  .card-esq {
    display: flex;
    flex-direction: column;
    /*background-color: #F89B33;*/
    width: 60%;
    height: 1100px;
    /*justify-content: center;*/
    align-items: center;
  }

  .card-dir {
    display: flex;
    flex-direction: column;
    background-color: #E76331;
    width: 40%;
    height: 1100px;
    border-top-right-radius: 60px;
    border-bottom-right-radius: 60px;
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 100%;
    margin-top: 30px;
  }

  .divider {
    height: 30px;
    width: 100%;
    border-bottom: 1px solid black;
  }

  .form-fields {
    height: 50%;
  }

  .bbutton {
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center !important;
    flex-direction: column;
  }

  .button {
    width: 200px;
    margin-top: 15px;
  }

</style>