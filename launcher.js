 function createComponentPanel() {
        var div = document.createElement("div");
        div.setAttribute("class", "component");
        div.appendChild(createComponentLink(div));

        document.getElementsByTagName("body")[0].appendChild(div);

        return div;
    }

function createComponentLink(container) {

    var link = document.createElement("link");

    link.setAttribute("rel", "import");
    link.setAttribute("href", "component.html");

    link.onload = function () {
        container.appendChild(link.import.querySelector('.component-main-container'));
    };

    return link;
}
    
createComponentPanel();
