function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * (rate /100);
    var year = new Date().getFullYear()+parseInt(years);
    var amount = parseFloat(principal) + parseFloat(interest);

    //onclick alert if principal value is zero or negative
    if(parseInt(principal)<=0 || principal ===""){
        alert("PLEASE ENTER POSITIVE PRINCIPAL AMOUNT");
        document.getElementById("principal").focus();
    }
    else{

            document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\> at an interest rate of "+rate+"%\<br\>You will receive an interest "+interest+" hence the total amount of "+amount+",\<br\>in the year "+year+"\<br\>"

    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}