function detail(info) {
    if(typeof info !== 'object' || info === null){ {
        return 'Invalid information provided.';
    }}else if(typeOf(info.name) !== 'string ')
    return 'my name is ' + info.name + ' and I am ' + info.age + ' years old.' ;
}

console.log(detail({name:'sultan' ,age: 26}));