<script setup lang="ts">
</script>

<template>
  <div class="page">
    <div class="iteration">
      <span v-for="i in 10000">
        {{ i }}
      </span>
    </div>
  </div>
</template>

<style>
.iteration {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
}
</style>
