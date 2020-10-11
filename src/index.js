/* eslint-disable no-undef */
import "./style.scss";
import * as $ from "jquery/dist/jquery";
// import "owlcarousel/owl-carousel/owl-carousel";

/**
 * Prevent Conflict With Other Lib
 */

$(document).ready(function() {
    /**
     * Display Menu
     */

    const displayBtn = $(".menu-btn");
    const closeBtn = $(".close-btn");
    const menu = $(".menu-bar-section");

    /**
     * Display or Hide Menu
     */
    displayBtn.on("click", () => {
        menu.toggleClass("menu-display");
    });

    /**
     * Hide Menu
     */

    closeBtn.on("click", () => {
        menu.removeClass("menu-display");
    });
});