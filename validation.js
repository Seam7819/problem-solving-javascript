function detail(info) {
    if(typeof info !== 'object' || info === null){ {
        return 'Invalid information provided.';
    }}else if(typeof info.name !== 'string' || typeof info.age !== 'number'){
        return 'Invalid information provided.';
    }
    return 'my name is ' + info.name + ' and I am ' + info.age + ' years old.' ;
}

console.log(detail({name:'sultan' ,age: 26}));