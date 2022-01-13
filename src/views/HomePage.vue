<template>
  <div>
    <InicialButtons :botoes="[
        {
          text:'Página Inicial',
          disabled: false
        },
        {
          text:'Home',
          disabled: true
        }
    ]"/>
    <div class="quick">
      <div class="form-fields">
        <h1>
          Vagas
        </h1>
        <p>
          Encontre uma posição para trabalhar conosco =)
        </p>
        <FormFields
            :fields="fields"
            @update:values="valueField = $event"
        />
<!--        <v-btn style="font-size: 25px" fab color="black" @click="ver">⚡</v-btn>-->
      </div>
      <div class="filter-row">
        <div class="items-row">
          <div class="filter-icon">
            <v-icon color="primary">mdi-filter-variant</v-icon>
            <span>Filtros</span>
<!--            <VerticalDivider />-->
          </div>
          <FilterButton :opcoes="opcoes"/>
        </div>
      </div>
      <div class="card">
        <div class="card-content">
          <div class="components">
            <CircleButton icon="mdi-arrow-left"/>
            <Card @click.native="$router.push({name: 'ProgramadorJr'})" :informacoes="info" :opcao="opcao1" :classe="true" />
            <Card :informacoes="info2" :opcao="opcao2" :classe="false"/>
            <CircleButton icon="mdi-arrow-right"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormFields from "../components/FieldsComponents/FormFields";
import VerticalDivider from "@/components/Divider/VerticalDivider";
import FilterButton from "@/components/Buttons/FilterButton";
import CircleButton from "@/components/Buttons/CircleButton";
import Card from "@/components/Card/Card";
import InicialButtons from "@/components/Buttons/InicialButtons";

export default {
  name: "HomePage",
  components: {
    InicialButtons,
    CircleButton,
    FormFields,
    VerticalDivider,
    FilterButton,
    Card
  },
  data() {
    return {
      valueField: null,
      fields: {},
      info: {
        vaga: 'Programador Jr.',
        hora: '44 horas semanais',
      },
      info2: {
        vaga: 'Estagiário Back End',
        hora: '20 horas semanais',
      },
      opcoes: [
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
          text: 'Lorem Ipsum',
          color: 'yellow',
          outlined: true
        },
        {
          text: 'Back end',
          color: 'purple',
          outlined: true
        },
        {
          text: 'PHP',
          color: 'blue',
          outlined: true
        },
        {
          text: 'GO',
          color: 'red',
          outlined: true
        },
      ],
      opcao1: [
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
          text: 'Lorem Ipsum',
          color: 'yellow',
          outlined: true
        },
      ],
      opcao2: [
        {
          text: 'Back End',
          color: 'purple',
          outlined: true
        },
        {
          text: 'PHP',
          color: 'blue',
          outlined: true
        },
        {
          text: 'Go',
          color: 'red',
          outlined: true
        },
      ]
    }
  },
  methods: {
    ver() {
      console.log(this.valueField);
    }
  },
  mounted() {
    this.fields = {
      Search: {
        field: 'TextField',
        label: 'Pesquisar',
        prependInnerIcon:"mdi-magnify",
        valueField: this.valueField,
        cols: 12
      },
    }
  }
};
</script>

<style scoped>
.quick {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

}

.form-fields {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
}


.filter-row {
  width: 100%;
  display: flex;
  justify-content: center;
}

.filter-icon {
  display: flex;
  flex-direction: row;
  width: 80px;
  align-items: center;
  justify-content: space-between;

}

.items-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
}

.card {
  display: flex;
  flex-direction: row;
  height: 450px;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 80px;
}

.card-content {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.components {
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  align-items: center;
}
</style>
