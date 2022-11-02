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

