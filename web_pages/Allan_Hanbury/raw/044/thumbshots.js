/**
 * FarODP v1.3.7 - http://www.farfarfar.com/scripts/odp/
 *
 * Copyright (c) www.farfarfar.com
 * You cannot remove or modify this comment.
 * You cannot remove the ODP attribution.
 * You cannot remove the Thumbshots attribution.
 * You cannot remove the "Free Online Games" link or the "Powered by FarODP" link.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */

function addEvent(obj, evType, fn)
{
    if (obj.addEventListener)
    {
        obj.addEventListener(evType, fn, true);
        return true;
    }
    else if (obj.attachEvent)
    {
        var r = obj.attachEvent("on" + evType, fn);
        return r;
    }
    else return false;
}

function initThumbnails()
{
    if (window.location.href.indexOf("search=") != -1)
    {
		return;
    }

    var li = document.getElementById("listings").getElementsByTagName("li");

    for (var i = 0, len = li.length; i < len; i++)
    {
        li[i].onmouseover = function ()
        {
            var xtmp = this.getElementsByTagName("a");
            window.status = xtmp[0];
        }
        li[i].onmouseout = function ()
        {
            window.status = "";
        }
        li[i].onclick = function ()
        {
            var xtmp = this.getElementsByTagName("a");
    		window.open(xtmp[0].href, '', '');
        }
        var xtmp = li[i].getElementsByTagName("a");

        if (!xtmp[0]) continue;

        xtmp[0].onclick = function()
        {
            return false;
        }
    }
}

function linkNewWin()
{
    var a = document.getElementsByTagName("a");

    var t = window.location.href.match(/^(http:\/\/[^\/]+)/);

    var thisDomain = t[1];

    var length = thisDomain.length;

    for(var i = 0, len = a.length; i < len; i++)
    {
        if (a[i].href.substr(0, length) != thisDomain) a[i].target = "_blank";
    }
}

initThumbnails();
linkNewWin();
