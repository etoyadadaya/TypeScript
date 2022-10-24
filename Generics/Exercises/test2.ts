/*
 Необходимо написать функцию сортировки любых
 объектов, которые имеют id по убыванию и по возрастанию
 */


const data = [
    { id: 2, name: 'Johan' },
    { id: 1, name: 'Jonny' },
    { id: 3, name: 'John' },
];

interface ID {
    id: number;
}

function sortObj<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
    return data.sort((a, b) => {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    });
}

console.log(sortObj(data,'desc'));
console.log(sortObj(data));
