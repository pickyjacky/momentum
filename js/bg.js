const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;

const h2 = document.querySelector("#clock");
document.body.insertBefore(bgimage, h2);
