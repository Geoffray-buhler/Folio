/**
 *  Code applicatif
 *  Exécuté au chargement de la page
 */

//  On definit une constante avec un lien vers le dossier images de notre site internet
const img = "./img";

var list = 0;

// On cree un tableau avec les differant albums et dans ses albums je defini le nom de l'image / 
// le titre de l'image ainsi que les infos qui vont avec.

var data = [{
        album_name: "Heros",
        album_src: "Heros",
        index: 1,
        photo: [{
                file: "211f642618a7d5298c16cfc2e079d646.jpg",
                title: "Cosplay de ctn america",
                info: "&#x3C;b&#x3E;Steven &#xAB; Steve &#xBB; Rogers&#x3C;/b&#x3E;&#x3C;p&#x3E;alias Captain America est un super-h&#xE9;ros &#xE9;voluant dans l&#x27;univers Marvel de la maison d&#x27;&#xE9;dition Marvel Comics. Cr&#xE9;&#xE9; par sc&#xE9;nariste Joe Simon et le dessinateur Jack Kirby, le personnage de fiction appara&#xEE;t pour la premi&#xE8;re fois dans le comic book Captain America Comics #1 en d&#xE9;cembre 1940. il a pris quelque kilos.&#x3C;/p&#x3E;"
            },
            {
                file: "17439786-393056437732970-820167332-n.jpg",
                title: "Cosplay de Wolverine",
                info: "&#x3C;b&#x3E;Wolverine&#x3C;/b&#x3E;&#x3C;p&#x3E;Logan, alias Wolverine, est un super-h&#xE9;ros &#xE9;voluant dans l&#x27;univers Marvel de la maison d&#x27;&#xE9;dition Marvel Comics.&#x3C;/p&#x3E;"
            },
            {
                file: "77376502dd2755fc56e196688ca0ac3f.jpg",
                title: "Cosplay de Chun li",
                info: "<strong><p>Chun-Li (春麗)</p></strong> est un personnage de fiction issu de la série de jeux vidéo Street Fighter de la compagnie Capcom. Il s'agit de la première femme combattante de la série, de nationalité chinoise qui fait sa première apparition dans Street Fighter II: The World Warrior en 1991 sur borne d'arcade. Ce personnage a révolutionné le concept de personnage féminin dans les jeux vidéo : elle est souvent considérée comme la première à avoir un rôle « fort » de femme d'action, au lieu d'être une simple « demoiselle en détresse » à délivrer, comme c'était souvent le cas auparavant"
            },
            {
                file: "c4fa1e29496efc72f1d02f9aa5de897b.jpg",
                title: "Cosplay de Wolverine",
                info: "<strong><p>Logan</p></strong>, alias Wolverine, est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par l'éditeur en chef de Marvel Comics Roy Thomas3, le scénariste Len Wein4 et le dessinateur John Romita, Sr. (Romita a conçu le personnage, bien qu'il ait été dessiné pour la première fois par Herb Trimpe), le personnage de fiction apparaît pour la première fois dans Incredible Hulk (vol. 1) #180 en octobre 1974."
            },
            {
                file: "c000110.jpg",
                title: "Cosplay de Inu-Yasha",
                info: "<strong><p>Inu-Yasha</p></strong> est le personnage principal de l'histoire. C'est un hanyô, un être hybride mi-homme mi-démon, à l'apparence humaine d'une quinzaine d'années. Il a un sale caractère, malpoli, désobligeant, fier, violent et même un peu brute, mais il sait être gentil et généreux (même s'il ne s'en rend pas compte à ces moments-là). Il déteste perdre et voir ses amis en danger. Il a le pouvoir de se régénérer lorsqu’il est blessé et possède une force surnaturelle grâce à sa forme de Hanyô. Cependant, à chaque nouvelle lune, Inu-Yasha se métamorphose en simple humain, perdant alors ses dons surnaturels. Il est en possession de Tessaïga, un sabre magique dont le nom signifie « les crocs broyeurs d’acier ». Le père d’Inu-Yasha, un puissant démon géant, avait fabriqué ce sabre à partir d’un de ses crocs, mais il faut avoir un peu d’ADN humain ou un bras humain pour l’utiliser, il a été créé pour protéger la mère d’Inu-Yasha, une humaine. Tessaïga possède plusieurs techniques: la cicatrice du vent (kaze no kizu), le bakuryûha, et plus tard le barrage de diamantine (kongosoha), Ryûjin no Tessaïga et le Meidô Zangetsuha qu'Inu-Yasha apprendra au fur et à mesure de leur voyage avec l’aide de Tōtosaï. Mais Inu-Yasha a aussi ses propres techniques de combat, le Sankontessô (griffes tranchantes) et le Hijinkesso (lames de sang), qui sont très utiles lorsqu'il est dans l'incapacité d'utiliser son sabre. Bien qu'au début ils se détestent, Inu-Yasha va développer des sentiments envers Kagome. Cependant il a toujours en tête son ancien amour, la prêtresse Kikyo, et ce fait envenimera leur liaison..."
            },
            {
                file: "ca59404c5ddec6ddba9676c68f45fd74.jpg",
                title: "Cosplay de son-goku",
                info: "<strong><p>Son Goku (孫悟空, Son Gokū?, anciennement orthographié Sangoku et Son Gokû)</p></strong>, de son vrai nom Kakarot (カカロット, Kakarotto?), est un personnage de fiction créé par Akira Toriyama et principal héros du manga Dragon Ball en 1984. Il apparaît pour la première fois le 20 novembre 1984 dans le Weekly Shōnen Jump."
            },
            {
                file: "cae2d60a5996f88ffd23185ca0531a33.jpg",
                title: "Cosplay de IronMan",
                info: "&#x3C;b&#x3E;IronMan&#x3C;/b&#x3E;&#x3C;p&#x3E;Anthony &#xAB; Tony &#xBB; Stark, alias Iron Man est un super-h&#xE9;ros &#xE9;voluant dans l&#x27;univers Marvel de la maison d&#x27;&#xE9;dition Marvel Comics.&#x3C;/p&#x3E;"
            },
            {
                file: "e629fdb68478c28d8d89158cde5a0ad3.jpg",
                title: "Cosplay de Sailor moon",
                info: "&#x3C;b&#x3E;Sailor Moon&#x3C;/b&#x3E;&#x3C;p&#x3E;, abr&#xE9;viation de &#xAB; Bish&#x14D;jo Senshi Sailor Moon &#xBB; est une franchise de m&#xE9;dias japonaise, incluant manga, animes, com&#xE9;dies musicales, drama, jeux vid&#xE9;o et divers produits d&#xE9;riv&#xE9;s, cr&#xE9;&#xE9;e par Naoko Takeuchi en 1992.&#x3C;/p&#x3E;"
            },
            {
                file: "fb_cosplay-femme-dragon-ball-illustr-2.jpg",
                title: "Cosplay de DBZ version feminine",
                info: "<strong><p>Picolo / Sangoku / Vegeta</p></strong> Feminisée et mis en cosplay"
            },
            {
                file: "w_yupbdxvnzma3yaucr0i7.png",
                title: "Image du film Star wars 4",
                info: "C3PO et R2D2 en fuite"
            },
            {
                file: "Wonderwoman.png",
                title: "Cosplay de Wonder Woman",
                info: "&#x3C;b&#x3E;Wonder Woman&#x3C;/b&#x3E; &#x3C;p&#x3E; est une super-h&#xE9;ro&#xEF;ne de bande dessin&#xE9;e am&#xE9;ricaine cr&#xE9;&#xE9;e par William Moulton Marston, qui appara&#xEE;t pour la premi&#xE8;re fois en d&#xE9;cembre 1941 dans All Star Comics #8. Elle est, &#xE0; cette &#xE9;poque, l&#x27;une des premi&#xE8;res super-h&#xE9;ro&#xEF;nes et demeure la plus c&#xE9;l&#xE8;bre d&#x27;entre elles."
            }
        ]
    },
    {
        album_name: "Zeros",
        album_src:"Zeros",
        index: 2,
        photo: [
            {
                file: "2660163086_small_2-600x480.jpg",
                title: "Gaiou sama",
                info: "&#x3C;b&#x3E;Wonder Woman&#x3C;/b&#x3E; &#x3C;p&#x3E; est une super-h&#xE9;ro&#xEF;ne de bande dessin&#xE9;e am&#xE9;ricaine cr&#xE9;&#xE9;e par William Moulton Marston, qui appara&#xEE;t pour la premi&#xE8;re fois en d&#xE9;cembre 1941 dans All Star Comics #8. Elle est, &#xE0; cette &#xE9;poque, l&#x27;une des premi&#xE8;res super-h&#xE9;ro&#xEF;nes et demeure la plus c&#xE9;l&#xE8;bre d&#x27;entre elles."
            },
            {
                file: "En.jpg",
                title: "Gaiou sama",
                info: "&#x3C;b&#x3E;Wonder Woman&#x3C;/b&#x3E; &#x3C;p&#x3E; est une super-h&#xE9;ro&#xEF;ne de bande dessin&#xE9;e am&#xE9;ricaine cr&#xE9;&#xE9;e par William Moulton Marston, qui appara&#xEE;t pour la premi&#xE8;re fois en d&#xE9;cembre 1941 dans All Star Comics #8. Elle est, &#xE0; cette &#xE9;poque, l&#x27;une des premi&#xE8;res super-h&#xE9;ro&#xEF;nes et demeure la plus c&#xE9;l&#xE8;bre d&#x27;entre elles."
            },
            {
                file: "w_cartoon-real-life-lookalikes-60-57d6c4adb3f31-700.jpg",
                title: "Gaiou sama",
                info: "&#x3C;b&#x3E;Wonder Woman&#x3C;/b&#x3E; &#x3C;p&#x3E; est une super-h&#xE9;ro&#xEF;ne de bande dessin&#xE9;e am&#xE9;ricaine cr&#xE9;&#xE9;e par William Moulton Marston, qui appara&#xEE;t pour la premi&#xE8;re fois en d&#xE9;cembre 1941 dans All Star Comics #8. Elle est, &#xE0; cette &#xE9;poque, l&#x27;une des premi&#xE8;res super-h&#xE9;ro&#xEF;nes et demeure la plus c&#xE9;l&#xE8;bre d&#x27;entre elles."
            }
    ]
    },
    {
        album_name: "Perso Secondaire",
        album_src: "PersoSec",
        index: 3,
        photo: [{
            file: "images (1).jpg",
            title: "Cosplay de Chewee / R2d2 / C3PO",
            info: "Cosplay de KLITé !"
        }]
    },
    {
        album_name: "Lieux",
        album_src:"Lieux",
        index: 4,
        photo: [
            {
                file: "838183.jpg",
                title: "Gaiou sama",
                info: "&#x3C;b&#x3E;Wonder Woman&#x3C;/b&#x3E; &#x3C;p&#x3E; est une super-h&#xE9;ro&#xEF;ne de bande dessin&#xE9;e am&#xE9;ricaine cr&#xE9;&#xE9;e par William Moulton Marston, qui appara&#xEE;t pour la premi&#xE8;re fois en d&#xE9;cembre 1941 dans All Star Comics #8. Elle est, &#xE0; cette &#xE9;poque, l&#x27;une des premi&#xE8;res super-h&#xE9;ro&#xEF;nes et demeure la plus c&#xE9;l&#xE8;bre d&#x27;entre elles."
            },
            {
                file: "838185.jpg",
                title: "Gaiou sama",
                info: "&#x3C;b&#x3E;Wonder Woman&#x3C;/b&#x3E; &#x3C;p&#x3E; est une super-h&#xE9;ro&#xEF;ne de bande dessin&#xE9;e am&#xE9;ricaine cr&#xE9;&#xE9;e par William Moulton Marston, qui appara&#xEE;t pour la premi&#xE8;re fois en d&#xE9;cembre 1941 dans All Star Comics #8. Elle est, &#xE0; cette &#xE9;poque, l&#x27;une des premi&#xE8;res super-h&#xE9;ro&#xEF;nes et demeure la plus c&#xE9;l&#xE8;bre d&#x27;entre elles."
            },
            {
                file: "lieu-de-tournage-star-wars-matmata-tunisie_5773403.jpg",
                title: "Gaiou sama",
                info: "&#x3C;b&#x3E;Wonder Woman&#x3C;/b&#x3E; &#x3C;p&#x3E; est une super-h&#xE9;ro&#xEF;ne de bande dessin&#xE9;e am&#xE9;ricaine cr&#xE9;&#xE9;e par William Moulton Marston, qui appara&#xEE;t pour la premi&#xE8;re fois en d&#xE9;cembre 1941 dans All Star Comics #8. Elle est, &#xE0; cette &#xE9;poque, l&#x27;une des premi&#xE8;res super-h&#xE9;ro&#xEF;nes et demeure la plus c&#xE9;l&#xE8;bre d&#x27;entre elles."
            },
            {
                file: "lieu-de-tournage-star-wars-phang-nga-en-thailande_5773409.jpg",
                title: "Gaiou sama",
                info: "&#x3C;b&#x3E;Wonder Woman&#x3C;/b&#x3E; &#x3C;p&#x3E; est une super-h&#xE9;ro&#xEF;ne de bande dessin&#xE9;e am&#xE9;ricaine cr&#xE9;&#xE9;e par William Moulton Marston, qui appara&#xEE;t pour la premi&#xE8;re fois en d&#xE9;cembre 1941 dans All Star Comics #8. Elle est, &#xE0; cette &#xE9;poque, l&#x27;une des premi&#xE8;res super-h&#xE9;ro&#xEF;nes et demeure la plus c&#xE9;l&#xE8;bre d&#x27;entre elles."
            },
            {
                file: "lieu-de-tournage-star-wars-tunisie_5773407-777x437.jpg",
                title: "Gaiou sama",
                info: "&#x3C;b&#x3E;Wonder Woman&#x3C;/b&#x3E; &#x3C;p&#x3E; est une super-h&#xE9;ro&#xEF;ne de bande dessin&#xE9;e am&#xE9;ricaine cr&#xE9;&#xE9;e par William Moulton Marston, qui appara&#xEE;t pour la premi&#xE8;re fois en d&#xE9;cembre 1941 dans All Star Comics #8. Elle est, &#xE0; cette &#xE9;poque, l&#x27;une des premi&#xE8;res super-h&#xE9;ro&#xEF;nes et demeure la plus c&#xE9;l&#xE8;bre d&#x27;entre elles."
            },
            {
                file: "star-wars-partez-sur-les-lieux-cultes-du-tournage.jpeg",
                title: "Gaiou sama",
                info: "&#x3C;b&#x3E;Wonder Woman&#x3C;/b&#x3E; &#x3C;p&#x3E; est une super-h&#xE9;ro&#xEF;ne de bande dessin&#xE9;e am&#xE9;ricaine cr&#xE9;&#xE9;e par William Moulton Marston, qui appara&#xEE;t pour la premi&#xE8;re fois en d&#xE9;cembre 1941 dans All Star Comics #8. Elle est, &#xE0; cette &#xE9;poque, l&#x27;une des premi&#xE8;res super-h&#xE9;ro&#xEF;nes et demeure la plus c&#xE9;l&#xE8;bre d&#x27;entre elles."
            }
        ]
    },
    {
        album_name: "Vilains",
        album_src: "Vilains",
        index: 5,
        photo: [{
                file: "9dfba60620fdb7d03fa396d237b64ab9.jpg",
                title: "Cosplay de Akuma",
                info: "Akuma ennemi jurer de ken et ryu."
            },
            {
                file: "mer13.jpg",
                title: "Cosplay de méchant",
                info: "Pire ennemi du monde de l'humour a arreter mort ou vif."
            },
            {
                file: "En.jpg",
                title: "Cosplay de president",
                info: "Président est une marque commerciale pour une série de fromages industriels français du groupe agroalimentaire Lactalis, créée par Michel Besnier en 1968. En 2018, c'est la troisième marque alimentaire préférée des Français, et celle ayant le taux de pénétration le plus grand."
            }
        ]
    },
    {
        album_name: "Neutres",
        album_src:"Neutres",
        index: 6,
        photo: [{
            file: "1.jpg",
            title: ""
        }]
    },
    {
        album_name: "Code de la route PACA",
        album_src: "CDLRPACA",
        index: 7,
        photo: [
            {
            file: "ob_43903d_fotolia-72092006-xs.jpg",
            title: "Feu rouge",
            info: "C'est plus une décoration pour noël que une vrai signalétique."
            },
            {
                file: "France_road_sign_AB4.svg.png",
                title: "Stop",
                info: "Plus un conseille qu'une obligation."
            },
            {
                file: "PHO1fe3bc06-5090-11e4-a023-d6fd95fb5702-805x453.jpg",
                title: "Cligniotants",
                info: "sert a rien ou au pire a noël pour amuser les enfants, ils ne sont pas de serie !"
            },
            {
                file: "images.jpg",
                title: "Limitation de vitesse",
                info: "Indique la vitesse ou il ne faut surtout pas etre soit 20km/h en dessous ou 90km/h au dessus !"
            }
    ]
},
    {
        album_name: "Autres",
        album_src: "Autres",
        index: 8,
        photo: [{
            file: "1.jpg",
            title: "",
            info: ""
        }]
    }
];

// je cree une boucle avec le nombre de dossier correspond au nombre d'entrée dans le tableau data
// je verifie que les index de mes boutons sont 1/2 ou 5 pour leur mettre une classe differente

for (let dossier of data) {
    let btn = document.createElement("BUTTON");
    btn.innerHTML = dossier.album_name;
    if (dossier.index === 1) {
        btn.className = "btn shadow btn-outline-success text-font-color btnnav";
    } else if (dossier.index === 2) {
        btn.className = "btn shadow btn-outline-info text-font-color btnnav";
    } else if (dossier.index === 5) {
        btn.className = "btn shadow btn-outline-danger text-font-color btnnav";
    } else {
        btn.className = "btn shadow btn-outline-warning text-font-color btnnav";
    }
    //demande de placer les element cree dans le div icilsbtn
    document.getElementById("icilsbtn").appendChild(btn);

    // lorsque on appuye sur le bouttons cela va crée une nouveau bloque HTML qui correspond au nombre d'images mis dans les album plus haut 
    btn.addEventListener('click', function (event) {
        event.preventDefault();

        const $container = document.getElementById("icilesvignettes");

        var newHTML = "";
        // for(const photo of dossier.photos){
        for (let i = 0; i < dossier.photo.length; ++i) {
            const photo = dossier.photo[i];
            var imgSrc = img + '/' + dossier.album_src + '/' + photo.file;
            var btnUrl = "#";
            //debut de la variable HTML
            newHTML +=
                `
            <a href="${btnUrl}" class="btn">
                <img src="${imgSrc}" class="no img-fluid img-thumbnail" data-album-idx="${dossier.index}" data-photo-idx="${i}">
            </a>
            `;
        } //mise en place de la balise HTML dans le container.
        $container.innerHTML = newHTML;
    });
};

// losque on va cliqué sur les boutons vignettes cela ca verifier que c'est bien les boutons vignette ca va recuperer les ID dasn album ainsi
// que de l'image puis ca va crée un bloc HTML et le mettre a en place dans le DIV ici les infos

window.addEventListener("click", function (event) {
    let elementImg = event.target;
    // If the element, is not what we expect, abort
    if (elementImg.tagName !== "IMG" || elementImg.classList[0] !== "no") {
        return;
    } else {
        // console.log(elementImg);

        const albumIdx = new Number(elementImg.getAttribute('data-album-idx'));
        const photoIdx = new Number(elementImg.getAttribute('data-photo-idx'));

        const album = data[albumIdx - 1];
        const photo = album.photo[photoIdx];

        var imgSrc = img + '/' + album.album_src + '/' + photo.file;

        var $containerGR = document.getElementById("icilesinfos");
        var $containerGRPhoto = document.getElementById("icilaGRphoto");

        var newGRImg = `
        <div class="col-8" ><h2 class="my-3">${photo.title}</h2></div>

        <div class="col-8" >
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" >
                <img src="${imgSrc}" class="img-fluid" id="grandeImage">
            </button>
        </div>
        
        <div class="col-8"><div id="textGrandImage" class="my-3">${restoreHTMLEntities(photo.info)}</div></div>
        `;

        var newGRPhoto = `
            <img src="${imgSrc}" class="img-fluid" id="grandeImagelight">
        `;
    }
    $containerGR.innerHTML = newGRImg;
    $containerGRPhoto.innerHTML = newGRPhoto;
})

//fonctionnalité pour traduire automatiquement le text bizarre en text claire pour le navigateur.

const $txtarea = document.createElement("textarea");

function restoreHTMLEntities(texte) {
    // Transforme les entités
    $txtarea.innerHTML = texte;

    return $txtarea.value;
}