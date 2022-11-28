export let sumArray = [];
export let minArray = [];
export let restArray = [];
export let sumTotal = 0;

export let minTotal

export function sumArrays(array, array2){
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < array.length; i++) {
        sum1 += array[i];
    }
    for (let i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    }
    return sum1 + sum2;
}