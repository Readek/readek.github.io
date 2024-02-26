// "Check my projects!" click event
const stBox = document.getElementById("stBox")
document.getElementById("introDesc").addEventListener("click", () => {
    stBox.scrollIntoView();
});

const stRepos = document.getElementById("stRepos");
const stRoa = document.getElementById("stRoABox");
const stMelee = document.getElementById("stMeleeBox");
const stRR = document.getElementById("stRRBox");
const stTitle = document.getElementById("stTitle");
const stBoxes = [stRoa, stMelee, stRR];
const stTitles = ["RoA ST", "Melee ST", "RR ST"];
const stBgColors = ["383841", "413838", "38413d"];
let stCurrent = 0;

const stButts = document.getElementsByClassName("stButt");
document.getElementById("stPrev").addEventListener("click", () => {stChange(false)});
document.getElementById("stNext").addEventListener("click", () => {stChange(true)});

function stChange(value) {
    
    stButts[0].disabled = true;
    stButts[1].disabled = true;

    let nextSt, transValue;

    if (value) { // next

        nextSt = stCurrent+1 < stBoxes.length ? stCurrent+1 : 0;
        transValue = -50;
        
    } else { // prev
        
        nextSt = stCurrent-1 >= 0 ? stCurrent-1 : stBoxes.length-1;
        transValue = 50;

    }

    stBoxes[stCurrent].style.transform = `translateX(${transValue}px)`;
    stBoxes[stCurrent].style.opacity = "0";
    stBoxes[nextSt].style.transform = `translateX(${-transValue}px)`;

    stRepos.style.backgroundColor = "#" + stBgColors[nextSt];

    setTimeout(() => {
        
        stBoxes[stCurrent].style.display = "none";
        stBoxes[nextSt].style.display = "flex";

        stTitle.innerHTML = stTitles[nextSt]

        stBoxes[nextSt].offsetHeight;

        stBoxes[nextSt].style.transform = "translateX(0px)";
        stBoxes[nextSt].style.opacity = "1";

        setTimeout(() => {
            stButts[0].disabled = false;
            stButts[1].disabled = false;
            stCurrent = nextSt;
        }, 250);

    }, 250);

}

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
