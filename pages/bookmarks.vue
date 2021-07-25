<template>
  <div class="bookmarks-root">
    <h1>All bookmarks</h1>
    <div class="bookmarks-container">
      <Bookmark
        :key="bookmark.title"
        v-for="bookmark in $store.state.bookmarks"
        :infos="bookmark"
      />
    </div>
    <button class="secondary-button" v-if="$store.state.isBookmarksFetching && !$store.state.isBookmarkPagesEnd">
      Load more
    </button>
    <button
      class="secondary-button"
      v-if="!$store.state.isBookmarksFetching && !$store.state.isBookmarkPagesEnd"
      @click="$store.dispatch('getBookmarkPage')"
    >
      Load more
    </button>
  </div>
</template>

<script>
import Bookmark from "~/components/Bookmark";

export default {
  name: "bookmarks",
  components: {
    Bookmark
  }
};
</script>

<style scoped>
.bookmarks-root {
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  text-align: center;
  margin: 20px 0 60px 0;
  font-size: 35px;
}

.bookmarks-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  row-gap: 30px;
}

button {
  margin: 40px 0 0 0;
}

</style>
