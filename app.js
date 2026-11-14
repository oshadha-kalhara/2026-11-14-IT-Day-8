// let customerList = []
// function btnAddCustomerOnAction() {

//     let customer = {
//         name: document.getElementById("txtName").value,
//         address: document.getElementById("txtAddress").value,
//         phone: document.getElementById("txtPhone").value,
//         email: document.getElementById("txtEmail").value 
//     }

//     customerList.push(customer);
//     resetInputFields();
//     btnLoadTableOnAction()
    
    

// }

// function btnLoadTableOnAction() {
//     let tblCustomer = document.getElementById("tblCustomer");

//     let body = "";

//     for(let i = 0; i < customerList.length; i++){

//         body += `
//             <tr>
//                 <td>${customerList[i].name}</td>
//                 <td>${customerList[i].address}colombo</td>
//                 <td>${customerList[i].phone}0774552852</td>
//                 <td>${customerList[i].email}saman@gmail.com</td>
//             </tr> `
//     }

//     tblCustomer.innerHTML = body;
// }

// function resetInputFields() {
//     document.getElementById("txtName").value = "";
//     document.getElementById("txtAddress").value = "";
//     document.getElementById("txtPhone").value = "";
//     document.getElementById("txtEmail").value = "";
// }



let randomNum = Math.floor(Math.random() *10) +1
console.log(randomNum)
function btnSubmitOnAction() {
    
    let guessingNum = document.getElementById("inputfield").value;
    
    if (randomNum ==  guessingNum){
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your are Correct",
        showConfirmButton: false,
        timer: 1500
});
    }else {
        
        Swal.fire({
        title: "Sorryy :(  Your are wrong!!",
        showClass: { popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
    ` },
        hideClass: { popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
    ` }
});

        document.getElementById("inputfield").value = "";
    }
    
    console.log(guessingNum)

    if (guessingNum > 10){
        alert("Invalid !! retry with number between 1 to 10")
    }
}

