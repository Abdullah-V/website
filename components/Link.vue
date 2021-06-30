<template>
  <div
    class="link-root"
    @click="openLink"
    data-aos="zoom-in"
    data-aos-duration="600"
  >
    <img :src="require(`~/assets/icons/social/${linkInfo.icon}`)" />
    <span>{{ linkInfo.name }}</span>
  </div>
</template>

<script>
export default {
  props: ["linkInfo"],
  methods: {
    openLink() {
      if (process.client) {
        window.open(this.linkInfo.url);
      }
    }
  }
};
</script>

<style scoped>
.link-root {
  width: 250px;
  height: 70px;
  border-radius: 4px;
  background: var(--secondary-background);
  cursor: pointer;
  display: flex;
  align-items: center;
}

.link-root:hover {
  transition: all 200ms;
  transform: scale(1.1);
}

.link-root img {
  width: 20%;
  margin: 0 20px;
}

.link-root span {
  font-size: 22px;
}
</style>
