var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres@localhost:5432/testdb';
var db = pgp(connectionString);

// add query functions

function getCustomers(req, res, next) {
	db.any('select * from tests.customer')
	.then(function (data) {
		res.status(200)
		.json({
			status: 'success',
			data: data,
			message: 'Retrieved ALL customers'
		});
	})
	.catch(function (err) {
		return next(err);
	});
}

function getOrderLineItems(req, res, next) {
	db.any('select * from tests.orderlineitem')
	.then(function (data) {
		res.status(200)
		.json({
			status: 'success',
			data: data,
			message: 'Retrieved ALL orderLineItems'
		});
	})
	.catch(function (err) {
		return next(err);
	});
}

function getOrders(req, res, next) {
	db.any('select * from tests.order')
	.then(function (data) {
		res.status(200)
		.json({
			status: 'success',
			data: data,
			message: 'Retrieved ALL orders'
		});
	})
	.catch(function (err) {
		return next(err);
	});
}

function getProducts(req, res, next) {
	db.any('select * from tests.product')
	.then(function (data) {
		res.status(200)
		.json({
			status: 'success',
			data: data,
			message: 'Retrieved ALL products'
		});
	});
}
module.exports = {
  getCustomers: getCustomers,
  getOrderLineItems: getOrderLineItems,
  getOrders: getOrders,
  getProducts: getProducts
  };