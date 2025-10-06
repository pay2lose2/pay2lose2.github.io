let TrackName = document.getElementById("track-name");
let Track = document.getElementById("track");
let Chomik = document.getElementById("chomik")
// If you're, once again forking this, then I am sorry.
let Songs = [
    {
        "Name": "PaRaDoX (Spyro 3 Crack)",
        "File": "PaRaDoX Theme.mp3"
    },
    {
        "Name": "Team ExTaLiA (Far Cry 2 Trainer)",
        "File": "ExTaLiA.mp3"
    },
    {
        "Name": "Team ORiON (Ahead Nero Burning Rom Keygen)",
        "File": "ORiON.mp3"
    },
    {
        "Name": "FFF (EA Games Keygen)",
        "File": "FFF.mp3"
    },
    {
        "Name": "CORE (IDM Keygen)",
        "File": "CORE.mp3"
    }, 
    {
        "Name": "RRThiel (what a mario world EP) - overworld",
        "File": "overworld.mp3",
        "SupportURL": "https://rrthiel.bandcamp.com/album/what-a-mario-world-ep"
    },
    {
        "Name": "RRThiel (what a mario world EP) - map 1",
        "File": "map 1.mp3",
        "SupportURL": "https://rrthiel.bandcamp.com/album/what-a-mario-world-ep"
    },
    {
        "Name": "RRThiel (what a mario world EP) - map 2",
        "File": "map 2.mp3",
        "SupportURL": "https://rrthiel.bandcamp.com/album/what-a-mario-world-ep"
    },
    {
        "Name": "RRThiel (what a mario world EP) - underwater",
        "File": "underwater.mp3",
        "SupportURL": "https://rrthiel.bandcamp.com/album/what-a-mario-world-ep"
    },
    {
        "Name": "RRThiel (what a mario world EP) - athletic",
        "File": "athletic.mp3",
        "SupportURL": "https://rrthiel.bandcamp.com/album/what-a-mario-world-ep"
    },
    {
        "Name": "RRThiel (what a mario world EP) - castle",
        "File": "castle.mp3",
        "SupportURL": "https://rrthiel.bandcamp.com/album/what-a-mario-world-ep"
    },
    {
        "Name": "zabutom (Zeta Force) - Level 2",
        "File": "lvl2.mp3",
        "SupportURL": "https://zabutom.bandcamp.com/album/zeta-force"
    },
    {
        "Name": "🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷🎷",
        "File": "saxophone.mp3",
        "Source": "https://www.youtube.com/watch?v=kJjxt1roRCY"
    },
    {
        "Name": "Liquid - Phog",
        "File": "Phog.mp3"
    },
    {
        "Name": "ENDEAVOR - Liquid Youth",
        "File": "ENDEAVOR - Liquid Youth.mp3"
    },
    {
        "Name": "Skybax - Marmalade Dream",
        "File": "Skybax - Marmalade Dream.mp3"
    },
    {
        "Name": "Syrsa - Edmyron - Matriarch (Original Mix)",
        "File": "Syrsa - Matriarch.mp3"
    },
    {
        "Name": "Flawed Mangoes - Dramamine",
        "File": "Dramamine.mp3"
    },
    {
        "Name": "Sonic CD Remastered - Wacky Workbench Past",
        "File": "Sonic CD Remastered - Wacky Workbench Past.mp3"
    },
    {
        "Name": "Xinon - Heart Warming Story",
        "File": "Xinon - Heart Warming Story.mp3",
        "SupportURL": "https://xinon.bandcamp.com/album/synapse-xinon-chiptune-best"
    }
]

let Index = Math.floor(Math.random() * Songs.length + 0.5);

function SetNextSong() {
    Index += 1
    if (Index >= Songs.length) {
        Index = 0;
    }
    LoadSong(Songs[Index])
}

function SetPreviousSong() {
    Index -= 1
    if (Index < 0) {
        Index = Songs.length - 1;
    }
    LoadSong(Songs[Index])
}

function LoadSong(song) {
    if (song['SupportURL']) {
        TrackName.innerHTML = song.Name + ` <a href='${song['SupportURL']}'>(Support)</a>`;
    } else if (song['Source']) {
        TrackName.innerHTML = song.Name + ` <a href='${song['Source']}'>(Source)</a>`;
    } else {
        TrackName.innerHTML = song.Name;
    }
    
    Track.src = "./assets/music/" + song.File;
    Track.play().catch(error => {
        console.warn("Could not play the file:", error)
        setTimeout(() => {
            SetNextSong()
        }, 2 * 250);
    });
}

Track.addEventListener("ended", SetNextSong)
window.onload = function() {
    LoadSong(Songs[Index]);
};