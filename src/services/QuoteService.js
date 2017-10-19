import ApiService from './ApiService'
import * as constants from '../constants/QuoteConstants';

class QuoteService extends ApiService{

	__randomOrigen () {
		return 
	}

    getQuoteOfTheDay() {
    	//const origin = Math.floor((Math.random() * constants.QUOTE_BASE_URL.length))
    	const index = Math.floor((Math.random() * 10))
    	//console.log(index)
    	let origin = 0
    	if (index > 4 && index <= 5) { origin = 1 }
    	if (index > 5) { origin = 2 }

    	//console.log(origin)
    	//origin = 2
        return this.__get(constants.QUOTE_BASE_URL[origin])
        	.then(function(data) {
        		//console.log(data)
        		switch(origin) {
        			case 0: return data.value.joke //{ value: { joke: quote } }
        			case 1: return data.contents.quotes[0].quote
        			case 2:
        				//console.log('case 2')
        				//console.log(data.length)
        				const randomChar = Math.floor(Math.random()*data.length)
        				//console.log(randomChar)
        				const selectChar = data[randomChar]
        				//console.log(selectChar)
  						const selectQuote = selectChar.quotes[Math.floor(Math.random()*selectChar.quotes.length)].quote
  						return selectQuote
  					default: return 'error fatal de sistema'
        		}
        	}) 
        	
    }



}

// exportamos un singleton...
export default new QuoteService()