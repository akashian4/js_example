var demo = document.getElementById("demo");
var whatWin = document.getElementById("whatWin");
var counter = document.getElementById("counter");

var win;
var winPlayer = 0;

var wincomputer = 0;

var rand = (i) => {
    var x = Math.floor(Math.random() * 10);
    if (x % 2 == 0) {
        win = "2";
    } else {
        win = "1";
    }

    var text;
    if (i == win) {
        // text = document.createTextNode("player win");
        text = "player win";
        winPlayer++;
        whatWin.style.backgroundColor = "green";
    } else {
        // text = document.createTextNode("computer win");
        text = "computer win";
        wincomputer++;
        whatWin.style.backgroundColor = "red";

    }

    whatWin.innerHTML = text;
    counter.innerHTML = "Player " + winPlayer + " win and computer " + wincomputer + " win";

}

//////////////////////////////////////////////

/////////////////////////////////////////////

var showAnswer = document.getElementById("showAnswer");
var question = document.getElementById("question");

var randomAnswer = () => {
    var x = Math.floor(Math.random() * 10);
    if (x % 3 == 0) {
        return "fuck";
    } else if (x % 3 == 1) {
        return "oh yes baby";
    } else {
        return "no,i am sorry!!";
    }
}

var ask = () => {
    var t = question.value + "   " + randomAnswer();
    showAnswer.innerHTML = t;
}

//////////////////////////////////////////////

/////////////////////////////////////////////

var num0 = document.getElementById("num0");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var Gestures = document.getElementById("Gestures");

var gestures = 0;

var y = Math.floor(Math.random() * 10000);
var num0y = y % 10;
var num1y = Math.floor((y % 100) / 10);
var num2y = Math.floor((y % 1000) / 100);
var num3y = Math.floor((y % 10000) / 1000);

console.log(y);
var check = () => {
    gestures++;
    compare(num0.value, num0y, num0);
    compare(num1.value, num1y, num1);
    compare(num2.value, num2y, num2);
    compare(num3.value, num3y, num3);
    Gestures.innerHTML = "Gestures " + gestures;
}

var compare = (a, b, e) => {
    e.style.color = "white";
    if (a == b) {
        e.style.backgroundColor = "green";
    } else if (a > b) {
        e.style.backgroundColor = "red";
    } else {
        e.style.backgroundColor = "blue";
    }
}


//////////////////////////////////////////////

/////////////////////////////////////////////

var word = document.getElementById("word");
var message = document.getElementById("message");

var harekat = 0;

var arr = ["ali", "akbar", "hasan", "abolfazl", "abozar", "maryam", "bahram", "mahan", "mohammad"];
var selectedName = arr[Math.floor(Math.random() * arr.length)];

var randd = (array) => {
    for (let i = 0; i < array.length; i++) {
        var j = Math.floor(Math.random() * array.length);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array.join("");
}

var guidance = randd(selectedName.split(""));

message.innerHTML = guidance;

var play = () => {
    harekat++;
    if (word.value == selectedName) {
        message.innerHTML = "win " + harekat + " harekat";
    } else {
        message.innerHTML = guidance + "<br>" + "try again   " + harekat + " harekat ";
    }

}


//////////////////////////////////////////////

/////////////////////////////////////////////

var date = document.getElementById("date");
var remainDate = document.getElementById("remainDate");

// var year;
// var month;
// var day;

// var nowYear=now.getFullYear();
// var nowMonth=now.getMonth();
// var nowDay=now.getDate();
// console.log(nowYear);
// console.log(nowMonth);
// console.log(nowDay);

// console.log(date.value.split("-"));
// yaer=date.value.split("-")[0]
// month=date.value.split("-")[1]
// day=date.value.split("-")[2]

var change = () => {
    setInterval(changeTime, 1000)
}

var changeTime = () => {
    var now = Date.parse(new Date());
    var nextTime = Date.parse(date.value);
    var result = nextTime - now;

    var second = Math.floor((result / 1000) % 60);
    var minutes = Math.floor(((result / 1000) / 60) % 60);
    var hour = Math.floor(((result / (1000 * 60 * 60)) % 24));
    var day = Math.floor(result / (1000 * 60 * 60 * 24));

    var tt = "day " + day + " hour " + hour + " minutes " + minutes + " second " + second;
    remainDate.innerHTML = tt;
}



