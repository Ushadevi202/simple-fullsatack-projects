const Months=[31,28,31,30,31,30,31,31,30,31,30,31];
function calculate(){


let today=new Date();
let inputdate=new Date(document.getElementById("input-date").value);
let birthd,birthm,birthy;
let birthdetails={
    date:inputdate.getDate(),
    month:inputdate.getMonth()+1,
    year:inputdate.getFullYear()
}

let currentyear=today.getFullYear();
let currentmonth=today.getMonth()+1;
let currentdate=today.getDate();


leapyear(currentyear);

if(birthdetails.year>currentyear || (currentyear==birthdetails.year&&birthdetails.month>currentmonth)||(currentyear==birthdetails.year&&birthdetails.month==currentmonth && birthdetails.date>currentdate)){
    alert("not yet birth");
    return;
}

birthy=currentyear-birthdetails.year;

if(currentmonth>=birthdetails.month){
    birthm=currentmonth-birthdetails.month;
}
else{
    birthy--;
    birthm=12+currentmonth-birthdetails.month;
}

if(currentdate>=birthdetails.date){
    birthd=currentdate-birthdetails.date;
}
else{
    birthy--;
    let days=Months[currentmonth-2];
    birthd=days+currentdate-birthdetails.date;
    if(birthm<0){
        birthm=11;
        birthy--;
    }
}
showdate(birthd,birthm,birthy);
}
function leapyear(year){
    if(year%4==0){
        Months[1]=29;
    }
    else{
        Months[1]=28;
    }

}
function showdate(bdate,bmonth,byear){
    document.getElementById("year").textContent=byear;
    document.getElementById("month").textContent=bmonth;
    document.getElementById("date").textContent=bdate;
}