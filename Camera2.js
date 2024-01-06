/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

'use strict';

// Put variables in global scope to make them available to the browser console.
//const video = document.querySelector('video');

//const button = document.querySelector('button');
//button.onclick = function() {
//};

//const constraints = {
//  audio: false,
//  video: true
//};
/*
kind =videoinput: label=  id = wv9PyqoPdtvIjZPHi82LdjtZzlszgMKpNmoa3KuQ5+U= Camera.js:37:17
kind =videoinput: label=  id = MSOxWCYzOPYYrPR3ki3fMe/wblli2VCdC+wMtvC2dV0= Camera.js:37:17
kind =videoinput: label=  id = qSVhsd+H5lE6qvj0cTk61iGY4hRBHS0qUaPIe9CR5FU= Camera.js:37:17

*/
var id1="wv9PyqoPdtvIjZPHi82LdjtZzlszgMKpNmoa3KuQ5+U="
//       MSOxWCYzOPYYrPR3ki3fMe/wblli2VCdC+wMtvC2dV0=
var id2="MSOxWCYzOPYYrPR3ki3fMe/wblli2VCdC+wMtvC2dV0="
var id2='MSOxWCYzOPYYrPR3ki3fMe/wblli2VCdC+wMtvC2dV0='
var id3="qSVhsd+H5lE6qvj0cTk61iGY4hRBHS0qUaPIe9CR5FU="
var id3="qSVhsd+H5lE6qvj0cTk61iGY4hRBHS0qUaPIe9CR5FU="

var constraints2 = {
       video: {deviceId:       {exact: id2} }
    } 
var constraints3 = window.constraints={
  video: {
    deviceId: {
      exact: id2
    }
  }
}

function handleSuccess(stream) {
var idcanvas=document.getElementById("idcanvas");
  window.stream = stream; // make stream available to browser console
  video.srcObject = stream;
  console.log('handleSuccess',stream)
}

function handleError(error) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

function opencamera(){
console.log('opencavera')
    let id=selectCam.value
    console.log('id cam ',id)
    let constraints2 = window.constraints = {
       video: {deviceId: id }
    } 

navigator.mediaDevices.getUserMedia(constraints2).then(handleSuccess).catch(handleError);
idcanvas=document.getElementById("idcanvas");
ctx=idcanvas.getContext("2d");

//  idcanvas.width = v.videoWidth;
//  idcanvas.height = v.videoHeight;



//    var cw=idcanvas.width;
//    var ch=idcanvas.height;
console.log('ctx',ctx)

console.log('idcanvas',idcanvas)
//console.log(cw,ch)
console.log(video.videoWidth,video.videoHeight)
console.log('video  width height',video.width,video.height)
console.log('video  clientWidth clientHeight',video.clientWidth,video.clientHeight)
//idcanvas.width=video.width

//console.dir(video)
//idcanvas.width = video.clientWidth;
//idcanvas.height = video.clientHeight;
//idconsole.log('canvas ',canvas.width,canvas.veight)



video.addEventListener('play', function() {
    var $this = this; //cache
    var countdraw=0;
    (function loop() {
      if (!$this.paused && !$this.ended) {
         countdraw++
         if (countdraw<3){
         console.log($this)
         let ww=video.clientWidth
         let hh=video.clientHeight
         console.log('video  clientWidth clientHeight',video.clientWidth,video.clientHeight)
         idcanvas.width = ww
         idcanvas.height= hh
         console.log('idcanvas  width height',video.width,video.height)

         }

//    canvas.width = videoEl.clientWidth * scale;
//    canvas.height = videoEl.clientHeight * scale;

        ctx.drawImage($this, 0, 0);
        setTimeout(loop, 1000 /50); // drawing at 30fps
//        setTimeout(loop, 1000 / 30); // drawing at 30fps
      }
    })();
  }, 0);




}
