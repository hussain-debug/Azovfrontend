
// function fetch() {
//     var Name =document.getElementById("name").value;
    
// }



// function SubmitForm(){
//     var Name =document.getElementById("name").value;
//     var email =document.getElementById("Email").value;
//     var number =document.getElementById("number").value;
//     var message =document.getElementById("msg").value;
 
//     // if (Name && email && number && message == "") {
//     //     alert("fill out all")
//     //     return false
//     // }
//     // return true;
//     if (!Name||!email||!number||!message) {
//         alert("required all parameters")
//         return  
//     }
//     else{
//         alert(" Hi"+ Name +" your form is submitted");
//     }

// }




// application form code
// window.onload(alert("hello"))
var CountryValues={
    ukraine:["Vinnytsia National Medical University","OO Bogomolets National Medical University","Ternopil National Medical University","Lviv State Medical University","Kyiv Medical University"],
    uzbekistan:["Samarkand State Medical University","Tashkent Medical Academy","Bukhara State Medical University","Fergana Medical Institute","Andijan State Medical Institute"],
    kyrgyzstan:["Interntional Medical University","Kazan Federal Medical University","Asian Medical Institute","Kyrgyz State Medical Academy","Kyrgyz Russian Slavic University","Jalal-Abad State Medical University"],
    moldova:["Nicolae Testemitanu State University Of Medicine"],
    georgia:["University Of Georgia","BAtumi Shota Rustaveli State University","Akaki Tsereteli State University","Georgian National University","Tbilisi State Medical University","Ilia State University","Georgian American University",
            "David Tvildiani Medical University","European University","Ivane Javakhishvili Tbilisi State University","LLC Caucasus Interntional University","Geomedi Medical University","East European University","David Agmashenebeli University Of Georgia"
],
russia:["Vernadsky Crimean Federal University","Volgograd State Medical University","Siberian State Medical University","Bashkir State Medical University","Pacific State Medical University","Novosibirsk State University","Far Eastern Federal University","Pirogov Russian National Research Medical University","Peoples Friendship University","I.M. Sechenov First Moscow State Medical University","Kazan State Medical University","Samara State Medical University","Kemerovo State Medical University","I.N. Ulianov Chuvash State University","Rostov State Medical University","Orenburg State Medical University","Northern State Medical University","Kabardino-Balkarian State University","Kursk State Medical University"]
}


function changeDropdownValue(value){
if(value.length == 0){
    document.getElementById("University").innerHTML = "<option></option>"
}else{
    var countryoptions="";
    for(UniversityID in CountryValues[value]){
        countryoptions +="<option>" + CountryValues[value][UniversityID] + "</option>"
    }
document.getElementById("University").innerHTML=countryoptions;
}
}