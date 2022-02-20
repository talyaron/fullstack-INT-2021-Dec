// הכינו מערך (array) של חברים שלכם. הדפיסו את החברים בלולאה.
// קחו את אותו מערך וכתבו לכל חבר ״ברוך הבא (שם-החבר)״
// הכינו מערך חדש של מספרים. העבירו את המערך בלולאה. אם המספר גדול מ-5, הדפיסו ״המספר (המספר) גדול מ-5״
// צרו מערך עם משתנים שונים, עברו על המערך בלולאה. התוכנה צריכה להגיד מה סוג המשתנה (typeof). אם השתנה הוא פונקציה, על התוכנה להריץ את הפונקציה (הכינו פונקציה שמקבלת שני מספרים).
// צרו מערך של מספרים. צרו פונקציה שמקבלת את המערך ומחזירה מה ממוצע כל המספרים.


// first task
const arr: Array<string> = ['Noy', 'May', 'Liat', 'Shani', 'Noam', 'Gal'];

for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome ${arr[i]}`);
}

// second task
const arr2: Array<number> = [10, 6, -7, 9000, 26, 32, 46, 1, 0, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 5) {
        console.log(`the number ${arr2[i]} is bigger then 5`);
    } else {
        console.log(`the number ${arr2[i]} is smaller or equal to 5`);
    }
}

// third task
const arr3: Array<any> = ['Noy', 25, func, 'Micky', 17, 79, 'ZZZ'];
for (let i = 0; i < arr3.length; i++) {
    console.log(`the element ${arr3[i]} type is ${typeof arr3[i]}`);
    if (typeof arr3[i] == 'function') {
        console.log(`function result is ${arr3[i](3, 2)}`);
    }
}

function func(a: number, b: number) {
    return a + b;
}

// forth task
const arr4: Array<number> = [10, 5, 0, -5, 20, 9];

function average(arr: Array<number>) {
    let temp: number = 0;
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i];
    }
    return temp / arr.length;
}

console.log(`the average of the numbers in the array is ${average(arr4)}`);