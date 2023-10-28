$(".icon").click(function () {
    $(".main").css('visibility', 'visible');
    setTimeout(function () {
        $(".top").css("visibility", "visible")
    }, 800);

    setTimeout(function () {
        $(".card").css("visibility", "visible")
        $(".droid").css("visibility", "visible")
    }, 2000);

    setTimeout(function () {
        $("#card-content").css("visibility", "visible")
    }, 3000);

    setTimeout(function () {
        $(".card1").css("visibility", "visible")
    }, 4000);

    setTimeout(function () {
        $(".card2").css("visibility", "visible")
    }, 5000);

    setTimeout(function () {
        $(".card3").css("visibility", "visible")
    }, 6000);

    setTimeout(function () {
        $(".card4").css("visibility", "visible")
    }, 7000);

    setTimeout(function () {
        $(".card5").css("visibility", "visible")
    }, 8000)
})

