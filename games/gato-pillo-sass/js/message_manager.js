
const hideMessage = () => {
    panel_message = document.getElementById("message");
    panel_message.style.display = "none";
}

// llamar mensaje de completado de linea
const showMessage = (winner) => {
    panel_message = document.getElementById("message");
    panel_message.style.display = "block";
    
    if(winner == 1) string_notification = "Game Over!";
    else string_notification = "You Win!"

    messageNotification = document.getElementById("notification");
    messageNotification.innerHTML = string_notification;
    
    if(winner == 1) string_button = "Try Again";
    else string_button = "Play Again!"

    messageButton = document.getElementById("button");
    messageButton.innerHTML = string_button;

    if (winner == 1)
        string_tweet = "<a target='_blank' href='http://twitter.com/share?text=Perdi con un Gato!' class='fa fa-twitter'></a>";
    else
        string_tweet = "<a target='_blank' href='http://twitter.com/share?text=Gane! a un gato' class='fa fa-twitter'></a>";
    
    messageTweet = document.getElementById("tweet_gameover");
    messageTweet.innerHTML = string_tweet;
}