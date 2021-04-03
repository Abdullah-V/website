<template>
  <div id="skill-root">
    <img id="skill-icon" :src="require('~/assets/icons/vuejs.svg')" alt="">
    <div class="skill-container">
      <h2>Vue.js</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: ['skillData']
}
</script>

<style scoped>

#skill-root {
  width: 300px;
  height: 100px;
  background: var(--secondary-background);
  border-radius: 5px;
  display: flex;
  align-items: center;
}

#skill-icon {
  width: 20%;
  height: 100%;
}

.skill-container {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
