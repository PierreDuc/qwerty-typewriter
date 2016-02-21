(function(){

    var _defaults = {
        text : '',
        speed : 100
    };

    var _initTyper = function() {
        this.container.html('');
    };

    var _startWriting = function() {
        var i = 0;
        var interval = setInterval(function(){
            if(i >= this.options.text.length) {
                clearInterval(interval);
            } else {
                this.container.html(this.container.html() + this.options.text[i++]);
            }
        }.bind(this), this.options.speed);
    };

    var Qtyper = function(element, options) {
        this.options = $.extend({}, _defaults, options);

        this.element = element.addClass('qtyper');
        this.container = $(document.createElement('span')).appendTo(element);
        this.blinker = $(document.createElement('span')).addClass('blinker').text('|').appendTo(element);
    };

    Qtyper.prototype = {
        type : function(text) {
            this.options.text = text;
            _initTyper.call(this);
            _startWriting.call(this);
        }
    };

    $.fn.qtyper = function(options) {
        return new Qtyper(this, options || {});
    }
})();