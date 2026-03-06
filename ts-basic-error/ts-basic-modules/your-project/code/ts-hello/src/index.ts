// import { safeDiv } from "./safeMath";

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


import { safeDiv } from "./safeMath";

try {
    console.log("safeDiv(10, 2)=", safeDiv(10, 2));
    console.log("safeDiv(10, 0=", safeDiv(10, 0));
} catch (e: unknown) {
    if (e instanceof Error) {
        console.log("error:", e.message);
    } else {
        console.log("unknown error");
    }
} finally {
    console.log("done");
}