/* 
    File ini isinya adalah script untuk generate content website nya secara otomatis

    File ini tidak perlu di edit2, temen2 hanya perlu fokus ke file2 yang ada di dalam folder data
*/


// Welcome Side
const welcomeDiv = document.getElementById("welcome");

const h2Welcome = document.createElement("h2");
h2Welcome.innerHTML = welcome_text;

const aAboutScrollTo = document.createElement("a");
aAboutScrollTo.className = "btn-get-started scrollto"
aAboutScrollTo.href = "#video-container";

const iScrollTo = document.createElement("i");
iScrollTo.className = "bx bx-chevrons-down";

aAboutScrollTo.appendChild(iScrollTo);

welcomeDiv.appendChild(h2Welcome);
welcomeDiv.appendChild(aAboutScrollTo);
// End Of Welcome Side