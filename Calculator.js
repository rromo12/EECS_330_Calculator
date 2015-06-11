//Calculator Function
	var Operator=0; //operator 0-4
	var yarr =[]; //two numbers
	var xarr=[];
	var xnum,ynum;
	var negate=0; //if true number negative
	var numc=0;//true if we are chosing second number
	var dec=0;//true if decimal point exist
	var disp;//number being displayed
	//window.addEventListener("keydown", myKeyDown, false);

//select operator based on button press
	function SetOperation(o){
		xnum=arraytofloat(xarr);
		if (o == "/"){console.log("divide")
					  document.getElementById("divide").style.color = "black";
					  document.getElementById("times").style.color = "grey";
					  document.getElementById("plus").style.color = "grey";
					  document.getElementById("minus").style.color = "grey";
					  Operator=1;
					  dec=0;}
		else if (o == "*"){console.log("multiply")
					 Operator=2
					 document.getElementById("divide").style.color = "grey";
					  document.getElementById("times").style.color = "black";
					  document.getElementById("plus").style.color = "grey";
					  document.getElementById("minus").style.color = "grey";
					 dec=0;}
		else if (o == "+"){console.log("add")
					 document.getElementById("divide").style.color = "grey";
					  document.getElementById("times").style.color = "grey";
					  document.getElementById("plus").style.color = "black";
					  document.getElementById("minus").style.color = "grey";
					 Operator=3
					 dec=0;}
		else if (o == "-"){console.log("subtract")
					  Operator=4
					  document.getElementById("divide").style.color = "grey";
					  document.getElementById("times").style.color = "grey";
					  document.getElementById("plus").style.color = "grey";
					  document.getElementById("minus").style.color = "black";
					  dec=0;}

	
	console.log("xnum",xnum);
	if(xnum==0) return -1;

	if(negate){xnum=xnum*-1}
	}
//reset display

function reset(){
		dec=0; 
		numc=0;
		xarr=[];
		yarr=[];
		xnum=0.0;
		ynum=0;
		Operator=0;
		negate=0;
		disp=0;
	}

function Clear(){console.log("Clear")
			reset();
			update(xnum);
		}


function input(i){
		var a = parseInt(i);
		if(Operator!=0) {numc=1;
			negate=0;
			console.log('second number')}
		//if (i=="0") {console.log('0')}
//		if(numc==1){arr=x;}
//			else{arr=y;}
		switch(a){
			case 0: {console.log('0');
					if (numc==1){yarr.push(0);}
						else {xarr.push(0);};
					break;}	

			case 1: {console.log('1')
					if (numc==1){yarr.push(1);}
						else {xarr.push(1);};
					break;}

			case 2: {console.log('2')
					if (numc==1){yarr.push(2);}
						else {xarr.push(2);}
					break;}

			case 3: {console.log('3')
					if (numc==1){yarr.push(3);}
						else {xarr.push(3);};
					break;}
			case 4: {console.log('4')
					if (numc==1){yarr.push(4);}
						else {xarr.push(4);};
					break;}		
			case 5: {console.log('5')
					if (numc==1){yarr.push(5);}
						else {xarr.push(5);};
					break;}
			case 6: {console.log('6')
					if (numc==1){yarr.push(6);}
						else {xarr.push(6);};
					break;}
			case 7: {console.log('7')
					if (numc==1){yarr.push(7);}
						else {xarr.push(7);}
					break;}
			case 8: {console.log('8')
					if (numc==1){yarr.push(8);}
						else {xarr.push(8);};
					break;}
			case 9: {console.log('9')
					if (numc==1){yarr.push(9);}
						else {xarr.push(9);};
					break;}
			case 10: {console.log('.')//decimal point
					 if(dec==0)
					 {
					  if (numc==1)
					  	{yarr.push(".");}
					  else 
					  	{xarr.push(".");}
					  }
					  dec=1;
						break;}					
			default:
				break;

		}
		
		if (numc==1)
					  	disp=arraytofloat(yarr);
					  else 
					  	disp=arraytofloat(xarr);
		update(disp);


}
function Negate(){
//change to negative
	if(disp == 0){return -1}
	else{disp=disp*-1}
	if(negate==0){
		negate=1} //toggle negate
	else {negate = 0;}
	//update
	update(disp);
}

function arraytofloat(arr){
	var sum=0.0;
	if(dec==0){
	    for (var i = arr.length-1,j = 0; i >= 0; i--,++j) {
				sum += arr[i] * (Math.pow(10,j));
			}}
	else if (dec==1){
		z=arr.indexOf(".");
		j=z-arr.length+1; 
		//console.log("z=",z)
			for (var i = arr.length-1; i >= 0; i--,++j) 
			{
				if(i==z){ --j;
						  continue;}
				else{
					sum += arr[i] * (Math.pow(10,j));
					console.log(sum);
					}
			}
	}
	console.log('sum',sum)
	return sum;
}

function calculate(){	
	var temp=xnum;
	console.log("xnum",xnum)
	ynum=arraytofloat(yarr)
	if(negate){ynum=ynum*-1}
	console.log("ynum",ynum)
	console.log("numc",numc)
	console.log("operator", Operator)
	console.log("negate",negate)
	console.log("xarr",xarr)
	console.log("yarr",yarr)
	switch(Operator){
		case 0:{xnum=arraytofloat(xarr)
			update(xnum)
			break;}
		case 1:{if(numc==1){update(xnum=xnum/ynum);}
				else {	ynum=xnum;
						update(xnum=xnum/xnum);}

				break;}//divide
		case 2:{if(numc==1){ update(xnum=xnum*ynum);}
				else {ynum=xnum;
					 update(xnum=xnum*xnum);}

				break;}//multiply
		case 3:{if(numc==1){update(xnum=xnum+ynum);}
				else {ynum=xnum;
					  update(xnum=xnum+xnum);}
		break;}//add
		case 4:{if(numc==1){update(xnum=xnum-ynum);}
				else {
					ynum=xnum;
					update(xnum=xnum-xnum);}

		break;}//subtracts
	}
	if(numc==1){
		yarr=[];
		xarr=[xnum]
	}
	else
	{
		yarr=[temp];
		xarr=[xnum];
	}
	console.log(xnum);
	negate=0;

}

function update(temp){

	if(temp == Math.floor(temp)) {temp=temp.toFixed(1);}
	document.getElementById('num').innerHTML = temp;}
				