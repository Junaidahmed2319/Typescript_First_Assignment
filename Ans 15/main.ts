let guests: string[] = ["Ahmed", "Faisal", "Ayyan"];

let unableToAttend = "Ayyan";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest = "Usman";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});