"use strict";
// 여기에 코드를 작성하세요
var Job;
(function (Job) {
    Job["Knight"] = "Knight";
    Job["Archer"] = "Archer";
    Job["Mage"] = "Mage";
    Job["Priest"] = "Priest";
    Job["Thief"] = "Thief";
})(Job || (Job = {}));
console.log(Job);
