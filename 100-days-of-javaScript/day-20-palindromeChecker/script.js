const word = document.getElementById('word')
const result = document.getElementById('result')



function ckeck(){
   let text = word.value.toLowerCase();
   let start = 0 ;
   let end = text.length-1;
   while (start < end) {
    if(text[start]===' '){
        start++
        continue;
    }
    if(text[end]===' '){
        end--
        continue
    }
    if(text[start] !== text[end]){
        result.innerText="Not a Plaindrome"
        return;
    }
    start++;
    end--;
   }
   result.innerText="The text a Plaindrome"
}