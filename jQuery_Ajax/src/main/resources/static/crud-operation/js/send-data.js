import {getAllData,getValueForEdit} from '/crud-operation/js/receive-data.js';

$("#submit-button").click(function(event){
    event.preventDefault();
    var inputData={
         firstName:$("#first-name").val(),
         lastName:$("#last-name").val(),
         email:$("#email").val(),
         address:$("#address").val()
    };

    $.ajax({
        url:'save-input-data',
        type:'POST',
        data:JSON.stringify(inputData),
        contentType:"application/json",
        success: function () {
          getAllData();
          $("#input-form")[0].reset();
        }
    });

});


$("#tbody").on("click",".button-del",function(){
    let id=$(this).attr("del-id");
    $.ajax({
        url:"delete-by-id/"+id,
        type:'DELETE',
        data:{
           format:'json'
        },
        contentType:"application/json",
        success: function(){
           getAllData();
        }
    });
});

$("#tbody").on("click",".button-edit",function(){
    let id=$(this).attr("edit-id");
    getValueForEdit(id);
});

$("#submit-button1").click(function(event){
    event.preventDefault();
    var data={
        id:$("#index-id").val(),
        firstName:$("#first-name1").val(),
        lastName:$("#last-name1").val(),
        email:$("#email1").val(),
        address:$("#address1").val()
    };

    $.ajax({
        url:"update-by-id",
        type:'PUT',
        data:JSON.stringify(data),
        contentType:'application/json',
        success:function(){
            $("#input-form")[0].reset();
            getAllData();
        }
    });
});