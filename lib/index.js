"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Parses a tune written in Seq notation to a flat array of token nodes
 *
 * @param {string} input - Input text in Seq format to parse
 * @returns {array} Array of token nodes
 * @exports fromSeq
 *
 */

var fromSeq = exports.fromSeq = function fromSeq(input) {
    return input + "!";
};

exports.default = {
    fromSeq: fromSeq
};