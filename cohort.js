const cohort = {
    name: 'April2023',
    id: '2',
    names: ['c', 'a', 'w', 'g']
};

const print = (object) => {
    console.log(`${object.id} - ${object.name} - ${object.names.length} students in this cohort`);
};

module.exports = print;
