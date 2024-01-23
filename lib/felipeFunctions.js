export const PI = Math.PI;

export function soma(a, b) {
    return a + b;
}

export function subtrai(a, b) {
    return a - b;
}

// export function somaAsync(a, b) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return resolve (a + b);
//         }, 2000);
//     })
// }

export const somaAsync = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve (a + b);
        }, 2000);
    })
}

