document.getElementById('btnMakeQR').onclick = () => {
  const url = document.getElementById('urlInput').value.trim();
  if(!url){alert('Nhập URL trước!');return;}
  document.getElementById('qrBox').innerText = 'QR: ' + url;
  document.getElementById('qrUrlSizeHint').innerText = 'Dung lượng ~ ' + url.length + ' bytes';
};
document.getElementById('btnMakeRedirect').onclick = () => {
  const url = document.getElementById('urlInput').value.trim();
  if(!url){alert('Nhập URL trước!');return;}
  const blob = new Blob([`<meta http-equiv="refresh" content="0;url=${url}">`], {type:'text/html'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'redirect.html';
  a.click();
};
document.getElementById('chatBtn').onclick = () => {
  window.location.href = 'mailto:example@example.com?subject=Liên hệ&body=Xin chào';
};
