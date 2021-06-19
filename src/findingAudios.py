from __future__ import unicode_literals
import youtube_dl
from ytmusicapi import YTMusic
import json
import sys

ytmusic = YTMusic()
search_results = ytmusic.search('One Direction', 'artists')
  
with open("testResults/YTMSearchResults.json", "w") as outfile:
    outfile.write(json.dumps(search_results, indent = 4))
    
with open("testResults/YTMSearchResults.json", "r") as readfile:
    YTMSearchData = json.load(readfile)
    if YTMSearchData[0]['artist']=='One Direction':
        channel = YTMSearchData[0]['browseId']
        shuffle = YTMSearchData[0]['shuffleId']


ydl_opts = {
    'quiet': True,
    'forceurl': True,
    'format': 'bestaudio',
    # 'logger': MyLogger(),
    'skip_download': True,
    'playliststart': 2,
    'playlistend':  11,
}

sys.stdout = open("testResults/PythonOutput.txt", "w")
with youtube_dl.YoutubeDL(ydl_opts) as ydl:
    artistLink = 'https://music.youtube.com/watch?v=dQw4w9WgXcQ&list='+shuffle
    search_results = ydl.download([artistLink])

sys.stdout.close()

fileName = 'testResults/PythonOutput.txt'
finalDict ={}

urlID = 1

with open(fileName) as fh:
    for line in fh:
        description = line.strip().split(None, 1)
        serial = 'url'+str(urlID)

        finalDict[serial] = description
        urlID = urlID + 1

out_file = open("testResults/FinalStreamableURLs.json", "w")
json.dump(finalDict, out_file, indent = 4, sort_keys = False)
out_file.close()