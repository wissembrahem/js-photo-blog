const myHero = document.getElementById("my-hero")

axios
    .get("https://lanciweb.github.io/demo/api/pictures/")
    .then((resp) => {
        const postsArray = resp.data;
        postsArray.forEach((curPost) => {
            console.log(curPost)
            myHero.innerHTML += `<div class="col">
                    <div class="card">
                        <h3 class="card-mension">dedica</h3>
                        <img src= "${curPost.url}">
                    </div>
                </div>`
        })
});
myHero.forEach((myHeroElem) => {
    myHeroElem.addEvenListener("click",function () {
        alert("click");
    });
});