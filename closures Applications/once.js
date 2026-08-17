function once(fn){
	let isRunned = false;
    let count = 0;
	let result;
	return function(...args){
		if(!isRunned){
            console.log(++count);
			isRunned = true;
			result = fn(...args);
		}
		return result;
	}
		
}

function init() {
  console.log("Initializing...");
  return "initialized!";
}

const initOnce = once(init);
initOnce(); // logs "Initializing...", returns "initialized!"
initOnce(); // logs nothing (init() never runs again), returns "initialized!" (cached)
initOnce(); // same — cached, no re-execution


