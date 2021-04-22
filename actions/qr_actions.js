
const domain = "http://api.qrserver.com/v1/create-qr-code/?data=";

        async function sendRequest(url, method, data) {
            const options = {
                method
            };

            if (data) {
                options.body = JSON.stringify(data);
                options.headers = {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                };
            }
            let response = await fetch(url, options);
            return response.json();
        }


async function displayCode(){
    let response = await sendRequest('../backend/qrCode.php','POST');
    var img = document.getElementById('qr');
    img.src = `https://api.qrserver.com/v1/create-qr-code/?data=${response.msg}&amp;size=50x50`;
    

}
function displayDriverInfo(response){
    let img = document.getElementById('propic');
    img.src = `${response.profile}`;
    let driver = document.getElementById('verified-driver-text');
    driver.innerHTML = `${response.name}`;
    let html = document.getElementById('vehicle_container');
    html.innerHTML =`
    <p id="vehicle-model"> Vehicle: ${response.vehicle} </p>
    <p id="vehicle-plate"> Vehicle Number Plate: ${response.numplate} </p>
    `;
    let carIMG = document.getElementById('carimg1');
    carIMG.src = `${response.carimg}`;
}
async function fetchDriverData(){
    let response = await sendRequest('../backend/driverdash.php','POST');
    displayDriverInfo(response);
}

displayCode();
fetchDriverData();
