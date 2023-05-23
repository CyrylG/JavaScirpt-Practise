const cohort = {
    name: 'April2023',
    id: '2',
    names: ['c', 'a', 'w', 'g']
};

const print = (object) => {
    return `${object.id} - ${object.name} - ${object.names.length} students in this cohort`;
};

console.log(print(cohort))