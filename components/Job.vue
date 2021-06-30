<template>
  <div
    class="job-root"
    data-aos="zoom-in"
    data-aos-duration="600"
  >
    <img :src="require(`~/assets/images/${job.imageName}`)" :alt="job.name">

    <div class="job-infos">
      <a v-if="job.link" target="_blank" :href="job.link"><h1>{{ job.name }}</h1></a>
      <h1 v-else>{{ job.name }}</h1>
      <div class="infos-with-icons">
        <span title="Position" class="info-with-icon"><i class="fas fa-user"></i> {{ job.position }}</span>
        <span title="Location" class="info-with-icon"><i class="fas fa-map-marker-alt"></i> {{ job.location }}</span>
        <span title="Interval" class="info-with-icon"><i class="fas fa-clock"></i> {{ job.interval }}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ["job"]
}
</script>

<style scoped>

.job-root {
  width: 45%;
  height: 180px;
  background: var(--secondary-background);
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 30px 0;
}

img {
  width: 24%;
  height: 96%;
  border-radius: 5px;
}

.job-infos {
  margin-left: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.infos-with-icons {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.info-with-icon i {
  color: var(--primary);
  margin-right: 6px;
  /* margin: 4px 6px 6px 0; */
}

.info-with-icon {
  color: gray;
  font-size: 20px;
}

a {
  color: var(--text);
}

@media only screen and (max-width: 1125px) {
  .job-root {
    width: 60%;
  }
}

@media only screen and (max-width: 800px) {
  .job-root {
    width: 80%;
  }
  h1 {
    font-size: 26px;
  }
  .info-with-icon {
    font-size: 18px;
  }
}

@media only screen and (max-width: 480px) {
  .job-root {
    width: 96%;
  }
  h1 {
    font-size: 24px;
  }
  .info-with-icon {
    font-size: 16px;
  }
}
</style>
