/* 
    File ini isinya adalah script untuk generate content website nya secara otomatis

    File ini tidak perlu di edit2, temen2 hanya perlu fokus ke file2 yang ada di dalam folder data
*/


// Tentang Side
const contentContainer = document.getElementById("content");

const p = document.createElement("p");
p.innerHTML = tentang_text;
p.className = "mobile-tentang";

contentContainer.appendChild(p);
// End Of Tentang Side