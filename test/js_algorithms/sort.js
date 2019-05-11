function minimumSwaps(arr) {
	const dim = arr.length;
	let swaps = 0;
	let b = arr[0];

	for (let i = 0; i < dim - 1; i++) {

for a = 1 to len(A)
  if A[a] == B[b]
    b = b + 1
  else
    swaps = swaps + 1



    const dim = arr.length;
    let max_left = 0;
    let min_right = dim - 1;
    let total_swaps = 0;
    let found = false;

    do {
		found = false;

		for (let i = 0; i < dim - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				max_left = i;
				found = true;
				break;
			}
		}

		if(found){
			let min = arr[max_left];
			for (let i = dim - 1; i > max_left; i--) {
				if (arr[i] < min){
					min = arr[i];
					min_right = i;
				}
			}

			const temp = arr[max_left];
			arr[max_left] = arr[min_right];
			arr[min_right] = temp;
			total_swaps += 1;
		}
	} while (found);

	console.log(arr);
	return total_swaps;
}

const a=[2,31,1,38,29,5,44,6,12,18,39,9,48,49,13,11,7,27,14,33,50,21,46,23,15,26,8,47,40,3,32,22,34,42,16,41,24,10,4,28,36,30,37,35,20,17,45,43,25,19];
console.log(a);

const c = minimumSwaps(a);

console.log(c);

