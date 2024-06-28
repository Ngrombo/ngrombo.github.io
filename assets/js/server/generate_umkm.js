/* 
    File ini isinya adalah script untuk generate content website nya secara otomatis

    File ini tidak perlu di edit2, temen2 hanya perlu fokus ke file2 yang ada di dalam folder data
*/



// UMKM Side
const umkmContainer = document.getElementById("umkm-content");

umkm_content.forEach((data) => {
    const rootDivUMKMItemContainer = document.createElement("div");
    rootDivUMKMItemContainer.className = "col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0";

    const divInnerWrapperFadeUp = document.createElement("div");
    divInnerWrapperFadeUp.className = "icon-box";
    divInnerWrapperFadeUp.setAttribute("data-aos", "fade-up");

    // creating image wrapper
    const divPicture = document.createElement("div");
    divPicture.className = "icon d-flex justify-content-center";

    const img = document.createElement("img");
    img.src = "assets/img/umkm/" + data.gambarProduk;
    img.width = 200;

    divPicture.appendChild(img);
    // end of creating image wrapper

    const h4Title = document.createElement("h4");
    h4Title.className = "title";
    h4Title.innerHTML = data.namaProduk;

    const pDesc = document.createElement("p");
    pDesc.className = "description";
    pDesc.innerHTML = data.keterangan;


    // append to inner wrapper fade up div
    divInnerWrapperFadeUp.appendChild(divPicture);
    divInnerWrapperFadeUp.appendChild(h4Title);
    divInnerWrapperFadeUp.appendChild(pDesc);

    // append to main root UMKM content container
    rootDivUMKMItemContainer.appendChild(divInnerWrapperFadeUp);

    // add to main UMKM container on website
    umkmContainer.appendChild(rootDivUMKMItemContainer);
})
// End Of UMKM Side