import { allPost } from './database.js'

export const dateGen = () => {
  const dia = Math.floor(Math.random() * 30)
  const mes = Math.floor(Math.random() * 12) + 1
  const año = 2023
  return {
    dia,
    mes,
    año
  }
}

const postsArray = await allPost()

export const postNew = () => {
  const newList = []
  postsArray.forEach((item) => {
    const info = dateGen()
    const user = {
      id: item.id,
      title: item.title,
      body: item.body,
      reactions: item.reactions,
      tags: item.tags,
      cover: 'https://picsum.photos/600/400',
      dateinfo: dateGen(),
      date: `${info.dia}/${info.mes}/2023`,
      comment: Math.floor(Math.random() * 30),
      user: 'Jhon Wayne',
      avatar: 'https://randomuser.me/api/portraits/men/60.jpg'
    }
    newList.push(user)
  })
  return newList
}

export const openPost = () => {
  const cardColumn = document.getElementById('cardColumn')
  cardColumn.addEventListener('dblclick', (event) => {
    let targetNode = event.target
    if (targetNode.tagName !== 'a') event.preventDefault()
    while (targetNode) {
      if (targetNode.id) {
        console.log(targetNode.id)
        window.location.href = `./pages/post.html?id=${targetNode.id}`
        break
      }
      targetNode = targetNode.parentNode
    }
  })
}

//  const btnSubmit = document.querySelector('#submitButton')
//   const postContent = document.querySelector('#postContent')
//   const postTitle = document.querySelector('#postTitle')
//   const updateButton = document.querySelector('#updateButton')
//   const deleteButton = document.querySelector('#deleteButton')
//   const msgContent = document.querySelector('#msgContent')
//   const postPublisher = document.querySelector('#actualPosts')
//   let postHeader = document.querySelector('#postHeader')
//   let postText = document.querySelector('#postText')

//   btnSubmit.addEventListener('click', (event) => {
//     event.preventDefault()

//     firstValidation()
//   })

//   const firstValidation = () => {
//     if (postTitle.value === '' || postContent.value === '') {
//       msgContent.style.color = 'red'
//       msgContent.innerHTML = 'Llena todos los campos!'
//     } else {
//       acceptPost()
//       // publishPost(postTitle.value, postContent.value)
//       displayAllPosts()
//     }
//   }

//   const resetForm = () => {
//     // debugger
//     postTitle.value = ''
//     postContent.value = ''
//   }

//   const acceptPost = () => {
//     posts.push({
//       title: postTitle.value,
//       date: Date.now(),
//       description: postContent.value
//     })
//     localStorage.setItem('posts', JSON.stringify(posts))
//     console.log('Este es el post', posts)
//   }

//   const publishPost = (pt, pc) => {
//     const p = {}
//     p.body = pc
//     p.title = pt
//     p.reactions = 0
//     p.tags = 'mytag'
//     p.userId = 0

//     secondaryCardGen(p, 'time', user)
//     resetForm()
//   }

//   const displayAllPosts = () => {
//     postPublisher.innerHTML = ''
//     const postHeaderDiv = document.createElement('div')
//     const postContentDiv = document.createElement('div')
//     postHeaderDiv.id = 'postHeader'
//     postContentDiv.id = 'postText'
//     postPublisher.appendChild(postHeaderDiv)
//     postPublisher.appendChild(postContentDiv)

//     postHeader = postHeaderDiv
//     postText = postContentDiv

//     posts = JSON.parse(localStorage.posts)
//     console.log(posts)
//     posts.forEach((post) => {
//       publishPost(post.title, post.description)
//     })
//     // publishPost()
//   }
//   displayAllPosts()

//   updateButton.addEventListener('click', (e) => {
//     debugger
//     e.preventDefault()
//     const forEdit = this.parentElement
//     const input = document.createElement('input')
//     input.type = 'text'
//     input.value = forEdit.replaceWith(input)

//     editButton.textContent = 'save'
//   })

//   deleteButton.addEventListener('click', (e) => {
//     e.preventDefault()
//     const deleting = this.parentElement
//     postPublisher.removeChild(deleting)
//   })

//   const createButton = (postNumber) => {
//     const newBUtton = document.createElement('a')
//     newBUtton.id = 'updateButton' + postNumber
//   }
// })
