/* 
    File ini isinya adalah script untuk generate content website nya secara otomatis

    File ini tidak perlu di edit2, temen2 hanya perlu fokus ke file2 yang ada di dalam folder data
*/

// Navbar Side
const navbarContainer = document.getElementById("navbar");
const ul = document.createElement("ul");

navbarData.forEach((data, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.className = "nav-link scrollto";
    a.href = data.route;
    a.innerHTML = data.label;

    li.appendChild(a);
    ul.appendChild(li);
});

navbarContainer.appendChild(ul);
// End Of Navbar Side


// Welcome Side
const welcomeDiv = document.getElementById("welcome");

const h2Welcome = document.createElement("h2");
h2Welcome.innerHTML = welcome_text;

const aAboutScrollTo = document.createElement("a");
aAboutScrollTo.className = "btn-get-started scrollto"
aAboutScrollTo.href = "#tentang";

const iScrollTo = document.createElement("i");
iScrollTo.className = "bx bx-chevrons-down";

aAboutScrollTo.appendChild(iScrollTo);

welcomeDiv.appendChild(h2Welcome);
welcomeDiv.appendChild(aAboutScrollTo);
// End Of Welcome Side


// Tentang Side
const contentContainer = document.getElementById("content");

const p = document.createElement("p");
p.innerHTML = tentang_text;
p.className = "mobile-tentang";

contentContainer.appendChild(p);
// End Of Tentang Side


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



// Statistik Dusun Side
function countStatistikDusun() {
    let count = 0;
    let array = [];

    for(var data in statistik_dusun){
        if(statistik_dusun.hasOwnProperty(data)){
            ++count;
            array.push(data);
        }
    }

    return { parameterStatistik: array, length: count };
}


const statistikDusunContainer = document.getElementById("statistik-dusun");
const statistikDusunData = countStatistikDusun();

for(let i = 0; i < statistikDusunData.length; i++){
    const divColSingleStatistikWrapper = document.createElement("div");
    divColSingleStatistikWrapper.className = "col-lg-2 col-md-6 d-md-flex align-items-md-stretch";

    const divCountBox = document.createElement("div");
    divCountBox.className = "count-box";

    if(statistikDusunData.parameterStatistik[i] === "jumlah_warga"){
        const iPeople = document.createElement("i");
        iPeople.className = "bi bi-people";

        const dataCount = document.createElement("span");
        dataCount.className = "purecounter";
        dataCount.setAttribute("data-purecounter-start", "0");
        dataCount.setAttribute("data-purecounter-end", statistik_dusun.jumlah_warga);
        dataCount.setAttribute("data-purecounter-duration", "1");

        const pKeterangan = document.createElement("p");
        const strongKeterangan = document.createElement("strong");

        strongKeterangan.innerHTML = "Jumlah Warga";

        pKeterangan.appendChild(strongKeterangan);

        divCountBox.appendChild(iPeople);
        divCountBox.appendChild(dataCount);
        divCountBox.appendChild(pKeterangan);
    }

    if(statistikDusunData.parameterStatistik[i] === "jumlah_KK"){
        const iPeople = document.createElement("i");
        iPeople.className = "bi bi-person-vcard";

        const dataCount = document.createElement("span");
        dataCount.setAttribute("data-purecounter-start", "0");
        dataCount.setAttribute("data-purecounter-end", statistik_dusun.jumlah_KK);
        dataCount.setAttribute("data-purecounter-duration", "1");
        dataCount.className = "purecounter";

        const pKeterangan = document.createElement("p");
        const strongKeterangan = document.createElement("strong");

        strongKeterangan.innerHTML = "Jumlah KK";

        pKeterangan.appendChild(strongKeterangan);

        divCountBox.appendChild(iPeople);
        divCountBox.appendChild(dataCount);
        divCountBox.appendChild(pKeterangan);
    }


    if(statistikDusunData.parameterStatistik[i] === "jumlah_laki_laki"){
        const iPeople = document.createElement("i");
        iPeople.className = "bi bi-person-standing";

        const dataCount = document.createElement("span");
        dataCount.setAttribute("data-purecounter-start", "0");
        dataCount.setAttribute("data-purecounter-end", statistik_dusun.jumlah_laki_laki);
        dataCount.setAttribute("data-purecounter-duration", "1");
        dataCount.className = "purecounter";

        const pKeterangan = document.createElement("p");
        const strongKeterangan = document.createElement("strong");

        strongKeterangan.innerHTML = "Jumlah Laki - Laki";

        pKeterangan.appendChild(strongKeterangan);

        divCountBox.appendChild(iPeople);
        divCountBox.appendChild(dataCount);
        divCountBox.appendChild(pKeterangan);
    }

    if(statistikDusunData.parameterStatistik[i] === "jumlah_perempuan"){
        const iPeople = document.createElement("i");
        iPeople.className = "bi bi-person-standing-dress";

        const dataCount = document.createElement("span");
        dataCount.setAttribute("data-purecounter-start", "0");
        dataCount.setAttribute("data-purecounter-end", statistik_dusun.jumlah_perempuan);
        dataCount.setAttribute("data-purecounter-duration", "1");
        dataCount.className = "purecounter";

        const pKeterangan = document.createElement("p");
        const strongKeterangan = document.createElement("strong");

        strongKeterangan.innerHTML = "Jumlah Perempuan";

        pKeterangan.appendChild(strongKeterangan);

        divCountBox.appendChild(iPeople);
        divCountBox.appendChild(dataCount);
        divCountBox.appendChild(pKeterangan);
    }


    if(statistikDusunData.parameterStatistik[i] === "jumlah_RT"){
        const iPeople = document.createElement("i");
        iPeople.className = "bi bi-person-badge";

        const dataCount = document.createElement("span");
        dataCount.className = "purecounter";
        dataCount.setAttribute("data-purecounter-start", "0");
        dataCount.setAttribute("data-purecounter-end", statistik_dusun.jumlah_RT);
        dataCount.setAttribute("data-purecounter-duration", "1");

        const pKeterangan = document.createElement("p");
        const strongKeterangan = document.createElement("strong");

        strongKeterangan.innerHTML = "Jumlah RT";

        pKeterangan.appendChild(strongKeterangan);

        divCountBox.appendChild(iPeople);
        divCountBox.appendChild(dataCount);
        divCountBox.appendChild(pKeterangan);
    }

    divColSingleStatistikWrapper.appendChild(divCountBox);
    statistikDusunContainer.appendChild(divColSingleStatistikWrapper);
}
// End Of Statistik Dusun Side


// Video Content Side
const videoContainer = document.getElementById("video-container");

const sliderWrapper = document.createElement("div");
sliderWrapper.className = "slider-wrapper";

const ulSlidesContainer = document.createElement("ul");
ulSlidesContainer.className = "slides-container";
ulSlidesContainer.id = "slides-container";

video_contents.forEach((data) => {
    const liSlide = document.createElement("li");
    liSlide.className = "slide";

    const videoTag = document.createElement("video");
    videoTag.className = "video-carousel";
    videoTag.setAttribute("controls", "");

    const sourceTag = document.createElement("source");
    sourceTag.src = data;
    sourceTag.type = "video/mp4";

    videoTag.appendChild(sourceTag);
    
    liSlide.appendChild(videoTag);
    ulSlidesContainer.appendChild(liSlide);
});

const divCarouselBtn = document.createElement("div");
divCarouselBtn.className = "carousel-buttons";

const buttonLeft = document.createElement("button");
buttonLeft.className = "slide-arrow";
buttonLeft.id = "slide-arrow-prev";
buttonLeft.innerHTML = 
`
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" id="arrow"><path fill-rule="evenodd" d="M10.634.292a1.063 1.063 0 0 0-1.464 0L.607 8.556a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.425l-7.893-7.617a.975.975 0 0 1 0-1.414l7.83-7.557a.974.974 0 0 0 0-1.413"></path></svg>
`

const buttonRight = document.createElement("button");
buttonRight.className = "slide-arrow";
buttonRight.id = "slide-arrow-next";
buttonRight.innerHTML =
`
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" id="arrow"><path fill-rule="evenodd" d="M.366 19.708c.405.39 1.06.39 1.464 0l8.563-8.264a1.95 1.95 0 0 0 0-2.827L1.768.292A1.063 1.063 0 0 0 .314.282a.976.976 0 0 0-.011 1.425l7.894 7.617a.975.975 0 0 1 0 1.414L.366 18.295a.974.974 0 0 0 0 1.413"></path></svg>
`

divCarouselBtn.appendChild(buttonLeft);
divCarouselBtn.appendChild(buttonRight);

// append all to the slider wrapper
sliderWrapper.appendChild(ulSlidesContainer);
sliderWrapper.appendChild(divCarouselBtn);

// append to main video container section
videoContainer.appendChild(sliderWrapper);

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

// End Of Video Content Side


// Pengurus Dusun Side
const pengurusDusunContainer = document.getElementById("pengurus-dusun");

pengurus_dusun.forEach((data) => {
    const divCol = document.createElement("div");
    divCol.className = "col-lg-4 col-md-6";

    const divMember = document.createElement("div");
    divMember.className = "member";
    divMember.setAttribute("data-aos", "fade-up");

    const divPicture = document.createElement("div");
    divPicture.className = "pic";

    const img = document.createElement("img");
    img.className = "img-fluid";
    img.src = "assets/img/pengurus/" + data.fotoOrangnya;

    divPicture.appendChild(img);

    // creating pengurus dusun info
    const divMemberInfo = document.createElement("div");
    divMemberInfo.className = "member-info";

    const h4Nama = document.createElement("h4");
    h4Nama.innerHTML = data.nama;

    const spanPosisi = document.createElement("span");
    spanPosisi.innerHTML = data.jabatan;

    divMemberInfo.appendChild(h4Nama);
    divMemberInfo.appendChild(spanPosisi);

    const divSocial = document.createElement("div");
    divSocial.className = "social";

    if(data.social.whatsapp !== ""){
        const a = document.createElement("a");
        a.href = data.social.whatsapp;

        const iWa = document.createElement("i");
        iWa.className = "bi bi-whatsapp";

        a.appendChild(iWa);

        divSocial.appendChild(a);
    }

    if(data.social.facebook !== ""){
        const a = document.createElement("a");
        a.href = data.social.facebook;

        const iWa = document.createElement("i");
        iWa.className = "bi bi-facebook";

        a.appendChild(iWa);

        divSocial.appendChild(a);
    }


    if(data.social.instagram !== ""){
        const a = document.createElement("a");
        a.href = data.social.instagram;

        const iIg = document.createElement("i");
        iIg.className = "bi bi-instagram";

        a.appendChild(iIg);

        divSocial.appendChild(a);
    }

    if(data.social.tiktok !== ""){
        const a = document.createElement("a");
        a.href = data.social.tiktok;

        const iTiktok = document.createElement("i");
        iTiktok.className = "bi bi-tiktok";

        a.appendChild(iTiktok);

        divSocial.appendChild(a);
    }

    divMemberInfo.appendChild(divSocial);
    // end of creating member info

    // append all to div col
    divMember.appendChild(divPicture);
    divMember.appendChild(divMemberInfo);
    divCol.appendChild(divMember);
    pengurusDusunContainer.appendChild(divCol);
})
// End Of Pengurus Dusun Side