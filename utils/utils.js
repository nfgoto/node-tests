module.exports.add = (a, b) => a + b;


module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000); // by default mocha assumes that >2000 is fail
};


module.exports.square = (x) => x * x;

module.exports.asyncSquare = (x, callback) => {
    setTimeout(() => {
        callback(x*x);
    }, 1000);
};

module.exports.setName = (user, fullname) => {
    let names = fullname.split(' ');
    user.fname = names[0];
    user.lname = names[1];
    return user;
};