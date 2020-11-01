let largest;
let secondLargest;
function getSecondLargest(nums) {
    // Complete the function


    nums.sort((x,y)=>(x>y));
    largest= nums[0];
    secondLargest= nums[0];

    for(var i in nums){
        if(nums[i]>largest){
            secondLargest=largest;
            largest=nums[i];
        }

    }

    return secondLargest;


}

