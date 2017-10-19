const APIKEY = '1d71ede807e58a12aeb6fcac778cb9f5'

export const JSON_ALBUMS = './json/albums.json'

// https://www.flickr.com/services/api/explore/flickr.photosets.getPhotos
// photoset === album en flickr
export const ALBUM_BASE_URL = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${APIKEY}&photoset_id=[PHOTOSETID]&user_id=[USERID]&format=json&nojsoncallback=1`

export const BACKGROUND_BASE_URL = 'https://farm[FARMID].staticflickr.com/[SERVERID]/[PHOTOID]_[SECRET]_b.jpg'