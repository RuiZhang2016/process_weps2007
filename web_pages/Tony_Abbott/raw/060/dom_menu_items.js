// {{{ domMenu_vertical: data

var curDate = new Date();
var curMonth = curDate.getMonth() + 1;
var curYear = curDate.getFullYear();

domMenu_data.setItem('domMenu_vertical', new domMenu_Hash(
    1, new domMenu_Hash(
        'contents', '&nbsp; <a class="lhmenu" href="/">Home</a>',
        'uri', '/',
        'target', '_self',
        'statusText', 'Home'
    ),
    2, new domMenu_Hash(
        'contents', '&nbsp; <a class="lhmenu" href="section.asp?name=economics">Economics</a>',
        'uri', 'section.asp?name=economics',
        'statusText', 'Economics'
    ),
	3, new domMenu_Hash(
		'contents', '&nbsp; <a class="lhmenu" href="section.asp?name=environment">Environment</a>',
		'uri', 'section.asp?name=environment',
		'statusText', 'Environment'
	),
    4, new domMenu_Hash(
        'contents', '&nbsp; <a class="lhmenu" href="feature.asp">Features</a>',
        'uri', 'feature.asp',
        'statusText', 'Features',
        1, new domMenu_Hash(
            'contents', 'Current',
            'uri', 'feature.asp?year=' + curYear + '&month=' + curMonth + '',
            'statusText', 'Current'
        ),
        2, new domMenu_Hash(
            'contents', 'Past',
	        'uri', 'feature.asp',
            'statusText', 'Past'
        )
    ),
	5, new domMenu_Hash(
		'contents', '&nbsp; <a class="lhmenu" href="section.asp?name=health">Health</a>',
		'uri', 'section.asp?name=health',
		'statusText', 'Health'
	),
	6, new domMenu_Hash(
		'contents', '&nbsp; <a class="lhmenu" href="section.asp?name=international">International</a>',
		'uri', 'section.asp?name=international',
		'statusText', 'International'
	),
    7, new domMenu_Hash(
        'contents', '&nbsp; <a class="lhmenu" href="section.asp?name=leisure">Leisure</a>',
        'uri', 'section.asp?name=leisure',
        'statusText', 'Leisure',
        1, new domMenu_Hash(
            'contents', 'Arts',
            'uri', 'section.asp?name=arts',
            'statusText', 'Arts'
        ),
        2, new domMenu_Hash(
            'contents', 'Cartoons',
            'uri', 'section.asp?name=cartoons',
            'statusText', 'Cartoons'
        ),
        3, new domMenu_Hash(
            'contents', 'Humour',
            'uri', 'section.asp?name=satire',
            'statusText', 'Humour'
        ),
        4, new domMenu_Hash(
            'contents', 'Media',
            'uri', 'section.asp?name=media',
            'statusText', 'Media'
        ),
        5, new domMenu_Hash(
            'contents', 'Sport',
            'uri', 'section.asp?name=sport',
            'statusText', 'Sport'
        )
    ),
    8, new domMenu_Hash(
        'contents', '&nbsp; <a class="lhmenu" href="section.asp?name=people">People</a>',
        'uri', 'section.asp?name=people',
        'statusText', 'People',
        1, new domMenu_Hash(
            'contents', 'Education',
            'uri', 'section.asp?name=education',
            'statusText', 'Education'
        ),
        2, new domMenu_Hash(
            'contents', 'Indigenous',
            'uri', 'section.asp?name=indigenous',
            'statusText', 'Indigenous'
        ),
        3, new domMenu_Hash(
            'contents', 'Infrastructure',
            'uri', 'section.asp?name=renovating',
            'statusText', 'Infrastructure'
        ),
        4, new domMenu_Hash(
            'contents', 'Law &amp; Liberties',
            'uri', 'section.asp?name=law',
            'statusText', 'Law &amp; Liberties'
        ),
        5, new domMenu_Hash(
            'contents', 'Religion',
            'uri', 'section.asp?name=spirituality',
            'statusText', 'Religion'
        ),
        6, new domMenu_Hash(
            'contents', 'Society',
            'uri', 'section.asp?name=society',
            'statusText', 'Society'
        )
    ),
    9, new domMenu_Hash(
        'contents', '&nbsp; <a class="lhmenu" href="section.asp?name=politics">Politics</a>',
        'uri', 'section.asp?name=politics',
        'statusText', 'Politics',
        1, new domMenu_Hash(
            'contents', 'Domestic',
            'uri', 'section.asp?name=domestic',
            'statusText', 'Domestic'
        ),
        2, new domMenu_Hash(
            'contents', 'Philosophy',
            'uri', 'section.asp?name=liberty',
            'statusText', 'Philosophy'
        )
    ),
	10, new domMenu_Hash(
		'contents', '&nbsp; <a class="lhmenu" href="section.asp?name=technology">Technology</a>',
		'uri', 'section.asp?name=technology',
		'statusText', 'Technology'
	),
	11, new domMenu_Hash(
		'contents', '&nbsp; <a class="lhmenu" href="author.asp">Authors</a>',
		'uri', 'author.asp',
		'statusText', 'Authors'
	)
));

// }}}
// {{{ domMenu_vertical: settings

domMenu_settings.setItem('domMenu_vertical', new domMenu_Hash(
    'axis', 'vertical',
    'subMenuWidthCorrection', -1,
    'verticalSubMenuOffsetX', -1,
    'verticalSubMenuOffsetY', -1,
    'horizontalSubMenuOffsetX', 2,
    'horizontalSubMenuOffsetY', 0
));

// }}}