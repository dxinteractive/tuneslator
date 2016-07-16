import Parser from 'rd-parse';
import SeqGrammar from './grammar/SeqGrammar';

function flattenLinkedList(token) {
    var tokens = [];
    while(token != null) {
        if(token.name) {
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

export function fromSeq(text) {
    const p = new Parser(SeqGrammar);
    return flattenLinkedList(p.parse(text)[0]);
};

export default {
    fromSeq
};