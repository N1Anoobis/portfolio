let flag = false;
let innerHight = null;
let returnHight = null;

function showabout() {
    $("#about_container").css("display", "inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function () {
        $("#about_container").removeClass("animated slideInLeft");
    }, 200);
}

function closeabout() {
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function () {
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display", "none");
    }, 100);
}

function showwork() {
    $("#work_container").css("display", "inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function () {
        $("#work_container").removeClass("animated slideInRight");
    }, 200);
}

function closework() {
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function () {
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display", "none");
    }, 200);
}

function showcontact() {
    innerHight = window.innerHeight;
    switchFlag();
    console.log(innerHight)
    
    $("#contact_container").css("display", "inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function () {
        $("#contact_container").removeClass("animated slideInUp");
    }, 200);
}

function closecontact() {
    returnHight = window.innerHeight;
    switchFlag();
    console.log(returnHight)
    preventBug();
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function () {
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display", "none");
    }, 200);
}
setTimeout(function () {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function () {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
        $("#box").css("display", "none");
        $("#about").removeClass("animated fadeIn");
        $("#contact").removeClass("animated fadeIn");
        $("#work").removeClass("animated fadeIn");
    }, 1000);
}, 1500);

function switchFlag() {
    flag = !flag;
}

function preventBug() {
    innerHight === returnHight ? null : window.location.reload(false);
};

//Martix rain
window.onload = function () {
    martixRain();
};

// Horizontal and vertical window resize events.
(function () {
    var win = jQuery(window),
        prev_width = win.width(),
        prev_height = win.height();
    win.on('resize', function () {
        var width = win.width(),
            height = win.height();

        if (width !== prev_width) {
            win.trigger('hresize');
        }
        if (height !== prev_height) {
            win.trigger('vresize');
        }

        prev_width = width;
        prev_height = height;
    });
})();

$(window).on('hresize', function () {
    window.location.reload(false);
});

$(window).on('vresize', function () {
    if (flag === false) {
        window.location.reload(false)
    }
});

const martixRain = () => {

    const canvas1 = document.getElementById("canvas");
    // The getContext() method returns an object that provides methods and properties for drawing on the canvas.
    const canvasCTX = canvas1.getContext("2d");

    // making the canvas full screen
    canvas1.height = window.innerHeight;
    canvas1.width = window.innerWidth;

    // matrix characters
    let symbol = "¼µ¶±¿ÇÐØĦƔƢǄȡȹɊҖӁ‰＠ξζω□∮〓※∏卐√№↑↓→←↘↙Ψ※㊣∑╳々♀♂∞①ㄨ≡╬";

    // converting the string into an array of single characters - symbol[126]
    symbol = symbol.split("");

    const font_size = 10;
    // number of columns for the rain
    const columns = canvas1.width / font_size;

    // an array of drops - one per column
    let drops = [];

    // initialize all the drops, calculating drops number based on column number
    // setting y coordinates of all drops to 1 initially - [1, 1, 1, 1, 1, 1, 1...]
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    // drawing the characters
    function draw() {

        // set the canvas to a translucent black which fills the whole screen
        canvasCTX.fillStyle = "rgba(0, 0, 0, 0.05)";
        // context.fillRect(x, y, width, height);
        canvasCTX.fillRect(0, 0, canvas1.width, canvas1.height);

        // set the text to dark green
        canvasCTX.fillStyle = "#0F0";
        canvasCTX.font = font_size + "px arial";

        // looping over drops
        for (let i = 0; i < drops.length; i++) {

            // retrieve a random character to print
            const text = symbol[Math.floor(Math.random() * symbol.length)];

            // context.fillText(text, x, y, maxWidth);
            canvasCTX.fillText(text, i * font_size, drops[i] * font_size);

            // sending the drop back to the top randomly after it has crossed the screen
            // adding a randomness to the reset to make the drops scattered on the Y axis
            if (drops[i] * font_size > canvas1.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // incrementing y coordinate
            drops[i] += 1;

        } // end of for loop

    } // end of draw()

    setInterval(draw, 33);

}

document.getElementById("form").addEventListener("submit", reload);

function reload() {
    setTimeout(() => {
        console.log("The form was submitted");
        document.location.href = "index.html"
        // window.location.reload(false)
    }, 2000)
}