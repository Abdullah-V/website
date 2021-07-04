<template>
  <div
    class="project-root"
    data-aos="zoom-in"
    data-aos-duration="600"
  >
    <img v-if="projectData.imageURL" class="project-image" :src="projectData.imageURL" alt="image from project">
    <h2 class="project-title">{{ projectData.name }}</h2>
    <h4 class="project-description">{{ projectData.description }}</h4>
    <div class="tech-stack">
      <img :title="item.name" :key="item.name" v-for="item in projectData.techStack" class="icon" :src="require(`~/assets/icons/${item.iconFileName}`)" alt="icon">
    </div>
    <div class="project-action-buttons">
      <button v-if="projectData.liveDemoLink" @click="openLink(projectData.liveDemoLink)" class="live">Live demo</button>
      <button @click="openLink(projectData.sourceCodeLink)" class="source">Source codes</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["projectData"],
  methods: {
    openLink(link) {
      if(process.client) {
        window.open(link)
      }
    }
  }
}
</script>

<style scoped>

.project-root {
  width: 350px;
  height: auto;
  padding: 0 10px 10px 10px;
  background: var(--secondary-background);
  margin: 20px;
  border-radius: 4px;
}

.project-root .project-image {
  width: 100%;
  height: 250px;
  border-radius: 2px;
  margin-top: 10px;
}

.project-title {
  margin: 10px 0;
}

.project-description {
  font-weight: normal;
  color: gray;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px 0;
}

.icon {
  width: 40px;
  height: 40px;
  margin: 5px 20px 5px 0;
}

.project-action-buttons {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-action-buttons button {
  width: 48%;
  height: 90%;
  border-radius: 5px;
  font-size: 18px;
  transition: 300ms all;
}

.project-action-buttons .live {
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
}

.project-action-buttons .source {
  background: var(--primary);
  color: white;
}

.project-action-buttons .source:hover {
  background: var(--secondary);
}

.project-action-buttons .live:hover {
  background: var(--primary);
  color: white;
}


</style>
