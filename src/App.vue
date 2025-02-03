<script setup lang="ts">
import { RouterLink } from 'vue-router';
// heap snapshot at first visit https://prnt.sc/KrCF8rvF3fJY
// heap snapshot after navigating between "main" and "about" pages 50 times https://prnt.sc/VevR3ZvU7QsG
// heap after refresh https://prnt.sc/oAaj6JIIO1R6

// reset heap and refresh browser https://prnt.sc/hMyKwY5pMDXk
// heap after navigating between "main" and "big-data" pages 10 times https://prnt.sc/YFGIy_YcrD9n
// heap after navigating between "main" and "big-data" pages 50 times https://prnt.sc/QESC4KfkxKMZ
// similar behaviour in prod https://prnt.sc/Wr3AmX7DbrVg
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
