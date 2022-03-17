<template>
  <header class="header">
    <div class="content__img">
      <img src="../assets/logo_rodevp.png" alt="image of logo" />
    </div>
    <div class="content__nav">
      <Nav />
    </div>
  </header>
</template>

<script>
import Nav from "./Nav.vue"

export default {
  components: {
    Nav,
  },
}

</script>

<style scoped>
.header {
  font-family: var(--font);
  background-color: var(--background);
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 3;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  max-width: 920px;
  margin: auto;
}

.content__img {
  width: 45%;
}

.content__img img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid var(--color-purple-ligth);
}

.content__nav {
  width: 45%;
}

@media screen and (min-width: 620px) {
  .content__img {
    width: 30%;
  }

  .content__nav {
    display: flex;
    justify-content: flex-end;
    width: 70%;
  }
}

@media screen and (min-width: 770px) {
  .header {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media screen and (min-width: 920px) {
  .content__nav {
    justify-content: flex-end;
  }
}
</style>