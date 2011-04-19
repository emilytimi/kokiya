// Created by iWeb 3.0.3 local-build-20110403

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id1" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="307" height="16"><param name="src" value="Media/A%20Wish.mp3" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id1" type="video/quicktime" width="307" height="16"><param name="src" value="Media/A%20Wish.mp3"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id1" type="video/quicktime" width="307" height="16" data="Media/A%20Wish.mp3"><param name="src" value="Media/A%20Wish.mp3"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('HOME_files/HOMEMoz.css')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
