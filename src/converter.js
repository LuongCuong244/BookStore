export const formatNumberToString = (number) => {
    if(isNaN(number)){
        return 'NaN';
    }
    let s = number.toString()
    let i = s.length % 3;
    if(i == 0){
        i = 3;
    }
    let formatString = ''
    let j = 0;
    while(i <= s.length){
        if(i == s.length){
            formatString += s.slice(j,i);
        }else{
            formatString += s.slice(j,i) + '.';
        }
        j = i;
        i += 3;
    }
    return formatString;
}