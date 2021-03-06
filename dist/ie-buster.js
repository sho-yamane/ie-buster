/*! IE Buster v1.0.2 MIT by Qrac */

function ieBusterUserAgentCheck() {
  var ieBusterUserAgent = window.navigator.userAgent.toLowerCase()
  if (
    ~ieBusterUserAgent.indexOf("msie") ||
    ~ieBusterUserAgent.indexOf("trident")
  )
    return true
}

if (ieBusterUserAgentCheck()) {
  var ieBusterTarget = document.getElementsByTagName("body")[0]
  var ieBusterApp = document.createElement("div")
  ieBusterApp.innerHTML =
    '<div style="position: fixed; top: 0px; left: 0; width: 100%; padding: 16px; box-sizing: border-box; z-index: 999999;">' +
    '<div style="width: 100%; max-width:866px; margin: 0 auto; padding: 16px 20px; background-color: #fff; box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px 0px; box-sizing: border-box; font-family: SegoeUI, Meiryo, sans-serif;">' +
    '<p style="display: block; float: left; width: 100%; max-width: 664px; margin: 0; color: #000; font-size: 14px; font-weight: 400; line-height: 1.5;">' +
    "ご利用のインターネットブラウザは推奨環境ではありません。セキュリティリスクが高い状態ですので、最新の Google Chrome をご利用ください。" +
    "</p>" +
    '<a style="display: block; float: right; height: 36px; width: 154px; padding: 0 16px; background-color: rgb(0, 120, 212); box-sizing: border-box; color: #fff; font-size: 12px; font-weight: 400; line-height: 36px; text-align: center; text-decoration: none; white-space: nowrap;" href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">ダウンロードページへ</a>' +
    '<div style="clear: both;"></div>' +
    "</div>" +
    "</div>"
  ieBusterTarget.appendChild(ieBusterApp)
}
