const arr = [1,2,3,4,5,6];

const binarySearch = (list, item) => {
	let low = 0;
	let high = list.length - 1;
	let answer = NaN;
	while (low <= high) {
		let mid = Math.ceil((low + high) / 2);
		let guess = list[mid];
		if (item === guess) {
			answer = mid;
			break;
		} else if (item > guess) {
			low = mid + 1;
		} else if (item < guess) {
			high = mid - 1;
		}
	}
	return answer;
}

console.log(binarySearch(arr, 4));