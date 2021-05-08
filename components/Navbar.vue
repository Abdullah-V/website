<template>
  <div id="navbar-root">

    <div id="large-devices">
      <nuxt-link style="cursor:pointer;" to="/" tag="h1">. / Abdullah</nuxt-link>
      <div class="links">


        <nuxt-link class="link" to="/#top">Home</nuxt-link>
        <nuxt-link class="link" to="/#projects-section">Projects</nuxt-link>
        <nuxt-link class="link" to="/#skills-section">Skills</nuxt-link>
        <nuxt-link class="link" to="/#repos-section">Repositories</nuxt-link>
        <nuxt-link class="link" to="/#contact-section">Contact</nuxt-link>

        <button v-show="$colorMode.preference === 'light'" @click="$colorMode.preference = 'dark'" class="mode-switcher"><i class="fas fa-moon"></i> </button>

        <button v-show="$colorMode.preference === 'dark'" @click="$colorMode.preference = 'light'" class="mode-switcher"><i class="fas fa-sun"></i></button>

        <!-- <button @click="$colorMode.preference = $colorMode.preference ==='light' ? 'dark' : 'light'" class="mode-switcher"><i class="fas fa-adjust"></i></button> -->

      </div>

      <i @click="isMenu = true" class="hamburger-icon fas fa-bars"></i>
    </div>


    <div v-if="isMenu" id="narrow-devices">

      <div id="narrow-devices-menu-header"><h2>Menu</h2> <i @click="isMenu = false" class="fas fa-times"></i> </div>

      <div class="narrow-devices-menu-links">
        <button @click="routeToSection('/#top')" class="narrow-menu-link">Home</button>
        <button @click="routeToSection('/#projects-section')" class="narrow-menu-link">Projects</button>
        <button @click="routeToSection('/#skills-section')" class="narrow-menu-link">Skills</button>
        <button @click="routeToSection('/#repos-section')" class="narrow-menu-link">Repositories</button>
        <button @click="routeToSection('/#contact-section')" class="narrow-menu-link">Contact</button>
      </div>

      <button @click="$colorMode.preference = 'light'" style="font-size: 24px" v-if="$colorMode.preference === 'dark'" class="narrow-menu-link"><i class="fas fa-sun"></i></button>
      <button @click="$colorMode.preference = 'dark'" style="font-size: 24px" v-if="$colorMode.preference === 'light'" class="narrow-menu-link"><i class="fas fa-moon"></i></button>

    </div>

    <span style="display: none" v-if="$colorMode.preference === 'system'">
          {{ $colorMode.preference = 'dark' }}
    </span>

    <!-- <button @click="log()">Click</button> -->

  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMenu: false,
    }
  },
  methods: {
    routeToSection(sectionHash) {
      this.$router.push({path: sectionHash})
      this.isMenu = false
    },
    // log() {
    //   console.log("Heeey!")
    // }
  }
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
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
}

#large-devices {
  padding: 0 10px;
  width: 100%;
  height: 90px;
  background: var(--bg);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
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
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: var(--secondary-background);
  cursor: pointer;
  color: var(--text);
}

.hamburger-icon {
  cursor: pointer;
  font-size: 26px;
  display: none;
}

#narrow-devices {
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translate(-50%,0%);
  width: 95%;
  height: 430px;
  margin: auto;
  background: var(--secondary-background);
  z-index: 999;
  border-radius: 5px;
  padding: 20px 30px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

#narrow-devices-menu-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

#narrow-devices-menu-header i {
  font-size: 24px;
  cursor: pointer;
}

.narrow-devices-menu-links {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.narrow-menu-link {
  width: 100%;
  height: 40px;
  color: var(--text);
  background: var(--primary-background);
  margin: 5px 0;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

@media only screen and (max-width: 900px){
  .links {
    display: none;
  }
  .hamburger-icon {
    display: inline;
  }
  #large-devices {
    justify-content: space-between;
    padding: 0 30px;
  }
  #narrow-devices {
    display: flex;
  }
}

</style>
