const api_url = "https://api.jikan.moe/v4"
 
const searchText = document.querySelector ("#searchText")
const searchresults= document.querySelector ("#searchresults")
searchText .addEventListener ( "keyup" , function(){
   if (this.value.length > 3) {
      console.log(this.value)
  getAnimes(this.value)
   }
})

async function getAnimes(query){
   const res = await fetch(`${api_url}/anime?q=${query}`)
   const animes = await res.json()
   
   console.log(animes)

   if (animes.data.length > 0) {
      searchresults.style.display = "block";
      searchresults.innerHTML = ``;
      animes.data.map(anime => {
         searchresults.innerHTML += `
             <li class="singleAnime" data-url="fff"data-image="${anime.images.jpg.image_url}">
         <a herf="${anime.url}" target="_blank">${anime.title}</a>
         </li>
         `;
      })
      const singleAnimes = Array.from(document.querySelectorAll(".singleAnime"))
      const displayImage = document.querySelector ("#displayImage");
      singleAnimes.map(singleAnime => {
         singleAnime.addEventListener("mouseenter", function(){
            displayImage.style.display = "block";
            displayImage.innerHTML = `<img src="${this.dataset.image}">`;
         }
         )

         singleAnime.addEventListener("mouseout", function(){
            displayImage.style.display = "none";
            
         })
        

         singleAnime.addEventListener("click", function(){
            displayImage.style.display = "none";
            
         })
     
      }
         )

   }
   

}


const topTvAnime = document.querySelector("#topTvAnime")
async function getTopAnime(){
const res = await fetch(`${api_url}/top/anime`);
const topAnimes = await res.json()
    console.log(topAnimes.data);

topAnimes.data.map(topAnime =>{
   topTvAnime.innerHTML +=  `
 <div class="col-lg-3 col-md-6">
   <div class="item">
     <div class="thumb">
       <a href="${topAnime.url}">
       <img src="${topAnime.images.jpg.image_url}" alt="">
       </a>
       <span class="price">${topAnime.score}</span>
     </div>
     <div class="down-content">
       <span class="category">${topAnime.source }</span>
       <h4>${topAnime.title}</h4>
       
     </div>
   </div>
 </div>
 `;

 })
}
 getTopAnime()

 const upcomingSeries = document.querySelector("#upcomingSeries")
 async function getUpcomingSeries(){
     const res = await fetch(`${api_url}/seasons/upcoming`);
     const upcomingSerieses = await res.json()
     
     upcomingSerieses.data.map(item => {
          upcomingSeries.innerHTML +=  `
    <div class="col-lg-2 col-md-6 col-sm-6">
    <div class="item">
    <div class="thumd">
        <a href="${item.url}"><img src="${item.images.jpg.image_url}" alt=""></a>
      </div>
    <div class="down-content">
          <span class="category">${item.source}</span>
         <h4>${item.title.substring(0, 20)}</h4>
         </div>
         </div>
         </div>

  `;
 
  })
 }
  getUpcomingSeries()

  const randomCharacter = document.querySelector("#randomCharacter")
  async function getrandomCharacter(){
   const response = await fetch(`${api_url}/random/characters`);
   const RCD = await response.json();
       console.log(RCD);
         randomCharacter.innerHTML = ` 
         <img src="${RCD.data.images.jpg.image_url}" alt="">
         <span class="price">${RCD.data.favorites}</span>
         <span class="name">${RCD.data.name}</span>
         `
  }
getrandomCharacter()





const category = document.querySelector("#category")
async function categories(){
const res = await fetch(`${api_url}/seasons/upcoming`);
const categories = await res.json()
    console.log(categories.data);

    category.data.map(category => {
      categories.innerHTML +=  `
      <div class="col-lg col-sm-6 col-xs-12">
      <div class="item">
        <h4>Action</h4>
        <h6>vagueness</h6>
        <div class="thumb">
          <a href="${category.url}"><img src="$category.images.jpg.image_url}" alt=""></a>
        </div>
      </div>
        <h4>vagueness</h4>
        </div>
      </div>
    </div>
 `;

 })
}
categories()





 






