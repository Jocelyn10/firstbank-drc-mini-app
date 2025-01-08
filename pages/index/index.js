Page({
  onLoad() {
  },
  makePhoneCall() {
    my.makePhoneCall({ number: '*426#' });
  },
  onShareAppMessage() {
    return {
      title: 'Equity App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
