# FacebookPostScraping

It's simple really, you are getting data of posts you've scrolled to (loaded them by scrolling down).

### Step 1
Go to page/posts for example: https://www.facebook.com/pg/marketer.ge/posts
### Step 2
Load posts (scroll down to load as many posts as you want)
### Step 3
Open DevTools
```
Windows - Ctrl + Shift + J
Mac - Ctrl + Option + J
```
### Step 4
Go to console tab of DevTools and paste the whole code from either 'postScrappNR.js' or 'postScrapp.js'
### Step 5
Wait, you will know once it's finished, read bellow for more details about speed.
### Step 6 - Sidenote
You can write this in console to log the data you gathered:
```javascript
logPostData()
```
and this to return the data you gathered as a variable:
```javascript
storePostData()
```
### Step 7 - Exporting
Paste the code below in the console
```javascript
(function(console){

    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)

var data = storePostData();
console.save(data, 'pagePosts.json')
```
### Step 8
This will start the download of you data as a json file. If you want to view it in a CSV or XLSX you can upload or paste the contents of the downloaded file to this webiste https://json-csv.com/

## postScrappNR:
Data you will get with 'postScrappNR.js':
```JSON
{
        "totalReactions":349,
        "shares":22,
        "timestamp":"4 May at 23:42",
        "postURL":"https://www.facebook.com//marketer.ge/photos/a.193036377442848/3000442296702228",
        "comments":26
}
```

## postScrapp
### Read important note at the end if you are planning to use 'postScrapp.js';

Data you will get with 'postScrapp.js':
```JSON
{
        "totalReactions":349,
        "reactions":{
            "Like":303,
            "Love":32,
            "Care":12,
            "Haha":1,
            "Wow":1
        },
        "shares":22,
        "timestamp":"4 May at 23:42",
        "postURL":"https://www.facebook.com//marketer.ge/photos/a.193036377442848/3000442296702228",
        "comments":26
 }
 ```


As you can see the difference is between reactions, you are still getting the total count, but not differentiated Like, Love, Care, Haha, Wow, Sad, Angry.
I decided to make 2 versions because the difference is in time, 'postScrapp.js' is emitting click events to open and closed detailed info of reactions, time it takes depends on loaded posts, your machines perfomance and your internet connection.
#### Only for 'postScrapp.js' not needed for 'postScrappNR.js', beacuse NR(no differenciating reactions version) is almost instantaneous.
Therefore, if you want to use 'postScrapp.js' will have to adjust the timout in setTimeout function. for 250 posts I set it to 5000 (milliseconds) just to be safe (to avoid crash), but 500 (miliseconds) worked very well for getting about 30-50 posts.
View the screenshot bellow (You will have to adjust the timeout there)
![github-large](https://i.ibb.co/n0sDCvF/Screenshot-44.png)
