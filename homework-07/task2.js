function promiseAllSettled(promises){
    return new Promise((resolve) => {
        const excepted = [];
        let completed = 0;

        if(promises.length === 0){
            return resolve([]);
        }
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then(value=> {
                excepted[index] = {status:'fulfilled', value };
            })
            .catch(reason => {
                excepted[index] = { status: 'rejected', reason};
            })
            .finally(() => {
                completed ++;
                if (completed === promises.length) {
                    resolve(excepted);
                }
            });
        });
    });
    
}
const promises = [
  Promise.resolve(1),
  Promise.reject("Error occurred"),
  Promise.resolve(3)
];

promiseAllSettled(promises)
  .then(results => {
    console.log("All promises settled:", results);
    // Expected: [{ status: 'fulfilled', value: 1 },
    //            { status: 'rejected', reason: 'Error occurred' },
    //            { status: 'fulfilled', value: 3 }]
  });