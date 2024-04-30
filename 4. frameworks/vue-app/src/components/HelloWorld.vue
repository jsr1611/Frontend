<template>
  <p>Hello World</p>
  <p>msg prop = {{ msg }}</p>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})

export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<style scoped>
</style>