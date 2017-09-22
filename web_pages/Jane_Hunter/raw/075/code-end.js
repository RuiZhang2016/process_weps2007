if (this.lycos_bottom_ad) {
    document.write('</div>');

    if (window.addEventListener) {
        window.addEventListener('load', lycos_show_bottom_ad, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', lycos_show_bottom_ad);
    } else {
        window.onload = lycos_show_bottom_ad;
    }
}
