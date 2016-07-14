/**
 * Parses a tune written in Seq notation to a flat array of token nodes
 *
 * @param {string} input - Input text in Seq format to parse
 * @returns {array} Array of token nodes
 * @exports fromSeq
 *
 */

export const fromSeq = function(input) {
    return input+"!";
};

export default {
    fromSeq
};