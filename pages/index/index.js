Page({
  onLoad() {},
  makePhoneCall() {
    my.makePhoneCall({
      number: '*426#'
    });
  },
  onShareAppMessage() {
    return {
      title: 'FirstBank DRC',
      desc: 'FirstBank DRC description',
      path: 'pages/index/index',
    };
  },
});