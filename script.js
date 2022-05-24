
function test() {
    let name = document.getElementsByName("CCNAME")[0].value
    let cardnum = document.getElementsByName("CARDNUMBER")[0].value
    let exp = document.getElementsByName("EXP")[0].value.split('-')
    let cvv = document.getElementsByName("CVV2")[0].value

    let expmonth = exp[1]
    let expyear = exp[0]

    let country = "ID"

    console.log(name);
    console.log(cardnum);
    console.log(expmonth);
    console.log(expyear);
    console.log(cvv);

    document.body.innerHTML += '<form id="Form" action="http://staging.doku.com/Suite/Receive" method="post">'
        + '<input type="hidden" name="CCNAME" value="' + name + '"></form>'
        + '<input type="hidden" name="CARDNUMBER" value="' + cardnum + '"></form>'
        + '<input type="hidden" name="EXPMONTH" value="' + expmonth + '"></form>'
        + '<input type="hidden" name="EXPYEAR" value="' + expyear + '"></form>'
        + '<input type="hidden" name="CVV2" value="' + cvv + '"></form>'
        + '<input type="hidden" name="CCCOUNTRY" value="' + country + '"></form>'

        + '<input type="hidden" name="MALLID" value="3334"></input>'
        + '<input type="hidden" name="CHAINMERCHANT" value="5"></input>'
        + '<input type="hidden" name="AMOUNT" value="1501500.00">'
        + '<input type="hidden" name="PURCHASEAMOUNT" value="1000000.00">'
        + '<input type="hidden" name="TRANSIDMERCHANT" value="24052022035523FP0019415570">'
        + '<input type="hidden" name="BASKET" value="Item 1,1501500.00,1,1501500.00">'



        + '<input type="hidden" name="REGISTERAMOUNT" value="1501500.00">'
        + '<input type="hidden" name="CUSTOMERID" value="0000243409FP00194155">'
        + '<input type="hidden" name="BILLNUMBER" value="00000079277">'
        + '<input type="hidden" name="SESSIONID" value="24052022022902FP0019415566">'
        + '<input type="hidden" name="PAYMENTCHANNEL" value="17"></input>'

    document.getElementById("Form").submit();
}

