
'use strict' ;

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const selection = document.getElementById("chooseAct");

button1.addEventListener("click",buttonAction);
button2.addEventListener("click",buttonAction2);

const addDate = document.getElementById("addDate");
const hideButtons = document.getElementById("hideButtons");
const hideButtons2 = document.getElementById("hideButtons2");

hideButtons2.style.display = 'none';
hideButtons.style.display = 'none';

function buttonAction() {
  let textAreaVar = document.getElementById("textArea");
  let motivateTextVar = document.getElementById("motivateText");
  let activityTextVar = document.getElementById("activityText");
  let durationTextVar = document.getElementById("durationText");
  let unitsTextVar = document.getElementById("unitsText");
  let forVar = document.getElementById("for");
  
  motivateTextVar.textContent ="";
  activityTextVar.textContent="";
  durationTextVar.textContent="";
  unitsTextVar.textContent="";
  forVar.textContent="";
  document.getElementById("chooseAct").value = "Choose"; //resetting values
  document.getElementById("addDate").value =""; //resetting values
  document.getElementById("timeordistance").value =""; //resetting values
  document.getElementById("units").value =""; //resetting values
  textAreaVar.textContent = "";

  //let unitsValue = document.getElementByIdvalue("default value").value;
  //textAreaVar.textContent = "youve been clicked!";
  button1.style.display = 'none';
  //addDate.style.display = 'none';

  if(button1.style.display == "none"){
    
    hideButtons.style.display = 'inline-flex';
  
  }
}

selection.addEventListener("change", selectAction);

function selectAction() {
  /* selecting activity from drop down menu */
  if(document.getElementById("chooseAct").value == "Basketball"){
    document.getElementById("units").value = "minutes";
    document.getElementById("units").disabled = true;
  }
  else if(document.getElementById("chooseAct").value == "Running"){
    document.getElementById("units").value = "miles";
    document.getElementById("units").disabled = true;
  }
  else if(document.getElementById("chooseAct").value == "Yoga"){
    document.getElementById("units").value = "minutes";
    document.getElementById("units").disabled = true;
  }
  else if(document.getElementById("chooseAct").value == "Sleeping"){
    document.getElementById("units").value = "hours";
    document.getElementById("units").disabled = true;
  }
  else if(document.getElementById("chooseAct").value == "Biking"){
    document.getElementById("units").value = "miles";
    document.getElementById("units").disabled = true;
  }

}

//const submit1 = document.getElementsById("submit1");

submit1.addEventListener("click", submitAction);

function submitAction(){
  /*action when pressing submit button, all fields required, else alert*/
  let pastDate = new Date(document.getElementById("addDate").value);
  let todayDate = new Date();
  console.log(pastDate);
  console.log(todayDate);

  let textAreaVar = document.getElementById("textArea");
  let motivateTextVar = document.getElementById("motivateText");
  let activityTextVar = document.getElementById("activityText");
  let durationTextVar = document.getElementById("durationText");
  let unitsTextVar = document.getElementById("unitsText");
  let forVar = document.getElementById("for");

  if(document.getElementById("chooseAct").value == "Choose"){
   alert("Please Select Activity!") 
   return;
  }
  if(document.getElementById("addDate").value == ""){
    alert("Please Select Date!") 
    return;
  }
  if(pastDate > todayDate){
    alert("Please Select Past Date!")
    return;
  }
  if(document.getElementById("timeordistance").value ==""){
    alert("Please enter time/distance!");
    return;
  }
  else{
    textAreaVar.textContent= "Got it! ";
    //console.log(document.getElementById("addDate").value);
    activityTextVar.textContent = document.getElementById("chooseAct").value;
    forVar.textContent = "  for  ";
    durationTextVar.textContent = document.getElementById("timeordistance").value;
    unitsTextVar.textContent = document.getElementById("units").value + ".";
    motivateTextVar.textContent = "Keep it up!";
    hideButtons.style.display = 'none';
    button1.style.display = 'flex';
  }
  
}

function buttonAction2() {

  let textAreaVar1 = document.getElementById("textArea1");
  //let motivateTextVar1 = document.getElementById("motivateText1");
  let activityTextVar1 = document.getElementById("activityText1");
  
  let onDate = document.getElementById("on");
  
  activityTextVar1.textContent="";
  
  onDate.textContent="";

  document.getElementById("chooseAct1").value = "Choose11"; //resetting values
  document.getElementById("addDate1").value =""; //resetting values
  
  
  textAreaVar1.textContent = "";

  //let unitsValue = document.getElementByIdvalue("default value").value;
  //textAreaVar.textContent = "youve been clicked!";
  button2.style.display = 'none';
  //addDate.style.display = 'none';

  if(button2.style.display == "none"){
    
    hideButtons2.style.display = 'inline-flex';
  
  }
}

  
submit11.addEventListener("click", submitAction1);
function submitAction1(){
  /*action when pressing submit button, all fields required, else alert*/
  let pastDate = new Date(document.getElementById("addDate1").value);
  let todayDate = new Date();
  console.log(pastDate);
  console.log(todayDate);

  let textAreaVar1 = document.getElementById("textArea1");
  //let motivateTextVar1 = document.getElementById("motivateText");
  let activityTextVar1 = document.getElementById("activityText1");
  let onDate = document.getElementById("on");
  let onDateText = document.getElementById("onDate");
  
  //let onVar1 = document.getElementById("for");
  if(document.getElementById("chooseAct1").value == "Choose11" || document.getElementById("chooseAct1").value == ""){
   alert("Please Select Activity!") 
   return;
  }
  if(document.getElementById("addDate1").value == ""){
    alert("Please Select Date!") 
    return;
  }
  if((pastDate) < todayDate){
    alert("Please Select Future Date!")
    return;
  }
 
  else{
    textAreaVar1.textContent= "Sounds good! Don't forget to come back to update your session for ";
    //console.log(document.getElementById("addDate").value);
    activityTextVar1.textContent = document.getElementById("chooseAct1").value;
    console.log("hi" + pastDate.getMonth());
    onDate.textContent = " on " + (pastDate.getMonth()+1) + "/" + (pastDate.getDate()+1) + "/" + pastDate.getFullYear() + ".";
    //onVar.textContent = " on ";
    console.log("test");
    hideButtons2.style.display = 'none';
    button2.style.display = 'flex';
  }
  
}


function postData() {
  let dateText = document.getElementById("addDate").value + document.getElementById("chooseAct").value + document.getElementById("timeordistance").value + document.getElementById("units").value;
  let dT = dateText.toString();
  //let activityText = document.getElementById("chooseAct").value;
  //let aT = activityText.toString();
  console.log("dT: " + dT);
  fetch('/newData1', {
    method: 'POST' , 
    headers: {'Cotent-Type': 'text/plain'},
    body: dT.toString() })
    .then(function(response) {
      return response.text()
    })
    .then(function(data) {
      console.log("Data received: "+data);
      displayOutput(null, data);
    })
    .catch(function(error) {
      console.error('There has been a problem with your fetch operation: ', error);
      displayOutput(null,error);
    });
    console.log("Line 2");
    
}

function postData2() {
  let dateText2 = document.getElementById("addDate1").value + document.getElementById("chooseAct1").value;
  let dT2 = dateText2.toString();
  //let activityText = document.getElementById("chooseAct").value;
  //let aT = activityText.toString();
  console.log("dT2: " + dT2);
  fetch('/newData1', {
    method: 'POST' , 
    headers: {'Cotent-Type': 'text/plain'},
    body: dT2.toString() })
    .then(function(response) {
      return response.text()
    })
    .then(function(data) {
      console.log("Data received: "+data);
      displayOutput(null, data);
    })
    .catch(function(error) {
      console.error('There has been a problem with your fetch operation: ', error);
      displayOutput(null,error);
    });
    console.log("Line 3");
    
}
 