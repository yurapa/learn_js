var MyModule = {};

MyModule.changeContent = function() {
    el = document.getElementsByTagName("p");
    for(var i=0; i < el.length; i++) {
        el[i].innerHTML = "PARAGRAPH";
    }
    console.log('Отработал метод changeContent модуля MyModule.');
}
