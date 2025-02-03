<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <nav>
      <router-link to="/">Main</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/big-data">Big data</router-link>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: sans-serif;
  font-size: 1.2rem;
}

#app {
  min-height: 100vh;
  background: rgba(33, 33, 33);
  color: #fff;
}
a {
  color: #fff;
}

.wrapper {
  padding: 1rem;
  max-width: 90rem;
  margin: 0 auto;
}

nav {
  padding: 1rem 0;
  display: flex;
  gap: .5rem;
}
</style>
