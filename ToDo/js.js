
var arr = [];
var onSubmit = () => {
    var lbl = document.getElementById("lbl");
    var txt = document.getElementById("txt");
    var t="";
    arr.push("<p>"+txt.value+"</p>");
    for (let i = 0; i < arr.length; i++) {
        t+=arr[i];     
    }
    lbl.innerHTML=t;
}