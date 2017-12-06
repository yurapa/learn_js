window.onload = function() {
    console.log('Сработал второй onLoad метод.');

    (function() {
        el = document.getElementsByTagName("p");
        for(var i=0; i < el.length; i++) {
            el[i].innerHTML = "PARAGRAPH";
        }
        console.log('Отработала анонимная функциия.');
    })();
}