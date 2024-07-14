$(document).ready(function() {
    // Fetch seat data from server
    $.get("/seats", function(data) {
        data.forEach(function(seat) {
            var seatElement = $("#" + seat.seat_id);
            seatElement.removeClass("available booked blocked").addClass(seat.status);
        });
    });

    $(".seat").on("mouseover", function() {
        if ($(this).hasClass("available")) {
            $(this).addClass("hover");
        }
    });

    $(".seat").on("mouseout", function() {
        $(this).removeClass("hover");
    });

    $(".seat").on("click", function() {
        if ($(this).hasClass("available")) {
            var seatId = $(this).attr("id");
            $.ajax({
                url: "/bookSeat",
                type: "POST",
                data: { seatId: seatId },
                success: function(response) {
                    if(response.status === "success") {
                        $("#" + seatId).removeClass("available hover").addClass("booked").text(seatId);
                    }
                    alert("Seat number " + seatId +" booked successfully");
                }
            });
        }
    });
});