const image = document.getElementById("image");
let data;
let totalImage;
let count = 0 ;
async function fetchData() {
    const response = await fetch("https://boringapi.com/api/v1/photos/");
      if (!response.ok) { 
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    data = await response.json()
    console.log(data.photos[0].url);
    totalImage =data.photos.length;
    console.log(totalImage); 
}
 fetchData()
setInterval(()=>{
  image.src = data.photos[count].url
  if(count===totalImage-1){
    count = 0;
  }else{
    count++;
  }
},3000)