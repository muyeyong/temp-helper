"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timeOutPromise = (time = 1000) => {
    new Promise((_resolve, reject) => {
        setTimeout(() => {
            reject(new Error('request timeout'));
        }, time);
    });
};
exports.default = timeOutPromise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZU91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxzL3RpbWVPdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLGNBQWMsR0FBRyxDQUFFLElBQUksR0FBRyxJQUFJLEVBQUcsRUFBRTtJQUNyQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUM3QixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osTUFBTSxDQUFFLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtRQUN6QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDWixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQUNELGtCQUFlLGNBQWMsQ0FBQSJ9