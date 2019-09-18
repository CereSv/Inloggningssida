var knapp = document.getElementById("knapp");
const UserName = "test";
const PassWord = "1234";

check();//Ser ifall användare redan är inloggad. 

knapp.onclick = function()
{
var namn = document.getElementById("namn").value;
var lösenord = document.getElementById("lösenord").value;
var text = document.getElementById("text");
    
    if(namn === UserName && lösenord === PassWord)//Ser ifall anv och pass är korrekt. 
    {
        localStorage.setItem("namn", namn);
        localStorage.setItem("lösenord", lösenord);
        localStorage.setItem("Inne", true);

        text.innerHTML = "You are now logged in."
        hidden();

        //Knapp för att logga ut och ränsa localstorage.
        var logoutbtn = document.createElement("button");
        logoutbtn.innerHTML ="Logga ut"
        logoutbtn.onclick = function()
        {
            localStorage.clear();
            location.reload();
        }
        document.body.appendChild(logoutbtn); 
    }
    else 
    {
        text.innerHTML = "Wrong Username or Password, please refresh and try again"
        hidden();
    }
}
    

function hidden()//Gömmer allt som inte behövs på inloggningssidan. 
{
    document.getElementById("namn").style.visibility ="hidden";
    document.getElementById("lösenord").style.visibility ="hidden";
    document.getElementById("knapp").style.visibility ="hidden";
}
//Kollar localstorage ifall användare redan är inloggad.
function check()
{
    if (localStorage.getItem("Inne")==="true")
    {
        text.innerHTML = "You are now logged in."
        hidden();
        var logoutbtn = document.createElement("button");
        logoutbtn.innerHTML ="Logga ut"
    
        logoutbtn.onclick = function()
        {
          localStorage.clear();
          location.reload();
        }
        document.body.appendChild(logoutbtn); 
    }
}