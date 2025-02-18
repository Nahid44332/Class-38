

for (let i=1; i<=10; i++){ // 1, 2, 3, ....9, 10, 11
    console.log("Hello world");
    console.log(i);
}

let marks = [34, 65, 76, 89, 98];


for(let i = 0; i<=4; i++){ //0, 1, 2, 3, 4

    if(marks[i] >= 80){
        console.log(marks[i]+"=The grade is A+");
    }

    else if(marks[i] >= 70){
        console.log(marks[i]+"=The grade is A");
    }

    else if(marks[i] >= 60){
        console.log(marks[i]+"=The grade is A-");
    }

    else if(marks[i] >= 50){
        console.log(marks[i]+"=The grade is B");
    }

    else if(marks[i] >= 40){
        console.log(marks[i]+"=The grade is C");
    }

    else if(marks[i] >= 33){
        console.log(marks[i]+"=The grade is D");
    }

    else{
        console.log(marks[i]+"=The grade is F");
    }
}

//age 
let age = [67, 89, 12, 78, 3, 5, 19, 18];

for(let i=0; i<=age.length; i++){

    if(age[i]>=18){
        console.log(age[i]+"=You are eligible to vote"); 
    }
    else{
        console.log(age[i]+"You are not eligible to vote");
    }
}


//Positive & Negative

let number = [12, 34, 65, 78, 97, 80, -23, 56, -87, -45];

for(let i=0; i<=number.length; i++){
    if(number[i]>0){
        console.log(number[i]+"This is Positive Number")
    }
    else{
        console.log(number[i]+"=This is Negative Number")
    }
}

// Year

let year = [2005, 2007, 2016, 2020, 2023, 2025];

for(let i=0; i<=year.length; i++){
     if(year[i]%4==0 && year[i]% 100 !== 0){
        console.log(year[i]+"=Leap Year");
     }
     else(
        console.log(year[i]+"=Not a Leap Year")
     )
}