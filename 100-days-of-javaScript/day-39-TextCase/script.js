const text = document.getElementById('text')
const upper = document.getElementById('upper_case')
const lower = document.getElementById('lower_case')
const sentense = document.getElementById('sentense_case')
const title = document.getElementById('title_case')

upper.addEventListener('click',()=>{
   text.value = text.value.toUpperCase();
})
lower.addEventListener('click',()=>{
   text.value = text.value.toLowerCase();
})
sentense.addEventListener('click',()=>{
   let sen = text.value;
   let upper = sen.replace(/^\s*\w|[.!?]\s*\w/g , c=>c.toUpperCase());
   text.value = upper
})
title.addEventListener('click',()=>{
   let sen = text.value;
   let titles = sen.replace(/\b\w/g , c=>c.toUpperCase());
   text.value = titles
})
