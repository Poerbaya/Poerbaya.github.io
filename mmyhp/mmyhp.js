var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
<!--
function SetHomePage(sTarget, sPath, sAffiliateID)
{
    var sArgs = sTarget + "&" + sPath + "&" + sAffiliateID;
    var ms = navigator.appVersion.indexOf("MSIE");
    if (ms != -1)  // IE
    {
    	var ver = parseInt(navigator.appVersion.substring(ms+5, ms+6))
    	if (ver >= 3) // Version
    	{
    		var mac = navigator.appVersion.indexOf("MAC");
    		if (mac != -1)  // Mac
    		{
    			document.location.href=(AddPaths(sPath, 'mmyhpIEFail.htm?' + sArgs));
    		}
    		else  // PC/Unix
    		{
			if (ver <= 3){
			 document.location.href='/mmhyp/mmyhpIE.htm?www.ask.com&/mmyhp&undefined';
			 }else{
			 document.location.href=(AddPaths(sPath, 'mmyhpIE.htm?' + sArgs));
			 }
			}
	   	}
	}
    else // Not IE
    {
    	var nn = navigator.appName.indexOf("Netscape")
    	if (nn != -1) // Netscape
    	{
    		var ver = parseInt(navigator.appVersion.substring(0, 1))
    		if (ver >= 3) // Version
    		{
	    		var mac = navigator.appVersion.indexOf("MAC");
	    		if (mac != -1)  // Mac
	    		{
	    			document.location.href=(AddPaths(sPath, 'mmyhpNNFail.htm?' + sArgs));
	    		}
	    		else  // PC
	    		{
	    			if (ver == 3){
					document.location.href='/mmyhp/mmyhpNNFail.htm';
					}
					else
					{
	    			document.location.href=(AddPaths(sPath, 'mmyhpNN.htm?' + sArgs));
					}
	    		}
    		}
    	}
    }
}

function GetTarget()
{
	var nStart = location.search.indexOf("?")+1;
	var nEnd = location.search.indexOf("&", nStart);
	return location.search.substring(nStart, nEnd);
}

function GetPath()
{
	var nStart = location.search.indexOf("&")+1;
	var nEnd = location.search.indexOf("&", nStart);
	return location.search.substring(nStart, nEnd);
}	

function GetAffiliateID()
{
	var nStart = location.search.indexOf("&")+1;
	nStart = location.search.indexOf("&", nStart)+1;
	var nEnd = location.search.length;
	
	var sRet = "";
	if (nStart > 1)
	{
		sRet = location.search.substring(nStart, nEnd);
		if (sRet == "undefined")
			sRet = "";
	}
	return sRet;
}	

function GetArgs()
{
	var nStart = location.search.indexOf("?")+1;
	var nEnd = location.search.length;
	return location.search.substring(nStart, nEnd);
}

function ModifyCurrPath(sCurrPage, sNewPage)
{
	var sNewPath;
	var nStart = location.href.lastIndexOf(sCurrPage);
	if (nStart > 0)
	{
		sNewPath = location.href.substring(0, nStart) + sNewPage + location.href.substring(nStart+sCurrPage.length, location.href.length)
	}
	
	return sNewPath;
}

function AddPaths(sLHS, sRHS)
{
	var nPos;
	var sRet = "";
	
	nPos = sLHS.length;
	if (sLHS.substring(nPos, nPos) == "/" || sLHS.substring(nPos, nPos) == "\\")
		nPos = nPos-1;
	sRet = sLHS.substring(0, nPos);
	
	sRet = sRet + "/";
	
	nPos = 0;
	if (sRHS.substring(1, 1) == "/" || sRHS.substring(1, 1) == "\\")
		nPos = 1;
	sRet = sRet + sRHS.substring(nPos, sRHS.length);
	
	return sRet;
}
//-->
}