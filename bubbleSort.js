//buble sort

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

    bubbleSort() {
       let leng = this.array.length;

       for(let i = 0; i < leng ; i ++) {
           for(let j = 0; j < leng - 1 - i; j ++) {
               if(this.array[j] > this.array[j + 1]) {
                    this.swap(j, j + 1);
               }
           } 
       }
    }

    swap(index1, index2) {
        let aux = this.array[index1];
        this.array[index1] = this.array[index2];
        this.array[index2] = aux;
    }
}

let arr = [1, 5, 2, 3, 6, 4, 9, 8];
let a = new arrayList(arr);

console.log(a.toString());

a.bubbleSort();

console.log(a.toString());