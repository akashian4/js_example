
let submit1 = () => {
    var paragraph1 = document.getElementById("p1");
    paragraph1.innerHTML = "Optimal";

    var br = document.createElement("br");
    paragraph1.appendChild(br);

    let page_fault = 0;

    var frames = document.getElementById("frames").value;
    var frames_arr = new Array();
    frames_arr.length = frames;

    var address = document.getElementById("address").value;
    var address_arr = address.split(" ");

    var show_frame = (a) => {
        var br = document.createElement("br");
        paragraph1.appendChild(br);
        for (let index = 0; index < a.length; index++) {
            if (a[index] == null) {
                let text = document.createTextNode(" - ");
                paragraph1.appendChild(text);
                continue;
            }
            let text = document.createTextNode(" " + a[index] + " ");
            paragraph1.appendChild(text);
        }
    }

    var get_loc = (n) => {
        let arr2 = new Array();
        arr2.length = frames_arr.length;
        for (let i = 0; i < frames_arr.length; i++) {

            // if (search(frames_arr, frames_arr[i])) {
            for (let index = n; index < address_arr.length; index++) {
                if (frames_arr[i] == address_arr[index]) {
                    arr2[i] = index;
                    break;
                }

            }
            // }else{
            //     arr2[i]=10000;
            // }

        }


        var max = -10000;
        var answer;
        for (let j = 0; j < arr2.length; j++) {
          
            if (arr2[j] == null) {
                return j;
            }
            if (arr2[j] > max) {
                max = arr2[j];
                answer = j;
            }
        }
       

        return answer;
    }
    var search = (arra, a) => {
        for (let index = 0; index < arra.length; index++) {
            if (arra[index] == a) {
                return true;
            }
        }
        return false;
    }



    for (let index = 1; address_arr.length >= index; index++) {

        if (index <= frames && frames_arr[index - 1] == null) {
            frames_arr[index - 1] = address_arr[index - 1];
            show_frame(frames_arr);
            page_fault++;
            continue;
        }
        if (search(frames_arr, address_arr[index - 1])) {
            show_frame(frames_arr);
            continue;
        } else {
            page_fault++;
            frames_arr[get_loc(index - 1)] = address_arr[index - 1];
            show_frame(frames_arr);
        }
    }
    var br = document.createElement("br");
    paragraph1.appendChild(br);
    let text = document.createTextNode("page fault = " + page_fault);
    paragraph1.appendChild(text);


}
var br = document.createElement("br");
let submit2 = () => {

    var paragraph2 = document.getElementById("p2");
    paragraph2.innerHTML = "FIFO";
    var br = document.createElement("br");
    paragraph2.appendChild(br);

    let page_fault = 0;

    var frames = document.getElementById("frames").value;
    var frames_arr = new Array();
    frames_arr.length = frames;

    var address = document.getElementById("address").value;
    var address_arr = address.split(" ");

    var show_frame = (a) => {
        var br = document.createElement("br");
        paragraph2.appendChild(br);
        for (let index = 0; index < a.length; index++) {
            if (a[index] == null) {
                let text = document.createTextNode(" - ");
                paragraph2.appendChild(text);
                continue;
            }
            let text = document.createTextNode(" " + a[index] + " ");
            paragraph2.appendChild(text);
        }
    }

    var set_frame = (frame) => {

        for (let i = 0; i < frames_arr.length; i++) {
            if (i == frames_arr.length - 1) {
                frames_arr[i] = frame;
                break;
            }
            frames_arr[i] = frames_arr[i + 1];
        }

    }

    var search = (arra, a) => {
        for (let index = 0; index < arra.length; index++) {
            if (arra[index] == a) {
                return true;
            }
        }
        return false;
    }



    for (let index = 1; address_arr.length >= index; index++) {

        if (index <= frames && frames_arr[index - 1] == null) {
            frames_arr[index - 1] = address_arr[index - 1];
            show_frame(frames_arr);
            page_fault++;
            continue;
        }
        if (search(frames_arr, address_arr[index - 1])) {
            show_frame(frames_arr);
            continue;
        } else {
            page_fault++;
            set_frame(address_arr[index - 1]);
            show_frame(frames_arr);
        }
    }
    var br = document.createElement("br");
    paragraph2.appendChild(br);
    let text = document.createTextNode("page fault = " + page_fault);
    paragraph2.appendChild(text);


}

let submit3 = () => {

    var paragraph3 = document.getElementById("p3");
    paragraph3.innerHTML = "LRU";
    var br = document.createElement("br");
    paragraph3.appendChild(br);
    let page_fault = 0;

    var frames = document.getElementById("frames").value;
    var frames_arr = new Array();
    frames_arr.length = frames;

    var address = document.getElementById("address").value;
    var address_arr = address.split(" ");

    var show_frame = (a) => {
        var br = document.createElement("br");
        paragraph3.appendChild(br);
        for (let index = 0; index < a.length; index++) {
            if (a[index] == null) {
                let text = document.createTextNode(" - ");
                paragraph3.appendChild(text);
                continue;
            }
            let text = document.createTextNode(" " + a[index] + " ");
            paragraph3.appendChild(text);
        }
    }

    var get_loc = (n) => {
        let arr2 = new Array();
        arr2.length = frames_arr.length;
        for (let i = 0; i < frames_arr.length; i++) {


            // if (search(frames_arr, frames_arr[i])) {
            for (let index = n; index > 0; index--) {
                if (frames_arr[i] == address_arr[index]) {
                    arr2[i] = index;
                    break;
                }

            }
            // }else{
            //     arr2[i]=10000;
            // }

        }


        var min = 10000;
        var answer;
        for (let j = 0; j < arr2.length; j++) {
          
            if (arr2[j] == null) {
                return j;
            }
            if (arr2[j] < min) {
                min = arr2[j];
                answer = j;
            }
        }

        return answer;
    }
    var search = (arra, a) => {
        for (let index = 0; index < arra.length; index++) {
            if (arra[index] == a) {
                return true;
            }
        }
        return false;
    }



    for (let index = 1; address_arr.length >= index; index++) {

        if (index <= frames && frames_arr[index - 1] == null) {
            frames_arr[index - 1] = address_arr[index - 1];
            show_frame(frames_arr);
            page_fault++;
            continue;
        }
        if (search(frames_arr, address_arr[index - 1])) {
            show_frame(frames_arr);
            continue;
        } else {
            page_fault++;
            frames_arr[get_loc(index - 1)] = address_arr[index - 1];
            show_frame(frames_arr);
        }
    }
    var br = document.createElement("br");
    paragraph3.appendChild(br);
    let text = document.createTextNode("page fault = " + page_fault);
    paragraph3.appendChild(text);


}