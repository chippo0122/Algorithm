//merge sort

//selected sort

class arrayList {
    constructor(items = []) {
        this.array = items;
    }

    push(item) {
        this.array.push(item)
    }

    toString() {
        return this.array.join(',');
    }

    mergeSort() {
        this.array = this.mergeSortRec(this.array);
    }

    mergeSortRec(arr) {
        let leng = arr.length;

        if(leng === 1) {
            return arr;
        }

        let mid = Math.floor(leng / 2),
            left = arr.slice(0, mid),
            right = arr.slice(mid, leng);

        return this.merge(this.mergeSortRec(left), this.mergeSortRec(right));
    }

    merge(left, right) {
        let il = 0,
            ir = 0,
            result = [];

        while(il < left.length && ir < right.length) {
            if(left[il] > right[ir]) {
                result.push(right[ir]);
                ir ++;
            } else if(right[ir] > left[il]) {
                result.push(left[il]);
                il ++;
            }
        }

        while(il < left.length) {
            result.push(left[il]);
            il ++;
        }

        while(ir < right.length) {
            result.push(right[ir]);
            ir ++;
        }

        return result;
    }
}

let arr = [1, 5, 2, 3, 6, 4, 9, 8, 7];
let a = new arrayList(arr);

console.log(a.toString());

a.mergeSort();

console.log(a.toString());