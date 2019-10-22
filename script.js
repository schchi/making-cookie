/********************************

        COOKIE clicker

********************************/

//defaults
  let cookieCount = 0;
  let clickPower =1;

//DOM declaration
  let cookieCounter = document.getElementById('cookie-counter');
  let cookieClicker = document.getElementById('cookie-clicker');

  cookieCounter.innerHTML = cookieCount;

//everytime a user clicks the button, their cookies increase based on their clickPower
  cookieClicker.addEventListener("click", function() {
    cookieCount = cookieCount + clickPower;
    refreshCookieCount()
  })

//refresh cookies
  let refreshCookieCount = function() {
  cookieCounter.innerHTML = cookieCount;
  }

  /********************************

          Click Power

  ********************************/

  let clickPowerPriceAmount = 50;
  let clickPowerLevelNumber = 1;

  let buyClickPower = document.getElementById('buy-click-power');
  let clickPowerPrice = document.getElementById('click-power-price');
  let clickPowerLevel = document.getElementById('click-power-level');
  let clickPowerMultiple = document.getElementById('click-power-multiple');

  buyClickPower.addEventListener("click", function() {
    if (cookieCount >= clickPowerPriceAmount) {
      cookieCount -= clickPowerPriceAmount;
      cookieCounter.innerHTML = cookieCount;
      clickPowerPrice = Math.floor(clickPowerPrice * 1.33);
      console.log("Item succesfully Bought");
    } else {
      console.log("You don't have enough cookies!");
    }

    cookieClicker.addEventListener("click", function() {
      cookieCount = cookieCount + clickPower;
      refreshCookieCount()


      let refreshCookieCount = function() {
        cookieCounter.innerHTML = cookieCount;
      }

      if (cookieCount >= clickPowerPriceAmount) {
        cookieCount -= clickPowerPriceAmount;
        refreshCookieCount()
      }

      let refreshPowerClick = function() {
        clickPowerLevel.innterHTML = clickPowerLevelNumber;
        clickPowerPrice.innerHTML = clickPowerPriceAmount;
        clickPowerMultiple.innerHTML = clickPower;
      }

      if (cookieCount >= clickPowerPriceAmount) {
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);
        clickPowerLevelNumber += 1;
        clickPower += 1;
        refreshPowerClick();
      }
    })
  })

  /********************************

          Grandmas

  ********************************/
  //set default values
  let grandmaAuto = false;
  let grandmaPower = 50;
  let grandmaPriceAmount = 500;
  let grandmaLevelNumber = 0;

  //declare DOM variables
  let buyGrandma = document.getElementById('buy-grandma');
  let grandmaPrice = document.getElementById('grandma-price');
  let grandmaLevel = document.getElementById('grandma-level');
  let grandmaMultiple = document.getElementById('grandma-multiple');

  //buy a grandma
  buyGrandma.addEventListener("click", function() {

    //make sure we have enough cookies and subtract our cookies from the price
    if (cookieCount >= grandmaPriceAmount) {
      cookieCount += - grandmaPriceAmount;
      refreshCookieCount()
    //upgrade power level
      grandmaLevelNumber += 1;
    //update price
      grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
    //update grandma power
      grandmaPower += 10;
    //turn autoGrandma on!
      autoGrandma = true
      autoGrandmaStart();
    //refresh shop item
      refreshGrandma();
    }
  })

  let refreshGrandma = function() {
  grandmaLevel.innerHTML = grandmaLevelNumber
  grandmaPrice.innerHTML = grandmaPriceAmount;
  grandmaMultiple.innerHTML = grandmaPower - 10;
  }

  let autoGrandmaStart = function() {
  let grandmaInt = window.setInterval(function(){
    cookieCount += grandmaPower;
    refreshCookieCount();
  }, 1000);
}

/********************************

          Facilities

********************************/

//set default values
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

//buy a facility
buyFacility.addEventListener("click", function() {
    //set autoLoop to false
    facilityAuto = false;
    //make sure we have enough cookies
    if (cookieCount >= facilityPriceAmount) {
    cookieCount -= facilityPriceAmount;
    refreshCookieCount()
    //upgrade power level
    facilityLevelNumber += 1;

    //update price
    facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);

    //update facility power
    facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);;

    //turn autoFacility on!
    facilityAuto = true
    autoFacilityStart();

    //refresh shop item
    refreshFacility();

    //refresh shop
    let refreshFacility = function() {
      facilityLevel.innerHTML = facilityLevelNumber
      facilityPrice.innerHTML = facilityPriceAmount;
      facilityMultiple.innerHTML = facilityPower - 600;
    }

    //game loop
    let autoFacilityStart = function() {
        let facilityInt = window.setInterval(function(){
          cookieCount += facilityPower;
          refreshCookieCount();
        }, 1000);
    }
  }
})

/********************************

        Grandpas

********************************/
//set default values
let grandpaAuto = false;
let grandpaPower = 0;
let grandpaPriceAmount = 0;
let grandpaLevelNumber = 0;

//declare DOM variables
let buyGrandpa = document.getElementById('buy-grandpa');
let grandpaPrice = document.getElementById('grandpa-price');
let grandpaLevel = document.getElementById('grandpa-level');
let grandpaMultiple = document.getElementById('grandpa-multiple');

//buy a grandpa
buyGrandpa.addEventListener("click", function() {

  //make sure we have enough cookies and subtract our cookies from the price
  if (cookieCount >= grandpaPriceAmount) {
    cookieCount += - grandpaPriceAmount;
    refreshCookieCount()
  //upgrade power level
    grandpaLevelNumber += 1;
  //update price
    grandpaPriceAmount = Math.floor(grandpaPriceAmount * 1.33);
  //update grandpa power
    grandpaPower -=1;
  //turn autoGrandpa on!
    autoGrandpa = true
    autoGrandpaStart();
  //refresh shop item
    refreshGrandpa();
  }
})

let refreshGrandpa = function() {
grandpaLevel.innerHTML = grandpaLevelNumber
grandpaPrice.innerHTML = grandpaPriceAmount;
grandpaMultiple.innerHTML = grandpaPower - 10;
}

let autoGrandpaStart = function() {
let grandpaInt = window.setInterval(function(){
  cookieCount += grandpaPower;
  refreshCookieCount();
}, 1000);
}
