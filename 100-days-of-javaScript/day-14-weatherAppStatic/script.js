let datas;
fetch('./weatherData.json')
.then(res =>res.json() )
.then(data=>{
    datas = data;
})
const search = document.getElementById('search')
const city = document.getElementsByClassName('city')
const temp = document.getElementsByClassName('temp')
search.addEventListener('search',()=>{
   for(let i =0 ; i< datas.length ; i++){
        console.log(datas[i].city)
        if( datas[i].city.toLowerCase() === search.value.toLowerCase()){
            city[0].innerText = datas[i].city
            temp[0].innerText = datas[i].temperature
        } 
   }
})