const router = require('express').Router()
const places = require ('../models/places.js')

router.get('/new', (req, res) => {
    res.render('places/new')
  })

  router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = "/images/chia-fruit-drink.jpg"
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
// GET /places
router.get('/', (req, res) => {

      
    res.render('places/index', {places})
  })
  


module.exports = router
