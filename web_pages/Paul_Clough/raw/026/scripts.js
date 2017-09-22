var hemcontext = '';    // Context for hem()

// Rename frame if not named already
if (self.name.substr(0,2) = '') {
	self.name = '_top';   // This frame is a target for other windows
}

function init(context) {
	if (is_ie4up) {
		if (self.name.toLowerCase() == 'ssnav') {
			for (i=0; i<document.all.length; i++) {
				if (document.all(i).tagName == 'BODY') {
					if (document.all(i+1).tagName != 'A') {
						document.all(i+1).removeNode(true);
					}
					break;
				}
			}
		}
	}

  var args = context.split("||");		// "||" allows for future context args
	if (args.length>0) hemcontext = args[0];
}

function pup(parts)
{
  /* Intialize the arrays */
  var msg = "";
  var names = new Array(7);
  var stats = new Array(7);
  var links = new Array(7);
  var i, j;

  for (j=0; j<7; j++) {
    names[j] = "";
    stats[j] = "";
    links[j] = "";
  }

  /* Parse the parts into the things we need */
  var args = parts.split("|");

  for (j=0, i=0; i<args.length && j<7;i++, j++) {
    names[j] = args[i++];
    if (names[j] == "") names[j]="&nbsp;";

    stats[j] = args[i++];

    if (args[i] != "") {
      links[j] = '<A TARGET="ssmain" HREF="'+args[i]+'">'+names[j]+'</A>';
    } else {
      links[j] = names[j];
    }
  }

  /* Start the page */
  var s1='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">\n';
  s1 += '<HTML>\n<HEAD>\n <TITLE>'+names[0]+'</TITLE>\n';
  s1 += ' <LINK REL="stylesheet" TYPE="text/css" HREF="site.css">\n';
  s1 += '</HEAD>\n';

  s1 += '<BODY CLASS=pupbody>\n';
  s1 += '<TABLE WIDTH=100% BORDER=1 CELLSPACING=0 CELLPADDING=3>\n';

  /* Build the table from the parts */

  /* Row 1: 3 cells (0, 1, 3) */
  s1 += '<TR>\n <TD WIDTH="30%" ROWSPAN=4 CLASS=pupsubject>'+links[0]+'<BR>'+stats[0]+'</TD>\n';
  s1 += ' <TD WIDTH="30%" ROWSPAN=2 CLASS=pupmale>';
  s1 += links[1]+'<BR>'+stats[1]+'</TD>\n';
  s1 += ' <TD WIDTH="40%" CLASS=pupmale>';
  s1 += links[3]+'<BR>'+stats[3]+'</TD>\n</TR>\n';

  /* Row 2: 1 cell (4) */
  s1 += '<TR>\n <TD WIDTH="40%" CLASS=pupfemale>'+links[4]+'<BR>'+stats[4]+'</TD>\n</TR>\n';

  /* Row 3: 2 cells (2, 5) */
  s1 += '<TR>\n <TD WIDTH="30%" ROWSPAN=2 CLASS=pupfemale>'+links[2]+'<BR>'+stats[2]+'</TD>\n';
  s1 += ' <TD WIDTH="40%" CLASS=pupmale>'
  s1 += links[5]+'<BR>'+stats[5]+'</TD>\n</TR>\n';

  /* Row 4: 1 cell (6) */
  s1 += '<TR>\n <TD WIDTH="40%" CLASS=pupfemale>'+links[6]+'<BR>'+stats[6]+'</TD>\n</TR>\n';

  /* End the page */
  s1 += '</TABLE>\n</BODY>\n</HTML>';

  /* Open the window and write the contents */
  settings  = "height=300,width=500,scrollbars=yes,";
  settings += "resizable=yes,";
  settings += "left=20,";
  if (screen.availHeight>0) settings += "top="+(screen.availHeight-340);

  popup = window.open("","pup",settings);
  popup.document.write(s1);
  popup.document.close();
  popup.focus();
}

function hem(part1, part2, part3)
{
	// Deprecated. SS Version 1.2 uses hemlink()
  var context = '';
  if (hemcontext != '') context = '&#'+63+'SUBJECT='+hemcontext;
  document.write("<A H"+'REF="M'+"A"+"I"+"L"+"T"+"O:");
  document.writeln(part1+"&#"+64+part2+context+'">'+part3+"</A>");
}

function hemnc(part1, part2, part3)
{
	// Deprecated. SS Version 1.2 uses hemlinknc()
  document.write("<A H"+'REF="M'+"A"+"I"+"L"+"T"+"O:");
  document.writeln(part1+"&#"+64+part2+'">'+part3+"</A>");
}

function hemlink(part1, part2) {
	var loc = '';

	loc = 'M'+"A"+"I"+"L"+"T"+"O:";
	loc = loc + part1+"@"+part2;
	if (hemcontext != '') loc = loc+'?SUBJECT='+hemcontext;
	location.href=loc;
}

function hemlinknc(part1, part2) {
	var loc = '';

	loc = 'M'+"A"+"I"+"L"+"T"+"O:";
	loc = loc + part1+"@"+part2;
	location.href=loc;
}
