<template>
  <div>
    <Header />
    <main class="main">

    </main>
  </div>
</template>

<script>
import Header from "./header/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
.main {
    display: flex;
    flex-direction: column;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    background-color: var(--background);
    max-width: 920px;
    margin: auto;
}

@media screen and (min-width: 770px) {
    .main {
        padding-left: 2rem;
        padding-right: 2rem;
    }   
}
</style>
