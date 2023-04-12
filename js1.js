let x=0;
let y=0;
let m=0;
let h=0;
let check=0;
let ans=0;
function gettime() {

  var date = new Date();
	var current_date = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear() ;
	
  var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
  document.getElementById("demo2").innerHTML = current_time;
  document.getElementById("demo1").innerHTML = current_date;
}
function clock1(){
  var date = new Date();
   var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
   document.getElementById("demo3").innerHTML = current_time;
   
}setInterval(clock1,1000);
function start(){
  check++;
  check1();

if(x!=-1){
  x=x+1;
  ans=x;
  if(x>59){
    x=0;
    m=m+1;
    ans=m+":"+x;
    document.getElementById("swatch").innerHTML = ans;
  }
  else if(m>59){
    x=0;m=0;h=h+1;
    ans=h+":"+m+":"+x;
    document.getElementById("swatch").innerHTML = ans;
  }
  else{ 
    ans=h+":"+m+":"+x;
    document.getElementById("swatch").innerHTML = ans;
  }
  
}
else{
  document.getElementById("swatch").innerHTML = "";
}
};
function check1(){
if(check==1){
setInterval(start,1000);

}}


function stop(){
  x=-1;

}

