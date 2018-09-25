var numberCuestion = 0;
function selectOnlyThis(id) {
  for (var i = 1;i <= 4; i++){
    document.getElementById(i).checked = false;
  }
  
  document.getElementById(id).checked = true;
}

function sh() {
  var element = document.getElementById("show-hide");
  element.classList.toggle("hide-nav");
  element.classList.toggle("show-nav");
}