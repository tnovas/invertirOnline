const router = require('express').Router();
const streamlabs = require('./streamlabs');

router.get('/subtract', (req, res) => {
	streamlabs.loyalty.subtract('chimorinkari', 'chimotw', 10)
	.then((result) => res.json(result.data))
	.catch((err) => res.json(err.response.data));
});

router.get('/reset', (req, res) => {
	streamlabs.loyalty.reset()
	.then((result) => res.json(result.data))
	.catch((err) => res.json(err.response.data));
});

router.get('/edit', (req, res) => {
	streamlabs.loyalty.edit('ChimoTW', 100)
	.then((result) => res.json(result.data))
	.catch((err) => res.json(err.response.data));
});

router.get('/get', (req, res) => {
	streamlabs.loyalty.get('chimorinkari', ['chimotw'])
	.then((result) => res.json(result.data))
	.catch((err) => res.json(err.response.data));
});

router.get('/detail', (req, res) => {
	streamlabs.loyalty.detail('chimorinkari', 'chimotw')
	.then((result) => res.json(result.data))
	.catch((err) => res.json(err.response.data));
});

router.get('/query', (req, res) => {
	streamlabs.loyalty.query({
		user: 'Ch',
		sort: streamlabs.loyalty.types.sort.username,
		order: streamlabs.loyalty.types.order.asc,
		limit: 10,
		page: 1,
	})
	.then((result) => res.json(result.data))
	.catch((err) => res.json(err.response.data));
});

module.exports = router;
