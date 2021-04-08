<template>
  <div id="repos-root">
    <h1>All repositories</h1>
    <div class="repos-container">
      <Repo v-for="repo in repos" :repo-data="repo" :key="repo.id" />
    </div>
  </div>
</template>

<script>
import Repo from "~/components/Repo";

export default {
  name: "repos",
  data() {
    return {
      repos: []
    }
  },
  created() {
    this.$axios.$get('https://api.github.com/users/Abdullah-V/repos')
      .then(async (result) => {
        result = await result.sort(function(a, b){
          return b.stargazers_count - a.stargazers_count;
        })
        this.repos = await result
      })
  },
  components: {
    Repo
  }
}
</script>

<style scoped>

h1 {
  text-align: center;
  margin: 60px 0 50px 0;
  font-size: 35px;
}

.repos-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}

</style>
