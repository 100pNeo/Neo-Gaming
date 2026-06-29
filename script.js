function hideAllPages(){
    document.getElementById("homePage").style.display ="none";
    document.getElementById("aboutPage").style.display ="none";
    document.getElementById("contactPage").style.display ="none"
     document.getElementById("ShowCase").style.display ="none"
}

function showHome(){
   hideAllPages();
   document.getElementById("homePage").style.display = "block";
}

function showAbout(){
   hideAllPages();
   document.getElementById("aboutPage").style.display = "block";
}


function showContact(){
   hideAllPages();
   document.getElementById("contactPage").style.display = "block";
}

function ShowCase(){
   hideAllPages();
   document.getElementById("ShowCase").style.display = "block";
}