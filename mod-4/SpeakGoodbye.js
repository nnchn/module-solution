(function(window) {
  var byeSpeaker = new Object();
  var speakWord = "Good Bye";

  byeSpeaker.speak = function(name) {
    console.log(speakWord + "" + name); 41
  };

  window.byeSpeaker = byeSpeaker;
})(window);
