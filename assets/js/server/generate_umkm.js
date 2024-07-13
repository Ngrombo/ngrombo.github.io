/* 
    File ini isinya adalah script untuk generate content website nya secara otomatis

    File ini tidak perlu di edit2, temen2 hanya perlu fokus ke file2 yang ada di dalam folder data
*/

function extractValueFromUrl(url) {
    const regex = /\/d\/(.*?)\//;
    const match = url.match(regex);

    if (match && match[1]) {
        return match[1];
    } else {
        return null;
    }
}


// UMKM Side
const umkmContainer = document.getElementById("umkm-content");

umkm_content.forEach((data) => {
    const rootDivUMKMItemContainer = document.createElement("div");
    rootDivUMKMItemContainer.className = "col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0";

    const divInnerWrapperFadeUp = document.createElement("div");
    divInnerWrapperFadeUp.className = "icon-box";
    divInnerWrapperFadeUp.id = "umkm-item";
    // divInnerWrapperFadeUp.setAttribute("data-aos", "fade-up");

    // creating image wrapper
    const divPicture = document.createElement("div");
    divPicture.className = "icon";

    divPicture.setAttribute("style", `
        max-width: 100%;
        max-height: 90%;
        overflow: hidden;
    `)

    const img = document.createElement("img");

    if(data.gambarProduk.includes("https")){
        img.src = "https://lh3.googleusercontent.com/d/" + extractValueFromUrl(data.gambarProduk);
    } else {
        img.src = "assets/img/umkm/" + data.gambarProduk;
    }

    img.width = 200;
    img.setAttribute("style", `
        display: block;
        width: 100%;
        height: 70%;
    `);

    divPicture.appendChild(img);
    // end of creating image wrapper

    const divTitleReadMoreWrapper = document.createElement("div");

    const h4Title = document.createElement("h4");
    h4Title.className = "title";
    h4Title.innerHTML = data.namaProduk;

    const readMore = document.createElement("p");
    readMore.innerHTML = "Selengkapnya..";
    readMore.setAttribute("style", `
        text-decoration: underline;
        font-style: italic;
        font-size: 14px;
        color: grey;
    `);

    readMore.className = "show";

    divInnerWrapperFadeUp.addEventListener("mouseleave", () => {
        // console.log("TEST");
        divInnerWrapperFadeUp.scrollTop = 0;
    });

    const pDesc = document.createElement("p");
    pDesc.className = "description";
    pDesc.innerHTML = data.keterangan;

    divTitleReadMoreWrapper.appendChild(h4Title);
    divTitleReadMoreWrapper.appendChild(readMore);

    divTitleReadMoreWrapper.className = "title-wrapper";

    // append to inner wrapper fade up div
    divInnerWrapperFadeUp.appendChild(divPicture);
    divInnerWrapperFadeUp.appendChild(divTitleReadMoreWrapper);
    divInnerWrapperFadeUp.appendChild(pDesc);

    // append to main root UMKM content container
    rootDivUMKMItemContainer.appendChild(divInnerWrapperFadeUp);

    // add to main UMKM container on website
    umkmContainer.appendChild(rootDivUMKMItemContainer);
})
// End Of UMKM Side