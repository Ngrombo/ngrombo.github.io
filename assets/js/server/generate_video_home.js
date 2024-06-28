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
iframeTag.src = "https://drive.google.com/file/d/" + extractValueFromUrl(video_home.videoLink) + "/preview";
iframeTag.width = "100%";
iframeTag.height = "100%";
iframeTag.setAttribute("allowfullscreen", "");
// end of making iframe tag for google drive content

const h4Title = document.createElement("h4");
h4Title.innerHTML = video_home.judul;

const pDesc = document.createElement("p");
pDesc.innerHTML = video_home.deskripsi;

liSlide.appendChild(iframeTag);
liSlide.appendChild(h4Title);
liSlide.appendChild(pDesc);
ulSlidesContainer.appendChild(liSlide);

// append all to the slider wrapper
sliderWrapper.appendChild(ulSlidesContainer);

// append to main video container section
videoContainer.appendChild(sliderWrapper);
// End Of Video Content Side