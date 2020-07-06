
document.getElementById("home").addEventListener("click",function(){window.location.href="site.html"},false);
document.getElementById("contactos").addEventListener("click",function(){window.location.href="contactos.html"},false);
document.getElementById("eu").addEventListener("click",function(){window.location.href="eu.html"},false);
      document.getElementById("artigos").addEventListener("click",function(){window.location.href="artigos.html"},false);
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");

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