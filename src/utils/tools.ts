// 判断手机类型
export function getPhoneType() {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  // var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    return 'isAndroid';
  } else {
    return 'isiOS';
  }
}

// Android返回true
export function isAndroidDevice() {
  var type = getPhoneType();
  if (type == 'isAndroid') {
    return true;
  } else {
    return false;
  }
}

// IOS返回true
export function isIOSDevice() {
  var type = getPhoneType();
  if (type == 'isiOS') {
    return true;
  } else {
    return false;
  }
}

// 是手机返回true，pc返回false
export function isPhone(): boolean {
  var browser = {
    versions: function () {
      var u = navigator.userAgent;
      return {
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Firefox') > -1, //火狐内核Gecko
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android
        iPhone: u.indexOf('iPhone') > -1, //iPhone
        iPad: u.indexOf('iPad') > -1, //iPad
        webApp: u.indexOf('Safari') > -1 //Safari
      };
    }(),
  };
  if (browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone || browser.versions.iPad) {
    return true;
  }
  return false;
}

//获取手机的宽度和高度
export function getPhoneHeightAndWidth() {
  let width = document.body.offsetWidth, height = document.body.clientHeight;
  return {
    width, height
  };
}

//加入版本号按照时间来命名
export function setTimeVersion() {
  let timeDate = new Date();
  let year = timeDate.getFullYear();
  let month = timeDate.getMonth();
  let day = timeDate.getDay();
  let getHours = timeDate.getHours();
  let minutes = timeDate.getMinutes();
  let seconds = timeDate.getSeconds();
  let TIME_VERSION = `${year}${month}${day}${getHours}${minutes}${seconds}`;
  return TIME_VERSION;
}

// 数组去重
export function unique(array: any) {
  return [...new Set(array)];
}

// 对象组成的数组去重
export function objectArrayUnique(array: any) {
  for(let i = 0; i < array.length; i++) {
    let current = array[i];
    for(let j = array.length - 1; j > i; j--) {
      let nextItem = array[j];
      if (JSON.stringify(nextItem) === JSON.stringify(current) && nextItem !== current) {
        array.splice(j, 1);
      }
    }
  }
}

//秒转分||时
export function secondFormatToMinute(value: any) {
  let secondTime: any = parseInt(value); // 秒
  let minuteTime: any = 0; // 分
  let hourTime: any = 0; // 小时
  if (secondTime > 60) {
    minuteTime = parseInt((secondTime / 60).toString());
    secondTime = parseInt((secondTime % 60).toString());
    if (secondTime < 10) {
      secondTime = "0" + secondTime;
    }
    if (minuteTime > 60) {
      hourTime = parseInt((minuteTime / 60).toString());
      minuteTime = parseInt((minuteTime % 60).toString());
    }
  }
  let result = "" + parseInt(secondTime);
  if ((minuteTime > 0) && (minuteTime < 60)) {
    result = "" + parseInt(minuteTime) + "分" + result + "秒";
  } else {
    result = "" + parseInt(secondTime) + "秒";
  }
  if (hourTime > 0) {
    result = "" + parseInt(hourTime) + "时" + result;
  }
  value = result;
  return result;
}

