function practice(input) {
  let output = [];
  input.map(item => {
    if(item >= 2 && item % 2 === 0){
      return output.push(item)
    }
  });
  alert(output);
};

practice([2,3,4,5,6,7,8,10]);

console.log('version ssh');