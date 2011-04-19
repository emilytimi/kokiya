// Created by iWeb 3.0.3 local-build-20110407

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('huan_ying_files/huan_yingMoz.css')
Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id1');applyEffects()}
function onPageUnload()
{Widget.onunload();}
