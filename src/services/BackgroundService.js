import React, { Component } from 'react';
import ApiService from './ApiService'
import * as constants from '../constants/BackgroundConstants';

class BackgroundService extends ApiService {

/* logica para random usuario -> logica random algum -> logica random imagen */

	__randomUser() {
		const user = Math.floor(Math.random() * constants.FLICKR_ALBUMS.length)

		return constants.FLICKR_ALBUMS[user]
	}

	__randomImage() {
		const user = this.__randomUser()
		const album =  user.albums[Math.floor(Math.random() * user.albums.length)].album

		return this.__get(constants.ALBUM_BASE_URL.replace('[PHOTOSETID]', album).replace('[USERID]', user.user))
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