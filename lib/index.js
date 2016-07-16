'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromSeq = fromSeq;

var _rdParse = require('rd-parse');

var _rdParse2 = _interopRequireDefault(_rdParse);

var _SeqGrammar = require('./grammar/SeqGrammar');

var _SeqGrammar2 = _interopRequireDefault(_SeqGrammar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function flattenLinkedList(token) {
    var tokens = [];
    while (token != null) {
        if (token.name) {
            tokens.push({
                name: token.name,
                value: token.value
            });
        }
        token = token.next;
    }
    return tokens;
}

/**
 * Parses a tune written in Seq notation to a flat array of token nodes
 *
 * @param {string} input - Input text in Seq format to parse
 * @returns {array.<TokenNode>} Array of token nodes
 * @exports fromSeq
 *
 */

function fromSeq(text) {
    var p = new _rdParse2.default(_SeqGrammar2.default);
    return flattenLinkedList(p.parse(text)[0]);
};

exports.default = {
    fromSeq: fromSeq
};