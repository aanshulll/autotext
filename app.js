var box = document.querySelector(".container");

let arr = ["YOUTUBER", "WEB DEVELOPER", "FREELANCER"];

let index = 0;
let char = 0;

function update() {
     char++;
    box.innerHTML = `<h1>I AM A ${arr[index].slice(0, char)}<span>|</span></h1>`;
   

    if (char === arr[index].length) {
        index++;
        char = 0;

        
    }
    if (index=== arr.length) {
       index=0;
        
    }

    setTimeout(update, 400);
}

update();
