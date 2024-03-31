const getPosts = async () => {
  const res = await fetch('https://dummyjson.com/posts?limit=40').then((res) =>
    res.json()
  )
  return res
}

export const allPost = async () => {
  const postsObj = await getPosts()
  const postsOnDB = Object.getOwnPropertyNames(postsObj.posts).map(
    (key) => postsObj.posts[key]
  )
  postsOnDB.pop()
  const postOnLocal = localStorage.getItem('posts')
  /* Sustituir el posts de local storage por el nombre que se haya
  asignado para el nombre del array de postOnLocal. */
  if (postOnLocal === null || postOnLocal === undefined) return postsOnDB
  postsOnDB.concat(postOnLocal)

  return postsOnDB
}
