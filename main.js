
// Question (1)
var stop = true;

while(stop){
    var p =parseInt(prompt("how old are you")); 
    // var answer = prompt("do you want to exit (yes,no)");
    // if(answer=="yes"){
    //     stop = false;
    // }
if(p<0){
alert("not a valid number");
}
  else if(p <= 10 && p >= 1){
        alert ("is Child");
    }
    else if (p <= 18 && p >= 11) {
        alert ("is Teenager");
    }
    else if(p <= 50 && p >= 19){
        alert ("is Grown up");
    }
    else if(p >= 50){
        alert ("is Old");
    }
    else {
      stop=false;
    }
  
}   

//Question (2)

	// function isVowel(ch) {
	// 	ch = ch.toUpperCase();
	// 	return ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U";
	// }

	// function countVowels(str)
	// {
	// 	var count = 0;
	// 	for (var i = 0; i < str.length; i++)
	// 	if (isVowel(str[i]))
	// 	    count++;
	// 	return count;
	// }


	// var str = (prompt("Enter word",""));
    // alert(countVowels(str));
	
	
	
//Question (3)

// function convert12(hrs)
// {
//    var h1 = Number(hrs[0] - '0');
//    var h2 = Number(hrs[1] - '0');
//    var hh = h1 * 10 + h2;
    
//     var timing;
     
//     if (hh < 12) {
//         timing = "AM";
//     }
//     else
//         timing = "PM";
    
//     hh =hh % 12;
    
 
//     if (hh == 0) {
//         alert("12");
//        for (var i = 2; i < 8; i++) {
//        alert(hrs[i]+timing);
//         }
//     }
//     else {
//         alert(hh+timing);
   
//         for (var i = 2; i < 8; i++) {
//       alert(hrs[i]+timing);
//         }
//     }

// }
//    var hrs =prompt("Enter hours");
//    convert12(hrs);

     