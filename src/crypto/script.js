// const crypto = require("crypto");

// const md5sum = crypto.createHash("md5");
// let str = "Hello";

// const res = md5sum.update(str).digest("hex");
// console.log(res);

// const hashingSecret = "ARandomSecretKey";
// const plainText = "Hello World!";

// const hashedStr = crypto
//   .createHmac("sha256", hashingSecret)
//   .update(plainText)
//   .digest("hex");

// console.log(hashedStr);

const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

// bcrypt.genSalt(saltRounds, function (err, salt) {
//   bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
//     // Store hash in your password DB.
//     console.log(hash);
//   });
// });

let hashedPwd;

bcrypt.genSalt(saltRounds, function (err, salt) {
  bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
    hashedPwd = hash;
    // Store hash in your password DB.
  });
});

console.log(hashedPwd);

bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
  console.log(hash);
  // Store hash in your password DB.
});

// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
  // result == true
});
bcrypt.compare(someOtherPlaintextPassword, hash, function (err, result) {
  // result == false
});
