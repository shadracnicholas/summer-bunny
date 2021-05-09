const express = require('express')
const router = express.Router()
const {checkIfAuthenticated} = require('../middleware/checkIfAuthenticated')
const trimRequest = require('trim-request')

const {
  getOrders,
  getOrder,
  updateOrder
} = require('../controllers/orders')


/*
 * Orders routes
 */

/*
 * Get items route
 */
router.get(
  '/',
  checkIfAuthenticated,
  trimRequest.all,
  getOrders
)

/*
 * Get item route
 */
router.get(
  '/:id',
  checkIfAuthenticated,
  trimRequest.all,
  getOrder
)

/*
 * Update item route
 */
router.patch(
  '/:id',
  checkIfAuthenticated,
  trimRequest.all,
  updateOrder
)



module.exports = router