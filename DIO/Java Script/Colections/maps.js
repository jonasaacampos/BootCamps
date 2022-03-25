const getAdmins = (map) => {
   let admins = [];

   for ([key, value] of map) {
      if (value === "Admin") {
         admins.push(key);
      }

   }

   return admins;
}

const users = new Map();

users.set("Luiz", "Admin");
users.set("Jonas", "user");
users.set("Tiara", "user");

console.log(getAdmins(users));
