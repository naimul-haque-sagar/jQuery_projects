function seeInfo(id){
	window.location='/api-operation/movie-info.html';
	sessionStorage.setItem('id',id);
}

function getValueForMovieInfoPage(){
	let id=sessionStorage.getItem('id');
	axios.get('http://www.omdbapi.com/?i='+id+'&apikey=552972b6')
	.then(response=>{
		let movieData=response.data;
		let title=movieData.Title;
		let divData=`
		<div class="row">
		  <div class="col-md-4">

          </div>
          <div class="col-md-4">
            <img src="${movieData.Poster}" class="thumbnail">
          </div>
            <div class="col-md-4">

          </div>
        </div>
        <div class="row">
			<div class="col-md-12">
            <ul class="list-group">
              <li class="list-group-item">Name: ${movieData.Title}</li>
              <li class="list-group-item">Genre:${movieData.Genre}</li>
              <li class="list-group-item">Released:${movieData.Released}</li>
              <li class="list-group-item">Rated:${movieData.Rated}</li>
              <li class="list-group-item">IMDB Rating:${movieData.imdbRating}</li>
              <li class="list-group-item">Director:${movieData.Director}</li>
              <li class="list-group-item">Writer:${movieData.Writer}</li>
              <li class="list-group-item">Actors:${movieData.Actors}</li>
            </ul>
          </div>
        </div>
		`;
		
		$('#individual-movie').html(divData);
		$('.navbar-brand').html(title);
	})
	.catch(err=>{
		console.log(err);
	});
}