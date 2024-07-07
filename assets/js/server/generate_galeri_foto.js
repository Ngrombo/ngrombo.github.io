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

// Galeri Foto Side
const galeriFotoContainer = document.getElementById("galeri-foto");

galeri_foto.forEach((data) => {
    const divItemFotoContainer = document.createElement("div");
    divItemFotoContainer.className = "col-lg-4 col-md-6 portfolio-item";

    const portfolioWrap = document.createElement("div");
    portfolioWrap.className = "portfolio-wrap";

    const img = document.createElement("img");

    if(data.gambar.includes("https")){
        img.src = "https://lh3.googleusercontent.com/d/" + extractValueFromUrl(data.gambar);
    } else {
        img.src = "assets/img/galeri_foto/" + data.gambar;
    }

    img.className = "img-fluid";

    // create links
    const divLinks = document.createElement("div");
    divLinks.className = "portfolio-links";

    const aZoom = document.createElement("a");

    if(data.gambar.includes("https")){
        aZoom.href = "https://lh3.googleusercontent.com/d/" + extractValueFromUrl(data.gambar);
    } else {
        aZoom.href = "assets/img/galeri_foto/" + data.gambar;
    }

    aZoom.className = "portfolio-lightbox";
    aZoom.setAttribute("data-gallery", "portfolioGallery");
    aZoom.title = data.judul;

    const iZoom = document.createElement("i");
    iZoom.className = "bx bx-link";

    aZoom.appendChild(iZoom);

    const aLink = document.createElement("a");
    aLink.href = "https://lh3.googleusercontent.com/d/" + extractValueFromUrl(data.gambar);
    aLink.setAttribute("target", "_blank");
    aLink.title = "Tampilkan Gambar Lebih Besar";

    const iLink = document.createElement("i");
    iLink.className = "bx bx-zoom-in";

    aLink.appendChild(iLink);


    divLinks.appendChild(aZoom);
    divLinks.appendChild(aLink);
    // end of create links

    portfolioWrap.appendChild(img);
    portfolioWrap.appendChild(divLinks);

    divItemFotoContainer.appendChild(portfolioWrap);

    galeriFotoContainer.appendChild(divItemFotoContainer);
});
// End Of Galeri Foto Side