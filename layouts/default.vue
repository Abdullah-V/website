<template>
  <div>
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

export default {
  created() {
    if(process.client) {
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
  }
}

</script>

<style>

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

a {
  color: gray;
}

a:hover {
  text-decoration: underline;
}

</style>
