 const month_year = document.getElementsByClassName("month_year")[0];
 const prev = document.getElementById("prev")
 const next = document.getElementById("next")
 const  dates = document.getElementsByClassName('dates')[0];
 const currDate = new Date();
 let year = currDate.getFullYear()
 let month = currDate.getMonth()
 const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
console.log(year);
console.log(months[month]);


function render(){
    const lastDateOfMonth = new Date(year,month+1,0).getDate(),
    firstDayOfMonth = new Date(year,month,1).getDay(),
     lastDayOfMonth = new Date(year, month, lastDateOfMonth).getDay(),
    lastDateofLastMonth = new Date(year,month,0).getDate();
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    

    
    const newMonthYear = `${months[month]} ${year}`
    month_year.innerText = newMonthYear;
    let datesOFMonth ='' ;



     for (let i = firstDayOfMonth; i > 0; i--) {
     datesOFMonth += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for(let i =1 ; i<=lastDateOfMonth ; i++){
      let isToday = (i === todayDate && month === todayMonth && year === todayYear) 
      ? "active" 
      : "";
     datesOFMonth+=`<li class="${isToday}">${i}</li>`
    }
     for (let i = lastDayOfMonth; i < 6; i++) {
     datesOFMonth += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
     }

    dates.innerHTML = datesOFMonth;

}
render();
prev.addEventListener("click",()=>{
    if(month === 0){
        year--;
        month=12;
        
    }
    month--
    render()
    
})
next.addEventListener("click",()=>{
    if(month === 11){
        year++;
        month=-1;       
    }
    month++
    render()
    
})