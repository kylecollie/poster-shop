new Vue({
	el: "#app",
	data: {
		total: 0,
		products: [
			{ title: "Product1", id: 1 },
			{ title: "Product2", id: 2 },
			{ title: "Product3", id: 3 }
		]
	},
	methods: {
		addToCart: function () {
			this.total += 9.99;
		}
	}
});