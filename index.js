// Write all the Javascript here
document.querySelector("form").addEventListener("submit",Inventory);
function Inventory(event){
    event.preventDefault();
    let proArr=[];
    let proName=document.querySelector("#name").value;
    let proCat=document.querySelector("#category").value;
    let proBrand=document.querySelector("#brand").value;
    let proPrice=document.querySelector("#price").value;
    let proDelevry=document.querySelector("#deliveredBy").value;
    // console.log(proName,proCat,proBrand,proPrice,proDelevry);
    let proObj={
        name:proName,
        categories:proCat,
        brand:proBrand,
        price:proPrice,
        delivery:proDelevry,
    }

    proArr.push(proObj);
    proDetails(proArr);
}

function proDetails(proArr){
    let final_total=0;
    proArr.forEach(function (elem){
        let row=document.createElement("tr");
        let col1=document.createElement("td");
        let col2=document.createElement("td");
        let col3=document.createElement("td");
        let col4=document.createElement("td");
        let col5=document.createElement("td");
        let col6=document.createElement("td");
        let col7=document.createElement("td");

        col1.innerText=elem.name;
        col2.innerText=elem.categories;
        col3.innerText=elem.brand;
        col4.innerText=elem.price;
        col5.innerText=elem.delivery;
        if(elem.price>1000){
            col6.innerText="Expensive";
        }else{
            col6.innerText="Not-Expensive";
        }
        col7.innerText="Delete";
        col7.addEventListener("click", function (event){
            event.target.parentNode.remove();
        });

if(elem.name=="" || elem.categories=="" || elem.brand=="" || elem.price=="" || elem.delivery==""){
            alert("Fill all input fields");
        }else{
            row.append(col1,col2,col3,col4,col5,col6,col7);
            document.querySelector("tbody").append(row);
        }

        final_total=elem.price;
        // document.querySelector("#total-price").innerHTML="Total Price:- "+final_total;
  
    });
    document.querySelector("#total-price").innerHTML="Total Price:- "+final_total;
}

