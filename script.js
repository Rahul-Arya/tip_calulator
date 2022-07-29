
const bill_input = document.getElementById('billTotalInput');
const tip_input = document.getElementById('tipInput');
const noofpeople = document.getElementById('numberOfPeople');
const perpersontotal_screen = document.getElementById('perPersonTotal');

let ppt = Number(noofpeople.innerText);
const calculateBill = () => {
    
  const bill = Number(bill_input.value); 
  const tipamount = Number(tip_input.value)/100;
  const totol_tip_amount = bill*tipamount;
  const total = totol_tip_amount + bill;
  const perperson = total/ppt;
  perpersontotal_screen.innerText = perperson.toFixed(2);
  }
  
  const increasePeople = () => {
    // increment the amount of people
    
  ppt+=1;
    // update the DOM with the new number of people
  
  noofpeople.innerText = `${ppt}`
    // calculate the bill based on the new number of people
    calculateBill()
  
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {

    // guard clause
    // if amount is 1 or less simply return
    if(ppt<2)return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
  
    
    // decrement the amount of people
  ppt-=1;
  
    // update the DOM with the new number of people
  noofpeople.innerText = `${ppt}`
  
    // calculate the bill based on the new number of people
    calculateBill()
  
  }