//
const firstName = document.getElementById("firstName");
const firstUserN = document.getElementById("firstUserN");
const firstEmail = document.getElementById("firstEmail");
const firstPhone = document.getElementById("firstPhone");
const firstAddress = document.getElementById("firstAddress");
const firstWebsite = document.getElementById("firstWebsite");
const firstCompany = document.getElementById("firstCompany");


const secondName = document.getElementById("secondName");
const secondUserN = document.getElementById("secondUserN");
const secondEmail = document.getElementById("secondEmail");
const secondPhone = document.getElementById("secondPhone");
const secondAddress = document.getElementById("secondAddress");
const secondWebsite = document.getElementById("secondWebsite");
const secondCompany = document.getElementById("secondCompany");


const lastName = document.getElementById("lastName");
const lastUserN = document.getElementById("lastUserN");
const lastEmail = document.getElementById("lastEmail");
const lastPhone = document.getElementById("lastPhone");
const lastAddress = document.getElementById("lastAddress");
const lastWebsite = document.getElementById("lastWebsite");
const lastCompany = document.getElementById("lastCompany");

const btn = document.getElementById("btn");

// Fetching data from the API
btn.addEventListener("click",fetchData)
async function fetchData() {
    try{
        const request = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await request.json();
        const firstUser = response [1];
        const secondUser = response [0];
        const lastUser = response [2];

        // Assigning  values to variables

     firstName.textContent = firstUser.name;
     firstUserN.textContent = firstUser.username;
     firstEmail. textContent = firstUser.email;
     firstPhone. textContent = firstUser.phone;
     firstAddress. textContent = firstUser.Address;
     firstWebsite. textContent = firstUser.website;
     firstCompany. textContent = firstUser.website;

     secondName.textContent = secondUser.name;
     secondUserN.textContent =secondUser.username;
     secondEmail. textContent = secondUser.email;
     secondPhone. textContent = secondUser.phone;
     secondAddress. textContent = secondUser.Address;
     secondWebsite. textContent = secondUser.website;
     secondCompany. textContent =secondUser.website;

     lastName.textContent = lastUser.name;
     lastUserN.textContent =lastUser.username;
     lastEmail. textContent = lastUser.email;
     lastPhone. textContent = lastUser.phone;
     lastAddress. textContent = lastUser.Address;
     lastWebsite. textContent = lastUser.website;
    lastCompany. textContent =lastUser.website;

    }catch (error){
        console.log("Error fetching data:",error);

    }

}
