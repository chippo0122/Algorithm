// binary search

class arrayList {
    constructor(array = []) {
        this.array = array;
    }

    push(item) {
        this.array.push(item);
    }

    toString() {
        return this.array.join(',');
    }

    binarySearch(item) {
        this.quickSort();

        let low = 0,
            high = this.array.length,
            mid,
            element;

        while(low <= high) {
            mid = Math.floor((low + high) / 2);
            element = this.array[mid];

            if(element < item) {
                low = mid + 1;
            } else if(element > item) {
                high = mid - 1;
            } else {
                return mid;
            }
        }

        return -1;
    }

    quickSort() {
        this.array = this.quick(this.array);
    }

    quick(arr) {
        let leng = arr.length;
        let pivot = arr[leng - 1],
            left = [],
            right = [];

        if(leng <= 1) {
            return arr;
        }

        for(let i = 0; i < leng - 1; i ++) {
            if(arr[i] > pivot) {
                right.push(arr[i]);
            } else {
                left.push(arr[i]);
            }
        }

        return this.quick(left).concat(pivot, this.quick(right));
    }
}

let arr = [1, 5, 2, 3, 6, 4, 9, 8, 7];
let a = new arrayList(arr);

console.log(a.toString());

a.quickSort();

console.log(a.toString());