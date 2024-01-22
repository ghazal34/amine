
async function getAnimes(query) {
   const res = await fetch(`${api_url}/anime?q=${query}`);
   const animes = await res.json();

   console.log(animes);

   if (animes.data.length > 0) {
      searchresults.style.display = "block";
      searchresults.innerHTML = ``;
      animes.data.map(anime => {
         searchresults.innerHTML += `
                  <li class="singleAnime" data-image="${anime.images.jpg.image_url}">
                        <a href="${anime.url}" target="_blank"> ${anime.title}</a>
                  </li>     
                  `;
      });
      const singleAnimes;





   }
}
