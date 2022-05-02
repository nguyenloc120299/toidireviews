const router = require('express').Router()
const placeCtrl = require('../controllers/PlaceController')
const { route } = require('./UtilitiesRouter')

router.get('/places', placeCtrl.getPlaces)
router.post('/places', placeCtrl.createPlaces)
router.get('/place/:id',placeCtrl.getPlaceSingle)

module.exports = router