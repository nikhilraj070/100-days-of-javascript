const images = document.getElementById('images')
let photosdata = ""
let index = 0;
async function loadPhotos() {
    try {
        const res = await fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=1&limit=132');
        const json = await res.json();  
        photosdata = json.photos
        console.log(json.photos[0].url);    
        images.src = json.photos[0].url
    } catch (err) {
        console.error("Error loading photos:", err);
    }
}
loadPhotos();
const prev = document.getElementsByClassName('prev')
const next = document.getElementsByClassName('next')

prev[0].addEventListener('click',()=>{
    console.log("runnning");
    if(index === 0){
        index = 130;
    }
    index--;
    images.src = photosdata[index].url
})
next[0].addEventListener('click',()=>{
    console.log("runnning");
    if(index === 130){
        index = 0;
    }
    index++;
    images.src = photosdata[index].url
})