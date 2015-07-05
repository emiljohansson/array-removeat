"use strict";

/**
 * Removes an item from the `array` at `index`.
 *
 * @param {Array} array The array to modify.
 * @param {number} index Position where to modify the array.
 * @return {Array} array The modified array.
 * @example
 *
 * removeAt([1, 2, 3], 1)
 *
 * // => [1, 3]
 */
function removeAt(array, index) {
    if (Array.isArray(array) === false) {
        return;
    }
    array.splice(index, 1);
    return array;
}

module.exports = removeAt;
