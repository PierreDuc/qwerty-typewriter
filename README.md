# qwerty-typewriter
Typewriter jQuery plugin. It outputs given text with a nice blinker into the container

- CSS3 animations
- jQuery

# Usage

<div id="typewriter></div>

var qtyper = $('#typewriter').qtyper(options);

qtyper.type()

# Options

{
  speed : 100,
  text : ''
}

# Methods

- type(text) 
Types the given text into the container. When text is omitted, the value in the options object is used

Demo:
http://qwerty-typewriter.thenme.net/
