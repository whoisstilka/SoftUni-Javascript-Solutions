function createSortedList() {
    let arr = [];

    return {
        add: function (element) {
            arr.push(element);
            arr.sort((a, b) => a - b);
        },
        remove: function (index) {
            if (index >= 0 && index < arr.length) {
                arr.splice(index, 1);
            }
        },
        get: function (index) {
            if (index >= 0 && index < arr.length) {
                return arr[index];
            }
        },
        get size() {
            return arr.length;
        }
    };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));