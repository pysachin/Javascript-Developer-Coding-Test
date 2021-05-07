
const array = [0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0];
let count = 0 , max_count = 0;

for (let index = 0; index < array.length; index++) {
        
    if(array[index] == 1)
    {
        count++;
    }
    else
    {
        if(max_count < count){
            max_count = count;
        }
        count = 0;
    }
    
}

console.log("Max num of consecutive 1's is ",max_count);