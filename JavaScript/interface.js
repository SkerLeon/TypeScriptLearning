"use strict";
//定義物件格式
var Gender;
(function (Gender) {
    Gender["man"] = "\u7537";
    Gender["woman"] = "\u5973";
})(Gender || (Gender = {}));
let Leon = {
    socialSecurityId: "A123456789",
    name: "Leon",
    age: 26,
    gender: Gender.man,
    isMarry: false,
    dog: [
        {
            id: 1,
            name: "牧牧",
            age: 10,
            gender: Gender.woman
        },
        {
            id: 2,
            name: "柯柯",
            age: 5,
            gender: Gender.man
        }
    ]
};
//定義函式格式
