// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.




 var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

var callCostSettings = document.querySelector(".callCostSetting");
var smsCostSettings = document.querySelector(".smsCostSetting");
var warningLevelSettings = document.querySelector(".warningLevelSetting");
var criticalLevelSettings = document.querySelector(".criticalLevelSetting");


const callTotalSetting = document.querySelector(".callTotalSettings");
const smsTotalSetting = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings");
const totalAmountBtn = document.querySelector(".totalAmountBtn");
const updateSetting = document.querySelector(".button-primary.updateSettings");




function updateSettings() {
    refFactor.setCostCall(callCostSettings.value);
    refFactor.setCostSms(smsCostSettings.value);
    refFactor.setCritical(criticalLevelSettings.value);
    refFactor.setWarning(warningLevelSettings.value);
  }
  
  function domFunction() {
    var billSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  
    if (billSettings) {
  
      refFactor.billSettings(billSettings.value);
  
      callTotalSetting.innerHTML = refFactor.getCall().toFixed(2);
      smsTotalSetting.innerHTML = refFactor.getSms().toFixed(2);
      var totalBill = refFactor.totalBills().toFixed(2);
      totalSettings.innerHTML = totalBill;
  
  
      if (totalBill < refFactor.getWarning()) {
        totalSettings.classList.remove("warning");
        totalSettings.classList.remove("danger");
  
      }
      if (totalBill >= refFactor.getWarning() && totalBill < refFactor.getCritical()) {
        totalSettings.classList.remove("danger");
        totalSettings.classList.add("warning");
      }
      if (totalBill >= refFactor.getCritical()) {
        totalSettings.classList.remove("warning");
        totalSettings.classList.add("danger");
      }
    }
  }
  
  updateSetting.addEventListener('click', updateSettings);
  totalAmountBtn.addEventListener('click', domFunction);
  function SettingsWithBill() {
    var callB = 0;
    var smsB = 0;
    var totalB = 0;
    var callCost = 0;
    var smsCost = 0;
    var warningB = 0;
    var criticalB = 0;
  
    function billSettings(billSetting) {
  
      if (totalBills() < criticalB) {
        var billItemTypeWithSettings = billSetting;
  
        if (billItemTypeWithSettings === 'call') {
          callB += callCost;
        }
  
        if (billItemTypeWithSettings === 'sms') {
          smsB += smsCost;
        }
      }
    }
  

    function getCall() {
      return callB;
    }
  
    function getSms() {
      return smsB;
    }
  
    function getCritical() {
      return criticalB;
    }
  
    function getWarning() {
      return warningB;
    }
  
    function totalBills() {
      return callB + smsB;
    }
  

    function setCostCall(value) {
      callCost = parseFloat(value);
    }
  
    function setCostSms(value) {
      smsCost = parseFloat(value);
    }
  
    function setWarning(value) {
      warningB = parseFloat(value);
    }
  
    function setCritical(value) {
      criticalB = parseFloat(value);
    }
  
    return {
      totalBills,
      billSettings,
      setCostCall,
      setCostSms,
      setCritical,
      setWarning,
      getCall,
      getSms,
      getWarning,
      getCritical
    }
  }
  var refFactor = SettingsWithBill();
  
  



















