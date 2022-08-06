let tinhTrungBinh = (...diem) => {
  let trungBinh = 0;
  for (let i = 0; i < diem.length; i++) {
    trungBinh += diem[i] / diem.length;
  }
  return trungBinh;
};
const getElement = (id) => document.getElementById(id);

document.querySelector("#btnKhoi1").onclick = () => {
  let diemToan = getElement("inpToan").value;
  let diemLy = getElement("inpLy").value;
  let diemHoa = getElement("inpHoa").value;

  let diemTB = tinhTrungBinh(diemToan, diemLy, diemHoa);
  getElement("tbKhoi1").innerHTML = diemTB;
};

document.querySelector("#btnKhoi2").onclick = () => {
  let diemVan = getElement("inpVan").value;
  let diemSu = getElement("inpSu").value;
  let diemDia = getElement("inpDia").value;
  let diemEnglish = getElement("inpEnglish").value;

  let diemTB = tinhTrungBinh(diemVan, diemSu, diemDia, diemEnglish);
  getElement("tbKhoi2").innerHTML = diemTB;
};
