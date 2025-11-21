const myHero = document.getElementById("my-hero")

axios
    .get("https://lanciweb.github.io/demo/api/pictures/")
    .then((resp) => {
        const postsArray = resp.data;
        postsArray.forEach((curPost) => {
            myHero.innerHTML += `<div class=" col flex justify-content">
            <img class="pin" src="img/pin.svg" >
                    <div class="card polaroid" data-url="${curPost.url}">
                        <img src= "${curPost.url}">
                        <h3 class="card-mension">dedica</h3>
                    </div>
                </div>`
        })
      
        const arrayFoto = document.querySelectorAll(".polaroid");
        arrayFoto.forEach(function (foto) {
            foto.addEventListener("click", function () {
                overlay.classList.remove("d-none")
                polaroid.innerHTML = `<img src="${this.dataset.url}" alt="Foto">`
            });
        });

    });
  const overlay = document.querySelector(".overlay");
        const polaroid = document.querySelector(".center")
        const polaroids = document.querySelectorAll(".curPost img");
   overlay.addEventListener("click", function () {
    overlay.classList.add("d-none");
});
