import Parser from 'rd-parse';
import SeqGrammar from './grammar/SeqGrammar';

/**
 * Parses a tune written in Seq notation to a flat array of token nodes
 *
 * @param {string} input - Input text in Seq format to parse
 * @returns {array.<TokenNode>} Array of token nodes
 * @exports fromSeq
 *
 */

export const fromSeq = function(text) {
    const p = new Parser(SeqGrammar);
    return p.parse(text);
};

export default {
    fromSeq
};