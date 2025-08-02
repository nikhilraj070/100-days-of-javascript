const bill = document.getElementById('bill')

const tipPercntage=document.getElementById('tipPercntage')
console.log(tipPercntage);
const people=document.getElementById('people')
const result  =document.getElementsByClassName('result')
let total;
let perPerson;
let perPersonTip;
console.log(result);
function calculteBill(){

    let bills = parseInt(bill.value)
    let tips = parseInt(tipPercntage.value)
    let peoples = parseInt(people.value)

      let tip =(bills * tips)/100;
      total = bills + tip ;
      perPersonTip = tip / peoples;
      perPerson = total/peoples 
      result[0].children[0].children[1].innerText =    perPersonTip.toFixed(2)
      result[0].children[1].children[1].innerText =    perPerson.toFixed(2)
      result[0].children[2].children[1].innerText =    total.toFixed(2)
}

 function reset(){
  bill.value = '';
  tipPercntage.value = '';
  tipPercntage.selected= ''
  people.value = ''
  result[0].children[0].children[1].innerText = ''
result[0].children[1].children[1].innerText = ''
result[0].children[2].children[1].innerText = ''
 }