  var number = document.querySelector("#number")
  var plusNumber = document.querySelector("#button_one")
  var clearNumber = document.querySelector("#button_two")
  var minusNumber = document.querySelector("#button_three")

  var  initializeNumber =  0

  function actionWithNumber() {
    number.textContent = initializeNumber

   if(initializeNumber > 0) {
      number.classList.remove('negative', 'zero')
      number.classList.add('positive')
   } else if(initializeNumber < 0) {
      number.classList.remove('positive','zero')
      number.classList.add('negative')
   } else {
      number.classList.remove('negative','positive')
      number.classList.add('zero')
   }
  }

 function plusNumbers() {
   initializeNumber ++ 
   actionWithNumber()
 }

 function clearNumbers() {
  initializeNumber = 0
  actionWithNumber()
}

 function minusNumbers() {
   initializeNumber --
   actionWithNumber()
 }


 

plusNumber.addEventListener("click", plusNumbers)
clearNumber.addEventListener("click", clearNumbers)
minusNumber.addEventListener("click", minusNumbers)


 actionWithNumber()
