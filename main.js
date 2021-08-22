//Bài 1

// Bài 1 dùng for
function soChanLe(){

    contentSoChan="";
    contentSoLe="";
    for(var i=0;i<100;i++){
        if(i%2==0){
            contentSoChan+=i+ " ";
        }else{
            contentSoLe+=i+ " ";
        }
    }
    document.getElementById("txtSoChanLe").innerHTML="số chẵn: "+contentSoChan +"<br>"+"số lẻ: "+contentSoLe;
}
document.getElementById("btnSoChanLe").onclick=soChanLe;
// Bài 1 dùng while
function soChanLe2(){
   
    contentSoChan="";
    contentSoLe="";
    var i=0;
    while(i<100){
        
        if(i%2==0){
            contentSoChan+=i+ " ";
        }else{
            contentSoLe+=i+ " ";
        }
        i++;
    }
    document.getElementById("txtSoChanLe2").innerHTML="số chẵn: "+contentSoChan +"<br>"+"số lẻ: "+contentSoLe;
}
document.getElementById("btnSoChanLe2").onclick=soChanLe2;


//Bài 2

// Bài 2 dùng for
function soChiaBa(){

    count=0;
    for(var i=0;i<1000;i++){
        if(i%3==0){
            count++
        }
    }
    document.getElementById("txtSoChiaBa").innerHTML=" số chia hết cho 3: "+count+" số";
}
document.getElementById("btnSoChiaBa").onclick=soChiaBa;

// Bài 2 dùng while
function soChiaBa2(){
   
    var count=0;
    var i=0;
    while(i<1000){
        
        if(i%3==0){
            count++
        }
        i++;
    }
    document.getElementById("txtSoChiaBa2").innerHTML=" chia hết cho 3: "+count+ " số";
}
document.getElementById("btnSoChiaBa2").onclick=soChiaBa2;

//Bài 3
function timN(){
   
    var n=0;
    var sum=0;
    for(var i=1;sum<=10000;i++){
        sum+=i;
        n++;
    }
    document.getElementById("txtTimN").innerHTML=" n là: "+n
}
document.getElementById("btnTimN").onclick=timN;

//Bài 4

function tinhTong(){
   
    var n=parseInt(document.getElementById("inputN").value);
    var x=parseInt(document.getElementById("inputX").value);
    var sum=0;
    for(var i=1;i<=n;i++){
        sum+=Math.pow(x,i);
    }
    document.getElementById("txtTinhTong").innerHTML=" Tổng là: "+sum
}
document.getElementById("btnTinhTong").onclick=tinhTong;

//Bài 5

function tinhGiaiThua(){
   
    var n=parseInt(document.getElementById("inputn").value);
    var tich=1;
    for(var i=1;i<=n;i++){
        tich*=i;
    }
    document.getElementById("txtGiaiThua").innerHTML=" Tổng là: "+tich;
}
document.getElementById("btnGiaiThua").onclick=tinhGiaiThua;

//Bài 6

function taoThe(){
   var content="";
    for(var i=1;i<=10;i++){
        if(i%2==0){
            content+="<div style=background-color:red>div chẵn</div>"
        }else{
            content+="<div style=background-color:blue>div lẻ</div>" 
        }
    }
    document.getElementById("txtTaoThe").innerHTML=content
}
document.getElementById("btnTaoThe").onclick=taoThe;

//Bài 7
function inSoNT(){
   
    var x=parseInt(document.getElementById("inputx").value);
    var content="";
    var n=2;
    for(n=2;n<=x;n++){
        var a=false;
    for(var i=2;i<n;i++){
        if(n%i==0){
            a=true;
            break
        }
    
    }
    if(a==false){
        content+=n+" "
    }
    
 
    
}
    document.getElementById("txtSoNguyenTo").innerHTML=content;
}
document.getElementById("btnSoNguyenTo").onclick=inSoNT;


