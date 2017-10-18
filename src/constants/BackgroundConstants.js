const APIKEY = '1d71ede807e58a12aeb6fcac778cb9f5'

export const FLICKR_ALBUMS = [
	{
		"user": "155048535@N07",
		"albums": [
			{ "album": "72157683898107016" },
			{ "album": "72157686165223472" }
		]
	},
]

export const ALBUM_BASE_URL = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${APIKEY}&photoset_id=[PHOTOSETID]&user_id=[USERID]&format=json&nojsoncallback=1`

export const BACKGROUND_BASE_URL = 'https://farm[FARMID].staticflickr.com/[SERVERID]/[PHOTOID]_[SECRET]_b.jpg'