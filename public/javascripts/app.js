


$(document).ready(function () {
	
	var wineCollection = new WineCollection();
	
	$('.get-collection').on('click', function (e) {
		e.preventDefault();
		wineCollection.fetch();

		
			
		var wineCollectionView = new WineCollectionView({
			collection: wineCollection
		});

		wineCollectionView.render()
		

	});
})

