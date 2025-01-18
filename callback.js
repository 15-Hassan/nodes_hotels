const add = function(a,b,prince){
    var result = a+b;
    console.log('result: ' +result);
    prince();
}

add(2, 3, function(){
    console.log('add completed')
});

const sum= function(a, b, d){
    var result = a+b;
    console.log('result: ' + result)
    d()
}

// sum(5,6,function(){
//     console.log('add completed')
// })

sum(9,3,() => console.log('add completed'));