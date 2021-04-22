function check() { 
    document.getElementById("signupForm").innerHTML = ""; //empty rider form
    let formdriver = `
     <div class="step step-1 active">
    <h4 class="p-head">Add Photo</h4>
    <span class="photo-container">
    <input type="file" display="none" name="profileImg" accept="image/*" id="upload" onchange="displayImg(event)" required> 
    <img class="image" accept="image/*" id="output" src="../img/placeholder.png">
    </span>
    <span class="signup-container">
        <input class="signup-input" id="first" type="text" placeholder="First Name" name="fname" required>
        <input class="signup-input" id="last" type="text" placeholder="Last Name" name="lname" required>
        <input class="signup-input" id="mail" type="email" placeholder="Email" name="email" required>
        <input class="signup-input phone" type="tel" placeholder="Phone Number" name="tel" required>
    <input class="signup-input user" type="text" placeholder="Username" name="username" required>
    <div>
        <input class="signup-input psw" id="password" type="password" placeholder="Enter Password" name="pass" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase 
        letter, and at least 8 or more characters" oninvalid="InvalidMsg();" onchange="validatePassword();">
        <input class="signup-input psw" id="confirm_password" type="password" placeholder="Confirm Password" name="password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase 
        letter, and at least 8 or more characters" oninvalid="InvalidMsg();" onkeyup="validatePassword();">
        </div>
        <button type="button" class="next-btn">Next</button>
        </div>
        <div class="step step-2">
    <span id="license">
        <h5>Upload license</h5>
        <input class="signup-input" type="file" accept="image/*" name="License" recquired>
        <input class="signup-input" type="text" placeholder="License Plate Number" name="LicensePlate" required min=6 max=7>
        <input class="signup-input" type="text" placeholder=" Vehicle Make/Brand" name="make" required>
        <input class="signup-input" type="text" placeholder="Vehicle Model" name="model" required>  
        <input class="signup-input" type="number" placeholder="Registration Number" name="regnum" required>
        <h5>Upload certified copy scan</h5>
        <input class="signup-input" type="file" accept="image/*" name="cscan" required>
    </span>
    <div class="carpic-container">
            <label for="carpic-container">Please upload a photo of your vehicle:</label>
            <input type="file" class="signup-input form-control" id="vphoto" name="CarPhoto" accept="image/*" required>
</div>
    </span>
    <button type="button" class="previous-btn">Prev</button>
        <button type="submit" class="v2">Submit</button>
    </div>
    
    `;
    document.getElementById("signupForm").innerHTML = formdriver; //insert driver form
    var rider = document.getElementById("Rider");
    var driver = document.getElementById("Driver");
    // var button = document.getElementById("next-btn").style;
    const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  
  form.reset();
});

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}
    rider.style.backgroundColor = "white";
    rider.style.color = "black";
    rider.style.position = "unset";
    driver.style.position = "relative";
    driver.style.backgroundColor = "#F8CD46";
    driver.style.color = "black";
    // button.backgroundColor = "yellow";
    // button.color = "black";
    driver.style.width = "7em";
    rider.style.width = "8em";
}
 function displayImg(){

	var image = document.getElementById('output');
    
	image.src = URL.createObjectURL(this.event.target.files[0]);
}

async function uncheck() { //Rider selected
    var rider = document.getElementById("Rider");
    var driver = document.getElementById("Driver");
    // var button = document.getElementById("next-btn").style;

    rider.style.backgroundColor = "rgb(35, 10, 124)";
    rider.style.color = "white";
    rider.style.position = "relative";
    driver.style.position = "unset";
    driver.style.backgroundColor = "white";
    driver.style.color = "black";
    driver.style.width = "8em";
    rider.style.width = "7em";
    // button.backgroundColor = "rgb(35, 10, 124)";
    // button.color = "white";

    document.getElementById("signupForm").innerHTML = ""; //empty driver form
    let formrider = `<h4>Add Photo</h4>
    <span class="photo-container">
        
        <input type="file" display="none" name="profileImg" accept="image/*" onchange="displayImg(event)" id="upload" required> 
        <img class="image" id="output" src="../img/placeholder.png">
    </span>
    <span class="signup-container">
        <input class="signup-input" id="first" type="text" placeholder="First Name" name="fname" required>
        <input class="signup-input" id="last" type="text" placeholder="Last Name" name="lname" required>
        <input class="signup-input" id="mail" type="email" placeholder="Email" name="email" required>
        <input class="signup-input phone" type="tel" placeholder="Phone Number" name="phone" required>
    <input class="signup-input user" type="text" placeholder="Username" name="username" required>
    <div>
    <input class="signup-input psw" id="password" type="password" placeholder="Enter Password" name="pass" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase 
    letter, and at least 8 or more characters" oninvalid="InvalidMsg();" onchange="validatePassword();">
    <input class="signup-input psw" id="confirm_password" type="password" placeholder="Confirm Password" name="password" minlength="8" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase 
    letter, and at least 8 or more characters" oninvalid="InvalidMsg();" onkeyup="validatePassword();">
    </div>
        <h5>Upload ID card</h5>
        <input class="signup-input idc" type="file" accept="image/*" name="IDcard" required>
    </span>
    <div>
        <input class="submit-btn" id="next-btn" type="submit" value="Sign Up" required>
    </div>`;
    document.getElementById("signupForm").innerHTML = formrider; //insert rider form
}

function driverpg2() {
    var rider = document.getElementById("Rider");
    var driver = document.getElementById("Driver");
    var button = document.getElementById("next-btn").style;

    rider.style.backgroundColor = "white";
    rider.style.color = "black";
    rider.style.position = "unset";
    driver.style.position = "relative";
    driver.style.backgroundColor = "yellow";
    driver.style.color = "black";
    // button.backgroundColor = "yellow";
    // button.color = "black";
    driver.style.width = "7em";
    rider.style.width = "8em";

    document.getElementById("signupForm").innerHTML = ""; //empty driver form page 1

    let formdriver2 = `<span id="driverpg2">
    <label for="DOB">Please enter your Date of Birth:</label>
    <input type="date" class="signup-input" id="DOB" name="DOB" placeholder="Enter Date of Birth" value="Date" min="1950-01-01" max="2003-01-01" required>
    <div class="address-group">
        <input type="street" class="signup-input form-control" id="street1" placeholder="Address 1" required>
        <input type="street" class="signup-input form-control" id="street2" placeholder="Address 2" required>

        <input type="city" class="signup-input form-control" id="inputCity" placeholder="Town/Village/City" required>


        <div class="carpic-container">
            <label for="carpic-container">Please upload 3 photos of your vehicle:</label>
            <input type="file" class="signup-input form-control" id="carpic1" accept="image/*" required>
            <input type="file" accept="image/*" class="signup-input form-control" id="carpic2" required>
            <input type="file" accept="image/*" class="signup-input form-control" id="carpic3" required>
        </div>
    </span>



<div>
    <input class="submit-btn" id="next-btn" type="submit" value="Sign Up" required>
</div>

<style>
    s {
        background-color: rgb(212, 49, 49);
    }
    
    input {
        margin: 5px 5px;
        color: white;
        text-shadow: black 0px 1px;
        display: inline-block;
    }
    
    label {
        margin: 35px;
        color: white;
        text-shadow: black 0px 1px;
        display: inline-block;
        background-color: rgb(81, 81, 87) border font-size: 16px;
        text-shadow: black 1px 1px;
        font-family: Arial, Helvetica, sans-serif;
        background-color: rgb(81, 81, 87);
        opacity: 0.9;
        border-radius: 30px;
        text-align: center;
        width: 20rem;
        font-size: 16px;
    }
    
    .driverpg2 {
        margin: 30px auto;
        width: 450px;
        align-items: center;
    }
    
    #form-control {
        float: left;
    }
    
    #DOB {
        color: black;
    }
    
    #inputStreet {
        width: 100%;
        text-shadow: none;
        color: black;
    }
    
    #street1 {
        width: 50%;
        text-shadow: none;
        color: black;
    }
    
    #street2 {
        width: 50%;
        text-shadow: none;
        color: black;
    }
    
    #inputCity {
        width: 50%;
        text-shadow: none;
        color: black;
    }
</style>`;
    document.getElementById("signupForm").innerHTML = formdriver2; //insert driver page 2

}
//Validation
function validatePassword() {
    var password = document.getElementById("password");
    let confirm_password = document.getElementById("confirm_password");
    if ((password.value) != (confirm_password.value)) {
        password.setCustomValidity("Passwords don't match");
        confirm_password.setCustomValidity("Passwords don't match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

function InvalidMsg() {
    var password = document.getElementById("password");
    if (password.validity.patternMismatch) {
        password.setCustomValidity(`Please ensure that your password is at least 8 characters, has a number, an uppercase letter and a lowercase letter`);
    } else {
        password.setCustomValidity('');
    }
    return true;
}

function forgotpsw() { //Forgot password page
    document.getElementById("show").innerHTML +=
        `<style>
        #show {
        display: none;
        }
        <style>
    } `;
    document.getElementById("hidden").innerHTML +=
        `<style>
            #hidden {
        display: block;
            }
        <style>
    } `;
};

 let is_Driver = false;
function rlogin() {

    var rider = document.getElementById("Rider");
    var driver = document.getElementById("Driver");
    var button = document.getElementById("login-btn").style;
    is_Driver = false;
    rider.style.backgroundColor = "rgb(35, 10, 124)";
    rider.style.color = "white";
    rider.style.position = "relative";
    driver.style.position = "unset";
    driver.style.backgroundColor = "white";
    driver.style.color = "black";
    driver.style.width = "8em";
    rider.style.width = "7em";
    button.backgroundColor = "rgb(35, 10, 124)";
    button.color = "white";
}

function dlogin() {
    var rider = document.getElementById("Rider");
    var driver = document.getElementById("Driver");
    var button = document.getElementById("login-btn").style;
    is_Driver = true;
    rider.style.backgroundColor = "white";
    rider.style.color = "black";
    rider.style.position = "unset";
    driver.style.position = "relative";
    driver.style.backgroundColor = "yellow";
    driver.style.color = "black";
    button.backgroundColor = "yellow";
    button.color = "black";
    driver.style.width = "7em";
    rider.style.width = "8em";
    
}
