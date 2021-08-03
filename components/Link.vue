<template>
  <div class="link-root" @click="openLink">
    <img :src="require(`~/assets/icons/social/${linkInfo.icon}`)" />
    <span>{{ linkInfo.name }}</span>
  </div>
</template>

<script>
export default {
  props: ['linkInfo'],
  methods: {
    openLink() {
      if (process.client) {
        window.open(this.linkInfo.url)
      }
    }
  }
}
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
  transition: 300ms all;
}

.link-root:hover {
  transform: scale(1.1) !important;
}

.link-root img {
  width: 20%;
  margin: 0 20px;
}

.link-root span {
  font-size: 22px;
}
</style>
