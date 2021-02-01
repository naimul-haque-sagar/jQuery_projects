import {getAllFormData} from '/crud-operation/js/receive-data.js';

$("#submit-button").click(function(event){
    event.preventDefault();

    axios.post('/post-data',
      {
        firstName:$("#first-name").val(),
        lastName:$("#last-name").val(),
        email:$("#email").val(),
        address:$("#address").val()
      })
      .then(function (response) {
        console.log("success");
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function(){
        $("#input-form")[0].reset();
        getAllFormData();
      })
      ;
});

$("#tbody").on("click",".button-del",function(){
    let getId=$(this).attr("del-id");
    axios.delete('delete-by-id/'+getId)
    .then(function(response){
        console.log("success delete");
    })
    .catch(function(err){
        console.log(err);
    })
    .then(function(){
        getAllFormData();
    })
    ;
});

$("#submit-button1").click(function(event){
    event.preventDefault();
    axios.put('update-data',{
        id:$("#index-id").val(),
        firstName:$("#first-name1").val(),
        lastName:$("#last-name1").val(),
        email:$("#email1").val(),
        address:$("#address1").val()
    })
    .then(function(){
        console.log("success");
    })
    .catch(function(err){
        console.log(err);
    })
    .then(function(){
        $("#input-form1")[0].reset();
        getAllFormData();
    })
    ;
});