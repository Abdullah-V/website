<template>
  <div
    id="repo-root"
    v-if="repoData.fork === false"
    data-aos="zoom-in"
    data-aos-duration="600"
  >
    <span id="repo-header"><a target="_blank" :href="repoData.html_url" id="repo-name">{{ repoData.name }}</a> <span id="repo-infos"> <p>{{ repoData.stargazers_count }} <i class="fas fa-star"></i></p> <img v-if="repoData.language" :src="require(`~/assets/icons/${repoData.language.toLowerCase().replace('vue','vuejs')}.svg`)" alt=""> </span> </span>
    <span id="repo-description">{{ repoData.description }}</span>
  </div>
</template>

<script>
export default {
  name: "Repo",
  props: ["repoData"]
}
</script>

<style scoped>

#repo-root {
  width: 400px;
  height: 110px;
  background: var(--secondary-background);
  border-radius: 5px;
  margin: 20px;
  padding: 20px 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

a {
  color: var(--text);
}

#repo-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#repo-header img {
  width: 20px;
  height: 20px;
}

#repo-header #repo-infos{
  display: flex;
  align-items: center;
  width: 20%;
  justify-content: space-between;
}

#repo-header #repo-name {
  width: 80%;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#repo-header #repo-name:hover {
  text-decoration: underline;
}

#repo-header i {
  color: #D97706;
}

#repo-description {
  font-size: 16px;
  color: gray;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

</style>
