function getEle(id) {
  return document.getElementById(id);
}
function checkoutlogin() {
  var checkoutPass = getEle("loginPassword");
  var checkoutName = getEle("loginName");
  var thongbao = getEle("thongbao");
  var alert = getEle("alert");
  if (
    checkoutName.value == "Hoangthinh2209" &&
    checkoutPass.value == "dinhthinh"
  ) {
    alert.style.backgroundColor = "green";
    thongbao.innerHTML = "Đăng nhập thành công";
  } else {
    alert.style.backgroundColor = "red";
    thongbao.innerHTML = "Đăng nhập không thành công";
  }
}

// ADD CLASS HEADER

var shrinkheader = 1;
window.onscroll = function () {
  if (
    document.body.scrollTop > shrinkheader ||
    document.documentElement.scrollTop > shrinkheader
  ) {
    $("header").addClass("headerShrink");
  } else {
    $("header").removeClass("headerShrink");
  }
};

function donate() {
  var chooseUstitle = getEle("title");
  chooseUstitle.innerHTML = "Đã Donate";
  chooseUstitle.style.backgroundColor = "red";
  chooseUstitle.style.width = "300px";
}

getEle("clickDonate").onclick = function () {
  kiemTraChonQuyNao();
  kiemTraSoTien();
};

getEle("closeOverlay").onclick = function () {
  getEle("overlay").style.display = "none";
  getEle("tableThongBao").innerHTML = "";
  getEle("tableTotal").innerHTML = "";
};

function kiemTraChonQuyNao() {
  var quyCam = getEle("quyCam");
  var quyBuoi = getEle("quyBuoi");
  var quyChuoi = getEle("quyChuoi");
  var thongBao = getEle("tableThongBao");
  if (quyCam.checked) {
    return (thongBao.innerHTML = "Quỹ Cam");
  } else if (quyBuoi.checked) {
    return (thongBao.innerHTML = "Quỹ Bưởi");
  } else if (quyChuoi.checked) {
    return (thongBao.innerHTML = "Quỹ Chuối");
  }
}

function kiemTraSoTien() {
  var soTien = getEle("inputDonate").value;
  if (soTien < 100000) {
    alert("Vui lòng nhập số tiền lớn hơn 100000");
    getEle("overlay").style.display = "none";
  } else if (soTien > 1000000000) {
    alert("Vui lòng nhập số tiền nhỏ hơn 1000000000");
    getEle("overlay").style.display = "none";
  } else {
    getEle("overlay").style.display = "block";
    getEle("tableTotal").innerHTML = soTien + " VNĐ";
  }
}
