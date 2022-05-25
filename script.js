const url_doku = 'https://staging.doku.com/Suite/Receive';

const DATA = {
    MALLID: "8830",
    CHAINMERCHANT: "NA",
    AMOUNT: "24800.00",
    PURCHASEAMOUNT: "24800.00",
    TRANSIDMERCHANT: "100000000000000000000000001753",
    WORDS: "b15892bc0b9808ce81d100102e2b503dd00ebf13",
    REQUESTDATETIME: "20220523140808",
    CURRENCY: "360",
    PURCHASECURRENCY: "360",
    SESSIONID: "100000000000000000000000001753",
    NAME: "hardiansyah",
    EMAIL: "hardi2173bj@gmail.com",
    ADDITIONALDATA: "",
    BASKET: "FlexiLifeProtectionSyariah,24800.00,1,24800.00",
    CUSTOMERID: "0000027650007901",
    PAYMENTCHANNEL: "17",
    ADDRESS: "bojongmenteng",
    CITY: "",
    STATE: "jawabarat",
    COUNTRY: "",
    ZIPCODE: "16619",
    HOMEPHONE: "",
    MOBILEPHONE: "08223193818",
    WORKPHONE: "",
    BIRTHDATE: "19940524",
    BILLNUMBER: "2022052300000017",
    BILLDETAIL: "FPS-FlexiLifeProtectionSyariah",
    BILLTYPE: "P",
    STARTDATE: "20220520",
    ENDDATE: "20790520",
    EXECUTETYPE: "DATE",
    EXECUTEDATE: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28",
    EXECUTEMONTH: "JUN,JUL,AUG,SEP,OCT,NOV,DEC,JAN,FEB,MAR,APR,MAY",
    FLATSTATUS: "FALSE",
    REGISTERAMOUNT: "24800.00",
}

let DATA_ARRAY = [
    { "dataname": "MALLID", "datavalue": "8830"},
    { "dataname": "CHAINMERCHANT", "datavalue": "NA"},
    { "dataname": "AMOUNT", "datavalue": "24800.00"},
    { "dataname": "PURCHASEAMOUNT", "datavalue": "24800.00"},
    { "dataname": "TRANSIDMERCHANT", "datavalue": "100000000000000000000000001753"},
    { "dataname": "WORDS", "datavalue": "b15892bc0b9808ce81d100102e2b503dd00ebf13"},
    { "dataname": "REQUESTDATETIME", "datavalue": "20220523140808"},
    { "dataname": "CURRENCY", "datavalue": "360"},
    { "dataname": "PURCHASECURRENCY", "datavalue": "360"},
    { "dataname": "SESSIONID", "datavalue": "100000000000000000000000001753"},
    { "dataname": "NAME", "datavalue": "hardiansyah"},
    { "dataname": "EMAIL", "datavalue": "hardi2173bj@gmail.com"},
    { "dataname": "ADDITIONALDATA", "datavalue": ""},
    { "dataname": "BASKET", "datavalue": "FlexiLifeProtectionSyariah,24800.00,1,24800.00"},
    { "dataname": "CUSTOMERID", "datavalue": "0000027650007901"},
    { "dataname": "PAYMENTCHANNEL", "datavalue": "17"},
    { "dataname": "ADDRESS", "datavalue": "bojongmenteng"},
    { "dataname": "CITY", "datavalue": ""},
    { "dataname": "STATE", "datavalue": "jawabarat"},
    { "dataname": "COUNTRY", "datavalue": ""},
    { "dataname": "ZIPCODE", "datavalue": "16619"},
    { "dataname": "HOMEPHONE", "datavalue": ""},
    { "dataname": "MOBILEPHONE", "datavalue": "08223193818"},
    { "dataname": "WORKPHONE", "datavalue": ""},
    { "dataname": "BIRTHDATE", "datavalue": "19940524"},
    { "dataname": "BILLNUMBER", "datavalue": "2022052300000017"},
    { "dataname": "BILLDETAIL", "datavalue": "FPS-FlexiLifeProtectionSyariah"},
    { "dataname": "BILLTYPE", "datavalue": "P"},
    { "dataname": "STARTDATE", "datavalue": "20220520"},
    { "dataname": "ENDDATE", "datavalue": "20790520"},
    { "dataname": "EXECUTETYPE", "datavalue": "DATE"},
    { "dataname": "EXECUTEDATE", "datavalue": "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28"},
    { "dataname": "EXECUTEMONTH", "datavalue": "JUN,JUL,AUG,SEP,OCT,NOV,DEC,JAN,FEB,MAR,APR,MAY"},
    { "dataname": "FLATSTATUS", "datavalue": "FALSE"},
    { "dataname": "REGISTERAMOUNT", "datavalue": "24800.00"}
]

console.log(DATA_ARRAY);

function testform() {
    var form = document.getElementById("form")
    form.setAttribute("action", url_doku)
    form.innerHTML = ''
    DATA_ARRAY.map(DATA => {
        form.innerHTML += '<div class="inputbox"> <input type="text" name="' + DATA.dataname + '" class="form-control" value="' + DATA.datavalue + '"> <span>' + DATA.dataname + '</span></div>'
    })
    form.innerHTML += '<div class="px-5 pay"><button type="submit" class="btn btn-success btn-block">Submit</button></div>'
}