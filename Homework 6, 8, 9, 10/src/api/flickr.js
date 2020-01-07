export let Flickr = (search) => {
	let key = '1c58394bdc712610da3f4df04efd37a7';
	let src = `https:www.flickr.com/services/rest/?method=flickr.photos.search&api_key=`;
	let pics = 10;
	fetch(src + key + "&tags=" + search + "&per_page=" + pics + "&page=1&format=json&nojsoncallback=1")
	.then((resp) => resp.json())
	.then((data) => {
		console.log(data);
		let picArr = data.photos.photo.map((pic) =>{
			let Path = "https://farm" + pic.farm + ".staticflickr.com/" + pic.server + "/" + pic.id + "_" + pic.secret + ".jpg";
			return '<img src='+Path+'>'
		});

		let image = '';
		for (let pic of picArr){
			image += pic;
		}
		document.getElementById("outputDiv").innerHTML = image;
	})
	.catch((data) => {console.log("Error", data)});
};
