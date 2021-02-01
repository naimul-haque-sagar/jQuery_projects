import {deleteData,updateData} from '/api-operation/js/send-data.js';

export function setDataForEdit(eventId){
    let id=document.getElementById("id");
    let firstName=document.getElementById("fn");
    let lastName=document.getElementById("ln");
    let email=document.getElementById("email");
    let address=document.getElementById("add");
    const xhr=new XMLHttpRequest();
    xhr.open("GET","http://localhost:8080/api/movieDetails/updateMovieDetailsById/"+eventId,true);
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

let dataDiv=document.getElementById("tbody");
export function getAllDataForDiv(){
    const xhr=new XMLHttpRequest();
    xhr.open("GET","http://localhost:8080/api/movieDetails/getMovieDetails",true);
    xhr.responseType="json";
    xhr.onload=()=>{
        if(xhr.status===200){
            let outputData=xhr.response;
            for(let i=0;i<outputData.length;i++){
                console.log(outputData[i].movieName);
                console.log(outputData[i].ratings);
                console.log(outputData[i].artists.actor);
            }
        }else console.log("Problem occurred");
        deleteData();
        updateData();
    };
    xhr.send();
}