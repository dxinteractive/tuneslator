import Parser from 'rd-parse';
import SeqGrammar from './grammar/SeqGrammar';
import {fromJS, List} from 'immutable';

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

export class Tune {
    constructor(noteList) {
        this.data = fromJS(noteList);
    }

    toTokens() {
        // not implemented yet
        return "?";
    }

    toJS() {
        return this.data.toJS();
    }
}

export class SeqTokenList {
    constructor(seqTokenList) {
        // put validation in here
        this.data = fromJS(seqTokenList);
    }

    toSeq() {
        // not implemented yet
        return "?";
    }

    toNotes() {
        const tune = this.data.toJS();

        return new Tune(["???"]);
    }

    toJS() {
        return this.data.toJS();
    }
}

export class Seq {
    constructor(seqString) {
        this.data = seqString;
    }

    toTokens() {
        const parser = new Parser(SeqGrammar);
        const tokenArray = flattenLinkedList(parser.parse(this.data)[0]);
        return new SeqTokenList(tokenArray);
    }

    toNotes() {
        return this.toTokens().toNotes();
    }

    toJS() {
        return this.data;
    }
}

function fromSeq(seqString) {
    return new Seq(seqString);
}

export default {
    fromSeq
}