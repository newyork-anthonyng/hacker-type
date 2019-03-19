const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales eget mauris quis scelerisque. Sed lacinia ultricies ultrices. Morbi cursus tempus dolor, eu bibendum risus fringilla ac. Aenean eu dui diam. Donec id ligula dictum, laoreet nisi at, dictum erat. Nullam euismod et magna et luctus. Aliquam maximus, sem ut hendrerit sodales, libero enim ultrices turpis, at cursus neque enim et ipsum. Curabitur semper, nisi non fermentum tincidunt, nibh odio aliquam lacus, a fringilla justo leo rhoncus mauris. In lacinia mi augue, quis egestas felis tincidunt vel. Proin convallis, arcu lacinia volutpat consequat, quam sem aliquet tortor, quis efficitur neque ante at lacus. Nullam vel ligula tempor massa dictum finibus sed in ex. Cras efficitur ligula arcu, at sagittis nulla sagittis vitae. Mauris pellentesque leo elit, id efficitur tortor convallis ut. Aliquam lectus ipsum, vehicula sed libero in, lobortis blandit odio. Nulla pellentesque, libero a tincidunt mattis, tortor mi porttitor odio, vel molestie erat purus a ante.`;

const container = document.querySelector(".js-container");
let counter = 0;
const options = {
    "single-character": handleSingleCharacter,
    "single-word": handleSingleWord
};
let currentOption = options["single-character"];

document.addEventListener("keypress", function () {
    currentOption();
});

function handleSingleCharacter() {
    counter++;

    const renderText = text.slice(0, counter);
    container.innerHTML = renderText;
}

function handleSingleWord() {
    counter++;
    const renderText = text.split(" ").slice(0, counter);

    container.innerHTML = renderText.join(" ");
}

function createSelectOptions() {
    const selectElement = document.querySelector(".js-select");

    for (const option in options) {
        const optionElement = document.createElement("option");
        optionElement.setAttribute("value", option);
        const textNode = document.createTextNode(option)
        optionElement.appendChild(textNode);

        selectElement.appendChild(optionElement);
    }

    selectElement.addEventListener("change", function() {
        currentOption = options[this.value];
    });
}

createSelectOptions();