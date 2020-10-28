https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

    var gimme = function (inputArray) {
        let max = Math.max(...inputArray);
        let min = Math.min(...inputArray);
        for(let el of inputArray) {
            if(el !== max && el !== min) {
                return inputArray.indexOf(el)
            }
        }
    }