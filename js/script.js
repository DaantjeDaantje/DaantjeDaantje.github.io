function changeImage() {
    var image = document.getElementById('league');
    if (image.src.match("league")) {
        image.src = "images/mikey.jpg";
    }
    else {
        image.src = "images/league.jpg";
    }
}

function changeImage2() {
    var image = document.getElementById('wedstrijd');
    if (image.src.match("wedstrijd")) {
        image.src = "images/meneertje.jpg";
    }
    else {
        image.src = "images/wedstrijd.jpg";
    }
}

function changeImage3() {
    var image = document.getElementById('website');
    if (image.src.match("website")) {
        image.src = "images/top5gamesindex.jpg";
    }
    else {
        image.src = "images/website.jpg";
    }
}

window.onload = setInterval(clock,1000);
function clock()
{
    var d = new Date();
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    month = monthArr[month];
    document.getElementById("date").innerHTML=date+" "+month+", "+year;
}
