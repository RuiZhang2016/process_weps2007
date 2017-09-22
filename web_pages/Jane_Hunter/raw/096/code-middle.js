if (this.lycos_top_ad) {
    document.write('</div>');
}

if (this.lycos_bottom_ad) {
    document.write('<div align="center" id="FooterAd" name="FooterAd" style="display:none; left:0px; top:0px"><br clear="all">');
    lycos_draw_toolbar();
    document.write(lycos_bottom_ad);
}
