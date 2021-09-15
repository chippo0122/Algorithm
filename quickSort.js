// quick Sort

class arrayList {
    constructor(array = []) {
        this.array = array;
    }

    psuh(key) {
        this.array.push(key);
    }

    toString() {
        return this.array.join(',');
    }

    quickSort() {
        this.array = this.quick(this.array);
    }

    quick(arr) {
        let leng = arr.length,
            left = [],
            right = [],
            pivot = arr[leng - 1];
        
        if(leng <= 1) {
            return arr;
        } 

        for(let i = 0;  i< leng ; i ++) {
            if(arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
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