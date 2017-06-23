function swapCase(string) {
        var newString = "";
        
        for (var i = 0; string.length > i; i++) {
            if (string[i] === string[i].toUpperCase())
                newString += string[i].toLowerCase();
            else if (string[i] === string[i].toLowerCase())
                newString += string[i].toUpperCase();
        }
        return newString;
    }

    console.log(swapCase("The Quick Brown Fox"));
