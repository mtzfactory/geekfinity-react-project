import ApiService from './ApiService'
import * as constants from '../constants/BackgroundConstants';

class BackgroundService extends ApiService {

	constructor() {
		super()

		this.FLICKR_ALBUMS = []
	}

	__randomUser = () => {

		if (this.FLICKR_ALBUMS.length === 0) {
			return this.__get(constants.JSON_ALBUMS)
				.then((resp) => {
					this.FLICKR_ALBUMS = resp
					
					return this.FLICKR_ALBUMS[Math.floor(Math.random() * this.FLICKR_ALBUMS.length)]
				})
		}
		else {
			return new Promise((resolve, reject) => {
				resolve(this.FLICKR_ALBUMS[Math.floor(Math.random() * this.FLICKR_ALBUMS.length)])
			})
		}
	}

	__randomImage = () => {

		return this.__randomUser()
			.then((user) => {
				const album =  user.albums[Math.floor(Math.random() * user.albums.length)].album

				return this.__get(constants.ALBUM_BASE_URL.replace('[PHOTOSETID]', album).replace('[USERID]', user.user))
			})
	}

    getBackground() {

    	return this.__randomImage()
    		.then(function(images) {
    			const image = images.photoset.photo[Math.floor(Math.random() * images.photoset.photo.length)]

				return constants.BACKGROUND_BASE_URL.replace('[FARMID]', image.farm).replace('[SERVERID]', image.server).replace('[PHOTOID]', image.id).replace('[SECRET]', image.secret)
			})
    }
}

// exportamos un singleton...
export default new BackgroundService()