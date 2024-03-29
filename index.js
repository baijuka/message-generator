let messageList =  [
        {
          "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
          "author": "Thomas Edison"
        },
        {
          "text": "A house divided against itself cannot stand.",
          "author": "Abraham Lincoln"
        },
        {
          "text": "Difficulties increase the nearer we get to the goal.",
          "author": "Johann Wolfgang von Goethe"
        },
        {
          "text": "Fate is in your hands and no one elses",
          "author": "Byron Pulsifer"
        },
        {
          "text": "Be the chief but never the lord.",
          "author": "Lao Tzu"
        },
        {
          "text": "Nothing happens unless first we dream.",
          "author": "Carl Sandburg"
        },
        {
          "text": "Well begun is half done.",
          "author": "Aristotle"
        },
        {
          "text": "Self-complacency is fatal to progress.",
          "author": "Margaret Sangster"
        },
        {
          "text": "Peace comes from within. Do not seek it without.",
          "author": "Buddha"
        },
        {
          "text": "What you give is what you get.",
          "author": "Byron Pulsifer"
        },
        {
          "text": "We can only learn to love by loving.",
          "author": "Iris Murdoch"
        },
        {
          "text": "Life is change. Growth is optional. Choose wisely.",
          "author": "Karen Clark"
        },
        {
          "text": "You'll see it when you believe it.",
          "author": "Wayne Dyer"
        },
        {
          "text": "Having nothing, nothing can he lose.",
          "author": "William Shakespeare"
        },
        {
          "text": "Trouble is only opportunity in work clothes.",
          "author": "Henry J. Kaiser"
        },
        {
          "text": "Ideas are the beginning points of all fortunes.",
          "author": "Napoleon Hill"
        }
      ];

window.onload = function() {
    const quote = Math.floor(Math.random()*16);
    document.getElementById('text').innerText= '"'+messageList[quote].text+'"';
    document.getElementById('author').innerText = '*** '+messageList[quote].author;
}
