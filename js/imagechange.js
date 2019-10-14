// fonction javascript qui permet de changer une photo miniature en version grande
// initialisation des const afin de fair des appels dans les fonction du dessous
// const variable qui garde la meme adresse mémoire 
// var variable de base a evité d'utiliser
// let variable valable que dans la fonction ou elle est declaré
const $gdImg = document.getElementById("grandeImage");
const $gdImgL = document.getElementById("grandeImagelight");
const $gdTImg = document.getElementById("titreGrandImage");
const $gdtxtImg = document.getElementById("textGrandImage");
const $infotitle = document.getElementById("textInfotitre");
// const $gdImgLight = document.getElementById("lightbox");

window.addEventListener("click", function (event) {
    let elementImg = event.target;
    // If the element, is not what we expect, abort
    if (elementImg.tagName !== "IMG" || elementImg.classList[0] !== "no") {
        return;
    }

    // var $textalt = elementImg.alt;
    var $textalt = elementImg.getAttribute("data-description");
    var $texttitle = elementImg.title;
    var $src = elementImg.src;

    $gdImg.src = $src;
    $gdImgL.src = $src;
    $gdTImg.innerHTML = $texttitle;
    $gdtxtImg.innerHTML = $textalt;
})

window.addEventListener("click", function (event) {
    let elementImg = event.target;

    if (!elementImg.classList.contains("btnnav")) {
        return;
    }

    var $textinfo = elementImg.getAttribute("data-info");

    $textinfo.innerHTML = $textinfo;
})
// demo de code possible

// document.querySelectorAll("img.vignette__img").forEach(function ($el) {
//     $el.addEventListener('click', function (evt) {

//     })
// })

// const openTime = 1000;
// const closeTime = 1000;

// $gdImg.addEventListener("click", function (event) {

//     document.body.classList.add("lightbox-open");
//     // document.body.classList.add("lightbox-opening");
//         // $gdImgLight.style.display = "flex";

//     // setTimeout(function(){
//     //     // Ce code sera executé dans openTime milliseconds
//     //     document.body.classList.remove("lightbox-opening");
//     // }, openTime);
// })

// $gdImgLight.addEventListener("click", function (event) {

//     document.body.classList.add("lightbox-closing");

//     setTimeout(function(){
//         // Ce code sera executé dans openTime milliseconds
//         document.body.classList.remove("lightbox-closing");
//         document.body.classList.remove("lightbox-open");
//     }, closeTime);
//         // $gdImgLight.style.display = "none";
// })