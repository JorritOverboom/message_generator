const destination = ['Japan', 'Germany', 'Australia', 'Italy', 'Botswana'];
const transport = ['swimming', 'walking', 'cycling', 'flying', 'driving'];
const time = ['one hour', 'two hours', 'three hours', 'four hours', 'five hours'];

const chooseRandom = arr => {
    let choice = arr[Math.floor(Math.random() * arr.length)]
    return choice;
}

const randomMessage = () => {
    console.log(`I want to go to ${chooseRandom(destination)} by ${chooseRandom(transport)} there in ${chooseRandom(time)}.`);
}

randomMessage();