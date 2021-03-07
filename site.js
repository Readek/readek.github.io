// "Check my projects!" click event
const stBox = document.getElementById("stBox")
document.getElementById("introDesc").addEventListener("click", () => {
    stBox.scrollIntoView();
});

const guiVid = document.getElementById("guiVid");
//plays and pauses the videos to help with performance, i think
const vids = document.querySelectorAll(".vid");
const imageObserver = new IntersectionObserver( (entries, observer) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
});
vids.forEach( (vid) => {
    imageObserver.observe(vid);
});
