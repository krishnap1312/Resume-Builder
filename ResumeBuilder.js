onload =() =>{


}

let outputdiv = document.getElementById("outputdiv");
outputdiv.style.display = "none";
ResumeGetData = () =>{
    let FristName = document.getElementById("FristName").value;    
    let LastName = document.getElementById("LastName").value;
    let Contact = document.getElementById("Contact").value;
    let CareerObj = document.getElementById("CareerObj").value;
    let Qualification = document.getElementById("Qualification").value;
    let skills = document.getElementById("skills").value;
    let Experience = document.getElementById("Experience").value;
    let Achievements = document.getElementById("Achievements").value;
    let Extracurricular = document.getElementById("Extracurricular").value;
    let Email = document.getElementById("Email").value;
    let degree = document.getElementById("degree").value;
    let Hobbies = document.getElementById("Hobbies").value;


// if(FristName===""|| LastName==""|| Hobbies==""|| Contact==""|| CareerObj==""|| Qualification==""|| skills==""|| Experience==""|| Achievements==""|| Extracurricular=="" || Email=="" || degree==""){
//     alert("Please Fill all the details");
    
// }

// else{
    outputdiv.style.display = "block";
    document.getElementById("FNameOut").innerText = FristName + " " + LastName;
    document.getElementById("EmailOut").innerText = Email + "|" + Contact;
    document.getElementById("CareerOutDes").innerText = CareerObj;
    document.getElementById("SkillsBullet").innerText = skills;
    document.getElementById("DegreeOut").innerText = Qualification;
    document.getElementById("ExpDes").innerText = Experience;
    document.getElementById("DegreeOut").innerText = degree;
    document.getElementById("Achdes").innerText = Achievements;
    document.getElementById("extraOut").innerText = Extracurricular;
    document.getElementById("hobbiesdes").innerText = Hobbies;
// }
// }

reset = () =>{
    let FristName = document.getElementById("FristName").value="";    
    let LastName = document.getElementById("LastName").value="";
    let Contact = document.getElementById("Contact").value="";
    let CareerObj = document.getElementById("CareerObj").value="";
    let Qualification = document.getElementById("Qualification").value="";
    let skills = document.getElementById("skills").value="";
    let Experience = document.getElementById("Experience").value="";
    let Achievements = document.getElementById("Achievements").value="";
    let Extracurricular = document.getElementById("Extracurricular").value="";
    let Hobbies = document.getElementById("Hobbies").value="";
    let Email = document.getElementById("Email").value="";
    let degree = document.getElementById("degree").value="";

    }}