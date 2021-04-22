
function sha256(plainText)
	{
          
	        var md = forge.md.sha256.create();  
            md.start();  
            md.update(plainText, "utf8");  
            var hashText = md.digest().toHex();  
            return hashText;
        }        

function isEmpty(input){
    if(input == ''){
        return false
    }
    else{
        return true;
    }  
}

function Login(){
    this.event.preventDefault();
    let data = new FormData(document.forms.loginForm);
    let pass = data.get("password");
    pass = sha256(pass);
    data.set("password",pass);
        var oReq = new XMLHttpRequest(); 
        if(is_Driver==false){
            oReq.open("POST", "../backend/login.php", true);
        }
        else if(is_Driver == true){
            oReq.open("POST", "../backend/driverlogin.php", true);
        }
        
        oReq.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var response = this.responseText;
            
            if(response == 1 && is_Driver == false){
                alert("Login Successful");
              
                window.location.href="../user/rider-dash.html";
            }
            else if(response == 1 && is_Driver == true){
                alert("Login Successful");
                 
                window.location.href="../user/driver-dash.html";
            }
            
            else if(response == 0){
                alert("Incorrect Email/Password used. Please re-enter and try again!");

            }
        }
    };  
     oReq.send(data);
}