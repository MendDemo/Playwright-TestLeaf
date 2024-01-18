//var studentScore =prompt("Enter student score");

let studentScore = 90;
calcuteGrade(studentScore)
function calcuteGrade(studentScore){
    console.log(studentScore);
    switch(studentScore>=50){
        case true:
            console.log("Student grade is PASS")
            break
        case false:
            console.log("Student grade is FAIL")
    }

}