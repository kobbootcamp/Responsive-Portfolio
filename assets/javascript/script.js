
$(document).ready(function () {


    $(".pic-container").on("click", function () {

        switch (this.id) {
            case "word":
                window.open("https://kobbootcamp.github.io/Word-Guess-Game/");
                break;
            case "starwars":
                window.open("https://kobbootcamp.github.io/unit-4-game/");
                break;
            case "trivia":
                window.open("https://kobbootcamp.github.io/TriviaGame/");
                break;
            case "farm":
                window.open("https://kobbootcamp.github.io/GifTastic/");
                break;
            case "train":
                window.open("https://kobbootcamp.github.io/TrainScheduler/");
                break;
        }
    })


})