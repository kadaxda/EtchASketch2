const gridcontainer = document.querySelector(".gridcontainer");
const clearbtn = document.querySelector("#clearbtn");
const newbtn = document.querySelector("#newbtn");
const redbtn = document.querySelector("#redbtn");
const rainbowbtn = document.querySelector("#rainbowbtn");
const darkenbtn = document.querySelector("#darkenbtn");
const eraserbtn = document.querySelector("#eraserbtn");

let div = "";
let elementsPerSide = 16;
let randomNumber, randomNumber2, randomNumber3;
let a,b,c;

for (let i = 0; i<(elementsPerSide*elementsPerSide); i++) {
    div = document.createElement("div");
    div.classList.add("gridelement")
    gridcontainer.appendChild(div)
}

let allGridElements = document.querySelectorAll(".gridelement");
createGridElements()

function createGridElements() {
    allGridElements = document.querySelectorAll(".gridelement");
    let size = 400/elementsPerSide +"px";
    allGridElements.forEach((element) => {
        element.style.width = size;
        element.style.height = size;
    })
}

// makes the hover effect
allGridElements = document.querySelectorAll(".gridelement");
allGridElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "grey";
    })
});

// clear button
clearbtn.addEventListener("click", () => {
    allGridElements.forEach((element) => {  
            element.style.backgroundColor = "";
    });
});

// new button
newbtn.addEventListener("click", () => {
    if(elementsPerSide != 0) {
        allGridElements.forEach((element) => {
            gridcontainer.removeChild(element);
        })
    }
    elementsPerSide = prompt("How many squares do you want per side?");
    if (elementsPerSide>16) {
        alert("Number too high...");
        elementsPerSide = 0;
        return;
    }

    for (let i = 0; i<(elementsPerSide*elementsPerSide); i++) {
        div = document.createElement("div");
        div.classList.add("gridelement")
        gridcontainer.appendChild(div)
    }
    createGridElements();

    allGridElements = document.querySelectorAll(".gridelement");
    allGridElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "red";
    })
});
})

redbtn.addEventListener("click", () => {
    allGridElements = document.querySelectorAll(".gridelement");
    allGridElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "red";
    })
});
})

eraserbtn.addEventListener("click", () => {
    allGridElements = document.querySelectorAll(".gridelement");
    allGridElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = "";
    })
});
})


rainbowbtn.addEventListener("click", () => {
    allGridElements = document.querySelectorAll(".gridelement");
    allGridElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        randomNumber = Math.floor(Math.random() * 245) + 1;
        randomNumber2 = Math.floor(Math.random() * 245) + 1;
        randomNumber3 = Math.floor(Math.random() * 245) + 1;
        element.style.backgroundColor = `rgb(${randomNumber}, ${randomNumber2}, ${randomNumber3})`;
    })
});
})

darkenbtn.addEventListener("click", () => {
    a = Math.floor(Math.random() * 245) + 1;
    b = 100;
    c = 50;
    let i = 0;

    allGridElements = document.querySelectorAll(".gridelement");
    allGridElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        i += 1;
        console.log(randomNumber, randomNumber2, randomNumber3, i)
        element.style.backgroundColor = `hsl(${a}, ${b}%, ${c-i}%)`;

    })
});
})