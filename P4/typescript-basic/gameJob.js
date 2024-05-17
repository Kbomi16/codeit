"use strict";
// 여기에 코드를 작성하세요
var Job;
(function (Job) {
    Job[Job["Knight"] = 0] = "Knight";
    Job[Job["Archer"] = 1] = "Archer";
    Job[Job["Mage"] = 2] = "Mage";
    Job[Job["Priest"] = 3] = "Priest";
    Job[Job["Thief"] = 4] = "Thief";
})(Job || (Job = {}));
console.log(Job);
