//**********************************************
// Advanced HTML Editor
// Version: 2.01
//
// (c) 2004 DMXzone.com
// by George Petrov, Patrick Woldberg, Camillah Ringes
//
//**********************************************

var locale = new Object;

locale.getString = function(str, lang) {
	if (!locale[lang]) {
		lang = locale["en-us"];
	} else {
		lang = locale[lang];
	}

	var i = str.indexOf('@{');
	while (i != -1)	{
		var j = str.indexOf('}', i+1);
		var code = str.substr(i+2,j-i-2);
		if (lang[code]) {
			str = str.substr(0,i) + lang[code] + str.substr(i+j+1);
		}
		i = str.indexOf('@{', i+1);
	}
	return str;
}

locale.setLocale = function(lang) {
	for (var i=0; i<document.forms.length; i++) {
		for (var j=0; j<document.forms[i].elements.length; j++) {
			var el = document.forms[i].elements[j];
			if (el.title && el.title.indexOf('@{') != -1) {
				el.title = locale.getString(el.title, lang);
			}
			if (el.type == 'select-one') {
				for (var k=0; k<el.length; k++) {
					if (el[k].text && el[k].text.indexOf('@{') != -1) {
						el[k].text = locale.getString(el[k].text, lang);
					}
				}
			}
		}
	}
}

// English
var o = locale["en-us"] = locale["en-gb"] = new Object;

	o["Bold"]           = "Bold";
	o["Italic"]         = "Italic";
	o["Underline"]      = "Underline";
	o["StrikeThrough"]  = "Strike Through";
	o["SubScript"]      = "SubScript";
	o["SuperScript"]    = "SuperScript";
	o["JustifyLeft"]    = "Align Left";
	o["JustifyCenter"]  = "Align Center";
	o["JustifyRight"]   = "Align Right";
	o["JustifyFull"]    = "Justify";
	o["UnorderedList"]  = "Unordered List";
	o["OrderedList"]    = "Ordered List";
	o["Indent"]         = "Text Indent";
	o["Outdent"]        = "Text Outdent";
	o["ForeColor"]      = "Change Text Color";
	o["BackColor"]      = "Change Background Color";
	o["Find"]           = "Find & Replace";
	o["InsertChar"]     = "Special Characters";
	o["HorizontalRule"] = "Horizontal Rule";
	o["Link"]           = "Create Hyperlink";
	o["Image"]          = "Insert Picture";
	o["Table"]          = "Create Table";
	o["Clear"]          = "Cleanup Formatting";
	o["ClearFont"]      = "Cleanup Font Tags";
	o["Word"]           = "Cleanup Word";
	o["HtmlMode"]       = "Switch between html/text";
	o["Normal"]         = "Paragraph";
	o["Heading1"]       = "Heading 1";
	o["Heading2"]       = "Heading 2";
	o["Heading3"]       = "Heading 3";
	o["Heading4"]       = "Heading 4";
	o["Heading5"]       = "Heading 5";
	o["Heading6"]       = "Heading 6";
	o["Address"]        = "Address";
	o["Formatted"]      = "Formatted";
	o["None"]           = "None";

// Dutch
var o = locale["nl"] = new Object;

	o["Bold"]           = "Vet";
	o["Italic"]         = "Cursief";
	o["Underline"]      = "Onderstrepen";
	o["StrikeThrough"]  = "Doorhalen";
	o["SubScript"]      = "Subscript";
	o["SuperScript"]    = "Superscript";
	o["JustifyLeft"]    = "Links Uitlijnen";
	o["JustifyCenter"]  = "Centreren";
	o["JustifyRight"]   = "Rechts Uitlijnen";
	o["JustifyFull"]    = "Uitvullen";
	o["UnorderedList"]  = "Opsommingstekens";
	o["OrderedList"]    = "Nummering";
	o["Indent"]         = "Inspringen Vergroten";
	o["Outdent"]        = "Inspringen Verkleinen";
	o["ForeColor"]      = "Verander Tekstkleur";
	o["BackColor"]      = "Verander Achtergrondkleur";
	o["Find"]           = "Zoeken & Vervangen";
	o["InsertChar"]     = "Speciale Karakters";
	o["HorizontalRule"] = "Horizontale Lijn";
	o["Link"]           = "Hyperlink Invoegen";
	o["Image"]          = "Afbeelding Invoegen";
	o["Table"]          = "Tabel Invoegen";
	o["Clear"]          = "Formattering Opschonen";
	o["ClearFont"]      = "Fonts Opschonen";
	o["Word"]           = "Word Opschonen";
	o["HtmlMode"]       = "Wissel tussen html/broncode";
	o["Normal"]         = "Paragraaf";
	o["Heading1"]       = "Kop 1";
	o["Heading2"]       = "Kop 2";
	o["Heading3"]       = "Kop 3";
	o["Heading4"]       = "Kop 4";
	o["Heading5"]       = "Kop 5";
	o["Heading6"]       = "Kop 6";
	o["Address"]        = "Adres";
	o["Formatted"]      = "Met Opmaak";
	o["None"]           = "Geen";

// Danish (by Kim Greve)
var o = locale["da"] = new Object;
 o["Bold"]           = "Fed";
 o["Italic"]         = "Kursiv";
 o["Underline"]      = "Understreget";
 o["StrikeThrough"]  = "Gennemstreget";
 o["SubScript"]      = "SubScript";
 o["SuperScript"]    = "SuperScript";
 o["JustifyLeft"]    = "Venstre justeret";
 o["JustifyCenter"]  = "Centreret";
 o["JustifyRight"]   = "H\xf8jre justeret";
 o["JustifyFull"]    = "Lige margin";
 o["UnorderedList"]  = "Opstilling med punkttegn";
 o["OrderedList"]    = "Opstilling med tal";
 o["Indent"]         = "For\xf8g indrykning";
 o["Outdent"]        = "Formindsk indrykning";
 o["ForeColor"]      = "Tekst farve";
 o["BackColor"]      = "Baggrundsfarve";
 o["Find"]           = "S\xf8g & Erstat";
 o["InsertChar"]     = "Special tegn";
 o["HorizontalRule"] = "Horizontal Linie";
 o["Link"]           = "Opret Hyperlink";
 o["Image"]          = "Inds\xe6t Billede";
 o["Table"]          = "Opret Table";
 o["Clear"]          = "Ryd op i formatering";
 o["ClearFont"]      = "Ryd op i Font Tags";
 o["Word"]           = "Ryd op i Word HTML";
 o["HtmlMode"]       = "Skift mellem html/tekst";
 o["Normal"]         = "Afsnit";
 o["Heading1"]       = "Overskrift 1";
 o["Heading2"]       = "Overskrift 2";
 o["Heading3"]       = "Overskrift 3";
 o["Heading4"]       = "Overskrift 4";
 o["Heading5"]       = "Overskrift 5";
 o["Heading6"]       = "Overskrift 6";
 o["Address"]        = "Adresse";
 o["Formatted"]      = "Formateret";
 o["None"]           = "Ingen";

// German
var o = locale["de"] = new Object;

	o["Bold"]           = "Fett";
	o["Italic"]         = "Kursiv";
	o["Underline"]      = "Unterstrichen";
	o["StrikeThrough"]  = "Durchgestrichen";
	o["SubScript"]      = "tiefgestellt";
	o["SuperScript"]    = "hochgestellt";
	o["JustifyLeft"]    = "Links ausrichten";
	o["JustifyCenter"]  = "Zentrieren";
	o["JustifyRight"]   = "Rechts ausrichten";
	o["JustifyFull"]    = "Blocksatz";
	o["UnorderedList"]  = "Aufz\xe4hlungszeichen";
	o["OrderedList"]    = "Nummerierung";
	o["Indent"]         = "Einzug vergr\xf6ssern";
	o["Outdent"]        = "Einzug verkleinern";
	o["ForeColor"]      = "Text Farbe";
	o["BackColor"]      = "Hintergrund Farbe";
	o["Find"]           = "Suchen & Ersetzen";
	o["InsertChar"]     = "Sonderzeichen";
	o["HorizontalRule"] = "Horizontale Linie";
	o["Link"]           = "Hyperlink einf\xfcgen";
	o["Image"]          = "Bild einf\xfcgen";
	o["Table"]          = "Tabelle einf\xfcgen";
	o["Clear"]          = "Formatierung s\xe4ubern";
	o["ClearFont"]      = "Font Tags s\xe4ubern";
	o["Word"]           = "Word s\xe4ubern";
	o["HtmlMode"]       = "Wechseln HTML/Text";
	o["Normal"]         = "Absatz";
	o["Heading1"]       = "Kopf 1";
	o["Heading2"]       = "Kopf 2";
	o["Heading3"]       = "Kopf 3";
	o["Heading4"]       = "Kopf 4";
	o["Heading5"]       = "Kopf 5";
	o["Heading6"]       = "Kopf 6";
	o["Address"]        = "Adresse";
	o["Formatted"]      = "Format";
	o["None"]           = "Keiner";

// Spanish (by laskurain)
var o = locale["es"] = new Object

	o["Bold"]           = "Negrita";
	o["Italic"]         = "Cursiva";
	o["Underline"]      = "Subrayado";
	o["StrikeThrough"]  = "Tachado";
	o["SubScript"]      = "Subindice";
	o["SuperScript"]    = "Superindice";
	o["JustifyLeft"]    = "Justificado Izquierda";
	o["JustifyCenter"]  = "Centrado";
	o["JustifyRight"]   = "Justificado Derecha";
	o["JustifyFull"]    = "Justificar Ambos";
	o["UnorderedList"]  = "Lista";
	o["OrderedList"]    = "Lista numerada";
	o["Indent"]         = "Insertar Sangria";
	o["Outdent"]        = "Quitar Sangria";
	o["ForeColor"]      = "Color frontal";
	o["BackColor"]      = "Color de fondo";
	o["Find"]           = "Buscar y reemplazar";
	o["InsertChar"]     = "Caracteres especiales";
	o["HorizontalRule"] = "Linea horizontal";
	o["Link"]           = "Crear enlace";
	o["Image"]          = "Insertar imagen";
	o["Table"]          = "Crear tabla";
	o["Clear"]          = "Limpiar formato";
	o["ClearFont"]      = "Limpiar tipos de letra";
	o["Word"]           = "Limpiar word";
	o["HtmlMode"]       = "Cambiar entre html/texto";
	o["Normal"]         = "Parrafo";
	o["Heading1"]       = "Encabezado 1";
	o["Heading2"]       = "Encabezado 2";
	o["Heading3"]       = "Encabezado 3";
	o["Heading4"]       = "Encabezado 4";
	o["Heading5"]       = "Encabezado 5";
	o["Heading6"]       = "Encabezado 6";
	o["Address"]        = "Direccion";
	o["Formatted"]      = "Formateado";
	o["None"]           = "Ninguno";

// Italiano (by davide)
var o = locale["it"] = new Object

	o["Bold"]           = "Grassetto";
	o["Italic"]         = "Corsivo";
	o["Underline"]      = "Sottolineato";
	o["StrikeThrough"]  = "Barrato";
	o["SubScript"]      = "Apice";
	o["SuperScript"]    = "Pedice";
	o["JustifyLeft"]    = "Allinea a Sinistra";
	o["JustifyCenter"]  = "Centra";
	o["JustifyRight"]   = "Allinea a Destra";
	o["JustifyFull"]    = "Giustificato";
	o["UnorderedList"]  = "Elenco";
	o["OrderedList"]    = "Elenco numerico";
	o["Indent"]         = "Aumenta rientro";
	o["Outdent"]        = "Riduci rientro";
	o["ForeColor"]      = "Colore carattere";
	o["BackColor"]      = "Colore sfondo";
	o["Find"]           = "Trova";
	o["InsertChar"]     = "Caratteri speciali";
	o["HorizontalRule"] = "Linea orizzontale";
	o["Link"]           = "Inserisci link";
	o["Image"]          = "Inserisci immagine";
	o["Table"]          = "Crea tabella";
	o["Clear"]          = "Pulisci formato";
	o["ClearFont"]      = "Elimina formato carattere";
	o["Word"]           = "Pulisci formattazione di MSWord";
	o["HtmlMode"]       = "Visualizza HTML";
	o["Normal"]         = "Paragrafo";
	o["Heading1"]       = "Titolo 1";
	o["Heading2"]       = "Titolo 2";
	o["Heading3"]       = "Titolo 3";
	o["Heading4"]       = "Titolo 4";
	o["Heading5"]       = "Titolo 5";
	o["Heading6"]       = "Titolo 6";
	o["Address"]        = "Indirizzo";
	o["Formatted"]      = "Formattazione";
	o["None"]           = "Nessuno";

// Norwegian (by oivind R. Nilsen)
var o = locale["no"] = new Object 

    o["Bold"]           = "Fet"; 
    o["Italic"]         = "Kursiv"; 
    o["Underline"]      = "Understreking"; 
    o["StrikeThrough"]  = "Gjennomstreking"; 
    o["SubScript"]      = "Senket skrift"; 
    o["SuperScript"]    = "Hevet skrift"; 
    o["JustifyLeft"]    = "Venstrejuster"; 
    o["JustifyCenter"]  = "Midtstill"; 
    o["JustifyRight"]   = "H\xf8yrejuster"; 
    o["JustifyFull"]    = "Blokkjustering"; 
    o["UnorderedList"]  = "Punkt"; 
    o["OrderedList"]    = "Nummerering"; 
    o["Indent"]         = "\xd8k innrykk"; 
    o["Outdent"]        = "Reduser innrykk"; 
    o["ForeColor"]      = "Forgrunnsfarge"; 
    o["BackColor"]      = "Bakgrunnsfarge"; 
    o["Find"]           = "S\xf8k og erstatt"; 
    o["InsertChar"]     = "Sett inn spesialtegn"; 
    o["HorizontalRule"] = "Horisontal linje"; 
    o["Link"]           = "Lag hyperlenke"; 
    o["Image"]          = "Sett inn bilde"; 
    o["Table"]          = "Sett inn tabell"; 
    o["Clear"]          = "Fjern formatering"; 
    o["ClearFont"]      = "Fjern font-tagger"; 
    o["Word"]           = "Fjern Word-tagger"; 
    o["HtmlMode"]       = "Bytt mellom html/text"; 
    o["Normal"]         = "Normal"; 
    o["Heading1"]       = "Overskrift 1"; 
    o["Heading2"]       = "Overskrift 2"; 
    o["Heading3"]       = "Overskrift 3"; 
    o["Heading4"]       = "Overskrift 4"; 
    o["Heading5"]       = "Overskrift 5"; 
    o["Heading6"]       = "Overskrift 6"; 
    o["Address"]        = "Addresse"; 
    o["Formatted"]      = "Formatert";
		o["None"]           = "Ingen";


// Portuguese (by Leonardo Sobral)
var o = locale["pt"] = new Object;
	o["Bold"]           = "Negrito";
	o["Italic"]         = "It\xE1lico";
	o["Underline"]      = "Sublinhado";
	o["StrikeThrough"]  = "Tachado";
	o["SubScript"]      = "Sobrescrito";
	o["SuperScript"]    = "Subscrito";
	o["JustifyLeft"]    = "Alinhar \xe0 Esquerda";
	o["JustifyCenter"]  = "Centralizar";
	o["JustifyRight"]   = "Alinha \xe0 Direita";
	o["JustifyFull"]    = "Justificar";
	o["UnorderedList"]  = "Lista Marcadores";
	o["OrderedList"]    = "Lista Numera\xE7\xE3o";
	o["Indent"]         = "Aumentar Indenta\xE7\xE3o";
	o["Outdent"]        = "Diminuir Indenta\xE7\xE3o";
	o["ForeColor"]      = "Cor da Fonte";
	o["BackColor"]      = "Cor do Fundo";
	o["Find"]           = "Localizar e Substituir";
	o["InsertChar"]     = "Caracteres Especiais";
	o["HorizontalRule"] = "Barra Horizontal";
	o["Link"]           = "Criar Hiperlink";
	o["Image"]          = "Inserir Figura";
	o["Table"]          = "Criar Tabela";
	o["Clear"]          = "Limpar Formata\xE7\xE3o";
	o["ClearFont"]      = "Limpar Tags de Fontes";
	o["Word"]           = "Limpar Word";
	o["HtmlMode"]       = "Trocar entre html/text";
	o["Normal"]         = "Par\xE1grafo";
	o["Heading1"]       = "Cabe\xE7alho 1";
	o["Heading2"]       = "Cabe\xE7alho 2";
	o["Heading3"]       = "Cabe\xE7alho 3";
	o["Heading4"]       = "Cabe\xE7alho 4";
	o["Heading5"]       = "Cabe\xE7alho 5";
	o["Heading6"]       = "Cabe\xE7alho 6";
	o["Address"]        = "Endereco";
	o["Formatted"]      = "Formatado";
	o["None"]           = "Nenhum";

 // French (by Domi Maes)
var o = locale["fr"] = new Object;

	o["Bold"]           = "Gras";
	o["Italic"]         = "Italique";
	o["Underline"]      = "Souligner";
	o["StrikeThrough"]  = "Barr\xe9";
	o["SubScript"]      = "Indice";
	o["SuperScript"]    = "Exposant";
	o["JustifyLeft"]    = "Align\xe9 \xe0 gauche";
	o["JustifyCenter"]  = "Centrer";
	o["JustifyRight"]   = "Align\xe9 \xe0 droite";
	o["JustifyFull"]    = "Justifier";
	o["UnorderedList"]  = "Liste \xe0 Puces";
	o["OrderedList"]    = "Liste Num\xe9rot\xe9e";
	o["Indent"]         = "Augmenter le retrait";
	o["Outdent"]        = "Diminuer le retrait";
	o["ForeColor"]      = "Changer la couleur du texte";
	o["BackColor"]      = "Changer la couleur d'arri\xe8re plan";
	o["Find"]           = "Chercher et Remplacer";
	o["InsertChar"]     = "Caract\xe8res sp\xe9ciaux";
	o["HorizontalRule"] = "Ligne Horizontale";
	o["Link"]           = "Cr\xe9er un hyperlien";
	o["Image"]          = "Ins\xe9rer une image";
	o["Table"]          = "Cr\xe9ation Tableau";
	o["Clear"]          = "Nettoyer la mise en forme";
	o["ClearFont"]      = "Nettoyer tags de polices ";
	o["Word"]           = "Nettoyer tags Word";
	o["HtmlMode"]       = "Basculer en mode html/texte";
	o["Normal"]         = "Paragraphe"; //or "normal"
	o["Heading1"]       = "Titre 1";
	o["Heading2"]       = "Titre 2";
	o["Heading3"]       = "Titre 3";
	o["Heading4"]       = "Titre 4";
	o["Heading5"]       = "Titre 5";
	o["Heading6"]       = "Titre 6";
	o["Address"]        = "Adresse";
	o["Formatted"]      = "Format\xe9";
	o["None"]           = "Aucun";

// Swedish (by davidholm)
var o = locale["se"] = new Object;

	o["Bold"]           = "Fet";
	o["Italic"]         = "Kursiv";
	o["Underline"]      = "Understruken";
	o["StrikeThrough"]  = "Genomstruken";
	o["SubScript"]      = "Neds\xe4nkt";
	o["SuperScript"]    = "Upph\xf6jt";
	o["JustifyLeft"]    = "V\xe4nster justerad";
	o["JustifyCenter"]  = "Centrerad";
	o["JustifyRight"]   = "H\xf6ger justerad";
	o["JustifyFull"]    = "Utj\xe4mnad";
	o["UnorderedList"]  = "Punktlista";
	o["OrderedList"]    = "Numrerad Lista";
	o["Indent"]         = "Indragen text";
	o["Outdent"]        = "Minska indrag";
	o["ForeColor"]      = "Textf\xe4rg";
	o["BackColor"]      = "Bakgrundsf\xe4rg";
	o["Find"]           = "S\xf6k och ers\xe4tt";
	o["InsertChar"]     = "Special tecken";
	o["HorizontalRule"] = "Horisontal linje";
	o["Link"]           = "Skapa Hyperl\xe4nk";
	o["Image"]          = "Infoga bild";
	o["Table"]          = "Skapa tabell";
	o["Clear"]          = "Rensa formattering";
	o["ClearFont"]      = "Rensa Font Taggar";
	o["Word"]           = "Rensa Word taggar";
	o["HtmlMode"]       = "Skifta mellan html/text";
	o["Normal"]         = "Stycke";
	o["Heading1"]       = "Rubrik 1";
	o["Heading2"]       = "Rubrik 2";
	o["Heading3"]       = "Rubrik 3";
	o["Heading4"]       = "Rubrik 4";
	o["Heading5"]       = "Rubrik 5";
	o["Heading6"]       = "Rubrik 6";
	o["Address"]        = "Adress";
	o["Formatted"]      = "Formaterad";
	o["None"]           = "Ingen";
