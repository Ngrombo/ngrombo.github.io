/* 
    File ini isinya adalah script untuk generate content website nya secara otomatis

    File ini tidak perlu di edit2, temen2 hanya perlu fokus ke file2 yang ada di dalam folder data
*/


// Video Content Side
const videoContainer = document.getElementById("video-container");

const sliderWrapper = document.createElement("div");
sliderWrapper.className = "slider-wrapper";

const ulSlidesContainer = document.createElement("ul");
ulSlidesContainer.className = "slides-container";
ulSlidesContainer.id = "slides-container";

function extractValueFromUrl(url) {
    const regex = /\/d\/(.*?)\//;
    const match = url.match(regex);

    if (match && match[1]) {
        return match[1];
    } else {
        return null;
    }
}

video_contents.forEach((data) => {
    const liSlide = document.createElement("li");
    liSlide.className = "slide";


    // making video tag
    // const videoTag = document.createElement("video");
    // videoTag.className = "video-carousel";
    // videoTag.setAttribute("controls", "");

    // const sourceTag = document.createElement("source");
    // sourceTag.src = data.videoLink.includes("https") || data.videoLink.includes("http") ? data.videoLink : "assets/video/" + data.videoLink;
    // sourceTag.type = "video/mp4";

    // videoTag.appendChild(sourceTag);
    //end of making video tag

    // making iframe tag for google drive content
    const iframeTag = document.createElement("iframe");
    iframeTag.src = "https://drive.google.com/file/d/" + extractValueFromUrl(data.videoLink) + "/preview";
    iframeTag.width = "100%";
    iframeTag.height = "100%";
    iframeTag.setAttribute("allowfullscreen", "");
    // end of making iframe tag for google drive content

    const h4Title = document.createElement("h4");
    h4Title.innerHTML = data.judul;

    const pDesc = document.createElement("p");
    pDesc.innerHTML = data.deskripsi;
    
    liSlide.appendChild(iframeTag);
    liSlide.appendChild(h4Title);
    liSlide.appendChild(pDesc);
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