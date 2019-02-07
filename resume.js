function loadJson(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("appication/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function() {
    if (xhr.readyState===4 && xhr.status=="200") {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text) {
  var data=JSON.parse(text);
  console.log(data);
  personalDetails(data.personalDetails);
  // console.log(data.personalDetails);
  careerDetails(data.career);
  // console.log(data.career);
  educationDetails(data.education);
  awardsDetails(data.awards);
  activitiesDetails(data.activities);

  // console.log(data.education);


});
var main=document.querySelector(".main");
function personalDetails(details) {
  var left=document.createElement("div");
  left.classList.add("left")
  main.appendChild(left);
  var left1=document.createElement("div");
  left1.classList.add("left1")
  left.appendChild(left1);
  let image=document.createElement("img");
  image.src=details.image;
  left1.appendChild(image);
  var myname=document.createElement("h2");
    myname.textContent=details.myname;
    left1.appendChild(myname);
  var designation=document.createElement("h4");
  designation.textContent=details.designation;
  left1.appendChild(designation);
  var hr=document.createElement("hr");
  left1.appendChild(hr);
  var left2=document.createElement("div");
  left2.classList.add("left2");
  left.appendChild(left2);
  var fname=document.createElement("h4");
  fname.textContent=details.fname;
  left2.appendChild(fname);
  var email=document.createElement("h4");
  email.textContent=details.email;
  left2.appendChild(email);
  var address=document.createElement("h4");
  address.textContent=details.address;
  left2.appendChild(address);


}
var right=document.createElement("div");
right.classList.add("right")
main.appendChild(right);
function careerDetails(details1) {

  var obj=document.createElement("h2");
  obj.textContent=details1.obj;
  right.appendChild(obj);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var co=document.createElement("h5");
  co.textContent=details1.co;
  right.appendChild(co);
//   for(var j in details1)
//   {
//     var qualification=document.createElement("h2");
//     qualification.textContent=details1[j].qualification;
//     right.appendChild(qualification);
// }

}
function educationDetails(details2) {
  for(j in details2)
  {
  

    var qualification=document.createElement("h2");
    qualification.textContent=details2[j].qualification;
    right.appendChild(qualification);
    var hr=document.createElement("hr");
    right.appendChild(hr);
    var inst=document.createElement("h5");
    inst.textContent=details2[j].inst;
    right.appendChild(inst);
}
}
function awardsDetails(details3) {
  var obj=document.createElement("h2");
  obj.textContent=details3.obj;
  right.appendChild(obj);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var achiviments=document.createElement("h5");
  achiviments.textContent=details3.achiviments;
  right.appendChild(achiviments);

}
function activitiesDetails(details4) {

  for(i in details4){
    var activities1=document.createElement("h2");
    activities1.textContent=details4[i].activities1;
    right.appendChild(activities1);
    var hr=document.createElement("hr");
    right.appendChild(hr);
    var data1=document.createElement("h5");
    data1.textContent=details4[i].data1;
    right.appendChild(data1);

  }

}
