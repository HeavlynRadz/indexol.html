function sprawdz() {
    var liczba = document.getElementById("pole").value;
    
    if (liczba>0) document.getElementById("wynik").innerHTML = "liczba jest dodatnia";
    else if (liczba<0) document.getElementById("wynik").innerHTML = "liczba jest ujemna";
    else if (liczba == 0) document.getElementById("wynik").innerHTML = "liczba jest równa 0";
    else document.getElementById("wynik").innerHTML = "to nie jest liczba";
}