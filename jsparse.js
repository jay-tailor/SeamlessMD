var jsonFile = `{
    "resourceType": "Patient",
    "id": "xcda",
    "text":{
      "status": "generated",
      "div": "<div>   \\n \\n   <p> Henry Levin the 7th </p> \\n \\n  </div>"
    },
    "identifier": {
        "use": "usual",
        "type": {
          "coding": [{
              "system": "htt://hl7.org/fhir/v2/0203",
              "code": "MR"
            }]
        },
        "system": "urn:oid:2.16.840.1.113883.19.5",
        "value": "12345"
      },
    "active": true,
    "name": {
        "family":  ["Levin"] ,
        "given":   ["Henry"]

    },
    "gender": "male",
    "birthDate": "2020-09-24",
    "managingOrganization": {
      "reference": "Organization/2.16.840.1.113883.19.5",
      "display": "University Health Network"
    },
    "conditions": [
      "Diabetes",
      "High blood pressure",
      "Asthma"
    ]
  }`

  obj = JSON.parse(jsonFile);
  document.getElementById("demo").innerHTML += obj.name.given + " " + obj.name.family;
  document.getElementById("orgName").innerHTML += obj.managingOrganization.display;
  document.getElementById("gender").innerHTML += obj.gender;
  document.getElementById("numOfConditions").innerHTML += obj.conditions.length;


 var arr = obj.conditions;
 var list = "<ul>";
    for(let i = 0; i<arr.length; i++)
    {
        list+= "<li>" + arr[i] + "</li>";
    }
    list += "</ul>"
document.getElementById("listOfConditions").innerHTML += list;
