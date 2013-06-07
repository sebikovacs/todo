_.templateSettings = {
	interpolate: /\{\{([\s\S]+?)\}\}/g,
	evaluate: /\{\{([\s\S]+?)\}\}/g,
	escape: /\{\{-([\s\S]+?)\}\}/g
};


var WineItem = Backbone.Model.extend({
	content: '',
	updated_at: '',
	_id: ''
});



var WineItemView = Backbone.View.extend({
	initialize: function () {
		//this.render();
	},
	render: function () {
		this.$el.html(_.template($('#wineitem_template').html(), this.model.toJSON()))
		return this;
	}
});

var WineCollection = Backbone.Collection.extend({
	model: WineItem,
	url: '/wines'
});

var WineCollectionView = Backbone.View.extend({
	initialize: function () {
		var self = this;
		
		this.wines = [];
		
		this.collection.each(function (wine) {
			self.wines.push(new WineItemView({
				model: wine
			}))
		});
	},
	render: function () {
		var self = this;
		$('#wineCollection').empty();
		_(this.wines).each(function  (wineModel) {
			
			$('#wineCollection').append(wineModel.render().$el);

		});


	}
});