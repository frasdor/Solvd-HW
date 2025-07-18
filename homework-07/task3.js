async function chainPromises(functions){
    let result;

    for (let i = 0; i< functions.length; i++) {
        const fn = functions[i];
        result = i ===0 ? await fn() : await fn(result);
    }

    return result;
}

function asyncFunction1() {
  return Promise.resolve("Result from asyncFunction1");
}

function asyncFunction2(data) {
  return Promise.resolve(data + " - Result from asyncFunction2");
}

function asyncFunction3(data) {
  return Promise.resolve(data + " - Result from asyncFunction3");
}

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

chainPromises(functionsArray)
  .then(result => {
    console.log("Chained promise result:", result);
    // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
  })
  .catch(error => {
    console.error("Chained promise error:", error);
  });