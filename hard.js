// ---------create requierd variable--------

let gameHeight = window.innerHeight;
let gameWidth = window.innerWidth;
let airBallonColor = ['orange', 'purple', 'gold'];
let count = 0;
let tmr = document.getElementById('tmr');
let timer = 25;
let winVar = 0;

//         window.addEventListener("load",function(){
//  let gameHeight =  window.innerHeight;
//  let gameWidth = window.innerWidth;
//  let mTop = Math.floor(Math.random()*gameHeight);
//  let mLeft = Math.floor(Math.random()*gameWidth);

//  console.log(gameHeight)
//             document.querySelectorAll('.fab').forEach(item => {
//             item.addEventListener('click', event => {
//                 //handle click

//                 item.classList.add("a");
//                 count++;
//                 document.getElementById('scoreboard').innerHTML = count;
//     console.log(count);
//   })

// })
//})

// --------Create Balloon------------

let inter = setInterval(function () {
    mColorCode = Math.floor(Math.random() * 3);
    mTop = Math.floor(Math.random() * gameHeight);
    mLeft = Math.floor(Math.random() * gameWidth);
    let data = document.createElement('i');
    data.classList.add('fab', 'fa-fly', 'BlittleUP');
    data.style.position = 'absolute';
    data.style.right = mLeft + 'px';
    data.style.top = mTop + 'px';
    data.style.color = airBallonColor[mColorCode];
    document.body.appendChild(data);
    // console.log(`Height : ${mTop} Width: ${mLeft}`);
    console.log(data.style.top);
    // ---------Game Over Rule------------

    // if (data.classList.length('BlittleUP')) {
    //     alert('Game over');
    // }

    // ---------Events On Click Balloon-------
    data.addEventListener('click', function () {
        this.classList.add('a');
        count++;
        document.getElementById('scoreboard').innerHTML = count;
        // ----------Game Winning Rule----------
        if (count >= 25) {
            winRule();
            clearInterval(this);
            winVar = 1;
        }
    });
}, 700);

// -----------Diamond Creating Code---------
let gem = setInterval(function () {
    mTop = Math.floor(Math.random() * gameHeight);
    mLeft = Math.floor(Math.random() * gameWidth);
    let data = document.createElement('i');
    data.classList.add('fas', 'fa-gem', 'BlittleUP');
    data.style.position = 'absolute';
    data.style.right = mLeft + 'px';
    data.style.top = mTop + 'px';
    data.style.color = airBallonColor[mColorCode];
    document.body.appendChild(data);

    // --------Game Over Rule----------
    // if (data < window.innerHeight) {
    //     alert('Game over');
    //     clearInterval(this);
    // }

    // -----------Diamond Click Events---------
    data.addEventListener('click', function () {
        this.classList.add('a');
        count += 3;
        document.getElementById('scoreboard').innerHTML = count;
        // -----------Game Winning Rule----------
        if (count >= 25) {
            winRule();
            clearInterval(this);
            winVar = 1;
        }
    });
}, 7000);

// ---------Timer--------
let tem = setInterval(function () {
    document.getElementById('tmr').innerHTML = timer;
    timer--;
}, 1000);

// ----------Stop Timer-----------
setTimeout(function () {
    clearInterval(tem);
    timeAlert();
}, 27000);

// --------junk code----------
// if(count==20){
//     alert("You won")
// } not working

// if(tem.timer<=0){
//         clearInterval(tem)
//     } not in use

// -------Stop Balloon---------
// setTimeout(function () {
//     clearInterval(inter);
// }, 20000);

// -------Win Alert-------
function winRule() {
    // let box = alert( 
    //     'congratulations You Win All Rounds'
    // );
    // if (box == true) {
    //     window.open('home.html','_self');
    // } else {
    //     window.open('home.html','_self');
    // }
    swal({
        text: "Congratulations! You Win All Rounds",
        icon: "success",
        closeOnEsc: false,
        closeOnClickOutside: false,
    })
    .then((value) => {
            switch (value) {
                default:
                window.open('index.html', '_self');
            }
        });
}
// ---------Time over Alert----------
function timeAlert() {
    // let box = confirm(
    //     'Time Over\n Do You Want To Play Again this Round? \n Click OK to Play Again this Round Or \n CANCEL To Back Home Page'
    // );
    // if (box == true) {
    //     window.open('hard.html', '_self');
    // } else {
    //     window.open('home.html', '_self');
    // }

    // Sweet Alert Box
    if(winVar === 0){
    swal("Oops! Time Over :( \n Do You Want To Play Again this Round?", {
        icon: "error",
        closeOnEsc: false,
        closeOnClickOutside: false,
        buttons: {
            cancel: "No, Back to home",
            Yes: true,
        },
    })
        .then((value) => {
            switch (value) {

                case "Yes":
                window.open('hard.html', '_self');
                    break;

                default:
                window.open('index.html', '_self');
            }
        });
    }
}
