function frameReLoader()
{
  var frames = document.getElementsByTagName('iframe');
  var len = frames.length;
  for(var i = 0; i < len; i++)
  {
    if(frames[i].contentWindow)
    {
      frames[i].contentWindow.location.href = frames[i].src;
    }
    else if(frames[i].contentDocument)
    {
      frames[i].contentDocument.location.href = frames[i].src;
    }
  }
}
