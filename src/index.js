

module.exports = function toReadable(number) {

  let n = String(number).length;
  let str = String(number);
  let result = '';

    const getSingularNumber = (x) => {
        switch(x) {
            case '0':
                result +='zero ';
                break;
            case '1':
                result +='one ';
                break;
            case '2':
                result +='two ';
                break;
            case '3':
                result +='three ';
                break;
            case '4':
                result +='four ';
                break;
            case '5':
                result +='five ';
                break;
            case '6':
                result +='six ';
                break;
            case '7':
                result +='seven ';
                break;
            case '8':
                result +='eight ';
                break;
            case '9':
                result +='nine ';
                break;
            default:
                break;
        } 
    };

    const getDozensNumber = x => { '00'
        if (x < 11 || x > 19) { 
            switch(x.slice(0, 1)) {
                case '1':
                    result += 'ten ';
                    break;
                case '2':
                    result += 'twenty ';
                    break;
                case '3':
                    result += 'thirty ';
                    break;
                case '4':
                    result += 'forty ';
                    break;
                case '5':
                    result += 'fifty ';
                    break;
                case '6':
                    result += 'sixty ';
                    break;
                case '7':
                    result += 'seventy ';
                    break;
                case '8':
                    result += 'eighty ';
                    break;
                case '9':
                    result += 'ninety ';
                    break;
                default:
                    break;
            }
            if (x.slice(1, 2) > 0) {
                getSingularNumber(x.slice(1, 2));
            }
        } else {
            switch(x) {
                case '11':
                    result += 'eleven ';
                    break;
                case '12':
                    result += 'twelve ';
                    break;
                case '13':
                    result += 'thirteen ';
                    break;
                case '14':
                    result += 'fourteen ';
                    break;
                case '15':
                    result += 'fifteen ';
                    break;
                case '16':
                    result += 'sixteen ';
                    break;
                case '17':
                    result += 'seventeen ';
                    break;
                case '18':
                    result += 'eighteen ';
                    break;
                case '19':
                    result += 'nineteen ';
                    break;
                default:
                    break;
            }
        }
    };

    const getTripleNumber = (x) => {
        switch(x.slice(0, 1)) {
            case '1':
                result += 'one hundred ';
                break;
            case '2':
                result += 'two hundred ';
                break;
            case '3':
                result += 'three hundred ';
                break;
            case '4':
                result += 'four hundred ';
                break;
            case '5':
                result += 'five hundred ';
                break;
            case '6':
                result += 'six hundred ';
                break;
            case '7':
                result += 'seven hundred ';
                break;
            case '8':
                result += 'eight hundred ';
                break;
            case '9':
                result += 'nine hundred ';
                break;
            default:
                break;
        }
        getDozensNumber(x.slice(1));
    };

    if (n === 1) {
        getSingularNumber(str);
        return result.trim(); 
    } else if (n === 2) {
        getDozensNumber(str);
        return result.trim();  
    } else if (n === 3) {
        getTripleNumber(str);
        return result.trim();
    } else {
        return 'too much';
    }

}
