<template>
  <div id="project-root">
    <img id="project-image" src="https://pbs.twimg.com/profile_images/1362314692962746369/Fd6wHhPx_400x400.jpg" alt="image from project">
    <h2 id="project-title">Cargoglobal</h2>
    <h4 id="project-description">Cargoglobal is a sitefor share logistic adversiments</h4>
    <div class="tech-stack">
      <img class="icon" src="~/static/icons/vuejs.png" alt="icon">
      <img class="icon" src="~/static/icons/nuxtjs.png" alt="icon">
    </div>
    <div id="project-action-buttons">
      <button id="live">Live demo</button>
      <button id="source">Source codes</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: ["data"]
}
</script>

<style scoped>

#project-root {
  width: 350px;
  height: auto;
  padding: 10px;
  background: var(--secondary-background);
  margin: 20px;
  border-radius: 4px;
  cursor: pointer;
}

#project-root #project-image {
  width: 100%;
  height: 250px;
  border-radius: 2px;
}

#project-title {
  margin: 10px 0;
}

#project-description {
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
  width: 50px;
  height: 50px;
  margin: 5px 20px 5px 0;
}

#project-action-buttons {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#project-action-buttons button {
  width: 48%;
  height: 90%;
  border-radius: 5px;
  font-size: 18px;
  transition: 300ms all;
}

#project-action-buttons #live {
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
}

#project-action-buttons #source {
  background: var(--primary);
  color: white;
}

#project-action-buttons #source:hover {
  background: var(--secondary);
}

#project-action-buttons #live:hover {
  background: var(--primary);
  color: white;
}


</style>
