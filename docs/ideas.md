
[MealTracker] 1-----N [MealEntry] 1-----N [Food] 1-----1 [NutritionInfo]


const OrderMenu = mongoose.model('OrderMenu', new mongoose.Schema({
sandwiches: [{
	type: mongoose.Schema.Types.ObjectId,
	ref: 'Sandwich'
	}],
desserts: [{
	type: mongoose.Schema.Types.ObjectId,
	ref: 'Dessert'
	}],
drinks: [{
	type: mongoose.Schema.Types.ObjectId,
	ref: 'Drink'
	}]
}));

const SandwichMenu = mongoose.model('SandwichMenu', new mongoose.Schema({
sandwich: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'Sandwich'
	}
}));

const Drink = mongoose.model('Drink', new mongoose.Schema({
name: {
	type: String
	},
price: {
	type: Number,
	default: 0
	}
}));

const Dessert = mongoose.model('Dessert', new mongoose.Schema({
name: {
	type: String
	},
price: {
	type: Number,
	default: 0
	}
}));

const Sandwich = mongoose.model('Sandwich', new mongoose.Schema({
breadType: {
	type: String,
	enum: ["white", "wheat", "sourdough", "flatbread", "jalapeno cheddar"]
	},
meats: [{
	type: mongoose.Schema.Types.ObjectId,
    ref: 'Topping'
	}],
vegetables: [{
	type: mongoose.Schema.Types.ObjectId,
    ref: 'Topping'
	}],
cheeses: [{
	type: mongoose.Schema.Types.ObjectId,
    ref: 'Topping'
	}],
sauces: [{
	type: mongoose.Schema.Types.ObjectId,
    ref: 'Topping'
	}],
spices: [{
	type: mongoose.Schema.Types.ObjectId,
    ref: 'Topping'
	}],
price: {
	type: Number,
	default: 0
	}
}));

const Topping = mongoose.model('Topping', new mongoose.Schema({
name: {type: String}
type: {
	type: String,
	enum: ["meat", "vegetable", "cheese", "sauce" , "spice"]
}));



var meats = [
"turkey breast",
"honey ham",
"roast beef",
"tuna",
"salami",
"pepperoni",
"tuna",
"veggie patti",
];

var vegetables = [
"lettuce",
"spinach",
"tomato",
"cucumber",
"pickles",
"olives"
];

var cheeses = [
"american",
"provolone",
"swiss",
"pepperjack",
"cheddar",
"mozzarella"
];

var sauces = [
"mayo",
"thousand island",
"ranch",
"mustard",
"spicy mustard",
"creamy sriracha",
"olive oil",
"red wine vinegar"
];


var spices = [
"oregano",
"red pepper flakes",
"paprika",
"salt",
"pepper"
];

var drinks = [
"coke",
"sprite",
"dr. pepper",
"fruit punch",
"tea",
"coffee",
"bottled water",
"soda water"
"water"
]

var drink_prices = [
0.99,
0.99,
0.99,
0.99,
1.99,
1.99,
1.99,
0.00,
0.00
]

var desserts = [
"chocolate chip cookie",
"oatmeal cookie",
"white chocolate macadamia nut cookie",
"raspberry cheesecake cookie",
"sugar cookie",
"apples"
]
