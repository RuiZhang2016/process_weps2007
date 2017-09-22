function getWindowHeight()
{
  var windowHeight = 0;

  if(typeof(window.innerHeight) == 'number')
  {
    windowHeight = window.innerHeight;
  }
  else
  {
    if(document.documentElement && document.documentElement.clientHeight)
    {
      windowHeight = document.documentElement.clientHeight;
    }
    else
    {
      
      if(document.body && document.body.clientHeight)
      {
        windowHeight = document.body.clientHeight;
      }
    }
  }
  return windowHeight;
}

function setFooter()
{
  if(document.getElementById)
  {
    var windowHeight = getWindowHeight();

    if(windowHeight > 0)
    {
      var headerHeight = document.getElementById('header').offsetHeight;
      var contentHeight = document.getElementById('layout').offsetHeight;
      var footerElement = document.getElementById('footer');
      var footerHeight  = footerElement.offsetHeight;

      if(windowHeight - (contentHeight + footerHeight + headerHeight) >= 0)
      { 
        var oldFooterTop = footerElement.style.top;
        var newFooterTop = (windowHeight - (contentHeight + footerHeight + headerHeight));

        //footerElement.style.top = newFooterTop + 'px';

        document.getElementById('layout').style.height =
          (contentHeight + (newFooterTop - oldFooterTop)) + 'px';

        document.getElementById('content-body').style.height =
          (contentHeight + (newFooterTop - oldFooterTop)) + 'px';

        footerElement.style.position = 'relative';
        footerElement.style.top = (newFooterTop - (newFooterTop - oldFooterTop)) + 'px';
      }
      else
      {
        footerElement.style.position = 'static';
      }
    }
  }
}

window.onload = function()
{
  setFooter();
}

/*
window.onresize = function()
{
  setFooter();
}
*/
  
