'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Seq = exports.SeqTokenList = exports.NoteList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rdParse = require('rd-parse');

var _rdParse2 = _interopRequireDefault(_rdParse);

var _SeqGrammar = require('./grammar/SeqGrammar');

var _SeqGrammar2 = _interopRequireDefault(_SeqGrammar);

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var NoteList = exports.NoteList = function () {
    function NoteList(noteList) {
        _classCallCheck(this, NoteList);

        this.data = (0, _immutable.fromJS)(noteList);
    }

    _createClass(NoteList, [{
        key: 'toTokens',
        value: function toTokens() {
            // not implemented yet
            return "?";
        }
    }, {
        key: 'toJS',
        value: function toJS() {
            return this.data.toJS();
        }
    }]);

    return NoteList;
}();

var SeqTokenList = exports.SeqTokenList = function () {
    function SeqTokenList(seqTokenList) {
        _classCallCheck(this, SeqTokenList);

        // put validation in here
        this.data = (0, _immutable.fromJS)(seqTokenList);
    }

    _createClass(SeqTokenList, [{
        key: 'toSeq',
        value: function toSeq() {
            // not implemented yet
            return "?";
        }
    }, {
        key: 'toNotes',
        value: function toNotes() {
            var noteList = this.data.toJS();
            return new NoteList(noteList);
        }
    }, {
        key: 'toJS',
        value: function toJS() {
            return this.data.toJS();
        }
    }]);

    return SeqTokenList;
}();

var Seq = exports.Seq = function () {
    function Seq(seqString) {
        _classCallCheck(this, Seq);

        this.data = seqString;
    }

    _createClass(Seq, [{
        key: 'toTokens',
        value: function toTokens() {
            var parser = new _rdParse2.default(_SeqGrammar2.default);
            var tokenArray = flattenLinkedList(parser.parse(this.data)[0]);
            return new SeqTokenList(tokenArray);
        }
    }, {
        key: 'toNotes',
        value: function toNotes() {
            return this.toTokens().toNotes();
        }
    }, {
        key: 'toJS',
        value: function toJS() {
            return this.data;
        }
    }]);

    return Seq;
}();

function fromSeq(seqString) {
    return new Seq(seqString);
}

exports.default = {
    fromSeq: fromSeq
};