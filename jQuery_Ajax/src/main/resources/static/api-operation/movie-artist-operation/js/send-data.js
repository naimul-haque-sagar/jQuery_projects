import {getValueForEdit} from '/api-operation/movie-artist-operation/js/received-data.js';

$("#movie-artists").submit(function(event){
    event.preventDefault();
    postArtists();
});

//call to target api
function postArtists(){
    console.log("postArtists method");
    var formDataInput={
        movieName:$("#movieName").val(),
        director:$("#director").val(),
        actor:$("#actor").val(),
        actress:$("#actress").val()
    }

    $.ajax({
        url:"http://localhost:8089/api/artists/postArtists",
        type:"POST",
        data:JSON.stringify(formDataInput),
        contentType:"application/json",
        success:function(){
            console.log("success");
        }
    });
}

$("#the-body").on("click",".delete",function(){
    let id=$(this).attr("delete-id");
    $.ajax({
        url:"http://localhost:8089/api/artists/delete-by-id/"+id,
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

$("#the-body").on("click",".edit",function(){
    let id=$(this).attr("edit-index");
    getValueForEdit(id);
});

$("#submit-button1").click(function(event){
    event.preventDefault();
    var data={
        id:$("#index-id").val(),
        movieName:$("#movieName").val(),
        director:$("#director").val(),
        actor:$("#actor").val(),
        actress:$("#actress").val()
    };

    $.ajax({
        url:"http://localhost:8089/api/artists/update-by-id",
        type:'PUT',
        data:JSON.stringify(data),
        contentType:'application/json',
        success:function(){
            console.log("success");
        }
    });
});


