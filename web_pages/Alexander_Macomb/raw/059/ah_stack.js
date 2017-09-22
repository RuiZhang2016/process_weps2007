// Creates arrays of strings that will be evaluated as Javascript commands.
// This allows for the execution of many JavaScript commands to be added to the body elements onload as one method call.

var onLoadStack = new Array(); 
// Internal array where commands are stored as strings;

var onLoadLastStack = new Array(); 
// Internal array where commands are stored to be done last 
 
addToOnLoad = function(commandStr){
   if(typeof(commandStr) == "string"){
      onLoadStack[onLoadStack.length] = commandStr;
      return true;
   }
   return false;
}

addToOnLoadLast = function(commandStr){
   if(typeof(commandStr) == "string"){
      onLoadLastStack[onLoadLastStack.length] = commandStr;
      return true;
   }
   return false;
}
  
var onLoadExecuted = 0;
executeOnLoadStack = function() { 
  if(onLoadExecuted) return;
  for (var x=0; x < onLoadStack.length; x++) { 
    eval(onLoadStack[x]); 
  } 
  for (var x=0; x < onLoadLastStack.length; x++) { 
    eval(onLoadLastStack[x]);
  }

  onLoadExecuted = 1;
}

document.onload = executeOnLoadStack;
