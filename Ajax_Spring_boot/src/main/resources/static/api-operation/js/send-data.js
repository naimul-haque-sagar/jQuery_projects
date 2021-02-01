import {getAllDataForDiv,setDataForEdit} from '/api-operation/js/receive-data.js';

document.getElementById("submit1").addEventListener("click",updateForData);
document.getElementById("submit2").addEventListener("click",saveData);
function saveData(event){
    event.preventDefault();
    let movieName=document.getElementById("movie-name").value;
    let ratings=document.getElementById("ratings").value;
    const xhr=new XMLHttpRequest();
    xhr.open("POST","http://localhost:8080/api/movieDetails/postMovieDetails",true);
    xhr.setRequestHeader("content-type","application/json");
    xhr.onload=()=>{
        if(xhr.status===200){
            document.getElementById("input-form").reset();
            getAllDataForDiv();
        }else console.log("problem occured");
    };
    const ajaxData={movieName:movieName,ratings:ratings};
    const jsonData=JSON.stringify(ajaxData);
    xhr.send(jsonData);
}

export function updateData(){
    var index=document.getElementsByClassName("editButton");
    for(let i=0;i<index.length;i++){
        index[i].addEventListener("click",function(){
            var eventId=index[i].getAttribute("editIndex");
            setDataForEdit(eventId);
        });
    }
}

export function deleteData(){
    var index=document.getElementsByClassName("deleteButton");
    for(let i=0;i<index.length;i++){
        index[i].addEventListener("click",function(){
            var eventId=index[i].getAttribute("delete-id");
            const xhr=new XMLHttpRequest();
            xhr.open("DELETE","http://localhost:8080/api/movieDetails/deleteMovieDetailsById/"+eventId,true);
            xhr.setRequestHeader("content-type","application-json");
            xhr.onload=()=>{
                if(xhr.status===200){
                    console.log("success");
                    getAllDataForDiv();
                }else console.log("problem occurred");
            };
            xhr.send();
        });
    }
}

function updateForData(event){
    event.preventDefault();
    let id=document.getElementById("id1").value;
    let firstName=document.getElementById("fn1").value;
    let lastName=document.getElementById("ln1").value;
    let email=document.getElementById("email1").value;
    let address=document.getElementById("address1").value;
    const xhr=new XMLHttpRequest();
    xhr.open("PUT","http://localhost:8080/api/movieDetails/deleteMovieDetailsById/"+id,true);
    xhr.setRequestHeader("content-type","application/json");
    xhr.onload=()=>{
        if(xhr.status===200){
            console.log("success");
            document.getElementById("input-form1").reset();
            getAllDataForDiv();
        }else console.log("problem occurred");
    };
    const ajaxData={id:id,firstName:firstName,lastName:lastName,email:email,address:address};
    const jsonData=JSON.stringify(ajaxData);
    xhr.send(jsonData);
}