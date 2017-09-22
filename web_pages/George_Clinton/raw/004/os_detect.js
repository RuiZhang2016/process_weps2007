
/**
 * Constructor OSDetector
 */
function OSDetector()
{
  //properties
  this.os                       = navigator.userAgent.toLowerCase();
  this.appVer                   = navigator.appVersion.toLowerCase();
  this.minorVersion             = parseFloat(this.appVer);
  this.majorVersion             = parseInt(this.minorVersion)

  this._isWindows               = false;
  this._isWindows16             = false;
  this._isWindows31             = false;  
  this._isWindows95             = false;
  this._isWindows98             = false;
  this._isWindowsME             = false;
  this._isWindowsNT             = false;
  this._isWindows2K             = false;
  this._isWindowsXP             = false;
  this._isWindows32             = false;         
  this._isWindowsDotNet         = false;
	this._isWindowsVista          = false;
  
  this._isMac                   = false;
  this._isMac68K                = false;
  this._isMacPPC                = false;
  this._isMacOS8                = false;
  this._isMacOS9                = false;
  this._isMacOSX                = false;
             
  //methods
  this.isWindows                = isWindows;
  this.isWindows16              = isWindows16;
  this.isWindows31              = isWindows31;  
  this.isWindows95              = isWindows95;
  this.isWindows98              = isWindows98;
  this.isWindowsME              = isWindowsME;
  this.isWindowsNT              = isWindowsNT;
  this.isWindows2K              = isWindows2K;
  this.isWindowsXP              = isWindowsXP;
  this.isWindows32              = isWindows32;
  this.isWindowsDotNet          = isWindowsDotNet;
  this.isWindowsVista           = isWindowsVista;
  
  this.isMac                    = isMac;
  this.isMac68K                 = isMac68K;
  this.isMacPPC                 = isMacPPC;
  this.isMacOS8                 = isMacOS8;  
  this.isMacOS9                 = isMacOS9;  
  this.isMacOSX                 = isMacOSX;  
  
  this.getOs                    = getOs;  
  this.detect                   = detect;
  this.isPlayerPossible         = isPlayerPossible;
}//end constructor

/**
 * detect
 */
function detect()
{
  //windows os
  this._isWindows               = ((this.getOs().indexOf("win") != -1) || (this.getOs().indexOf("16bit") != -1));
  this._isWindows95             = ((this.getOs().indexOf("win95") != -1) || (this.getOs().indexOf("windows 95") != -1));
  this._isWindows16             = ((this.getOs().indexOf("win16") != -1) || (this.getOs().indexOf("16bit") != -1) || (this.getOs().indexOf("windows 3.1") != -1) || (this.getOs().indexOf("windows 16-bit") != -1) );
  this._isWindows31             = ((this.getOs().indexOf("windows 3.1") != -1) || (this.getOs().indexOf("win16") != -1) || (this.getOs().indexOf("windows 16-bit") != -1));	
  this._isWindowsME             = ((this.getOs().indexOf("win 9x 4.90") != -1));
  this._isWindows98             = ((this.getOs().indexOf("win98") != -1) || (this.getOs().indexOf("windows 98") != -1));
  this._isWindowsNT             = ((this.getOs().indexOf("winnt") != -1));  
  this._isWindows2K             = ((this.getOs().indexOf("windows nt 5.0") != -1) || (this.getOs().indexOf("windows 2000") != -1));
  this._isWindowsXP             = ((this.getOs().indexOf("windows nt 5.1") != -1) || (this.getOs().indexOf("windows xp") != -1));
  this._isWindowsDotNet         = ((this.getOs().indexOf("windows nt 5.2") != -1));
  this._isWindowsVista          = ((this.getOs().indexOf("vista") != -1) || (this.getOs().indexOf("windows nt 6") != -1));
  this._isWindows32             = (this.isWindows95() || this.isWindowsNT() || this.isWindows98() || ((navigator.appVersion >= 4) && (navigator.platform == "Win32")) || (this.os.indexOf("win32") != -1) || (this.os.indexOf("32bit") != -1));

  
  //mac os  
  this._isMac                   = (this.getOs().indexOf("mac") != -1);
  this._isMac68K                = (this.isMac() && ((this.getOs().indexOf("68k") != -1) || (this.getOs().indexOf("68000") != -1)));
  this._isMacPPC                = (this.isMac() && ((this.getOs().indexOf("ppc") != -1) || (this.getOs().indexOf("powerpc") != -1)));
  this._isMacOS8                = (this.isMac() && ((this.getOs().indexOf("os 8") != -1) || (this.getOs().indexOf("os8") != -1)));
  this._isMacOS9                = (this.isMac() && ((this.getOs().indexOf("os 9") != -1) || (this.getOs().indexOf("os9") != -1)));
  this._isMacOSX                = (this.isMac() && ((this.getOs().indexOf("powerpc") != -1) || (this.getOs().indexOf("osx") != -1) || (this.getOs().indexOf("os x") != -1)));    
  
  if (this.isMac()) this._isWindows =! this._isMac;

}//end method

/**
 * getOs - returns the os property
 */
function getOs()
{
  return this.os;
}//end method

/**
 * isWindows - is windows, any version
 */
function isWindows()
{
  return this._isWindows;
}//end method

/**
 * isWindows16 - is windows 16 bit
 */
function isWindows16()
{
  return this._isWindows16;
}//end method

/**
 * isWindows31 - is windows 3.1
 */
function isWindows31()
{
  return this._isWindows31;
}//end method

/**
 * isWindows95 - is windows 95
 */
function isWindows95()
{
  return this._isWindows95;
}//end method

/**
 * isWindows98 - is windows 98
 */
function isWindows98()
{ 
  return this._isWindows98;
}//end method

/**
 * isWindowsME - is windows me
 */
function isWindowsME()
{
  return this._isWindowsME;
}//end method

/**
 * isWindowsNT - is windows NT
 */
function isWindowsNT()
{
  return this._isWindowsNT;
}//end method

/**
 * isWindows2K - is windows 2000
 */
function isWindows2K()
{
  return this._isWindows2K;
}//end method

/**
 * isWindowsXP - is windows xp
 */
function isWindowsXP()
{
  return this._isWindowsXP;
}//end method

/**
 * isWindows32 - is windows 32 bit
 */
function isWindows32()
{
  return this._isWindows32;
}//end method

/**
 * isWindows64 - is windows 64 bit
 */
function isWindows64()
{
  return this._isWindows64;
}//end method

/**
 * isWindowsDotNet - is windows dot net
 */
function isWindowsDotNet()
{
  return this._isWindowsDotNet;
}//end method

/**
 * isWindowsVista - is windows vista
 */
function isWindowsVista()
{
  return this._isWindowsVista;
}//end method


/**
 * isMac - is mac os any version
 */
function isMac()
{
  return this._isMac;
}//end method

/**
 * isMac68K is mac 6800 series
 */
function isMac68K()
{
  return this._isMac68K;
}//end method

/**
 * isMacPPC is mac power pc
 */
function isMacPPC()
{  
  return this._isMacPPC;
}//end method

/**
 * isMacOS8 is mac os 8
 */ 
function isMacOS8()
{
  return this._isMacOS8;
}//end method

/**
 * isMacOS9 is mac os 9
 */
function isMacOS9()
{
  return this._isMacOS9;
}//end method

/**
 * isMacOSX is mac os x
 */
function isMacOSX()
{
  return this._isMacOSX;
}//end method

/**
 * isPlayerPossible
 */
function isPlayerPossible()
{
  //all these platforms cant get wmp 9
  if (this.isWindows95() || 
      this.isWindowsNT() || 
      this.isWindows98() || 
      this.isWindowsME() || 
      this.isMacOS9() || 
      this.isMacOS9() || 
      this.isMacOS8() || 
      this.isMacPPC() || 
      this.isMac68K() )
  {    
    return false;
  }
  return true;
}//end method

os = new OSDetector();
os.detect();


//for wmp detection
/*
if (os.isWindows())
{
  if (isPlayerPossible())
  {
    //player possible, do player detection  
  }
  else
  {
    //no player possible, download vmc
  }
}
*/