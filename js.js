// var month=document.getElementById("bdmonth").value;
// var day=document.getElementById("bddays").value;
// var year=document.getElementById("bdy").value;
 var cal=document.getElementById("calbtn");
 var arrmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 const todaydate = new Date;
 document.getElementById("cdy").value = todaydate.getFullYear();
 document.getElementById("cddays").value = new Date().getDate();

arrmonth.forEach(function (f){
   if(arrmonth.indexOf(f) == todaydate.getMonth()){
      document.getElementById("cdmonth").value = f;
      // console.log(" fix month " + f)
   }
});
  
var arr31month =[1,3,5,7,8,10,12];
var arr30month =[4,6,9,11];



 cal.addEventListener("click", function(){
 
    var month=document.getElementById("bdmonth").value;
    var day=document.getElementById("bddays").value;
    var year=document.getElementById("bdy").value;
    var cmonth=document.getElementById("cdmonth").value;
    var cday=document.getElementById("cddays").value;
    var cyear=document.getElementById("cdy").value;
    var bod= new Date(`${month} ${day} ${year}`);
    var cod= new Date(`${cmonth} ${cday} ${cyear}`);
     
    
    console.log(todaydate);
      // var setyear = todaydate.getFullYear();
      // cyear.value=cyear;
      console.log(cday + " current day");
  

      

     
     if(bod > todaydate){
        document.getElementById("errbd").innerHTML = "dont Select Future Date" ;
      
        console.log("errore")
     }else{
      document.getElementById("errbd").innerHTML = " " ;
     }
     if(cod > todaydate){
        document.getElementById("errcd").innerHTML = "dont Select Future Date" ;
      
        console.log("errore")
     }else{
      document.getElementById("errcd").innerHTML = " " ;
     }

     var ageyear = cyear - year ;
     var bagemonth;
     var cagemonth;
     var agemonth;
     var ageday;
     
     
     arrmonth.forEach(function(e){

      if(e == month){
      console.log("if run");
        bagemonth=arrmonth.indexOf(e) + 1;
        
      console.log(arrmonth.indexOf(e));
      console.log(bagemonth + " birth agemonth " );
      }
      if( e == cmonth){
         cagemonth=arrmonth.indexOf(e) + 1;
         console.log(cagemonth + " current agemonth " );
      }
     });
       
     if(cagemonth < bagemonth){
      ageyear = ageyear-1;
      cagemonth=cagemonth+12;
      agemonth=cagemonth-bagemonth;
      console.log("month if" + agemonth);
     }else{
      console.log(agemonth=cagemonth-bagemonth);
      console.log("month else");
     }
      
    if(cday<day){
      console.log("day main if" + cday + " " + day);
      if(agemonth == 0){
        agemonth=agemonth;
      }else{
     agemonth=agemonth-1;
      }
      var tempageday=cday-day;
      if(agemonth == 0){
          ageday= (-tempageday);
      }
      arr30month.forEach(function (ele){
        if(ele == agemonth){
          if(tempageday > 0){
            console.log("day30if");
            ageday= 30 - tempageday;
          }else{
            console.log("day30else");
            ageday= 30 - (-tempageday);
          }
        
           
        }
        
      });
      arr31month.forEach(function (ele){
        if(ele == agemonth){
         if(tempageday > 0){
            console.log("day31if" + tempageday);
            ageday= 31 - tempageday;
          }else{
            console.log("day31else");
            ageday= 31 - (-tempageday);
          }
        
        }
        if(agemonth == 2){
         if(tempageday){
            ageday= 28 - tempageday;
          }else{
            ageday= 28 - (-tempageday);
          }
        
        }

      });
      
    }else{
      console.log("else");

     ageday=cday-day;
    }
    console.log("age year "+ageyear);
    
    console.log( " age month " + agemonth);
    console.log( " age day " + ageday);
    var finalfrsult=document.getElementById("fullresult").innerHTML = `${ageyear}  Year ${agemonth}  month ${ageday} days `;

   // var finalfrsult=document.getElementById("monthresult").innerHTML = `${(ageyear*12)+agemonth}  month ${ageday} days `;
     
      // var fianldate = new Date(`${agemonth} ${ageday} ${ageyear}`);;
      // console.log(fianldate);
 });

