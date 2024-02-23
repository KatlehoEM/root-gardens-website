/* the next line stores the id called "totalCost" as a variable */
var totalElement = document.getElementById("totalCost");

/* the next few lines stores the checkbox ids as variable so that we can retrive data from them */
var checkbox1 = document.getElementById("checkbox1");
var checkbox2 = document.getElementById("checkbox2");
var checkbox3 = document.getElementById("checkbox3");
var checkbox4 = document.getElementById("checkbox4");
var checkbox5 = document.getElementById("checkbox5");

var total = 0;
/* The updateTotal function is responsible for calculating the total */
function updateTotal(){

    /* We declare the total to 0 everytime we access the updateTotal function */
    total = 0;

    /* The following if statements test which checkboxes are checked and total is increment with the checkbox value if it is checked*/
    if(checkbox1.checked){
        total+= parseInt(checkbox1.value);
    }
  
    if(checkbox2.checked){
        total+= parseInt(checkbox2.value);
    }
    
    if(checkbox3.checked){
        total+= parseInt(checkbox3.value);
    }
    
    if(checkbox4.checked){
        total+= parseInt(checkbox4.value);
    }
    if(checkbox5.checked){
        total+= parseInt(checkbox5.value);
    }
    /* The variable that was declared above is assigned the total which will be updated in the HTML */
    totalElement.textContent = total;
}

/* The following are event listeners for when something happens with checkboxes (e.g.  checked or unchecked), if so, then the updateTotal function is called */
checkbox1.addEventListener('click',updateTotal);
checkbox2.addEventListener('click',updateTotal);
checkbox3.addEventListener('click',updateTotal);
checkbox4.addEventListener('click',updateTotal);
checkbox5.addEventListener('click',updateTotal);

function applyDiscount(){
    document.getElementById("discount").innerHTML = (0.15 * parseInt(totalElement.textContent)).toFixed(2);
}
