function sortedArrays(arr1, arr2){
    let arr = [];
    let i = 0, j =0;

    while((i <= arr1.length - 1) && ( j<= arr2.length - 1)){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i]);
            i++;
        } else if(arr2[j] < arr1[i]){
            arr.push(arr2[j]);
            j++;
        }else {
            arr.push(arr2[j]);
            j++;
            i++;
        }
    }

    while (j <= arr2.length - 1){
        arr.push(arr2[j]);
        j++;
    }

    while (i <= arr1.length - 1){
        arr.push(arr1[i]);
        i++;
    }

    return arr;
}

let arr1 = [1,2,7,9];
let arr2 = [5,6];
console.log(sortedArrays(arr1, arr2));



// space complexity
// it's O(n + m), not O(n) alone — where n = arr1.length and m = arr2.length are two separate input sizes.

// time complexity
// Total: O(n + m) — linear in the combined size of both inputs. as both loop is visited fully once