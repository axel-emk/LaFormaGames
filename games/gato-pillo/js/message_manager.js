
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
    
    if(winner == 1) string_button = "Volver a Jugar";
    else string_button = "Play Again!"

    messageButton = document.getElementById("button");
    messageButton.innerHTML = string_button;

    if (winner == 1)
        string_tweet = "<a target='_blank' href='http://twitter.com/share?text=Perdí con un Gato! #gatopillo https://bit.ly/3DVV6i2'  class='fa fa-twitter'></a>";
    else
        string_tweet = "<a target='_blank' href='http://twitter.com/share?text=Gane! a un gato #gatopillo https://bit.ly/3DVV6i2' class='fa fa-twitter'></a>";
    
    messageTweet = document.getElementById("tweet_gameover");
    messageTweet.innerHTML = string_tweet;

    if (winner == 1)
        string_face = "<a target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=https%3A//axel-emk.github.io/LaFormaGames/games/gato-pillo/index.html' class='fa fa-facebook'></a>";
    else
        string_face = "<a target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=https%3A//axel-emk.github.io/LaFormaGames/games/gato-pillo/index.html' class='fa fa-facebook'></a>";
    
    messageTweet = document.getElementById("compartir_gameover");
    messageTweet.innerHTML = string_face;

    if (winner == 1)
        string_insta = "<a target='_blank' href='#' class='fa fa-instagram'></a>";
    else
        string_insta = "<a target='_blank' href='#'ass='fa fa-instagram'></a>";
    
    messageTweet = document.getElementById("publicar_gameover");
    messageTweet.innerHTML = string_insta;
}