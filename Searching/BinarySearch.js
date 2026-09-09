//Binary

function binarySearch(arr, target){
	let l = 0;
	let r = arr.length -1;

	while ( l <= r) {
		let midIndex =  Math.ceil( (l + r)/2);
	let midValue = arr[midIndex];
		if(midValue === target){
			return midIndex;
		} else if( midValue > target ){
			r = midIndex - 1;
		} else if (midValue < target) {
			l = midIndex + 1;
		}
	}
	return -1;
}