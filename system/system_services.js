// Function to display the fatal error message
function displayFatalError(errorMessage) {
    document.body.innerHTML = '';
    const display = 
    `
    <div class="bigMargin">
        <h1 class="bigX">:(</h1>
        <p class="big">Your device ran into a problem and it needs to reload.</p>
        <br>
        <p id="errMsg">${errorMessage}</p>
    </div>
    `;
    document.body.innerHTML = display;
}

// Modified $system_services_createElement with error handling
export const $system_services_createElement = {
    // for blocks e.g. div, p, h1, etc.
    layouts: (html_tag = "", html_attributes = {}, element_innerText = "", html_appendTo = null) => {
        try {
            const $processor = document.createElement(html_tag);
            Object.assign($processor, html_attributes);
            $processor.innerText = element_innerText;
            if (html_appendTo) {
                html_appendTo.appendChild($processor);
            }
            return $processor;
        } catch (error) {
            console.error(error);
            displayFatalError(error.message);
        }
    },
    // for inputs e.g. input, img, etc.
    inputs: (html_tag = "", html_attributes = {}, html_appendTo = null) => {
        try {
            const $processor = document.createElement(html_tag);
            Object.assign($processor, html_attributes);
            if (html_appendTo) {
                html_appendTo.appendChild($processor);
            }
            return $processor;
        } catch (error) {
            console.error(error);
            displayFatalError(error.message);
        }
    }
};

export const $system_services_createUserTemplate = (userTemplate_user = "", userTemplate_environment = "", userTemplate_appendTo = null) => {
    const $processor_user = document.createElement("p")
    $processor_user.innerText = userTemplate_user

    const $processor_environment = document.createElement("small")
    $processor_environment.innerText = userTemplate_environment

    const $processor_group = document.createElement("div");
    $processor_group.classList.add("removeChildPaddings")
    $processor_group.appendChild($processor_user);
    $processor_group.appendChild($processor_environment);

    const $processor_picture = document.createElement("div");
    $processor_picture.classList.add("userProfile_picture");

    const $processor_group2 = document.createElement("div");
    $processor_group2.classList.add("flex")
    $processor_group2.appendChild($processor_picture);
    $processor_group2.appendChild($processor_group);

    userTemplate_appendTo.appendChild($processor_group2)

    return $processor_group2
}

export const $system_services_createIconButton = (iconButton_icon = "", iconButton_text = "", iconButton_attributes = {}, iconButton_appendTo = null) => {
    const $processor_icon = document.createElement("div");
    $processor_icon.classList.add("icon");
    $processor_icon.innerText = iconButton_icon;

    const $processor_text = document.createElement("p");
    $processor_text.innerText = iconButton_text;

    const $processor_group = document.createElement("div");
    $processor_group.classList.add("winIconButton")
    $processor_group.appendChild($processor_icon);
    $processor_group.appendChild($processor_text);

    Object.assign($processor_group, iconButton_attributes)
    iconButton_appendTo.appendChild($processor_group);

    return $processor_group;
}

// Modified $system_services_createPage with error handling
export const $system_services_createPage = (page_icon = "", page_text = "", page_appendTo = null, section_parent = null) => {
    try {
        const $packed = () => {
            const $processor_icon = document.createElement("div");
            $processor_icon.classList.add("icon");
            $processor_icon.innerText = page_icon;
        
            const $processor_text = document.createElement("p");
            $processor_text.innerText = page_text;
        
            const $processor_group = document.createElement("div");
            $processor_group.classList.add("winSidebarPage");
            $processor_group.appendChild($processor_icon);
            $processor_group.appendChild($processor_text);
        
            page_appendTo.appendChild($processor_group);
        
            return $processor_group;
        };
        
        const packed = $packed();
        
        packed.addEventListener("click", () => {
            try {
                var select = packed.querySelector("p");
        
                if (select) {
                    var winContentH = section_parent.querySelectorAll("section");
        
                    winContentH.forEach((winContent) => {
                        winContent.classList.add("hidden");
                        if (winContent.classList.contains(select.textContent)) {
                            winContent.classList.remove("hidden");
                        }
                    });
                }
            } catch (error) {
                console.error(error);
                displayFatalError(error.message);
            }
        });
    } catch (error) {
        console.error(error);
        displayFatalError(error.message);
    }
};
