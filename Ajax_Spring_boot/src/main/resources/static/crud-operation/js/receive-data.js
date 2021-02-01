import {deleteData,updateData} from '/crud-operation/js/send-data.js';

let dataShow=document.getElementById("tbody");
export function getAllData(){
    dataShow.innerHTML="";
    const xhr=new XMLHttpRequest();
    xhr.open("GET","get-all-data",true);
    xhr.responseType="json";
    xhr.onload=()=>{
        if(xhr.status===200){
            let takeData=xhr.response;
            for(let i=0;i<takeData.length;i++){
                dataShow.innerHTML+=
                "<tr><td>"+takeData[i].id+"</td><td>"+takeData[i].firstName+"</td><td>"+takeData[i].lastName+"</td><td>"+takeData[i].email+"</td><td>"+takeData[i].address+
                "</td><td><button class='button-edit' edit-id="+takeData[i].id +">Edit</button><button class='button-del' del-id="+takeData[i].id +">Delete</button></td></tr>";
            }
        }else console.log("Problem occurred");
        deleteData();
        updateData();
    };
    xhr.send();
}

export function setDataForEdit(eventId){
    let id=document.getElementById("index-id");
    let firstName=document.getElementById("first-name1");
    let lastName=document.getElementById("last-name1");
    let email=document.getElementById("email1");
    let address=document.getElementById("address1");

    const xhr=new XMLHttpRequest();
    xhr.open("GET","get-by-id/"+eventId,true);
    xhr.responseType="json";
    xhr.onload=()=>{
        if(xhr.status===200){
              let receiveData=xhr.response;

              id.value=receiveData.id;
              firstName.value=receiveData.firstName;
              lastName.value=receiveData.lastName;
              email.value=receiveData.email;
              address.value=receiveData.address;

        }else console.log("problem occurred");
    };
    xhr.send();
}

getAllData();