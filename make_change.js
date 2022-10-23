var $ = function(id) {
    return document.getElementById(id);
};

function processEntry() {
    if (!($("cents").value >= 0 && $("cents").value <= 99)) {
        alert("You must enter a value between 0 - 99");
        $("cents").value = '';
    }
    else {
        makeChange($("cents").value)
    }
}

function makeChange(cents) {
    $("quarters").value = (cents/25|0)
    cents = cents % 25
    $("dimes").value = (cents/10|0)
    cents = cents % 10
    $("nickels").value = (cents/5|0)
    $("pennies").value = cents % 5
}