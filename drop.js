let toffsetx = [];
let toffsety = [];
var dragobject={
x: 0, y: 0, offsetx : null, offsety : null, targetobj : null, dragapproved : 0,
initialize:function(){
document.onmousedown=this.drag;
document.onmouseup=function(){
this.dragapproved=0;
window.toffsetx = [];
window.toffsety = [];
}
},
drag:function(e){
var evtobj=window.event? window.event : e
this.targetobj=window.event? event.srcElement : e.target
if (this.targetobj.className=="balls" || this.targetobj.className=="tree"){
this.dragapproved=1;
if (isNaN(parseInt(this.targetobj.style.left))){this.targetobj.style.left=0}
if (isNaN(parseInt(this.targetobj.style.top))){this.targetobj.style.top=0}
this.offsetx=parseInt(this.targetobj.style.left);
this.offsety=parseInt(this.targetobj.style.top);
if (this.targetobj.className=="tree") {
let list = document.querySelectorAll(".balls");
for (let i = 0; i < list.length; i++) {
window.toffsetx[i] = parseInt(list.item(i).style.left);
window.toffsety[i] = parseInt(list.item(i).style.top);
}
}
this.x=evtobj.clientX;
this.y=evtobj.clientY;
if (evtobj.preventDefault);
evtobj.preventDefault();
document.onmousemove=dragobject.moveit;
}
},
moveit:function(e){
var evtobj=window.event? window.event : e
if (this.dragapproved==1){
this.targetobj.style.left=this.offsetx+evtobj.clientX-this.x+"px";
this.targetobj.style.top=this.offsety+evtobj.clientY-this.y+"px";
if (this.targetobj.className=="tree") {
let list = document.querySelectorAll(".balls");
for (let i = 0; i < list.length; i++) {
let l1 = parseInt(this.targetobj.style.left);
let l2 = parseInt(list.item(i).style.left);
let t1 = parseInt(this.targetobj.style.top);
let t2 = parseInt(list.item(i).style.top);
if (l1 <= (l2 + 60) && t1 <= (t2 + 50) && (l1 + 468) >= l2 && (t1 + 535) >= t2) {
list.item(i).style.left = (parseInt(this.targetobj.style.left) + window.toffsetx[i] - this.offsetx) + "px";
list.item(i).style.top = (parseInt(this.targetobj.style.top) + window.toffsety[i] - this.offsety) + "px";
}
}
}
return false;
}
}
}
dragobject.initialize()

document.getElementById('imya').onclick = function(){
    let arr = [[0,1,1,0, 0, 1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,],
               [0,1,1,0, 0, 1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,],
               [1,1,1,1, 0, 1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,], 
               [1,0,0,1, 0, 1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,], 
               [1,0,0,1, 0, 1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,]];
    let list = document.querySelectorAll(".balls");
    let k = 0;
    for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 5; j++) {
    if (arr[j][i] == 1) { 
      list.item(k).style.left = (i + 1) * 40 + "px";
      list.item(k).style.top = (j + 1) * 40 + "px";
      list.item(k).style.zIndex = "111";
      k++;
    }
    if (k == list.length) break;
    }
    if (k == list.length) break;
    }
    }
