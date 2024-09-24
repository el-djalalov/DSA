var getSneakyNumbers = function ( nums ) {
    let map = {};
    let res = [];
    for(let num of nums){
        map[num] = (map[num] || 0) + 1;
    }

    for(let val in map) {
      if(map[val] > 1) {
        res.push(val)
      }
    }

    console.log( res);
    return res;
};

getSneakyNumbers([7,1,5,4,3,4,6,0,9,5,8,2])
