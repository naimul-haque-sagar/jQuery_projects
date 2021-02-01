import { deleteByName } from '/api-operation/movie-details-operation/js/send-data.js';

//call to target api
$("#details-button").on('click',function(){
    $.ajax({
      url: 'http://localhost:8080/api/movieDetails/getMovieDetails',
      data: {
         format: 'json'
      },
      error: function() {
        console.log("Error in get");
      },
      dataType: 'json',
      success: function(result) {
         $.each(result,(index,value)=>{
            $("#get-details").append(
                `<ul>
                    <li>${value.artists.movieName}</li>
                    <li>${value.artists.actor}</li>
                    <li>${value.artists.actress}</li>
                    <li>${value.ratings}</li>
                </ul>
                `
            );
         });
      },
      type: 'GET'
    });
});

$("#search-by").on('submit',function(event){
    var inputData=$("#search-by-movieName").val();
    deleteOperation(inputData);
    event.preventDefault();
});

//call to target api
function deleteOperation(inputData){
    $.ajax({
        url: "http://localhost:8080/api/movieDetails/getMovieDetailsByMovieName/"+inputData,
        data: {
            format:'json'
        },
        error:function(){
            console.log("error occurred");
        },
        dataType: 'json',
        success: function(result){
            console.log(result);
            deleteByName(result.movieName);
        },
        type:'GET'
    });
}


