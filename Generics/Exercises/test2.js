"use strict";
const data = [
    { id: 2, name: 'Johan' },
    { id: 1, name: 'Jonny' },
    { id: 3, name: 'John' },
];
function sortObj(data, type = 'asc') {
    return data.sort((a, b) => {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    });
}
console.log(sortObj(data, 'desc'));
console.log(sortObj(data));
