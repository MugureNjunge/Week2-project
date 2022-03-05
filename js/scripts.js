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
