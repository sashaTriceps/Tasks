function displayColor(arr, ordinal) {
        var string = "";
        arr.forEach(function (item, i) {
            if (i < 3) {
                string += (i + 1) + ordinal[i + 1];
            } else {
                string += (i + 1) + ordinal[0];
            }
            string += " choice is " + item + "\n";
        });
        return string;
    }

var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var ord = ["th", "st", "nd", "rd"];

console.log( displayColor(color, ord) );
