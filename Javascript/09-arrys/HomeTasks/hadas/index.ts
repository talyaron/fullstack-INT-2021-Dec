//Array of numbers and strings

const arr: Array<any> = [10, "hadas", 32, "hello", 7, 54, "hi"];
console.log(arr);


const Answer: any = prompt('Please enter which array  you want: numbers or string?')
const string: string = "string"
const number: string = "numbers"

const useranswer = newarr(Answer)
console.log(useranswer);

function newarr(Answer: string) {

    if (Answer === number) {
        const arrnum = arr.map(elm => {
            if (typeof elm === 'number') return elm
        }).filter(elm => typeof elm === 'number');
        console.log(arrnum);
    }
     if (Answer === string) {
        const arrstr = arr.map(elm => {
            if (typeof elm === 'string') return elm
        }).filter(elm => typeof elm === 'string');
        console.log(arrstr);
    }
    try {

        if (Answer != number && Answer != string) throw 'I did not to accept suitable order'

    } catch (error) {
        console.log(error);

    }
}









