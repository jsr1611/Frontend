<template>
  Hello Vue !
  <HelloWorld msg="msg from App.vue"> </HelloWorld>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import HelloWorld from "./components/HelloWorld.vue";

@Options({
 components: {
 HelloWorld,
 },
})

export default class App extends Vue {}
</script>

<style scoped></style>
