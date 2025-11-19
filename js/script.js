const myHero = document.getElementById("my-hero")

axios
    .get("https://lanciweb.github.io/demo/api/pictures/")
    .then((resp) => {
        const postsArray = resp.data;
        postsArray.forEach((curPost) => {
            console.log(curPost)
            myHero.innerHTML += `<div class="col flex justify-content">
            <img class="pin" src="img/pin.svg" >
                    <div class="card polaroid">
                        <img src= "${curPost.url}">
                        <h3 class="card-mension">dedica</h3>
                    </div>
                </div>`
        })
    });
myHero.forEach((myHeroElem) => {
    myHeroElem.addEvenListener("click", function () {
        alert("click");
    });
});