<template>
  <div class="bookmark-root">
    <img
      v-if="infos.media.find(m => m.type === 'image').link"
      :src="infos.media.find(m => m.type === 'image').link"
    />
    <div class="bookmark-infos">
      <a target="_blank" :href="infos.link" class="bookmark-title">{{
        infos.title
      }}</a>
      <span class="bookmark-description">
        {{ infos.excerpt }}
      </span>
      <div class="bookmark-footer">
        <span>{{ infos.domain }}</span>
        <span>・</span>
        <span
          >{{ new Date(infos.created).getDate() }}.{{
            new Date(infos.created).getMonth() + 1
          }}.{{ new Date(infos.created).getFullYear() }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['infos']
}
</script>

<style scoped>
.bookmark-root {
  width: 600px;
  height: 170px;
  background: var(--secondary-background);
  border-radius: 8px;
  padding: 16px;
  display: flex;
}

.bookmark-root img {
  width: 24%;
  height: 100%;
  border-radius: 6px;
  margin-right: 16px;
}

.bookmark-infos {
  padding: 2px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.bookmark-title {
  line-height: 22px;
  font-size: 22px;
  cursor: pointer;
}

.bookmark-description {
  margin-top: 8px;
  display: block;
  color: var(--secondary-text);
  font-size: 16px;
}

.bookmark-footer {
  margin-top: auto;
  color: gray;
  font-size: 16px;
}

@media only screen and (max-width: 1125px) {
  .bookmark-root {
    width: 60%;
  }
}

@media only screen and (max-width: 800px) {
  .bookmark-root {
    width: 80%;
  }
  .bookmark-title {
    font-size: 20px;
  }
  .bookmark-description,
  .bookmark-footer {
    font-size: 14px;
  }
}

@media only screen and (max-width: 480px) {
  .bookmark-root {
    width: 96%;
  }
}
</style>
