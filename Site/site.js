var slideIndex = 1;
showSlides(slideIndex);
slideIndex--;
carousel();
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var up=document.getElementById("up");
    var down=document.getElementById("down");

    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      content.previousElementSibling.style.borderBottom="solid";
      content.previousElementSibling.style.borderBottomLeftRadius="8px";
      content.previousElementSibling.style.borderBottomRightRadius="8px";
      
    } else {
      content.style.display = "block";
      content.style.borderTopLeftRadius = "2px";
      content.previousElementSibling.style.borderBottom="thick solid #A901DB";
      content.previousElementSibling.style.borderBottomLeftRadius=0;
      content.previousElementSibling.style.borderBottomRightRadius=0;
    }
  });
}
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  
  dots[slideIndex-1].className += " active";
  setTimeout(carousel, 10000); // Change image every 10 seconds
}

document.getElementById("home").addEventListener("click",function(){window.location.href="site.html"},false);
document.getElementById("contactos").addEventListener("click",function(){window.location.href="contactos.html"},false);
document.getElementById("reiki").addEventListener("click",function(){window.location.href="Reiki.html"},false);
document.getElementById("reiki2").addEventListener("click",function(){window.location.href="Reiki.html"},false);
document.getElementById("CaminhoReiki").addEventListener("click",function(){window.location.href="CaminhoReiki.html"},false);
document.getElementById("CaminhoAnjos").addEventListener("click",function(){window.location.href="CaminhoAnjos.html"},false);
document.getElementById("CaminhoMestre").addEventListener("click",function(){window.location.href="CaminhoMestre.html"},false);
document.getElementById("Caminho1").addEventListener("click",function(){window.location.href="CaminhoBuda.html"},false);
document.getElementById("Caminho2").addEventListener("click",function(){window.location.href="Gateway.html"},false);
document.getElementById("TM").addEventListener("click",function(){window.location.href="TM.html"},false);
document.getElementById("TM2").addEventListener("click",function(){window.location.href="TM.html"},false);
document.getElementById("eu").addEventListener("click",function(){window.location.href="eu.html"},false);
document.getElementById("artigos").addEventListener("click",function(){window.location.href="artigos.html"},false);