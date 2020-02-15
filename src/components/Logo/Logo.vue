<template>
  <a id="portal-logo" href="#" aria-labelledby="logo-title">
    <span id="logo-title" class="visually-hidden">Back to homepage</span>
    <img :src="logo" alt="Site name" />
  </a>
</template>

<script>
import logo from './logo.svg';
export default {
  data() {
    return {
      logo: logo
    };
  }
};
</script>

<style></style>
