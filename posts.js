import { db } from "./db.js"

let paintings = document.getElementsByClassName('paintings')[0]
let posts = db.split('&&')

// console.log(posts[3].split('--'));


for (let i = 0; i < posts.length; i += 1) {
  // console.log(i)
  
  let postItems = posts[i].split('--')
  console.log(postItems)
  let tags = `
    <div class="card" onclick="openImg(`+ i + `)">
    <img src="img/`+ postItems[0] + `" alt="">
    <div class="info">
        <h2>`+ postItems[1] + `</h2>
        <h3>`+ postItems[2] + `</h3>
        <p>`+ postItems[3] + `</p>
        <a href="`+ postItems[4] + `" target="_blank">Музей</a>
    </div>
    </div>`

    paintings.innerHTML = paintings.innerHTML + tags
}


for (let i = 0; i < posts.length; i += 1) {
  let postItems = posts[i].split('--')
  console.log(postItems[1])
}