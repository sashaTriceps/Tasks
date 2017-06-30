const inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
]

let totalMachineValue = function(arr)  {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type == "machine") {
            sum += arr[i].value;
        }
    }
     return sum;
}

console.log(totalMachineValue(inventory));