'use strict'

function sum(x,y){
	if(y !== undefined){
		return x + y;
	} else{
		return function(y){return x + y}
	}
}

sum(10,2)