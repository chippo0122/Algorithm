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

    selectSort() {
        let leng = this.array.length,
            indexMin;

        for(let i = 0; i < leng; i ++) {
            indexMin = i;
            for(let j = i; j < leng; j ++) {
                if(this.array[j] < this.array[indexMin]) {
                    indexMin = j;
                }
            }

            if(indexMin !== i) {
                this.swap(indexMin, i);
            }
        }
    }

    swap(index1, index2) {
        let aux = this.array[index1];
        this.array[index1] = this.array[index2];
        this.array[index2] = aux;
    }

    
}

let arr = [1, 5, 2, 3, 6, 4, 9, 8, 7];
let a = new arrayList(arr);

console.log(a.toString());

a.selectSort();

console.log(a.toString());