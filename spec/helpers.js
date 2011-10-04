
function StringStream () {
    this.string = "";
}

StringStream.prototype = {
    write: function (content) {
               this.string += content;
           }
};

exports.StringStream = StringStream;
