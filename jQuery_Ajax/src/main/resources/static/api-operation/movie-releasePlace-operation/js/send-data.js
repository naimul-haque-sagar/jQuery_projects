import {getValueForEdit} from '/api-operation/movie-releasePlace-operation/js/received-data.js';

$("#movie-details").submit(function(event){
    postReleasePlace();
    event.preventDefault();
});

//call to target api
function postReleasePlace(){
    var formInputData={
        movieName:$("#movieName").val(),
        city:$("#city").val(),
        country:$("#country").val()
    };

    $.ajax({
        url:"http://localhost:8089/api/releasePlace/postReleasePlace",
        type:"POST",
        data:JSON.stringify(formInputData),
        contentType:"application/json",
        success: function(){
            console.log("success");
        }
    });
}

$("#t-body").on("click",".del",function(){
    let id=$(this).attr("del");
    $.ajax({
        url:"http://localhost:8089/api/releasePlace/delete-by-id/"+id,
        type:'DELETE',
        data:{
           format:'json'
        },
        contentType:"application/json",
        success: function(){
           console.log("success");
        }
    });
});

$("#t-body").on("click",".edit",function(){
    let id=$(this).attr("edit");
    getValueForEdit(id);
});

$("#edit-button").click(function(event){
    event.preventDefault();
    var data={
        id:$("#index-id").val(),
        movieName:$("#movie-name").val(),
        city:$("#city").val(),
        country:$("#country").val()
    };

    $.ajax({
        url:"http://localhost:8089/api/releasePlace/update-by-id",
        type:'PUT',
        data:JSON.stringify(data),
        contentType:'application/json',
        success:function(){
            console.log("success");
        }
    });
});




