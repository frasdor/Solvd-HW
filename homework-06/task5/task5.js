function throttle(func,interval){
    let lastTime = 0;
    return function (...args){
        const now = Date.now();

        if (now - lastTime >= interval) {
            lastTime = now;
            func.apply(this, args);
        }
    };
}
function onScroll(event) {
  console.log("Scroll event at", new Date().toLocaleTimeString());
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);