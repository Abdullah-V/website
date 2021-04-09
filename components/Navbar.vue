<template>
  <div id="navbar-root">
    <nuxt-link style="cursor:pointer;" to="/" tag="h1">. / Abdullah</nuxt-link>
    <div class="links">
<!--      <a class="link" href="/#top">Home</a>-->
<!--      <a class="link" href="/#projects-section">Projects</a>-->
<!--      <a class="link" href="/#skills-section">Skills</a>-->
<!--      <a class="link" href="/#repos-section">Repositories</a>-->
<!--      <a class="link" href="/#contact-section">Contact</a>-->

      <nuxt-link class="link" to="/#top">Home</nuxt-link>
      <nuxt-link class="link" to="/#projects-section">Projects</nuxt-link>
      <nuxt-link class="link" to="/#skills-section">Skills</nuxt-link>
      <nuxt-link class="link" to="/#repos-section">Repositories</nuxt-link>
      <nuxt-link class="link" to="/#contact-section">Contact</nuxt-link>

      <span @click="$colorMode.preference = 'dark'" v-if="$colorMode.preference === 'light'" class="mode-switcher"><i class="fas fa-moon"></i> </span>

      <span @click="$colorMode.preference = 'light'" v-if="$colorMode.preference === 'dark'" class="mode-switcher"><i class="fas fa-sun"></i></span>

    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

.dark-mode #navbar-root {
  --bg: rgba(17, 24, 39,0.6)
}

.light-mode #navbar-root {
  --bg: rgba(250, 252, 255,0.3)
}

#navbar-root {
  padding: 0 10px;
  width: 100%;
  height: 90px;
  background: var(--bg);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.link {
  color: var(--text);
  padding: 10px 20px;
  border-radius: 5px;
  margin: 0 5px;
  font-size: 18px;
  cursor: pointer;
}

.link:hover {
  background: var(--secondary-background);
  text-decoration: none;
}

.mode-switcher {
  margin: 0 10px;
  /*width: 60px;*/
  /*height: 60px;*/
  padding: 10px 12px;
  border-radius: 20px;
  background: var(--secondary-background);
  cursor: pointer;
}

</style>
