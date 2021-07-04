<template>
  <div>
    <Navbar />
    <Nuxt />
    <button @click="moveTop()" id="move-top"><i class="fas fa-arrow-up"></i></button>
    <div id="footer">
      <a target="_blank" href="https://github.com/Abdullah-V/website">Source code</a>
      <span>Copyright (c) 2021 Abdullah Veliyev</span>
      <a target="_blank" href="https://github.com/Abdullah-V/website/blob/master/LICENSE">MIT license</a>
      <a href="#top">Back to top</a>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";

export default {
  created() {

    this.setData()

    if(process.client) {

      if(window.location.href.startsWith('http://') && !window.location.href.startsWith('http://localhost')) {
        window.location.href = window.location.href.replace('http://','https://')
      }

      window.addEventListener("scroll",() => {
        var sh = window.pageYOffset // scroll height
        var btn = this.$el.querySelector("#move-top")
        if(sh >= 456){
          btn.classList.add("active")
        }else if(sh < 456){
          btn.classList.remove("active")
        }

        var d = document.documentElement;
        var offset = d.scrollTop + window.innerHeight;
        var height = d.offsetHeight;

        if (offset >= height - 60) {
          btn.classList.remove("active")
        }

      })
    }
  },
  methods: {
    moveTop() {
      if(process.client){
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      }
    },
    setData() {

      this.$axios.$get('https://api.github.com/users/Abdullah-V/repos')
        .then(async (result) => {
          result = await result.sort(function(a, b){
            return b.stargazers_count - a.stargazers_count;
          })
          this.$store.state.allRepos = await result
        })

      this.$axios.$get('https://raw.githubusercontent.com/Abdullah-V/DATA/master/website/gh-pinned-repos.json')
        .then(async (result) => {
          this.$store.state.pinnedRepos = await result
      })

      this.$axios.$get('https://api.raindrop.io/rest/v1/raindrops/18890045', {
        headers: {
          Authorization: 'Bearer ' + process.env.RAINDROP_ACCESS_TOKEN
        }
      })
        .then(result => {
          this.$store.state.bookmarks = result.items
        })

    },
  },
  components: {
    Navbar
  }
}

</script>

<style scoped>

#move-top {
  position: fixed;
  right: 50px;
  bottom: 30px;
  background: var(--secondary-background);
  width: 50px;
  height: 50px;
  color: var(--text);
  z-index: 99;
  border-radius: 50%;
  font-size: 18px;
  transition: 300ms all;
  pointer-events: none;
  opacity: 0;

  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.25);
}

#move-top.active {
  bottom: 50px;
  opacity: 1;
  pointer-events: auto;
}

#move-top:hover {
  transform: scale(1.2);
}

#footer {
  width: 100%;
  height: 100px;
  background: var(--secondary-background);
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: gray;
  font-size: 20px;
}

@media only screen and (max-width: 820px) {
  #footer {
    flex-direction: column;
    height: 250px;
  }
}

a {
  color: gray;
}

a:hover {
  text-decoration: underline;
}

</style>
