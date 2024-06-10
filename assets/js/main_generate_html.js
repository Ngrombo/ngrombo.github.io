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