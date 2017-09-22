//  scripts not included in the default version of SS

// Link to SecondSite person page
    function sslink(tmgidx)
    {
    var loc ="";
    var page = Math.floor((tmgidx-1)/25)+1;
    loc = "p"+page+".htm#i"+tmgidx;
    location.href=loc;
    }

