//$Id: ctype.js,v 1.3 2001/05/24 18:50:45 pdwivedi Exp $
//$Source: /bbsrc/web/jscommon/ctype.js,v $
//	Contains various functions for determining various things about characters

function isdigit(txt)
{
	if (txt >= '0' && txt <= '9')
	{
		return true
	}
	else
	{
		return false
	}
}

function isnumber(txt)
{
	len = txt.length
	if (len == 0)
	{
		return false
	}
	for (i = 0; i < txt.length; i++)
	{
		if (isdigit(txt.substring(i, i + 1)) == false)
		{
			return false
		}
	}
	return true
}

function isspace(txt)
{
	if (txt == ' ')
	{
		return true
	}
	else
	{
		return false
	}
}

function isblank(txt)
{
	len = txt.length
	if (len == 0)
	{
		return true
	}
	for (i = 0; i < txt.length; i++)
	{
		if (isspace(txt.substring(i, i + 1)) == false)
		{
			return false
		}
	}
	return true
}

function hasblank(txt)
{
	len = txt.length
	if (len == 0)
	{
		return false
	}
	for (i = 0; i < txt.length; i++)
	{
		if (isspace(txt.substring(i, i + 1)) == true)
		{
			return true
		}
	}
	return false
}

function isalpha(txt)
{
	if (txt >= 'a' && txt <= 'z')
	{
		return true
	}
	if (txt >= 'A' && txt <= 'Z')
	{
		return true
	}
	return false
}

function isalphanum(txt)
{
	if ((isalpha(txt) == false) && (isdigit(txt) == false))
	{
		return false
	}
	else
	{
		return true
	}
}
		
function isemail(txt)
{
	// format must be string0@string1.string2

	var string_ct_arr = new Array(0,0,0)

	if (isblank(txt) == true)
	{
		return false
	}
	if (hasblank(txt) == true)
	{
		return false
	}
	if (isalphanum(txt.substring(0, 1)) == false)
	{
		return false
	}

	arr_idx = 0;
	for (i = 0; i < txt.length; i++)
	{
		if (txt.substring(i, i + 1) == '@')
		{
			arr_idx = 1
			continue
		}
		if (txt.substring(i, i + 1) == '.')
		{
			if (arr_idx == 1)
			{
				// only want to treat . as a separator if already seen @;
				// this covers john.smith@aol.com
				arr_idx = 2
				continue
			}
		}
		string_ct_arr[arr_idx]++
	}
	for (i = 0; i <= 2; i++)
	{
		if (string_ct_arr[i] == 0)
		{
			return false
		}
	}
	return true
}

function isvalidticker(txt)
{
  len = txt.length
  if( len == 0 )
  {
    return false
  }

  firstchar = txt.substring( 0, 1);
  if( isspace( firstchar ) || 
      ( !isalphanum( firstchar ) && firstchar != '^' ) )
  {
    return false
  }
  return true
}
