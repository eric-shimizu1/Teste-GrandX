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
        <div class="cabecario">
          <div class="information">
            <div class="ml-15" style="width: 100%;height: 100%">
              <h4>Vaga</h4>
              <h2>ProgramadorJr</h2>
              <h4>Carga Horária</h4>
              <h5>44 Horas semanais</h5>
              <h4>Modalidade</h4>
              <div class="radio">
                <v-radio-group v-model="radio">
                  <v-radio
                      class="white--text"
                      label="Misto"
                      color="white"
                      :value="1"
                  ></v-radio>
                </v-radio-group>
                <v-radio-group v-model="radio1">
                  <v-radio
                      class="white--text"
                      label="CLT"
                      color="white"
                      :value="1"
                  ></v-radio>
                </v-radio-group>
              </div>
            </div>
          </div>
          <div class="img">
            <img src="../../assets/teste.png" alt="programador" width="400" height="250">
          </div>
        </div>
        <div class="conteudo">
          <div class="salario">
            <h4>SALÁRIO</h4>
            <h1>R$ 1800,00</h1>
            <div style="height: 30px; width: 150px">
              <MiniCard :array="opcao" />
            </div>
            <h4>ÁREAS</h4>
            <div style="height: 30px; width: 300px">
              <MiniCard :array="areas" />
            </div>
            <h4>CANDIDATOS</h4>
            <div class="person">
              <v-icon>mdi-account-outline</v-icon>
              <h4 class="num">32</h4>
            </div>
            <h4>PROCESSO SELETIVO</h4>
            <TimeLine />
          </div>
          <div class="descricao">
            <div class="texto-descricao">
              <h4>DESCRIÇÃO</h4>
              <p class="mt-3">Hey!</p>
              <p>We are looking for a junior front-end developer at GrandX!</p>
              <p><b>We develop web solutions for selected clients worldwide and want you to becom a part of our growing team.</b> In the past 5 years, Carbonaut has built a strong relationship with its internacional clients, and we believe in building close, long-tern partnership. We cover all our clients development needs and are proud to have supported them in multiple investment rounds.</p>
              <p>We are currently a team of 7 passioante developers and designers who higly value work-life balance, wellbeing, and delivering impactfull solutions.</p>
            </div>
            <div class="divider"/>
            <div class="texto-descricao">
              <h4>FUNCÕES</h4>
              <p class="mt-3"><b>At GrandX you can expect to:</b></p>
              <p v-for="(t, index) in texto" :key="index">{{ t.text }}</p>
            </div>
            <div class="divider"/>
            <div class="texto-descricao">
              <h4>REQUISITOS MÍNIMOS</h4>
              <p class="mt-3" v-for="(t, index) in texto2" :key="index">{{ t.text }}</p>
            </div>
            <div class="divider"/>
            <div class="texto-descricao">
              <h4>DIFERENCIAIS</h4>
              <p class="mt-3" v-for="(t, index) in texto3" :key="index">{{ t.text }}</p>
            </div>
            <div class="bbutton">
              <v-btn @click="$router.push({name: 'CandidatarJr'})" class="button white--text" color="indigo">Candidatar-se</v-btn>
              <v-btn @click="$router.back()" text class="button white--text" color="red">Voltar</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import InicialButtons from "@/components/Buttons/InicialButtons";
import MiniCard from "@/components/Card/MiniCard";
import TimeLine from "@/components/TimeLine/TimeLine";
export default {
  name: 'ProgramadorJr',
  components: {TimeLine, MiniCard, InicialButtons},
  data() {
    return {
      radio: 1,
      radio1: 1,
      opcao: [
        {
          text: '+ VT',
          color: 'purple',
          outlined: true
        },
        {
          text: '+ VR',
          color: 'success',
          outlined: true
        },
      ],
      areas: [
        {
          text: 'Front End',
          color: 'primary',
          outlined: true
        },
        {
          text: 'React',
          color: 'success',
          outlined: true
        },
        {
          text: 'Lorem Ispium',
          color: 'yellow',
          outlined: true
        },
      ],
      texto: [
        {
          text:'• Develop features for ongoing projects using PHP, GO, and Node.js;'
        },
        {
          text:'• Design and develop APls and databases for our frontend applications;'
        },
        {
          text:'• Run performance benchmarking tests;'
        },
        {
          text:'• Have direct contact with clients and developers at all levels;'
        },
        {
          text:'• Work in a committed team, who will encourage you to take on responsibilities and\n' +
              'experiment with ideas, and have an active voice:'
        },
        {
          text:'• Freely combine between remote work and our office in one of the best coworking\n' +
              'spaces in downtown Curitiba;'
        },
        {
          text:'•  Contribute to impactful non-profit projects;'
        },
        {
          text:'• Define your work schedule;'
        },
        {
          text:'• Enjoy other perks such as health insurance, gym pass, VR (iFood), and financial\n' +
              'support for relevant courses and learning material;'
        },
        {
          text:'• Join our virtual happy hours where we play games, chat about life and have a good\n' +
              'time together.:)'
        },
      ],
      texto2: [
        {
          text:'• 1 + year of experience in back-end development, preferably in PHP, GO, or Node.js.'
        },
        {
          text:'• Experience with MVC frameworks, relational databases, and building REST APIs;'
        },
        {
          text:'• Experience using Git;'
        },
        {
          text:'• Good communication skills - ability to express technical and non-technical ideas;'
        },
        {
          text:'• Availability for working 30 to 40 hours a week:'
        },
        {
          text:'• Availability for joining the team at the office from time to time (as soon as covid\n' +
              'allows it);'
        },
        {
          text:'• Enough English fluency for daily meetings with the team and clients;'
        },
        {
          text:'• Include a portfolio in your application in which you showcase some of your work\n' +
              '(GitHub, website, web project).'
        },
      ],
      texto3: [
        {
          text:'• Knowledge in DevOps, software security, and automated testing;'
        },
        {
          text:'• Flexibility to adapt to new processes and new technologies;'
        },
        {
          text:'• Experience with SCRUM;'
        },
        {
          text:'• Knowledge in DevOps, software security, and automated testing;'
        },
        {
          text:'• Experience with code reviews;'
        },
        {
          text:'• Strong troubleshooting skills in complex projects;'
        },
      ]
    }
  }
}
</script>

<style scoped>

  .white--text /deep/ label {
    color: white;
  }

  h1 {
    color: black;
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

  .card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    margin-bottom: 35px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    /*background-color: #F89B33;*/
    width: 60%;
    height: 100%;
    /*justify-content: center;*/
    margin-top: 50px;
    border-radius: 60px;
  }

  .cabecario {
    display: flex;
    flex-direction: row;
  }

  .information {
    height: 250px;
    width: 35%;
    background-color: #E76331;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 60px;
  }

  .img {
    background-color: #E76331;
    width: 75%;
    height: 250px;
    border-top-right-radius: 60px;
  }

  .radio {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 150px;
  }

  .conteudo {
    width: 100%;
    height: 1800px;
    border: 1px solid black;
    border-bottom-right-radius: 60px;
    border-bottom-left-radius: 60px;
    display: flex;
    flex-direction: row;
  }

  .salario {
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid black;
  }

  .descricao {
    width: 70%;
    display: flex;
    flex-direction: column;
    height: 250px;
    align-items: center;

  }

  .person {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 24px;
  }

  .num {
    margin-top: 5px !important;
    width: 24px;
    height: 24px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .texto-descricao {
    width: 80%;
  }

  .divider {
    height: 100%;
    width: 90%;
    border-bottom: 1px solid black;
  }

  .bbutton {
    width: 80%;
    margin-top: 20px;
    display: flex;
    justify-content: start !important;
    flex-direction: column;
  }

  .button {
    width: 200px;
    margin-top: 15px;
  }
</style>