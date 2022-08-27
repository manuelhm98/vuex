<template>
  <h1>Counter - Vuex</h1>
  <h2>Direct Access {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>
  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">Random</button>
  <h1>MapState {{ count }}</h1>
  <h2>Direct Getters: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    countComputed() {
      return this.$store.state.counter.count
    },
    ...mapState('counter', ['count', 'isLoading']),
  },

  methods: {
    increment() {
      this.$store.commit('counter/increment')
    },
    incrementBy() {
      this.$store.commit('counter/incrementBy', 5)
    },
    ...mapActions('counter', ['incrementRandomInt']),
  },
}
</script>
