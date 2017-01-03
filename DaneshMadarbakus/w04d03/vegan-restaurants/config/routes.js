17require express
18set up router
const router = express.Router();

19require the restaurants controller
const restaurants = require('../controller')

23create home page
router.route('/')

24Last thing to do is set up views

20set up routes

router.route('/restaurants')
.get(restaurants.index)
.post(restaurants.create);
router.route(''/restaurants/new')
.get(restaurants.new)
reouter.route('/restuarants/:id')
.get.put.delete


21export the router page so all other files can access it
