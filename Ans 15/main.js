var guests = ["Ahmed", "Faisal", "Ayyan"];
var unableToAttend = "Ayyan";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Usman";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
