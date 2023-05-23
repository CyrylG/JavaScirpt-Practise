const generateMessages = (names) => {
    const messages = names.map(name => `Hi ${name}!`);
    console.log(messages)
}

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla']

generateMessages(names)