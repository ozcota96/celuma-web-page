var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
var contador_a = 0;
var contador_b = 0;
var contador_c = 0;
var contador_d = 0;

function showTab(n) {
  // This function will display the specified tab of the form ...

  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function getAnswer() {

  if (contador_a > contador_b && contador_a > contador_c && contador_a > contador_d) {
    return "NORMAL"
  }
  else if (contador_b > contador_a && contador_b > contador_c && contador_b > contador_d) {
    return "SECA"
  }
  else if (contador_c > contador_a && contador_c > contador_b && contador_c > contador_d) {
    return "GRASA"
  }
  else if (contador_d > contador_a && contador_d > contador_b && contador_d > contador_c) {
    return "MIXTA"
  }

}

function myFunction() {
  console.log("Llamada a myFunction")
  $("#exampleModal").modal('toggle');
  var tipoPiel = getAnswer();
  document.getElementById("modalTitle").innerHTML = tipoPiel;
  switch (tipoPiel) {
    case "NORMAL":
      document.getElementById("modalText").innerText = "Poros finos. Buena circulación sanguínea. Textura aterciopelada, suave y lisa. Transparencia uniforme de color rosado, fresco.";
      break;
    case "SECA":
      document.getElementById("modalText").innerText = "La piel seca, también conocida como xerosis o xerodermia, tiene distintas causas, entre las que se incluye el tiempo frío o seco, el daño por exposición al sol, los jabones agresivos y bañarse de más.";
      break;
    case "GRASA":
      document.getElementById("modalText").innerText = "La piel grasa es una piel que produce un exceso de lípidos. Este desarreglo puede tener su origen en las variaciones hormonales, o agresiones externas como el estrés o la contaminación. A diferencia de la piel seca, en este caso las glándulas sebáceas aportan bastantes más lípidos de los necesarios.";
      break;
    case "MIXTA":
      document.getElementById("modalText").innerText = "La piel mixta se denomina así porque es una combinación de dos tipos de piel: normal-seca y grasa o con impurezas. La piel mixta presenta un aspecto brillante y tiende a desarrollar pequeñas impurezas, sobre todo en la llamada zona T (frente, nariz y barbilla).";
      break;
    default:
      break;
  }
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    //document.getElementById("regForm").submit();
    getAnswer();
    myFunction();
    return false;
  }

  console.log(contador_a)
  console.log(contador_b)
  console.log(contador_c)

  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  const validateList = [];
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    validateList.push(y[i].checked)

    if(y[i].checked) {
      if(i == 0) {
        contador_a ++;
      }
      else if (i == 1){
        contador_b ++;
      }
      else if (i == 2){
        contador_c++;
      }
      else {
        contador_d++;
      }
    }
  }
  if(validateList.includes(true)){
    console.log("Valido")
  }
  else {
    alert("Debe seleccionar algo")
    valid = false;
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}