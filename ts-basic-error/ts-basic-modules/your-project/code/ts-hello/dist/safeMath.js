"use strict";
// export function safeDiv(x: number, y: number): number {
//     if (y === 0) {
//         throw new Error("divide by zero");
//     }
//     return x / y;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.safeDiv = safeDiv;
function safeDiv(x, y) {
    if (y === 0) {
        throw new Error("mod by zero");
    }
    return x % y;
}
//# sourceMappingURL=safeMath.js.map