// TODO: 1. process step list as unordered list below the video
// 2. on click get the current frame and put in predefined field
(function($) {

})(jQuery);

//lets the user load a file from his/her harddrive
//source: http://jsfiddle.net/dsbonev/cCCZ2/embedded/result,js,html,css/
(function localFileVideoPlayer() {
	'use strict'
  var URL = window.URL || window.webkitURL
  // var displayMessage = function (message, isError) {
  //   var element = document.querySelector('#message')
  //   element.innerHTML = message
  //   element.className = isError ? 'error' : 'info'
  // }
  var playSelectedFile = function (event) {
    var file = this.files[0]
    var type = file.type
    var videoNode = document.querySelector('video')
    var canPlay = videoNode.canPlayType(type)
    if (canPlay === '') canPlay = 'no'
    // var message = 'Can play type "' + type + '": ' + canPlay
    // var isError = canPlay === 'no'
    // displayMessage(message, isError)

    // if (isError) {
    //   return
    // }

    var fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL
  }
  var inputNode = document.querySelector('input')
  inputNode.addEventListener('change', playSelectedFile, false)
})();

//allow frame by frame navigation
(function frameByFrameNav() {
  var video = videojs("video", {
  controls: true,
  autoplay: true,
  preload: 'auto',
  plugins: {
    framebyframe: {
      fps: 23.98,
      steps: [
        { text: '-5', step: -5 },
        { text: '-1', step: -1 },
        { text: '+1', step: 1 },
        { text: '+5', step: 5 },
      ]
    }
  }
});
})();
