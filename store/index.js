export const strict = false

export const state = () => ({
  pinnedRepos: [],
  allRepos: [],
  bookmarks: [],
  nextBookmarkPage: 0,
  isBookmarkPagesEnd: false,
  isBookmarksFetching: false
})

export const mutations = {
  setBookmarks(state, bookmarks) {
    state.bookmarks = bookmarks
  },
  setNextBookmarkPage(state) {
    state.nextBookmarkPage++
  }
}

export const actions = {
  async getBookmarkPage(context) {
    const query = [
      `https://api.raindrop.io/rest/v1/raindrops/0`,
      `?perpage=50`,
      `&page=${context.state.nextBookmarkPage}`,
      `&sort=-created`
    ].join('')

    context.state.isBookmarksFetching = true
    const res = await fetch(query, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_ACCESS_TOKEN}`
      }
    })

    const data = await res.json()
    let bookmarks = data.items

    if (bookmarks.length > 0) {
      context.commit('setBookmarks', [...context.state.bookmarks, ...bookmarks])
      context.commit('setNextBookmarkPage')
      context.state.isBookmarksFetching = false
    } else {
      context.state.isBookmarkPagesEnd = true
      context.state.isBookmarksFetching = false
      context.commit('bookmarkPagesEnd')
    }
  }
}
