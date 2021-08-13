//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button



const billString = document.querySelector(".billString");
const calculateBtn = document.querySelector(".calculateBtn");
const billTotal = document.querySelector(".billTotal");

calculateBtn.addEventListener("click", function(){

    const billTotalElement = billTotal.value;
    const billStringElement = billString.value;
    const billItems = billStringElement.split(",");
    var totalCost = 0;

    for(var i=0; i<billItems.length; i++) {

        if(billItems[i].includes('call')) {
          totalCost +=2.75 ;
      } else if (billItems[i].includes('sms')) {
        totalCost += 0.65;

      }

    }

    var roundedBillTotal = totalCost.toFixed(2);
    totalCost.innerHTML = roundedBillTotal;
  

});




        
   




