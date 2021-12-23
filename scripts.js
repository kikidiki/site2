var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.width = "68vw";
    document.getElementById("navbar").style.right = "0%";
  } else {
    document.getElementById("navbar").style.top = "-450px";
  }
  prevScrollpos = currentScrollPos;

  if (prevScrollpos = window.pageYOffset) {
document.getElementById("navbar").style.width = "11vw";
document.getElementById("navbar").style.right = "3%";
  }

}