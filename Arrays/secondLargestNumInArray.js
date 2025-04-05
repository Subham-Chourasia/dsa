const arr = [12222, 3323, 2222, 4343];

// Edge case: check if array has at least two elements
if (arr.length < 2) {
    console.log("Array must have at least two elements.");
} else {
    let max1 = -Infinity;
    let max2 = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2 && arr[i] !== max1) {
            max2 = arr[i];
        }
    }

    console.log("Second largest:", max2);
    console.log("Largest:", max1);
}
