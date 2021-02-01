$(document).ready(()=>{
	$('#search-bar').on('submit',(e)=>{
			let text=$('#search-keyword').val();
			getMoviesByTitle(text);
			e.preventDefault();
	});
});

function getMoviesByTitle(text){
	axios.get('http://www.omdbapi.com/?s='+text+'&apikey=552972b6')
	.then(response=>{
		sendAllMovieToHtmlDiv(response);
		console.log(response);
	}).catch(err=>{
		console.log(err);
	});
}

function sendAllMovieToHtmlDiv(response){
	let data=response.data.Search;
	let divData='';
	$.each(data,(index,value)=>{
		divData+=`
            <div class="col-md-4">
                <div class="individual-movie text-center" >
                    <img src="${value.Poster}">
                    <br></br>
                     <a onclick="savePosterLink('${value.imdbID}')" class="btn btn-primary" href="#">Save Poster</a>
                     <a onclick="addWatchList('${value.Title}')" class="btn btn-primary" href="#">Add WatchList</a>
                     <a onclick="seeInfo('${value.imdbID}')" class="btn btn-primary" href="#">Info</a>
                     <a href="http://imdb.com/title/${value.imdbID}" target="_blank" class="btn btn-primary">IMDB</a>
                </div>
            </div>
		`;
	});
	$('#all-movies').html(divData);
}




