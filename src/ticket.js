function BookClick(){
    document.getElementById("toolBar").style.display="none";
    document.getElementById("summary").style.display="block";

    document.getElementById("lblMovie").innerHTML = document.getElementById("Movie").value;
    document.getElementById("lblCinema").innerHTML = document.getElementById("Cinema").value;
    document.getElementById("lblDate").innerHTML = document.getElementById("Date").value;
    document.getElementById("lblTiming").innerHTML = document.getElementById("Timing").value;
    document.getElementById("lblSeats").innerHTML = document.getElementById("Seats").value;
   
    movieName = document.getElementById("Movie").value;
    if(movieName=="Avatar : Way of Water"){
        document.getElementById("poster").src="public/images/avtar.jpg";
    }
    if(movieName=="Pathaan") {
        document.getElementById("poster").src="public/images/pathaan.jpg";
    }
}
function PrintPage(){
    var divContents = document.getElementById("summary").innerHTML;
    var a = window.open('','', 'height=1000, width=1000'); 
    a.document.write('<html>');
    a.document.write('<body>');
    a.document.write('<div> <dl> <dt>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
    }