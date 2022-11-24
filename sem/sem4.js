a=[];
for(var i=1;i<10;i++)
{
    a[i]=document.querySelector(".a"+i.toString());
}
btn=document.querySelector(".btn");
res=document.querySelector(".res");
btn.onclick=function(e)
{
    var val=(((parseInt((a[1].value)/10))+1)*3)+(((parseInt((a[2].value)/10))+1)*4)+(((parseInt((a[3].value)/10))+1)*3)+(((parseInt((a[4].value)/10))+1)*3)+(((parseInt((a[5].value)/10))+1)*3)+(((parseInt((a[6].value)/10))+1)*3)+(((parseInt((a[7].value)/10))+1)*2)+(((parseInt((a[8].value)/10))+1)*2)+(((parseInt((a[9].value)/10))+1)*1);
    val=val/24;
    val=val.toFixed(2);
    res.innerHTML=("SGPA => "+val.toString());
};