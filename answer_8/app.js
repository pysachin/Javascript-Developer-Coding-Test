var obj = [
    {"id" : 4,   "name" : "abc"},
    {"id" : 10, "name" : "ab2"},
    {"id" : 5, "name" : "abc3"},
    {"id" : 6, "name" : "abc5"}
]
   
function sortById( obj1, obj2 ) {
    if ( obj1.id < obj2.id ){
      return -1;
    }
    if ( obj1.id > obj2.id ){
      return 1;
    }
    return 0;
}

console.log("Sorted Object Array By Id");
console.log(obj.sort(sortById));
