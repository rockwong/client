const client = new ClientJS();
const showClientInfo = () => {
  const bodyEle = document.getElementsByTagName('body')[0];
  const bodyHeight = bodyEle.clientHeight;
  const bodyWith = bodyEle.clientWidth;
  const clientObj = {
    agent: client.getUserAgent(),
    os: client.getOS(),
    screen: client.getScreenPrint(),
    body: `Width:${bodyWith},Height:${bodyHeight}`,
    timeZone: client.getTimeZone(),
    language: client.getLanguage(),
    fonts: client.getFonts()
  };
  const clientStr = Object.keys(clientObj).map(
    key => `<li><span class="title">${key}</span><span class="txt">${clientObj[key]}</span></li>`
  );
  $('#slide0 ul').html(clientStr);
};
$(function() {
  showClientInfo();
  setInterval(showClientInfo, 2000);
});
