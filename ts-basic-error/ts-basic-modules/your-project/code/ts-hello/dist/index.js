"use strict";
// import { safeDiv } from "./safeMath";
Object.defineProperty(exports, "__esModule", { value: true });
// try {
//     console.log("safeDiv(10, 2)=", safeDiv(10, 2));
//     console.log("safeDiv(10, 0)=", safeDiv(10, 0));
// } catch (e: unknown) {
//     if (e instanceof Error) {
//         console.log("error:", e.message);
//     } else {
//         console.log("unknown error");
//     }
// } finally {
//     console.log("done");
// }
const safeMath_1 = require("./safeMath");
try {
    console.log("safeDiv(10, 2)=", (0, safeMath_1.safeDiv)(10, 2));
    console.log("safeDiv(10, 0=", (0, safeMath_1.safeDiv)(10, 0));
}
catch (e) {
    if (e instanceof Error) {
        console.log("error:", e.message);
    }
    else {
        console.log("unknown error");
    }
}
finally {
    console.log("done");
}
//# sourceMappingURL=index.js.map