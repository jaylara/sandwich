// dependencies
const express = require('express');
const bodyParser = require('body-parser');

// app config
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.json());


app.use('/', express.static(__dirname + '/public'));

// define a root route:
app.get('/', (req, res) => {
	var orderData = {};
	res.render('order', orderData);
});


// start app
app.listen(port, function(err) {
	if (err) {
		console.log(`Error starting server on port ${port}`, err);
	} else {
		console.log(`Server running on port ${port}.`);
	}
});
