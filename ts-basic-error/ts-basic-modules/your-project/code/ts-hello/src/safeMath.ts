// export function safeDiv(x: number, y: number): number {
//     if (y === 0) {
//         throw new Error("divide by zero");
//     }
//     return x / y;
// }


export function safeDiv(x:number, y:number) :number {
    if (y === 0) {
        throw new Error("mod by zero");
    }
    return x % y;
}