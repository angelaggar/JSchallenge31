import { postNew } from './aditionals.js'
import { cardGen, postFirstShow } from './postDom.js'

const postList = postNew()
const titlesList = postList.map((item) => item.title.toLowerCase())

const cardColumn = document.getElementById('cardColumn')

const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const relevant = document.getElementById('relevant')
const latest = document.getElementById('latest')
const top = document.getElementById('top')

// ///////////////// FUNCION PARA EL BOTON DE BUSQUEDA
export const searchPost = () => {
  const inputValue = searchInput.value.toLowerCase().split(/[ ,]+/)
  const result = []

  titlesList.forEach((title, index) => {
    const words = title.split(/[ ,]+/)
    if (inputValue === words) return result.push(postList[index])
    if (inputValue.some((word) => words.includes(word))) { result.push(postList[index]) }
  })
  return result
}

const printSearch = () => {
  cardColumn.innerHTML = ''
  const searchResult = searchPost()
  searchResult.forEach((item) => {
    console.log(cardGen(item))
  })
}

searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    printSearch()
  }
})

searchButton.addEventListener('click', () => {
  printSearch()
})

// //////////////////// FUNCION PARA RELEVANT PAGE, MUESTRA LOS POSTS CON MAS REACCIONES
export const relevantPage = () => {
  const relevants = []
  const reaction = postList
    .map((item) => item.reactions)
    .sort()
    .reverse() // busca el num de react mas grande
  let reactNum = reaction[0]
  while (reactNum >= 0) {
    if (reactNum < 0) break
    const clasify = () => {
      const posts = postList.filter((post) => post.reactions === reactNum)
      relevants.push(posts)
    }
    clasify()
    reactNum -= 1
  }
  return relevants.flat()
}

relevant.addEventListener('click', () => {
  cardColumn.innerHTML = ''
  const relevants = relevantPage()
  relevants.forEach((item) => cardGen(item))
})

// ////////////////// FUNCION PARA TOP PAGE, MUESTRA LOS POST CON MAS COMENTARIOS
export const topPage = () => {
  const topPosts = []
  const comments = postList
    .map((item) => item.comment)
    .sort((a, b) => (a > b ? -1 : 1))
  console.log(comments)
  let totalCom = comments[0]
  while (totalCom >= 0) {
    if (totalCom < 0) break
    const clasify = () => {
      const comments = postList.filter((post) => post.comment === totalCom)
      topPosts.push(comments)
    }
    clasify()
    totalCom -= 1
  }
  return topPosts.flat()
}

top.addEventListener('click', () => {
  cardColumn.innerHTML = ''
  const topPosts = topPage()
  topPosts.forEach((item) => cardGen(item))
})

// /////////////// FUNCION PARA LATEST, MUESTRA LOS POSTS MAS RECIENTES

const compareDate = () => {
  
}

console.log(compareDate())
