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

    insertionSort() {
        let leng = this.array.length,
            temp,
            j;
        
        for(let i = 1; i < leng; i ++) {
            temp = this.array[i];
            j = i;

            while(j > 0 && this.array[j - 1] > temp) {
                this.array[j] = this.array[j - 1];
                j --;
            }

            this.array[j] = temp;
        }
    }
}

let arr = [1, 5, 2, 3, 6, 4, 9, 8, 7];
let a = new arrayList(arr);

console.log(a.toString());

a.insertionSort();

console.log(a.toString());