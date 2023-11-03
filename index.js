// SET COLOR FOR 'software' ON MOUSE HOVER
var currentColor = document.getElementsByTagName('code')[0].style.color;

document.querySelector('code').addEventListener("mouseover", function () {
    document.getElementsByTagName('code')[0].style.color = "blue";
});
document.querySelector('code').addEventListener("mouseout", function () {
    document.getElementsByTagName('code')[0].style.color = currentColor;
});