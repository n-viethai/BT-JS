// Bài tập 1 : tính lương

document.getElementById('btnCalSalary').onclick = function () {
    var dayWork = document.getElementById('dayWork').value
    var totalSalary

    totalSalary = dayWork * 100000
    document.getElementById('salary').value = totalSalary.toLocaleString()
}

// bài tập 2 : tính trung bình cộng 5 số

document.getElementById('average').onclick = function () {
    var firstNumber = document.getElementById('firstNumber').value
    var secondNumber = document.getElementById('secondNumber').value
    var thirdNumber = document.getElementById('thirdNumber').value
    var fourdNumber = document.getElementById('fourdNumber').value
    var fifthNumber = document.getElementById('fifthNumber').value

    var averageValue =
        (Number(firstNumber) +
            Number(secondNumber) +
            Number(thirdNumber) +
            Number(fourdNumber) +
            Number(fifthNumber)) /
        5

    document.getElementById('averageValue').value = averageValue
}

// bài tập 3 : quy đổi USD sang VNĐ

document.getElementById('moneyConvert').onclick = function () {
    var soTienUSD = document.getElementById('soTienUSD').value
    var soTienQuyDoi

    soTienQuyDoi = soTienUSD * 23500

    document.getElementById('soTienVND').value = soTienQuyDoi.toLocaleString()
}

// bài 4: tính chu vi và diện tích hình chữ nhật

document.getElementById('tinhHCN').onclick = function () {
    var chieuDai = document.getElementById('chieuDai').value
    var chieuRong = document.getElementById('chieuRong').value

    var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2
    var dienTich = Number(chieuDai) * Number(chieuRong)

    document.getElementById('chuVi').value = chuVi
    document.getElementById('dienTich').value = dienTich
}

// bài 5: tính tổng các chữ sổ của số có 2 chữ số

document.getElementById('tinhTongChuSo').onclick = function () {
    var numberInput = document.getElementById('numberInput').value

    var soHangChuc = parseInt(Number(numberInput) / 10)
    var soHangDonVi = Number(numberInput) % 10

    var tongChuSo = soHangChuc + soHangDonVi

    document.getElementById('sumNumber').value = tongChuSo
}

// BÀI TẬP JS -2
// bài 1 : sắp xếp các số theo thứ tự tăng dần

document.getElementById('sapXep').onclick = function () {
    var so1 = document.getElementById('soThuNhat').value * 1
    var so2 = document.getElementById('soThuHai').value * 1
    var so3 = document.getElementById('soThuBa').value * 1
    function soSanh (a,b){
      if(a >= b){
        return b + ' ' + a 
      }else {
        return a + ' ' + b
      }
    }
    var res
    var sln = so1
    so2 > sln? sln = so2 : so3 > sln? sln = so3 : sln = sln
    if(sln === so1) {
      res = soSanh(so2,so3) + ' ' + so1
    } else if(sln === so2) {
      res = soSanh(so1,so3) + ' ' + so2
    }else {
      res = soSanh(so1,so2) + ' ' + so3
    }
    document.getElementById("daySoTangDan").value = res
}

// var tmp;

// var max1 = soThuNhat
// var max2
// var max3;

// if(soLonHai > soThuBa){
//   max2 = soThuHai;
//   max3 = soThuBa;
// }else{
//   max2 = soThuBa;
//   max3 = soThuHai;
// }

// if(soThuNhat < soThuHai && soThuNhat < soThuBa){
//   if(soThuHai < soThuBa){
//     tmp = soThuNhat
//     soThuNhat = soThuHai
//     soThuHai = tmp
//   }
// }

// if (Number(soThuNhat) < Number(soThuHai)) {
//   soLonNhat = soThuHai;
//   if (Number(soThuHai) > Number(soThuBa)) {
//     soLonNhat = soThuHai;
//     if (Number(soThuNhat) > Number(soThuBa)) {
//       soLonHai = soThuNhat;
//       soBeNhat = soThuBa;
//     } else {
//       soLonHai = soThuBa;
//       soBeNhat = soThuNhat;
//     }
//   } else {
//     soLonNhat = soThuBa;
//     soLonHai = soThuHai;
//     soBeNhat = soThuNhat;
//   }
// } else if (Number(soThuNhat) < Number(soThuBa)) {
//   soLonNhat = soThuBa;
//   soLonHai = soThuNhat;
//   soBeNhat = soThuHai;
// } else {
//   soLonNhat = soThuNhat;
//   if (Number(soThuHai) > Number(soThuBa)) {
//     soLonHai = soThuHai;
//     soBeNhat = soThuBa;
//   } else {
//     soLonHai = soThuBa;
//     soBeNhat = soThuHai;
//   }
// }

//   document.getElementById("daySoTangDan").value =
//     soBeNhat + "     " + soLonHai + "     " + soLonNhat;
// };

// bài 2 : gửi lời chào

document.getElementById('btnLoiChao').onclick = function () {
    var nguoiSuDung = document.getElementById('nguoiSuDung').value
    var loiChao = ''

    if (nguoiSuDung === 'B') {
        loiChao = 'chào bố - hôm nay bố thật là đẹp trai'
    } else if (nguoiSuDung === 'M') {
        loiChao = 'chào mẹ - hôm nay mẹ xinh quá'
    } else if (nguoiSuDung === 'A') {
        loiChao = 'chào anh trai - hôm nay lo học hành chăm chỉ'
    } else {
        loiChao = 'chào em gái - have a nice day!'
    }

    document.getElementById('loiChao').value = loiChao
}

// bài 3

document.getElementById('chanLe').onclick = function () {
    var soThuNhat = document.getElementById('soThuNhatBt3').value
    var soThuHai = document.getElementById('soThuHaiBt3').value
    var soThuBa = document.getElementById('soThuBaBt3').value

    var soChan = 0
    var soLe = 0

    if (Number(soThuNhat) % 2 === 0) {
        soChan += 1
    } else {
        soLe += 1
    }

    if (Number(soThuHai) % 2 === 0) {
        soChan += 1
    } else {
        soLe += 1
    }

    if (Number(soThuBa) % 2 === 0) {
        soChan += 1
    } else {
        soLe += 1
    }

    document.getElementById('soChanSoLe').value =
        'có ' + soChan + ' số chẵn, ' + ' có ' + soLe + ' số lẻ'
}

// bài 4 : xác định tam giác

document.getElementById('xacDinhTamGiac').onclick = function () {
    var canhThuNhat = document.getElementById('canhThuNhat').value
    var canhThuHai = document.getElementById('canhThuHai').value
    var canhThuBa = document.getElementById('canhThuBa').value
    var tamGiac = ''

    var x1 = Number(canhThuNhat)
    var x2 = Number(canhThuHai)
    var x3 = Number(canhThuBa)

    if (
        x1 < x2 + x3 &&
        x1 > x2 - x3 &&
        x1 > x3 - x2 &&
        x2 < x1 + x3 &&
        x2 > x1 - x3 &&
        x2 > x3 - x1 &&
        x3 < x1 + x2 &&
        x3 > x1 - x2 &&
        x3 > x2 - x1
    ) {
        if (x1 === x2 || x1 === x3 || x2 === x3) {
            if (
                x1 * x1 === x2 * x2 + x3 * x3 ||
                x2 * x2 === x1 * x1 + x3 * x3 ||
                x3 * x3 === x1 * x1 + x2 * x2
            ) {
                tamGiac = 'Tam giác vuông cân'
            } else if (x1 === x2 && x2 === x3) {
                tamGiac = 'Tam giác đều'
            } else {
                tamGiac = 'Tam giác cân'
            }
        } else if (
            x1 * x1 === x2 * x2 + x3 * x3 ||
            x2 * x2 === x1 * x1 + x3 * x3 ||
            x3 * x3 === x1 * x1 + x2 * x2
        ) {
            tamGiac = 'Tam giác vuông'
        } else {
            tamGiac = 'Tam giác thường'
        }
    } else {
        tamGiac = 'Không phải 3 cạnh của tam giác, xin mời nhập lại!'
    }

    document.getElementById('tamGiac').value = tamGiac
}

// bài tập js3

// bài 1

document.getElementById('tinhKetQuaTuyenSinh').onclick = function () {
    var diemChuan = document.getElementById('diemChuan').value
    var diemMonThi1 = document.getElementById('diemMon1').value
    var diemMonThi2 = document.getElementById('diemMon2').value
    var diemMonThi3 = document.getElementById('diemMon3').value
    var khuVucDuThi = document.getElementById('khuVucDuThi').value
    var doiTuongDuThi = document.getElementById('doiTuongDuThi').value

    diemChuan = Number(diemChuan)
    diemMonThi1 = Number(diemMonThi1)
    diemMonThi2 = Number(diemMonThi2)
    diemMonThi3 = Number(diemMonThi3)
    doiTuongDuThi = Number(doiTuongDuThi)

    var tongDiemThi
    var diemUuTien
    var ketQuaTuyenSinh = ''

    if (khuVucDuThi === 'A') {
        if (doiTuongDuThi === 1) {
            diemUuTien = 2 + 2.5
        } else if (doiTuongDuThi === 2) {
            diemUuTien = 2 + 1.5
        } else if (doiTuongDuThi === 3) {
            diemUuTien = 2 + 1
        } else {
            diemUuTien = 2
        }
    } else if (khuVucDuThi === 'B') {
        if (doiTuongDuThi === 1) {
            diemUuTien = 1 + 2.5
        } else if (doiTuongDuThi === 2) {
            diemUuTien = 1 + 1.5
        } else if (doiTuongDuThi === 3) {
            diemUuTien = 1 + 1
        } else {
            diemUuTien = 1
        }
    } else if (khuVucDuThi === 'C') {
        if (doiTuongDuThi === 1) {
            diemUuTien = 0.5 + 2.5
        } else if (doiTuongDuThi === 2) {
            diemUuTien = 0.5 + 1.5
        } else if (doiTuongDuThi === 3) {
            diemUuTien = 0.5 + 1
        } else {
            diemUuTien = 0.5
        }
    } else {
        if (doiTuongDuThi === 1) {
            diemUuTien = 2.5
        } else if (doiTuongDuThi === 2) {
            diemUuTien = 1.5
        } else if (doiTuongDuThi === 3) {
            diemUuTien = 1
        } else {
            diemUuTien = 0
        }
    }
    tongDiemThi = diemMonThi1 + diemMonThi2 + diemMonThi3 + diemUuTien
    if (tongDiemThi >= diemChuan && diemMonThi1 !== 0 && diemMonThi2 !== 0 && diemMonThi3 !== 0) {
        ketQuaTuyenSinh = 'Chúc mừng bạn đã trúng tuyển!'
    } else {
        ketQuaTuyenSinh = 'Chúc bạn may mắn lần sau!'
    }

    document.getElementById('tongDiemThi').value = tongDiemThi
    document.getElementById('ketQuaTuyenSinh').value = ketQuaTuyenSinh
}

// bài 2

document.getElementById('tinhTienDien').onclick = function () {
    var soDien = document.getElementById('dienTieuThu').value
    var tienDien

    if (soDien <= 50) {
        tienDien = soDien * 500
    } else if (soDien > 50 && soDien <= 100) {
        tienDien = 50 * 500 + (soDien - 50) * 650
    } else if (soDien > 100 && soDien <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soDien - 100) * 850
    } else if (soDien > 200 && soDien <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100
    } else {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300
    }

    document.getElementById('tienDien').value =
        'Tiền điện phải trả : ' + tienDien.toLocaleString() + ' VNĐ'
}

// bài 3

document.getElementById('tinhThue').onclick = function () {
    var tongThuNhap = document.getElementById('tongThuNhap').value
    var soNguoiPhuThuoc = document.getElementById('soNguoiPhuThuoc').value
    var thuNhapChiuThue
    var thuePhaiNop

    tongThuNhap = Number(tongThuNhap)
    soNguoiPhuThuoc = Number(soNguoiPhuThuoc)

    thuNhapChiuThue = tongThuNhap - 4000000 - soNguoiPhuThuoc * 1600000

    if (thuNhapChiuThue <= 60000000) {
        thuePhaiNop = thuNhapChiuThue * 0.05
    } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
        thuePhaiNop = thuNhapChiuThue * 0.1
    } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        thuePhaiNop = thuNhapChiuThue * 0.15
    } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        thuePhaiNop = thuNhapChiuThue * 0.2
    } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        thuePhaiNop = thuNhapChiuThue * 0.25
    } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        thuePhaiNop = thuNhapChiuThue * 0.3
    } else {
        thuePhaiNop = thuNhapChiuThue * 0.35
    }

    document.getElementById('thueTNCN').value = thuePhaiNop.toLocaleString()
}

// bài 4

var khachHangCaNhan = document.getElementById('khachHangCaNhan')
var khachHangDoanhNghiep = document.getElementById('khachHangDoanhNghiep')

var manHinhTinhtienCapCaNhan = document.getElementById('caNhan')
var manHinhTinhtienCapDoanhNghiep = document.getElementById('doanhNghiep')

var customerValue = 'caNhan'

document.getElementById('label_kh_caNhan').style.fontWeight = '700'
document.getElementById('label_kh_caNhan').style.color = '#BB2D3B'

manHinhTinhtienCapCaNhan.style.display = 'block'
manHinhTinhtienCapDoanhNghiep.style.display = 'none'

khachHangCaNhan.onclick = function () {
    if (khachHangCaNhan.checked == true) {
        manHinhTinhtienCapCaNhan.style.display = 'block'
        manHinhTinhtienCapDoanhNghiep.style.display = 'none'

        document.getElementById('label_kh_caNhan').style.fontWeight = '700'
        document.getElementById('label_kh_caNhan').style.color = '#BB2D3B'

        document.getElementById('label_kh_doanhNghiep').style.fontWeight = 'initial'
        document.getElementById('label_kh_doanhNghiep').style.color = 'initial'

        customerValue = khachHangCaNhan.value
    } else {
    }
    // console.log(customerValue);
}

khachHangDoanhNghiep.onclick = function () {
    if (khachHangDoanhNghiep.checked == true) {
        manHinhTinhtienCapCaNhan.style.display = 'none'
        manHinhTinhtienCapDoanhNghiep.style.display = 'block'

        document.getElementById('label_kh_caNhan').style.fontWeight = 'initial'
        document.getElementById('label_kh_caNhan').style.color = 'initial'

        document.getElementById('label_kh_doanhNghiep').style.fontWeight = '700'
        document.getElementById('label_kh_doanhNghiep').style.color = '#BB2D3B'

        customerValue = khachHangDoanhNghiep.value
    } else {
    }
    // console.log(customerValue);
}

document.getElementById('tinhTienCapCaNhan').onclick = function () {
    var kenhCaoCap = document.getElementById('soKenhCaoCapCaNhan').value
    var tienCap

    tienCap = 4.5 + 20.5 + kenhCaoCap * 7.5

    document.getElementById('tienCapCaNhan').value = tienCap
}

document.getElementById('tinhTienCapDoanhNghiep').onclick = function () {
    var kenhCaoCap = document.getElementById('soKenhCaoCapDoanhNghiep').value
    var soKetNoi = document.getElementById('soKetNoiDoanhNghiep').value
    var tienCap

    if (soKetNoi <= 10) {
        tienCap = 15 + 75 * soKetNoi + 50 * kenhCaoCap
    } else {
        tienCap = 15 + 75 * 10 + 5 * (soKetNoi - 10) + 50 * kenhCaoCap
    }

    document.getElementById('tienCapDoanhNghiep').value = tienCap
}
