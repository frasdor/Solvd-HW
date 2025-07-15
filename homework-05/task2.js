function chunkArray(array, chunkSize) {
    const result = [];
    for(let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i+ chunkSize);
        result.push(chunk);
    }
    return result;
}

const languages = ['HTML', 'CSS', 'JS', 'React', 'Node'];
const chunks = chunkArray(languages, 2);

console.log(chunks);
