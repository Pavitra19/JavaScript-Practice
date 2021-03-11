function defangedString(address) {
    var defang = address.split(".").join("[.]");
    console.log(defang);
}