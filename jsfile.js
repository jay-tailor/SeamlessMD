  var obj;
  fetch('/patient.JSON')
        .then(data => data.json())
        .then(data => {
            obj = data;

  document.getElementById("demo").innerHTML += data.name.given + " " + data.name.family;
  document.getElementById("orgName").innerHTML += data.managingOrganization.display;
  document.getElementById("gender").innerHTML += data.gender;
  document.getElementById("numOfConditions").innerHTML += data.conditions.length;


 var arr = obj.conditions;
 var list = "<ul>";
    for(let i = 0; i<arr.length; i++)
    {
        list+= "<li>" + arr[i] + "</li>";
    }
    list += "</ul>"
document.getElementById("listOfConditions").innerHTML += list;
});
