/* 
    File ini isinya adalah script untuk generate content website nya secara otomatis

    File ini tidak perlu di edit2, temen2 hanya perlu fokus ke file2 yang ada di dalam folder data
*/


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