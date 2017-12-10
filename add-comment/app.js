/*jslint browser: true*/
/*global $, jQuery, alert, console */

var main = function () {
    "use strict";
    var dataToDo = [
        "1) Закончить писать эту книгу",
        "2) Вывести Грейси на прогулку в парк",
        "3) Ответить на электронные письма",
        "4) Подготовиться к лекции в понедельник",
        "5) Обновить несколько новых задач",
        "6) Купить продукты"
    ];

    $(".tabs a span").toArray().forEach(function (element) {
        $(element).on("click", function () {
            var el = $(element),
                comments;
            $(".tabs span").removeClass("active");
            $(el).addClass("active");
            $(".comments").empty();
            if (el.parent().is(":nth-child(1)")) {
                comments = $("<ul>");
                dataToDo.forEach(function (todo) {
                    comments.append($("<li>").text(todo));
                });
                $("main .comments").append(comments);
            } else if (el.parent().is(":nth-child(2)")) {
                comments = $("<ul>");
                dataToDo.forEach(function (todo) {
                    comments.prepend($("<li>").text(todo));
                });
                $("main .comments").append(comments);
            } else if (el.parent().is(":nth-child(3)")) {
                var elInput = $("<input>").attr({type: "text", id: "inputComment", name: "inputComment"}),
                    elButton = $("<button>").text("+"),
                    formWrapper = $("<div id='addComment'>");
                $(formWrapper).append(elInput, elButton);
                $("main .comments").append($(formWrapper));
            }
            return false;
        });
    });
    $(".tabs a:first-child span").trigger("click");
    // $(".tabs a:nth-child(3) span").trigger("click");

/*
    for (tabNumber = 1; tabNumber <= 3; tabNumber += 1) {
        tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        $(tabSelector).on("click", function () {
            $(".tabs span").removeClass("active");
            $(this).addClass("active");
            return false;
        });
    }

    var makeTabActive = function (tabNumber) {
        var tabSelector = $(".tabs a:nth-child(" + tabNumber + ") span");
        $(".tabs a span").removeClass("active");
        $(tabSelector).addClass("active");
    };

    $(".tabs a:nth-child(1)").on("click", function () {
        makeTabActive(1);
        return false;
    });
    $(".tabs a:nth-child(2)").on("click", function () {
        makeTabActive(2);
        return false;
    });
    $(".tabs a:nth-child(3)").on("click", function () {
        makeTabActive(3);
        return false;
    });
*/
    var addCommentFromInputBox = function () {
        var comment_text = $("#addComment #inputComment").val();
        //var new_comment = $("<li>"); // создание нового абзаца
        if ($("#addComment #inputComment").val() !== "") {
            dataToDo.push(comment_text);
            console.log(dataToDo);
/*
            new_comment.text(comment_text); // вкладываем текст в DOM элемент
            new_comment.hide();
            $('.comments').append(new_comment); // сделаем элемент дочерним
            new_comment.fadeIn(); // эффект плавного появления
            */
            $("#addComment #inputComment").val("");
        }
    };

    $('#addComment button').on("click", function () {
        alert('asdasd');
        addCommentFromInputBox();
    });

    $("#addComment input").on("keypress", function () {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });

// var $newParagraphElement = $("<p>"); // создание нового абзаца
// $newParagraphElement.text("Это абзац");
// result =>   <p>Это абзац</p>

// $(".comment-input #inputComment").on("keypress", function (event) {
//  console.log("Это значение keyCode " + event.keyCode);
// });
};
$(document).ready(main);