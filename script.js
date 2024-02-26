// // --------------------------------

function AlertMessage(){
    alert("This Feature Is Coming Soon...");
}


//     let name='Agastya';
// console.log(typeof name);

// let num = '12345';
// // console.log(Number(num));
// let abc=Number(num);
// console.log(typeof abc);

// console.table([name,abc]);

// abc=String(abc);

// if(typeof name=== typeof abc){
//     console.log("Equal Datatypes");
// }
// }
// // ---------------------------------

let source = document.getElementById('source');
let industry = document.getElementById('industry');
let date = document.getElementById('date');
let address = document.getElementById('address');
let email = document.getElementById('email');

let tbody = document.getElementById('tbody');
let tbody2 = document.getElementById('tbody2');

let country = document.getElementById('country');
let company = document.getElementById('company');
let budget = document.getElementById('budget');
let stock = document.getElementById('stock');
let companyType = document.getElementById('companyType');


let button = document.getElementById('btn');
button.addEventListener('click',tableFun);


function tableFun(){

    function tableFun1(){
        let obj = {
            source : source.value,
            industry: industry.value,
            email: email.value,
            date: date.value,
            address: address.value
        }
    
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
    
        td1.innerText = obj.source;
        td2.innerText = obj.industry;
        td3.innerText = obj.email;
        td4.innerText = obj.date;
        td5.innerText = obj.address;
    
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
    
        tbody.appendChild(tr);
    
        source.value=null;
        industry.value=null;
        email.value=null;
        date.value=null;
        address.value=null;
    
    }
    
    function tableFun2(){
        let obj2 = {
            country : country.value,
            company: company.value,
            budget: budget.value,
            stock: stock.value,
            companyType: companyType.value
    }

    let tr2 = document.createElement('tr');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');
    let td8 = document.createElement('td');
    let td9 = document.createElement('td');
    let td10 = document.createElement('td');


    td6.innerText = obj2.country;
    td7.innerText = obj2.company;
    td8.innerText = obj2.budget;
    td9.innerText = obj2.stock;
    td10.innerText = obj2.companyType;

    tr2.appendChild(td6);
    tr2.appendChild(td7);
    tr2.appendChild(td8);
    tr2.appendChild(td9);
    tr2.appendChild(td10);

    tbody2.appendChild(tr2);

    country.value=null;
    company.value=null;
    companyType.value=null;
    stock.value=null;
    budget.value=null;

    }

    tableFun2();
    tableFun1();

}

// -------------------------------------------------------

let themeButton = document.getElementById('theme');
let FormCont = document.querySelector(".FormCont");
let heading = document.querySelector(".heading");
let heading2 = document.querySelector(".heading2");
let heading3 = document.querySelector(".heading3");
let tableCard = document.querySelector(".tableCard");
let inputs = document.querySelectorAll('input, select');

themeButton.addEventListener('click',changeTheme);

function changeTheme(){
    heading.classList.toggle('headingDark');
    heading2.classList.toggle('heading2Dark');
    heading3.classList.toggle('heading3Dark');
    document.body.classList.toggle("dark-mode");
    FormCont.classList.toggle('formDark');
    tableCard.classList.toggle('tableDark');
    // input.classList.toggle('Input');
    
    // var image = document.getElementById('icon');
    if(themeButton.innerHTML === 'Dark'){
        inputs.forEach(function(input){
            input.style.backgroundColor = '#378d73';
            input.style.fontWeight = 'bold';
        });
        themeButton.innerHTML='Light';
        tbody.style.color='black';
        tbody2.style.color='black';
        
    }else{
        inputs.forEach(function(input){
            input.style.backgroundColor = '#f0eded';
            input.style.fontWeight = 'normal';
        });
        themeButton.innerHTML='Dark';
        tbody.style.color='black';
        tbody2.style.color='black';
    }
}





