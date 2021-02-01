import {getAllData,setDataForEdit} from '/crud-operation/js/receive-data.js';

document.getElementById("submit-button").addEventListener("click",saveData);
document.getElementById("submit-button1").addEventListener("click",updateFinally);

function saveData(event){
    event.preventDefault();
    let firstName=document.getElementById("first-name").value;
    let lastName=document.getElementById("last-name").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;

    const xhr=new XMLHttpRequest();
    xhr.open("POST","post-data",true);
    xhr.setRequestHeader("content-type","application/json");
    xhr.onload=()=>{
        if(xhr.status===200){
            console.log("successfully added");
            document.getElementById("input-form").reset();
            getAllData();
        }else{
            console.log("problem occurred");
        }
    };

    const ajaxData={firstName:firstName,lastName:lastName,email:email,address:address};
    const jsonData=JSON.stringify(ajaxData);

    xhr.send(jsonData);
}

export function deleteData(){
    var index=document.getElementsByClassName("button-del");

    for(let i=0;i<index.length;i++){
        index[i].addEventListener("click",function(){
            var eventId=index[i].getAttribute("del-id");
            const xhr=new XMLHttpRequest();
            xhr.open("DELETE","delete-by-id/"+eventId,true);
            xhr.setRequestHeader("content-type","application-json");
            xhr.onload=()=>{
                if(xhr.status===200){
                    console.log("success");
                    getAllData();
                }else console.log("problem occurred");
            };
            xhr.send();
        });
    }
}

export function updateData(){
    var index=document.getElementsByClassName("button-edit");

    for(let i=0;i<index.length;i++){
        index[i].addEventListener("click",function(){
            var eventId=index[i].getAttribute("edit-id");
            setDataForEdit(eventId);
        });
    }
}

function updateFinally(event){
    event.preventDefault();
    let id=document.getElementById("index-id").value;
    let firstName=document.getElementById("first-name1").value;
    let lastName=document.getElementById("last-name1").value;
    let email=document.getElementById("email1").value;
    let address=document.getElementById("address1").value;

    const xhr=new XMLHttpRequest();
    xhr.open("PUT","update-data",true);
    xhr.setRequestHeader("content-type","application/json");
    xhr.onload=()=>{
        if(xhr.status===200){
            console.log("success");
            document.getElementById("input-form1").reset();
            getAllData();
        }else console.log("problem occurred");
    };

    const ajaxData={id:id,firstName:firstName,lastName:lastName,email:email,address:address};
    const jsonData=JSON.stringify(ajaxData);
    xhr.send(jsonData);
}