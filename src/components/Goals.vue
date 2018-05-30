<template>
    <div class="search-box">
        <h1 class="search-box__main-title">Veja as Metas</h1>

        <div class="search-box__search-form">
            <select data-id="districts" v-model="selected" v-on:change="fetchGoals(selected.id)">
                <option disabled selected value="loading">{{ loadingText }}</option>

                <option
                    v-for="district in districts"
                    v-bind:value="{ id: district.id }"
                    v-bind:key="district.id"
                    >
                {{ district.name }}
                </option>
            </select>
        </div>

        <div class="search-box__results">
            <article v-for="goal in goals" v-bind:key="goal.number">
                <h2>META: {{ goal.name }}</h2>
                <h3>{{ goal.description }}</h3>
                <span>Orçamento Esperado: {{ Number(goal.expected_budget).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</span>

                <div v-if="goal.expected_start_date || goal.expected_end_date"
                    class="dates">
                    <small v-if="goal.expected_start_date">Data de inicio: {{ goal.expected_start_date }}</small>
                    <small v-if="goal.expected_end_date">Data Final: {{ goal.expected_end_date }}</small>
                </div>

                <h4>
                    O que sera entregue?
                    <br>
                    {{ goal.will_be_delivered }}
                </h4>
                <h4>Progresso:</h4>
                <progress
                    max="100"
                    :value="goal.percentage.owned"
                    :data-label="goal.percentage.owned > 100
                        ? goal.percentage.owned = 100
                        : goal.percentage.owned + '%'">
                </progress>
                <h4>Etapas</h4>
                <ul>
                    <li v-if="goal.qualitative_progress_1">
                        <p>{{ goal.qualitative_progress_1 }}</p>
                    </li>
                    <li v-if="goal.qualitative_progress_2">
                        <p>{{ goal.qualitative_progress_2 }}</p>
                    </li>
                    <li v-if="goal.qualitative_progress_3">
                        <p>{{ goal.qualitative_progress_3 }}</p>
                    </li>
                    <li v-if="goal.qualitative_progress_4">
                        <p>{{ goal.qualitative_progress_4 }}</p>
                    </li>
                    <li v-if="goal.qualitative_progress_5">
                        <p>{{ goal.qualitative_progress_5 }}</p>
                    </li>
                    <li v-if="goal.qualitative_progress_6">
                        <p>{{ goal.qualitative_progress_6 }}</p>
                    </li>
                </ul>
            </article>
        </div>
    </div>
</template>

<script>
import api from '../api'

export default {
  name: 'Goals',
  data () {
    return {
      selected: 'loading',
      districts: '',
      loadingText: 'Carregando os distritos...',
      goals: ''
    }
  },
  mounted () {
    api.getDistricts()
      .then(districts => {
        this.districts = districts
        this.loadingText = 'Escolha o Distrito'
      })
  },
  methods: {
    fetchGoals (id) {
      api.getGoals(id)
        .then(goals => {
          this.goals = goals
        })
    }
  }
}
</script>

<style scoped lang="scss">

.search-box {
  display: grid;
  justify-items: center;
  max-width: 900px;
  margin: 30px auto;

  .search-box__main-title {
    text-transform: uppercase;
    font-size: 2em;
    margin-bottom: 20px;
    font-weight: 400;
  }

  .search-box__search-form {
    padding: 0 35px;
  }

  .search-box__search-form select {
    min-width: 400px;
    padding: 10px 15px;
    border: none;
    background: var(--color-main);
    text-align: center;
    font-size: 1.2rem;
    color: #fff;
  }

  .search-box__results {
    font-weight: 400;
  }

  .search-box__results h1,
  .search-box__results h2,
  .search-box__results h3,
  .search-box__results h4
  {
    margin: 1em 0;
    font-weight: 400;
    font-size: 1.3rem;
  }

  .search-box__results h1 {
    font-size: 1.4rem;
  }

  article {
    overflow: hidden;
    margin: 30px 35px;
    padding: 0 35px 50px;
    border-radius: 15px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 20px;
    }
  }
}

progress {
  text-align: center;
  display: flex;
  width: 100%;
  height: 35px;
  line-height: 35px;
}

progress:before {
  content: attr(data-label);
}
</style>
