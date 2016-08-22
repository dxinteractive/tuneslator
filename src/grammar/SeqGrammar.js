
export default function SeqGrammar(All, Any, Plus, Optional, Char, Capture) {

  // Y combinator
  var Y = function (gen) {
    return (function(f) {return f(f)})( function(f) {
      return gen(function() {return f(f).apply(null, arguments)});
    });
  }

  return Y(function(thisGrammar) {
    var whiteSpace = Plus(Char(/[ \t]/));
    var newLine = Capture(Char(/\n/), '@newline');
    var fluff = Plus(Any(whiteSpace, newLine));
    var skip = Optional(fluff);

    var degree = Capture(Char(/[1-8]/), 'degree');
    var octave = Capture(Plus(Char(/[,'"]/)), 'octave');
    var accidental = Capture(Char(/[#b@=]/), 'accidental');
    var velocity = Capture(Plus(Char(/[!;]/)), 'velocity');
    var pitch = Capture(All(Optional(octave), degree, Optional(accidental), Optional(velocity)), '@pitch:end', '@pitch:start');
    var hold = Capture(Plus(Char(/-/)), 'hold');
    var rest = Capture(Plus(Char(/\./)), 'rest');
    var note = Capture(All(pitch, Optional(hold), Optional(rest)), '@note:end', '@note:start');
    var bar = Capture(Char(/[\/|]/), 'bar');

    /*


    var tagName = Capture(identifier, 'tag');
    var tagAttrName = Capture(identifier, 'tagAttrName');
    var tagAttrValue = All( Char(/\"/), Capture(Text(/[^\"]/), 'tagAttrValue'), Char(/\"/) );
    var tagAttr = All(skip, tagAttrName, skip, Char(/=/), skip, tagAttrValue, skip);
    var tagAttrBlock = All(skip, Char(/\(/), tagAttr, Optional(Plus(All(Char(/,/), tagAttr))), Char(/\)/));
    var tagId = All(skip, Char(/#/), Capture(identifier, 'tagId'));
    var tagClass = Capture(Plus(All(skip, Char(/\./), Capture(identifier, 'tagClass'))), '@tagClassEnd', '@tagClassStart');
    var tagHeader = All(tagName, Optional(tagAttrBlock), Optional(tagId), Optional(tagClass));
    var tagBody = All(skip, Char(/\[/), thisGrammar, Char(/\]/));
    var tag = Capture(All(Capture(tagHeader, '@tagHeaderEnd'), Optional(tagBody)), '@tagEnd');*/



    return Optional(Plus(Any(fluff, note, bar, rest)));
  });
}