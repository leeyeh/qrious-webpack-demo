import QRious from 'qrious';

document.write('<img src="' + new QRious({
  value: 'https://url.leanapp.cn/UcPRalN',
  size: 180,
}).toDataURL() + '"/>');
