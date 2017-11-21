function main(fn) {
    var sum = fn(1,2);
    console.log (sum);
}

main((a, b) => {
    console.log(a, b);
    return a + b;
});

main(function(a, b) {
    console.log(a, b);
    return a + b;
});

setTimeout(function(){
    console.log(this);
}, 1000);

setTimeout(() => {
    console.log(this);
}, 1000);
