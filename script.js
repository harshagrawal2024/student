function addStudent() {
  ZOHO.CREATOR.init().then(function(data) {
    var studentId = document.getElementById("studentId").value;
    if (studentId === "") {
      alert("Please fill in Student ID");
      return false;
    }

    var firstName = document.getElementById("firstName").value;
    if (firstName === "") {
      alert("Please fill in First Name");
      return false;
    }

    var lastName = document.getElementById("lastName").value;
    if (lastName === "") {
      alert("Please fill in Last Name");
      return false;
    }

    var dob = document.getElementById("dob").value;
    if (dob === "") {
      alert("Please fill in Date of Birth");
      return false;
    }

    var grade = document.getElementById("grade").value;
    if (grade === "") {
      alert("Please fill in Grade");
      return false;
    }

    var mentor = document.getElementById("mentor").value;
    if (mentor === "") {
      alert("Please fill in Mentor");
      return false;
    }

    // If all fields are filled, you can proceed with adding the student here

pageData = {"data": {"Student": studentid, "Name":firstname,lastname, "Date_of_Birth":dateofbirth, "Grade":grade, "Mentor":mentor} }
var config={
         pageName :"student_details",
         data : pageData
}
 
ZOHO.CREATOR.API.addRecord(config).then(function(response){ 

	if(response.code == 3000){
Creator_id=response.data.ID;
	 console.log("Record added successfully");
	}
     else{
alert("response add succesfully);
}


  });
}
