var audio = document.getElementById('mainAudio');

//objects
var ctx = new AudioContext();
var audioSrc = ctx.createMediaElementSource(audio);
var analyzer = ctx.createAnalyser();
var gainNode = ctx.createGain();
analyzer.fftSize = 64;
ctx.sampleRate = 44100;
var rate = (ctx.sampleRate / analyzer.fftSize)
console.log('FFT SIZE: ' + analyzer.fftSize + '  SAMPLE RATE: ' + ctx.sampleRate + '  BIN COUNT: ' + analyzer.frequencyBinCount + '  RATE of CHANGE: ' + rate)



//routing
audioSrc.connect(analyzer);
audioSrc.connect(gainNode);
gainNode.connect(ctx.destination);


var frequencyData = new Uint8Array(analyzer.frequencyBinCount)

// guide to frequency Data
// 0 - 86 hZ  = frequencyDate[0 - 2 ]
// 0 -  hZ  = frequencyDate[2 - 4 ]
// 0 -  hZ  = frequencyDate[0 - ]
// 0 -  hZ  = frequencyDate[0 - ]
// 0 -  hZ  = frequencyDate[0 - ]
// 0 -  hZ  = frequencyDate[0 - ]
// 0 -  hZ  = frequencyDate[0 - ]
// 0 -  hZ  = frequencyDate[0 - ]
// 0 -  hZ  = frequencyDate[0 - ]
// 0 -  hZ  = frequencyDate[0 - ]

// to do
var sub;
var lows;
var lowMid;
var mid;
var high;
var superHigh;

function renderFrame() {
    requestAnimationFrame(renderFrame);
    // update data in frequencyData
    analyzer.getByteFrequencyData(frequencyData);
    // render frame based on values in frequencyData
    //console.log(frequencyData)
}


renderFrame();

function play() {
    audio.play();
    console.log('play!')
}


function pause() {
    audio.pause();
    console.log('pause')
}

document.getElementById('play').addEventListener('click', play)
document.getElementById('pause').addEventListener('click', pause)
