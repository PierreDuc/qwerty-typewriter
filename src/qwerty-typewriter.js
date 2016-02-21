(function($){

    var _defaults = {
        text : '',
        speed : 100
    };

    var _initElement = function(element) {
        this.container = $(document.createElement('span')).appendTo(element);

        $(document.createElement('span'))
            .addClass('blinker')
            .text('|')
            .appendTo(element);
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

        element.addClass('qtyper');

        _initElement.call(this, element);
    };

    Qtyper.prototype = {
        type : function(text) {
            this.options.text = text || this.options.text;
            _initTyper.call(this);
            _startWriting.call(this);
        }
    };

    $.fn.qtyper = function(options) {
        return new Qtyper(this, options || {});
    }
})(jQuery);
