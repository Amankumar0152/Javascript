// This code checks the grade based on a score variable
// The score is set to 87, which should yield a grade of A

let score = 87;

if (score >= 80 && score <=100) {
    console.log("Grade A");
}else if(score>=70 && score <=79){
    console.log("Grade B");
}else if(score>=60 && score <=69){
    console.log("Grade C");
}else if(score >=50 && score <=59){
    console.log("Grade D");
}else{
    console.log("Grade F");
}