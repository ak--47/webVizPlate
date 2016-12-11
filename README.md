# AK's Music Visualizer

Boilerplate for in-browser audio analysis

# API 
`frequencyData` always gives you an array/buffer of audio samples which represent the *current* volume of the track playing across the frequency spectrum

the frequency range of this buffer is determined by the settings:
```
analyzer.fftSize = 64;
ctx.sampleRate = 44100;
analyzer.frequencyBinCount = 32;
```

the formula is like this:

fftSize / sampleRate = range (# of hertz in each slot)
binCount / 2 = fftSize (length of frequency array)

Additional docs: https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode

# to do
 - pipe frequency data to a file for later use with that track
 - create a more musically mappable API for `sub` `lowMid` `mid` `high` and `superHigh`
 - kill all humans