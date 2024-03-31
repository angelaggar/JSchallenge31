import { postNew, openPost } from './aditionals.js'
import { searchPost } from './searchfilters.js'

const newPostList = postNew()

const randomOrder = newPostList.map(
  (post) => newPostList[Math.floor(Math.random() * newPostList.length)]
)

// /// ///////////Generador de cards///////////////////
const cardColumn = document.getElementById('cardColumn')

export const cardGen = (post) => {
  const anchor = document.createElement('a')
  const image = document.createElement('img')
  const infoUser = document.createElement('div')
  const profilePic = document.createElement('img')
  const userNameText = document.createElement('h5')
  const infoContainer = document.createElement('div')
  const info = document.createElement('div')
  const infoTitle = document.createElement('h2')
  const infoText = document.createElement('p')
  const hashTagsContainer = document.createElement('div')
  const hashTag = document.createElement('p')
  const reactionContainer = document.createElement('div')
  const reaction = document.createElement('div')
  const commentsC = document.createElement('p')
  const datePost = document.createElement('p')
  const contDate = document.createElement('div')
  const mainC = document.createElement('div')

  // reacciones//
  reactionContainer.classList.add('d-flex', 'flex-row', 'p-2')
  reaction.classList.add('mx-2', 'fs-6')
  reaction.innerText = `🤔❤️👍😒Reactions ${post.reactions}`
  commentsC.classList.add('mx-2', 'f-6', 'text-decoration-none')
  commentsC.innerText = `🗨️ Comments ${post.comment}`
  reactionContainer.append(reaction, commentsC)

  // hashtags//
  hashTagsContainer.classList.add('pl-5')
  hashTag.classList.add('badge', 'text-bg-light', 'text-decoration-none')
  hashTag.innerHTML = `${post.tags}`
  hashTagsContainer.append(hashTag)

  // card info//
  infoText.classList.add('card-text')
  infoTitle.classList.add('card-title', 'fw-bold')
  infoTitle.innerHTML = `${post.title}`
  infoText.innerHTML = `${post.body}`
  info.append(infoTitle, infoText)

  // info container//
  infoContainer.classList.add('p-4')
  infoContainer.setAttribute('id', `${post.id}`)
  infoContainer.append(info, hashTag, reactionContainer)

  // icon profile//
  userNameText.classList.add('card-text', 'p-2')
  profilePic.classList.add('card-img-top', 'rounded-circle')
  profilePic.classList.add('w-3')
  profilePic.setAttribute('src', `${post.avatar}`)
  profilePic.setAttribute('style', 'width: 85px;')
  infoUser.classList.add('post-Creator', 'card-body', 'd-flex', 'flex-row')
  contDate.classList.add('d-flex', 'flex-column', 'ps-2')
  userNameText.innerHTML = `${post.user}`
  datePost.innerText = `${post.date}`
  contDate.append(userNameText, datePost)
  infoUser.append(profilePic, contDate)

  // top image//
  image.classList.add('card-img-top')
  image.setAttribute('src', `${post.cover}`)

  anchor.classList.add('postlink')
  anchor.append(image)

  // full card//
  mainC.classList.add('card', 'm-1')
  mainC.setAttribute('name', 'cardContainer')
  mainC.append(anchor, infoUser, infoContainer)
  mainC.setAttribute('id', `${post.id}`)
  cardColumn.append(mainC)

  return post.id
}

export const postFirstShow = () => {
  randomOrder.forEach((item) => cardGen(item))
}

postFirstShow()
