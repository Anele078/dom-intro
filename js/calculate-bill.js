//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button



  
const  billStringElement = document.querySelector(".billString");
const calculateBtn = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal");


  calculateBtn.addEventListener("click", function(){


const billString = billStringElement.value;
    var billItems = billString.split(",")
    var  totalCost = 0;

    for(var i=0; i<billItems.length; i++) {

      var billItem = billItems[i].trim();
      if(billItem.includes('call')){
        totalCost +=2.75 ;
    
         }
         else if(billItem.includes('sms')){
          totalCost+= 0.75;
      }

    }
    var roundedBillTotal =  totalCost.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;

    if (totalCost >= 20){
    
      billTotalElement.classList.add("danger");
    }
    else if (totalCost >= 30){
      billTotalElement.classList.add("warning");
    }

    

    

  });





        
   




