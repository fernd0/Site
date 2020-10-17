var linkInsta = document.querySelector("a");
var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i),
    isTablet = navigator.userAgent.toLowerCase().match(/tablet/i),
    isAndroid = navigator.userAgent.toLowerCase().match(/android/i),
    isiPhone = navigator.userAgent.toLowerCase().match(/iphone/i),
    isiPad = navigator.userAgent.toLowerCase().match(/ipad/i);

if (isiPhone || isiPad == "True") 
{
    linkInsta.href = "instagram://user?username=ferndo.ct";
} else if (isAndroid == "True")
{
    linkInsta.href = "intent://www.instagram.com/ferndo.ct/#Intent;package=com.instagram.android;scheme=https;end";
}
else 
{
    linkInsta.href = "https://www.instagram.com/ferndo.ct/";
}