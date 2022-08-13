function go() {
  var data = document.getElementById("data").innerHTML;
  localStorage.setItem("data ", data );
}

function disp() {
  document.getElementById("display").innerHTML = localStorage.getItem("data");
}