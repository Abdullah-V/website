<template>
  <div class="repo-root" v-if="!repoData.fork">
    <span class="repo-header"
      ><a
        target="_blank"
        :href="
          repoData.html_url || 'https://github.com/Abdullah-V/' + repoData.repo
        "
        class="repo-name"
        >{{ repoData.name || repoData.repo }}</a
      >
      <span class="repo-infos"
        >{{ repoData.stargazers_count || repoData.stars || 0 }}
        <i class="fas fa-star"></i>
        <img
          v-if="repoData.language"
          :src="
            require(`~/assets/icons/${repoData.language
              .toLowerCase()
              .replace('vue', 'vuejs')}.svg`)
          "
          alt=""
        />
      </span>
    </span>
    <span class="repo-description">{{ repoData.description }}</span>
  </div>
</template>

<script>
export default {
  name: 'Repo',
  props: ['repoData']
}
</script>

<style scoped>
.repo-root {
  width: 400px;
  height: 110px;
  background: var(--secondary-background);
  border-radius: 5px;
  margin: 20px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

a {
  color: var(--text);
}

.repo-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.repo-header img {
  width: 20px;
  height: 20px;
}

.repo-header .repo-infos {
  display: flex;
  align-items: center;
  width: 20%;
  justify-content: space-between;
}

@media only screen and (max-width: 444px) {
  .repo-header .repo-infos {
    width: 30%;
  }
}

.repo-header .repo-name {
  width: 80%;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}

.repo-header .repo-name:hover {
  text-decoration: underline;
}

.repo-header i {
  color: #d97706;
}

.repo-description {
  font-size: 16px;
  color: gray;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
