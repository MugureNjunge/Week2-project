function conversion () {
  let yearOfBirth = document.getElementById("yyyy").value;
  let monthOfBirth = parseInt(document.getElementById("mm").value);
  let dayOfBirth = parseInt(document.getElementById("dd").value);
  let genders = document.getElementsByName("gender");
  let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

  let myGenderValue = getGender();
  
  function monthValidator () {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
      alert("Invalid month entered")
      return false;
    } else {
      return true;
    }
  }

  function dayValidator () {
    if (dayOfBirth < 1 || dayOfBirth > 31){
      alert("Invalid date entered")
      return false;
    } else {
      return true;
    }
  }

  let monthValid = monthValidator();
  let dayValid = dayValidator();

  
  let dayOfWeekNumber =Math.floor((((parseInt(yearOfBirth.slice(0,2))/4)-2*parseInt(yearOfBirth.slice(0,2))-1)+
          ((5*parseInt(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth))%7;

  let index;

    if (dayOfWeekNumber === 0){
    index = 6;
  } else if(dayOfWeekNumber < 0){
    if (math.abs(dayOfWeekNumber) === 0){
      index = 6;
    }
    else {
      index = math.abs(dayOfWeekNumber)-1;
    }
  } else {
    index = dayOfWeekNumber - 1;
}

  console.log(index);

  if (myGenderValue === "male" && monthValid && dayValid) {
    alert("You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index]);
    return false;
  }else if (myGenderValue === "female" && monthValid && dayValid) {
    alert("You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index]);
    return false;
  }else {
    alert("You have not entered a day or month, please try again");
  }
}


