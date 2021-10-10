
let submit1 = () => {
    var p = document.getElementById("p");
    var gramer = document.getElementById("gramer").value;
    var gramer_arr = gramer.split("\n");

    for (let i = 0; i < gramer_arr.length; i++) {
        if (gramer_arr[i].length == 4) {

            var arr = gramer_arr[i].split("->");
            for (let j = 0; j < gramer_arr.length; j++) {
                if (gramer_arr[j].indexOf(arr[1]) == 0) {
                    var arr2 = gramer_arr[j].split("->");
                    arr[1] = arr2[1];
                    var rep = arr[0] + "->" + arr[1];
                    gramer_arr[i]=rep;
                }
            }
        }
    }
    p.innerHTML="";
    for (let i = 0; i < gramer_arr.length; i++) {
        
        let text = document.createTextNode(gramer_arr[i]);
        p.appendChild(text);
        var br = document.createElement("br");
        p.appendChild(br);       
    }


}
