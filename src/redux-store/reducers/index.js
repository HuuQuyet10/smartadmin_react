import { combineReducers } from 'redux'
import auth from './auth'
import device_status from './device/status'
import device_name from './device/name'
import news from './news/index'
import users from './user'
import latlng from './latlng'

export default combineReducers({
	auth,
	device_status,
	device_name,
	news,
	latlng,
	users
})