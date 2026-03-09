// "Check my projects!" click event
document.getElementById("introDesc").addEventListener("click", () => {
    document.getElementById("bbsBox").scrollIntoView();
});

class ImgCar {

    #current = 0;
    #titles;

    /**
     * @param {HTMLElement} projectDiv
     * @param {String[]} titles 
     */
    constructor(projectDiv, titles) {

        this.butts = projectDiv.getElementsByClassName("pokeButt");
        this.boxes = projectDiv.getElementsByClassName("stDemo");
        this.title = projectDiv.getElementsByClassName("stDemoTitle")[0];

        this.#titles = titles;

        this.butts[0].addEventListener("click", () => {this.#imgChange(false)});
        this.butts[1].addEventListener("click", () => {this.#imgChange(true)});

    }

    #imgChange(value) {

        this.butts[0].disabled = true;
        this.butts[1].disabled = true;

        let nextImg, transValue;

        if (value) { // next

            nextImg = this.#current+1 < this.boxes.length ? this.#current+1 : 0;
            transValue = -50;

        } else { // prev

            nextImg = this.#current-1 >= 0 ? this.#current-1 : this.boxes.length-1;
            transValue = 50;

        }

        this.boxes[this.#current].style.transform = `translateX(${transValue}px)`;
        this.boxes[this.#current].style.opacity = "0";
        this.boxes[nextImg].style.transform = `translateX(${-transValue}px)`;

        setTimeout(() => {

            this.boxes[this.#current].style.display = "none";
            this.boxes[nextImg].style.display = "flex";

            this.title.innerText = this.#titles[nextImg];

            this.boxes[nextImg].offsetHeight;

            this.boxes[nextImg].style.transform = "translateX(0px)";
            this.boxes[nextImg].style.opacity = "1";

            setTimeout(() => {
                this.butts[0].disabled = false;
                this.butts[1].disabled = false;
                this.#current = nextImg;
            }, 250);

        }, 250);

    }

}

const bbsTitles = ["Title Screen", "Conversations", "Title Card", "Settings"];
new ImgCar(document.getElementById("bbsBox"), bbsTitles);

const roa2Titles = ["Character Select", "Tutorials", "Emotes", "Achievements"];
new ImgCar(document.getElementById("stRepos"), roa2Titles);

const aetheTitles = ["Battles", "LVL Up Screen", "Conversations"];
new ImgCar(document.getElementById("replayReaderBox"), aetheTitles);

const rwTittles = ["Pearls", "Broadcasts", "Conversations"];
new ImgCar(document.getElementById("rwBox"), rwTittles);

const roa1Titles = ["Main Menu", "Tutorials", "Story Mode"];
new ImgCar(document.getElementById("customColorsBox"), roa1Titles);
