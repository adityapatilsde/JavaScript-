/*The switch statement checks a value and executes
 the code of the matching case.*/

 //CODE 1

 let day = 6;
 switch(day){
case 1: 
console.log("It is Monday");
break;
  case 2:
  console.log("It is tuesday ");
  break;
    case 3:
     console.log("It is wednesday");
     break;
        case 4:
        console.log("It is thursday");
        break;
           case 5:
           console.log("It is friday");
           break;
              case 6:
              console.log("It is saturday");
              break;
                 case 7:
                 console.log("It is sunday");
                 break;
 }

 //================================================================
 //CODE 2 

 let testscore = 65;
 let grade;

 switch(true){
    case testscore >= 90:
        grade = "A";
        break;
        case testscore >= 80:
            grade = "B";
            break;
            case testscore >= 70:
                grade = "C";
                break;
                case testscore >= 60:
                    grade = "D";
                    break;
                    default:
                        grade = "F";
 }
 console.log(grade);

 //====================================================================
  







