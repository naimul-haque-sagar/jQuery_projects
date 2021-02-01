$("#movie-details").submit(function(event){
    event.preventDefault();
    postDetails();
});

$("#search").on('submit',function(event){
    let value=$("#delete-by-id").val();
    deleteById(value);
    event.preventDefault();
});

$("#update-movie-details").on('submit',function(event){
    updateDetails();
    event.preventDefault();
});

//call to target api
function postDetails(){
    var formDataInput={
        movieName:$("#movieName").val(),
        ratings:$("#ratings").val()
    }

    $.ajax({
        url:"http://localhost:8089/api/movieDetails/postMovieDetails",
        type:"POST",
        data:JSON.stringify(formDataInput),
        contentType:"application/json",
        success :function(){
            console.log("success");
        }
    });
}

//call to target api
function updateDetails(){
    var data={
        movieName:$("#movieName-update").val(),
        ratings:$("#ratings-update").val()
    }

    $.ajax({
        url:"http://localhost:8089/api/movieDetails/updateMovieDetailsById/"+$("#id-update").val(),
        type: "PUT",
        data:JSON.stringify(data),
        contentType:"application/json",
        success: function(){
            console.log("success");
        }
    });
}

//call to target api
function deleteById(value){
    $.ajax({
        url:"http://localhost:8089/api/movieDetails/deleteMovieDetailsById/"+value,
        type:'DELETE',
        data:{
            format:'json'
        },
        contentType:"application/json",
        success:function(){
            console.log("success");
        }
    });
}

//call to target api
export function deleteByName(movieName){
    $.ajax({
        url: "http://localhost:8089/api/movieDetails/deleteMovieDetailsByMovieName/"+movieName,
        type:"DELETE",
        data:{
            format:'json'
        },
        contentType:"application/json",
        success:function(){
            console.log("success");
        }
    });
}

