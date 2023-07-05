const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
for(fruits of array){
    console.log(fruits)

}

console.log(array.map (fruits=>{
    if (fruits===' '){
        return "empty string"
    }
    else{
        return fruits
    }

}));
