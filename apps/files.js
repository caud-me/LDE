import { $system_services_createElement } from "../system/system_services.js";
import { $system_services_createPage } from "../system/system_services.js";
import { $system_services_createIconButton } from "../system/system_services.js";
import { makeDraggable } from "../system/system_windowManager.js";
import { removeWindow } from "../system/system_windowManager.js";

document.getElementById("files.js").addEventListener("click", () => {

    const winFrame = $system_services_createElement.layouts(
        "div", 
        {className: "winFrame"}, 
        "",
        document.body);

    const winHead = $system_services_createElement.layouts(
        "div",
        {className: "winHead"},
        "",
        winFrame);

    const winTitle = $system_services_createElement.layouts(
        "small",
        {className: "winTitle"},
        "Files | PREVIEW",
        winHead);

    const winQuit = $system_services_createElement.layouts(
        "div",
        {className: "winQuit"},
        "",
        winHead);

    const winContent = $system_services_createElement.layouts(
        "div",
        {className: "winContent"},
        "",
        winFrame)

    const winFooter = $system_services_createElement.layouts(
        "div",
        {className: "winFooter"},
        "",
        winFrame)

    var section = $system_services_createElement.layouts(
        "section",
        {},
        "",
        winContent)

        $system_services_createElement.layouts(
            "iframe",
            {src: "./sandbox/fs_with_ui.html",
                width: "100%",
                height: "100%"},
            "",
            section)

    winContent.style.width = "900px";
    winContent.style.height = "500px";
    makeDraggable(winHead);
    removeWindow(winQuit);
});

