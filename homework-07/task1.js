function promiseAll (promises) {
    return new Promise((resolve, reject) => {
        const result = [];
        let resolvedCount = 0;

        if(promises.length === 0){
            return resolve([]);
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then((value) => {
                result [index] = value;
                resolvedCount++;

                if(resolvedCount === promises.length) {
                    resolve(result);
                }
            })
            .catch((err) => {
                reject(err);
            });
        });
    });
}const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
];

promiseAll(promises)
  .then(results => {
    console.log("All promises resolved:", results); // Expected: [1, 2, 3]
  })
  .catch(error => {
    console.error("At least one promise rejected:", error);
  });