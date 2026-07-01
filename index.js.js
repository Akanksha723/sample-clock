//mian-frame
let mainFrame=document.getElementById("main-frame");
//Time Box
let Box=document.createElement("div");
Box.className="bg-yellow-300 border-2 border-red-500  rounded-xl font-bold p-4 m-4 w-fit";
//Day box-tuesday
let Day=document.createElement("div");
Day.className=" border-2 border-red-500 bg-yellow-300 text-xl m-2 p-2 mt-2   w-fit" ;

//main-frame append child
mainFrame.appendChild(Box);
mainFrame.appendChild(Day);
setInterval(()=>{
    Box.innerText=new Date().toLocaleTimeString();
    Day.innerText= new Date().toLocaleDateString('en-IN',{ //en-IN(ENGLISH FORMATE according to India standard (DD/MM/YY))
        weekday:'long', //LONG : FULL SPEELING (Tuesday) 
        day:'2-digit',
        month:'2-digit',              
        year:'numeric'
        //deafult date 30/06/2006 (/ replaceAll with -) and (, replace :)
    }) .replaceAll('/','-').replace(',',':');
},1000);



