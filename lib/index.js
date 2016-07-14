'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromSeq = undefined;

var _rdParse = require('rd-parse');

var _rdParse2 = _interopRequireDefault(_rdParse);

var _SeqGrammar = require('./grammar/SeqGrammar');

var _SeqGrammar2 = _interopRequireDefault(_SeqGrammar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parses a tune written in Seq notation to a flat array of token nodes
 *
 * @param {string} input - Input text in Seq format to parse
 * @returns {array.<TokenNode>} Array of token nodes
 * @exports fromSeq
 *
 */

var fromSeq = exports.fromSeq = function fromSeq(text) {
    var p = new _rdParse2.default(_SeqGrammar2.default);
    return p.parse(text);
};

exports.default = {
    fromSeq: fromSeq
};