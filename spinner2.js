const animateFrame = function(symbol, delay) {
    setTimeout(() => process.stdout.write(symbol), delay);
};
animateFrame('\r|   ', 100);
animateFrame('\r/   ', 300);
animateFrame('\r-   ', 500);
animateFrame('\r\\   ', 700);
animateFrame('\r\|   ', 900);