//Write a function which can convert the time input given in 12 hours format to 24 hours format

 
function convertTo24HrsFormat(time) {
   let clock = time.slice(-2);

   let times = Number(time.slice(0,2));
   
   let convertedTime;
   if(clock === "AM" && times === 12){
       times = 00;
       convertedTime = times + time.slice(2,-2);
   }else if(clock === "AM" && times <= 12 || clock === "PM" && times == 12){
       convertedTime = time.slice(0, -2);
   }else if(clock === "PM" && times <= 12 ){
       times+=12;
       convertedTime = times + time.slice(2,-2);
   }else{
       convertedTime = "Not a valid time";
   }
   return convertedTime;
 }
 
// very unoptimized