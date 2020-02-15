<template>
  <div>
    <SkipToContent></SkipToContent>
    <header>[HEADER]</header>
    <main id="main">[MAIN CONTENT]</main>
    <aside>[ASIDE]</aside>
    <footer>[FOOTER]</footer>
  </div>
</template>

<script>
import SkipToContent from '../../components/SkipToContent/SkipToContent';
export default {
  components: {
    SkipToContent,
  },
};
</script>

<style></style>
