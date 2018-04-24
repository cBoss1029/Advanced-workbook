const {PI} = Math;

module.exports.area = (r) => PI * r ** 2 ; //do not need to type 'module.' before 'exports'

exports.circumference = (r) => 2 * PI * r;