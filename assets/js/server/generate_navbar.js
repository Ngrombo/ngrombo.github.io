/* 
    File ini isinya adalah script untuk generate content website nya secara otomatis

    File ini tidak perlu di edit2, temen2 hanya perlu fokus ke file2 yang ada di dalam folder data
*/

// Navbar Side
const navbarContainer = document.getElementById("navbar");
const ul = document.createElement("ul");
let isHome = false;

navbarData.forEach((data, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    if(window.location.pathname === "/" && !isHome){
        a.className = "nav-link active";
        isHome = true;
    } else {
        a.className = "nav-link";
    }

    if(window.location.href.includes(data.label.toLowerCase())){
        a.className = "nav-link active";
    }
    
    a.href = data.route;
    a.innerHTML = data.label;

    li.appendChild(a);
    ul.appendChild(li);
});

navbarContainer.appendChild(ul);
// End Of Navbar Side