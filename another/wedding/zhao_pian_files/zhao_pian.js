// Created by iWeb 3.0.3 local-build-20110413

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.kokiya.com/wedding/zhao_pian_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.kokiya.com/wedding',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.kokiya.com/wedding',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(191,191),new IWSize(191,0),new IWSize(191,206),27,27,0,new IWSize(22,31)),new IWPhotoFrame([IWCreateImage('zhao_pian_files/FormalShadow_01.png'),IWCreateImage('zhao_pian_files/FormalShadow_02.png'),IWCreateImage('zhao_pian_files/FormalShadow_03.png'),IWCreateImage('zhao_pian_files/FormalShadow_06.png'),IWCreateImage('zhao_pian_files/FormalShadow_12.png'),IWCreateImage('zhao_pian_files/FormalShadow_11.png'),IWCreateImage('zhao_pian_files/FormalShadow_10.png'),IWCreateImage('zhao_pian_files/FormalShadow_04.png')],null,2,0.700000,1.000000,5.000000,1.000000,4.000000,17.000000,17.000000,17.000000,36.000000,4.000000,837.000000,4.000000,837.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:1,transitionIndex:0},'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('zhao_pian_files/zhao_pianMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id2');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
