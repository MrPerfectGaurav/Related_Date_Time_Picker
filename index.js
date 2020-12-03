// Date Pickup Date only
setInterval(function () {  // update in every second
    let currentDate = new Date();
    if (currentDate.getHours() >= 20) {  // after 8PM
        const minPickupDate = currentDate.setDate(currentDate.getDate() + 1);
        const maxPickupDate = currentDate.setDate(currentDate.getDate() + 3);
        $('#pickupDate').datetimepicker({
            format: 'DD-MM-YYYY',
            useCurrent: false,
            minDate: minPickupDate,
            maxDate: maxPickupDate
        });
        // $('#pickupDate').data("DateTimePicker").minDate(minPickupDate);
        // $('#pickupDate').data("DateTimePicker").maxDate(maxPickupDate);
    } else {  // before 8PM
        const minPickupDate = currentDate.setDate(currentDate.getDate());
        const maxPickupDate = currentDate.setDate(currentDate.getDate() + 2);
        $('#pickupDate').datetimepicker({
            format: 'DD-MM-YYYY',
            useCurrent: false,
            minDate: minPickupDate,
            maxDate: maxPickupDate
        });
        // $('#pickupDate').data("DateTimePicker").minDate(minPickupDate);
        // $('#pickupDate').data("DateTimePicker").maxDate(maxPickupDate);
    }
}, 1000);

// Time Pickup Time only
setInterval(function () {
    let currentDate = new Date();
    if ($("#pickupDate").val() != "") {
        const pickupDate = $('#pickupDate').val().split("-");
        const date = pickupDate[0];
        if (currentDate.getDate() == date && currentDate.getHours() < 20) {
            if (currentDate.getHours() < 6) {
                const minPickupTime = new Date();
                minPickupTime.setHours(6);
                minPickupTime.setMinutes(00);
                minPickupTime.setSeconds(00);

                const maxPickupTime = new Date();
                maxPickupTime.setHours(20);
                maxPickupTime.setMinutes(00);
                maxPickupTime.setSeconds(00);

                $('#pickupTime').datetimepicker({
                    format: 'LT',
                    // useCurrent: false,
                    minDate: minPickupTime,
                    maxDate: maxPickupTime
                });
                $('#pickupTime').data("DateTimePicker").maxDate(maxPickupTime);
                $('#pickupTime').data("DateTimePicker").minDate(minPickupTime);
            } else {
                const minPickupTime = new Date();
                const maxPickupTime = new Date();
                maxPickupTime.setHours(20);
                maxPickupTime.setMinutes(00);
                maxPickupTime.setSeconds(00);

                $('#pickupTime').datetimepicker({
                    format: 'LT',
                    // useCurrent: false,
                    minDate: minPickupTime,
                    maxDate: maxPickupTime
                });
                $('#pickupTime').data("DateTimePicker").maxDate(maxPickupTime);
                $('#pickupTime').data("DateTimePicker").minDate(minPickupTime);
            }
        } else {
            const minPickupTime = new Date();
            minPickupTime.setHours(6);
            minPickupTime.setMinutes(0);
            minPickupTime.setSeconds(0);

            let maxPickupTime = new Date();
            maxPickupTime.setHours(20);
            maxPickupTime.setMinutes(00);
            maxPickupTime.setSeconds(00);

            $('#pickupTime').datetimepicker({
                format: 'LT',
                // useCurrent: false,
                minDate: minPickupTime,
                maxDate: maxPickupTime
            });
            $('#pickupTime').data("DateTimePicker").maxDate(maxPickupTime);
            $('#pickupTime').data("DateTimePicker").minDate(minPickupTime);
        }
    } else {
        const minPickupTime = new Date();
        minPickupTime.setHours(6);
        minPickupTime.setMinutes(0);
        minPickupTime.setSeconds(0);

        const maxPickupTime = new Date();
        maxPickupTime.setHours(20);
        maxPickupTime.setMinutes(00);
        maxPickupTime.setSeconds(00);

        $('#pickupTime').datetimepicker({
            format: 'LT',
            // useCurrent: false,
            minDate: minPickupTime,
            maxDate: maxPickupTime
        });
        $('#pickupTime').data("DateTimePicker").minDate(minPickupTime);
        $('#pickupTime').data("DateTimePicker").maxDate(maxPickupTime);
    }
}, 1000)

// Date Drop Date only
setInterval(function () {
    if ($("#pickupDate").val() != "") {
        const pickupDate = $('#pickupDate').val().split("-");
        const currentDate = new Date();
        const miliseconds = currentDate.getMilliseconds();
        const seconds = currentDate.getSeconds();
        const minutes = currentDate.getMinutes();
        const hours = currentDate.getHours();
        const day = pickupDate[0];
        const month = pickupDate[1];
        const year = pickupDate[2];
        const minDropDate = new Date(year, month - 1, day, hours, minutes, seconds, miliseconds);
        const maxDropDate = new Date(minDropDate.getTime() + 10 * 24 * 60 * 60 * 1000);

        $('#dropDate').datetimepicker({
            format: 'DD-MM-YYYY',
            useCurrent: false,
            minDate: minDropDate,
            maxDate: maxDropDate
        });
        $('#dropDate').data("DateTimePicker").minDate(minDropDate);
        $('#dropDate').data("DateTimePicker").maxDate(maxDropDate);
    } else {
        const currentDate = new Date();
        const minDropDate = new Date(currentDate.getTime());
        const maxDropDate = new Date(minDropDate.getTime() + 10 * 24 * 60 * 60 * 1000);

        $('#dropDate').datetimepicker({
            format: 'DD-MM-YYYY',
            useCurrent: false,
            minDate: minDropDate,
            maxDate: maxDropDate
        });
        $('#dropDate').data("DateTimePicker").minDate(minDropDate);
        $('#dropDate').data("DateTimePicker").maxDate(maxDropDate);
    }
}, 1000)

// Time Drop Time only
setInterval(function () {
    if ($("#pickupDate").val() != "" && $("#dropDate").val() != "" && $("#pickupDate").val() == $("#dropDate").val()) {
        const pickupTime = $("#pickupTime").val();
        let splitPickupTime = pickupTime.split(":");
        splitPickupTime = [splitPickupTime[0], ...splitPickupTime[1].split(" ")];
        if (splitPickupTime[2] == "AM") {
            const minDropTime = new Date();
            minDropTime.setHours(parseInt(splitPickupTime[0]));
            minDropTime.setHours(minDropTime.getHours() + 1);
            minDropTime.setMinutes(parseInt(splitPickupTime[1]));
            minDropTime.setSeconds(0);

            const maxDropTime = new Date();
            maxDropTime.setHours(23);
            maxDropTime.setMinutes(00);
            maxDropTime.setSeconds(00);

            $('#dropTime').datetimepicker({
                format: 'LT',
                useCurrent: false,
                minDate: minDropTime,
                maxDate: maxDropTime
            });

            $('#dropTime').data("DateTimePicker").minDate(minDropTime);
            $('#dropTime').data("DateTimePicker").maxDate(maxDropTime);
        } else if (splitPickupTime[2] == "PM") {
            if (splitPickupTime[0] == "12") {
                const minDropTime = new Date();
                minDropTime.setHours(parseInt(splitPickupTime[0]));
                minDropTime.setHours(minDropTime.getHours() + 1);
                minDropTime.setMinutes(parseInt(splitPickupTime[1]));
                minDropTime.setSeconds(0);

                const maxDropTime = new Date();
                maxDropTime.setHours(23);
                maxDropTime.setMinutes(00);
                maxDropTime.setSeconds(00);

                $('#dropTime').datetimepicker({
                    format: 'LT',
                    useCurrent: false,
                    minDate: minDropTime,
                    maxDate: maxDropTime
                });

                $('#dropTime').data("DateTimePicker").minDate(minDropTime);
                $('#dropTime').data("DateTimePicker").maxDate(maxDropTime);
            } else {
                const minDropTime = new Date();
                minDropTime.setHours(parseInt(splitPickupTime[0] + 12));
                minDropTime.setHours(minDropTime.getHours() + 1);
                minDropTime.setMinutes(parseInt(splitPickupTime[1]));
                minDropTime.setSeconds(0);

                const maxDropTime = new Date();
                maxDropTime.setHours(23);
                maxDropTime.setMinutes(00);
                maxDropTime.setSeconds(00);

                $('#dropTime').datetimepicker({
                    format: 'LT',
                    useCurrent: false,
                    minDate: minDropTime,
                    maxDate: maxDropTime
                });

                $('#dropTime').data("DateTimePicker").minDate(minDropTime);
                $('#dropTime').data("DateTimePicker").maxDate(maxDropTime);
            }
        }
    } else if ($("#pickupDate").val() != "" && $("#dropDate").val() != "" && $("#pickupDate").val() != $("#dropDate").val()) {
        const minDropTime = new Date();
        minDropTime.setHours(6);
        minDropTime.setMinutes(0);
        minDropTime.setSeconds(0);

        const maxDropTime = new Date();
        maxDropTime.setHours(23);
        maxDropTime.setMinutes(00);
        maxDropTime.setSeconds(00);

        $('#dropTime').datetimepicker({
            format: 'LT',
            useCurrent: false,
            maxDate: maxDropTime,
            minDate: minDropTime
        });
        $('#dropTime').data("DateTimePicker").maxDate(maxDropTime);
        $('#dropTime').data("DateTimePicker").minDate(minDropTime);
    } else {
        const minDropTime = new Date();
        minDropTime.setHours(6);
        minDropTime.setMinutes(00);
        minDropTime.setSeconds(00);

        const maxDropTime = new Date();
        maxDropTime.setHours(23);
        maxDropTime.setMinutes(00);
        maxDropTime.setSeconds(00);

        $('#dropTime').datetimepicker({
            format: 'LT',
            useCurrent: false,
            minDate: minDropTime,
            maxDate: maxDropTime
        });
        $('#dropTime').data("DateTimePicker").minDate(minDropTime);
        $('#dropTime').data("DateTimePicker").maxDate(maxDropTime);
    }
}, 1000);

function getPickup() {
    if ($("#pickupDate").val() !== "") {
        const pickupDate = $('#pickupDate').val().split("-");
        const pickupTime = $('#pickupTime').val();
        const day = pickupDate[0];
        const month = pickupDate[1];
        const year = pickupDate[2];
        const dateStr = month + " " + day + " " + year + " " + pickupTime;

        const date = new Date(dateStr);
        return date;
    }
    return false;
}

function getDrop() {
    if ($("#dropDate").val() !== "") {
        const dropDate = $('#dropDate').val().split("-");
        const dropTime = $('#dropTime').val();
        const day = dropDate[0];
        const month = dropDate[1];
        const year = dropDate[2];
        const dateStr = month + " " + day + " " + year + " " + dropTime;

        const date = new Date(dateStr);
        return date;
    }
    return false;
}

function getDuration() {
    if ($("#pickupDate").val() !== "" && $("#dropDate").val() !== "") {
        const pickupDate = $('#pickupDate').val().split("-");
        const pickupTime = $('#pickupTime').val();
        const pickupDay = pickupDate[0];
        const pickupMonth = pickupDate[1];
        const pickupYear = pickupDate[2];
        const pickupDateStr = pickupMonth + " " + pickupDay + " " + pickupYear + " " + pickupTime;

        const pickupDate1 = new Date(pickupDateStr);

        const dropDate = $('#dropDate').val().split("-");
        const dropTime = $('#dropTime').val();
        const dropDay = dropDate[0];
        const dropMonth = dropDate[1];
        const dropYear = dropDate[2];
        const dropDateStr = dropMonth + " " + dropDay + " " + dropYear + " " + dropTime;

        const dropDate1 = new Date(dropDateStr);

        const timeDifference = dropDate1.getTime() - pickupDate1.getTime();
        const dayDifference = timeDifference / (1000 * 60);
        return ConvertMinutes(dayDifference);;
    }
}

function ConvertMinutes(num) {
    d = Math.floor(num / 1440); // 60*24
    h = Math.floor((num - (d * 1440)) / 60);
    m = Math.round(num % 60);

    if (d > 0) {
        return (d + " days, " + h + " hours, " + m + " minutes");
    } else {
        return (h + " hours, " + m + " minutes");
    }
}