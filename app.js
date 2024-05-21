let actuelStyleSheet = 1;

function changeCSS() {
  let ss = document.getElementById("ss");

  if (actuelStyleSheet === 1) {
    ss.href = "styleDark.css";
    actuelStyleSheet = 2;
  } else {
    ss.href = "style.css";
    actuelStyleSheet = 1;
  }
}


function allerAuDebut() {
  window.location.href = "debut.html";
}
function allerALaCroissance() {
  window.location.href = "croissance.html";
}

