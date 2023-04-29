let arr=[];
let place=[];
let ar=[0];
let s=[0];
let Arar=[];
let jai=[];

                                        
function refresh(Elementclass,position){
    let Element=document.getElementsByClassName(Elementclass);
    Element[position].setAttribute("class","alreadybooked");
    booked=document.getElementsByClassName("alreadybooked");
    for(i=0;i<booked.length;i++){
        booked[i].style.backgroundColor="rgb(181, 179, 179)";
        booked[i].onclick=function(){disable()}
    }
}
function seats(classname,startingseat,typeofseat){
    for(var i=startingseat;i<(startingseat+5);i++){
        document.write("<td><div  class="+classname+" name="+typeofseat+" >"+i+"</div></td>");
    }
}

function disable(){
    alert("As per your selection these seats cannot be booked");
}

function typeselection(){
    var elementsselected= document. getElementsByClassName('selected');
    var noofselectedelements=elementsselected.length;
    if(noofselectedelements==0){
        noofseats=numberofseats();
        }
    if(noofselectedelements!==0){
        noofseats=numberofseats();
        noofseats=noofseats-noofselectedelements;
}
     if(noofseats!==numberofseats()){
         on();
     }
    let seattype=$("#tickettype option:selected").val();
    var premiumelements = document.getElementsByName("premium");
    console.log(premiumelements);
    var standardelements = document.getElementsByName("Standard");
    
if (seattype=="premium"){
for(var i = 0; i <standardelements . length; i++){
    standardelements[i].onclick=function(){disable()}}
 for(i=0;i<premiumelements.length;i++){
    premiumelements[i].onclick=function(){seatselection(this)};
 }
}
if (seattype=="Standard"){
    for(var i = 0; i <premiumelements . length; i++){
        
        premiumelements [i].onclick=function(){disable()}}
     
       for(i=0;i<standardelements.length;i++){
        
        standardelements[i].onclick=function(){seatselection(this)};
     }
    }
   if(arr.length){
    r=document.getElementsByClassName("selected");
    for(i=0;i<r.length;i++){
        console.log(r);
        for(j=0;j<arr.length;j++){
            r[i].style.backgroundColor="rgb(181, 179, 179);";
            r[i].setAttribute("class",arr[j]);
            }
        }
        arr=[];
    }
    }
    

function numberofseats(){
    let s=$("#numberofseat option:selected").val();
return(s)
  }

function seatselection(selectedelement){
    classgiven=selectedelement.getAttribute("class");
    
    if(classgiven!=="booked"){
    var elementsselected= document. getElementsByClassName('selected');
    var noofselectedelements=elementsselected.length;
    if(noofselectedelements==0){
        noofseats=numberofseats();
        }
    if(noofselectedelements!==0){
        noofseats=numberofseats();
        noofseats=noofseats-noofselectedelements;
}
if(noofseats==0){
  noofseats=numberofseats();
  on();
    }
    seatsselect(classgiven,selectedelement);
        var elementsselected=document.getElementsByClassName("selected");
        for(i=0;i<elementsselected.length;i++){
            elementsselected[i].style.backgroundColor="#1ea83c";
        }
    }
}

function seatsselect(givenclassname,elementselected){
    if(givenclassname!=="booked"){
    Elements=document.getElementsByClassName(givenclassname);
    for(let i=0;i<Elements.length;i++){
        if(Elements[i]==elementselected){l=i;console.log(l);console.log(Elements[i])}}
            
    for(let j=0;j<noofseats;j++){
        e=Elements[l].getAttribute("class")
                    jai.push(Elements[l]);
                    arr.push(e);
                    place.push(l);
                    Elements[l].setAttribute("class","selected");
    }
    var elementsselected=document.getElementsByClassName("selected");
        for(let i=0;i<elementsselected.length;i++){
            elementsselected[i].style.backgroundColor="#1ea83c";
        }
    }  
    }

    function on(){
        r=document.getElementsByClassName("selected");
        console.log(arr);
        console.log(r.length);
        for(i=0;i<r.length;i++){
            console.log(r);
            for(j=0;j<arr.length;j++){
                r[i].style.backgroundColor="white";
                r[i].setAttribute("class",arr[j]);
                }
            }
            arr=[];
        }

function reset() {
    document.getElementById("numberofseat").value= "";
    document.getElementById("tickettype").value = "";
    var selectedelements = document. getElementsByClassName('selected');
    var h= selectedelements. length;
   for(var i = 0; i < h; i++){
    selectedelements[i].style.backgroundColor="rgb(181, 179, 179)";
    }
 for(var i = 0; i < h; i++){
    selectedelements[0].setAttribute("class","booked");
    selectedelements[0].onclick=function(){disable()};
    }
   
 f=document.getElementsByClassName("booked");
 for(i=0;i<f.length;i++){
     f[i].style.backgroundColor="rgb(181, 179, 179)"
 }
}