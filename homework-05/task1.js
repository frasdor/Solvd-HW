function customFilterUnique(array, callback){
    const seen = new Set();
   return array.filter(item => {
    const identifier = callback(item);
    if(seen.has(identifier)) {
        return false;
    }
     seen.add(identifier);
     return true;
    });
   }

const users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Bartek" },
  { id: 1, name: "Anna" },
  { id: 3, name: "Celina" }
];
const result = customFilterUnique(users, user => user.id);
console.log(result);