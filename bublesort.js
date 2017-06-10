
// create a new Array

var newArray = [9,22,34,48,63,82,765];


// create a swap function

function swap (a,b){
	var temp = newArray[a];
	newArray[a] = newArray[b];
	newArray[b] = temp;


}

//create the buble swap function

function bubbleSort(){
	for (var i=0; i< newArray.length; i++){
		for (var j=0; j< newArray.length-1; j++){
			if (newArray[j] > newArray[j+1]){
				swap(j,j+1);

			}
		}


	}

}

//enhanced bubblesort

function enhancebubbleSort(){
	for (var i=0;  i< newArray.length; i++){
		for (var j=0;  j< newArray.length-1-i; j++){
			if (newArray[j] > newArray[j+1]){
				swap(j,j+1);
				
			}
		}


	}

}


function selectionSort(){


  // selection sort
// create a place to store the minimum index
var minIndex;
//do a loop for length time
for ( var i = 0; i < newArray.length; i++){
	minIndex =i;
//set the default minimum index to the first one
// do a second loop for length time



	for ( var j = i ; j < newArray.length, j++){
//do comparison of current index with the smallest index
// if it is the smallest, update 1 

 if (newArray[minIndex]>newArray[j]) {
 	minIndex =  j;
 }
}
//swap if it is smallest index
  if (i != minIndex){
  	swap(i,minIndex);
  }
}
//every round, swap it


function binarySearch(number){

	selectionSort();

	//store min,max and mid
	var min, max, mid;
	min = 0
	max = newArray.length-1;

	while (min < max){
	mid = Math.floor(newArray.length/2)
	var numberExist = false
	//compare if number ==mid
if (number === newArray[mid]){
	return true

} else if (number > newArray[mid]){
	min = mid;
}
else {
	max = mid


}
}

	//id number > mid
	//min =mid


    //if number < mid
	//max =mid

return numberExist

}
console.log(binarySearch(34));
console.log(newArray);