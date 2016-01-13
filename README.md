lrc
==============

##

LRC format transform

## LRC:

```lrc
[ti:Let's Twist Again]
[ar:Chubby Checker oppure  Beatles, The]
[au:Written by Kal Mann / Dave Appell, 1961]
[al:Hits Of The 60's - Vol. 2 – Oldies]

[00:12.00]Naku Penda Piya-Naku Taka Piya-Mpenziwe
[00:15.30]Some more lyrics ...
...
```

## JSON:

```json
{
    "title": "Let's Twist Again",
    "artist": "Chubby Checker oppure  Beatles, The",
    "author": "Written by Kal Mann / Dave Appell, 1961",
    "album": "Hits Of The 60's - Vol. 2 – Oldies",
    "by": "lrcf",
    "version": "0.0.1",
    "lyrics": [{
        "start": {
        	"m": 0,
        	"s": 12,
        	"x": 0
        },
        "end: {
        	"m": 0,
        	"s": 15,
        	"x": 30
        },
        "text": "Naku Penda Piya-Naku Taka Piya-Mpenziwe"
    },
    {
        "start": {
        	"m": 0,
        	"s": 15,
        	"x": 30
        },
        "end": {
        	"m": 0,
        	"s": 19,
        	"x": 0
        },
        "text": "Some more lyrics ..."
    }]
}
```
