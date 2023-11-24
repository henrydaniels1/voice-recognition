
var speechRecognition = window.webkitSpeechRecognition
var recognition = new speechRecognition()
var output = document.getElementById('output')
var previousRecording = document.getElementById('previousRecording')
var content = ''
var isRecording = false
var transcripts = JSON.parse(localStorage.getItem('transcripts')) || []
recognition.continuous = true


recognition.onstart = function() {
 output.textContent = "Voice Recognition is On"
 isRecording = true
}
recognition.onspeechend = function() {
 output.textContent = "No Activity"
 isRecording = false
}
recognition.onerror = function() {
 output.textContent = "Try Again"
}
recognition.onresult = function(event) {
 var current = event.resultIndex;
 var transcript = event.results[current][0].transcript
 content += transcript
 output.textContent = content
}
document.getElementById('startBtn').addEventListener('click', function(event) {
 if (isRecording) {
 recognition.stop()
 content = ''
 output.textContent = ''
 isRecording = false
 } else {
 recognition.start()
 isRecording = true
 }
})
document.getElementById('saveBtn').addEventListener('click', function(event) {
 transcripts.push(content);
 localStorage.setItem('transcripts', JSON.stringify(transcripts));
 previousRecording.textContent = content;
 content = '';
})
document.getElementById('copyBtn').addEventListener('click', function(event) {
 navigator.clipboard.writeText(output.textContent).then(function() {
 console.log('Content copied to clipboard');
 }, function(err) {
 console.error('Failed to copy: ', err);
 });
})
document.getElementById('deleteBtn').addEventListener('click', function(event) {
 localStorage.removeItem('transcripts');
 content = ''
 output.textContent = ''
 transcripts = []
})
window.onload = function() {
 var previousTranscripts = JSON.parse(localStorage.getItem('transcripts')) || [];
 if (previousTranscripts.length > 0) {
 previousRecording.textContent = previousTranscripts[previousTranscripts.length - 1];
 }
 previousRecording.addEventListener('click', function(event) {
 navigator.clipboard.writeText(previousRecording.textContent).then(function() {
 console.log('Previous recording copied to clipboard');
 }, function(err) {
 console.error('Failed to copy: ', err);
 });
})
}



document.getElementById('startBtn').addEventListener('click', function() {
 var icon1 = document.getElementById('d1');
 var icon2 = document.getElementById('d2');

 icon1.classList.toggle('hidden');
 icon2.classList.toggle('hidden');
});

const copy = document.getElementById( 'copyBtn' );
copy.addEventListener( 'click', function ()
{
    var copy1 = document.getElementById( 'copy2' );
    copy2.classList.toggle( 'hidden' );
})


const delete1 = document.getElementById( 'deleteBtn' );
delete1.addEventListener( 'click', function ()
{
    var delete11 = document.getElementById( 'delete2' );
    delete11.classList.toggle( 'hidden' );
    
})



const save1 = document.getElementById( 'saveBtn' );
save1.addEventListener( 'click', function ()
{
    var save11 = document.getElementById( 'save2' );
    save11.classList.toggle( 'hidden' );
   
})

setTimeout( function ()
{
    save11.classList.add( 'hidden' );
},
    2000 );