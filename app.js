
function calculateExpiration() {
  
    let days = prompt("Kitne din ke liye purchase karna chahte hain?");

    if (days === null || days === "") {
        alert("Aapne koi din nahi select kiya hai.");
        return;
    }
    
    days = parseInt(days);

    let currentDate = new Date();
    

    let expirationDate = new Date(currentDate);
    expirationDate.setDate(currentDate.getDate() + days);
    
    
    let expirationDateString = expirationDate.toDateString();
    

    alert("Aapki subscription " + days + " din baad expire hogi, yaani " + expirationDateString);
}