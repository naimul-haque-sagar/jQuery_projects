function addWatchList(title){
	axios.post('http://localhost:8080/movie-watchList/post-watchList/'+title)
	.then(response=>{
		console.log(response);
		alert('Added to watch list.....');
	})
	.catch(err=>{
		console.log(err);
	})
	;
}

function savePosterLink(title){
    console.log(title);
    axios.post('http://localhost:8080/save-info/save/'+title)
    .then(response=>{
        console.log(response);
        alert('saved......');
    })
    .catch(err=>{
        console.log(err);
    });
}
