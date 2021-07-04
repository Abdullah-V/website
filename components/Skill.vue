<template>
  <div
    class="skill-root"
    data-aos="zoom-in"
    data-aos-duration="600"
  >
    <img class="skill-icon" :src="require(`~/assets/icons/${skillData.iconFileName}`)" alt="">
    <div class="skill-container">
      <h2>{{ skillData.name }}</h2>
      <div class="progress-bar">
        <div class="inner-progress-bar" :style="{width: skillData.percent}">{{ skillData.percent }}</div>
      </div>
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

.skill-root {
  width: 300px;
  height: 100px;
  background: var(--secondary-background);
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin: 20px;
  padding: 10px;
}

.skill-icon {
  width: 20%;
  height: 100%;
  margin-right: 10px;
}

.skill-container {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.progress-bar {
  width: 100%;
  height: 40%;
  border: 1px solid var(--primary);
  border-radius: 3px;
}

.inner-progress-bar {
  height: 100%;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  padding-right: 10px;
}

</style>
