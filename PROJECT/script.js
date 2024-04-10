/*form validation*/
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const phone = document.getElementById('phone')
const ch_product = document.getElementById('ch_product')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

/*form.addEventListener('submit',(e)=>{
    let messages=[]
    if(email.value === '' || email.value == null){
        messages.push('Email is required')
    }
    if(password.value.length <=6){
        messages.push('Password must be longer than 6 characters')
    }
    if(password.value==='password'){
        messages.push('Password cannot be password')
    }
    if(ch_product.value===''){
        messages.push('Please select a choise')
    }
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText=messages.join(', ')
    }
})*/


/*paragraph items*/

let http = new XMLHttpRequest();
http.open('get', 'json/paragraph.json', true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let paragraphs = JSON.parse(this.responseText);
        let output = "";
        for (let item of paragraphs) {
            output += `
             <h3><strong><i class="fa fa-hand-o-right" aria-hidden="true"></i>
             ${item.heading}</strong></h3>
             <p>${item.description}</p>         
               
	         `;
        }
        document.querySelector("paragraph").innerHTML = output;
    }
}
/*Product items 
let http = new XMLHttpRequest();
http.open('get', 'json/products.json', true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);
        let output = "";
        for (let item of products) {
            output += `
             <h3><strong><i class="fa fa-hand-o-right" aria-hidden="true"></i>
             ${item.image}</strong></h3>
             <p>${item.description}</p>  
             <p>${item.price}</p>       
               
	         `;
        }
        document.querySelector("product").innerHTML = output;
    }
}
*/

/*Banner Image*/

/*Link section */
fetch("./link.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("link").innerHTML = data;
});

/*Header section */
fetch("./header.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
});
/*Header2 section */
fetch("./header2.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header2").innerHTML = data;
});
/*Header3 section */
fetch("./header3.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("header3").innerHTML = data;
});
/*Footer section */
fetch("./footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector(".footer").innerHTML = data;
});