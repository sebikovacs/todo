$(document).ready(function () {
	
	var wineCollection = new WineCollection();
	wineCollection.bind('add', function () {
		var wineCollectionView = new WineCollectionView({
			collection: wineCollection
		});
		wineCollectionView.render()
	})
	
	$('.get-collection').on('click', function (e) {
		
		wineCollection.fetch();

		e.preventDefault();
	});
})

