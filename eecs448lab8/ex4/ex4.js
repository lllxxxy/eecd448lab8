function backgroundchange(){
    var backgroundRed = document.getElementById("backgroundRed").value;
    var backgroundGreen = document.getElementById("backgroundGreen").value;
    var backgroundBlue = document.getElementById("backgroundBlue").value;
    document.getElementById('content').style.backgroundColor = "rgb( " + backgroundRed +","+backgroundGreen+","+ backgroundBlue+")";
}
function borderchange(){
    var borderRed = document.getElementById("borderRed").value;
    var borderGreen = document.getElementById("borderGreen").value;
    var borderBlue = document.getElementById("borderBlue").value;
    var width = document.getElementById("borderWidth").value;
    document.getElementById('content').style.borderColor = "rgb( " + borderRed +","+borderGreen+","+ borderBlue+")";
    document.getElementById('content').style.borderWidth = width;
} 
