// Database cho he thong tiep nhan tin 114
// Bạn có thể chỉnh sửa trực tiếp nội dung file này bằng Notepad hoặc phần mềm khác.

const LEADERSHIP_DATA = [
  {
    "title": "Ban Giám Đốc Công An Tỉnh",
    "contacts": [
      {
        "raw": "- Giám đốc: Thiếu tướng Nguyễn Tiến Trung; SĐT: 0902.168.361",
        "text": "Giám đốc: Thiếu tướng Nguyễn Tiến Trung; SĐT: 0902.168.361"
      },
      {
        "raw": "- Phó Giám đốc: Đại tá Vũ Thanh Tùng; SĐT: 0898.518.998",
        "text": "Phó Giám đốc: Đại tá Vũ Thanh Tùng; SĐT: 0898.518.998"
      },
      {
        "raw": "- Phó Giám đốc: Đại tá Nguyễn Thuận; SĐT: 0936.651.999",
        "text": "Phó Giám đốc: Đại tá Nguyễn Thuận; SĐT: 0936.651.999"
      },
      {
        "raw": "- Phó Giám đốc: Đại tá Lê Hồng Vân; SĐT: 0904.170.566",
        "text": "Phó Giám đốc: Đại tá Lê Hồng Vân; SĐT: 0904.170.566"
      },
      {
        "raw": "- Phó Giám đốc: Đại tá Vũ Trung Hiếu; SĐT: 0904.170.566",
        "text": "Phó Giám đốc: Đại tá Vũ Trung Hiếu; SĐT: 0904.170.566"
      }
    ]
  },
  {
    "title": "Lãnh Đạo Phòng Cảnh Sát PCCC & CNCH",
    "contacts": [
      {
        "raw": "- Trưởng phòng: Đại tá Nguyễn Văn Cường; SĐT: 0982.988.358",
        "text": "Trưởng phòng: Đại tá Nguyễn Văn Cường; SĐT: 0982.988.358"
      },
      {
        "raw": "- Phó trưởng phòng: Tiêu Văn Tiến; SĐT: 0936.246.198",
        "text": "Phó trưởng phòng: Tiêu Văn Tiến; SĐT: 0936.246.198"
      },
      {
        "raw": "- Phó trưởng phòng: Hoàng Mạnh Hùng; SĐT: 0912.828.487",
        "text": "Phó trưởng phòng: Hoàng Mạnh Hùng; SĐT: 0912.828.487"
      },
      {
        "raw": "- Phó trưởng phòng: Vũ Bắc Cường; SĐT: 0931.287.686",
        "text": "Phó trưởng phòng: Vũ Bắc Cường; SĐT: 0931.287.686"
      },
      {
        "raw": "- Phó trưởng phòng: Ngô Hải Nam; SĐT: 0904.479.007",
        "text": "Phó trưởng phòng: Ngô Hải Nam; SĐT: 0904.479.007"
      },
      {
        "raw": "- Phó trưởng phòng: Phạm Thanh Long; SĐT: 0966.139.676",
        "text": "Phó trưởng phòng: Phạm Thanh Long; SĐT: 0966.139.676"
      }
    ]
  }
];

const SECTIONS_DATA = [
  {
    "id": 1,
    "type": "PHƯỜNG",
    "name": "MẠO KHÊ",
    "raw_title": "1. PHƯỜNG MẠO KHÊ",
    "district": "Thành phố Đông Triều",
    "team": "Đội KV1",
    "components": [
      "Mạo Khê",
      "Xuân Sơn",
      "Kim Sơn",
      "Yên Thọ"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "1.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Thế Hùng; SĐT: 0974.615.386",
            "text": "Đội trưởng: Nguyễn Thế Hùng; SĐT: 0974.615.386"
          },
          {
            "raw": "- Phó Đội trưởng: Vũ Quang Tiến; SĐT: 0971.301.388",
            "text": "Phó Đội trưởng: Vũ Quang Tiến; SĐT: 0971.301.388"
          },
          {
            "raw": "- Phó Đội trưởng: Ngô Xuân Tuấn; SĐT: 0974.631.258",
            "text": "Phó Đội trưởng: Ngô Xuân Tuấn; SĐT: 0974.631.258"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Quang Chiến; SĐT: 0969.926.789",
            "text": "Phó Đội trưởng: Nguyễn Quang Chiến; SĐT: 0969.926.789"
          },
          {
            "raw": "- Trực ban: 02033.595.114",
            "text": "Trực ban: 02033.595.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Mạo Khê",
        "raw_title": "1.2. Công an phường Mạo Khê",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Vũ Thị Lệ Hà; SĐT: 0912.652.137",
            "text": "Trưởng CAP: Vũ Thị Lệ Hà; SĐT: 0912.652.137"
          },
          {
            "raw": "- Phó CAP: Lý Việt Linh; SĐT: 0916.161.102",
            "text": "Phó CAP: Lý Việt Linh; SĐT: 0916.161.102"
          },
          {
            "raw": "- Phó CAP: Nguyễn Hà Long; SĐT: 0988.661.859",
            "text": "Phó CAP: Nguyễn Hà Long; SĐT: 0988.661.859"
          },
          {
            "raw": "- Phó CAP: Nguyễn Xuân Thảo; SĐT: 0916.152.488",
            "text": "Phó CAP: Nguyễn Xuân Thảo; SĐT: 0916.152.488"
          },
          {
            "raw": "- Phó CAP: Trần Đức Thành; SĐT: 0979.632.586",
            "text": "Phó CAP: Trần Đức Thành; SĐT: 0979.632.586"
          },
          {
            "raw": "- Phó CAP: Bùi Thanh Sơn; SĐT: 0329.048.768",
            "text": "Phó CAP: Bùi Thanh Sơn; SĐT: 0329.048.768"
          },
          {
            "raw": "- Trực ban: 02033.871.224",
            "text": "Trực ban: 02033.871.224"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Mạo Khê",
        "raw_title": "1.3. Ủy ban nhân dân phường Mạo Khê",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Nguyễn Văn Ngoãn; SĐT: 0912.446.769",
            "text": "Bí thư, Chủ tịch HĐND phường: Nguyễn Văn Ngoãn; SĐT: 0912.446.769"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Đỗ Thị Hà; SĐT: 0906.052.565",
            "text": "Phó Bí thư TT Đảng ủy: Đỗ Thị Hà; SĐT: 0906.052.565"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Nguyễn Quang Đán; SĐT: 0912.089.429",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Nguyễn Quang Đán; SĐT: 0912.089.429"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Ngô Thị Thu Hương; SĐT: 0368.653.586",
            "text": "Phó Chủ tịch HĐND phường: Ngô Thị Thu Hương; SĐT: 0368.653.586"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Vũ Văn Tuấn; SĐT: 0904.487.299",
            "text": "Phó Chủ tịch UBND phường: Vũ Văn Tuấn; SĐT: 0904.487.299"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Quang Huy; SĐT: 0912.519.188",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Quang Huy; SĐT: 0912.519.188"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "1.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222",
            "text": "Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222"
          },
          {
            "raw": "- Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818",
            "text": "Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Đông Triều:",
        "raw_title": "1.5. Điện lực: Đội quản lý điện lực khu vực Đông Triều:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Hoàng Mạnh Hùng; SĐT: 0989.997.919",
            "text": "Đội trưởng: Hoàng Mạnh Hùng; SĐT: 0989.997.919"
          },
          {
            "raw": "- Đội Phó: Nguyễn Mậu Hiền; SĐT: 0962.799.383",
            "text": "Đội Phó: Nguyễn Mậu Hiền; SĐT: 0962.799.383"
          },
          {
            "raw": "- Đội Phó: Trần Duy Linh; SĐT: 0904.986.509",
            "text": "Đội Phó: Trần Duy Linh; SĐT: 0904.986.509"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.583.188; 02033.675.878",
            "text": "Tổ trực vận hành SĐT: 02033.583.188; 02033.675.878"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Đông Triều:",
        "raw_title": "1.6. Cấp nước: Xí nghiệp nước Đông Triều:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Văn Hân; SĐT: 0936.394.559",
            "text": "Giám đốc: Trần Văn Hân; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Đỗ Đăng Tuấn; SĐT: 0989.565.191",
            "text": "Phó giám đốc: Đỗ Đăng Tuấn; SĐT: 0989.565.191"
          },
          {
            "raw": "- Phó giám đốc: Phạm Tuấn Nam; SĐT: 0912.433.039",
            "text": "Phó giám đốc: Phạm Tuấn Nam; SĐT: 0912.433.039"
          },
          {
            "raw": "- Phó giám đốc: Đỗ Thanh Lâm; SĐT: 0912.260.096",
            "text": "Phó giám đốc: Đỗ Thanh Lâm; SĐT: 0912.260.096"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "1.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thị xã Đông Triều; SĐT: 02033.670.297",
            "text": "Trung tâm y tế thị xã Đông Triều; SĐT: 02033.670.297"
          },
          {
            "raw": "- Phòng khám đa khoa Toàn Tâm; SĐT: 0965.484.336",
            "text": "Phòng khám đa khoa Toàn Tâm; SĐT: 0965.484.336"
          },
          {
            "raw": "- Phòng khám đa khoa Kinh Bắc; SĐT: 0903.294.435",
            "text": "Phòng khám đa khoa Kinh Bắc; SĐT: 0903.294.435"
          },
          {
            "raw": "- Bệnh viện mỏ Mạo Khê; SĐT: 0913.355.421",
            "text": "Bệnh viện mỏ Mạo Khê; SĐT: 0913.355.421"
          },
          {
            "raw": "- Trạm y tế phường Mạo Khê; SĐT: 0353.877.656",
            "text": "Trạm y tế phường Mạo Khê; SĐT: 0353.877.656"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "1.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Kho K255, phương tiện: 01 xe chữa cháy",
            "text": "Kho K255, phương tiện: 01 xe chữa cháy"
          },
          {
            "raw": "- Công ty Than Mạo Khê, phương tiện: 02 xe téc nước 20m3; SĐT: 0912.912.532",
            "text": "Công ty Than Mạo Khê, phương tiện: 02 xe téc nước 20m3; SĐT: 0912.912.532"
          },
          {
            "raw": "- Công ty gạch COTTO, phương tiện: 02 xe téc nước 08m3, 02 xe máy xúc",
            "text": "Công ty gạch COTTO, phương tiện: 02 xe téc nước 08m3, 02 xe máy xúc"
          },
          {
            "raw": "- Công ty Clinker Viglacera, phương tiện: 02 xe téc nước 08m3, 01 xe máy xúc, 04 xe nâng",
            "text": "Công ty Clinker Viglacera, phương tiện: 02 xe téc nước 08m3, 01 xe máy xúc, 04 xe nâng"
          },
          {
            "raw": "- Công ty TNHH Thành tâm 668, phương tiện: 01 xe téc nước 08m3",
            "text": "Công ty TNHH Thành tâm 668, phương tiện: 01 xe téc nước 08m3"
          },
          {
            "raw": "- Công ty Cổ phần Ngân Chí, phương tiện: 01 xe cứu hộ giao thông",
            "text": "Công ty Cổ phần Ngân Chí, phương tiện: 01 xe cứu hộ giao thông"
          },
          {
            "raw": "- Công ty cổ phần đầu tư phát triển 188, phương tiện: 02 xe téc nước 08m3",
            "text": "Công ty cổ phần đầu tư phát triển 188, phương tiện: 02 xe téc nước 08m3"
          },
          {
            "raw": "- Công ty CP gạch Vĩnh Thắng, phương tiện: 02 xe máy nâng",
            "text": "Công ty CP gạch Vĩnh Thắng, phương tiện: 02 xe máy nâng"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "type": "PHƯỜNG",
    "name": "ĐÔNG TRIỀU",
    "raw_title": "2. PHƯỜNG ĐÔNG TRIỀU",
    "district": "Thành phố Đông Triều",
    "team": "Đội KV1",
    "components": [
      "Đông Triều",
      "Thủy An",
      "Hưng Đạo",
      "Hồng Phong",
      "Nguyễn Huệ"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "2.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Thế Hùng; SĐT: 0974.615.386",
            "text": "Đội trưởng: Nguyễn Thế Hùng; SĐT: 0974.615.386"
          },
          {
            "raw": "- Phó Đội trưởng: Vũ Quang Tiến; SĐT: 0971.301.388",
            "text": "Phó Đội trưởng: Vũ Quang Tiến; SĐT: 0971.301.388"
          },
          {
            "raw": "- Phó Đội trưởng: Ngô Xuân Tuấn; SĐT: 0974.631.258",
            "text": "Phó Đội trưởng: Ngô Xuân Tuấn; SĐT: 0974.631.258"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Quang Chiến; SĐT: 0969.926.789",
            "text": "Phó Đội trưởng: Nguyễn Quang Chiến; SĐT: 0969.926.789"
          },
          {
            "raw": "- Trực ban: 02033.595.114",
            "text": "Trực ban: 02033.595.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Đông Triều",
        "raw_title": "2.2. Công an phường Đông Triều",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Vũ Văn Hoàn; SĐT: 0829.230.999",
            "text": "Trưởng CAP: Vũ Văn Hoàn; SĐT: 0829.230.999"
          },
          {
            "raw": "- Phó CAP: Ngô Minh Đức; SĐT: 0911.460.266",
            "text": "Phó CAP: Ngô Minh Đức; SĐT: 0911.460.266"
          },
          {
            "raw": "- Phó CAP: Phan Hùng Cường; SĐT: 0974.622.888",
            "text": "Phó CAP: Phan Hùng Cường; SĐT: 0974.622.888"
          },
          {
            "raw": "- Phó CAP: Bế Hữu Tùng; SĐT: 0982.919.689",
            "text": "Phó CAP: Bế Hữu Tùng; SĐT: 0982.919.689"
          },
          {
            "raw": "- Phó CAP: Đào Văn Dương; SĐT: 0989.298.333",
            "text": "Phó CAP: Đào Văn Dương; SĐT: 0989.298.333"
          },
          {
            "raw": "- Phó CAP: Bùi Huy Trọng; SĐT: 0984.696.818",
            "text": "Phó CAP: Bùi Huy Trọng; SĐT: 0984.696.818"
          },
          {
            "raw": "- Trực ban: 02033.595.222",
            "text": "Trực ban: 02033.595.222"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Đông Triều",
        "raw_title": "2.3. Ủy ban nhân dân phường Đông Triều",
        "contacts": [
          {
            "raw": "- Bí thư: Đỗ Ngọc Nam; SĐT: 0976.345.186",
            "text": "Bí thư: Đỗ Ngọc Nam; SĐT: 0976.345.186"
          },
          {
            "raw": "- Phó Bí thư TT, Chủ tịch HĐND: Nguyễn Thị Bích Liên; SĐT: 0936.988.928",
            "text": "Phó Bí thư TT, Chủ tịch HĐND: Nguyễn Thị Bích Liên; SĐT: 0936.988.928"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Nguyễn Hoàng Thiện; SĐT: 0983.731.638",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Nguyễn Hoàng Thiện; SĐT: 0983.731.638"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Phạm Thành Dư; SĐT: 0974.121.789",
            "text": "Phó Chủ tịch HĐND phường: Phạm Thành Dư; SĐT: 0974.121.789"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Lê Văn Hùng; SĐT: 0984.908.866",
            "text": "Phó Chủ tịch UBND phường: Lê Văn Hùng; SĐT: 0984.908.866"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Phạm Xuân Hoàn; SĐT: 0988.110.225",
            "text": "Phó Chủ tịch UBND phường: Phạm Xuân Hoàn; SĐT: 0988.110.225"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "2.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222",
            "text": "Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222"
          },
          {
            "raw": "- Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818",
            "text": "Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Đông Triều:",
        "raw_title": "2.5. Điện lực: Đội quản lý điện lực khu vực Đông Triều:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Hoàng Mạnh Hùng; SĐT: 0989.997.919",
            "text": "Đội trưởng: Hoàng Mạnh Hùng; SĐT: 0989.997.919"
          },
          {
            "raw": "- Đội Phó: Nguyễn Mậu Hiền; SĐT: 0962.799.383",
            "text": "Đội Phó: Nguyễn Mậu Hiền; SĐT: 0962.799.383"
          },
          {
            "raw": "- Đội Phó: Trần Duy Linh; SĐT: 0904.986.509",
            "text": "Đội Phó: Trần Duy Linh; SĐT: 0904.986.509"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.583.188; 02033.675.878",
            "text": "Tổ trực vận hành SĐT: 02033.583.188; 02033.675.878"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Đông Triều:",
        "raw_title": "2.6. Cấp nước: Xí nghiệp nước Đông Triều:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Văn Hân; SĐT: 0936.394.559",
            "text": "Giám đốc: Trần Văn Hân; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Đỗ Đăng Tuấn; SĐT: 0989.565.191",
            "text": "Phó giám đốc: Đỗ Đăng Tuấn; SĐT: 0989.565.191"
          },
          {
            "raw": "- Phó giám đốc: Phạm Tuấn Nam; SĐT: 0912.433.039",
            "text": "Phó giám đốc: Phạm Tuấn Nam; SĐT: 0912.433.039"
          },
          {
            "raw": "- Phó giám đốc: Đỗ Thanh Lâm; SĐT: 0912.260.096",
            "text": "Phó giám đốc: Đỗ Thanh Lâm; SĐT: 0912.260.096"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "2.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thị xã Đông Triều; SĐT: 02033.670.297",
            "text": "Trung tâm y tế thị xã Đông Triều; SĐT: 02033.670.297"
          },
          {
            "raw": "- Bệnh viện đa khoa khu vực Đông Triều; SĐT: 02033.870.061",
            "text": "Bệnh viện đa khoa khu vực Đông Triều; SĐT: 02033.870.061"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "2.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty TNHH MTV Đức Chung QN, phương tiện: 01 xe máy xúc",
            "text": "Công ty TNHH MTV Đức Chung QN, phương tiện: 01 xe máy xúc"
          },
          {
            "raw": "- Phạm Văn Hùng, phương tiện: 01 xe máy xúc",
            "text": "Phạm Văn Hùng, phương tiện: 01 xe máy xúc"
          },
          {
            "raw": "- Công ty TNHH Mạc Thin, phương tiện: 05 xe máy xúc",
            "text": "Công ty TNHH Mạc Thin, phương tiện: 05 xe máy xúc"
          },
          {
            "raw": "- Hoàng Văn Huỳnh, phương tiện: 01 xe máy xúc",
            "text": "Hoàng Văn Huỳnh, phương tiện: 01 xe máy xúc"
          },
          {
            "raw": "- Nguyễn Văn Sỹ, phương tiện: 01 xe máy xúc",
            "text": "Nguyễn Văn Sỹ, phương tiện: 01 xe máy xúc"
          },
          {
            "raw": "- Nguyễn Văn Hùng, phương tiện: 01 xe máy xúc",
            "text": "Nguyễn Văn Hùng, phương tiện: 01 xe máy xúc"
          },
          {
            "raw": "- Nguyễn Văn Mạnh, phương tiện: 01 xe máy xúc",
            "text": "Nguyễn Văn Mạnh, phương tiện: 01 xe máy xúc"
          },
          {
            "raw": "- Đỗ Trọng Tuấn, phương tiện: 02 xe máy xúc",
            "text": "Đỗ Trọng Tuấn, phương tiện: 02 xe máy xúc"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "type": "PHƯỜNG",
    "name": "BÌNH KHÊ",
    "raw_title": "3. PHƯỜNG BÌNH KHÊ",
    "district": "Thành phố Đông Triều",
    "team": "Đội KV1",
    "components": [
      "Bình Khê",
      "Tràng An",
      "Tràng Lương"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "3.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Thế Hùng; SĐT: 0974.615.386",
            "text": "Đội trưởng: Nguyễn Thế Hùng; SĐT: 0974.615.386"
          },
          {
            "raw": "- Phó Đội trưởng: Vũ Quang Tiến; SĐT: 0971.301.388",
            "text": "Phó Đội trưởng: Vũ Quang Tiến; SĐT: 0971.301.388"
          },
          {
            "raw": "- Phó Đội trưởng: Ngô Xuân Tuấn; SĐT: 0974.631.258",
            "text": "Phó Đội trưởng: Ngô Xuân Tuấn; SĐT: 0974.631.258"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Quang Chiến; SĐT: 0969.926.789",
            "text": "Phó Đội trưởng: Nguyễn Quang Chiến; SĐT: 0969.926.789"
          },
          {
            "raw": "- Trực ban: 02033.595.114",
            "text": "Trực ban: 02033.595.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Bình Khê",
        "raw_title": "3.2. Công an phường Bình Khê",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Nguyễn Xuân Nam; SĐT: 0913.811.266",
            "text": "Trưởng CAP: Nguyễn Xuân Nam; SĐT: 0913.811.266"
          },
          {
            "raw": "- Phó CAP: Phạm Minh Phong; SĐT: 0976.172.179",
            "text": "Phó CAP: Phạm Minh Phong; SĐT: 0976.172.179"
          },
          {
            "raw": "- Phó CAP: Nguyễn Đông Hưng; SĐT: 0983.175.026",
            "text": "Phó CAP: Nguyễn Đông Hưng; SĐT: 0983.175.026"
          },
          {
            "raw": "- Phó CAP: Vương Đức Duy; SĐT: 0943.126.888",
            "text": "Phó CAP: Vương Đức Duy; SĐT: 0943.126.888"
          },
          {
            "raw": "- Phó CAP: Trịnh Trọng Tùng; SĐT: 0769.221.222",
            "text": "Phó CAP: Trịnh Trọng Tùng; SĐT: 0769.221.222"
          },
          {
            "raw": "- Phó CAP: Đặng Công Tuân; SĐT: 0935.281.313",
            "text": "Phó CAP: Đặng Công Tuân; SĐT: 0935.281.313"
          },
          {
            "raw": "- Trực ban: 02033.901.536",
            "text": "Trực ban: 02033.901.536"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Bình Khê",
        "raw_title": "3.3. Ủy ban nhân dân phường Bình Khê",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Nguyễn Ngọc Quân; SĐT: 0904.274.279",
            "text": "Bí thư, Chủ tịch HĐND phường: Nguyễn Ngọc Quân; SĐT: 0904.274.279"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Nguyễn Đình Thái; SĐT: 0912.389.141",
            "text": "Phó Bí thư TT Đảng ủy: Nguyễn Đình Thái; SĐT: 0912.389.141"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Bùi Triều Dương; SĐT: 0359.878.606",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Bùi Triều Dương; SĐT: 0359.878.606"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Tạ Thị Nụ; SĐT: 0972.096.013",
            "text": "Phó Chủ tịch HĐND phường: Tạ Thị Nụ; SĐT: 0972.096.013"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Đình Thắng; SĐT: 0988.669.791",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Đình Thắng; SĐT: 0988.669.791"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Ngọc Hùng; SĐT: 0972.620.739",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Ngọc Hùng; SĐT: 0972.620.739"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "3.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222",
            "text": "Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222"
          },
          {
            "raw": "- Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818",
            "text": "Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Đông Triều:",
        "raw_title": "3.5. Điện lực: Đội quản lý điện lực khu vực Đông Triều:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Hoàng Mạnh Hùng; SĐT: 0989.997.919",
            "text": "Đội trưởng: Hoàng Mạnh Hùng; SĐT: 0989.997.919"
          },
          {
            "raw": "- Đội Phó: Nguyễn Mậu Hiền; SĐT: 0962.799.383",
            "text": "Đội Phó: Nguyễn Mậu Hiền; SĐT: 0962.799.383"
          },
          {
            "raw": "- Đội Phó: Trần Duy Linh; SĐT: 0904.986.509",
            "text": "Đội Phó: Trần Duy Linh; SĐT: 0904.986.509"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.583.188; 02033.675.878",
            "text": "Tổ trực vận hành SĐT: 02033.583.188; 02033.675.878"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Đông Triều:",
        "raw_title": "3.6. Cấp nước: Xí nghiệp nước Đông Triều:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Văn Hân; SĐT: 0936.394.559",
            "text": "Giám đốc: Trần Văn Hân; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Đỗ Đăng Tuấn; SĐT: 0989.565.191",
            "text": "Phó giám đốc: Đỗ Đăng Tuấn; SĐT: 0989.565.191"
          },
          {
            "raw": "- Phó giám đốc: Phạm Tuấn Nam; SĐT: 0912.433.039",
            "text": "Phó giám đốc: Phạm Tuấn Nam; SĐT: 0912.433.039"
          },
          {
            "raw": "- Phó giám đốc: Đỗ Thanh Lâm; SĐT: 0912.260.096",
            "text": "Phó giám đốc: Đỗ Thanh Lâm; SĐT: 0912.260.096"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "3.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thị xã Đông Triều; SĐT: 02033.670.297",
            "text": "Trung tâm y tế thị xã Đông Triều; SĐT: 02033.670.297"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "3.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty cổ phần Thanh Tuyên Group, phương tiện: 01 xe bồn chở nước",
            "text": "Công ty cổ phần Thanh Tuyên Group, phương tiện: 01 xe bồn chở nước"
          },
          {
            "raw": "- Nguyễn Văn Khoát, phương tiện: 01 xe máy xúc",
            "text": "Nguyễn Văn Khoát, phương tiện: 01 xe máy xúc"
          },
          {
            "raw": "- Nguyễn Văn Tam, phương tiện: 01 xe máy xúc",
            "text": "Nguyễn Văn Tam, phương tiện: 01 xe máy xúc"
          },
          {
            "raw": "- Nguyễn Văn Bảo, phương tiện: 01 xe máy xúc",
            "text": "Nguyễn Văn Bảo, phương tiện: 01 xe máy xúc"
          },
          {
            "raw": "- Đào Trọng Thành, phương tiện: 01 xe máy xúc",
            "text": "Đào Trọng Thành, phương tiện: 01 xe máy xúc"
          },
          {
            "raw": "- Tô Văn Hào, phương tiện: 01 xe máy xúc",
            "text": "Tô Văn Hào, phương tiện: 01 xe máy xúc"
          },
          {
            "raw": "- Tạ Văn Kim, phương tiện: 01 xe máy xúc",
            "text": "Tạ Văn Kim, phương tiện: 01 xe máy xúc"
          },
          {
            "raw": "- Hoàng Văn Quân, phương tiện: 01 xe máy xúc",
            "text": "Hoàng Văn Quân, phương tiện: 01 xe máy xúc"
          },
          {
            "raw": "- Ngô Mạnh Hùng, phương tiện: 01 xe máy xúc",
            "text": "Ngô Mạnh Hùng, phương tiện: 01 xe máy xúc"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "type": "PHƯỜNG",
    "name": "AN SINH",
    "raw_title": "4. PHƯỜNG AN SINH",
    "district": "Thành phố Đông Triều",
    "team": "Đội KV1",
    "components": [
      "An Sinh",
      "Việt Dân",
      "Bình Dương"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "4.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Thế Hùng; SĐT: 0974.615.386",
            "text": "Đội trưởng: Nguyễn Thế Hùng; SĐT: 0974.615.386"
          },
          {
            "raw": "- Phó Đội trưởng: Vũ Quang Tiến; SĐT: 0971.301.388",
            "text": "Phó Đội trưởng: Vũ Quang Tiến; SĐT: 0971.301.388"
          },
          {
            "raw": "- Phó Đội trưởng: Ngô Xuân Tuấn; SĐT: 0974.631.258",
            "text": "Phó Đội trưởng: Ngô Xuân Tuấn; SĐT: 0974.631.258"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Quang Chiến; SĐT: 0969.926.789",
            "text": "Phó Đội trưởng: Nguyễn Quang Chiến; SĐT: 0969.926.789"
          },
          {
            "raw": "- Trực ban: 02033.595.114",
            "text": "Trực ban: 02033.595.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường An Sinh",
        "raw_title": "4.2. Công an phường An Sinh",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Đình Hoàng Long; SĐT: 0912.380.023",
            "text": "Trưởng CAP: Đình Hoàng Long; SĐT: 0912.380.023"
          },
          {
            "raw": "- Phó CAP: Nguyễn Trung Sơn; SĐT: 0375.101.611",
            "text": "Phó CAP: Nguyễn Trung Sơn; SĐT: 0375.101.611"
          },
          {
            "raw": "- Phó CAP: Dương Công Định; SĐT: 0359.895.888",
            "text": "Phó CAP: Dương Công Định; SĐT: 0359.895.888"
          },
          {
            "raw": "- Phó CAP: Nguyễn Hữu Thọ; SĐT: 0979.957.579",
            "text": "Phó CAP: Nguyễn Hữu Thọ; SĐT: 0979.957.579"
          },
          {
            "raw": "- Phó CAP: Nguyễn Quang Huy; SĐT: 0904.111.916",
            "text": "Phó CAP: Nguyễn Quang Huy; SĐT: 0904.111.916"
          },
          {
            "raw": "- Phó CAP: Nguyễn Long Hưng; SĐT: 0936.004.041",
            "text": "Phó CAP: Nguyễn Long Hưng; SĐT: 0936.004.041"
          },
          {
            "raw": "- Trực ban: 02033.901.138",
            "text": "Trực ban: 02033.901.138"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường An Sinh",
        "raw_title": "4.3. Ủy ban nhân dân phường An Sinh",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Vũ Mạnh Huyền; SĐT: 0912.651.665",
            "text": "Bí thư, Chủ tịch HĐND phường: Vũ Mạnh Huyền; SĐT: 0912.651.665"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Nguyễn Thị Thu Hằng; SĐT: 0982.087.997",
            "text": "Phó Bí thư TT Đảng ủy: Nguyễn Thị Thu Hằng; SĐT: 0982.087.997"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Vương Văn Thống; SĐT: 0912.292.061",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Vương Văn Thống; SĐT: 0912.292.061"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Trần Đình Khánh; SĐT: 0976.571.288",
            "text": "Phó Chủ tịch HĐND phường: Trần Đình Khánh; SĐT: 0976.571.288"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Đào Văn Thắng; SĐT: 0988.560.287",
            "text": "Phó Chủ tịch UBND phường: Đào Văn Thắng; SĐT: 0988.560.287"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Văn Sơn; SĐT: 0398.839.769",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Văn Sơn; SĐT: 0398.839.769"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "4.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222",
            "text": "Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222"
          },
          {
            "raw": "- Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818",
            "text": "Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Đông Triều:",
        "raw_title": "4.5. Điện lực: Đội quản lý điện lực khu vực Đông Triều:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Hoàng Mạnh Hùng; SĐT: 0989.997.919",
            "text": "Đội trưởng: Hoàng Mạnh Hùng; SĐT: 0989.997.919"
          },
          {
            "raw": "- Đội Phó: Nguyễn Mậu Hiền; SĐT: 0962.799.383",
            "text": "Đội Phó: Nguyễn Mậu Hiền; SĐT: 0962.799.383"
          },
          {
            "raw": "- Đội Phó: Trần Duy Linh; SĐT: 0904.986.509",
            "text": "Đội Phó: Trần Duy Linh; SĐT: 0904.986.509"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.583.188; 02033.675.878",
            "text": "Tổ trực vận hành SĐT: 02033.583.188; 02033.675.878"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Đông Triều:",
        "raw_title": "4.6. Cấp nước: Xí nghiệp nước Đông Triều:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Văn Hân; SĐT: 0936.394.559",
            "text": "Giám đốc: Trần Văn Hân; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Đỗ Đăng Tuấn; SĐT: 0989.565.191",
            "text": "Phó giám đốc: Đỗ Đăng Tuấn; SĐT: 0989.565.191"
          },
          {
            "raw": "- Phó giám đốc: Phạm Tuấn Nam; SĐT: 0912.433.039",
            "text": "Phó giám đốc: Phạm Tuấn Nam; SĐT: 0912.433.039"
          },
          {
            "raw": "- Phó giám đốc: Đỗ Thanh Lâm; SĐT: 0912.260.096",
            "text": "Phó giám đốc: Đỗ Thanh Lâm; SĐT: 0912.260.096"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "4.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thị xã Đông Triều; SĐT: 02033.670.297",
            "text": "Trung tâm y tế thị xã Đông Triều; SĐT: 02033.670.297"
          },
          {
            "raw": "- Trung tâm y tế Đông Triều; SĐT: 02033.870.061",
            "text": "Trung tâm y tế Đông Triều; SĐT: 02033.870.061"
          },
          {
            "raw": "- Trạm y tế phường An Sinh; SĐT: 0354.537.380",
            "text": "Trạm y tế phường An Sinh; SĐT: 0354.537.380"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "4.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty CP Thành Đồng, phương tiện: 01 bộ khoan, đục, đập, tời, kéo, banh, kích, nâng; SĐT: 0987.206.666",
            "text": "Công ty CP Thành Đồng, phương tiện: 01 bộ khoan, đục, đập, tời, kéo, banh, kích, nâng; SĐT: 0987.206.666"
          },
          {
            "raw": "- Xưởng sửa chữa ô tô Tuấn, phương tiện: 01 bộ khoan, đục, đập, tời, kéo, banh, kích, nâng; SĐT: 0938.276.666",
            "text": "Xưởng sửa chữa ô tô Tuấn, phương tiện: 01 bộ khoan, đục, đập, tời, kéo, banh, kích, nâng; SĐT: 0938.276.666"
          },
          {
            "raw": "- Xưởng sửa chữa ô tô Ngọc Hùng: 01 bộ khoan, đục, đập, tời, kéo, banh, kích, nâng; SĐT: 0989.056.379",
            "text": "Xưởng sửa chữa ô tô Ngọc Hùng: 01 bộ khoan, đục, đập, tời, kéo, banh, kích, nâng; SĐT: 0989.056.379"
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "type": "PHƯỜNG",
    "name": "HOÀNG QUẾ",
    "raw_title": "5. PHƯỜNG HOÀNG QUẾ",
    "district": "Thành phố Đông Triều",
    "team": "Đội KV1",
    "components": [
      "Hoàng Quế",
      "Yên Đức",
      "Hồng Thái Đông",
      "Hồng Thái Tây"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "5.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Thế Hùng; SĐT: 0974.615.386",
            "text": "Đội trưởng: Nguyễn Thế Hùng; SĐT: 0974.615.386"
          },
          {
            "raw": "- Phó Đội trưởng: Vũ Quang Tiến; SĐT: 0971.301.388",
            "text": "Phó Đội trưởng: Vũ Quang Tiến; SĐT: 0971.301.388"
          },
          {
            "raw": "- Phó Đội trưởng: Ngô Xuân Tuấn; SĐT: 0974.631.258",
            "text": "Phó Đội trưởng: Ngô Xuân Tuấn; SĐT: 0974.631.258"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Quang Chiến; SĐT: 0969.926.789",
            "text": "Phó Đội trưởng: Nguyễn Quang Chiến; SĐT: 0969.926.789"
          },
          {
            "raw": "- Trực ban: 02033.595.114",
            "text": "Trực ban: 02033.595.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Hoàng Quế",
        "raw_title": "5.2. Công an phường Hoàng Quế",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Nguyễn Huy Quyền; SĐT: 0936.652.289",
            "text": "Trưởng CAP: Nguyễn Huy Quyền; SĐT: 0936.652.289"
          },
          {
            "raw": "- Phó CAP: Nguyễn Thị Hải Yên; SĐT: 0982.090.125",
            "text": "Phó CAP: Nguyễn Thị Hải Yên; SĐT: 0982.090.125"
          },
          {
            "raw": "- Phó CAP: Ngô Hữu Tuyến; SĐT: 0988.395.191",
            "text": "Phó CAP: Ngô Hữu Tuyến; SĐT: 0988.395.191"
          },
          {
            "raw": "- Phó CAP: Bùi Cao Cường; SĐT: 0973.005.454",
            "text": "Phó CAP: Bùi Cao Cường; SĐT: 0973.005.454"
          },
          {
            "raw": "- Phó CAP: Nguyễn Chí Thái; SĐT: 0856.267.777",
            "text": "Phó CAP: Nguyễn Chí Thái; SĐT: 0856.267.777"
          },
          {
            "raw": "- Phó CAP: Nguyễn Thiên Y; SĐT: 0984.049.974",
            "text": "Phó CAP: Nguyễn Thiên Y; SĐT: 0984.049.974"
          },
          {
            "raw": "- Trực ban: 02033.901.619",
            "text": "Trực ban: 02033.901.619"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Hoàng Quế",
        "raw_title": "5.3. Ủy ban nhân dân phường Hoàng Quế",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Hoàng Văn Đề; SĐT: 0912.028.717",
            "text": "Bí thư, Chủ tịch HĐND phường: Hoàng Văn Đề; SĐT: 0912.028.717"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Phạm Thị Thanh Tâm; SĐT: 0986.111.111",
            "text": "Phó Bí thư TT Đảng ủy: Phạm Thị Thanh Tâm; SĐT: 0986.111.111"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Lê Văn Độ; SĐT: 0906.050.777",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Lê Văn Độ; SĐT: 0906.050.777"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Đỗ Văn Tân; SĐT: 0978.202.209",
            "text": "Phó Chủ tịch HĐND phường: Đỗ Văn Tân; SĐT: 0978.202.209"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Lê Văn Lương; SĐT: 0903.260.996",
            "text": "Phó Chủ tịch UBND phường: Lê Văn Lương; SĐT: 0903.260.996"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Trần Văn Tuấn; SĐT: 0912.113.816",
            "text": "Phó Chủ tịch UBND phường: Trần Văn Tuấn; SĐT: 0912.113.816"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "5.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222",
            "text": "Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222"
          },
          {
            "raw": "- Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818",
            "text": "Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Đông Triều:",
        "raw_title": "5.5. Điện lực: Đội quản lý điện lực khu vực Đông Triều:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Hoàng Mạnh Hùng; SĐT: 0989.997.919",
            "text": "Đội trưởng: Hoàng Mạnh Hùng; SĐT: 0989.997.919"
          },
          {
            "raw": "- Đội Phó: Nguyễn Mậu Hiền; SĐT: 0962.799.383",
            "text": "Đội Phó: Nguyễn Mậu Hiền; SĐT: 0962.799.383"
          },
          {
            "raw": "- Đội Phó: Trần Duy Linh; SĐT: 0904.986.509",
            "text": "Đội Phó: Trần Duy Linh; SĐT: 0904.986.509"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.583.188; 02033.675.878",
            "text": "Tổ trực vận hành SĐT: 02033.583.188; 02033.675.878"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Đông Triều:",
        "raw_title": "5.6. Cấp nước: Xí nghiệp nước Đông Triều:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Văn Hân; SĐT: 0936.394.559",
            "text": "Giám đốc: Trần Văn Hân; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Đỗ Đăng Tuấn; SĐT: 0989.565.191",
            "text": "Phó giám đốc: Đỗ Đăng Tuấn; SĐT: 0989.565.191"
          },
          {
            "raw": "- Phó giám đốc: Phạm Tuấn Nam; SĐT: 0912.433.039",
            "text": "Phó giám đốc: Phạm Tuấn Nam; SĐT: 0912.433.039"
          },
          {
            "raw": "- Phó giám đốc: Đỗ Thanh Lâm; SĐT: 0912.260.096",
            "text": "Phó giám đốc: Đỗ Thanh Lâm; SĐT: 0912.260.096"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "5.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thị xã Đông Triều; SĐT: 02033.670.297",
            "text": "Trung tâm y tế thị xã Đông Triều; SĐT: 02033.670.297"
          },
          {
            "raw": "- Trạm y tế phường Hoàng Quế; SĐT: 0963.662.989",
            "text": "Trạm y tế phường Hoàng Quế; SĐT: 0963.662.989"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "5.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty than Uông Bí TKV, phương tiện: 01 Xe bồn chữa nước; SĐT: 0979.865.368",
            "text": "Công ty than Uông Bí TKV, phương tiện: 01 Xe bồn chữa nước; SĐT: 0979.865.368"
          },
          {
            "raw": "- Công ty Cổ phần đá Đức Sơn, phương tiện: 01 Xe bồn chữa nước; SĐT: 0981.411.611",
            "text": "Công ty Cổ phần đá Đức Sơn, phương tiện: 01 Xe bồn chữa nước; SĐT: 0981.411.611"
          },
          {
            "raw": "- Công ty dịch vụ vật nuôi môi trường Đông Khê, phương tiện: 01 Xe bồn chữa nước; SĐT: 0912.576.014",
            "text": "Công ty dịch vụ vật nuôi môi trường Đông Khê, phương tiện: 01 Xe bồn chữa nước; SĐT: 0912.576.014"
          },
          {
            "raw": "- Trại giam Quảng Ninh, phương tiện: 01 Xe bồn chữa nước",
            "text": "Trại giam Quảng Ninh, phương tiện: 01 Xe bồn chữa nước"
          },
          {
            "raw": "- Công ty Cơ khí lắp đặt máy Việt Nam, phương tiện: 01 Xe bồn chữa nước; SĐT: 0913.063.360",
            "text": "Công ty Cơ khí lắp đặt máy Việt Nam, phương tiện: 01 Xe bồn chữa nước; SĐT: 0913.063.360"
          },
          {
            "raw": "- Công ty TNHH Vận tải Huy Hoàng, phương tiện: 01 xe máy xúc 55W; SĐT: 0984.146.888",
            "text": "Công ty TNHH Vận tải Huy Hoàng, phương tiện: 01 xe máy xúc 55W; SĐT: 0984.146.888"
          },
          {
            "raw": "- Mạc Thành Đông, phương tiện: 01 xe máy xúc 55W; SĐT: 0976.675.875",
            "text": "Mạc Thành Đông, phương tiện: 01 xe máy xúc 55W; SĐT: 0976.675.875"
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "type": "PHƯỜNG",
    "name": "YÊN TỬ",
    "raw_title": "6. PHƯỜNG YÊN TỬ",
    "district": "Thành phố Uông Bí",
    "team": "Đội KV2",
    "components": [
      "Yên Tử",
      "Phương Đông",
      "Phương Nam",
      "Thượng Yên Công"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "6.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Nha; SĐT: 0936199589",
            "text": "Đội trưởng: Nguyễn Văn Nha; SĐT: 0936199589"
          },
          {
            "raw": "- Phó đội trưởng: Nguyễn Đức Trường; SĐT: 0973.288.269",
            "text": "Phó đội trưởng: Nguyễn Đức Trường; SĐT: 0973.288.269"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Thanh Tuấn; SĐT: 0975.015.959",
            "text": "Phó Đội trưởng: Nguyễn Thanh Tuấn; SĐT: 0975.015.959"
          },
          {
            "raw": "- Trực ban: 02033.567.114",
            "text": "Trực ban: 02033.567.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Yên Tử",
        "raw_title": "6.2. Công an phường Yên Tử",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Nguyễn Đình Tuyền; SĐT: 0904.687.868",
            "text": "Trưởng CAP: Nguyễn Đình Tuyền; SĐT: 0904.687.868"
          },
          {
            "raw": "- Phó CAP: Nguyễn Hồng Thắng; SĐT: 0383.335.666",
            "text": "Phó CAP: Nguyễn Hồng Thắng; SĐT: 0383.335.666"
          },
          {
            "raw": "- Phó CAP: Nguyễn Thị Lan Anh; SĐT: 0949.242.488",
            "text": "Phó CAP: Nguyễn Thị Lan Anh; SĐT: 0949.242.488"
          },
          {
            "raw": "- Phó CAP: Nguyễn Đình Thi; SĐT: 0982.977.198",
            "text": "Phó CAP: Nguyễn Đình Thi; SĐT: 0982.977.198"
          },
          {
            "raw": "- Phó CAP: Nguyễn Anh Tuấn; SĐT: 0904.068.388",
            "text": "Phó CAP: Nguyễn Anh Tuấn; SĐT: 0904.068.388"
          },
          {
            "raw": "- Phó CAP: Nguyễn Văn Hùng; SĐT: 0977.480.086",
            "text": "Phó CAP: Nguyễn Văn Hùng; SĐT: 0977.480.086"
          },
          {
            "raw": "- Trực ban: 02033.856.568",
            "text": "Trực ban: 02033.856.568"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Yên Tử",
        "raw_title": "6.3. Ủy ban nhân dân phường Yên Tử",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy phường: Bùi Hoàng Giang; SĐT: 0933.695.686",
            "text": "Bí thư Đảng ủy phường: Bùi Hoàng Giang; SĐT: 0933.695.686"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Nguyễn Trung Hải; SĐT: 0912.144.445",
            "text": "Phó Bí thư TT Đảng ủy: Nguyễn Trung Hải; SĐT: 0912.144.445"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Mạc Xuân Tú; SĐT: 0912.348.567",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Mạc Xuân Tú; SĐT: 0912.348.567"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Trần Phi Long; SĐT: 0912.182.688",
            "text": "Phó Chủ tịch HĐND phường: Trần Phi Long; SĐT: 0912.182.688"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Phạm Xuân Thành; SĐT: 0989.293.836",
            "text": "Phó Chủ tịch UBND phường: Phạm Xuân Thành; SĐT: 0989.293.836"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Bùi Đức Anh; SĐT: 0912.176.099",
            "text": "Phó Chủ tịch UBND phường: Bùi Đức Anh; SĐT: 0912.176.099"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "6.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222",
            "text": "Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222"
          },
          {
            "raw": "- Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818",
            "text": "Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Uông Bí:",
        "raw_title": "6.5. Điện lực: Đội quản lý điện lực khu vực Uông Bí:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Bùi Tiết Cương; SĐT: 0963.898.568",
            "text": "Đội trưởng: Bùi Tiết Cương; SĐT: 0963.898.568"
          },
          {
            "raw": "- Đội Phó: Nguyễn Minh Khuê; SĐT: 0368.540.568",
            "text": "Đội Phó: Nguyễn Minh Khuê; SĐT: 0368.540.568"
          },
          {
            "raw": "- Đội Phó: Nguyễn Đăng Đức; SĐT: 0963.311.688",
            "text": "Đội Phó: Nguyễn Đăng Đức; SĐT: 0963.311.688"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.567.228; 02033.567.838",
            "text": "Tổ trực vận hành SĐT: 02033.567.228; 02033.567.838"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Uông Bí:",
        "raw_title": "6.6. Cấp nước: Xí nghiệp nước Uông Bí:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Thanh Minh; SĐT: 0982.793.618",
            "text": "Giám đốc: Trần Thanh Minh; SĐT: 0982.793.618"
          },
          {
            "raw": "- Phó giám đốc: Vũ Văn Viễn; SĐT: 0904.543.580",
            "text": "Phó giám đốc: Vũ Văn Viễn; SĐT: 0904.543.580"
          },
          {
            "raw": "- Phó giám đốc: Tạ Đăng Hoàng; SĐT: 0832.111.182",
            "text": "Phó giám đốc: Tạ Đăng Hoàng; SĐT: 0832.111.182"
          },
          {
            "raw": "- Phó giám đốc: Phan Đoàn Chín; SĐT: 0982.423.088",
            "text": "Phó giám đốc: Phan Đoàn Chín; SĐT: 0982.423.088"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "6.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện Việt Nam - Thụy Điển; SĐT: 02033.854.279",
            "text": "Bệnh viện Việt Nam - Thụy Điển; SĐT: 02033.854.279"
          },
          {
            "raw": "- Trạm y tế phường Yên Tử; SĐT: 0835.305.686",
            "text": "Trạm y tế phường Yên Tử; SĐT: 0835.305.686"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "6.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty xi măng Lam Thạch, phương tiện: 01 xe chữa cháy, 01 xe máy xúc; SĐT: 033.856.309",
            "text": "Công ty xi măng Lam Thạch, phương tiện: 01 xe chữa cháy, 01 xe máy xúc; SĐT: 033.856.309"
          },
          {
            "raw": "- Vũ Văn Dự, phương tiện: 01 Xe máy xúc; SĐT: 0375.296.994",
            "text": "Vũ Văn Dự, phương tiện: 01 Xe máy xúc; SĐT: 0375.296.994"
          },
          {
            "raw": "- Trần Hiền, phương tiện: 01 Xe máy xúc; SĐT: 0936.607.696",
            "text": "Trần Hiền, phương tiện: 01 Xe máy xúc; SĐT: 0936.607.696"
          },
          {
            "raw": "- Bùi Văn Tuyền, phương tiện: 01 Ô tô",
            "text": "Bùi Văn Tuyền, phương tiện: 01 Ô tô"
          },
          {
            "raw": "- Bùi Văn Công, phương tiện: 01 Ô tô",
            "text": "Bùi Văn Công, phương tiện: 01 Ô tô"
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "type": "PHƯỜNG",
    "name": "UÔNG BÍ",
    "raw_title": "7. PHƯỜNG UÔNG BÍ",
    "district": "Thành phố Uông Bí",
    "team": "Đội KV2",
    "components": [
      "Uông Bí",
      "Quang Trung",
      "Thanh Sơn",
      "Yên Thanh",
      "Trưng Vương"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "7.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Nha; SĐT: 09361995890",
            "text": "Đội trưởng: Nguyễn Văn Nha; SĐT: 09361995890"
          },
          {
            "raw": "- Phó đội trưởng: Nguyễn Đức Trường; SĐT: 0973.288.269",
            "text": "Phó đội trưởng: Nguyễn Đức Trường; SĐT: 0973.288.269"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Thanh Tuấn; SĐT: 0975.015.959",
            "text": "Phó Đội trưởng: Nguyễn Thanh Tuấn; SĐT: 0975.015.959"
          },
          {
            "raw": "- Trực ban: 02033.567.114",
            "text": "Trực ban: 02033.567.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Uông Bí",
        "raw_title": "7.2. Công an phường Uông Bí",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Vũ Mã Sơn; SĐT: 0973.166.105",
            "text": "Trưởng CAP: Vũ Mã Sơn; SĐT: 0973.166.105"
          },
          {
            "raw": "- Phó CAP: Nguyễn Đức Khiêm; SĐT: 0912.417.011",
            "text": "Phó CAP: Nguyễn Đức Khiêm; SĐT: 0912.417.011"
          },
          {
            "raw": "- Phó CAP: Ngô Thanh Thế; SĐT: 0988.261.888",
            "text": "Phó CAP: Ngô Thanh Thế; SĐT: 0988.261.888"
          },
          {
            "raw": "- Phó CAP: Nguyễn Hải Linh; SĐT: 0977.866.622",
            "text": "Phó CAP: Nguyễn Hải Linh; SĐT: 0977.866.622"
          },
          {
            "raw": "- Phó CAP: Trần Tuấn Anh; SĐT: 0978.986.999",
            "text": "Phó CAP: Trần Tuấn Anh; SĐT: 0978.986.999"
          },
          {
            "raw": "- Phó CAP: Đỗ Trọng An; SĐT: 0906.595.981",
            "text": "Phó CAP: Đỗ Trọng An; SĐT: 0906.595.981"
          },
          {
            "raw": "- Trực ban: 02033.854.251; 02033.854.266",
            "text": "Trực ban: 02033.854.251; 02033.854.266"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Uông Bí",
        "raw_title": "7.3. Ủy ban nhân dân phường Uông Bí",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Nguyễn Chiến Thắng; SĐT: 0912.288.209",
            "text": "Bí thư, Chủ tịch HĐND phường: Nguyễn Chiến Thắng; SĐT: 0912.288.209"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Đào Ngọc Sơn; SĐT: 0903.255.442",
            "text": "Phó Bí thư TT Đảng ủy: Đào Ngọc Sơn; SĐT: 0903.255.442"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Nguyễn Đức Hòa; SĐT: 0904.448.889",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Nguyễn Đức Hòa; SĐT: 0904.448.889"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Nguyễn Văn Thành; SĐT: 0966.142.888",
            "text": "Phó Chủ tịch HĐND phường: Nguyễn Văn Thành; SĐT: 0966.142.888"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Đào Văn Phức; SĐT: 0932.255.288",
            "text": "Phó Chủ tịch UBND phường: Đào Văn Phức; SĐT: 0932.255.288"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Vũ Thị Hồng Nhung; SĐT: 0982.155.469",
            "text": "Phó Chủ tịch UBND phường: Vũ Thị Hồng Nhung; SĐT: 0982.155.469"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "7.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222",
            "text": "Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222"
          },
          {
            "raw": "- Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818",
            "text": "Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Uông Bí:",
        "raw_title": "7.5. Điện lực: Đội quản lý điện lực khu vực Uông Bí:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Bùi Tiết Cương; SĐT: 0963.898.568",
            "text": "Đội trưởng: Bùi Tiết Cương; SĐT: 0963.898.568"
          },
          {
            "raw": "- Đội Phó: Nguyễn Minh Khuê; SĐT: 0368.540.568",
            "text": "Đội Phó: Nguyễn Minh Khuê; SĐT: 0368.540.568"
          },
          {
            "raw": "- Đội Phó: Nguyễn Đăng Đức; SĐT: 0963.311.688",
            "text": "Đội Phó: Nguyễn Đăng Đức; SĐT: 0963.311.688"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.567.228; 02033.567.838",
            "text": "Tổ trực vận hành SĐT: 02033.567.228; 02033.567.838"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Uông Bí:",
        "raw_title": "7.6. Cấp nước: Xí nghiệp nước Uông Bí:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Thanh Minh; SĐT: 0982.793.618",
            "text": "Giám đốc: Trần Thanh Minh; SĐT: 0982.793.618"
          },
          {
            "raw": "- Phó giám đốc: Vũ Văn Viễn; SĐT: 0904.543.580",
            "text": "Phó giám đốc: Vũ Văn Viễn; SĐT: 0904.543.580"
          },
          {
            "raw": "- Phó giám đốc: Tạ Đăng Hoàng; SĐT: 0832.111.182",
            "text": "Phó giám đốc: Tạ Đăng Hoàng; SĐT: 0832.111.182"
          },
          {
            "raw": "- Phó giám đốc: Phan Đoàn Chín; SĐT: 0982.423.088",
            "text": "Phó giám đốc: Phan Đoàn Chín; SĐT: 0982.423.088"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "7.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện Việt Nam - Thụy Điển; SĐT: 02033.854.279",
            "text": "Bệnh viện Việt Nam - Thụy Điển; SĐT: 02033.854.279"
          },
          {
            "raw": "- Trạm y tế phường Uông Bí; SĐT: 02033.854.452",
            "text": "Trạm y tế phường Uông Bí; SĐT: 02033.854.452"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "7.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty Than Nam Mẫu - TKV, phương tiện: máy xúc, máy ủi, máy gạt, các phương tiện khác; SĐT: 0912.436.748",
            "text": "Công ty Than Nam Mẫu - TKV, phương tiện: máy xúc, máy ủi, máy gạt, các phương tiện khác; SĐT: 0912.436.748"
          },
          {
            "raw": "- Công ty than Vàng Danh - TKV, phương tiện: 01 máy xúc, máy ủi, máy gạt, các phương tiện khác; SĐT: 0903.449.848",
            "text": "Công ty than Vàng Danh - TKV, phương tiện: 01 máy xúc, máy ủi, máy gạt, các phương tiện khác; SĐT: 0903.449.848"
          },
          {
            "raw": "- Công ty Kho vận Đã Bạc - TKV, phương tiện: 01 máy xúc, máy ủi, máy gạt, các phương tiện khác; SĐT: 0988.405.463",
            "text": "Công ty Kho vận Đã Bạc - TKV, phương tiện: 01 máy xúc, máy ủi, máy gạt, các phương tiện khác; SĐT: 0988.405.463"
          },
          {
            "raw": "- Nhà máy Nhiệt điện Uông Bí, phương tiện: 01 máy xúc, máy ủi, máy gạt, các phương tiện khác; SĐT: 0936.669.336",
            "text": "Nhà máy Nhiệt điện Uông Bí, phương tiện: 01 máy xúc, máy ủi, máy gạt, các phương tiện khác; SĐT: 0936.669.336"
          },
          {
            "raw": "- Đỗ Minh Đức, phương tiện: 01 máy xúc bánh xích 75W, 2 máy xúc bánh xích 120W; SĐT: 0967.671.833",
            "text": "Đỗ Minh Đức, phương tiện: 01 máy xúc bánh xích 75W, 2 máy xúc bánh xích 120W; SĐT: 0967.671.833"
          },
          {
            "raw": "- Nguyễn Mạnh Trường, phương tiện: máy xúc bánh lốp 55W; SĐT: 0369.661.826",
            "text": "Nguyễn Mạnh Trường, phương tiện: máy xúc bánh lốp 55W; SĐT: 0369.661.826"
          },
          {
            "raw": "- Nguyễn Văn Sơn, phương tiện: 01 máy xúc bánh lốp 55W; SĐT: 0987.519.200",
            "text": "Nguyễn Văn Sơn, phương tiện: 01 máy xúc bánh lốp 55W; SĐT: 0987.519.200"
          },
          {
            "raw": "- Nguyễn Đức Cường, phương tiện: 01 máy xúc bánh lốp 55W, 1 máy xúc bánh lốp 140W; SĐT: 0386.935.395",
            "text": "Nguyễn Đức Cường, phương tiện: 01 máy xúc bánh lốp 55W, 1 máy xúc bánh lốp 140W; SĐT: 0386.935.395"
          },
          {
            "raw": "- Đào Đình Liễn, phương tiện: 01 máy xúc bánh lốp 55W; SĐT: 0904.492.991",
            "text": "Đào Đình Liễn, phương tiện: 01 máy xúc bánh lốp 55W; SĐT: 0904.492.991"
          },
          {
            "raw": "- Nguyễn Danh Hải, phương tiện: 01 máy xúc bánh lốp 55W; SĐT: 0917.616.575",
            "text": "Nguyễn Danh Hải, phương tiện: 01 máy xúc bánh lốp 55W; SĐT: 0917.616.575"
          },
          {
            "raw": "- Nguyễn Công, phương tiện: 02 máy xúc bánh lốp 55W; SĐT: 0975.108.827",
            "text": "Nguyễn Công, phương tiện: 02 máy xúc bánh lốp 55W; SĐT: 0975.108.827"
          },
          {
            "raw": "- Đào Quang Hiếu, phương tiện: 01 máy xúc bánh lốp 55W; SĐT: 0978.202.414",
            "text": "Đào Quang Hiếu, phương tiện: 01 máy xúc bánh lốp 55W; SĐT: 0978.202.414"
          },
          {
            "raw": "- Nguyễn Văn Thành, phương tiện: 01 máy xúc bánh lốp 55W; SĐT: 0927.196.886",
            "text": "Nguyễn Văn Thành, phương tiện: 01 máy xúc bánh lốp 55W; SĐT: 0927.196.886"
          },
          {
            "raw": "- Nguyễn Văn Dương, phương tiện: 01 máy xúc CUMATSU 250 bánh xích; SĐT: 0912.949.955",
            "text": "Nguyễn Văn Dương, phương tiện: 01 máy xúc CUMATSU 250 bánh xích; SĐT: 0912.949.955"
          },
          {
            "raw": "- Nguyễn Văn Độ, phương tiện: 02 máy xúc CUMATSU bánh xích PC200; SĐT: 0912.826.271",
            "text": "Nguyễn Văn Độ, phương tiện: 02 máy xúc CUMATSU bánh xích PC200; SĐT: 0912.826.271"
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "type": "PHƯỜNG",
    "name": "VÀNG DANH",
    "raw_title": "8. PHƯỜNG VÀNG DANH",
    "district": "Thành phố Uông Bí",
    "team": "Đội KV2",
    "components": [
      "Vàng Danh",
      "Bắc Sơn",
      "Nam Khê"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "8.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Nha; SĐT: 09361995890",
            "text": "Đội trưởng: Nguyễn Văn Nha; SĐT: 09361995890"
          },
          {
            "raw": "- Phó đội trưởng: Nguyễn Đức Trường; SĐT: 0973.288.269",
            "text": "Phó đội trưởng: Nguyễn Đức Trường; SĐT: 0973.288.269"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Thanh Tuấn; SĐT: 0975.015.959",
            "text": "Phó Đội trưởng: Nguyễn Thanh Tuấn; SĐT: 0975.015.959"
          },
          {
            "raw": "- Trực ban: 02033.567.114",
            "text": "Trực ban: 02033.567.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Vàng Danh",
        "raw_title": "8.2. Công an phường Vàng Danh",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Bùi Trung Dũng; SĐT: 0983.478.089",
            "text": "Trưởng CAP: Bùi Trung Dũng; SĐT: 0983.478.089"
          },
          {
            "raw": "- Phó CAP: Trịnh Đình Hường; SĐT: 0982.897.186",
            "text": "Phó CAP: Trịnh Đình Hường; SĐT: 0982.897.186"
          },
          {
            "raw": "- Phó CAP: Nguyễn Tuấn Anh; SĐT: 0934.344.669",
            "text": "Phó CAP: Nguyễn Tuấn Anh; SĐT: 0934.344.669"
          },
          {
            "raw": "- Phó CAP: Vũ Tùng Thanh; SĐT: 0982.836.689",
            "text": "Phó CAP: Vũ Tùng Thanh; SĐT: 0982.836.689"
          },
          {
            "raw": "- Phó CAP: Mạc Quang Lên; SĐT: 0986.582.379",
            "text": "Phó CAP: Mạc Quang Lên; SĐT: 0986.582.379"
          },
          {
            "raw": "- Phó CAP: Hoàng Mạnh Sơn; SĐT: 0904.448.676",
            "text": "Phó CAP: Hoàng Mạnh Sơn; SĐT: 0904.448.676"
          },
          {
            "raw": "- Trực ban: 02033.853.132; 02033.854.251",
            "text": "Trực ban: 02033.853.132; 02033.854.251"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Vàng Danh",
        "raw_title": "8.3. Ủy ban nhân dân phường Vàng Danh",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Hoàng Quốc Trung; SĐT: 0913.369.258",
            "text": "Bí thư, Chủ tịch HĐND phường: Hoàng Quốc Trung; SĐT: 0913.369.258"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Đỗ Trường Sơn; SĐT: 0986.724.999",
            "text": "Phó Bí thư TT Đảng ủy: Đỗ Trường Sơn; SĐT: 0986.724.999"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Bùi Văn Thành; SĐT: 0912.659.926",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Bùi Văn Thành; SĐT: 0912.659.926"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Bùi Huy Thục; SĐT: 0912.028.782",
            "text": "Phó Chủ tịch HĐND phường: Bùi Huy Thục; SĐT: 0912.028.782"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Khánh Toàn; SĐT: 0943.955.678",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Khánh Toàn; SĐT: 0943.955.678"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Thị Thanh Giang; SĐT: 0978.225.402",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Thị Thanh Giang; SĐT: 0978.225.402"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "8.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222",
            "text": "Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222"
          },
          {
            "raw": "- Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818",
            "text": "Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Uông Bí:",
        "raw_title": "8.5. Điện lực: Đội quản lý điện lực khu vực Uông Bí:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Bùi Tiết Cương; SĐT: 0963.898.568",
            "text": "Đội trưởng: Bùi Tiết Cương; SĐT: 0963.898.568"
          },
          {
            "raw": "- Đội Phó: Nguyễn Minh Khuê; SĐT: 0368.540.568",
            "text": "Đội Phó: Nguyễn Minh Khuê; SĐT: 0368.540.568"
          },
          {
            "raw": "- Đội Phó: Nguyễn Đăng Đức; SĐT: 0963.311.688",
            "text": "Đội Phó: Nguyễn Đăng Đức; SĐT: 0963.311.688"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.567.228; 02033.567.838",
            "text": "Tổ trực vận hành SĐT: 02033.567.228; 02033.567.838"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Uông Bí:",
        "raw_title": "8.6. Cấp nước: Xí nghiệp nước Uông Bí:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Thanh Minh; SĐT: 0982.793.618",
            "text": "Giám đốc: Trần Thanh Minh; SĐT: 0982.793.618"
          },
          {
            "raw": "- Phó giám đốc: Vũ Văn Viễn; SĐT: 0904.543.580",
            "text": "Phó giám đốc: Vũ Văn Viễn; SĐT: 0904.543.580"
          },
          {
            "raw": "- Phó giám đốc: Tạ Đăng Hoàng; SĐT: 0832.111.182",
            "text": "Phó giám đốc: Tạ Đăng Hoàng; SĐT: 0832.111.182"
          },
          {
            "raw": "- Phó giám đốc: Phan Đoàn Chín; SĐT: 0982.423.088",
            "text": "Phó giám đốc: Phan Đoàn Chín; SĐT: 0982.423.088"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "8.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện Việt Nam - Thụy Điển; SĐT: 02033.854.279",
            "text": "Bệnh viện Việt Nam - Thụy Điển; SĐT: 02033.854.279"
          },
          {
            "raw": "- Trạm y tế phường Vàng Danh; SĐT: 02033.854.774",
            "text": "Trạm y tế phường Vàng Danh; SĐT: 02033.854.774"
          },
          {
            "raw": "- Bệnh viện ĐKKV Quảng Yên - Cơ sở 2; SĐT: 02033.850.100",
            "text": "Bệnh viện ĐKKV Quảng Yên - Cơ sở 2; SĐT: 02033.850.100"
          },
          {
            "raw": "- Trạm Y tế Than khu vực Mạo Khê - Cơ sở 2; SĐT: 02033.155.355",
            "text": "Trạm Y tế Than khu vực Mạo Khê - Cơ sở 2; SĐT: 02033.155.355"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "8.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty Than Uông Bí - TKV, phương tiện: 01 máy xúc, máy ủi, máy gạt, các phương tiện khác; SĐT: 02033.854.491",
            "text": "Công ty Than Uông Bí - TKV, phương tiện: 01 máy xúc, máy ủi, máy gạt, các phương tiện khác; SĐT: 02033.854.491"
          },
          {
            "raw": "- Công ty CP Than Vàng Danh - Vinacomin, phương tiện: 01 máy xúc, máy ủi, máy gạt, các phương tiện khác; SĐT: 0903.449.848",
            "text": "Công ty CP Than Vàng Danh - Vinacomin, phương tiện: 01 máy xúc, máy ủi, máy gạt, các phương tiện khác; SĐT: 0903.449.848"
          },
          {
            "raw": "- Công ty Thủy lợi Uông Bí, phương tiện: 02 máy xúc 200W; SĐT: 0912.694.854",
            "text": "Công ty Thủy lợi Uông Bí, phương tiện: 02 máy xúc 200W; SĐT: 0912.694.854"
          },
          {
            "raw": "- Công ty TNHH Thành Minh, phương tiện: 01 máy xúc, 01 máy gạt, 01 máy cẩu; SĐT: 0983.268.224",
            "text": "Công ty TNHH Thành Minh, phương tiện: 01 máy xúc, 01 máy gạt, 01 máy cẩu; SĐT: 0983.268.224"
          },
          {
            "raw": "- Công ty TNHH Hiệp Hà, phương tiện: 02 máy cẩu 20 tấn; SĐT: 0912.831.442",
            "text": "Công ty TNHH Hiệp Hà, phương tiện: 02 máy cẩu 20 tấn; SĐT: 0912.831.442"
          },
          {
            "raw": "- Tống Văn Thừa, phương tiện: 01 máy xúc, 01 máy gạt; SĐT: 0983.549.934",
            "text": "Tống Văn Thừa, phương tiện: 01 máy xúc, 01 máy gạt; SĐT: 0983.549.934"
          },
          {
            "raw": "- Bùi Huy Hoàng, phương tiện: 01 máy cẩu 05 tấn; SĐT: 0382.856.999",
            "text": "Bùi Huy Hoàng, phương tiện: 01 máy cẩu 05 tấn; SĐT: 0382.856.999"
          },
          {
            "raw": "- Trần Văn Nghiệp, phương tiện: 01 máy xúc bánh xích 55W; SĐT: 0904.221.788",
            "text": "Trần Văn Nghiệp, phương tiện: 01 máy xúc bánh xích 55W; SĐT: 0904.221.788"
          },
          {
            "raw": "- Nguyễn Văn Sơn, phương tiện: 01 máy xúc 140W; SĐT: 0985.834.724",
            "text": "Nguyễn Văn Sơn, phương tiện: 01 máy xúc 140W; SĐT: 0985.834.724"
          },
          {
            "raw": "- Nguyễn Văn Hải, phương tiện: 01 máy cẩu tự hành 5 tấn; SĐT: 0936.105.852",
            "text": "Nguyễn Văn Hải, phương tiện: 01 máy cẩu tự hành 5 tấn; SĐT: 0936.105.852"
          },
          {
            "raw": "- Nguyễn Tử Liêm, phương tiện: 01 máy xúc bánh lốp 55W; SĐT: 0797.969.886",
            "text": "Nguyễn Tử Liêm, phương tiện: 01 máy xúc bánh lốp 55W; SĐT: 0797.969.886"
          },
          {
            "raw": "- Phùng Huy Hưng, phương tiện: 01 Máy nâng; SĐT: 0904.995.166",
            "text": "Phùng Huy Hưng, phương tiện: 01 Máy nâng; SĐT: 0904.995.166"
          },
          {
            "raw": "- Trần Đình Tuấn, phương tiện: 01 Máy xúc; SĐT: 0789.331.888",
            "text": "Trần Đình Tuấn, phương tiện: 01 Máy xúc; SĐT: 0789.331.888"
          },
          {
            "raw": "- Nguyễn Ngọc Duy, phương tiện: 01 máy xúc lốp bốn bánh 55W; SĐT: 0976.124.662",
            "text": "Nguyễn Ngọc Duy, phương tiện: 01 máy xúc lốp bốn bánh 55W; SĐT: 0976.124.662"
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "type": "PHƯỜNG",
    "name": "HIỆP HÒA",
    "raw_title": "9. PHƯỜNG HIỆP HÒA",
    "district": "Thị xã Quảng Yên",
    "team": "Đội KV3",
    "components": [
      "Hiệp Hòa",
      "Cộng Hòa",
      "Sông Khoai"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "9.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Vũ Quang Diện; SĐT: 0906.123.116",
            "text": "Đội trưởng: Vũ Quang Diện; SĐT: 0906.123.116"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Văn Dương; SĐT: 0906.265.287",
            "text": "Phó Đội trưởng: Nguyễn Văn Dương; SĐT: 0906.265.287"
          },
          {
            "raw": "- Cán bộ: Phạm Thành Chung; SĐT: 0934.769.666",
            "text": "Cán bộ: Phạm Thành Chung; SĐT: 0934.769.666"
          },
          {
            "raw": "- Trực ban: 02033.875.114",
            "text": "Trực ban: 02033.875.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Hiệp Hòa",
        "raw_title": "9.2. Công an phường Hiệp Hòa",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Phạm Đức Hiệp; SĐT: 0985.898.560",
            "text": "Trưởng CAP: Phạm Đức Hiệp; SĐT: 0985.898.560"
          },
          {
            "raw": "- Phó CAP: Đoàn Minh Long; SĐT: 0986.151.004",
            "text": "Phó CAP: Đoàn Minh Long; SĐT: 0986.151.004"
          },
          {
            "raw": "- Phó CAP: Nguyễn Tiến Nghĩa; SĐT: 0936.959.848",
            "text": "Phó CAP: Nguyễn Tiến Nghĩa; SĐT: 0936.959.848"
          },
          {
            "raw": "- Phó CAP: Lê Văn Tuấn; SĐT: 0914.993.789",
            "text": "Phó CAP: Lê Văn Tuấn; SĐT: 0914.993.789"
          },
          {
            "raw": "- Phó CAP: Nguyễn Ngọc Hiếu; SĐT: 0965.259.979",
            "text": "Phó CAP: Nguyễn Ngọc Hiếu; SĐT: 0965.259.979"
          },
          {
            "raw": "- Phó CAP: Lê Xuân Bách; SĐT: 0983.897.765",
            "text": "Phó CAP: Lê Xuân Bách; SĐT: 0983.897.765"
          },
          {
            "raw": "- Trực ban: 02033.683.338; 02033.900.525; 02033.547.010",
            "text": "Trực ban: 02033.683.338; 02033.900.525; 02033.547.010"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Hiệp Hòa",
        "raw_title": "9.3. Ủy ban nhân dân phường Hiệp Hòa",
        "contacts": [
          {
            "raw": "- Bí thư: Đàm Trung Hiếu; SĐT: 0983.089.602",
            "text": "Bí thư: Đàm Trung Hiếu; SĐT: 0983.089.602"
          },
          {
            "raw": "- Phó Bí thư TT, Chủ tịch HĐND phường: Lê Thị Thật Hay; SĐT: 0984.523.155",
            "text": "Phó Bí thư TT, Chủ tịch HĐND phường: Lê Thị Thật Hay; SĐT: 0984.523.155"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Đặng Quốc Trung; SĐT: 0936.464.849",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Đặng Quốc Trung; SĐT: 0936.464.849"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Hoàng Thị Lương; SĐT: 0988.688.745",
            "text": "Phó Chủ tịch HĐND phường: Hoàng Thị Lương; SĐT: 0988.688.745"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Đào Thị Hương Giang; SĐT: 0983.875.981",
            "text": "Phó Chủ tịch UBND phường: Đào Thị Hương Giang; SĐT: 0983.875.981"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Minh Tuyên; SĐT: 0338.004.888",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Minh Tuyên; SĐT: 0338.004.888"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "9.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222",
            "text": "Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222"
          },
          {
            "raw": "- Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818",
            "text": "Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Quảng Yên:",
        "raw_title": "9.5. Điện lực: Đội quản lý điện lực khu vực Quảng Yên:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Thế Long; SĐT: 0966.012.789",
            "text": "Q. Đội trưởng: Phạm Thế Long; SĐT: 0966.012.789"
          },
          {
            "raw": "- Đội Phó: Lê Bá Thu; SĐT: 0968.189.889",
            "text": "Đội Phó: Lê Bá Thu; SĐT: 0968.189.889"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.682.525; 02036.262.080",
            "text": "Tổ trực vận hành SĐT: 02033.682.525; 02036.262.080"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Quảng Yên:",
        "raw_title": "9.6. Cấp nước: Xí nghiệp nước Quảng Yên:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Hùng Cường; SĐT: 0936.936.576",
            "text": "Giám đốc: Trần Hùng Cường; SĐT: 0936.936.576"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thế Tuyền; SĐT: 0353.231.999",
            "text": "Phó giám đốc: Vũ Thế Tuyền; SĐT: 0353.231.999"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Mạnh Hùng; SĐT: 0936.658.999",
            "text": "Phó giám đốc: Nguyễn Mạnh Hùng; SĐT: 0936.658.999"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Văn Chiến; SĐT: 0378.201.888",
            "text": "Phó giám đốc: Hoàng Văn Chiến; SĐT: 0378.201.888"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "9.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thị xã Quảng Yên; SĐT: 0359.008.555",
            "text": "Trung tâm y tế thị xã Quảng Yên; SĐT: 0359.008.555"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "9.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "type": "PHƯỜNG",
    "name": "LIÊN HÒA",
    "raw_title": "10. PHƯỜNG LIÊN HÒA",
    "district": "Thị xã Quảng Yên",
    "team": "Đội KV3",
    "components": [
      "Liên Hòa",
      "Phong Hải",
      "Liên Vị",
      "Tiền Phong"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "10.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Vũ Quang Diện; SĐT: 0906.123.116",
            "text": "Đội trưởng: Vũ Quang Diện; SĐT: 0906.123.116"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Văn Dương; SĐT: 0906.265.287",
            "text": "Phó Đội trưởng: Nguyễn Văn Dương; SĐT: 0906.265.287"
          },
          {
            "raw": "- Cán bộ: Phạm Thành Chung; SĐT: 0934.769.666",
            "text": "Cán bộ: Phạm Thành Chung; SĐT: 0934.769.666"
          },
          {
            "raw": "- Trực ban: 02033.875.114",
            "text": "Trực ban: 02033.875.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Liên Hòa",
        "raw_title": "10.2. Công an phường Liên Hòa",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Phạm Văn Báu; SĐT: 0906.006.388",
            "text": "Trưởng CAP: Phạm Văn Báu; SĐT: 0906.006.388"
          },
          {
            "raw": "- Phó CAP: Vũ Duy Phú; SĐT: 0914.052.516",
            "text": "Phó CAP: Vũ Duy Phú; SĐT: 0914.052.516"
          },
          {
            "raw": "- Phó CAP: Nguyễn Tuấn Anh; SĐT: 0975.344.205",
            "text": "Phó CAP: Nguyễn Tuấn Anh; SĐT: 0975.344.205"
          },
          {
            "raw": "- Phó CAP: Đặng Thanh Tú; SĐT: 0919.676.646",
            "text": "Phó CAP: Đặng Thanh Tú; SĐT: 0919.676.646"
          },
          {
            "raw": "- Phó CAP: Trần Duy Hưng; SĐT: 0969.080.887",
            "text": "Phó CAP: Trần Duy Hưng; SĐT: 0969.080.887"
          },
          {
            "raw": "- Phó CAP: Dương Văn Tiến; SĐT: 0946.881.266",
            "text": "Phó CAP: Dương Văn Tiến; SĐT: 0946.881.266"
          },
          {
            "raw": "- Trực ban: 02033.900.930",
            "text": "Trực ban: 02033.900.930"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Liên Hòa",
        "raw_title": "10.3. Ủy ban nhân dân phường Liên Hòa",
        "contacts": [
          {
            "raw": "- Bí thư: Dương Văn Hào; SĐT: 0966.337.929",
            "text": "Bí thư: Dương Văn Hào; SĐT: 0966.337.929"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Tô Duy Tòng; SĐT: 0986.160.660",
            "text": "Phó Bí thư TT Đảng ủy: Tô Duy Tòng; SĐT: 0986.160.660"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Lê Văn Tháp; SĐT: 0987.366.615",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Lê Văn Tháp; SĐT: 0987.366.615"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Nguyễn Quang Lượng; SĐT: 0904.487.566",
            "text": "Phó Chủ tịch HĐND phường: Nguyễn Quang Lượng; SĐT: 0904.487.566"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Hoàng Văn Thanh; SĐT: 0914.359.596",
            "text": "Phó Chủ tịch UBND phường: Hoàng Văn Thanh; SĐT: 0914.359.596"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Vũ Khắc Hoàn; SĐT: 0363.389.589",
            "text": "Phó Chủ tịch UBND phường: Vũ Khắc Hoàn; SĐT: 0363.389.589"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "10.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222",
            "text": "Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222"
          },
          {
            "raw": "- Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818",
            "text": "Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Quảng Yên:",
        "raw_title": "10.5. Điện lực: Đội quản lý điện lực khu vực Quảng Yên:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Thế Long; SĐT: 0966.012.789",
            "text": "Q. Đội trưởng: Phạm Thế Long; SĐT: 0966.012.789"
          },
          {
            "raw": "- Đội Phó: Lê Bá Thu; SĐT: 0968.189.889",
            "text": "Đội Phó: Lê Bá Thu; SĐT: 0968.189.889"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.682.525; 02036.262.080",
            "text": "Tổ trực vận hành SĐT: 02033.682.525; 02036.262.080"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Quảng Yên:",
        "raw_title": "10.6. Cấp nước: Xí nghiệp nước Quảng Yên:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Hùng Cường; SĐT: 0936.936.576",
            "text": "Giám đốc: Trần Hùng Cường; SĐT: 0936.936.576"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thế Tuyền; SĐT: 0353.231.999",
            "text": "Phó giám đốc: Vũ Thế Tuyền; SĐT: 0353.231.999"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Mạnh Hùng; SĐT: 0936.658.999",
            "text": "Phó giám đốc: Nguyễn Mạnh Hùng; SĐT: 0936.658.999"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Văn Chiến; SĐT: 0378.201.888",
            "text": "Phó giám đốc: Hoàng Văn Chiến; SĐT: 0378.201.888"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "10.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thị xã Quảng Yên; SĐT: 0359.008.555",
            "text": "Trung tâm y tế thị xã Quảng Yên; SĐT: 0359.008.555"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "10.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 11,
    "type": "PHƯỜNG",
    "name": "PHONG CỐC",
    "raw_title": "11. PHƯỜNG PHONG CỐC",
    "district": "Thị xã Quảng Yên",
    "team": "Đội KV3",
    "components": [
      "Phong Cốc",
      "Nam Hòa",
      "Yên Hải",
      "Cẩm La"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "11.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Vũ Quang Diện; SĐT: 0906.123.116",
            "text": "Đội trưởng: Vũ Quang Diện; SĐT: 0906.123.116"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Văn Dương; SĐT: 0906.265.287",
            "text": "Phó Đội trưởng: Nguyễn Văn Dương; SĐT: 0906.265.287"
          },
          {
            "raw": "- Cán bộ: Phạm Thành Chung; SĐT: 0934.769.666",
            "text": "Cán bộ: Phạm Thành Chung; SĐT: 0934.769.666"
          },
          {
            "raw": "- Trực ban: 02033.875.114",
            "text": "Trực ban: 02033.875.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Phong Cốc",
        "raw_title": "11.2. Công an phường Phong Cốc",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Phan Văn Phục; SĐT: 0902.010.187",
            "text": "Trưởng CAP: Phan Văn Phục; SĐT: 0902.010.187"
          },
          {
            "raw": "- Phó CAP: Bùi Ngọc Tân; SĐT: 0967.238.999",
            "text": "Phó CAP: Bùi Ngọc Tân; SĐT: 0967.238.999"
          },
          {
            "raw": "- Phó CAP: Nguyễn Văn Hùng; SĐT: 0979.228.999",
            "text": "Phó CAP: Nguyễn Văn Hùng; SĐT: 0979.228.999"
          },
          {
            "raw": "- Phó CAP: Phạm Thanh Bình; SĐT: 0912.088.019",
            "text": "Phó CAP: Phạm Thanh Bình; SĐT: 0912.088.019"
          },
          {
            "raw": "- Phó CAP: Đặng Văn Sơn; SĐT: 0367.788.505",
            "text": "Phó CAP: Đặng Văn Sơn; SĐT: 0367.788.505"
          },
          {
            "raw": "- Phó CAP: Hoàng Quốc Hùng; SĐT: 0943.005.732",
            "text": "Phó CAP: Hoàng Quốc Hùng; SĐT: 0943.005.732"
          },
          {
            "raw": "- Trực ban: 02033.555.869",
            "text": "Trực ban: 02033.555.869"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Phong Cốc",
        "raw_title": "11.3. Ủy ban nhân dân phường Phong Cốc",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Nguyễn Xuân Lượng; SĐT: 0966.222.828",
            "text": "Bí thư, Chủ tịch HĐND phường: Nguyễn Xuân Lượng; SĐT: 0966.222.828"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Vũ Đức Hào; SĐT: 0352.389.888",
            "text": "Phó Bí thư TT Đảng ủy: Vũ Đức Hào; SĐT: 0352.389.888"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Trần Mạnh Thắng; SĐT: 0912.031.323",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Trần Mạnh Thắng; SĐT: 0912.031.323"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Vũ Đắc Cường; SĐT: 0912.041.489",
            "text": "Phó Chủ tịch HĐND phường: Vũ Đắc Cường; SĐT: 0912.041.489"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Lê Đức Đỗ; SĐT: 0964.532.558",
            "text": "Phó Chủ tịch UBND phường: Lê Đức Đỗ; SĐT: 0964.532.558"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Ngô Đình Dũng; SĐT: 0912.091.992",
            "text": "Phó Chủ tịch UBND phường: Ngô Đình Dũng; SĐT: 0912.091.992"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "11.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222",
            "text": "Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222"
          },
          {
            "raw": "- Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818",
            "text": "Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Quảng Yên:",
        "raw_title": "11.5. Điện lực: Đội quản lý điện lực khu vực Quảng Yên:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Thế Long; SĐT: 0966.012.789",
            "text": "Q. Đội trưởng: Phạm Thế Long; SĐT: 0966.012.789"
          },
          {
            "raw": "- Đội Phó: Lê Bá Thu; SĐT: 0968.189.889",
            "text": "Đội Phó: Lê Bá Thu; SĐT: 0968.189.889"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.682.525; 02036.262.080",
            "text": "Tổ trực vận hành SĐT: 02033.682.525; 02036.262.080"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Quảng Yên:",
        "raw_title": "11.6. Cấp nước: Xí nghiệp nước Quảng Yên:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Hùng Cường; SĐT: 0936.936.576",
            "text": "Giám đốc: Trần Hùng Cường; SĐT: 0936.936.576"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thế Tuyền; SĐT: 0353.231.999",
            "text": "Phó giám đốc: Vũ Thế Tuyền; SĐT: 0353.231.999"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Mạnh Hùng; SĐT: 0936.658.999",
            "text": "Phó giám đốc: Nguyễn Mạnh Hùng; SĐT: 0936.658.999"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Văn Chiến; SĐT: 0378.201.888",
            "text": "Phó giám đốc: Hoàng Văn Chiến; SĐT: 0378.201.888"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "11.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thị xã Quảng Yên; SĐT: 0359.008.555",
            "text": "Trung tâm y tế thị xã Quảng Yên; SĐT: 0359.008.555"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "11.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "type": "PHƯỜNG",
    "name": "HÀ AN",
    "raw_title": "12. PHƯỜNG HÀ AN",
    "district": "Thị xã Quảng Yên",
    "team": "Đội KV3",
    "components": [
      "Hà An",
      "Tân An",
      "Hoàng Tân"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "12.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Vũ Quang Diện; SĐT: 0906.123.116",
            "text": "Đội trưởng: Vũ Quang Diện; SĐT: 0906.123.116"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Văn Dương; SĐT: 0906.265.287",
            "text": "Phó Đội trưởng: Nguyễn Văn Dương; SĐT: 0906.265.287"
          },
          {
            "raw": "- Cán bộ: Phạm Thành Chung; SĐT: 0934.769.666",
            "text": "Cán bộ: Phạm Thành Chung; SĐT: 0934.769.666"
          },
          {
            "raw": "- Trực ban: 02033.875.114",
            "text": "Trực ban: 02033.875.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Hà An",
        "raw_title": "12.2. Công an phường Hà An",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Nguyễn Văn Dương; SĐT: 0988.331.889",
            "text": "Trưởng CAP: Nguyễn Văn Dương; SĐT: 0988.331.889"
          },
          {
            "raw": "- Phó CAP: Nguyễn Mạnh Cường; SĐT: 0385.818.868",
            "text": "Phó CAP: Nguyễn Mạnh Cường; SĐT: 0385.818.868"
          },
          {
            "raw": "- Phó CAP: Phạm Thành Chung; SĐT: 0904.329.666",
            "text": "Phó CAP: Phạm Thành Chung; SĐT: 0904.329.666"
          },
          {
            "raw": "- Phó CAP: Vũ Hữu Tuân; SĐT: 0961.399.128",
            "text": "Phó CAP: Vũ Hữu Tuân; SĐT: 0961.399.128"
          },
          {
            "raw": "- Phó CAP: Dương Văn Mạnh; SĐT: 0332.113.888",
            "text": "Phó CAP: Dương Văn Mạnh; SĐT: 0332.113.888"
          },
          {
            "raw": "- Phó CAP: Đàm Quang Tuấn; SĐT: 0904.030.171",
            "text": "Phó CAP: Đàm Quang Tuấn; SĐT: 0904.030.171"
          },
          {
            "raw": "- Trực ban: 02033.685.054",
            "text": "Trực ban: 02033.685.054"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Hà An",
        "raw_title": "12.3. Ủy ban nhân dân phường Hà An",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Lưu Thanh Phương; SĐT: 0982.269.588",
            "text": "Bí thư, Chủ tịch HĐND phường: Lưu Thanh Phương; SĐT: 0982.269.588"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Nông Văn Đạo; SĐT: 0918.524.416",
            "text": "Phó Bí thư TT Đảng ủy: Nông Văn Đạo; SĐT: 0918.524.416"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Lê Mạnh Tuyến; SĐT: 0912.673.968",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Lê Mạnh Tuyến; SĐT: 0912.673.968"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Nguyễn Đức Tú; SĐT: 0913.310.990",
            "text": "Phó Chủ tịch HĐND phường: Nguyễn Đức Tú; SĐT: 0913.310.990"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Bùi Tố Dưỡng; SĐT: 0766.355.588",
            "text": "Phó Chủ tịch UBND phường: Bùi Tố Dưỡng; SĐT: 0766.355.588"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Trần Đình Phượng; SĐT: 0976.216.869",
            "text": "Phó Chủ tịch UBND phường: Trần Đình Phượng; SĐT: 0976.216.869"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "12.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222",
            "text": "Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222"
          },
          {
            "raw": "- Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818",
            "text": "Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Quảng Yên:",
        "raw_title": "12.5. Điện lực: Đội quản lý điện lực khu vực Quảng Yên:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Thế Long; SĐT: 0966.012.789",
            "text": "Q. Đội trưởng: Phạm Thế Long; SĐT: 0966.012.789"
          },
          {
            "raw": "- Đội Phó: Lê Bá Thu; SĐT: 0968.189.889",
            "text": "Đội Phó: Lê Bá Thu; SĐT: 0968.189.889"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.682.525; 02036.262.080",
            "text": "Tổ trực vận hành SĐT: 02033.682.525; 02036.262.080"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Quảng Yên:",
        "raw_title": "12.6. Cấp nước: Xí nghiệp nước Quảng Yên:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Hùng Cường; SĐT: 0936.936.576",
            "text": "Giám đốc: Trần Hùng Cường; SĐT: 0936.936.576"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thế Tuyền; SĐT: 0353.231.999",
            "text": "Phó giám đốc: Vũ Thế Tuyền; SĐT: 0353.231.999"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Mạnh Hùng; SĐT: 0936.658.999",
            "text": "Phó giám đốc: Nguyễn Mạnh Hùng; SĐT: 0936.658.999"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Văn Chiến; SĐT: 0378.201.888",
            "text": "Phó giám đốc: Hoàng Văn Chiến; SĐT: 0378.201.888"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "12.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thị xã Quảng Yên; SĐT: 0359.008.555",
            "text": "Trung tâm y tế thị xã Quảng Yên; SĐT: 0359.008.555"
          },
          {
            "raw": "- Trạm y tế phường Hà An; SĐT: 0349.714.688",
            "text": "Trạm y tế phường Hà An; SĐT: 0349.714.688"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "12.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- DNTN xí nghiệp đóng tàu vận tải Thành An, phương tiện: 01 Máy bơm chữa cháy; SĐT: 0918.536.988",
            "text": "DNTN xí nghiệp đóng tàu vận tải Thành An, phương tiện: 01 Máy bơm chữa cháy; SĐT: 0918.536.988"
          },
          {
            "raw": "- Vũ Đức Thủy, phương tiện: 01 Máy xúc; SĐT: 0966.070.071",
            "text": "Vũ Đức Thủy, phương tiện: 01 Máy xúc; SĐT: 0966.070.071"
          }
        ]
      }
    ]
  },
  {
    "id": 13,
    "type": "PHƯỜNG",
    "name": "QUẢNG YÊN",
    "raw_title": "13. PHƯỜNG QUẢNG YÊN",
    "district": "Thị xã Quảng Yên",
    "team": "Đội KV3",
    "components": [
      "Quảng Yên",
      "Yên Giang",
      "Tiền An"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "13.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Vũ Quang Diện; SĐT: 0906.123.116",
            "text": "Đội trưởng: Vũ Quang Diện; SĐT: 0906.123.116"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Văn Dương; SĐT: 0906.265.287",
            "text": "Phó Đội trưởng: Nguyễn Văn Dương; SĐT: 0906.265.287"
          },
          {
            "raw": "- Cán bộ: Phạm Thành Chung; SĐT: 0934.769.666",
            "text": "Cán bộ: Phạm Thành Chung; SĐT: 0934.769.666"
          },
          {
            "raw": "- Trực ban: 02033.875.114",
            "text": "Trực ban: 02033.875.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Quảng Yên",
        "raw_title": "13.2. Công an phường Quảng Yên",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Ngô Viết Thế; SĐT: 0945.449.666",
            "text": "Trưởng CAP: Ngô Viết Thế; SĐT: 0945.449.666"
          },
          {
            "raw": "- Phó CAP: Đặng Mạnh Thường; SĐT: 0912.058.666",
            "text": "Phó CAP: Đặng Mạnh Thường; SĐT: 0912.058.666"
          },
          {
            "raw": "- Phó CAP: Nguyễn Mạnh Tuấn; SĐT: 0838.721.189",
            "text": "Phó CAP: Nguyễn Mạnh Tuấn; SĐT: 0838.721.189"
          },
          {
            "raw": "- Phó CAP: Nguyễn Thế Long; SĐT: 0986.308.858",
            "text": "Phó CAP: Nguyễn Thế Long; SĐT: 0986.308.858"
          },
          {
            "raw": "- Phó CAP: Bùi Anh Tuấn; SĐT: 0904.103.848",
            "text": "Phó CAP: Bùi Anh Tuấn; SĐT: 0904.103.848"
          },
          {
            "raw": "- Phó CAP: Trần Trung Kiên; SĐT: 0976.166.405",
            "text": "Phó CAP: Trần Trung Kiên; SĐT: 0976.166.405"
          },
          {
            "raw": "- Trực ban: 02033.875.325",
            "text": "Trực ban: 02033.875.325"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Quảng Yên",
        "raw_title": "13.3. Ủy ban nhân dân phường Quảng Yên",
        "contacts": [
          {
            "raw": "- Bí thư: Lê Thành Cung; SĐT: 0983.322.191",
            "text": "Bí thư: Lê Thành Cung; SĐT: 0983.322.191"
          },
          {
            "raw": "- Phó Bí thư TT, Chủ tịch HĐND: Bùi Thị Quỳnh Nga; SĐT: 0395.099.888",
            "text": "Phó Bí thư TT, Chủ tịch HĐND: Bùi Thị Quỳnh Nga; SĐT: 0395.099.888"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Nguyễn Văn Bắc; SĐT: 0983.339.085",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Nguyễn Văn Bắc; SĐT: 0983.339.085"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Nguyễn Thị Thanh Vân; SĐT: 0945.306.678",
            "text": "Phó Chủ tịch HĐND phường: Nguyễn Thị Thanh Vân; SĐT: 0945.306.678"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Vũ Hồng Gương; SĐT: 0915.188.828",
            "text": "Phó Chủ tịch UBND phường: Vũ Hồng Gương; SĐT: 0915.188.828"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Đoàn Phúc Trường; SĐT: 0816.179.867",
            "text": "Phó Chủ tịch UBND phường: Đoàn Phúc Trường; SĐT: 0816.179.867"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "13.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222",
            "text": "Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222"
          },
          {
            "raw": "- Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818",
            "text": "Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Quảng Yên:",
        "raw_title": "13.5. Điện lực: Đội quản lý điện lực khu vực Quảng Yên:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Thế Long; SĐT: 0966.012.789",
            "text": "Q. Đội trưởng: Phạm Thế Long; SĐT: 0966.012.789"
          },
          {
            "raw": "- Đội Phó: Lê Bá Thu; SĐT: 0968.189.889",
            "text": "Đội Phó: Lê Bá Thu; SĐT: 0968.189.889"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.682.525; 02036.262.080",
            "text": "Tổ trực vận hành SĐT: 02033.682.525; 02036.262.080"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Quảng Yên:",
        "raw_title": "13.6. Cấp nước: Xí nghiệp nước Quảng Yên:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Hùng Cường; SĐT: 0936.936.576",
            "text": "Giám đốc: Trần Hùng Cường; SĐT: 0936.936.576"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thế Tuyền; SĐT: 0353.231.999",
            "text": "Phó giám đốc: Vũ Thế Tuyền; SĐT: 0353.231.999"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Mạnh Hùng; SĐT: 0936.658.999",
            "text": "Phó giám đốc: Nguyễn Mạnh Hùng; SĐT: 0936.658.999"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Văn Chiến; SĐT: 0378.201.888",
            "text": "Phó giám đốc: Hoàng Văn Chiến; SĐT: 0378.201.888"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "13.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thị xã Quảng Yên; SĐT: 0359.008.555",
            "text": "Trung tâm y tế thị xã Quảng Yên; SĐT: 0359.008.555"
          },
          {
            "raw": "- Bệnh viện đa khoa khu vực Quảng Yên; SĐT: 0989.048",
            "text": "Bệnh viện đa khoa khu vực Quảng Yên; SĐT: 0989.048"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "13.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty vận tải Mega Lines, phương tiện: 01 Máy xúc; SĐT: 0387.769.999",
            "text": "Công ty vận tải Mega Lines, phương tiện: 01 Máy xúc; SĐT: 0387.769.999"
          },
          {
            "raw": "- Công ty TNHH DVVT TM&XD Minh Anh, phương tiện: 01 Máy xúc; SĐT: 0965.172.678",
            "text": "Công ty TNHH DVVT TM&XD Minh Anh, phương tiện: 01 Máy xúc; SĐT: 0965.172.678"
          },
          {
            "raw": "- Công ty CP Túc Nguyên, phương tiện: 01 Máy xúc; SĐT: 0353.688.168",
            "text": "Công ty CP Túc Nguyên, phương tiện: 01 Máy xúc; SĐT: 0353.688.168"
          },
          {
            "raw": "- Công ty TNHH MTV Vượng Hội, phương tiện: 01 Máy xúc; SĐT: 0333.680.604",
            "text": "Công ty TNHH MTV Vượng Hội, phương tiện: 01 Máy xúc; SĐT: 0333.680.604"
          },
          {
            "raw": "- Công ty CP GTCC Quảng Yên, phương tiện: 01 Xe thang, 02 xe téc; SĐT: 0987.929.866",
            "text": "Công ty CP GTCC Quảng Yên, phương tiện: 01 Xe thang, 02 xe téc; SĐT: 0987.929.866"
          },
          {
            "raw": "- Công ty CP Chương Trình, phương tiện: 01 Máy xúc; SĐT: 0983.872.599",
            "text": "Công ty CP Chương Trình, phương tiện: 01 Máy xúc; SĐT: 0983.872.599"
          }
        ]
      }
    ]
  },
  {
    "id": 14,
    "type": "PHƯỜNG",
    "name": "ĐÔNG MAI",
    "raw_title": "14. PHƯỜNG ĐÔNG MAI",
    "district": "Thị xã Quảng Yên",
    "team": "Đội KV3",
    "components": [
      "Đông Mai",
      "Minh Thành"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "14.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Vũ Quang Diện; SĐT: 0906.123.116",
            "text": "Đội trưởng: Vũ Quang Diện; SĐT: 0906.123.116"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Văn Dương; SĐT: 0906.265.287",
            "text": "Phó Đội trưởng: Nguyễn Văn Dương; SĐT: 0906.265.287"
          },
          {
            "raw": "- Cán bộ: Phạm Thành Chung; SĐT: 0934.769.666",
            "text": "Cán bộ: Phạm Thành Chung; SĐT: 0934.769.666"
          },
          {
            "raw": "- Trực ban: 02033.875.114",
            "text": "Trực ban: 02033.875.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Đông Mai",
        "raw_title": "14.2. Công an phường Đông Mai",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Nguyễn Biên Cương; SĐT: 0902.199.899",
            "text": "Trưởng CAP: Nguyễn Biên Cương; SĐT: 0902.199.899"
          },
          {
            "raw": "- Phó CAP: Khổng Văn Hoăng; SĐT: 0942.818.919",
            "text": "Phó CAP: Khổng Văn Hoăng; SĐT: 0942.818.919"
          },
          {
            "raw": "- Phó CAP: Nguyễn Minh Tiền; SĐT: 0987.355.686",
            "text": "Phó CAP: Nguyễn Minh Tiền; SĐT: 0987.355.686"
          },
          {
            "raw": "- Phó CAP: Nguyễn Thành Long; SĐT: 0983.381.126",
            "text": "Phó CAP: Nguyễn Thành Long; SĐT: 0983.381.126"
          },
          {
            "raw": "- Phó CAP: Bùi Sĩ Đại; SĐT: 0986.508.335",
            "text": "Phó CAP: Bùi Sĩ Đại; SĐT: 0986.508.335"
          },
          {
            "raw": "- Phó CAP: Trần Hải Linh; SĐT: 0989.620.983",
            "text": "Phó CAP: Trần Hải Linh; SĐT: 0989.620.983"
          },
          {
            "raw": "- Trực ban: 02033.873.172",
            "text": "Trực ban: 02033.873.172"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Đông Mai",
        "raw_title": "14.3. Ủy ban nhân dân phường Đông Mai",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Đống Văn Đô; SĐT: 0912.643.488",
            "text": "Bí thư, Chủ tịch HĐND phường: Đống Văn Đô; SĐT: 0912.643.488"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Nguyễn Lan Anh; SĐT: 0904.354.898",
            "text": "Phó Bí thư TT Đảng ủy: Nguyễn Lan Anh; SĐT: 0904.354.898"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Vũ Ngọc Hùng; SĐT: 0913.313.928",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Vũ Ngọc Hùng; SĐT: 0913.313.928"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Nguyễn Quốc Lương; SĐT: 0904.461.908",
            "text": "Phó Chủ tịch HĐND phường: Nguyễn Quốc Lương; SĐT: 0904.461.908"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Kiên Cường; SĐT: 0384.486.139",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Kiên Cường; SĐT: 0384.486.139"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Đức Tặng; SĐT: 0376.261.968",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Đức Tặng; SĐT: 0376.261.968"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "14.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222",
            "text": "Phó trưởng phòng PC08: Trịnh Văn Tuấn; SĐT: 0386.882.222"
          },
          {
            "raw": "- Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818",
            "text": "Đội CSGT ĐB số 1: Đội trưởng: Vũ Đình Nguyên; SĐT: 0913.698.818"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Quảng Yên:",
        "raw_title": "14.5. Điện lực: Đội quản lý điện lực khu vực Quảng Yên:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Thế Long; SĐT: 0966.012.789",
            "text": "Q. Đội trưởng: Phạm Thế Long; SĐT: 0966.012.789"
          },
          {
            "raw": "- Đội Phó: Lê Bá Thu; SĐT: 0968.189.889",
            "text": "Đội Phó: Lê Bá Thu; SĐT: 0968.189.889"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.682.525; 02036.262.080",
            "text": "Tổ trực vận hành SĐT: 02033.682.525; 02036.262.080"
          },
          {
            "raw": "- Tổ Quản lý Điện số 2; SĐT: 02036.262.080",
            "text": "Tổ Quản lý Điện số 2; SĐT: 02036.262.080"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Quảng Yên:",
        "raw_title": "14.6. Cấp nước: Xí nghiệp nước Quảng Yên:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Hùng Cường; SĐT: 0936.936.576",
            "text": "Giám đốc: Trần Hùng Cường; SĐT: 0936.936.576"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thế Tuyền; SĐT: 0353.231.999",
            "text": "Phó giám đốc: Vũ Thế Tuyền; SĐT: 0353.231.999"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Mạnh Hùng; SĐT: 0936.658.999",
            "text": "Phó giám đốc: Nguyễn Mạnh Hùng; SĐT: 0936.658.999"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Văn Chiến; SĐT: 0378.201.888",
            "text": "Phó giám đốc: Hoàng Văn Chiến; SĐT: 0378.201.888"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "14.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thị xã Quảng Yên; SĐT: 0359.008.555",
            "text": "Trung tâm y tế thị xã Quảng Yên; SĐT: 0359.008.555"
          },
          {
            "raw": "- Trạm y tế phường Đông Mai; SĐT: 0945.796.288",
            "text": "Trạm y tế phường Đông Mai; SĐT: 0945.796.288"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "14.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty TNHH 1 TV thủy lợi Yên Lập; SĐT: 0986.581.082",
            "text": "Công ty TNHH 1 TV thủy lợi Yên Lập; SĐT: 0986.581.082"
          },
          {
            "raw": "- Tiểu Đoàn 24, phương tiện: 01 xe cứu thương; SĐT: 0963.843.304",
            "text": "Tiểu Đoàn 24, phương tiện: 01 xe cứu thương; SĐT: 0963.843.304"
          },
          {
            "raw": "- Ban quản lý KCN Đông Mai, phương tiện: 01 xe téc nước, 02 xe chữa cháy; SĐT: 0989.584.380",
            "text": "Ban quản lý KCN Đông Mai, phương tiện: 01 xe téc nước, 02 xe chữa cháy; SĐT: 0989.584.380"
          },
          {
            "raw": "- Nguyễn Đình Khải, phương tiện: 01 xe máy xúc; SĐT: 0978.845.077",
            "text": "Nguyễn Đình Khải, phương tiện: 01 xe máy xúc; SĐT: 0978.845.077"
          },
          {
            "raw": "- Đinh Văn Hanh, phương tiện: 01 xe máy xúc; SĐT: 0906.112.981",
            "text": "Đinh Văn Hanh, phương tiện: 01 xe máy xúc; SĐT: 0906.112.981"
          },
          {
            "raw": "- Đinh Quang Trung, phương tiện: 05 xe máy xúc; SĐT: 0344.560.888",
            "text": "Đinh Quang Trung, phương tiện: 05 xe máy xúc; SĐT: 0344.560.888"
          },
          {
            "raw": "- Ngô Viết Phước, phương tiện: 01 xe máy xúc; SĐT: 0363.390.892",
            "text": "Ngô Viết Phước, phương tiện: 01 xe máy xúc; SĐT: 0363.390.892"
          },
          {
            "raw": "- Vũ Thanh Chung, phương tiện: 01 xe máy xúc; SĐT: 0975.642.111",
            "text": "Vũ Thanh Chung, phương tiện: 01 xe máy xúc; SĐT: 0975.642.111"
          },
          {
            "raw": "- Vũ Văn Độ, phương tiện: 01 xe máy xúc; SĐT: 0912.382.329",
            "text": "Vũ Văn Độ, phương tiện: 01 xe máy xúc; SĐT: 0912.382.329"
          },
          {
            "raw": "- Nguyễn Văn Thành, phương tiện: 01 Máy gạt và xe nâng; SĐT: 0368.813.225",
            "text": "Nguyễn Văn Thành, phương tiện: 01 Máy gạt và xe nâng; SĐT: 0368.813.225"
          }
        ]
      }
    ]
  },
  {
    "id": 15,
    "type": "PHƯỜNG",
    "name": "HOÀNH BỒ",
    "raw_title": "15. PHƯỜNG HOÀNH BỒ",
    "district": "Thành phố Hạ Long",
    "team": "Đội KV4",
    "components": [
      "Hoành Bồ",
      "Sơn Dương",
      "Lê Lợi",
      "Đồng Lâm"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "15.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216",
            "text": "Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688",
            "text": "Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688"
          },
          {
            "raw": "- Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330",
            "text": "Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330"
          },
          {
            "raw": "- Trực ban: 02033.841.114",
            "text": "Trực ban: 02033.841.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Hoành Bồ",
        "raw_title": "15.2. Công an phường Hoành Bồ",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Phạm Xuân Thuỳ; SĐT: 0913.073.288",
            "text": "Trưởng CAP: Phạm Xuân Thuỳ; SĐT: 0913.073.288"
          },
          {
            "raw": "- Phó CAP: Nguyễn Như Hưng; SĐT: 0913.071.719",
            "text": "Phó CAP: Nguyễn Như Hưng; SĐT: 0913.071.719"
          },
          {
            "raw": "- Phó CAP: Nguyễn Hoàng Tung; SĐT: 0938.576.866",
            "text": "Phó CAP: Nguyễn Hoàng Tung; SĐT: 0938.576.866"
          },
          {
            "raw": "- Phó CAP: Đào Quốc Tuấn; SĐT: 0905.286.588",
            "text": "Phó CAP: Đào Quốc Tuấn; SĐT: 0905.286.588"
          },
          {
            "raw": "- Phó CAP: Trịnh Thành Trung; SĐT: 0983.690.408",
            "text": "Phó CAP: Trịnh Thành Trung; SĐT: 0983.690.408"
          },
          {
            "raw": "- Phó CAP: Vũ Văn Long; SĐT: 0989.348.916",
            "text": "Phó CAP: Vũ Văn Long; SĐT: 0989.348.916"
          },
          {
            "raw": "- Trực ban: 02033.858.051",
            "text": "Trực ban: 02033.858.051"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Hoành Bồ",
        "raw_title": "15.3. Ủy ban nhân dân phường Hoành Bồ",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Nguyễn Tuấn Minh; SĐT: 0912.638.059",
            "text": "Bí thư, Chủ tịch HĐND phường: Nguyễn Tuấn Minh; SĐT: 0912.638.059"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Phạm Hùng Thái; SĐT: 0972.504.555",
            "text": "Phó Bí thư TT Đảng ủy: Phạm Hùng Thái; SĐT: 0972.504.555"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Đặng Thái Hưng; SĐT: 0912.534.029",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Đặng Thái Hưng; SĐT: 0912.534.029"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Trần Hồng Đăng; SĐT: 0948.886.393",
            "text": "Phó Chủ tịch HĐND phường: Trần Hồng Đăng; SĐT: 0948.886.393"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Phạm Thị Nhàn; SĐT: 0329.616.868",
            "text": "Phó Chủ tịch UBND phường: Phạm Thị Nhàn; SĐT: 0329.616.868"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Vũ Trường Thành; SĐT: 0988.206.888",
            "text": "Phó Chủ tịch UBND phường: Vũ Trường Thành; SĐT: 0988.206.888"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "15.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "raw_title": "15.5. Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858",
            "text": "Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858"
          },
          {
            "raw": "- Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686",
            "text": "Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259",
            "text": "Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Bãi Cháy:",
        "raw_title": "15.6. Cấp nước: Xí nghiệp nước Bãi Cháy:",
        "contacts": [
          {
            "raw": "- Giám đốc: Lê Văn Khanh; SĐT: 0912.468.983",
            "text": "Giám đốc: Lê Văn Khanh; SĐT: 0912.468.983"
          },
          {
            "raw": "- Phó giám đốc: Lê Quý Khang; SĐT: 0977.441.508",
            "text": "Phó giám đốc: Lê Quý Khang; SĐT: 0977.441.508"
          },
          {
            "raw": "- Phó giám đốc: Lê Văn Thiệp; SĐT: 0976.749.138",
            "text": "Phó giám đốc: Lê Văn Thiệp; SĐT: 0976.749.138"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thị Thu Hương; SĐT: 0899.266.678",
            "text": "Phó giám đốc: Vũ Thị Thu Hương; SĐT: 0899.266.678"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "15.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115",
            "text": "Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115"
          },
          {
            "raw": "- Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313",
            "text": "Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313"
          },
          {
            "raw": "- Trạm y tế phường Hoành Bồ; SĐT: 0982.845.947",
            "text": "Trạm y tế phường Hoành Bồ; SĐT: 0982.845.947"
          },
          {
            "raw": "- Bệnh viện đa khoa tỉnh Quảng Ninh (cơ sở 2); SĐT: 0919.191.359",
            "text": "Bệnh viện đa khoa tỉnh Quảng Ninh (cơ sở 2); SĐT: 0919.191.359"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "15.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty cổ phần nhiệt điện Thăng Long, phương tiện: 01 xe chữa cháy, 01 xe téc nước; SĐT: 0902.088.399",
            "text": "Công ty cổ phần nhiệt điện Thăng Long, phương tiện: 01 xe chữa cháy, 01 xe téc nước; SĐT: 0902.088.399"
          },
          {
            "raw": "- Công ty CP xi măng Thăng Long, phương tiện: 01 xe chữa cháy; SĐT: 0934.637.626",
            "text": "Công ty CP xi măng Thăng Long, phương tiện: 01 xe chữa cháy; SĐT: 0934.637.626"
          },
          {
            "raw": "- Công ty cổ phần môi trường đô thị Hoành Bồ, phương tiện: 01 Xe téc nước",
            "text": "Công ty cổ phần môi trường đô thị Hoành Bồ, phương tiện: 01 Xe téc nước"
          },
          {
            "raw": "- Công ty TNHH Long Thành QN, phương tiện: 01 Xe cẩu; SĐT: 0987.311.391",
            "text": "Công ty TNHH Long Thành QN, phương tiện: 01 Xe cẩu; SĐT: 0987.311.391"
          },
          {
            "raw": "- Công ty than Hà Lầm, phương tiện: 02 Xe chở nước; SĐT: 0365.775.888",
            "text": "Công ty than Hà Lầm, phương tiện: 02 Xe chở nước; SĐT: 0365.775.888"
          },
          {
            "raw": "- Lê Văn Gành, phương tiện: 02 Xe máy ủi; SĐT: 0338.109.888",
            "text": "Lê Văn Gành, phương tiện: 02 Xe máy ủi; SĐT: 0338.109.888"
          },
          {
            "raw": "- Hoàng Đại Lâm, phương tiện: 03 Xe cẩu; SĐT: 0903.459.166",
            "text": "Hoàng Đại Lâm, phương tiện: 03 Xe cẩu; SĐT: 0903.459.166"
          }
        ]
      }
    ]
  },
  {
    "id": 16,
    "type": "XÃ",
    "name": "KỲ THƯỢNG",
    "raw_title": "16. XÃ KỲ THƯỢNG",
    "district": "Thành phố Hạ Long",
    "team": "Đội KV4",
    "components": [
      "Kỳ Thượng",
      "Thanh Lâm",
      "Đạp Thanh"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "16.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218",
            "text": "Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888",
            "text": "Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888"
          },
          {
            "raw": "- Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666",
            "text": "Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666"
          },
          {
            "raw": "- Trực ban: 02033.876.114",
            "text": "Trực ban: 02033.876.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Kỳ Thượng",
        "raw_title": "16.2. Công an xã Kỳ Thượng",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Trần Văn Lê; SĐT: 0915.049.287",
            "text": "Trưởng CAX: Trần Văn Lê; SĐT: 0915.049.287"
          },
          {
            "raw": "- Phó CAP: Nguyễn Văn Tuân; SĐT: 0973.961.666",
            "text": "Phó CAP: Nguyễn Văn Tuân; SĐT: 0973.961.666"
          },
          {
            "raw": "- Phó CAP: Hoàng Phú Quý; SĐT: 0917.888.288",
            "text": "Phó CAP: Hoàng Phú Quý; SĐT: 0917.888.288"
          },
          {
            "raw": "- Phó CAP: Ngô Văn Chinh; SĐT: 0982.458.413",
            "text": "Phó CAP: Ngô Văn Chinh; SĐT: 0982.458.413"
          },
          {
            "raw": "- Phó CAP: Nịnh Quang Cảnh; SĐT: 0979.140.290",
            "text": "Phó CAP: Nịnh Quang Cảnh; SĐT: 0979.140.290"
          },
          {
            "raw": "- Phó CAP: Trần Minh Đắc; SĐT: 0869.903.555",
            "text": "Phó CAP: Trần Minh Đắc; SĐT: 0869.903.555"
          },
          {
            "raw": "- Trực ban: 02033.900.529",
            "text": "Trực ban: 02033.900.529"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Kỳ Thượng",
        "raw_title": "16.3. Ủy ban nhân dân xã Kỳ Thượng",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Hoàng Trường Sơn; SĐT: 0915.697.996",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Hoàng Trường Sơn; SĐT: 0915.697.996"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Phạm Thế Hiền; SĐT: 0916.508.906",
            "text": "Phó Bí thư TT Đảng ủy: Phạm Thế Hiền; SĐT: 0916.508.906"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Khiếu Anh Tú; SĐT: 0912.545.145",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Khiếu Anh Tú; SĐT: 0912.545.145"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Lê Minh Đạt; SĐT: 0936.790.588",
            "text": "Phó Chủ tịch HĐND xã: Lê Minh Đạt; SĐT: 0936.790.588"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Nguyễn Thanh Tùng; SĐT: 0919.024.886",
            "text": "Phó Chủ tịch UBND xã: Nguyễn Thanh Tùng; SĐT: 0919.024.886"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Phạm Văn Đăng; SĐT: 0936.429.465",
            "text": "Phó Chủ tịch UBND xã: Phạm Văn Đăng; SĐT: 0936.429.465"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "16.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Ba Chẽ:",
        "raw_title": "16.5. Điện lực: Đội quản lý điện lực khu vực Ba Chẽ:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Ngô Tuấn Hưng; SĐT: 0968.225.588",
            "text": "Q. Đội trưởng: Ngô Tuấn Hưng; SĐT: 0968.225.588"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.888.631",
            "text": "Tổ trực vận hành SĐT: 02033.888.631"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Không có thông tin",
        "raw_title": "16.6. Cấp nước: Không có thông tin",
        "contacts": []
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "16.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Ba Chẽ; SĐT: 02033.503.030",
            "text": "Trung tâm y tế huyện Ba Chẽ; SĐT: 02033.503.030"
          },
          {
            "raw": "- Trạm y tế xã Kỳ Thượng; SĐT: 0914.664.681",
            "text": "Trạm y tế xã Kỳ Thượng; SĐT: 0914.664.681"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "16.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Lý Văn Tiến 01: 01 máy xúc; SĐT: 0865.012.144",
            "text": "Lý Văn Tiến 01: 01 máy xúc; SĐT: 0865.012.144"
          },
          {
            "raw": "- La Văn Sành 01: 01 máy xúc; SĐT: 0356.808.356",
            "text": "La Văn Sành 01: 01 máy xúc; SĐT: 0356.808.356"
          },
          {
            "raw": "- Bàn Đâu Chiến, phương tiện: 01 máy xúc; SĐT: 0965.407.142",
            "text": "Bàn Đâu Chiến, phương tiện: 01 máy xúc; SĐT: 0965.407.142"
          },
          {
            "raw": "- Trần Văn Dũng, phương tiện: 01 máy xúc; SĐT: 0822.961.985",
            "text": "Trần Văn Dũng, phương tiện: 01 máy xúc; SĐT: 0822.961.985"
          },
          {
            "raw": "- Nguyễn Văn Tài, phương tiện: 01 máy xúc; SĐT: 0968.039.988",
            "text": "Nguyễn Văn Tài, phương tiện: 01 máy xúc; SĐT: 0968.039.988"
          }
        ]
      }
    ]
  },
  {
    "id": 17,
    "type": "PHƯỜNG",
    "name": "VIỆT HƯNG",
    "raw_title": "17. PHƯỜNG VIỆT HƯNG",
    "district": "Thành phố Hạ Long",
    "team": "Đội KV4",
    "components": [
      "Việt Hưng",
      "Giếng Đáy",
      "Hà Khẩu"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "17.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216",
            "text": "Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688",
            "text": "Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688"
          },
          {
            "raw": "- Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330",
            "text": "Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330"
          },
          {
            "raw": "- Trực ban: 02033.841.114",
            "text": "Trực ban: 02033.841.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Việt Hưng",
        "raw_title": "17.2. Công an phường Việt Hưng",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Phạm Trung Đức; SĐT: 0934.696.789",
            "text": "Trưởng CAP: Phạm Trung Đức; SĐT: 0934.696.789"
          },
          {
            "raw": "- Phó CAP: Phạm Văn Hùng; SĐT: 0937.348.688",
            "text": "Phó CAP: Phạm Văn Hùng; SĐT: 0937.348.688"
          },
          {
            "raw": "- Phó CAP: Nguyễn Thị Hien; SĐT: 0914.200.890",
            "text": "Phó CAP: Nguyễn Thị Hien; SĐT: 0914.200.890"
          },
          {
            "raw": "- Phó CAP: Nguyễn Bình Giang; SĐT: 0967.721.222",
            "text": "Phó CAP: Nguyễn Bình Giang; SĐT: 0967.721.222"
          },
          {
            "raw": "- Phó CAP: Lê Việt Thái; SĐT: 0356.603.603",
            "text": "Phó CAP: Lê Việt Thái; SĐT: 0356.603.603"
          },
          {
            "raw": "- Phó CAP: Châu Quang Hậu; SĐT: 0988.626.965",
            "text": "Phó CAP: Châu Quang Hậu; SĐT: 0988.626.965"
          },
          {
            "raw": "- Trực ban: 02033.846.334; 02033.653.113",
            "text": "Trực ban: 02033.846.334; 02033.653.113"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Việt Hưng",
        "raw_title": "17.3. Ủy ban nhân dân phường Việt Hưng",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy: Vũ Ngọc Lâm; SĐT: 0986.382.113",
            "text": "Bí thư Đảng ủy: Vũ Ngọc Lâm; SĐT: 0986.382.113"
          },
          {
            "raw": "- Phó Bí thư TT, Chủ tịch HĐND: Nguyễn Trung Kiên; SĐT: 0983.923.258",
            "text": "Phó Bí thư TT, Chủ tịch HĐND: Nguyễn Trung Kiên; SĐT: 0983.923.258"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Nhữ Đình Tùng; SĐT: 0986.382.113",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Nhữ Đình Tùng; SĐT: 0986.382.113"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Nguyễn Thị Thùy Lam; SĐT: 0904.487.744",
            "text": "Phó Chủ tịch HĐND phường: Nguyễn Thị Thùy Lam; SĐT: 0904.487.744"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Văn Quảng; SĐT: 0988.481.805",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Văn Quảng; SĐT: 0988.481.805"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Phạm Văn Thứ; SĐT: 0985.219.688",
            "text": "Phó Chủ tịch UBND phường: Phạm Văn Thứ; SĐT: 0985.219.688"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "17.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "raw_title": "17.5. Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858",
            "text": "Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858"
          },
          {
            "raw": "- Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686",
            "text": "Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259",
            "text": "Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Bãi Cháy:",
        "raw_title": "17.6. Cấp nước: Xí nghiệp nước Bãi Cháy:",
        "contacts": [
          {
            "raw": "- Giám đốc: Lê Văn Khanh; SĐT: 0912.468.983",
            "text": "Giám đốc: Lê Văn Khanh; SĐT: 0912.468.983"
          },
          {
            "raw": "- Phó giám đốc: Lê Quý Khang; SĐT: 0977.441.508",
            "text": "Phó giám đốc: Lê Quý Khang; SĐT: 0977.441.508"
          },
          {
            "raw": "- Phó giám đốc: Lê Văn Thiệp; SĐT: 0976.749.138",
            "text": "Phó giám đốc: Lê Văn Thiệp; SĐT: 0976.749.138"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thị Thu Hương; SĐT: 0899.266.678",
            "text": "Phó giám đốc: Vũ Thị Thu Hương; SĐT: 0899.266.678"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "17.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện Bãi Cháy; SĐT: 02033.846.566",
            "text": "Bệnh viện Bãi Cháy; SĐT: 02033.846.566"
          },
          {
            "raw": "- Bệnh viện Sản nhi; SĐT: 02033.696.466",
            "text": "Bệnh viện Sản nhi; SĐT: 02033.696.466"
          },
          {
            "raw": "- Trạm y tế phường Việt Hưng; SĐT: 0913.362.125",
            "text": "Trạm y tế phường Việt Hưng; SĐT: 0913.362.125"
          },
          {
            "raw": "- Bệnh viện Bãi Cháy; SĐT: 0983.358.467",
            "text": "Bệnh viện Bãi Cháy; SĐT: 0983.358.467"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "17.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Xí nghiệp Kho vận xăng dầu K130, phương tiện: 02 Xe Cứu hoả chữa cháy; SĐT: 0913.262.916",
            "text": "Xí nghiệp Kho vận xăng dầu K130, phương tiện: 02 Xe Cứu hoả chữa cháy; SĐT: 0913.262.916"
          },
          {
            "raw": "- Ban chỉ huy quân sự Phường, phương tiện: 02 Máy đeo vai thổi gió, 02 máy thổi cầm tay, 06 máy, thổi đất; SĐT: 0365.156.158",
            "text": "Ban chỉ huy quân sự Phường, phương tiện: 02 Máy đeo vai thổi gió, 02 máy thổi cầm tay, 06 máy, thổi đất; SĐT: 0365.156.158"
          }
        ]
      }
    ]
  },
  {
    "id": 18,
    "type": "PHƯỜNG",
    "name": "TUẦN CHÂU",
    "raw_title": "18. PHƯỜNG TUẦN CHÂU",
    "district": "Thành phố Hạ Long",
    "team": "Đội KV4",
    "components": [
      "Tuần Châu",
      "Đại Yên",
      "Hà Khẩu"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "18.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216",
            "text": "Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688",
            "text": "Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688"
          },
          {
            "raw": "- Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330",
            "text": "Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330"
          },
          {
            "raw": "- Trực ban: 02033.841.114",
            "text": "Trực ban: 02033.841.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Tuần Châu",
        "raw_title": "18.2. Công an phường Tuần Châu",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Dương Ngô Năng; SĐT: 0912.008.405",
            "text": "Trưởng CAP: Dương Ngô Năng; SĐT: 0912.008.405"
          },
          {
            "raw": "- Phó CAP: Nguyễn Việt Hùng; SĐT: 0988.988.086",
            "text": "Phó CAP: Nguyễn Việt Hùng; SĐT: 0988.988.086"
          },
          {
            "raw": "- Phó CAP: Phạm Quang Hưng; SĐT: 0335.872.699",
            "text": "Phó CAP: Phạm Quang Hưng; SĐT: 0335.872.699"
          },
          {
            "raw": "- Phó CAP: Nguyễn Văn Thơm; SĐT: 0904.393.899",
            "text": "Phó CAP: Nguyễn Văn Thơm; SĐT: 0904.393.899"
          },
          {
            "raw": "- Phó CAP: Nguyễn Hải Nam; SĐT: 0985.133.668",
            "text": "Phó CAP: Nguyễn Hải Nam; SĐT: 0985.133.668"
          },
          {
            "raw": "- Phó CAP: Trần Mạnh Đức; SĐT: 0914.130.638",
            "text": "Phó CAP: Trần Mạnh Đức; SĐT: 0914.130.638"
          },
          {
            "raw": "- Trực ban: 02033.842.010; 02033.696.835",
            "text": "Trực ban: 02033.842.010; 02033.696.835"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Tuần Châu",
        "raw_title": "18.3. Ủy ban nhân dân phường Tuần Châu",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Bùi Thị Hương; SĐT: 0966.291.116",
            "text": "Bí thư, Chủ tịch HĐND phường: Bùi Thị Hương; SĐT: 0966.291.116"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Nguyễn Hồng Quang; SĐT: 0939.416.886",
            "text": "Phó Bí thư TT Đảng ủy: Nguyễn Hồng Quang; SĐT: 0939.416.886"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Mạc Trung Dũng; SĐT: 0986.720.999",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Mạc Trung Dũng; SĐT: 0986.720.999"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Nguyễn Huy Bình; SĐT: 0975.570.939",
            "text": "Phó Chủ tịch HĐND phường: Nguyễn Huy Bình; SĐT: 0975.570.939"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Vũ Thế Huy; SĐT: 0904.168.819",
            "text": "Phó Chủ tịch UBND phường: Vũ Thế Huy; SĐT: 0904.168.819"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Văn Mạnh; SĐT: 0912.256.916",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Văn Mạnh; SĐT: 0912.256.916"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "18.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "raw_title": "18.5. Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858",
            "text": "Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858"
          },
          {
            "raw": "- Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686",
            "text": "Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259",
            "text": "Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Bãi Cháy:",
        "raw_title": "18.6. Cấp nước: Xí nghiệp nước Bãi Cháy:",
        "contacts": [
          {
            "raw": "- Giám đốc: Lê Văn Khanh; SĐT: 0912.468.983",
            "text": "Giám đốc: Lê Văn Khanh; SĐT: 0912.468.983"
          },
          {
            "raw": "- Phó giám đốc: Lê Quý Khang; SĐT: 0977.441.508",
            "text": "Phó giám đốc: Lê Quý Khang; SĐT: 0977.441.508"
          },
          {
            "raw": "- Phó giám đốc: Lê Văn Thiệp; SĐT: 0976.749.138",
            "text": "Phó giám đốc: Lê Văn Thiệp; SĐT: 0976.749.138"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thị Thu Hương; SĐT: 0899.266.678",
            "text": "Phó giám đốc: Vũ Thị Thu Hương; SĐT: 0899.266.678"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "18.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện Bãi Cháy; SĐT: 02033.846.566",
            "text": "Bệnh viện Bãi Cháy; SĐT: 02033.846.566"
          },
          {
            "raw": "- Bệnh viện Sản nhi; SĐT: 02033.696.466",
            "text": "Bệnh viện Sản nhi; SĐT: 02033.696.466"
          },
          {
            "raw": "- Trạm y tế phường Tuần Châu; SĐT: 02033.857.077",
            "text": "Trạm y tế phường Tuần Châu; SĐT: 02033.857.077"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "18.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Chi cục Kiểm lâm khu vực 1, phương tiện: Các trang thiết bị PCCC và, CNCH rừng; SĐT: 0987.022.073",
            "text": "Chi cục Kiểm lâm khu vực 1, phương tiện: Các trang thiết bị PCCC và, CNCH rừng; SĐT: 0987.022.073"
          },
          {
            "raw": "- Công ty cổ phần Cảng tàu Quốc Tế Tuần Châu, phương tiện: 02 Xe ủi, 01 xe máy xúc; SĐT: 0365.775.888",
            "text": "Công ty cổ phần Cảng tàu Quốc Tế Tuần Châu, phương tiện: 02 Xe ủi, 01 xe máy xúc; SĐT: 0365.775.888"
          },
          {
            "raw": "- Công ty cổ phần đầu tư và thi công hạ tầng Vinalpha, phương tiện: 02 xe bồn nước, 01 Xe máy xúc, 01 xe máy xúc; SĐT: 0988.151.886",
            "text": "Công ty cổ phần đầu tư và thi công hạ tầng Vinalpha, phương tiện: 02 xe bồn nước, 01 Xe máy xúc, 01 xe máy xúc; SĐT: 0988.151.886"
          }
        ]
      }
    ]
  },
  {
    "id": 19,
    "type": "PHƯỜNG",
    "name": "BÃI CHÁY",
    "raw_title": "19. PHƯỜNG BÃI CHÁY",
    "district": "Thành phố Hạ Long",
    "team": "Đội KV4",
    "components": [
      "Bãi Cháy",
      "Hùng Thắng"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "19.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216",
            "text": "Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688",
            "text": "Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688"
          },
          {
            "raw": "- Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330",
            "text": "Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330"
          },
          {
            "raw": "- Trực ban: 02033.841.114",
            "text": "Trực ban: 02033.841.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Bãi Cháy",
        "raw_title": "19.2. Công an phường Bãi Cháy",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Đào Hồng Hải; SĐT: 0912.658.788",
            "text": "Trưởng CAP: Đào Hồng Hải; SĐT: 0912.658.788"
          },
          {
            "raw": "- Phó CAP: Trần Cao Cường; SĐT: 0946.360.695",
            "text": "Phó CAP: Trần Cao Cường; SĐT: 0946.360.695"
          },
          {
            "raw": "- Phó CAP: Trần Vũ Hà; SĐT: 0988.649.999",
            "text": "Phó CAP: Trần Vũ Hà; SĐT: 0988.649.999"
          },
          {
            "raw": "- Phó CAP: Phạm Văn Hòa; SĐT: 0912.592.699",
            "text": "Phó CAP: Phạm Văn Hòa; SĐT: 0912.592.699"
          },
          {
            "raw": "- Phó CAP: Đặng Hữu; SĐT: 0962.978.297",
            "text": "Phó CAP: Đặng Hữu; SĐT: 0962.978.297"
          },
          {
            "raw": "- Phó CAP: Vương Anh Quốc; SĐT: 0936.189.188",
            "text": "Phó CAP: Vương Anh Quốc; SĐT: 0936.189.188"
          },
          {
            "raw": "- Trực ban: 02033.846.411",
            "text": "Trực ban: 02033.846.411"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Bãi Cháy",
        "raw_title": "19.3. Ủy ban nhân dân phường Bãi Cháy",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Nguyễn Hoàng Quý; SĐT: 0983.973.578",
            "text": "Bí thư, Chủ tịch HĐND phường: Nguyễn Hoàng Quý; SĐT: 0983.973.578"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Đinh Thị Nhung; SĐT: 0915.369.250",
            "text": "Phó Bí thư TT Đảng ủy: Đinh Thị Nhung; SĐT: 0915.369.250"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Trần Mạnh Hùng; SĐT: 0988.096.338",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Trần Mạnh Hùng; SĐT: 0988.096.338"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Đặng Đình Linh; SĐT: 0879.072.777",
            "text": "Phó Chủ tịch HĐND phường: Đặng Đình Linh; SĐT: 0879.072.777"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Thanh Tùng; SĐT: 0912.088.944",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Thanh Tùng; SĐT: 0912.088.944"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Lê Văn Thắng; SĐT: 0914.320.912",
            "text": "Phó Chủ tịch UBND phường: Lê Văn Thắng; SĐT: 0914.320.912"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "19.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "raw_title": "19.5. Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858",
            "text": "Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858"
          },
          {
            "raw": "- Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686",
            "text": "Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259",
            "text": "Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Bãi Cháy:",
        "raw_title": "19.6. Cấp nước: Xí nghiệp nước Bãi Cháy:",
        "contacts": [
          {
            "raw": "- Giám đốc: Lê Văn Khanh; SĐT: 0912.468.983",
            "text": "Giám đốc: Lê Văn Khanh; SĐT: 0912.468.983"
          },
          {
            "raw": "- Phó giám đốc: Lê Quý Khang; SĐT: 0977.441.508",
            "text": "Phó giám đốc: Lê Quý Khang; SĐT: 0977.441.508"
          },
          {
            "raw": "- Phó giám đốc: Lê Văn Thiệp; SĐT: 0976.749.138",
            "text": "Phó giám đốc: Lê Văn Thiệp; SĐT: 0976.749.138"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thị Thu Hương; SĐT: 0899.266.678",
            "text": "Phó giám đốc: Vũ Thị Thu Hương; SĐT: 0899.266.678"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "19.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện Bãi Cháy; SĐT: 02033.846.566",
            "text": "Bệnh viện Bãi Cháy; SĐT: 02033.846.566"
          },
          {
            "raw": "- Bệnh viện Sản nhi; SĐT: 02033.696.466",
            "text": "Bệnh viện Sản nhi; SĐT: 02033.696.466"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "19.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty TNHH Mặt Trời Hạ Long, phương tiện: 03 Xe máy xúc, 02 Xe bồn, 01 Xe bồn chở nước, 02 Xe bồn chứa nước, Xe tải nhỏ: 03; SĐT: 02033.845.267",
            "text": "Công ty TNHH Mặt Trời Hạ Long, phương tiện: 03 Xe máy xúc, 02 Xe bồn, 01 Xe bồn chở nước, 02 Xe bồn chứa nước, Xe tải nhỏ: 03; SĐT: 02033.845.267"
          },
          {
            "raw": "- Công ty Xăng dầu B12, phương tiện: 02 Xe bồn chứa nước, 01 xe chữa cháy; SĐT: 02033.846.360",
            "text": "Công ty Xăng dầu B12, phương tiện: 02 Xe bồn chứa nước, 01 xe chữa cháy; SĐT: 02033.846.360"
          }
        ]
      }
    ]
  },
  {
    "id": 20,
    "type": "PHƯỜNG",
    "name": "HẠ LONG",
    "raw_title": "20. PHƯỜNG HẠ LONG",
    "district": "Thành phố Hạ Long",
    "team": "Đội KV4",
    "components": [
      "Hạ Long",
      "Hồng Hà",
      "Hồng Hải"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "20.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216",
            "text": "Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688",
            "text": "Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688"
          },
          {
            "raw": "- Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330",
            "text": "Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330"
          },
          {
            "raw": "- Trực ban: 02033.841.114",
            "text": "Trực ban: 02033.841.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Hạ Long",
        "raw_title": "20.2. Công an phường Hạ Long",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Dương Văn Bình; SĐT: 0983.302.788",
            "text": "Trưởng CAP: Dương Văn Bình; SĐT: 0983.302.788"
          },
          {
            "raw": "- Phó CAP: Nguyễn Trung Hiếu; SĐT: 0918.559.626",
            "text": "Phó CAP: Nguyễn Trung Hiếu; SĐT: 0918.559.626"
          },
          {
            "raw": "- Phó CAP: Vũ Trung Kiên; SĐT: 0914.581.629",
            "text": "Phó CAP: Vũ Trung Kiên; SĐT: 0914.581.629"
          },
          {
            "raw": "- Phó CAP: Đỗ Thị Lê; SĐT: 0904.093.288",
            "text": "Phó CAP: Đỗ Thị Lê; SĐT: 0904.093.288"
          },
          {
            "raw": "- Phó CAP: Nguyễn Hoàng Nam; SĐT: 0913.262.899",
            "text": "Phó CAP: Nguyễn Hoàng Nam; SĐT: 0913.262.899"
          },
          {
            "raw": "- Phó CAP: Lê Quang Tiến; SĐT: 0985.406.263",
            "text": "Phó CAP: Lê Quang Tiến; SĐT: 0985.406.263"
          },
          {
            "raw": "- Trực ban: 0203.38083121",
            "text": "Trực ban: 0203.38083121"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Hạ Long",
        "raw_title": "20.3. Ủy ban nhân dân phường Hạ Long",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Hoàng Bá Nam; SĐT: 0934.207.666",
            "text": "Bí thư, Chủ tịch HĐND phường: Hoàng Bá Nam; SĐT: 0934.207.666"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Nguyễn Thanh Tuấn; SĐT: 0988.893.336",
            "text": "Phó Bí thư TT Đảng ủy: Nguyễn Thanh Tuấn; SĐT: 0988.893.336"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Lưu Mạnh Tuấn; SĐT: 0946.815.188",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Lưu Mạnh Tuấn; SĐT: 0946.815.188"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Phạm Thị Minh Nguyệt; SĐT: 0904.567.233",
            "text": "Phó Chủ tịch HĐND phường: Phạm Thị Minh Nguyệt; SĐT: 0904.567.233"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Thế Anh; SĐT: 0902.199.668",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Thế Anh; SĐT: 0902.199.668"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Hoàng Ngọc Sơn; SĐT: 0984.119.986",
            "text": "Phó Chủ tịch UBND phường: Hoàng Ngọc Sơn; SĐT: 0984.119.986"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "20.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "raw_title": "20.5. Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858",
            "text": "Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858"
          },
          {
            "raw": "- Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686",
            "text": "Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259",
            "text": "Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Hồng Gai:",
        "raw_title": "20.6. Cấp nước: Xí nghiệp nước Hồng Gai:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Nam Trung; SĐT: 0984.821.899",
            "text": "Giám đốc: Trần Nam Trung; SĐT: 0984.821.899"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Tiến Hiệp; SĐT: 0902.060.614",
            "text": "Phó giám đốc: Hoàng Tiến Hiệp; SĐT: 0902.060.614"
          },
          {
            "raw": "- Phó giám đốc: Trịnh Văn Quang; SĐT: 0912.900.366",
            "text": "Phó giám đốc: Trịnh Văn Quang; SĐT: 0912.900.366"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thị Mai Huệ; SĐT: 0983.655.188",
            "text": "Phó giám đốc: Vũ Thị Mai Huệ; SĐT: 0983.655.188"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "20.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115",
            "text": "Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115"
          },
          {
            "raw": "- Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313",
            "text": "Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313"
          },
          {
            "raw": "- Trạm y tế phường Hạ Long; SĐT: 0933.361.983",
            "text": "Trạm y tế phường Hạ Long; SĐT: 0933.361.983"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "20.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": []
      }
    ]
  },
  {
    "id": 21,
    "type": "PHƯỜNG",
    "name": "HỒNG GAI",
    "raw_title": "21. PHƯỜNG HỒNG GAI",
    "district": "Thành phố Hạ Long",
    "team": "Đội KV4",
    "components": [
      "Hồng Gai",
      "Bạch Đằng",
      "Trần Hưng Đạo",
      "Yết Kiêu"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "21.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216",
            "text": "Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688",
            "text": "Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688"
          },
          {
            "raw": "- Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330",
            "text": "Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330"
          },
          {
            "raw": "- Trực ban: 02033.841.114",
            "text": "Trực ban: 02033.841.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Hồng Gai",
        "raw_title": "21.2. Công an phường Hồng Gai",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Hoàng Văn Thao; SĐT: 0913.371.189",
            "text": "Trưởng CAP: Hoàng Văn Thao; SĐT: 0913.371.189"
          },
          {
            "raw": "- Phó CAP: Nguyễn Tiến Quyết; SĐT: 0982.919.588",
            "text": "Phó CAP: Nguyễn Tiến Quyết; SĐT: 0982.919.588"
          },
          {
            "raw": "- Phó CAP: Đo Thị Hương Giang; SĐT: 0977.080.884",
            "text": "Phó CAP: Đo Thị Hương Giang; SĐT: 0977.080.884"
          },
          {
            "raw": "- Phó CAP: Vũ Thị Minh Hà; SĐT: 0913.265.155",
            "text": "Phó CAP: Vũ Thị Minh Hà; SĐT: 0913.265.155"
          },
          {
            "raw": "- Phó CAP: Phan Doàn Phong; SĐT: 0904.343.412",
            "text": "Phó CAP: Phan Doàn Phong; SĐT: 0904.343.412"
          },
          {
            "raw": "- Phó CAP: Ngô Phát Đạt; SĐT: 0927.938.686",
            "text": "Phó CAP: Ngô Phát Đạt; SĐT: 0927.938.686"
          },
          {
            "raw": "- Trực ban: 02033.825.610; 02033.825.266",
            "text": "Trực ban: 02033.825.610; 02033.825.266"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Hồng Gai",
        "raw_title": "21.3. Ủy ban nhân dân phường Hồng Gai",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy: Lê Ngọc Thanh; SĐT: 0904.160.997",
            "text": "Bí thư Đảng ủy: Lê Ngọc Thanh; SĐT: 0904.160.997"
          },
          {
            "raw": "- Phó Bí thư TT, Chủ tịch HĐND: Phạm Thị Thanh Mai; SĐT: 0989.831.818",
            "text": "Phó Bí thư TT, Chủ tịch HĐND: Phạm Thị Thanh Mai; SĐT: 0989.831.818"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Đào Tất Thắng; SĐT: 0845.678.888",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Đào Tất Thắng; SĐT: 0845.678.888"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Bùi Minh Hải; SĐT: 0982.299.998",
            "text": "Phó Chủ tịch HĐND phường: Bùi Minh Hải; SĐT: 0982.299.998"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Đình Đàn; SĐT: 0904.848.133",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Đình Đàn; SĐT: 0904.848.133"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Vũ Đắc Tưởng; SĐT: 0904.227.477",
            "text": "Phó Chủ tịch UBND phường: Vũ Đắc Tưởng; SĐT: 0904.227.477"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "21.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "raw_title": "21.5. Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858",
            "text": "Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858"
          },
          {
            "raw": "- Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686",
            "text": "Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259",
            "text": "Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Hồng Gai:",
        "raw_title": "21.6. Cấp nước: Xí nghiệp nước Hồng Gai:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Nam Trung; SĐT: 0984.821.899",
            "text": "Giám đốc: Trần Nam Trung; SĐT: 0984.821.899"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Tiến Hiệp; SĐT: 0902.060.614",
            "text": "Phó giám đốc: Hoàng Tiến Hiệp; SĐT: 0902.060.614"
          },
          {
            "raw": "- Phó giám đốc: Trịnh Văn Quang; SĐT: 0912.900.366",
            "text": "Phó giám đốc: Trịnh Văn Quang; SĐT: 0912.900.366"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thị Mai Huệ; SĐT: 0983.655.188",
            "text": "Phó giám đốc: Vũ Thị Mai Huệ; SĐT: 0983.655.188"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "21.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115",
            "text": "Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115"
          },
          {
            "raw": "- Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313",
            "text": "Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313"
          },
          {
            "raw": "- Bệnh viện đa khoa tỉnh; SĐT: 0912.367.617",
            "text": "Bệnh viện đa khoa tỉnh; SĐT: 0912.367.617"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "21.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty TNHH Hoàng Kim, phương tiện: 02 Xe máy xúc; SĐT: 0777.378.889",
            "text": "Công ty TNHH Hoàng Kim, phương tiện: 02 Xe máy xúc; SĐT: 0777.378.889"
          }
        ]
      }
    ]
  },
  {
    "id": 22,
    "type": "PHƯỜNG",
    "name": "CAO XANH",
    "raw_title": "22. PHƯỜNG CAO XANH",
    "district": "Thành phố Hạ Long",
    "team": "Đội KV4",
    "components": [
      "Cao Xanh",
      "Hà Khánh"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "22.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216",
            "text": "Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688",
            "text": "Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688"
          },
          {
            "raw": "- Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330",
            "text": "Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330"
          },
          {
            "raw": "- Trực ban: 02033.841.114",
            "text": "Trực ban: 02033.841.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Cao Xanh",
        "raw_title": "22.2. Công an phường Cao Xanh",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Nguyễn Văn Cường; SĐT: 0912.382.555",
            "text": "Trưởng CAP: Nguyễn Văn Cường; SĐT: 0912.382.555"
          },
          {
            "raw": "- Phó CAP: Vương Tùng Long; SĐT: 0972.629.868",
            "text": "Phó CAP: Vương Tùng Long; SĐT: 0972.629.868"
          },
          {
            "raw": "- Phó CAP: Nguyen Thị Kim Chung; SĐT: 0981.331.982",
            "text": "Phó CAP: Nguyen Thị Kim Chung; SĐT: 0981.331.982"
          },
          {
            "raw": "- Phó CAP: Phạm Công Lộc; SĐT: 0916.855.656",
            "text": "Phó CAP: Phạm Công Lộc; SĐT: 0916.855.656"
          },
          {
            "raw": "- Phó CAP: Nguyễn Thuỳ Dung; SĐT: 0388.311.388",
            "text": "Phó CAP: Nguyễn Thuỳ Dung; SĐT: 0388.311.388"
          },
          {
            "raw": "- Phó CAP: Trương Hữu Thọ; SĐT: 0916.581.581",
            "text": "Phó CAP: Trương Hữu Thọ; SĐT: 0916.581.581"
          },
          {
            "raw": "- Trực ban: 02033.825.710; 02033.825.839",
            "text": "Trực ban: 02033.825.710; 02033.825.839"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Cao Xanh",
        "raw_title": "22.3. Ủy ban nhân dân phường Cao Xanh",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy: Lương Văn Luân; SĐT: 0918.528.685",
            "text": "Bí thư Đảng ủy: Lương Văn Luân; SĐT: 0918.528.685"
          },
          {
            "raw": "- Phó Bí thư TT, Chủ tịch HĐND phường: Nguyễn Thị Thúy Hằng; SĐT: 0983.188.981",
            "text": "Phó Bí thư TT, Chủ tịch HĐND phường: Nguyễn Thị Thúy Hằng; SĐT: 0983.188.981"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Lê Tuấn Vũ; SĐT: 0919.265.666",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Lê Tuấn Vũ; SĐT: 0919.265.666"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Nguyễn Huy Cường; SĐT: 0932.388.555",
            "text": "Phó Chủ tịch HĐND phường: Nguyễn Huy Cường; SĐT: 0932.388.555"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Hải Ngọc; SĐT: 0936.181.188",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Hải Ngọc; SĐT: 0936.181.188"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Phạm Ngọc Hải; SĐT: 0983.908.201",
            "text": "Phó Chủ tịch UBND phường: Phạm Ngọc Hải; SĐT: 0983.908.201"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "22.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "raw_title": "22.5. Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858",
            "text": "Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858"
          },
          {
            "raw": "- Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686",
            "text": "Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259",
            "text": "Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Hồng Gai:",
        "raw_title": "22.6. Cấp nước: Xí nghiệp nước Hồng Gai:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Nam Trung; SĐT: 0984.821.899",
            "text": "Giám đốc: Trần Nam Trung; SĐT: 0984.821.899"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Tiến Hiệp; SĐT: 0902.060.614",
            "text": "Phó giám đốc: Hoàng Tiến Hiệp; SĐT: 0902.060.614"
          },
          {
            "raw": "- Phó giám đốc: Trịnh Văn Quang; SĐT: 0912.900.366",
            "text": "Phó giám đốc: Trịnh Văn Quang; SĐT: 0912.900.366"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thị Mai Huệ; SĐT: 0983.655.188",
            "text": "Phó giám đốc: Vũ Thị Mai Huệ; SĐT: 0983.655.188"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "22.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115",
            "text": "Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115"
          },
          {
            "raw": "- Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313",
            "text": "Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313"
          },
          {
            "raw": "- Trạm y tế phường Cao Xanh; SĐT: 0943.294.348",
            "text": "Trạm y tế phường Cao Xanh; SĐT: 0943.294.348"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "22.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty cổ phần Nhiệt điện Quảng Ninh, phương tiện: 01 xe cứu thương, 02 xe chữa cháy; SĐT: 0944.042.068",
            "text": "Công ty cổ phần Nhiệt điện Quảng Ninh, phương tiện: 01 xe cứu thương, 02 xe chữa cháy; SĐT: 0944.042.068"
          },
          {
            "raw": "- Ban chỉ huy quân sự 04, phương tiện: 01 máy cắt cây, 01 máy đào đất phun vào đám cháy, 04 máy thổi gió; SĐT: 0912.187.077",
            "text": "Ban chỉ huy quân sự 04, phương tiện: 01 máy cắt cây, 01 máy đào đất phun vào đám cháy, 04 máy thổi gió; SĐT: 0912.187.077"
          },
          {
            "raw": "- Công ty công nghiệp Hóa chất mỏ Quảng Ninh, phương tiện: 02 Xe tải téc chở nước 9m3; SĐT: 0913.316.479",
            "text": "Công ty công nghiệp Hóa chất mỏ Quảng Ninh, phương tiện: 02 Xe tải téc chở nước 9m3; SĐT: 0913.316.479"
          }
        ]
      }
    ]
  },
  {
    "id": 23,
    "type": "PHƯỜNG",
    "name": "HÀ LẦM",
    "raw_title": "23. PHƯỜNG HÀ LẦM",
    "district": "Thành phố Hạ Long",
    "team": "Đội KV4",
    "components": [
      "Hà Lầm",
      "Hà Trung",
      "Cao Thắng"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "23.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216",
            "text": "Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688",
            "text": "Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688"
          },
          {
            "raw": "- Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330",
            "text": "Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330"
          },
          {
            "raw": "- Trực ban: 02033.841.114",
            "text": "Trực ban: 02033.841.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Hà Lầm",
        "raw_title": "23.2. Công an phường Hà Lầm",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Trần Quang Vĩnh; SĐT: 0983.161.684",
            "text": "Trưởng CAP: Trần Quang Vĩnh; SĐT: 0983.161.684"
          },
          {
            "raw": "- Phó CAP: Phạm Thế Vinh; SĐT: 0913.266.559",
            "text": "Phó CAP: Phạm Thế Vinh; SĐT: 0913.266.559"
          },
          {
            "raw": "- Phó CAP: Vũ Tiến Lợi; SĐT: 0981.552.558",
            "text": "Phó CAP: Vũ Tiến Lợi; SĐT: 0981.552.558"
          },
          {
            "raw": "- Phó CAP: Đình Mạnh Hùng; SĐT: 0904.448.844",
            "text": "Phó CAP: Đình Mạnh Hùng; SĐT: 0904.448.844"
          },
          {
            "raw": "- Phó CAP: Nguyễn Thị Chúc; SĐT: 0988.885.678",
            "text": "Phó CAP: Nguyễn Thị Chúc; SĐT: 0988.885.678"
          },
          {
            "raw": "- Phó CAP: Phạm Thanh Bình; SĐT: 0348.256.789",
            "text": "Phó CAP: Phạm Thanh Bình; SĐT: 0348.256.789"
          },
          {
            "raw": "- Trực ban: 02033.808.316",
            "text": "Trực ban: 02033.808.316"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Hà Lầm",
        "raw_title": "23.3. Ủy ban nhân dân phường Hà Lầm",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Phạm Duy Thanh; SĐT: 0913.355.002",
            "text": "Bí thư, Chủ tịch HĐND phường: Phạm Duy Thanh; SĐT: 0913.355.002"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Nguyễn Thanh Ân; SĐT: 0888.266.866",
            "text": "Phó Bí thư TT Đảng ủy: Nguyễn Thanh Ân; SĐT: 0888.266.866"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Bùi Thị Huyền Trang; SĐT: 0915.462.846",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Bùi Thị Huyền Trang; SĐT: 0915.462.846"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Nguyễn Vũ Hải; SĐT: 0923.268.828",
            "text": "Phó Chủ tịch HĐND phường: Nguyễn Vũ Hải; SĐT: 0923.268.828"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Đoàn Hồng Nam; SĐT: 0912.427.577",
            "text": "Phó Chủ tịch UBND phường: Đoàn Hồng Nam; SĐT: 0912.427.577"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Lưu Hải Yến; SĐT: 0912.427.538",
            "text": "Phó Chủ tịch UBND phường: Lưu Hải Yến; SĐT: 0912.427.538"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "23.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "raw_title": "23.5. Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858",
            "text": "Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858"
          },
          {
            "raw": "- Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686",
            "text": "Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259",
            "text": "Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Hồng Gai:",
        "raw_title": "23.6. Cấp nước: Xí nghiệp nước Hồng Gai:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Nam Trung; SĐT: 0984.821.899",
            "text": "Giám đốc: Trần Nam Trung; SĐT: 0984.821.899"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Tiến Hiệp; SĐT: 0902.060.614",
            "text": "Phó giám đốc: Hoàng Tiến Hiệp; SĐT: 0902.060.614"
          },
          {
            "raw": "- Phó giám đốc: Trịnh Văn Quang; SĐT: 0912.900.366",
            "text": "Phó giám đốc: Trịnh Văn Quang; SĐT: 0912.900.366"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thị Mai Huệ; SĐT: 0983.655.188",
            "text": "Phó giám đốc: Vũ Thị Mai Huệ; SĐT: 0983.655.188"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "23.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115",
            "text": "Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115"
          },
          {
            "raw": "- Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313",
            "text": "Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313"
          },
          {
            "raw": "- Trạm y tế phường Hà Lầm; SĐT: 02036.500.615",
            "text": "Trạm y tế phường Hà Lầm; SĐT: 02036.500.615"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "23.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty cổ phần than Hà Lầm, phương tiện: 02 Xe téc nước; SĐT: 0365.775.888",
            "text": "Công ty cổ phần than Hà Lầm, phương tiện: 02 Xe téc nước; SĐT: 0365.775.888"
          },
          {
            "raw": "- Lê Văn Gành, phương tiện: 02 Xe ủi, xe xúc; SĐT: 0338.109.888",
            "text": "Lê Văn Gành, phương tiện: 02 Xe ủi, xe xúc; SĐT: 0338.109.888"
          },
          {
            "raw": "- Hoàng Đại Lâm, phương tiện: 03 Xe cẩu, xe nâng; SĐT: 0903.459.166",
            "text": "Hoàng Đại Lâm, phương tiện: 03 Xe cẩu, xe nâng; SĐT: 0903.459.166"
          }
        ]
      }
    ]
  },
  {
    "id": 24,
    "type": "PHƯỜNG",
    "name": "HÀ TU",
    "raw_title": "24. PHƯỜNG HÀ TU",
    "district": "Thành phố Hạ Long",
    "team": "Đội KV4",
    "components": [
      "Hà Tu",
      "Hà Phong"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "24.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216",
            "text": "Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688",
            "text": "Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688"
          },
          {
            "raw": "- Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330",
            "text": "Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330"
          },
          {
            "raw": "- Trực ban: 02033.841.114",
            "text": "Trực ban: 02033.841.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Hà Tu",
        "raw_title": "24.2. Công an phường Hà Tu",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Phan Tuấn Anh; SĐT: 0904.267.288",
            "text": "Trưởng CAP: Phan Tuấn Anh; SĐT: 0904.267.288"
          },
          {
            "raw": "- Phó CAP: Ngô Minh Tuân; SĐT: 0912.465.288",
            "text": "Phó CAP: Ngô Minh Tuân; SĐT: 0912.465.288"
          },
          {
            "raw": "- Phó CAP: Hoàng Anh Tuấn; SĐT: 0936.596.658",
            "text": "Phó CAP: Hoàng Anh Tuấn; SĐT: 0936.596.658"
          },
          {
            "raw": "- Phó CAP: Trịnh Đình Quảng; SĐT: 0912.225.505",
            "text": "Phó CAP: Trịnh Đình Quảng; SĐT: 0912.225.505"
          },
          {
            "raw": "- Phó CAP: Ngô Văn Nhân; SĐT: 0968.229.189",
            "text": "Phó CAP: Ngô Văn Nhân; SĐT: 0968.229.189"
          },
          {
            "raw": "- Phó CAP: Nguyễn Thành Công; SĐT: 0986.687.676",
            "text": "Phó CAP: Nguyễn Thành Công; SĐT: 0986.687.676"
          },
          {
            "raw": "- Trực ban: 02033.835.913; 02033.835.974",
            "text": "Trực ban: 02033.835.913; 02033.835.974"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Hà Tu",
        "raw_title": "24.3. Ủy ban nhân dân phường Hà Tu",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Phan Thị Hải Hường; SĐT: 0912.619.118",
            "text": "Bí thư, Chủ tịch HĐND phường: Phan Thị Hải Hường; SĐT: 0912.619.118"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Trần Doãn Tuấn; SĐT: 0982.139.888",
            "text": "Phó Bí thư TT Đảng ủy: Trần Doãn Tuấn; SĐT: 0982.139.888"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Điệp Hùng Thắng; SĐT: 0919.236.886",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Điệp Hùng Thắng; SĐT: 0919.236.886"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Nguyễn Đình Nam; SĐT: 0936.429.905",
            "text": "Phó Chủ tịch HĐND phường: Nguyễn Đình Nam; SĐT: 0936.429.905"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Việt Hưng; SĐT: 0912.297.619",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Việt Hưng; SĐT: 0912.297.619"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Vũ Đức Cường; SĐT: 0977.781.926",
            "text": "Phó Chủ tịch UBND phường: Vũ Đức Cường; SĐT: 0977.781.926"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "24.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "raw_title": "24.5. Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858",
            "text": "Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858"
          },
          {
            "raw": "- Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686",
            "text": "Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259",
            "text": "Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Hồng Gai:",
        "raw_title": "24.6. Cấp nước: Xí nghiệp nước Hồng Gai:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Nam Trung; SĐT: 0984.821.899",
            "text": "Giám đốc: Trần Nam Trung; SĐT: 0984.821.899"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Tiến Hiệp; SĐT: 0902.060.614",
            "text": "Phó giám đốc: Hoàng Tiến Hiệp; SĐT: 0902.060.614"
          },
          {
            "raw": "- Phó giám đốc: Trịnh Văn Quang; SĐT: 0912.900.366",
            "text": "Phó giám đốc: Trịnh Văn Quang; SĐT: 0912.900.366"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thị Mai Huệ; SĐT: 0983.655.188",
            "text": "Phó giám đốc: Vũ Thị Mai Huệ; SĐT: 0983.655.188"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "24.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115",
            "text": "Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115"
          },
          {
            "raw": "- Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313",
            "text": "Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313"
          },
          {
            "raw": "- Trạm y tế Hà Tu; SĐT: 0203.831.222",
            "text": "Trạm y tế Hà Tu; SĐT: 0203.831.222"
          },
          {
            "raw": "- Trạm y tế Núi Béo; SĐT: 02033.633.855",
            "text": "Trạm y tế Núi Béo; SĐT: 02033.633.855"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "24.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty than Hà Tu, phương tiện: 01 xe, chở nước; SĐT: 02033.835.169",
            "text": "Công ty than Hà Tu, phương tiện: 01 xe, chở nước; SĐT: 02033.835.169"
          },
          {
            "raw": "- Công ty than Núi Béo, phương tiện: 02 xe, chở nước; SĐT: 02033.835.678",
            "text": "Công ty than Núi Béo, phương tiện: 02 xe, chở nước; SĐT: 02033.835.678"
          },
          {
            "raw": "- Trung tâm cấp cứu Mỏ, phương tiện: 02 xe ôtô, chữa cháy; SĐT: 02033.606.234",
            "text": "Trung tâm cấp cứu Mỏ, phương tiện: 02 xe ôtô, chữa cháy; SĐT: 02033.606.234"
          },
          {
            "raw": "- Công ty CP Tuấn Đạt, phương tiện: 02 xe, chở nước; SĐT: 0912.471.518",
            "text": "Công ty CP Tuấn Đạt, phương tiện: 02 xe, chở nước; SĐT: 0912.471.518"
          }
        ]
      }
    ]
  },
  {
    "id": 25,
    "type": "XÃ",
    "name": "THỐNG NHẤT",
    "raw_title": "25. XÃ THỐNG NHẤT",
    "district": "Thành phố Hạ Long",
    "team": "Đội KV4",
    "components": [
      "Thống Nhất",
      "Vũ Oai",
      "Hòa Bình"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "25.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216",
            "text": "Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688",
            "text": "Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688"
          },
          {
            "raw": "- Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330",
            "text": "Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330"
          },
          {
            "raw": "- Trực ban: 02033.841.114",
            "text": "Trực ban: 02033.841.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Thống Nhất",
        "raw_title": "25.2. Công an xã Thống Nhất",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Nguyễn Tiến Hưng; SĐT: 0983.180.858",
            "text": "Trưởng CAX: Nguyễn Tiến Hưng; SĐT: 0983.180.858"
          },
          {
            "raw": "- Phó CAP: Nguyễn Tuấn Anh; SĐT: 0975.896.616",
            "text": "Phó CAP: Nguyễn Tuấn Anh; SĐT: 0975.896.616"
          },
          {
            "raw": "- Phó CAP: Phan Thanh Sơn; SĐT: 0906.169.898",
            "text": "Phó CAP: Phan Thanh Sơn; SĐT: 0906.169.898"
          },
          {
            "raw": "- Phó CAP: Phạm Văn Dũng; SĐT: 0915.630.068",
            "text": "Phó CAP: Phạm Văn Dũng; SĐT: 0915.630.068"
          },
          {
            "raw": "- Phó CAP: Liêu Văn Tùng; SĐT: 0343.117.710",
            "text": "Phó CAP: Liêu Văn Tùng; SĐT: 0343.117.710"
          },
          {
            "raw": "- Phó CAP: Chu Văn Thạo; SĐT: 0974.328.235",
            "text": "Phó CAP: Chu Văn Thạo; SĐT: 0974.328.235"
          },
          {
            "raw": "- Trực ban: 02033.901.119; 02033.900.515",
            "text": "Trực ban: 02033.901.119; 02033.900.515"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Thống Nhất",
        "raw_title": "25.3. Ủy ban nhân dân xã Thống Nhất",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Hồ Ngọc Hoài; SĐT: 0982.909.688",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Hồ Ngọc Hoài; SĐT: 0982.909.688"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Nguyễn Như Trang; SĐT: 0904.748.468",
            "text": "Phó Bí thư TT Đảng ủy: Nguyễn Như Trang; SĐT: 0904.748.468"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Bùi Minh Tấn; SĐT: 0986.034.499",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Bùi Minh Tấn; SĐT: 0986.034.499"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Bùi Thị Hải; SĐT: 0979.790.471",
            "text": "Phó Chủ tịch HĐND xã: Bùi Thị Hải; SĐT: 0979.790.471"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Nguyễn Đức Phú; SĐT: 0912.882.662",
            "text": "Phó Chủ tịch UBND xã: Nguyễn Đức Phú; SĐT: 0912.882.662"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Lê Quang Thắng; SĐT: 0845.678.888",
            "text": "Phó Chủ tịch UBND xã: Lê Quang Thắng; SĐT: 0845.678.888"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "25.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "raw_title": "25.5. Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858",
            "text": "Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858"
          },
          {
            "raw": "- Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686",
            "text": "Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259",
            "text": "Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Hồng Gai:",
        "raw_title": "25.6. Cấp nước: Xí nghiệp nước Hồng Gai:",
        "contacts": [
          {
            "raw": "- Giám đốc: Trần Nam Trung; SĐT: 0984.821.899",
            "text": "Giám đốc: Trần Nam Trung; SĐT: 0984.821.899"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Tiến Hiệp; SĐT: 0902.060.614",
            "text": "Phó giám đốc: Hoàng Tiến Hiệp; SĐT: 0902.060.614"
          },
          {
            "raw": "- Phó giám đốc: Trịnh Văn Quang; SĐT: 0912.900.366",
            "text": "Phó giám đốc: Trịnh Văn Quang; SĐT: 0912.900.366"
          },
          {
            "raw": "- Phó giám đốc: Vũ Thị Mai Huệ; SĐT: 0983.655.188",
            "text": "Phó giám đốc: Vũ Thị Mai Huệ; SĐT: 0983.655.188"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "25.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115",
            "text": "Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115"
          },
          {
            "raw": "- Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313",
            "text": "Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "25.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty cổ phần nhiệt điện Quảng Ninh, phương tiện: 03 xe chữa cháy; SĐT: 0989.652.965",
            "text": "Công ty cổ phần nhiệt điện Quảng Ninh, phương tiện: 03 xe chữa cháy; SĐT: 0989.652.965"
          },
          {
            "raw": "- Công ty cổ phần xi măng Hạ Long, phương tiện: 01 xe chữa, 01 xe tiếp nước; SĐT: 0989.358.883",
            "text": "Công ty cổ phần xi măng Hạ Long, phương tiện: 01 xe chữa, 01 xe tiếp nước; SĐT: 0989.358.883"
          }
        ]
      }
    ]
  },
  {
    "id": 26,
    "type": "XÃ",
    "name": "QUẢNG LA",
    "raw_title": "26. XÃ QUẢNG LA",
    "district": "Thành phố Hạ Long",
    "team": "Đội KV4",
    "components": [
      "Quảng La",
      "Bằng Cả",
      "Dân Chủ",
      "Tân Dân"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "26.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216",
            "text": "Đội trưởng: Nguyễn Văn Hòa; SĐT: 0981.090.216"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688",
            "text": "Phó Đội trưởng: Nguyễn Trọng Bình; SĐT: 0905.884.688"
          },
          {
            "raw": "- Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330",
            "text": "Cán bộ: Mai Thị Hương Thảo; SĐT: 0982.281.330"
          },
          {
            "raw": "- Trực ban: 02033.841.114",
            "text": "Trực ban: 02033.841.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Quảng La",
        "raw_title": "26.2. Công an xã Quảng La",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Nguyễn Trung Hiếu; SĐT: 0989.321.985",
            "text": "Trưởng CAX: Nguyễn Trung Hiếu; SĐT: 0989.321.985"
          },
          {
            "raw": "- Phó CAP: Hà Quang Tân; SĐT: 0967.522.616",
            "text": "Phó CAP: Hà Quang Tân; SĐT: 0967.522.616"
          },
          {
            "raw": "- Phó CAP: Vũ Mạnh Hùng; SĐT: 0976.886.066",
            "text": "Phó CAP: Vũ Mạnh Hùng; SĐT: 0976.886.066"
          },
          {
            "raw": "- Phó CAP: Hoàng Trung Hiếu; SĐT: 0943.643.818",
            "text": "Phó CAP: Hoàng Trung Hiếu; SĐT: 0943.643.818"
          },
          {
            "raw": "- Phó CAP: Triệu Tuấn Anh; SĐT: 0989.798.656",
            "text": "Phó CAP: Triệu Tuấn Anh; SĐT: 0989.798.656"
          },
          {
            "raw": "- Phó CAP: Đàm Quang Toàn; SĐT: 0982.893.888",
            "text": "Phó CAP: Đàm Quang Toàn; SĐT: 0982.893.888"
          },
          {
            "raw": "- Trực ban: 02033.901.116; 02033.901.113; 02033.900.013",
            "text": "Trực ban: 02033.901.116; 02033.901.113; 02033.900.013"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Quảng La",
        "raw_title": "26.3. Ủy ban nhân dân xã Quảng La",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy: Đỗ Khánh Tùng; SĐT: 0913.325.884",
            "text": "Bí thư Đảng ủy: Đỗ Khánh Tùng; SĐT: 0913.325.884"
          },
          {
            "raw": "- Phó Bí thư TT, Chủ tịch HĐND xã: Phạm Thị Thu Hằng; SĐT: 0904.292.009",
            "text": "Phó Bí thư TT, Chủ tịch HĐND xã: Phạm Thị Thu Hằng; SĐT: 0904.292.009"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Lê Hữu Nghĩa; SĐT: 0933.689.669",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Lê Hữu Nghĩa; SĐT: 0933.689.669"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Nguyễn Thanh Tùng; SĐT: 0912.506.656",
            "text": "Phó Chủ tịch HĐND xã: Nguyễn Thanh Tùng; SĐT: 0912.506.656"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Phạm Văn Luyến; SĐT: 0983.625.166",
            "text": "Phó Chủ tịch UBND xã: Phạm Văn Luyến; SĐT: 0983.625.166"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Trần Văn Tuyên; SĐT: 0978.700.666",
            "text": "Phó Chủ tịch UBND xã: Trần Văn Tuyên; SĐT: 0978.700.666"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "26.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "raw_title": "26.5. Điện lực: Đội quản lý điện lực khu vực Hạ Long:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858",
            "text": "Q. Đội trưởng: Phạm Đức Thành; SĐT: 0963.886.858"
          },
          {
            "raw": "- Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686",
            "text": "Đội Phó: Nguyễn Văn Thắng; SĐT: 0963.268.686"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259",
            "text": "Tổ trực vận hành SĐT: 02033.635.356; 02033.826.106; 02036.259.259"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Không có thông tin:",
        "raw_title": "26.6. Cấp nước: Không có thông tin:",
        "contacts": []
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "26.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115",
            "text": "Bệnh viện đa khoa tỉnh Quảng Ninh; SĐT: 02033.819.115"
          },
          {
            "raw": "- Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313",
            "text": "Bệnh viện đa khoa Hạ Long; SĐT: 0966.271.313"
          },
          {
            "raw": "- Trạm y tế Quảng La; SĐT: 0384.747.886",
            "text": "Trạm y tế Quảng La; SĐT: 0384.747.886"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "26.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Ban chỉ huy Quân sự xã, phương tiện: 01 máy thổi cầm tay: 09, máy cưa; SĐT: 0977.981.791",
            "text": "Ban chỉ huy Quân sự xã, phương tiện: 01 máy thổi cầm tay: 09, máy cưa; SĐT: 0977.981.791"
          }
        ]
      }
    ]
  },
  {
    "id": 27,
    "type": "PHƯỜNG",
    "name": "QUANG HANH",
    "raw_title": "27. PHƯỜNG QUANG HANH",
    "district": "Thành phố Cẩm Phả",
    "team": "Đội KV5",
    "components": [
      "Quang Hanh",
      "Cẩm Thạch",
      "Cẩm Thủy"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "27.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Khiêm; SĐT: 0983.981.909",
            "text": "Đội trưởng: Nguyễn Văn Khiêm; SĐT: 0983.981.909"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hoàng; SĐT: 0902.252.680",
            "text": "Phó Đội trưởng: Nguyễn Hoàng; SĐT: 0902.252.680"
          },
          {
            "raw": "- Phó Đội trưởng: Trần Văn Quang Anh; SĐT: 0393.238.863",
            "text": "Phó Đội trưởng: Trần Văn Quang Anh; SĐT: 0393.238.863"
          },
          {
            "raw": "- Trực ban: 0365.969.114",
            "text": "Trực ban: 0365.969.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Quang Hanh",
        "raw_title": "27.2. Công an phường Quang Hanh",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Đặng Trung Dũng; SĐT: 0915.451.451",
            "text": "Trưởng CAP: Đặng Trung Dũng; SĐT: 0915.451.451"
          },
          {
            "raw": "- Phó CAP: Phan Hùng Sơn; SĐT: 0911.292.666",
            "text": "Phó CAP: Phan Hùng Sơn; SĐT: 0911.292.666"
          },
          {
            "raw": "- Phó CAP: Vũ Mạnh Tùng; SĐT: 0983.217.387",
            "text": "Phó CAP: Vũ Mạnh Tùng; SĐT: 0983.217.387"
          },
          {
            "raw": "- Phó CAP: Vũ Trong Tuyen; SĐT: 0967.005.663",
            "text": "Phó CAP: Vũ Trong Tuyen; SĐT: 0967.005.663"
          },
          {
            "raw": "- Phó CAP: Nguyễn Thành Công; SĐT: 0936.621.338",
            "text": "Phó CAP: Nguyễn Thành Công; SĐT: 0936.621.338"
          },
          {
            "raw": "- Phó CAP: Lê Văn Nam; SĐT: 0968.599.296",
            "text": "Phó CAP: Lê Văn Nam; SĐT: 0968.599.296"
          },
          {
            "raw": "- Trực ban: 02033.869.117; 02033.862.380",
            "text": "Trực ban: 02033.869.117; 02033.862.380"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Quang Hanh",
        "raw_title": "27.3. Ủy ban nhân dân phường Quang Hanh",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy: Đỗ Mạnh Hùng; SĐT: 0939.669.889",
            "text": "Bí thư Đảng ủy: Đỗ Mạnh Hùng; SĐT: 0939.669.889"
          },
          {
            "raw": "- Phó Bí thư TT, Chủ tịch HĐND phường: Nguyễn Tiến Quang; SĐT: 0904.348.608",
            "text": "Phó Bí thư TT, Chủ tịch HĐND phường: Nguyễn Tiến Quang; SĐT: 0904.348.608"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Nguyễn Tiến Phong; SĐT: 0982.710.577",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Nguyễn Tiến Phong; SĐT: 0982.710.577"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Nguyễn Minh Tuấn; SĐT: 0914.375.368",
            "text": "Phó Chủ tịch HĐND phường: Nguyễn Minh Tuấn; SĐT: 0914.375.368"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Vũ Thị Minh Hải; SĐT: 0986.385.575",
            "text": "Phó Chủ tịch UBND phường: Vũ Thị Minh Hải; SĐT: 0986.385.575"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Lê Quang Tiến; SĐT: 0938.226.268",
            "text": "Phó Chủ tịch UBND phường: Lê Quang Tiến; SĐT: 0938.226.268"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "27.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Cẩm Phả:",
        "raw_title": "27.5. Điện lực: Đội quản lý điện lực khu vực Cẩm Phả:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Nguyễn Đức Lục; SĐT: 0963.626.188",
            "text": "Q. Đội trưởng: Nguyễn Đức Lục; SĐT: 0963.626.188"
          },
          {
            "raw": "- Đội Phó: Lều Hoài Nam; SĐT: 0386.181.888",
            "text": "Đội Phó: Lều Hoài Nam; SĐT: 0386.181.888"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.968.300; 02033.715.651",
            "text": "Tổ trực vận hành SĐT: 02033.968.300; 02033.715.651"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Cẩm Phả:",
        "raw_title": "27.6. Cấp nước: Xí nghiệp nước Cẩm Phả:",
        "contacts": [
          {
            "raw": "- Giám đốc: Nguyễn Đức Long; SĐT: 0945.575.918",
            "text": "Giám đốc: Nguyễn Đức Long; SĐT: 0945.575.918"
          },
          {
            "raw": "- Phó giám đốc: Hạ Nguyên Anh; SĐT: 0982.511.999",
            "text": "Phó giám đốc: Hạ Nguyên Anh; SĐT: 0982.511.999"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Kim Cường; SĐT: 0912.568.487",
            "text": "Phó giám đốc: Nguyễn Kim Cường; SĐT: 0912.568.487"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Mạnh Cường; SĐT: 0976.685.626",
            "text": "Phó giám đốc: Nguyễn Mạnh Cường; SĐT: 0976.685.626"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "27.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện đa khoa khu vực Cẩm Phả; SĐT: 0913.989.826",
            "text": "Bệnh viện đa khoa khu vực Cẩm Phả; SĐT: 0913.989.826"
          },
          {
            "raw": "- Bệnh viện đa khoa Cẩm Phả; SĐT: 02033.862.245",
            "text": "Bệnh viện đa khoa Cẩm Phả; SĐT: 02033.862.245"
          },
          {
            "raw": "- Trạm y tế phường; SĐT: 0973.366.109",
            "text": "Trạm y tế phường; SĐT: 0973.366.109"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "27.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty Cổ phần Môi trường Quang Hanh, phương tiện: Vũ Thị Hoa - Giám đốc, phương tiện: 03 xe tải, 02 xe téc; SĐT: 0985.508.288",
            "text": "Công ty Cổ phần Môi trường Quang Hanh, phương tiện: Vũ Thị Hoa - Giám đốc, phương tiện: 03 xe tải, 02 xe téc; SĐT: 0985.508.288"
          },
          {
            "raw": "- Công ty than Dương Huy TKV, phương tiện: 02 xe tải KAMAZ, 02 máy xúc, 01 máy gạt; SĐT: 0912.575.737",
            "text": "Công ty than Dương Huy TKV, phương tiện: 02 xe tải KAMAZ, 02 máy xúc, 01 máy gạt; SĐT: 0912.575.737"
          },
          {
            "raw": "- Công ty Cổ phần Chế tạo, phương tiện: 01 xe ca trên 16 chỗ, 02 xe tải có cẩu; SĐT: 0912.000.298",
            "text": "Công ty Cổ phần Chế tạo, phương tiện: 01 xe ca trên 16 chỗ, 02 xe tải có cẩu; SĐT: 0912.000.298"
          },
          {
            "raw": "- Công ty 35/Chi nhánh Tổng công ty Đông Bắc, phương tiện: 01 máy xúc , 01 máy gạt, 01 xe cẩu; SĐT: 0916.866.686",
            "text": "Công ty 35/Chi nhánh Tổng công ty Đông Bắc, phương tiện: 01 máy xúc , 01 máy gạt, 01 xe cẩu; SĐT: 0916.866.686"
          },
          {
            "raw": "- Công ty Khe Sim/Chi nhánh Tổng công ty Đông Bắc, phương tiện: 02 xe tải loại Kamaz; SĐT: 0869.123.656",
            "text": "Công ty Khe Sim/Chi nhánh Tổng công ty Đông Bắc, phương tiện: 02 xe tải loại Kamaz; SĐT: 0869.123.656"
          },
          {
            "raw": "- Trung tâm quản lý đường, vận tải mỏ/Chi nhánh Tổng công ty Đông Bắc, phương tiện: 01 máy xúc; SĐT: 0978.699.688",
            "text": "Trung tâm quản lý đường, vận tải mỏ/Chi nhánh Tổng công ty Đông Bắc, phương tiện: 01 máy xúc; SĐT: 0978.699.688"
          },
          {
            "raw": "- Trường Cao đẳng nghề Than Khoáng sản Việt Nam (phân hiệu Cẩm Phả), phương tiện: 10 xe tải; SĐT: 0982.855.788",
            "text": "Trường Cao đẳng nghề Than Khoáng sản Việt Nam (phân hiệu Cẩm Phả), phương tiện: 10 xe tải; SĐT: 0982.855.788"
          }
        ]
      }
    ]
  },
  {
    "id": 28,
    "type": "PHƯỜNG",
    "name": "CẨM PHẢ",
    "raw_title": "28. PHƯỜNG CẨM PHẢ",
    "district": "Thành phố Cẩm Phả",
    "team": "Đội KV5",
    "components": [
      "Cẩm Phả",
      "Cẩm Trung",
      "Cẩm Thành",
      "Cẩm Bình",
      "Cẩm Tây",
      "Cẩm Đông"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "28.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Khiêm; SĐT: 0983.981.909",
            "text": "Đội trưởng: Nguyễn Văn Khiêm; SĐT: 0983.981.909"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hoàng; SĐT: 0902.252.680",
            "text": "Phó Đội trưởng: Nguyễn Hoàng; SĐT: 0902.252.680"
          },
          {
            "raw": "- Phó Đội trưởng: Trần Văn Quang Anh; SĐT: 0393.238.863",
            "text": "Phó Đội trưởng: Trần Văn Quang Anh; SĐT: 0393.238.863"
          },
          {
            "raw": "- Trực ban: 0365.969.114",
            "text": "Trực ban: 0365.969.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Cẩm Phả",
        "raw_title": "28.2. Công an phường Cẩm Phả",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Đặng Trung Dũng; SĐT: 0915.451.451",
            "text": "Trưởng CAP: Đặng Trung Dũng; SĐT: 0915.451.451"
          },
          {
            "raw": "- Phó CAP: Phan Hùng Sơn; SĐT: 0911.292.666",
            "text": "Phó CAP: Phan Hùng Sơn; SĐT: 0911.292.666"
          },
          {
            "raw": "- Phó CAP: Vũ Mạnh Tùng; SĐT: 0983.217.387",
            "text": "Phó CAP: Vũ Mạnh Tùng; SĐT: 0983.217.387"
          },
          {
            "raw": "- Phó CAP: Vũ Trong Tuyen; SĐT: 0967.005.663",
            "text": "Phó CAP: Vũ Trong Tuyen; SĐT: 0967.005.663"
          },
          {
            "raw": "- Phó CAP: Nguyễn Thành Công; SĐT: 0936.621.338",
            "text": "Phó CAP: Nguyễn Thành Công; SĐT: 0936.621.338"
          },
          {
            "raw": "- Phó CAP: Lê Văn Nam; SĐT: 0968.599.296",
            "text": "Phó CAP: Lê Văn Nam; SĐT: 0968.599.296"
          },
          {
            "raw": "- Trực ban: 02033.862.331; 02033.862.330; 02033.862.321; 02033.862.808",
            "text": "Trực ban: 02033.862.331; 02033.862.330; 02033.862.321; 02033.862.808"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Cẩm Phả",
        "raw_title": "28.3. Ủy ban nhân dân phường Cẩm Phả",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy: Phạm Lê Hưng; SĐT: 0912.187.789",
            "text": "Bí thư Đảng ủy: Phạm Lê Hưng; SĐT: 0912.187.789"
          },
          {
            "raw": "- Phó Bí thư TT, Chủ tịch HĐND: Vũ Hồng Chương; SĐT: 0936.336.988",
            "text": "Phó Bí thư TT, Chủ tịch HĐND: Vũ Hồng Chương; SĐT: 0936.336.988"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Hoàng Việt Dũng; SĐT: 0913.206.518",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Hoàng Việt Dũng; SĐT: 0913.206.518"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Nguyễn Thị Thu Phượng; SĐT: 0914.063.755",
            "text": "Phó Chủ tịch HĐND phường: Nguyễn Thị Thu Phượng; SĐT: 0914.063.755"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Công Bằng; SĐT: 0333.862.240",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Công Bằng; SĐT: 0333.862.240"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Thạch Long; SĐT: 0988.923.459",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Thạch Long; SĐT: 0988.923.459"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "28.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Cẩm Phả:",
        "raw_title": "28.5. Điện lực: Đội quản lý điện lực khu vực Cẩm Phả:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Nguyễn Đức Lục; SĐT: 0963.626.188",
            "text": "Q. Đội trưởng: Nguyễn Đức Lục; SĐT: 0963.626.188"
          },
          {
            "raw": "- Đội Phó: Lều Hoài Nam; SĐT: 0386.181.888",
            "text": "Đội Phó: Lều Hoài Nam; SĐT: 0386.181.888"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.968.300; 02033.715.651",
            "text": "Tổ trực vận hành SĐT: 02033.968.300; 02033.715.651"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Cẩm Phả:",
        "raw_title": "28.6. Cấp nước: Xí nghiệp nước Cẩm Phả:",
        "contacts": [
          {
            "raw": "- Giám đốc: Nguyễn Đức Long; SĐT: 0945.575.918",
            "text": "Giám đốc: Nguyễn Đức Long; SĐT: 0945.575.918"
          },
          {
            "raw": "- Phó giám đốc: Hạ Nguyên Anh; SĐT: 0982.511.999",
            "text": "Phó giám đốc: Hạ Nguyên Anh; SĐT: 0982.511.999"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Kim Cường; SĐT: 0912.568.487",
            "text": "Phó giám đốc: Nguyễn Kim Cường; SĐT: 0912.568.487"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Mạnh Cường; SĐT: 0976.685.626",
            "text": "Phó giám đốc: Nguyễn Mạnh Cường; SĐT: 0976.685.626"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "28.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện đa khoa khu vực Cẩm Phả; SĐT: 0913.989.826",
            "text": "Bệnh viện đa khoa khu vực Cẩm Phả; SĐT: 0913.989.826"
          },
          {
            "raw": "- Bệnh viện đa khoa Cẩm Phả; SĐT: 02033.862.245",
            "text": "Bệnh viện đa khoa Cẩm Phả; SĐT: 02033.862.245"
          },
          {
            "raw": "- Bệnh viện Đa khoa Cẩm Phả; SĐT: 0973.958.080",
            "text": "Bệnh viện Đa khoa Cẩm Phả; SĐT: 0973.958.080"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "28.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty Cổ phần môi trường đô thị Cẩm Phả, phương tiện: 01 xe chở nước 16m3, 02 xe chở nước 10m3, 01 xe nâng 14m; SĐT: 02033.711.813",
            "text": "Công ty Cổ phần môi trường đô thị Cẩm Phả, phương tiện: 01 xe chở nước 16m3, 02 xe chở nước 10m3, 01 xe nâng 14m; SĐT: 02033.711.813"
          },
          {
            "raw": "- Công ty TNHH xây dựng Biên Mai, phương tiện: 01 xe tải 2 đầu, 01 máy xúc 0, 8m3; SĐT: 0913.013.226",
            "text": "Công ty TNHH xây dựng Biên Mai, phương tiện: 01 xe tải 2 đầu, 01 máy xúc 0, 8m3; SĐT: 0913.013.226"
          },
          {
            "raw": "- Công ty TNHH đầu tư thương mại và du lịch Hoàng Gia Quảng Ninh 01 tàu cao tốc; SĐT: 0965.517.959",
            "text": "Công ty TNHH đầu tư thương mại và du lịch Hoàng Gia Quảng Ninh 01 tàu cao tốc; SĐT: 0965.517.959"
          },
          {
            "raw": "- Công ty than Thống Nhất, phương tiện: 01 xe cẩu 2,5 tấn, 01 xe xúc gạt, 01 xe chở quân 20 chỗ, 01 xe téc; SĐT: 0912.596.545",
            "text": "Công ty than Thống Nhất, phương tiện: 01 xe cẩu 2,5 tấn, 01 xe xúc gạt, 01 xe chở quân 20 chỗ, 01 xe téc; SĐT: 0912.596.545"
          },
          {
            "raw": "- Công ty cổ phần than Đèo Nai - Cọc Sáu, phương tiện: 05 xe téc 15m3; SĐT: 02033.864.251",
            "text": "Công ty cổ phần than Đèo Nai - Cọc Sáu, phương tiện: 05 xe téc 15m3; SĐT: 02033.864.251"
          },
          {
            "raw": "- Công ty than Hạ Long, phương tiện: 03 xe téc 36m3; SĐT: 02033.698.198",
            "text": "Công ty than Hạ Long, phương tiện: 03 xe téc 36m3; SĐT: 02033.698.198"
          },
          {
            "raw": "- Xí nghiệp vật tư Cẩm Phả, phương tiện: 01 xe cẩu tự hành 6,3 tấn, 02 xe nâng 3,5, 01 xe téc 15m3; SĐT: 0913.263.487",
            "text": "Xí nghiệp vật tư Cẩm Phả, phương tiện: 01 xe cẩu tự hành 6,3 tấn, 02 xe nâng 3,5, 01 xe téc 15m3; SĐT: 0913.263.487"
          },
          {
            "raw": "- Công ty than Quang Hanh, phương tiện: 02 xe téc 26m3, 02 xe cẩu 8 tấn và 5 tấn, xe xúc gạt 4m3, xe chở quân 46 chỗ; SĐT: 0902.363.668",
            "text": "Công ty than Quang Hanh, phương tiện: 02 xe téc 26m3, 02 xe cẩu 8 tấn và 5 tấn, xe xúc gạt 4m3, xe chở quân 46 chỗ; SĐT: 0902.363.668"
          },
          {
            "raw": "- Công ty TNHH xây dựng và phát triển Thanh Phong, phương tiện: 02 xe téc, mỗi xe 10m3; SĐT: 0869.637.256",
            "text": "Công ty TNHH xây dựng và phát triển Thanh Phong, phương tiện: 02 xe téc, mỗi xe 10m3; SĐT: 0869.637.256"
          }
        ]
      }
    ]
  },
  {
    "id": 29,
    "type": "PHƯỜNG",
    "name": "CỬA ÔNG",
    "raw_title": "29. PHƯỜNG CỬA ÔNG",
    "district": "Thành phố Cẩm Phả",
    "team": "Đội KV5",
    "components": [
      "Cửa Ông",
      "Cẩm Phú",
      "Cẩm Thịnh",
      "Cẩm Sơn"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "29.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Khiêm; SĐT: 0983.981.909",
            "text": "Đội trưởng: Nguyễn Văn Khiêm; SĐT: 0983.981.909"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hoàng; SĐT: 0902.252.680",
            "text": "Phó Đội trưởng: Nguyễn Hoàng; SĐT: 0902.252.680"
          },
          {
            "raw": "- Phó Đội trưởng: Trần Văn Quang Anh; SĐT: 0393.238.863",
            "text": "Phó Đội trưởng: Trần Văn Quang Anh; SĐT: 0393.238.863"
          },
          {
            "raw": "- Trực ban: 0365.969.114",
            "text": "Trực ban: 0365.969.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Cửa",
        "raw_title": "29.2. Công an phường Cửa",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Đinh Viết Tùng; SĐT: 0973.374.768",
            "text": "Trưởng CAP: Đinh Viết Tùng; SĐT: 0973.374.768"
          },
          {
            "raw": "- Phó CAP: Đỗ Văn Bình; SĐT: 0912.022.955",
            "text": "Phó CAP: Đỗ Văn Bình; SĐT: 0912.022.955"
          },
          {
            "raw": "- Phó CAP: Đào Anh Dũng; SĐT: 0982.289.282",
            "text": "Phó CAP: Đào Anh Dũng; SĐT: 0982.289.282"
          },
          {
            "raw": "- Phó CAP: Nguyễn Như Hoàn; SĐT: 0989.317.188",
            "text": "Phó CAP: Nguyễn Như Hoàn; SĐT: 0989.317.188"
          },
          {
            "raw": "- Phó CAP: Nguyễn Quang Phương; SĐT: 0988.660.909",
            "text": "Phó CAP: Nguyễn Quang Phương; SĐT: 0988.660.909"
          },
          {
            "raw": "- Phó CAP: Cao Trường Chinh; SĐT: 0374.338.222",
            "text": "Phó CAP: Cao Trường Chinh; SĐT: 0374.338.222"
          },
          {
            "raw": "- Trực ban: 02033.865.015",
            "text": "Trực ban: 02033.865.015"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Cửa",
        "raw_title": "29.3. Ủy ban nhân dân phường Cửa",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Đinh Ngọc Chiến; SĐT: 0836.911.788",
            "text": "Bí thư, Chủ tịch HĐND phường: Đinh Ngọc Chiến; SĐT: 0836.911.788"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Nguyễn Thị Phương; SĐT: 0912.632.242",
            "text": "Phó Bí thư TT Đảng ủy: Nguyễn Thị Phương; SĐT: 0912.632.242"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Đỗ Thế Hiếu; SĐT: 0988.381.298",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Đỗ Thế Hiếu; SĐT: 0988.381.298"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Hoàng Tuấn Khanh; SĐT: 0812.820.911",
            "text": "Phó Chủ tịch HĐND phường: Hoàng Tuấn Khanh; SĐT: 0812.820.911"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Quốc Hoàn; SĐT: 0936.092.266",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Quốc Hoàn; SĐT: 0936.092.266"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Đào Duy Hưng; SĐT: 0989.666.086",
            "text": "Phó Chủ tịch UBND phường: Đào Duy Hưng; SĐT: 0989.666.086"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "29.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Cẩm Phả:",
        "raw_title": "29.5. Điện lực: Đội quản lý điện lực khu vực Cẩm Phả:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Nguyễn Đức Lục; SĐT: 0963.626.188",
            "text": "Q. Đội trưởng: Nguyễn Đức Lục; SĐT: 0963.626.188"
          },
          {
            "raw": "- Đội Phó: Lều Hoài Nam; SĐT: 0386.181.888",
            "text": "Đội Phó: Lều Hoài Nam; SĐT: 0386.181.888"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.968.300; 02033.715.651",
            "text": "Tổ trực vận hành SĐT: 02033.968.300; 02033.715.651"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Cẩm Phả:",
        "raw_title": "29.6. Cấp nước: Xí nghiệp nước Cẩm Phả:",
        "contacts": [
          {
            "raw": "- Giám đốc: Nguyễn Đức Long; SĐT: 0945.575.918",
            "text": "Giám đốc: Nguyễn Đức Long; SĐT: 0945.575.918"
          },
          {
            "raw": "- Phó giám đốc: Hạ Nguyên Anh; SĐT: 0982.511.999",
            "text": "Phó giám đốc: Hạ Nguyên Anh; SĐT: 0982.511.999"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Kim Cường; SĐT: 0912.568.487",
            "text": "Phó giám đốc: Nguyễn Kim Cường; SĐT: 0912.568.487"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Mạnh Cường; SĐT: 0976.685.626",
            "text": "Phó giám đốc: Nguyễn Mạnh Cường; SĐT: 0976.685.626"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "29.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện đa khoa khu vực Cẩm Phả; SĐT: 0913.989.826",
            "text": "Bệnh viện đa khoa khu vực Cẩm Phả; SĐT: 0913.989.826"
          },
          {
            "raw": "- Bệnh viện đa khoa Cẩm Phả; SĐT: 02033.862.245",
            "text": "Bệnh viện đa khoa Cẩm Phả; SĐT: 02033.862.245"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "29.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 30,
    "type": "PHƯỜNG",
    "name": "MÔNG DƯƠNG",
    "raw_title": "30. PHƯỜNG MÔNG DƯƠNG",
    "district": "Thành phố Cẩm Phả",
    "team": "Đội KV5",
    "components": [
      "Mông Dương",
      "Dương Huy"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "30.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Khiêm; SĐT: 0983.981.909",
            "text": "Đội trưởng: Nguyễn Văn Khiêm; SĐT: 0983.981.909"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hoàng; SĐT: 0902.252.680",
            "text": "Phó Đội trưởng: Nguyễn Hoàng; SĐT: 0902.252.680"
          },
          {
            "raw": "- Phó Đội trưởng: Trần Văn Quang Anh; SĐT: 0393.238.863",
            "text": "Phó Đội trưởng: Trần Văn Quang Anh; SĐT: 0393.238.863"
          },
          {
            "raw": "- Trực ban: 0365.969.114",
            "text": "Trực ban: 0365.969.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Mông Dương",
        "raw_title": "30.2. Công an phường Mông Dương",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Nguyễn Văn Thắng; SĐT: 0918.335.526",
            "text": "Trưởng CAP: Nguyễn Văn Thắng; SĐT: 0918.335.526"
          },
          {
            "raw": "- Phó CAP: Đặng Tiến Dũng; SĐT: 0916.520.058",
            "text": "Phó CAP: Đặng Tiến Dũng; SĐT: 0916.520.058"
          },
          {
            "raw": "- Phó CAP: Trần Ngọc Hùng; SĐT: 0973.080.999",
            "text": "Phó CAP: Trần Ngọc Hùng; SĐT: 0973.080.999"
          },
          {
            "raw": "- Phó CAP: Lê Xuân Thành; SĐT: 0912.679.899",
            "text": "Phó CAP: Lê Xuân Thành; SĐT: 0912.679.899"
          },
          {
            "raw": "- Phó CAP: Đồng Đức Định; SĐT: 0917.320.268",
            "text": "Phó CAP: Đồng Đức Định; SĐT: 0917.320.268"
          },
          {
            "raw": "- Phó CAP: Trịnh Thanh Hiền; SĐT: 0359.656.789",
            "text": "Phó CAP: Trịnh Thanh Hiền; SĐT: 0359.656.789"
          },
          {
            "raw": "- Trực ban: 02033.868.205; 02033.733.803",
            "text": "Trực ban: 02033.868.205; 02033.733.803"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Mông Dương",
        "raw_title": "30.3. Ủy ban nhân dân phường Mông Dương",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Trần Hoàng Hải; SĐT: 0912.484.324",
            "text": "Bí thư, Chủ tịch HĐND phường: Trần Hoàng Hải; SĐT: 0912.484.324"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Vũ Đình Nhân; SĐT: 0912.584.836",
            "text": "Phó Bí thư TT Đảng ủy: Vũ Đình Nhân; SĐT: 0912.584.836"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Nguyễn Như Ngọc; SĐT: 0912.855.841",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Nguyễn Như Ngọc; SĐT: 0912.855.841"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Bùi Vũ Tùng; SĐT: 0983.896.869",
            "text": "Phó Chủ tịch HĐND phường: Bùi Vũ Tùng; SĐT: 0983.896.869"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Thái Bình; SĐT: 0978.949.537",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Thái Bình; SĐT: 0978.949.537"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Mạnh Cường; SĐT: 0913.500.625",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Mạnh Cường; SĐT: 0913.500.625"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "30.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Cẩm Phả:",
        "raw_title": "30.5. Điện lực: Đội quản lý điện lực khu vực Cẩm Phả:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Nguyễn Đức Lục; SĐT: 0963.626.188",
            "text": "Q. Đội trưởng: Nguyễn Đức Lục; SĐT: 0963.626.188"
          },
          {
            "raw": "- Đội Phó: Lều Hoài Nam; SĐT: 0386.181.888",
            "text": "Đội Phó: Lều Hoài Nam; SĐT: 0386.181.888"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.968.300; 02033.715.651",
            "text": "Tổ trực vận hành SĐT: 02033.968.300; 02033.715.651"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Cẩm Phả:",
        "raw_title": "30.6. Cấp nước: Xí nghiệp nước Cẩm Phả:",
        "contacts": [
          {
            "raw": "- Giám đốc: Nguyễn Đức Long; SĐT: 0945.575.918",
            "text": "Giám đốc: Nguyễn Đức Long; SĐT: 0945.575.918"
          },
          {
            "raw": "- Phó giám đốc: Hạ Nguyên Anh; SĐT: 0982.511.999",
            "text": "Phó giám đốc: Hạ Nguyên Anh; SĐT: 0982.511.999"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Kim Cường; SĐT: 0912.568.487",
            "text": "Phó giám đốc: Nguyễn Kim Cường; SĐT: 0912.568.487"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Mạnh Cường; SĐT: 0976.685.626",
            "text": "Phó giám đốc: Nguyễn Mạnh Cường; SĐT: 0976.685.626"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "30.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện đa khoa khu vực Cẩm Phả; SĐT: 0913.989.826",
            "text": "Bệnh viện đa khoa khu vực Cẩm Phả; SĐT: 0913.989.826"
          },
          {
            "raw": "- Bệnh viện đa khoa Cẩm Phả; SĐT: 02033.862.245",
            "text": "Bệnh viện đa khoa Cẩm Phả; SĐT: 02033.862.245"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "30.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 31,
    "type": "XÃ",
    "name": "HẢI HÒA",
    "raw_title": "31. XÃ HẢI HÒA",
    "district": "Thành phố Cẩm Phả",
    "team": "Đội KV5",
    "components": [
      "Hải Hòa"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "31.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Khiêm; SĐT: 0983.981.909",
            "text": "Đội trưởng: Nguyễn Văn Khiêm; SĐT: 0983.981.909"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hoàng; SĐT: 0902.252.680",
            "text": "Phó Đội trưởng: Nguyễn Hoàng; SĐT: 0902.252.680"
          },
          {
            "raw": "- Phó Đội trưởng: Trần Văn Quang Anh; SĐT: 0393.238.863",
            "text": "Phó Đội trưởng: Trần Văn Quang Anh; SĐT: 0393.238.863"
          },
          {
            "raw": "- Trực ban: 0365.969.114",
            "text": "Trực ban: 0365.969.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Hải Hòa",
        "raw_title": "31.2. Công an xã Hải Hòa",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Nguyễn Quốc Tuấn; SĐT: 0906.128.298",
            "text": "Trưởng CAX: Nguyễn Quốc Tuấn; SĐT: 0906.128.298"
          },
          {
            "raw": "- Phó CAP: Đoàn Việt Anh; SĐT: 0888.699.922",
            "text": "Phó CAP: Đoàn Việt Anh; SĐT: 0888.699.922"
          },
          {
            "raw": "- Phó CAP: Chu Hoàng Dũng; SĐT: 0904.583.927",
            "text": "Phó CAP: Chu Hoàng Dũng; SĐT: 0904.583.927"
          },
          {
            "raw": "- Phó CAP: Nguyễn Đức Long; SĐT: 0919.760.768",
            "text": "Phó CAP: Nguyễn Đức Long; SĐT: 0919.760.768"
          },
          {
            "raw": "- Phó CAP: Nguyễn Mạnh Hùng; SĐT: 0342.526.889",
            "text": "Phó CAP: Nguyễn Mạnh Hùng; SĐT: 0342.526.889"
          },
          {
            "raw": "- Phó CAP: Khổng Văn Quang; SĐT: 0983.896.896",
            "text": "Phó CAP: Khổng Văn Quang; SĐT: 0983.896.896"
          },
          {
            "raw": "- Trực ban: 02033.901.088",
            "text": "Trực ban: 02033.901.088"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Hải Hòa",
        "raw_title": "31.3. Ủy ban nhân dân xã Hải Hòa",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Bùi Hồng Quân; SĐT: 0917.125.662",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Bùi Hồng Quân; SĐT: 0917.125.662"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Nguyễn Đình Khánh; SĐT: 0937.723.888",
            "text": "Phó Bí thư TT Đảng ủy: Nguyễn Đình Khánh; SĐT: 0937.723.888"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Đặng Quốc Toàn; SĐT: 0913.578.390",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Đặng Quốc Toàn; SĐT: 0913.578.390"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Nguyễn Hải Ninh; SĐT: 0903.203.666",
            "text": "Phó Chủ tịch HĐND xã: Nguyễn Hải Ninh; SĐT: 0903.203.666"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Bùi Hải Sơn; SĐT: 0904.540.962",
            "text": "Phó Chủ tịch UBND xã: Bùi Hải Sơn; SĐT: 0904.540.962"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Nguyễn Hồng Phúc; SĐT: 0973.477.566",
            "text": "Phó Chủ tịch UBND xã: Nguyễn Hồng Phúc; SĐT: 0973.477.566"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "31.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Cẩm Phả:",
        "raw_title": "31.5. Điện lực: Đội quản lý điện lực khu vực Cẩm Phả:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Nguyễn Đức Lục; SĐT: 0963.626.188",
            "text": "Q. Đội trưởng: Nguyễn Đức Lục; SĐT: 0963.626.188"
          },
          {
            "raw": "- Đội Phó: Lều Hoài Nam; SĐT: 0386.181.888",
            "text": "Đội Phó: Lều Hoài Nam; SĐT: 0386.181.888"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.968.300; 02033.715.651",
            "text": "Tổ trực vận hành SĐT: 02033.968.300; 02033.715.651"
          },
          {
            "raw": "- Đội quản lý điện lực khu vực Cẩm Phả, phương tiện: Lều Hoài Nam - Phó giám đốc; SĐT: 0386.181.888",
            "text": "Đội quản lý điện lực khu vực Cẩm Phả, phương tiện: Lều Hoài Nam - Phó giám đốc; SĐT: 0386.181.888"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Cẩm Phả:",
        "raw_title": "31.6. Cấp nước: Xí nghiệp nước Cẩm Phả:",
        "contacts": [
          {
            "raw": "- Giám đốc: Nguyễn Đức Long; SĐT: 0945.575.918",
            "text": "Giám đốc: Nguyễn Đức Long; SĐT: 0945.575.918"
          },
          {
            "raw": "- Phó giám đốc: Hạ Nguyên Anh; SĐT: 0982.511.999",
            "text": "Phó giám đốc: Hạ Nguyên Anh; SĐT: 0982.511.999"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Kim Cường; SĐT: 0912.568.487",
            "text": "Phó giám đốc: Nguyễn Kim Cường; SĐT: 0912.568.487"
          },
          {
            "raw": "- Phó giám đốc: Nguyễn Mạnh Cường; SĐT: 0976.685.626",
            "text": "Phó giám đốc: Nguyễn Mạnh Cường; SĐT: 0976.685.626"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "31.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Bệnh viện đa khoa khu vực Cẩm Phả; SĐT: 0913.989.826",
            "text": "Bệnh viện đa khoa khu vực Cẩm Phả; SĐT: 0913.989.826"
          },
          {
            "raw": "- Bệnh viện đa khoa Cẩm Phả; SĐT: 02033.862.245",
            "text": "Bệnh viện đa khoa Cẩm Phả; SĐT: 02033.862.245"
          },
          {
            "raw": "- Trạm Y tế xã Hải Hòa; SĐT: 0982.037.692",
            "text": "Trạm Y tế xã Hải Hòa; SĐT: 0982.037.692"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "31.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty xi măng Cẩm Phả, phương tiện: 02 xe ủi, 02 máy xúc, 01 xe chở nước, 02 xe tải; SĐT: 0965.104.666",
            "text": "Công ty xi măng Cẩm Phả, phương tiện: 02 xe ủi, 02 máy xúc, 01 xe chở nước, 02 xe tải; SĐT: 0965.104.666"
          },
          {
            "raw": "- Công TNHH Bảo Minh, phương tiện: 02 xe máy xúc; SĐT: 0904.753.468",
            "text": "Công TNHH Bảo Minh, phương tiện: 02 xe máy xúc; SĐT: 0904.753.468"
          },
          {
            "raw": "- Công ty TNHH Thái Minh, phương tiện: 01 máy xúc, 02 xe tải thùng; SĐT: 0943.553.388",
            "text": "Công ty TNHH Thái Minh, phương tiện: 01 máy xúc, 02 xe tải thùng; SĐT: 0943.553.388"
          },
          {
            "raw": "- Điệp Văn Tám, phương tiện: 01 máy xúc, 02 xe tải thùng; SĐT: 0966.826.236",
            "text": "Điệp Văn Tám, phương tiện: 01 máy xúc, 02 xe tải thùng; SĐT: 0966.826.236"
          },
          {
            "raw": "- Điệp Văn Bảo, phương tiện: 02 máy xúc; SĐT: 0904.678.528",
            "text": "Điệp Văn Bảo, phương tiện: 02 máy xúc; SĐT: 0904.678.528"
          },
          {
            "raw": "- Phạm Bá Mạnh, phương tiện: 01 máy phát điện; SĐT: 0981.726.985",
            "text": "Phạm Bá Mạnh, phương tiện: 01 máy phát điện; SĐT: 0981.726.985"
          },
          {
            "raw": "- Hà Văn Thụy, phương tiện: 01 xe tải thùng có mui; SĐT: 0337.991.895",
            "text": "Hà Văn Thụy, phương tiện: 01 xe tải thùng có mui; SĐT: 0337.991.895"
          },
          {
            "raw": "- Hà Hải Nam, phương tiện: 01 xe tải thùng có mui; SĐT: 0338.616.999",
            "text": "Hà Hải Nam, phương tiện: 01 xe tải thùng có mui; SĐT: 0338.616.999"
          },
          {
            "raw": "- Dương Văn Quang, phương tiện: 01 xe tải thùng có mui; SĐT: 0398.908.389",
            "text": "Dương Văn Quang, phương tiện: 01 xe tải thùng có mui; SĐT: 0398.908.389"
          },
          {
            "raw": "- Hà Văn Đạo, phương tiện: 02 máy cưa; SĐT: 0857.446.869",
            "text": "Hà Văn Đạo, phương tiện: 02 máy cưa; SĐT: 0857.446.869"
          },
          {
            "raw": "- Trương Văn Quảng, phương tiện: 01 máy xúc; SĐT: 0966.070.554",
            "text": "Trương Văn Quảng, phương tiện: 01 máy xúc; SĐT: 0966.070.554"
          },
          {
            "raw": "- Hà Văn Sơn, phương tiện: 03 máy cưa; SĐT: 0826.819.666",
            "text": "Hà Văn Sơn, phương tiện: 03 máy cưa; SĐT: 0826.819.666"
          },
          {
            "raw": "- Hoàng Văn Vượng, phương tiện: 03 máy cưa; SĐT: 0394.580.186",
            "text": "Hoàng Văn Vượng, phương tiện: 03 máy cưa; SĐT: 0394.580.186"
          }
        ]
      }
    ]
  },
  {
    "id": 32,
    "type": "ĐẶC KHU",
    "name": "VÂN ĐỒN",
    "raw_title": "32. ĐẶC KHU VÂN ĐỒN",
    "district": "Huyện Vân Đồn",
    "team": "Đội KV6",
    "components": [
      "Vân Đồn",
      "Cái Rồng",
      "Bản Sen",
      "Bình Dân",
      "Đài Xuyên",
      "Đoàn Kết",
      "Đông Xá",
      "Hạ Long",
      "Minh Châu",
      "Ngọc Vừng",
      "Quan Lạn",
      "Thắng Lợi",
      "Vạn Yên"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "32.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Tuấn; SĐT: 0977.659.114",
            "text": "Đội trưởng: Nguyễn Văn Tuấn; SĐT: 0977.659.114"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Huy Hùng; SĐT: 0329.203.358",
            "text": "Phó Đội trưởng: Nguyễn Huy Hùng; SĐT: 0329.203.358"
          },
          {
            "raw": "- Cán bộ: Hà Văn Thành; SĐT: 0888.029.114",
            "text": "Cán bộ: Hà Văn Thành; SĐT: 0888.029.114"
          },
          {
            "raw": "- Trực ban: 02033.874.114",
            "text": "Trực ban: 02033.874.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an đặc khu Vân Đồn",
        "raw_title": "32.2. Công an đặc khu Vân Đồn",
        "contacts": [
          {
            "raw": "- Trưởng CAĐK: Đỗ Văn Thiết; SĐT: 0972.975.558",
            "text": "Trưởng CAĐK: Đỗ Văn Thiết; SĐT: 0972.975.558"
          },
          {
            "raw": "- Trưởng CAĐK: Nguyễn Phúc Nam; SĐT: 0948.236.158",
            "text": "Trưởng CAĐK: Nguyễn Phúc Nam; SĐT: 0948.236.158"
          },
          {
            "raw": "- Phó CAP: Nguyễn Ngọc Thỏa; SĐT: 0936.689.222",
            "text": "Phó CAP: Nguyễn Ngọc Thỏa; SĐT: 0936.689.222"
          },
          {
            "raw": "- Phó CAP: Từ Hải Toàn; SĐT: 0913.355.235",
            "text": "Phó CAP: Từ Hải Toàn; SĐT: 0913.355.235"
          },
          {
            "raw": "- Phó CAP: Đào Văn Nguyện; SĐT: 0986.533.366",
            "text": "Phó CAP: Đào Văn Nguyện; SĐT: 0986.533.366"
          },
          {
            "raw": "- Phó CAP: Ngô Cô Tam; SĐT: 0905.683.898",
            "text": "Phó CAP: Ngô Cô Tam; SĐT: 0905.683.898"
          },
          {
            "raw": "- Trực ban: 02033.874.355",
            "text": "Trực ban: 02033.874.355"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân đặc khu Vân Đồn",
        "raw_title": "32.3. Ủy ban nhân dân đặc khu Vân Đồn",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND: Cao Tường Huy; SĐT: 0904.023.568",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND: Cao Tường Huy; SĐT: 0904.023.568"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Tô Văn Hải; SĐT: 0912.090.648",
            "text": "Phó Bí thư TT Đảng ủy: Tô Văn Hải; SĐT: 0912.090.648"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND đặc khu: Vũ Đức Hưởng; SĐT: 0918.151.999",
            "text": "Phó Bí thư, Chủ tịch UBND đặc khu: Vũ Đức Hưởng; SĐT: 0918.151.999"
          },
          {
            "raw": "- Phó Chủ tịch HĐND đặc khu: Trương Thị Thúy Huyền; SĐT: 0915.569.515",
            "text": "Phó Chủ tịch HĐND đặc khu: Trương Thị Thúy Huyền; SĐT: 0915.569.515"
          },
          {
            "raw": "- Phó Chủ tịch UBND đặc khu: Đào Văn Vũ; SĐT: 0942.037.666",
            "text": "Phó Chủ tịch UBND đặc khu: Đào Văn Vũ; SĐT: 0942.037.666"
          },
          {
            "raw": "- Phó Chủ tịch UBND đặc khu: Nguyễn Sinh Lượng; SĐT: 0982.725.689",
            "text": "Phó Chủ tịch UBND đặc khu: Nguyễn Sinh Lượng; SĐT: 0982.725.689"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "32.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888",
            "text": "Phó trưởng phòng PC08: Nguyễn Việt Dũng; SĐT: 0388.838.888"
          },
          {
            "raw": "- Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906",
            "text": "Đội CSGT ĐB số 2: Đội trưởng: Đào Công Hiểu; SĐT: 0912.427.906"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Vân Đồn:",
        "raw_title": "32.5. Điện lực: Đội quản lý điện lực khu vực Vân Đồn:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Đỗ Đức Anh; SĐT: 0973.964.688",
            "text": "Đội trưởng: Đỗ Đức Anh; SĐT: 0973.964.688"
          },
          {
            "raw": "- Đội Phó: Dương Thanh Bình; SĐT: 0962.222.266",
            "text": "Đội Phó: Dương Thanh Bình; SĐT: 0962.222.266"
          },
          {
            "raw": "- Đội Phó phụ trách khu vực Đặc khu Cô Tô: Nguyễn Minh Tuấn; SĐT: 0904.986.509",
            "text": "Đội Phó phụ trách khu vực Đặc khu Cô Tô: Nguyễn Minh Tuấn; SĐT: 0904.986.509"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.793.827",
            "text": "Tổ trực vận hành SĐT: 02033.793.827"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Vân Đồn:",
        "raw_title": "32.6. Cấp nước: Xí nghiệp nước Vân Đồn:",
        "contacts": [
          {
            "raw": "- Giám đốc: Đào Ngọc Minh; SĐT: 0912.080.559",
            "text": "Giám đốc: Đào Ngọc Minh; SĐT: 0912.080.559"
          },
          {
            "raw": "- Phó giám đốc: Phạm Công Khánh; SĐT: 0913.040.981",
            "text": "Phó giám đốc: Phạm Công Khánh; SĐT: 0913.040.981"
          },
          {
            "raw": "- Phó giám đốc: Trần Văn Minh; SĐT: 0902.263.888",
            "text": "Phó giám đốc: Trần Văn Minh; SĐT: 0902.263.888"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "32.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Vân Đồn; SĐT: 0886.891.685",
            "text": "Trung tâm y tế huyện Vân Đồn; SĐT: 0886.891.685"
          },
          {
            "raw": "- Bệnh viện đa khoa khu vực Vân Đồn; SĐT: 0981.191.199",
            "text": "Bệnh viện đa khoa khu vực Vân Đồn; SĐT: 0981.191.199"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "32.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Phạm Thế Đoàn, phương tiện: 01 Máy xúc; SĐT: 0977.898.159",
            "text": "Phạm Thế Đoàn, phương tiện: 01 Máy xúc; SĐT: 0977.898.159"
          },
          {
            "raw": "- Mộc Văn Phu, phương tiện: 01 Máy xúc; SĐT: 0372.364.188",
            "text": "Mộc Văn Phu, phương tiện: 01 Máy xúc; SĐT: 0372.364.188"
          },
          {
            "raw": "- Đặng Văn Đức, phương tiện: 01 Máy xúc; SĐT: 0984.387.835",
            "text": "Đặng Văn Đức, phương tiện: 01 Máy xúc; SĐT: 0984.387.835"
          },
          {
            "raw": "- Trần Danh Đại, phương tiện: 01 Máy xúc; SĐT: 0981.969.282",
            "text": "Trần Danh Đại, phương tiện: 01 Máy xúc; SĐT: 0981.969.282"
          },
          {
            "raw": "- Phạm Văn Cương, phương tiện: 01 Máy đào; SĐT: 0362.795.473",
            "text": "Phạm Văn Cương, phương tiện: 01 Máy đào; SĐT: 0362.795.473"
          },
          {
            "raw": "- Phạm Văn Cương, phương tiện: 01 Máy xích Volvo; SĐT: 0362.795.473",
            "text": "Phạm Văn Cương, phương tiện: 01 Máy xích Volvo; SĐT: 0362.795.473"
          },
          {
            "raw": "- Lê Hồng Thái, phương tiện: 01 Máy xúc; SĐT: 0982.877.371",
            "text": "Lê Hồng Thái, phương tiện: 01 Máy xúc; SĐT: 0982.877.371"
          },
          {
            "raw": "- Nguyễn Thành Hưng, phương tiện: 01 Máy xúc; SĐT: 0967.616.286",
            "text": "Nguyễn Thành Hưng, phương tiện: 01 Máy xúc; SĐT: 0967.616.286"
          },
          {
            "raw": "- HTX Gia Bảo, phương tiện: 01 Xe Cẩu; SĐT: 0707.915.666",
            "text": "HTX Gia Bảo, phương tiện: 01 Xe Cẩu; SĐT: 0707.915.666"
          },
          {
            "raw": "- Từ Văn Hồng, phương tiện: 01 Máy đào bánh lốp; SĐT: 0377.544.558",
            "text": "Từ Văn Hồng, phương tiện: 01 Máy đào bánh lốp; SĐT: 0377.544.558"
          },
          {
            "raw": "- Từ Văn Tĩnh, phương tiện: 01 Máy đào bánh lốp; SĐT: 0978.123.611",
            "text": "Từ Văn Tĩnh, phương tiện: 01 Máy đào bánh lốp; SĐT: 0978.123.611"
          },
          {
            "raw": "- Vũ Công Hoan, phương tiện: 01 Máy đào bánh lốp; SĐT: 0984.532.592",
            "text": "Vũ Công Hoan, phương tiện: 01 Máy đào bánh lốp; SĐT: 0984.532.592"
          },
          {
            "raw": "- Công ty cổ phần đầu tư xây dựng đô thị Phương Đông, phương tiện: 02 Xe chở nước 30m3/xe, 01 xe có lăng phun; SĐT: 02033.993.899",
            "text": "Công ty cổ phần đầu tư xây dựng đô thị Phương Đông, phương tiện: 02 Xe chở nước 30m3/xe, 01 xe có lăng phun; SĐT: 02033.993.899"
          },
          {
            "raw": "- Công ty TNHH dịch vụ thương mại Đức Thao, phương tiện: 01 Xe chở nước 18m3; SĐT: 0962.116.888",
            "text": "Công ty TNHH dịch vụ thương mại Đức Thao, phương tiện: 01 Xe chở nước 18m3; SĐT: 0962.116.888"
          },
          {
            "raw": "- Công ty TNHH thương mại Hoa Phong, phương tiện: 02 xe chở nước, 15m3/xe; SĐT: 0936.794.666",
            "text": "Công ty TNHH thương mại Hoa Phong, phương tiện: 02 xe chở nước, 15m3/xe; SĐT: 0936.794.666"
          },
          {
            "raw": "- Hợp tác xã Gia Bảo, phương tiện: 02 Xe chở nước (01 xe 9m3 và 01 xe 14m3); SĐT: 0977.009.333",
            "text": "Hợp tác xã Gia Bảo, phương tiện: 02 Xe chở nước (01 xe 9m3 và 01 xe 14m3); SĐT: 0977.009.333"
          },
          {
            "raw": "- Công ty cổ phần đầu tư và xây dựng du lịch thương mại Thẩm Gia, phương tiện: 01 Xe chở nước 18m3; SĐT: 0936.616.536",
            "text": "Công ty cổ phần đầu tư và xây dựng du lịch thương mại Thẩm Gia, phương tiện: 01 Xe chở nước 18m3; SĐT: 0936.616.536"
          }
        ]
      }
    ]
  },
  {
    "id": 33,
    "type": "ĐẶC KHU",
    "name": "CÔ TÔ",
    "raw_title": "33. ĐẶC KHU CÔ TÔ",
    "district": "Huyện Cô Tô",
    "team": "Đội KV10",
    "components": [
      "Cô Tô",
      "Đồng Tiến",
      "Thanh Lân"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "33.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Văn Nhân; SĐT: 0969.212.688",
            "text": "Đội trưởng: Nguyễn Văn Nhân; SĐT: 0969.212.688"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hải Sơn Đông; SĐT: 0354.654.666",
            "text": "Phó Đội trưởng: Nguyễn Hải Sơn Đông; SĐT: 0354.654.666"
          },
          {
            "raw": "- Cán bộ: Nguyễn Văn Thủy; SĐT: 0967.672.368",
            "text": "Cán bộ: Nguyễn Văn Thủy; SĐT: 0967.672.368"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an đặc khu Cô Tô",
        "raw_title": "33.2. Công an đặc khu Cô Tô",
        "contacts": [
          {
            "raw": "- Trưởng CAĐK: Nguyễn Triều Hưng; SĐT: 0913.261.328",
            "text": "Trưởng CAĐK: Nguyễn Triều Hưng; SĐT: 0913.261.328"
          },
          {
            "raw": "- Phó CAĐK: Bùi Trung Kiên; SĐT: 0913.121.038",
            "text": "Phó CAĐK: Bùi Trung Kiên; SĐT: 0913.121.038"
          },
          {
            "raw": "- Phó CAĐK: Nguyễn Đức Trung; SĐT: 0966.632.326",
            "text": "Phó CAĐK: Nguyễn Đức Trung; SĐT: 0966.632.326"
          },
          {
            "raw": "- Phó CAĐK: Nguyễn Kim Hùng; SĐT: 0945.356.181",
            "text": "Phó CAĐK: Nguyễn Kim Hùng; SĐT: 0945.356.181"
          },
          {
            "raw": "- Phó CAĐK: Nguyễn Quang Huy; SĐT: 0918.995.212",
            "text": "Phó CAĐK: Nguyễn Quang Huy; SĐT: 0918.995.212"
          },
          {
            "raw": "- Phó CAĐK: Phạm Hải Hùng; SĐT: 0388.571.817",
            "text": "Phó CAĐK: Phạm Hải Hùng; SĐT: 0388.571.817"
          },
          {
            "raw": "- Trực ban: 2033.794.020",
            "text": "Trực ban: 2033.794.020"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân đặc khu Cô Tô",
        "raw_title": "33.3. Ủy ban nhân dân đặc khu Cô Tô",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND: Lê Ngọc Hân; SĐT: 0913.394.689",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND: Lê Ngọc Hân; SĐT: 0913.394.689"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Vũ Văn Khương; SĐT: 0988.464.585",
            "text": "Phó Bí thư TT Đảng ủy: Vũ Văn Khương; SĐT: 0988.464.585"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND đặc khu: Nguyễn Danh Hà; SĐT: 0934.281.636",
            "text": "Phó Bí thư, Chủ tịch UBND đặc khu: Nguyễn Danh Hà; SĐT: 0934.281.636"
          },
          {
            "raw": "- Phó Chủ tịch HĐND đặc khu: Nguyễn Duy Phong; SĐT: 0917.531.016",
            "text": "Phó Chủ tịch HĐND đặc khu: Nguyễn Duy Phong; SĐT: 0917.531.016"
          },
          {
            "raw": "- Phó Chủ tịch UBND đặc khu: Đỗ Huy Thông; SĐT: 0912.090.099",
            "text": "Phó Chủ tịch UBND đặc khu: Đỗ Huy Thông; SĐT: 0912.090.099"
          },
          {
            "raw": "- Phó Chủ tịch UBND đặc khu: Đinh Đức Minh; SĐT: 0912.874.288",
            "text": "Phó Chủ tịch UBND đặc khu: Đinh Đức Minh; SĐT: 0912.874.288"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "33.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": []
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Vân Đồn:",
        "raw_title": "33.5. Điện lực: Đội quản lý điện lực khu vực Vân Đồn:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Đỗ Đức Anh; SĐT: 0973.964.688",
            "text": "Đội trưởng: Đỗ Đức Anh; SĐT: 0973.964.688"
          },
          {
            "raw": "- Đội Phó: Dương Thanh Bình; SĐT: 0962.222.266",
            "text": "Đội Phó: Dương Thanh Bình; SĐT: 0962.222.266"
          },
          {
            "raw": "- Đội Phó phụ trách khu vực Đặc khu Cô Tô: Nguyễn Minh Tuấn; SĐT: 0904.986.509",
            "text": "Đội Phó phụ trách khu vực Đặc khu Cô Tô: Nguyễn Minh Tuấn; SĐT: 0904.986.509"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.793.827",
            "text": "Tổ trực vận hành SĐT: 02033.793.827"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Không có thông tin:",
        "raw_title": "33.6. Cấp nước: Không có thông tin:",
        "contacts": []
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "33.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Cô Tô; SĐT: 0869.355.386",
            "text": "Trung tâm y tế huyện Cô Tô; SĐT: 0869.355.386"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "33.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 34,
    "type": "XÃ",
    "name": "BA CHẼ",
    "raw_title": "34. XÃ BA CHẼ",
    "district": "Huyện Ba Chẽ",
    "team": "Đội KV7",
    "components": [
      "Ba Chẽ",
      "Thanh Sơn",
      "Nam Sơn",
      "Đồn Đạc",
      "Hải Lạng"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "34.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218",
            "text": "Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888",
            "text": "Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888"
          },
          {
            "raw": "- Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666",
            "text": "Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666"
          },
          {
            "raw": "- Trực ban: 02033.876.114",
            "text": "Trực ban: 02033.876.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Ba Chẽ",
        "raw_title": "34.2. Công an xã Ba Chẽ",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Phạm Thanh Hải; SĐT: 0967.163.892",
            "text": "Trưởng CAX: Phạm Thanh Hải; SĐT: 0967.163.892"
          },
          {
            "raw": "- Phó CAP: Nguyễn Văn Sự; SĐT: 0988.935.679",
            "text": "Phó CAP: Nguyễn Văn Sự; SĐT: 0988.935.679"
          },
          {
            "raw": "- Phó CAP: Lộc Vân Hưng; SĐT: 0387.188.889",
            "text": "Phó CAP: Lộc Vân Hưng; SĐT: 0387.188.889"
          },
          {
            "raw": "- Phó CAP: Trần Trung Thành; SĐT: 0982.215.812",
            "text": "Phó CAP: Trần Trung Thành; SĐT: 0982.215.812"
          },
          {
            "raw": "- Phó CAP: Hồ Xuân Hùng; SĐT: 0979.388.108",
            "text": "Phó CAP: Hồ Xuân Hùng; SĐT: 0979.388.108"
          },
          {
            "raw": "- Phó CAP: Lương Việt Bắc; SĐT: 0388.090.277",
            "text": "Phó CAP: Lương Việt Bắc; SĐT: 0388.090.277"
          },
          {
            "raw": "- Trực ban: 02033.888.263",
            "text": "Trực ban: 02033.888.263"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Ba Chẽ",
        "raw_title": "34.3. Ủy ban nhân dân xã Ba Chẽ",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Bùi Văn Lưu; SĐT: 0949.928.668",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Bùi Văn Lưu; SĐT: 0949.928.668"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Linh Thị Xuân; SĐT: 0912.471.209",
            "text": "Phó Bí thư TT Đảng ủy: Linh Thị Xuân; SĐT: 0912.471.209"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Vi Thanh Vinh; SĐT: 0912.458.427",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Vi Thanh Vinh; SĐT: 0912.458.427"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Đồng Nguyên Khánh; SĐT: 0913.004.676",
            "text": "Phó Chủ tịch HĐND xã: Đồng Nguyên Khánh; SĐT: 0913.004.676"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Nguyễn Thị Thúy Mai; SĐT: 0974.508.228",
            "text": "Phó Chủ tịch UBND xã: Nguyễn Thị Thúy Mai; SĐT: 0974.508.228"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Hoàng Thị Oanh; SĐT: 0912.900.109",
            "text": "Phó Chủ tịch UBND xã: Hoàng Thị Oanh; SĐT: 0912.900.109"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "34.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Ba Chẽ:",
        "raw_title": "34.5. Điện lực: Đội quản lý điện lực khu vực Ba Chẽ:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Ngô Tuấn Hưng; SĐT: 0968.225.588",
            "text": "Q. Đội trưởng: Ngô Tuấn Hưng; SĐT: 0968.225.588"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.888.631",
            "text": "Tổ trực vận hành SĐT: 02033.888.631"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Miền Đông:",
        "raw_title": "34.6. Cấp nước: Xí nghiệp nước Miền Đông:",
        "contacts": [
          {
            "raw": "- Giám đốc: Đào Xuân Chiến; SĐT: 0936.394.559",
            "text": "Giám đốc: Đào Xuân Chiến; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Vương Đức Chính; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Vương Đức Chính; SĐT: 0936.394.559"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "34.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Ba Chẽ; SĐT: 02033.503.030",
            "text": "Trung tâm y tế huyện Ba Chẽ; SĐT: 02033.503.030"
          },
          {
            "raw": "- Bệnh viện đa khoa khu vực Tiên Yên (cơ sở 2 Ba Chẽ); SĐT: 0915.049.280",
            "text": "Bệnh viện đa khoa khu vực Tiên Yên (cơ sở 2 Ba Chẽ); SĐT: 0915.049.280"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "34.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty cổ phần Trường sơn 36, phương tiện: 02 máy xúc lật; SĐT: 0905.868.689",
            "text": "Công ty cổ phần Trường sơn 36, phương tiện: 02 máy xúc lật; SĐT: 0905.868.689"
          },
          {
            "raw": "- Công ty TNHH MTV Lâm nghiệp Ba Chẽ, phương tiện: 01 máy xúc lật; SĐT: 0333.888.221",
            "text": "Công ty TNHH MTV Lâm nghiệp Ba Chẽ, phương tiện: 01 máy xúc lật; SĐT: 0333.888.221"
          },
          {
            "raw": "- Công ty cổ phần Chế biến Lâm sản Ba Chẽ Quảng Ninh, phương tiện: 01 máy cẩu; SĐT: 0985.227.888",
            "text": "Công ty cổ phần Chế biến Lâm sản Ba Chẽ Quảng Ninh, phương tiện: 01 máy cẩu; SĐT: 0985.227.888"
          },
          {
            "raw": "- Công ty TNHH Hoành Dương, phương tiện: 01 máy cẩu; SĐT: 0979.061.226",
            "text": "Công ty TNHH Hoành Dương, phương tiện: 01 máy cẩu; SĐT: 0979.061.226"
          },
          {
            "raw": "- Đinh Văn Hương, phương tiện: 01 Máy xúc; SĐT: 0988.768.308",
            "text": "Đinh Văn Hương, phương tiện: 01 Máy xúc; SĐT: 0988.768.308"
          },
          {
            "raw": "- Nguyễn Thành Trung, phương tiện: 01 Máy xúc; SĐT: 0971.181.976",
            "text": "Nguyễn Thành Trung, phương tiện: 01 Máy xúc; SĐT: 0971.181.976"
          },
          {
            "raw": "- Tô Văn Hiên, phương tiện: 01 Máy xúc; SĐT: 0966.126.991",
            "text": "Tô Văn Hiên, phương tiện: 01 Máy xúc; SĐT: 0966.126.991"
          },
          {
            "raw": "- Nguyễn Trường Giang, phương tiện: 01 Máy xúc; SĐT: 0386.405.886",
            "text": "Nguyễn Trường Giang, phương tiện: 01 Máy xúc; SĐT: 0386.405.886"
          },
          {
            "raw": "- Chương Văn Liên, phương tiện: 01 Máy xúc 14L-2018; SĐT: 0343.101.999",
            "text": "Chương Văn Liên, phương tiện: 01 Máy xúc 14L-2018; SĐT: 0343.101.999"
          },
          {
            "raw": "- Lương Xuân Trung, phương tiện: 01 máy xúc; SĐT: 0353.298.899",
            "text": "Lương Xuân Trung, phương tiện: 01 máy xúc; SĐT: 0353.298.899"
          }
        ]
      }
    ]
  },
  {
    "id": 35,
    "type": "XÃ",
    "name": "LƯƠNG MINH",
    "raw_title": "35. XÃ LƯƠNG MINH",
    "district": "Huyện Ba Chẽ",
    "team": "Đội KV7",
    "components": [
      "Lương Minh",
      "Đồng Sơn"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "35.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218",
            "text": "Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888",
            "text": "Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888"
          },
          {
            "raw": "- Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666",
            "text": "Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666"
          },
          {
            "raw": "- Trực ban: 02033.876.114",
            "text": "Trực ban: 02033.876.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Lương Minh",
        "raw_title": "35.2. Công an xã Lương Minh",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Lê Huy Duy; SĐT: 0983.018.987",
            "text": "Trưởng CAX: Lê Huy Duy; SĐT: 0983.018.987"
          },
          {
            "raw": "- Phó CAP: Vi Thành Công; SĐT: 0335.881.866",
            "text": "Phó CAP: Vi Thành Công; SĐT: 0335.881.866"
          },
          {
            "raw": "- Phó CAP: Đặng Văn Tiến; SĐT: 0383.749.573",
            "text": "Phó CAP: Đặng Văn Tiến; SĐT: 0383.749.573"
          },
          {
            "raw": "- Phó CAP: Vi Văn Thái; SĐT: 0915.049.039",
            "text": "Phó CAP: Vi Văn Thái; SĐT: 0915.049.039"
          },
          {
            "raw": "- Phó CAP: Hà Danh Nam; SĐT: 0842.866.688",
            "text": "Phó CAP: Hà Danh Nam; SĐT: 0842.866.688"
          },
          {
            "raw": "- Phó CAP: Lê Thành Long; SĐT: 0988.862.929",
            "text": "Phó CAP: Lê Thành Long; SĐT: 0988.862.929"
          },
          {
            "raw": "- Trực ban: 02033.901.006; 02033.901.115",
            "text": "Trực ban: 02033.901.006; 02033.901.115"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Lương Minh",
        "raw_title": "35.3. Ủy ban nhân dân xã Lương Minh",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Nịnh Quốc Hoàn; SĐT: 0946.534.686",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Nịnh Quốc Hoàn; SĐT: 0946.534.686"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Lưu Minh Thắng; SĐT: 0916.855.423",
            "text": "Phó Bí thư TT Đảng ủy: Lưu Minh Thắng; SĐT: 0916.855.423"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Trần Văn Dũng; SĐT: 0945.095.165",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Trần Văn Dũng; SĐT: 0945.095.165"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Bàn Văn Ba; SĐT: 0399.008.322",
            "text": "Phó Chủ tịch HĐND xã: Bàn Văn Ba; SĐT: 0399.008.322"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Nguyễn Tiến Trường; SĐT: 0914.664.684",
            "text": "Phó Chủ tịch UBND xã: Nguyễn Tiến Trường; SĐT: 0914.664.684"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Hà Ngọc Tùng; SĐT: 0914.664.616",
            "text": "Phó Chủ tịch UBND xã: Hà Ngọc Tùng; SĐT: 0914.664.616"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "35.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Ba Chẽ:",
        "raw_title": "35.5. Điện lực: Đội quản lý điện lực khu vực Ba Chẽ:",
        "contacts": [
          {
            "raw": "- Q. Đội trưởng: Ngô Tuấn Hưng; SĐT: 0968.225.588",
            "text": "Q. Đội trưởng: Ngô Tuấn Hưng; SĐT: 0968.225.588"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.888.631",
            "text": "Tổ trực vận hành SĐT: 02033.888.631"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Không có thông tin:",
        "raw_title": "35.6. Cấp nước: Không có thông tin:",
        "contacts": []
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "35.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Ba Chẽ; SĐT: 02033.503.030",
            "text": "Trung tâm y tế huyện Ba Chẽ; SĐT: 02033.503.030"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "35.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 36,
    "type": "XÃ",
    "name": "LỤC HỒN",
    "raw_title": "36. XÃ LỤC HỒN",
    "district": "Huyện Ba Chẽ",
    "team": "Đội KV7",
    "components": [
      "Lục Hồn",
      "Đồng Tâm"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "36.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218",
            "text": "Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888",
            "text": "Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888"
          },
          {
            "raw": "- Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666",
            "text": "Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666"
          },
          {
            "raw": "- Trực ban: 02033.876.114",
            "text": "Trực ban: 02033.876.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Lục Hồn",
        "raw_title": "36.2. Công an xã Lục Hồn",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Hoàng Văn Phúc; SĐT: 0965.591.678",
            "text": "Trưởng CAX: Hoàng Văn Phúc; SĐT: 0965.591.678"
          },
          {
            "raw": "- Phó CAP: Nguyễn Quang Hưng; SĐT: 0969.564.578",
            "text": "Phó CAP: Nguyễn Quang Hưng; SĐT: 0969.564.578"
          },
          {
            "raw": "- Phó CAP: Loan Thanh Bình; SĐT: 0388.889.958",
            "text": "Phó CAP: Loan Thanh Bình; SĐT: 0388.889.958"
          },
          {
            "raw": "- Phó CAP: Lý Thanh Đông; SĐT: 0365.018.688",
            "text": "Phó CAP: Lý Thanh Đông; SĐT: 0365.018.688"
          },
          {
            "raw": "- Phó CAP: La Minh Tâm; SĐT: 0913.369.218",
            "text": "Phó CAP: La Minh Tâm; SĐT: 0913.369.218"
          },
          {
            "raw": "- Phó CAP: Hoàng Mạnh Trường; SĐT: 0387.903.483",
            "text": "Phó CAP: Hoàng Mạnh Trường; SĐT: 0387.903.483"
          },
          {
            "raw": "- Trực ban: 02033.756.321",
            "text": "Trực ban: 02033.756.321"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Lục Hồn",
        "raw_title": "36.3. Ủy ban nhân dân xã Lục Hồn",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Đỗ Xuân Trường; SĐT: 0913.065.956",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Đỗ Xuân Trường; SĐT: 0913.065.956"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Lương Thị Nghệ; SĐT: 0948.965.698",
            "text": "Phó Bí thư TT Đảng ủy: Lương Thị Nghệ; SĐT: 0948.965.698"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Vi Tiến Vượng; SĐT: 0944.181.666",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Vi Tiến Vượng; SĐT: 0944.181.666"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Hoàng Thị Kiên; SĐT: 0974.409.181",
            "text": "Phó Chủ tịch HĐND xã: Hoàng Thị Kiên; SĐT: 0974.409.181"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Hoàng Thị Vinh; SĐT: 0856.951.606",
            "text": "Phó Chủ tịch UBND xã: Hoàng Thị Vinh; SĐT: 0856.951.606"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Ngô Văn Mậu; SĐT: 0982.741.098",
            "text": "Phó Chủ tịch UBND xã: Ngô Văn Mậu; SĐT: 0982.741.098"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "36.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Bình Liêu:",
        "raw_title": "36.5. Điện lực: Đội quản lý điện lực khu vực Bình Liêu:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Trương Tuấn Thành; SĐT: 0989.949.289",
            "text": "Đội trưởng: Trương Tuấn Thành; SĐT: 0989.949.289"
          },
          {
            "raw": "- Đội Phó: Phùng Văn Thuấn; SĐT: 0938.839.986",
            "text": "Đội Phó: Phùng Văn Thuấn; SĐT: 0938.839.986"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.751.668; 02032.214.687",
            "text": "Tổ trực vận hành SĐT: 02033.751.668; 02032.214.687"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Không có thông tin:",
        "raw_title": "36.6. Cấp nước: Không có thông tin:",
        "contacts": []
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "36.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Bình Liêu; SĐT: 02033.878.244",
            "text": "Trung tâm y tế huyện Bình Liêu; SĐT: 02033.878.244"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "36.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 37,
    "type": "XÃ",
    "name": "BÌNH LIÊU",
    "raw_title": "37. XÃ BÌNH LIÊU",
    "district": "Huyện Bình Liêu",
    "team": "Đội KV7",
    "components": [
      "Bình Liêu",
      "Húc Động",
      "Vô Ngại"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "37.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218",
            "text": "Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888",
            "text": "Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888"
          },
          {
            "raw": "- Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666",
            "text": "Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666"
          },
          {
            "raw": "- Trực ban: 02033.876.114",
            "text": "Trực ban: 02033.876.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Bình Liêu",
        "raw_title": "37.2. Công an xã Bình Liêu",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Nguyễn Ngọc Hải; SĐT: 0902.178.868",
            "text": "Trưởng CAX: Nguyễn Ngọc Hải; SĐT: 0902.178.868"
          },
          {
            "raw": "- Phó CAP: Phan Tiến Chung; SĐT: 0888.020.399",
            "text": "Phó CAP: Phan Tiến Chung; SĐT: 0888.020.399"
          },
          {
            "raw": "- Phó CAP: Hoàng Quang Nhất; SĐT: 0388.206.789",
            "text": "Phó CAP: Hoàng Quang Nhất; SĐT: 0388.206.789"
          },
          {
            "raw": "- Phó CAP: Vi Thanh Tuan; SĐT: 0914.419.866",
            "text": "Phó CAP: Vi Thanh Tuan; SĐT: 0914.419.866"
          },
          {
            "raw": "- Phó CAP: Hoàng Minh Cảnh; SĐT: 0888.001.984",
            "text": "Phó CAP: Hoàng Minh Cảnh; SĐT: 0888.001.984"
          },
          {
            "raw": "- Phó CAP: Nguyễn Thị Hoàng Phượng; SĐT: 0987.199.666",
            "text": "Phó CAP: Nguyễn Thị Hoàng Phượng; SĐT: 0987.199.666"
          },
          {
            "raw": "- Trực ban: 02033.878.212",
            "text": "Trực ban: 02033.878.212"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Bình Liêu",
        "raw_title": "37.3. Ủy ban nhân dân xã Bình Liêu",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy xã: Nguyễn Thế Minh; SĐT: 0904.430.989",
            "text": "Bí thư Đảng ủy xã: Nguyễn Thế Minh; SĐT: 0904.430.989"
          },
          {
            "raw": "- Phó Bí thư TT, Chủ tịch UBND xã: Mạc Ngọc Điệp; SĐT: 0346.065.686",
            "text": "Phó Bí thư TT, Chủ tịch UBND xã: Mạc Ngọc Điệp; SĐT: 0346.065.686"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Đặng Thu Phương; SĐT: 0912.791.532",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Đặng Thu Phương; SĐT: 0912.791.532"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Hoàng Thị Nghị; SĐT: 0915.354.000",
            "text": "Phó Chủ tịch HĐND xã: Hoàng Thị Nghị; SĐT: 0915.354.000"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Hoàng Đức Thanh; SĐT: 0912.370.580",
            "text": "Phó Chủ tịch UBND xã: Hoàng Đức Thanh; SĐT: 0912.370.580"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Hoàng Huy Trọng; SĐT: 0915.771.566",
            "text": "Phó Chủ tịch UBND xã: Hoàng Huy Trọng; SĐT: 0915.771.566"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "37.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Bình Liêu:",
        "raw_title": "37.5. Điện lực: Đội quản lý điện lực khu vực Bình Liêu:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Trương Tuấn Thành; SĐT: 0989.949.289",
            "text": "Đội trưởng: Trương Tuấn Thành; SĐT: 0989.949.289"
          },
          {
            "raw": "- Đội Phó: Phùng Văn Thuấn; SĐT: 0938.839.986",
            "text": "Đội Phó: Phùng Văn Thuấn; SĐT: 0938.839.986"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.751.668; 02032.214.687",
            "text": "Tổ trực vận hành SĐT: 02033.751.668; 02032.214.687"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Không có thông tin:",
        "raw_title": "37.6. Cấp nước: Không có thông tin:",
        "contacts": []
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "37.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Bình Liêu; SĐT: 02033.878.244",
            "text": "Trung tâm y tế huyện Bình Liêu; SĐT: 02033.878.244"
          }
        ]
      }
    ]
  },
  {
    "id": 38,
    "type": "XÃ",
    "name": "HOÀNH MÔ",
    "raw_title": "38. XÃ HOÀNH MÔ",
    "district": "Huyện Bình Liêu",
    "team": "Đội KV7",
    "components": [
      "Hoành Mô",
      "Đồng Văn"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "38.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218",
            "text": "Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888",
            "text": "Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888"
          },
          {
            "raw": "- Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666",
            "text": "Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666"
          },
          {
            "raw": "- Trực ban: 02033.876.114",
            "text": "Trực ban: 02033.876.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Hoành Mô",
        "raw_title": "38.2. Công an xã Hoành Mô",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Lý Đức Hoàn; SĐT: 0915.627.866",
            "text": "Trưởng CAX: Lý Đức Hoàn; SĐT: 0915.627.866"
          },
          {
            "raw": "- Phó CAP: Vũ Trọng Đức; SĐT: 0986.089.399",
            "text": "Phó CAP: Vũ Trọng Đức; SĐT: 0986.089.399"
          },
          {
            "raw": "- Phó CAP: Vì Xuân Trường; SĐT: 0912.372.998",
            "text": "Phó CAP: Vì Xuân Trường; SĐT: 0912.372.998"
          },
          {
            "raw": "- Phó CAP: Nguyễn Mạnh Hải; SĐT: 0912.977.817",
            "text": "Phó CAP: Nguyễn Mạnh Hải; SĐT: 0912.977.817"
          },
          {
            "raw": "- Phó CAP: Đỉnh Hồng Lâm; SĐT: 0936.622.269",
            "text": "Phó CAP: Đỉnh Hồng Lâm; SĐT: 0936.622.269"
          },
          {
            "raw": "- Phó CAP: Lý Văn Tân; SĐT: 0916.083.883",
            "text": "Phó CAP: Lý Văn Tân; SĐT: 0916.083.883"
          },
          {
            "raw": "- Trực ban: 02033.757.766",
            "text": "Trực ban: 02033.757.766"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Hoành Mô",
        "raw_title": "38.3. Ủy ban nhân dân xã Hoành Mô",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy xã: Phạm Đức Thắng; SĐT: 0913.370.555",
            "text": "Bí thư Đảng ủy xã: Phạm Đức Thắng; SĐT: 0913.370.555"
          },
          {
            "raw": "- Phó Bí thư TT, Chủ tịch HĐND xã: Dương Ngọc Khoa; SĐT: 0965.981.331",
            "text": "Phó Bí thư TT, Chủ tịch HĐND xã: Dương Ngọc Khoa; SĐT: 0965.981.331"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Giáp Văn Ngôn; SĐT: 0326.116.688",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Giáp Văn Ngôn; SĐT: 0326.116.688"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Triệu Đình Sinh; SĐT: 0948.965.589",
            "text": "Phó Chủ tịch HĐND xã: Triệu Đình Sinh; SĐT: 0948.965.589"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Hoàng Kiên Trung; SĐT: 0915.745.988",
            "text": "Phó Chủ tịch UBND xã: Hoàng Kiên Trung; SĐT: 0915.745.988"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: La Ngọc Dương; SĐT: 0979.253.419",
            "text": "Phó Chủ tịch UBND xã: La Ngọc Dương; SĐT: 0979.253.419"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "38.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Bình Liêu:",
        "raw_title": "38.5. Điện lực: Đội quản lý điện lực khu vực Bình Liêu:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Trương Tuấn Thành; SĐT: 0989.949.289",
            "text": "Đội trưởng: Trương Tuấn Thành; SĐT: 0989.949.289"
          },
          {
            "raw": "- Đội Phó: Phùng Văn Thuấn; SĐT: 0938.839.986",
            "text": "Đội Phó: Phùng Văn Thuấn; SĐT: 0938.839.986"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.751.668; 02032.214.687",
            "text": "Tổ trực vận hành SĐT: 02033.751.668; 02032.214.687"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Không có thông tin:",
        "raw_title": "38.6. Cấp nước: Không có thông tin:",
        "contacts": []
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "38.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Bình Liêu; SĐT: 02033.878.244",
            "text": "Trung tâm y tế huyện Bình Liêu; SĐT: 02033.878.244"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "38.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 39,
    "type": "XÃ",
    "name": "TIÊN YÊN",
    "raw_title": "39. XÃ TIÊN YÊN",
    "district": "Huyện Tiên Yên",
    "team": "Đội KV7",
    "components": [
      "Tiên Yên",
      "Phong Dụ",
      "Tiên Lãng"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "39.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218",
            "text": "Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888",
            "text": "Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888"
          },
          {
            "raw": "- Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666",
            "text": "Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666"
          },
          {
            "raw": "- Trực ban: 02033.876.114",
            "text": "Trực ban: 02033.876.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Tiên Yên",
        "raw_title": "39.2. Công an xã Tiên Yên",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Trần Xuân Khánh; SĐT: 0979.099.578",
            "text": "Trưởng CAX: Trần Xuân Khánh; SĐT: 0979.099.578"
          },
          {
            "raw": "- Phó CAP: Lý Xuân Ngò; SĐT: 0975.188.301",
            "text": "Phó CAP: Lý Xuân Ngò; SĐT: 0975.188.301"
          },
          {
            "raw": "- Phó CAP: Ly Văn Quân; SĐT: 0366.931.980",
            "text": "Phó CAP: Ly Văn Quân; SĐT: 0366.931.980"
          },
          {
            "raw": "- Phó CAP: Nguyễn Văn Luân; SĐT: 0985.249.724",
            "text": "Phó CAP: Nguyễn Văn Luân; SĐT: 0985.249.724"
          },
          {
            "raw": "- Phó CAP: Đình Văn Hải; SĐT: 0935.568.228",
            "text": "Phó CAP: Đình Văn Hải; SĐT: 0935.568.228"
          },
          {
            "raw": "- Phó CAP: Trương Hiến Cường; SĐT: 0372.819.998",
            "text": "Phó CAP: Trương Hiến Cường; SĐT: 0372.819.998"
          },
          {
            "raw": "- Trực ban: 02033.876.285",
            "text": "Trực ban: 02033.876.285"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Tiên Yên",
        "raw_title": "39.3. Ủy ban nhân dân xã Tiên Yên",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy xã: Nguyễn Trọng Hiếu; SĐT: 0772.209.866",
            "text": "Bí thư Đảng ủy xã: Nguyễn Trọng Hiếu; SĐT: 0772.209.866"
          },
          {
            "raw": "- Phó Bí thư TT, Chủ tịch HĐND xã: Đào Xuân Thắng; SĐT: 0589.161.111",
            "text": "Phó Bí thư TT, Chủ tịch HĐND xã: Đào Xuân Thắng; SĐT: 0589.161.111"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Nguyễn Cao Khải; SĐT: 0912.068.018",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Nguyễn Cao Khải; SĐT: 0912.068.018"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Nguyễn Thanh Tùng; SĐT: 0975.300.350",
            "text": "Phó Chủ tịch HĐND xã: Nguyễn Thanh Tùng; SĐT: 0975.300.350"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Nguyễn Đức Toàn; SĐT: 0905.981.886",
            "text": "Phó Chủ tịch UBND xã: Nguyễn Đức Toàn; SĐT: 0905.981.886"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Phạm Kim Cúc; SĐT: 0941.208.699",
            "text": "Phó Chủ tịch UBND xã: Phạm Kim Cúc; SĐT: 0941.208.699"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "39.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Tiên Yên:",
        "raw_title": "39.5. Điện lực: Đội quản lý điện lực khu vực Tiên Yên:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Đặng Đình Nam; SĐT: 0963.969.686",
            "text": "Đội trưởng: Đặng Đình Nam; SĐT: 0963.969.686"
          },
          {
            "raw": "- Đội Phó: Vũ Thế Lân; SĐT: 0968.121.234",
            "text": "Đội Phó: Vũ Thế Lân; SĐT: 0968.121.234"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.742.888; 02033.745.999",
            "text": "Tổ trực vận hành SĐT: 02033.742.888; 02033.745.999"
          },
          {
            "raw": "- Điện lực Tiên Yên; SĐT: 02033.876.299",
            "text": "Điện lực Tiên Yên; SĐT: 02033.876.299"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Miền Đông:",
        "raw_title": "39.6. Cấp nước: Xí nghiệp nước Miền Đông:",
        "contacts": [
          {
            "raw": "- Giám đốc: Đào Xuân Chiến; SĐT: 0936.394.559",
            "text": "Giám đốc: Đào Xuân Chiến; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Vương Đức Chính; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Vương Đức Chính; SĐT: 0936.394.559"
          },
          {
            "raw": "- Xí nghiệp nước Miền Đông; SĐT: 02033.742.358",
            "text": "Xí nghiệp nước Miền Đông; SĐT: 02033.742.358"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "39.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Tiên Yên; SĐT: 02033.742.611",
            "text": "Trung tâm y tế huyện Tiên Yên; SĐT: 02033.742.611"
          },
          {
            "raw": "- Bệnh viện đa khoa khu vực Tiên Yên; SĐT: 0982.880.037",
            "text": "Bệnh viện đa khoa khu vực Tiên Yên; SĐT: 0982.880.037"
          },
          {
            "raw": "- Trạm y tế xã Tiên Yên (Trạm chính); SĐT: 0904.619.264",
            "text": "Trạm y tế xã Tiên Yên (Trạm chính); SĐT: 0904.619.264"
          },
          {
            "raw": "- Trạm y tế xã Tiên Yên (Điểm trạm); SĐT: 0853.629.659",
            "text": "Trạm y tế xã Tiên Yên (Điểm trạm); SĐT: 0853.629.659"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "39.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Trần Văn Thanh, phương tiện: 01 Máy xúc; SĐT: 0945.005.100",
            "text": "Trần Văn Thanh, phương tiện: 01 Máy xúc; SĐT: 0945.005.100"
          },
          {
            "raw": "- Hoàng Văn Phúc, phương tiện: 01 Máy xúc; SĐT: 0369.805.866",
            "text": "Hoàng Văn Phúc, phương tiện: 01 Máy xúc; SĐT: 0369.805.866"
          },
          {
            "raw": "- Triệu Văn Dương, phương tiện: 01 Máy xúc; SĐT: 0965.045.425",
            "text": "Triệu Văn Dương, phương tiện: 01 Máy xúc; SĐT: 0965.045.425"
          },
          {
            "raw": "- Trần Văn Trọng, phương tiện: 01 Máy xúc; SĐT: 0974.876.719",
            "text": "Trần Văn Trọng, phương tiện: 01 Máy xúc; SĐT: 0974.876.719"
          },
          {
            "raw": "- Lê Quang Toàn, phương tiện: 01 Máy xúc; SĐT: 0363.883.666",
            "text": "Lê Quang Toàn, phương tiện: 01 Máy xúc; SĐT: 0363.883.666"
          },
          {
            "raw": "- Bùi Văn Hùng, phương tiện: 01 Máy xúc; SĐT: 0967.435.918",
            "text": "Bùi Văn Hùng, phương tiện: 01 Máy xúc; SĐT: 0967.435.918"
          },
          {
            "raw": "- Trần Văn Quỳnh, phương tiện: 01 Máy xúc; SĐT: 0356.321.586",
            "text": "Trần Văn Quỳnh, phương tiện: 01 Máy xúc; SĐT: 0356.321.586"
          },
          {
            "raw": "- Nông Văn Hợi, phương tiện: 01 Máy xúc; SĐT: 0969.230.312",
            "text": "Nông Văn Hợi, phương tiện: 01 Máy xúc; SĐT: 0969.230.312"
          },
          {
            "raw": "- Dường A Nhỉ, phương tiện: 01 Máy xúc; SĐT: 0974.876.176",
            "text": "Dường A Nhỉ, phương tiện: 01 Máy xúc; SĐT: 0974.876.176"
          }
        ]
      }
    ]
  },
  {
    "id": 40,
    "type": "XÃ",
    "name": "ĐIỀN XÁ",
    "raw_title": "40. XÃ ĐIỀN XÁ",
    "district": "Huyện Tiên Yên",
    "team": "Đội KV7",
    "components": [
      "Điền Xá",
      "Hà Lâu",
      "Yên Than"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "40.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218",
            "text": "Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888",
            "text": "Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888"
          },
          {
            "raw": "- Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666",
            "text": "Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666"
          },
          {
            "raw": "- Trực ban: 02033.876.114",
            "text": "Trực ban: 02033.876.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Điền Xá",
        "raw_title": "40.2. Công an xã Điền Xá",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Đào Tiến Mạnh; SĐT: 0983.315.208",
            "text": "Trưởng CAX: Đào Tiến Mạnh; SĐT: 0983.315.208"
          },
          {
            "raw": "- Phó CAP: Hoàng Văn Giáp; SĐT: 0986.140.566",
            "text": "Phó CAP: Hoàng Văn Giáp; SĐT: 0986.140.566"
          },
          {
            "raw": "- Phó CAP: Nguyễn Trung Dũng; SĐT: 0986.688.666",
            "text": "Phó CAP: Nguyễn Trung Dũng; SĐT: 0986.688.666"
          },
          {
            "raw": "- Phó CAP: Chìu A Quang; SĐT: 0985.735.392",
            "text": "Phó CAP: Chìu A Quang; SĐT: 0985.735.392"
          },
          {
            "raw": "- Phó CAP: Vi Xuân Tùng; SĐT: 0852.251.688",
            "text": "Phó CAP: Vi Xuân Tùng; SĐT: 0852.251.688"
          },
          {
            "raw": "- Trực ban: 02033.900.825",
            "text": "Trực ban: 02033.900.825"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Điền Xá",
        "raw_title": "40.3. Ủy ban nhân dân xã Điền Xá",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Vũ Nhật Quang; SĐT: 0912.118.396",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Vũ Nhật Quang; SĐT: 0912.118.396"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Tô Văn Khải; SĐT: 0987.519.223",
            "text": "Phó Bí thư TT Đảng ủy: Tô Văn Khải; SĐT: 0987.519.223"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Lương Việt Hưng; SĐT: 0986.491.666",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Lương Việt Hưng; SĐT: 0986.491.666"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Mai Thị Hà; SĐT: 0934.351.626",
            "text": "Phó Chủ tịch HĐND xã: Mai Thị Hà; SĐT: 0934.351.626"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Đỗ Thị Duyên; SĐT: 0977.991.436",
            "text": "Phó Chủ tịch UBND xã: Đỗ Thị Duyên; SĐT: 0977.991.436"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Lê Xuân Khuyến; SĐT: 0918.535.986",
            "text": "Phó Chủ tịch UBND xã: Lê Xuân Khuyến; SĐT: 0918.535.986"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "40.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Tiên Yên:",
        "raw_title": "40.5. Điện lực: Đội quản lý điện lực khu vực Tiên Yên:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Đặng Đình Nam; SĐT: 0963.969.686",
            "text": "Đội trưởng: Đặng Đình Nam; SĐT: 0963.969.686"
          },
          {
            "raw": "- Đội Phó: Vũ Thế Lân; SĐT: 0968.121.234",
            "text": "Đội Phó: Vũ Thế Lân; SĐT: 0968.121.234"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.742.888; 02033.745.999",
            "text": "Tổ trực vận hành SĐT: 02033.742.888; 02033.745.999"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Miền Đông:",
        "raw_title": "40.6. Cấp nước: Xí nghiệp nước Miền Đông:",
        "contacts": [
          {
            "raw": "- Giám đốc: Đào Xuân Chiến; SĐT: 0936.394.559",
            "text": "Giám đốc: Đào Xuân Chiến; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Vương Đức Chính; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Vương Đức Chính; SĐT: 0936.394.559"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "40.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Tiên Yên; SĐT: 02033.742.611",
            "text": "Trung tâm y tế huyện Tiên Yên; SĐT: 02033.742.611"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "40.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Hộ Đặng Văn Chinh, phương tiện: 01 Máy xúc; SĐT: 0967.431.238",
            "text": "Hộ Đặng Văn Chinh, phương tiện: 01 Máy xúc; SĐT: 0967.431.238"
          },
          {
            "raw": "- Hộ Hoàng Văn Điệp, phương tiện: 01 Máy xúc; SĐT: 0978.718.622",
            "text": "Hộ Hoàng Văn Điệp, phương tiện: 01 Máy xúc; SĐT: 0978.718.622"
          },
          {
            "raw": "- Hộ Lý Tắc Quay, phương tiện: 01 Máy xúc; SĐT: 0944.933.581",
            "text": "Hộ Lý Tắc Quay, phương tiện: 01 Máy xúc; SĐT: 0944.933.581"
          },
          {
            "raw": "- Hộ Lương Văn Hùng, phương tiện: 01 Máy xúc; SĐT: 0965.140.230",
            "text": "Hộ Lương Văn Hùng, phương tiện: 01 Máy xúc; SĐT: 0965.140.230"
          },
          {
            "raw": "- Hộ Voòng Chằn Phí, phương tiện: 01 Máy xúc; SĐT: 0947.508.825",
            "text": "Hộ Voòng Chằn Phí, phương tiện: 01 Máy xúc; SĐT: 0947.508.825"
          },
          {
            "raw": "- Hộ Tằng Quay Sồi, phương tiện: 01 Máy xúc; SĐT: 0963.427.054",
            "text": "Hộ Tằng Quay Sồi, phương tiện: 01 Máy xúc; SĐT: 0963.427.054"
          },
          {
            "raw": "- Hộ Sằn Đăng Khoa, phương tiện: 01 Máy xúc; SĐT: 0933.993.678",
            "text": "Hộ Sằn Đăng Khoa, phương tiện: 01 Máy xúc; SĐT: 0933.993.678"
          },
          {
            "raw": "- Hộ Choòng Mằn Sinh, phương tiện: 01 Máy xúc; SĐT: 0946.083.722",
            "text": "Hộ Choòng Mằn Sinh, phương tiện: 01 Máy xúc; SĐT: 0946.083.722"
          }
        ]
      }
    ]
  },
  {
    "id": 41,
    "type": "XÃ",
    "name": "ĐÔNG NGŨ",
    "raw_title": "41. XÃ ĐÔNG NGŨ",
    "district": "Huyện Tiên Yên",
    "team": "Đội KV7",
    "components": [
      "Đông Ngũ",
      "Đông Hải",
      "Đại Dực"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "41.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218",
            "text": "Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888",
            "text": "Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888"
          },
          {
            "raw": "- Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666",
            "text": "Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666"
          },
          {
            "raw": "- Trực ban: 02033.876.114",
            "text": "Trực ban: 02033.876.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Đông Ngũ",
        "raw_title": "41.2. Công an xã Đông Ngũ",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Phùng Văn Hình; SĐT: 0372.916.660",
            "text": "Trưởng CAX: Phùng Văn Hình; SĐT: 0372.916.660"
          },
          {
            "raw": "- Phó CAP: Vy Đình Trình; SĐT: 0977.202.666",
            "text": "Phó CAP: Vy Đình Trình; SĐT: 0977.202.666"
          },
          {
            "raw": "- Phó CAP: Sẵn A Phật; SĐT: 0866.737.266",
            "text": "Phó CAP: Sẵn A Phật; SĐT: 0866.737.266"
          },
          {
            "raw": "- Phó CAP: Hoàng Mạnh Thái; SĐT: 0363.332.869",
            "text": "Phó CAP: Hoàng Mạnh Thái; SĐT: 0363.332.869"
          },
          {
            "raw": "- Phó CAP: Lê Hồng Tuấn; SĐT: 0383.813.288",
            "text": "Phó CAP: Lê Hồng Tuấn; SĐT: 0383.813.288"
          },
          {
            "raw": "- Trực ban: 02033.745.668",
            "text": "Trực ban: 02033.745.668"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Đông Ngũ",
        "raw_title": "41.3. Ủy ban nhân dân xã Đông Ngũ",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Hoàng Đức Hậu; SĐT: 0912.428.269",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Hoàng Đức Hậu; SĐT: 0912.428.269"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Nềnh Quốc Sinh; SĐT: 0912.902.923",
            "text": "Phó Bí thư TT Đảng ủy: Nềnh Quốc Sinh; SĐT: 0912.902.923"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Vi Quốc Phương; SĐT: 0333.605.555",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Vi Quốc Phương; SĐT: 0333.605.555"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Trần Đức Ba; SĐT: 0338.214.888",
            "text": "Phó Chủ tịch HĐND xã: Trần Đức Ba; SĐT: 0338.214.888"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Đinh Văn Khôi; SĐT: 0973.943.827",
            "text": "Phó Chủ tịch UBND xã: Đinh Văn Khôi; SĐT: 0973.943.827"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Nguyễn Viết Thụy; SĐT: 0942.415.866",
            "text": "Phó Chủ tịch UBND xã: Nguyễn Viết Thụy; SĐT: 0942.415.866"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "41.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Tiên Yên:",
        "raw_title": "41.5. Điện lực: Đội quản lý điện lực khu vực Tiên Yên:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Đặng Đình Nam; SĐT: 0963.969.686",
            "text": "Đội trưởng: Đặng Đình Nam; SĐT: 0963.969.686"
          },
          {
            "raw": "- Đội Phó: Vũ Thế Lân; SĐT: 0968.121.234",
            "text": "Đội Phó: Vũ Thế Lân; SĐT: 0968.121.234"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.742.888; 02033.745.999",
            "text": "Tổ trực vận hành SĐT: 02033.742.888; 02033.745.999"
          },
          {
            "raw": "- Điện lực Tiên Yên; SĐT: 02033.876.299",
            "text": "Điện lực Tiên Yên; SĐT: 02033.876.299"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Không có thông tin:",
        "raw_title": "41.6. Cấp nước: Không có thông tin:",
        "contacts": []
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "41.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Tiên Yên; SĐT: 02033.742.611",
            "text": "Trung tâm y tế huyện Tiên Yên; SĐT: 02033.742.611"
          },
          {
            "raw": "- Trạm y tế xã Đông Ngũ; SĐT: 02033.745.955",
            "text": "Trạm y tế xã Đông Ngũ; SĐT: 02033.745.955"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "41.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Phạm Văn Mạnh, phương tiện: 01 Máy xúc; SĐT: 0977.262.037",
            "text": "Phạm Văn Mạnh, phương tiện: 01 Máy xúc; SĐT: 0977.262.037"
          },
          {
            "raw": "- Lương Văn Hải, phương tiện: 01 Máy xúc; SĐT: 0982.467.381",
            "text": "Lương Văn Hải, phương tiện: 01 Máy xúc; SĐT: 0982.467.381"
          },
          {
            "raw": "- Lương Văn Hậu, phương tiện: 01 Máy xúc; SĐT: 0989.427.186",
            "text": "Lương Văn Hậu, phương tiện: 01 Máy xúc; SĐT: 0989.427.186"
          },
          {
            "raw": "- Nguyễn Văn Trụ, phương tiện: 01 Máy xúc; SĐT: 0968.025.356",
            "text": "Nguyễn Văn Trụ, phương tiện: 01 Máy xúc; SĐT: 0968.025.356"
          },
          {
            "raw": "- Vũ Văn Hiếu, phương tiện: 01 Máy xúc; SĐT: 0982.389.205",
            "text": "Vũ Văn Hiếu, phương tiện: 01 Máy xúc; SĐT: 0982.389.205"
          },
          {
            "raw": "- Vũ Văn Tám, phương tiện: 01 Máy xúc; SĐT: 0385.266.466",
            "text": "Vũ Văn Tám, phương tiện: 01 Máy xúc; SĐT: 0385.266.466"
          },
          {
            "raw": "- Lý Văn Hải, phương tiện: 01 Máy xúc; SĐT: 0353.403.464",
            "text": "Lý Văn Hải, phương tiện: 01 Máy xúc; SĐT: 0353.403.464"
          },
          {
            "raw": "- Lý Văn Ba, phương tiện: 01 Máy xúc; SĐT: 0379.365.760",
            "text": "Lý Văn Ba, phương tiện: 01 Máy xúc; SĐT: 0379.365.760"
          },
          {
            "raw": "- Từ Văn Bảo, phương tiện: 01 Máy xúc; SĐT: 0975.469.059",
            "text": "Từ Văn Bảo, phương tiện: 01 Máy xúc; SĐT: 0975.469.059"
          },
          {
            "raw": "- Lê Hồng Tâm, phương tiện: 01 Xe Cẩu; SĐT: 0886.183.688",
            "text": "Lê Hồng Tâm, phương tiện: 01 Xe Cẩu; SĐT: 0886.183.688"
          },
          {
            "raw": "- Trần Văn Dầu, phương tiện: 01 Máy xúc; SĐT: 0352.013.888",
            "text": "Trần Văn Dầu, phương tiện: 01 Máy xúc; SĐT: 0352.013.888"
          },
          {
            "raw": "- Ninh A Châu, phương tiện: 01 Máy xúc; SĐT: 0984.493.865",
            "text": "Ninh A Châu, phương tiện: 01 Máy xúc; SĐT: 0984.493.865"
          }
        ]
      }
    ]
  },
  {
    "id": 42,
    "type": "XÃ",
    "name": "HẢI LẠNG",
    "raw_title": "42. XÃ HẢI LẠNG",
    "district": "Huyện Tiên Yên",
    "team": "Đội KV7",
    "components": [
      "Hải Lạng",
      "Đông Rui",
      "Hải Hòa"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "42.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218",
            "text": "Đội trưởng: Tô Duy Dũng; SĐT: 0934.697.218"
          },
          {
            "raw": "- Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888",
            "text": "Phó Đội trưởng: Nguyễn Hữu Hiến; SĐT: 0867.035.888"
          },
          {
            "raw": "- Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666",
            "text": "Cán bộ: Đỗ Minh Hưng; SĐT: 0326.688.666"
          },
          {
            "raw": "- Trực ban: 02033.876.114",
            "text": "Trực ban: 02033.876.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Hải Lạng",
        "raw_title": "42.2. Công an xã Hải Lạng",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Pham Minh Tú; SĐT: 0843.293.456",
            "text": "Trưởng CAX: Pham Minh Tú; SĐT: 0843.293.456"
          },
          {
            "raw": "- Phó CAP: Nguyễn Đình Tuấn; SĐT: 0915.190.901",
            "text": "Phó CAP: Nguyễn Đình Tuấn; SĐT: 0915.190.901"
          },
          {
            "raw": "- Phó CAP: Vương Anh Tuân; SĐT: 0982.699.993",
            "text": "Phó CAP: Vương Anh Tuân; SĐT: 0982.699.993"
          },
          {
            "raw": "- Phó CAP: Lê Thành Luân; SĐT: 0918.283.285",
            "text": "Phó CAP: Lê Thành Luân; SĐT: 0918.283.285"
          },
          {
            "raw": "- Phó CAP: Tô Văn Quân; SĐT: 0968.854.392",
            "text": "Phó CAP: Tô Văn Quân; SĐT: 0968.854.392"
          },
          {
            "raw": "- Trực ban: 02033.900.975",
            "text": "Trực ban: 02033.900.975"
          },
          {
            "raw": "- Phó CAP: Đỗ Thai Bao; SĐT: 0986.286.688",
            "text": "Phó CAP: Đỗ Thai Bao; SĐT: 0986.286.688"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Hải Lạng",
        "raw_title": "42.3. Ủy ban nhân dân xã Hải Lạng",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Phạm Văn Hoài; SĐT: 0988.901.072",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Phạm Văn Hoài; SĐT: 0988.901.072"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Vi Thị Tứ; SĐT: 0918.240.383",
            "text": "Phó Bí thư TT Đảng ủy: Vi Thị Tứ; SĐT: 0918.240.383"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Lục Văn Long; SĐT: 0986.312.979",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Lục Văn Long; SĐT: 0986.312.979"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Trần Thị Hạnh; SĐT: 0387.686.485",
            "text": "Phó Chủ tịch HĐND xã: Trần Thị Hạnh; SĐT: 0387.686.485"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Đặng Huy Hải; SĐT: 0912.663.698",
            "text": "Phó Chủ tịch UBND xã: Đặng Huy Hải; SĐT: 0912.663.698"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Đào Thị Mai Thịnh; SĐT: 0373.181.373",
            "text": "Phó Chủ tịch UBND xã: Đào Thị Mai Thịnh; SĐT: 0373.181.373"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "42.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Tiên Yên:",
        "raw_title": "42.5. Điện lực: Đội quản lý điện lực khu vực Tiên Yên:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Đặng Đình Nam; SĐT: 0963.969.686",
            "text": "Đội trưởng: Đặng Đình Nam; SĐT: 0963.969.686"
          },
          {
            "raw": "- Đội Phó: Vũ Thế Lân; SĐT: 0968.121.234",
            "text": "Đội Phó: Vũ Thế Lân; SĐT: 0968.121.234"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.742.888; 02033.745.999",
            "text": "Tổ trực vận hành SĐT: 02033.742.888; 02033.745.999"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Miền Đông:",
        "raw_title": "42.6. Cấp nước: Xí nghiệp nước Miền Đông:",
        "contacts": [
          {
            "raw": "- Giám đốc: Đào Xuân Chiến; SĐT: 0936.394.559",
            "text": "Giám đốc: Đào Xuân Chiến; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Vương Đức Chính; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Vương Đức Chính; SĐT: 0936.394.559"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "42.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Tiên Yên; SĐT: 02033.742.611",
            "text": "Trung tâm y tế huyện Tiên Yên; SĐT: 02033.742.611"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "42.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Công ty TNHH xây dựng và thương mại Phạm Tuấn Đạt, phương tiện: 01 Máy xúc, máy xích, xe, tải ben; SĐT: 0964.470.227",
            "text": "Công ty TNHH xây dựng và thương mại Phạm Tuấn Đạt, phương tiện: 01 Máy xúc, máy xích, xe, tải ben; SĐT: 0964.470.227"
          },
          {
            "raw": "- Đặng Văn Sinh, phương tiện: 01 Máy xúc; SĐT: 0975.935.883",
            "text": "Đặng Văn Sinh, phương tiện: 01 Máy xúc; SĐT: 0975.935.883"
          },
          {
            "raw": "- Đặng Đức Hiền, phương tiện: 01 Máy xúc; SĐT: 0376.551.898",
            "text": "Đặng Đức Hiền, phương tiện: 01 Máy xúc; SĐT: 0376.551.898"
          },
          {
            "raw": "- Lục Văn Lợi, phương tiện: 01 Máy xúc; SĐT: 0968.299.828",
            "text": "Lục Văn Lợi, phương tiện: 01 Máy xúc; SĐT: 0968.299.828"
          },
          {
            "raw": "- Công ty cứu hộ miền Đông, phương tiện: 01 Máy cẩu; SĐT: 0988.161.816",
            "text": "Công ty cứu hộ miền Đông, phương tiện: 01 Máy cẩu; SĐT: 0988.161.816"
          }
        ]
      }
    ]
  },
  {
    "id": 43,
    "type": "XÃ",
    "name": "ĐẦM HÀ",
    "raw_title": "43. XÃ ĐẦM HÀ",
    "district": "Huyện Đầm Hà",
    "team": "Đội KV7",
    "components": [
      "Đầm Hà",
      "Tân Bình",
      "Đại Bình",
      "Tân Lập"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "43.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Hà Văn Vũ; SĐT: 0904.638.006",
            "text": "Đội trưởng: Hà Văn Vũ; SĐT: 0904.638.006"
          },
          {
            "raw": "- Phó Đội trưởng: Chu Văn Đặng; SĐT: 0973.586.114",
            "text": "Phó Đội trưởng: Chu Văn Đặng; SĐT: 0973.586.114"
          },
          {
            "raw": "- Cán bộ: Nguyễn Chiến Thắng; SĐT: 0387.260.990",
            "text": "Cán bộ: Nguyễn Chiến Thắng; SĐT: 0387.260.990"
          },
          {
            "raw": "- Trực ban: 02033.763.114",
            "text": "Trực ban: 02033.763.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Đầm Hà",
        "raw_title": "43.2. Công an xã Đầm Hà",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Vũ Mạnh Cường; SĐT: 0982.360.268",
            "text": "Trưởng CAX: Vũ Mạnh Cường; SĐT: 0982.360.268"
          },
          {
            "raw": "- Phó CAP: Phạm Tùng Lâm; SĐT: 0888.576.868",
            "text": "Phó CAP: Phạm Tùng Lâm; SĐT: 0888.576.868"
          },
          {
            "raw": "- Phó CAP: Vũ Văn Liem; SĐT: 0888.774.288",
            "text": "Phó CAP: Vũ Văn Liem; SĐT: 0888.774.288"
          },
          {
            "raw": "- Phó CAP: Chìu A Tài; SĐT: 0848.112.626",
            "text": "Phó CAP: Chìu A Tài; SĐT: 0848.112.626"
          },
          {
            "raw": "- Phó CAP: Phạm Thanh Sang; SĐT: 0913.929.168",
            "text": "Phó CAP: Phạm Thanh Sang; SĐT: 0913.929.168"
          },
          {
            "raw": "- Phó CAP: Triệu Quý Đoàn; SĐT: 0915.712.388",
            "text": "Phó CAP: Triệu Quý Đoàn; SĐT: 0915.712.388"
          },
          {
            "raw": "- Trực ban: 02033.880.246; 02033.768.048",
            "text": "Trực ban: 02033.880.246; 02033.768.048"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Đầm Hà",
        "raw_title": "43.3. Ủy ban nhân dân xã Đầm Hà",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy xã: Trần Anh Cường; SĐT: 0913.268.066",
            "text": "Bí thư Đảng ủy xã: Trần Anh Cường; SĐT: 0913.268.066"
          },
          {
            "raw": "- Phó Bí thư TT, Chủ tịch HĐND xã: Vũ Thị Vui; SĐT: 0396.166.228",
            "text": "Phó Bí thư TT, Chủ tịch HĐND xã: Vũ Thị Vui; SĐT: 0396.166.228"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Tô Xuân Lợi; SĐT: 0936.074.688",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Tô Xuân Lợi; SĐT: 0936.074.688"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Chu Thị Hảo; SĐT: 0982.109.601",
            "text": "Phó Chủ tịch HĐND xã: Chu Thị Hảo; SĐT: 0982.109.601"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Nguyễn Hồng Hải; SĐT: 0912.237.716",
            "text": "Phó Chủ tịch UBND xã: Nguyễn Hồng Hải; SĐT: 0912.237.716"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Hoàng Mỹ Linh; SĐT: 0356.798.108",
            "text": "Phó Chủ tịch UBND xã: Hoàng Mỹ Linh; SĐT: 0356.798.108"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "43.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hải Hà:",
        "raw_title": "43.5. Điện lực: Đội quản lý điện lực khu vực Hải Hà:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Cao Hùng; SĐT: 0963.376.888",
            "text": "Đội trưởng: Nguyễn Cao Hùng; SĐT: 0963.376.888"
          },
          {
            "raw": "- Đội Phó: Nguyễn Toàn Thắng; SĐT: 0866.776.794",
            "text": "Đội Phó: Nguyễn Toàn Thắng; SĐT: 0866.776.794"
          },
          {
            "raw": "- Đội Phó: Phạm Văn Giáp; SĐT: 0969.803.888",
            "text": "Đội Phó: Phạm Văn Giáp; SĐT: 0969.803.888"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.760.222; 02036.265.001",
            "text": "Tổ trực vận hành SĐT: 02033.760.222; 02036.265.001"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Miền Đông:",
        "raw_title": "43.6. Cấp nước: Xí nghiệp nước Miền Đông:",
        "contacts": [
          {
            "raw": "- Giám đốc: Đào Xuân Chiến; SĐT: 0936.394.559",
            "text": "Giám đốc: Đào Xuân Chiến; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Vương Đức Chính; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Vương Đức Chính; SĐT: 0936.394.559"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "43.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Đầm Hà; SĐT: 02033.768.115",
            "text": "Trung tâm y tế huyện Đầm Hà; SĐT: 02033.768.115"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "43.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 44,
    "type": "XÃ",
    "name": "QUẢNG TÂN",
    "raw_title": "44. XÃ QUẢNG TÂN",
    "district": "Huyện Đầm Hà",
    "team": "Đội KV7",
    "components": [
      "Quảng Tân",
      "Quảng An",
      "Dực Yên",
      "Quảng Lâm"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "44.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Hà Văn Vũ; SĐT: 0904.638.006",
            "text": "Đội trưởng: Hà Văn Vũ; SĐT: 0904.638.006"
          },
          {
            "raw": "- Phó Đội trưởng: Chu Văn Đặng; SĐT: 0973.586.114",
            "text": "Phó Đội trưởng: Chu Văn Đặng; SĐT: 0973.586.114"
          },
          {
            "raw": "- Cán bộ: Nguyễn Chiến Thắng; SĐT: 0387.260.990",
            "text": "Cán bộ: Nguyễn Chiến Thắng; SĐT: 0387.260.990"
          },
          {
            "raw": "- Trực ban: 02033.763.114",
            "text": "Trực ban: 02033.763.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Quảng Tân",
        "raw_title": "44.2. Công an xã Quảng Tân",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Nguyễn Tiến Trọng; SĐT: 0937.845.699",
            "text": "Trưởng CAX: Nguyễn Tiến Trọng; SĐT: 0937.845.699"
          },
          {
            "raw": "- Phó CAP: Chìu A Nhì; SĐT: 0912.652.988",
            "text": "Phó CAP: Chìu A Nhì; SĐT: 0912.652.988"
          },
          {
            "raw": "- Phó CAP: Phạm Xuân Khánh; SĐT: 0987.480.386",
            "text": "Phó CAP: Phạm Xuân Khánh; SĐT: 0987.480.386"
          },
          {
            "raw": "- Phó CAP: Nguyễn Anh Hải; SĐT: 0984.925.565",
            "text": "Phó CAP: Nguyễn Anh Hải; SĐT: 0984.925.565"
          },
          {
            "raw": "- Phó CAP: Giáp Thanh Hiệp; SĐT: 0902.161.988",
            "text": "Phó CAP: Giáp Thanh Hiệp; SĐT: 0902.161.988"
          },
          {
            "raw": "- Phó CAP: Vũ Anh Tuấn; SĐT: 0988.288.882",
            "text": "Phó CAP: Vũ Anh Tuấn; SĐT: 0988.288.882"
          },
          {
            "raw": "- Trực ban: 02033.900.576; 02033.900.578",
            "text": "Trực ban: 02033.900.576; 02033.900.578"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Quảng Tân",
        "raw_title": "44.3. Ủy ban nhân dân xã Quảng Tân",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Đào Biên Thùy; SĐT: 0972.861.888",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Đào Biên Thùy; SĐT: 0972.861.888"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Nguyễn Thị Hoa; SĐT: 0916.103.128",
            "text": "Phó Bí thư TT Đảng ủy: Nguyễn Thị Hoa; SĐT: 0916.103.128"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Vũ Quốc Hưng; SĐT: 0966.012.456",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Vũ Quốc Hưng; SĐT: 0966.012.456"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Đoàn Văn Tân; SĐT: 0985.544.560",
            "text": "Phó Chủ tịch HĐND xã: Đoàn Văn Tân; SĐT: 0985.544.560"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Đặng Trung Hòa; SĐT: 0982.182.113",
            "text": "Phó Chủ tịch UBND xã: Đặng Trung Hòa; SĐT: 0982.182.113"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Hoàng Thị Thu Huyền; SĐT: 0942.438.688",
            "text": "Phó Chủ tịch UBND xã: Hoàng Thị Thu Huyền; SĐT: 0942.438.688"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "44.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hải Hà:",
        "raw_title": "44.5. Điện lực: Đội quản lý điện lực khu vực Hải Hà:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Cao Hùng; SĐT: 0963.376.888",
            "text": "Đội trưởng: Nguyễn Cao Hùng; SĐT: 0963.376.888"
          },
          {
            "raw": "- Đội Phó: Nguyễn Toàn Thắng; SĐT: 0866.776.794",
            "text": "Đội Phó: Nguyễn Toàn Thắng; SĐT: 0866.776.794"
          },
          {
            "raw": "- Đội Phó: Phạm Văn Giáp; SĐT: 0969.803.888",
            "text": "Đội Phó: Phạm Văn Giáp; SĐT: 0969.803.888"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.760.222; 02036.265.001",
            "text": "Tổ trực vận hành SĐT: 02033.760.222; 02036.265.001"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Không có thông tin:",
        "raw_title": "44.6. Cấp nước: Không có thông tin:",
        "contacts": []
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "44.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Đầm Hà; SĐT: 02033.768.115",
            "text": "Trung tâm y tế huyện Đầm Hà; SĐT: 02033.768.115"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "44.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 45,
    "type": "XÃ",
    "name": "QUẢNG ĐỨC",
    "raw_title": "45. XÃ QUẢNG ĐỨC",
    "district": "Huyện Hải Hà",
    "team": "Đội KV8",
    "components": [
      "Quảng Đức",
      "Quảng Thành",
      "Quảng Thịnh"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "45.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Hà Văn Vũ; SĐT: 0904.638.006",
            "text": "Đội trưởng: Hà Văn Vũ; SĐT: 0904.638.006"
          },
          {
            "raw": "- Phó Đội trưởng: Chu Văn Đặng; SĐT: 0973.586.114",
            "text": "Phó Đội trưởng: Chu Văn Đặng; SĐT: 0973.586.114"
          },
          {
            "raw": "- Cán bộ: Nguyễn Chiến Thắng; SĐT: 0387.260.990",
            "text": "Cán bộ: Nguyễn Chiến Thắng; SĐT: 0387.260.990"
          },
          {
            "raw": "- Trực ban: 02033.763.114",
            "text": "Trực ban: 02033.763.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Quảng Đức",
        "raw_title": "45.2. Công an xã Quảng Đức",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Phạm Kiên Cường; SĐT: 0962.118.898",
            "text": "Trưởng CAX: Phạm Kiên Cường; SĐT: 0962.118.898"
          },
          {
            "raw": "- Phó CAP: Bùi Minh Hiển; SĐT: 0985.244.678",
            "text": "Phó CAP: Bùi Minh Hiển; SĐT: 0985.244.678"
          },
          {
            "raw": "- Phó CAP: Nguyễn Văn Tăng; SĐT: 0386.376.659",
            "text": "Phó CAP: Nguyễn Văn Tăng; SĐT: 0386.376.659"
          },
          {
            "raw": "- Phó CAP: Trần Quốc Hoàn; SĐT: 0982.924.869",
            "text": "Phó CAP: Trần Quốc Hoàn; SĐT: 0982.924.869"
          },
          {
            "raw": "- Phó CAP: Trần Văn Huy; SĐT: 0962.770.222",
            "text": "Phó CAP: Trần Văn Huy; SĐT: 0962.770.222"
          },
          {
            "raw": "- Phó CAP: Phùng Văn Tuấn; SĐT: 0962.118.898",
            "text": "Phó CAP: Phùng Văn Tuấn; SĐT: 0962.118.898"
          },
          {
            "raw": "- Trực ban: 02033.901.638; 02033.901.000; 02033.901.628",
            "text": "Trực ban: 02033.901.638; 02033.901.000; 02033.901.628"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Quảng Đức",
        "raw_title": "45.3. Ủy ban nhân dân xã Quảng Đức",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Nguyễn Hữu Liêm; SĐT: 0983.542.676",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Nguyễn Hữu Liêm; SĐT: 0983.542.676"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Phạm Văn Khởi; SĐT: 0988.560.369",
            "text": "Phó Bí thư TT Đảng ủy: Phạm Văn Khởi; SĐT: 0988.560.369"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Phạm Văn Thọ; SĐT: 0904.528.477",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Phạm Văn Thọ; SĐT: 0904.528.477"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Nguyễn Hùng Sơn; SĐT: 0789.289.689",
            "text": "Phó Chủ tịch HĐND xã: Nguyễn Hùng Sơn; SĐT: 0789.289.689"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Phan Văn Việt; SĐT: 0913.071.548",
            "text": "Phó Chủ tịch UBND xã: Phan Văn Việt; SĐT: 0913.071.548"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Trần Văn Trí; SĐT: 0968.888.975",
            "text": "Phó Chủ tịch UBND xã: Trần Văn Trí; SĐT: 0968.888.975"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "45.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hải Hà:",
        "raw_title": "45.5. Điện lực: Đội quản lý điện lực khu vực Hải Hà:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Cao Hùng; SĐT: 0963.376.888",
            "text": "Đội trưởng: Nguyễn Cao Hùng; SĐT: 0963.376.888"
          },
          {
            "raw": "- Đội Phó: Nguyễn Toàn Thắng; SĐT: 0866.776.794",
            "text": "Đội Phó: Nguyễn Toàn Thắng; SĐT: 0866.776.794"
          },
          {
            "raw": "- Đội Phó: Phạm Văn Giáp; SĐT: 0969.803.888",
            "text": "Đội Phó: Phạm Văn Giáp; SĐT: 0969.803.888"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.760.222; 02036.265.001",
            "text": "Tổ trực vận hành SĐT: 02033.760.222; 02036.265.001"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Móng Cái:",
        "raw_title": "45.6. Cấp nước: Xí nghiệp nước Móng Cái:",
        "contacts": [
          {
            "raw": "- Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559",
            "text": "Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "45.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Hải Hà; SĐT: 0966.311.313",
            "text": "Trung tâm y tế huyện Hải Hà; SĐT: 0966.311.313"
          },
          {
            "raw": "- Bệnh viện đa khoa khu vực Móng Cái cơ sở 2; SĐT: 0983.169.668, 0976.091.163",
            "text": "Bệnh viện đa khoa khu vực Móng Cái cơ sở 2; SĐT: 0983.169.668, 0976.091.163"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "45.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Đặng Thái Chiến, phương tiện: 01 Máy xúc; SĐT: 0865.521.831",
            "text": "Đặng Thái Chiến, phương tiện: 01 Máy xúc; SĐT: 0865.521.831"
          },
          {
            "raw": "- Đặng Văn Quân, phương tiện: 01 Máy xúc ; SĐT: 0795.378.345",
            "text": "Đặng Văn Quân, phương tiện: 01 Máy xúc ; SĐT: 0795.378.345"
          },
          {
            "raw": "- Trương Nhật Khánh, phương tiện: 01 Máy xúc ; SĐT: 0972.184.233",
            "text": "Trương Nhật Khánh, phương tiện: 01 Máy xúc ; SĐT: 0972.184.233"
          },
          {
            "raw": "- Trần Văn Ngọc, phương tiện: 01 Máy xúc ; SĐT: 0935.278.815",
            "text": "Trần Văn Ngọc, phương tiện: 01 Máy xúc ; SĐT: 0935.278.815"
          },
          {
            "raw": "- Nguyễn Giáp Quyền, phương tiện: 01 Máy xúc ; SĐT: 0972.557.744",
            "text": "Nguyễn Giáp Quyền, phương tiện: 01 Máy xúc ; SĐT: 0972.557.744"
          },
          {
            "raw": "- Đào Văn Đồng, phương tiện: 01 Máy xúc ; SĐT: 0968.243.208",
            "text": "Đào Văn Đồng, phương tiện: 01 Máy xúc ; SĐT: 0968.243.208"
          },
          {
            "raw": "- Vũ Văn Bình, phương tiện: Máy xúc ; SĐT: 0365.470.408",
            "text": "Vũ Văn Bình, phương tiện: Máy xúc ; SĐT: 0365.470.408"
          },
          {
            "raw": "- Phùn Văn Đức, phương tiện: 01 Máy xúc; SĐT: 0969.386.566",
            "text": "Phùn Văn Đức, phương tiện: 01 Máy xúc; SĐT: 0969.386.566"
          }
        ]
      }
    ]
  },
  {
    "id": 46,
    "type": "XÃ",
    "name": "QUẢNG HÀ",
    "raw_title": "46. XÃ QUẢNG HÀ",
    "district": "Huyện Hải Hà",
    "team": "Đội KV8",
    "components": [
      "Quảng Hà",
      "Quảng Minh",
      "Quảng Chính",
      "Quảng Phong"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "46.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Hà Văn Vũ; SĐT: 0904.638.006",
            "text": "Đội trưởng: Hà Văn Vũ; SĐT: 0904.638.006"
          },
          {
            "raw": "- Phó Đội trưởng: Chu Văn Đặng; SĐT: 0973.586.114",
            "text": "Phó Đội trưởng: Chu Văn Đặng; SĐT: 0973.586.114"
          },
          {
            "raw": "- Cán bộ: Nguyễn Chiến Thắng; SĐT: 0387.260.990",
            "text": "Cán bộ: Nguyễn Chiến Thắng; SĐT: 0387.260.990"
          },
          {
            "raw": "- Trực ban: 02033.763.114",
            "text": "Trực ban: 02033.763.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Quảng Hà",
        "raw_title": "46.2. Công an xã Quảng Hà",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Nguyễn Mạnh Hùng; SĐT: 0976.860.999",
            "text": "Trưởng CAX: Nguyễn Mạnh Hùng; SĐT: 0976.860.999"
          },
          {
            "raw": "- Phó CAP: Ngô Minh Ngọc; SĐT: 0975.221.118",
            "text": "Phó CAP: Ngô Minh Ngọc; SĐT: 0975.221.118"
          },
          {
            "raw": "- Phó CAP: Vũ Đức Thuận; SĐT: 0966.118.816",
            "text": "Phó CAP: Vũ Đức Thuận; SĐT: 0966.118.816"
          },
          {
            "raw": "- Phó CAP: Phạm Đức Thụy; SĐT: 0912.382.362",
            "text": "Phó CAP: Phạm Đức Thụy; SĐT: 0912.382.362"
          },
          {
            "raw": "- Phó CAP: Phạm Trọng Mạnh; SĐT: 0936.871.886",
            "text": "Phó CAP: Phạm Trọng Mạnh; SĐT: 0936.871.886"
          },
          {
            "raw": "- Phó CAP: Trường Văn Cường; SĐT: 0354.424.763",
            "text": "Phó CAP: Trường Văn Cường; SĐT: 0354.424.763"
          },
          {
            "raw": "- Trực ban: 02033.879.063; 02033.901.816",
            "text": "Trực ban: 02033.879.063; 02033.901.816"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Quảng Hà",
        "raw_title": "46.3. Ủy ban nhân dân xã Quảng Hà",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy xã: Hoàng Trung Kiên; SĐT: 0913.388.145",
            "text": "Bí thư Đảng ủy xã: Hoàng Trung Kiên; SĐT: 0913.388.145"
          },
          {
            "raw": "- Phó Bí thư TT, Chủ tịch HĐND xã: Bùi Văn Vượng; SĐT: 0972.421.692",
            "text": "Phó Bí thư TT, Chủ tịch HĐND xã: Bùi Văn Vượng; SĐT: 0972.421.692"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Hoàng Phi Trường; SĐT: 0916.081.958",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Hoàng Phi Trường; SĐT: 0916.081.958"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Nguyễn Tiến Đức; SĐT: 0979.328.739",
            "text": "Phó Chủ tịch HĐND xã: Nguyễn Tiến Đức; SĐT: 0979.328.739"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Nguyễn Văn Đông; SĐT: 0837.671.888",
            "text": "Phó Chủ tịch UBND xã: Nguyễn Văn Đông; SĐT: 0837.671.888"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Nguyễn Đức Thiện; SĐT: 0913.506.443",
            "text": "Phó Chủ tịch UBND xã: Nguyễn Đức Thiện; SĐT: 0913.506.443"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "46.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hải Hà:",
        "raw_title": "46.5. Điện lực: Đội quản lý điện lực khu vực Hải Hà:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Cao Hùng; SĐT: 0963.376.888",
            "text": "Đội trưởng: Nguyễn Cao Hùng; SĐT: 0963.376.888"
          },
          {
            "raw": "- Đội Phó: Nguyễn Toàn Thắng; SĐT: 0866.776.794",
            "text": "Đội Phó: Nguyễn Toàn Thắng; SĐT: 0866.776.794"
          },
          {
            "raw": "- Đội Phó: Phạm Văn Giáp; SĐT: 0969.803.888",
            "text": "Đội Phó: Phạm Văn Giáp; SĐT: 0969.803.888"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.760.222; 02036.265.001",
            "text": "Tổ trực vận hành SĐT: 02033.760.222; 02036.265.001"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Móng Cái:",
        "raw_title": "46.6. Cấp nước: Xí nghiệp nước Móng Cái:",
        "contacts": [
          {
            "raw": "- Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559",
            "text": "Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "46.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Hải Hà; SĐT: 0966.311.313",
            "text": "Trung tâm y tế huyện Hải Hà; SĐT: 0966.311.313"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "46.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 47,
    "type": "XÃ",
    "name": "ĐƯỜNG HOA",
    "raw_title": "47. XÃ ĐƯỜNG HOA",
    "district": "Huyện Hải Hà",
    "team": "Đội KV8",
    "components": [
      "Đường Hoa",
      "Quảng Sơn",
      "Quảng Long"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "47.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Hà Văn Vũ; SĐT: 0904.638.006",
            "text": "Đội trưởng: Hà Văn Vũ; SĐT: 0904.638.006"
          },
          {
            "raw": "- Phó Đội trưởng: Chu Văn Đặng; SĐT: 0973.586.114",
            "text": "Phó Đội trưởng: Chu Văn Đặng; SĐT: 0973.586.114"
          },
          {
            "raw": "- Cán bộ: Nguyễn Chiến Thắng; SĐT: 0387.260.990",
            "text": "Cán bộ: Nguyễn Chiến Thắng; SĐT: 0387.260.990"
          },
          {
            "raw": "- Trực ban: 02033.763.114",
            "text": "Trực ban: 02033.763.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Đường Hoa",
        "raw_title": "47.2. Công an xã Đường Hoa",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Nguyễn Văn Nam; SĐT: 0936.852.636",
            "text": "Trưởng CAX: Nguyễn Văn Nam; SĐT: 0936.852.636"
          },
          {
            "raw": "- Phó CAP: Lê Thanh Quyết; SĐT: 0934.633.818",
            "text": "Phó CAP: Lê Thanh Quyết; SĐT: 0934.633.818"
          },
          {
            "raw": "- Phó CAP: Phùn Quay Phạt; SĐT: 0389.646.646",
            "text": "Phó CAP: Phùn Quay Phạt; SĐT: 0389.646.646"
          },
          {
            "raw": "- Phó CAP: Nguyễn Phi Cường; SĐT: 0983.025.113",
            "text": "Phó CAP: Nguyễn Phi Cường; SĐT: 0983.025.113"
          },
          {
            "raw": "- Phó CAP: Phùn Phúc Khường; SĐT: 0386.154.383",
            "text": "Phó CAP: Phùn Phúc Khường; SĐT: 0386.154.383"
          },
          {
            "raw": "- Phó CAP: Lê Hồng Hà; SĐT: 0936.998.000",
            "text": "Phó CAP: Lê Hồng Hà; SĐT: 0936.998.000"
          },
          {
            "raw": "- Trực ban: 02033.901.016; 02033.900.048; 02033.901.018",
            "text": "Trực ban: 02033.901.016; 02033.900.048; 02033.901.018"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Đường Hoa",
        "raw_title": "47.3. Ủy ban nhân dân xã Đường Hoa",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Hồ Đức Quang; SĐT: 0913.265.968",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Hồ Đức Quang; SĐT: 0913.265.968"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Nguyễn Kim Quy; SĐT: 0355.742.828",
            "text": "Phó Bí thư TT Đảng ủy: Nguyễn Kim Quy; SĐT: 0355.742.828"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Trần Đức Dũng; SĐT: 0913.371.825",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Trần Đức Dũng; SĐT: 0913.371.825"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Đinh Khắc Hùng; SĐT: 0976.852.951",
            "text": "Phó Chủ tịch HĐND xã: Đinh Khắc Hùng; SĐT: 0976.852.951"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Nguyễn Sơn Hà; SĐT: 0973.961.805",
            "text": "Phó Chủ tịch UBND xã: Nguyễn Sơn Hà; SĐT: 0973.961.805"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Đặng Tuấn Hiệp; SĐT: 0978.135.333",
            "text": "Phó Chủ tịch UBND xã: Đặng Tuấn Hiệp; SĐT: 0978.135.333"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "47.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hải Hà:",
        "raw_title": "47.5. Điện lực: Đội quản lý điện lực khu vực Hải Hà:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Cao Hùng; SĐT: 0963.376.888",
            "text": "Đội trưởng: Nguyễn Cao Hùng; SĐT: 0963.376.888"
          },
          {
            "raw": "- Đội Phó: Nguyễn Toàn Thắng; SĐT: 0866.776.794",
            "text": "Đội Phó: Nguyễn Toàn Thắng; SĐT: 0866.776.794"
          },
          {
            "raw": "- Đội Phó: Phạm Văn Giáp; SĐT: 0969.803.888",
            "text": "Đội Phó: Phạm Văn Giáp; SĐT: 0969.803.888"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.760.222; 02036.265.001",
            "text": "Tổ trực vận hành SĐT: 02033.760.222; 02036.265.001"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Móng Cái:",
        "raw_title": "47.6. Cấp nước: Xí nghiệp nước Móng Cái:",
        "contacts": [
          {
            "raw": "- Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559",
            "text": "Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "47.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Hải Hà; SĐT: 0966.311.313",
            "text": "Trung tâm y tế huyện Hải Hà; SĐT: 0966.311.313"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "47.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 48,
    "type": "XÃ",
    "name": "CÁI CHIÊN",
    "raw_title": "48. XÃ CÁI CHIÊN",
    "district": "Huyện Hải Hà",
    "team": "Đội KV8",
    "components": [
      "Cái Chiên"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "48.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Hà Văn Vũ; SĐT: 0904.638.006",
            "text": "Đội trưởng: Hà Văn Vũ; SĐT: 0904.638.006"
          },
          {
            "raw": "- Phó Đội trưởng: Chu Văn Đặng; SĐT: 0973.586.114",
            "text": "Phó Đội trưởng: Chu Văn Đặng; SĐT: 0973.586.114"
          },
          {
            "raw": "- Cán bộ: Nguyễn Chiến Thắng; SĐT: 0387.260.990",
            "text": "Cán bộ: Nguyễn Chiến Thắng; SĐT: 0387.260.990"
          },
          {
            "raw": "- Trực ban: 02033.763.114",
            "text": "Trực ban: 02033.763.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Cái Chiên",
        "raw_title": "48.2. Công an xã Cái Chiên",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Lê Văn Trà; SĐT: 0904.385.856",
            "text": "Trưởng CAX: Lê Văn Trà; SĐT: 0904.385.856"
          },
          {
            "raw": "- Phó CAP: Hoàng Chí Công; SĐT: 0981.325.288",
            "text": "Phó CAP: Hoàng Chí Công; SĐT: 0981.325.288"
          },
          {
            "raw": "- Phó CAP: Nguyễn Đình Chiến; SĐT: 0966.657.766",
            "text": "Phó CAP: Nguyễn Đình Chiến; SĐT: 0966.657.766"
          },
          {
            "raw": "- Phó CAP: Nguyễn Mạnh Cường; SĐT: 0983.136.028",
            "text": "Phó CAP: Nguyễn Mạnh Cường; SĐT: 0983.136.028"
          },
          {
            "raw": "- Phó CAP: Phùn Văn Đức; SĐT: 0772.036.888",
            "text": "Phó CAP: Phùn Văn Đức; SĐT: 0772.036.888"
          },
          {
            "raw": "- Phó CAP: Đặng Anh Quý; SĐT: 0888.893.393",
            "text": "Phó CAP: Đặng Anh Quý; SĐT: 0888.893.393"
          },
          {
            "raw": "- Trực ban: 02033.901.339",
            "text": "Trực ban: 02033.901.339"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Cái Chiên",
        "raw_title": "48.3. Ủy ban nhân dân xã Cái Chiên",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Hoàng Văn Hải; SĐT: 0915.888.169",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Hoàng Văn Hải; SĐT: 0915.888.169"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Bùi Thanh Tuấn; SĐT: 0978.749.499",
            "text": "Phó Bí thư TT Đảng ủy: Bùi Thanh Tuấn; SĐT: 0978.749.499"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Đinh Quang Mạnh; SĐT: 0936.905.463",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Đinh Quang Mạnh; SĐT: 0936.905.463"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Bùi Xuân Hưng; SĐT: 0395.039.576",
            "text": "Phó Chủ tịch HĐND xã: Bùi Xuân Hưng; SĐT: 0395.039.576"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Đồng Mạnh Hùng; SĐT: 0915.196.286",
            "text": "Phó Chủ tịch UBND xã: Đồng Mạnh Hùng; SĐT: 0915.196.286"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Nguyễn Hải Hà; SĐT: 0985.881.180",
            "text": "Phó Chủ tịch UBND xã: Nguyễn Hải Hà; SĐT: 0985.881.180"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "48.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Hải Hà:",
        "raw_title": "48.5. Điện lực: Đội quản lý điện lực khu vực Hải Hà:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Cao Hùng; SĐT: 0963.376.888",
            "text": "Đội trưởng: Nguyễn Cao Hùng; SĐT: 0963.376.888"
          },
          {
            "raw": "- Đội Phó: Nguyễn Toàn Thắng; SĐT: 0866.776.794",
            "text": "Đội Phó: Nguyễn Toàn Thắng; SĐT: 0866.776.794"
          },
          {
            "raw": "- Đội Phó: Phạm Văn Giáp; SĐT: 0969.803.888",
            "text": "Đội Phó: Phạm Văn Giáp; SĐT: 0969.803.888"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.760.222; 02036.265.001",
            "text": "Tổ trực vận hành SĐT: 02033.760.222; 02036.265.001"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Không có thông tin:",
        "raw_title": "48.6. Cấp nước: Không có thông tin:",
        "contacts": []
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "48.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế huyện Hải Hà; SĐT: 0966.311.313",
            "text": "Trung tâm y tế huyện Hải Hà; SĐT: 0966.311.313"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "48.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 49,
    "type": "XÃ",
    "name": "HẢI NINH",
    "raw_title": "49. XÃ HẢI NINH",
    "district": "Thành phố Móng Cái",
    "team": "Đội KV9",
    "components": [
      "Hải Ninh",
      "Quảng Nghĩa",
      "Hải Tiến"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "49.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Vũ Đình Hiệp; SĐT: 0936.085.533",
            "text": "Đội trưởng: Vũ Đình Hiệp; SĐT: 0936.085.533"
          },
          {
            "raw": "- Phó Đội trưởng: Ngô Quý Hải; SĐT: 0988.110.464",
            "text": "Phó Đội trưởng: Ngô Quý Hải; SĐT: 0988.110.464"
          },
          {
            "raw": "- Cán bộ: Phạm Quang Vinh; SĐT: 0787.277.166",
            "text": "Cán bộ: Phạm Quang Vinh; SĐT: 0787.277.166"
          },
          {
            "raw": "- Trực ban: 02033.886.114",
            "text": "Trực ban: 02033.886.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Hải Ninh",
        "raw_title": "49.2. Công an xã Hải Ninh",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Đặng Ngọc Nam; SĐT: 0982.856.111",
            "text": "Trưởng CAX: Đặng Ngọc Nam; SĐT: 0982.856.111"
          },
          {
            "raw": "- Phó CAP: Lê Thanh Hà; SĐT: 0963.051.858",
            "text": "Phó CAP: Lê Thanh Hà; SĐT: 0963.051.858"
          },
          {
            "raw": "- Phó CAP: Nguyễn Thế Dũng; SĐT: 0359.631.874",
            "text": "Phó CAP: Nguyễn Thế Dũng; SĐT: 0359.631.874"
          },
          {
            "raw": "- Phó CAP: Hà Minh Tuấn; SĐT: 0904.612.989",
            "text": "Phó CAP: Hà Minh Tuấn; SĐT: 0904.612.989"
          },
          {
            "raw": "- Phó CAP: Nguyễn Minh Tuấn; SĐT: 0355.282.848",
            "text": "Phó CAP: Nguyễn Minh Tuấn; SĐT: 0355.282.848"
          },
          {
            "raw": "- Phó CAP: Vụ Hữu Hưng; SĐT: 0936.631.838",
            "text": "Phó CAP: Vụ Hữu Hưng; SĐT: 0936.631.838"
          },
          {
            "raw": "- Trực ban: 02033.901.918; 02033.901.929",
            "text": "Trực ban: 02033.901.918; 02033.901.929"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Hải Ninh",
        "raw_title": "49.3. Ủy ban nhân dân xã Hải Ninh",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Nguyễn Thị Ninh; SĐT: 0904.015.818",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Nguyễn Thị Ninh; SĐT: 0904.015.818"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Nguyễn Thanh Tùng; SĐT: 0904.842.388",
            "text": "Phó Bí thư TT Đảng ủy: Nguyễn Thanh Tùng; SĐT: 0904.842.388"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Lê Văn Vĩnh; SĐT: 0904.170.939",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Lê Văn Vĩnh; SĐT: 0904.170.939"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Vũ Văn Sơn; SĐT: 0904.025.568",
            "text": "Phó Chủ tịch HĐND xã: Vũ Văn Sơn; SĐT: 0904.025.568"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Vũ Tuấn Anh; SĐT: 0978.349.888",
            "text": "Phó Chủ tịch UBND xã: Vũ Tuấn Anh; SĐT: 0978.349.888"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Bùi Huy Hoài; SĐT: 0912.123.895",
            "text": "Phó Chủ tịch UBND xã: Bùi Huy Hoài; SĐT: 0912.123.895"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "49.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Móng Cái:",
        "raw_title": "49.5. Điện lực: Đội quản lý điện lực khu vực Móng Cái:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Minh Đức; SĐT: 0963.595.090",
            "text": "Đội trưởng: Nguyễn Minh Đức; SĐT: 0963.595.090"
          },
          {
            "raw": "- Đội Phó: Nguyễn Mạnh Cường; SĐT: 0982.585.388",
            "text": "Đội Phó: Nguyễn Mạnh Cường; SĐT: 0982.585.388"
          },
          {
            "raw": "- Đội Phó: Nguyễn Hùng Điệp; SĐT: 0963.031.199",
            "text": "Đội Phó: Nguyễn Hùng Điệp; SĐT: 0963.031.199"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.779.555; 02036.263.555",
            "text": "Tổ trực vận hành SĐT: 02033.779.555; 02036.263.555"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Móng Cái:",
        "raw_title": "49.6. Cấp nước: Xí nghiệp nước Móng Cái:",
        "contacts": [
          {
            "raw": "- Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559",
            "text": "Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "49.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thành phố Móng Cái; SĐT: 02032.207.488",
            "text": "Trung tâm y tế thành phố Móng Cái; SĐT: 02032.207.488"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "49.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 50,
    "type": "XÃ",
    "name": "HẢI SƠN",
    "raw_title": "50. XÃ HẢI SƠN",
    "district": "Thành phố Móng Cái",
    "team": "Đội KV9",
    "components": [
      "Hải Sơn",
      "Bắc Sơn"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "50.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Vũ Đình Hiệp; SĐT: 0936.085.533",
            "text": "Đội trưởng: Vũ Đình Hiệp; SĐT: 0936.085.533"
          },
          {
            "raw": "- Phó Đội trưởng: Ngô Quý Hải; SĐT: 0988.110.464",
            "text": "Phó Đội trưởng: Ngô Quý Hải; SĐT: 0988.110.464"
          },
          {
            "raw": "- Cán bộ: Phạm Quang Vinh; SĐT: 0787.277.166",
            "text": "Cán bộ: Phạm Quang Vinh; SĐT: 0787.277.166"
          },
          {
            "raw": "- Trực ban: 02033.886.114",
            "text": "Trực ban: 02033.886.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Hải Sơn",
        "raw_title": "50.2. Công an xã Hải Sơn",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Hà Huy Hoàng; SĐT: 0988.562.888",
            "text": "Trưởng CAX: Hà Huy Hoàng; SĐT: 0988.562.888"
          },
          {
            "raw": "- Phó CAP: Hà Văn Dưỡng; SĐT: 0912.073.333",
            "text": "Phó CAP: Hà Văn Dưỡng; SĐT: 0912.073.333"
          },
          {
            "raw": "- Phó CAP: Phùn Dung Hiến; SĐT: 0973.474.043",
            "text": "Phó CAP: Phùn Dung Hiến; SĐT: 0973.474.043"
          },
          {
            "raw": "- Phó CAP: Phạm Văn Quý; SĐT: 0912.457.696",
            "text": "Phó CAP: Phạm Văn Quý; SĐT: 0912.457.696"
          },
          {
            "raw": "- Phó CAP: Đoàn Duy Hùng; SĐT: 0986.216.668",
            "text": "Phó CAP: Đoàn Duy Hùng; SĐT: 0986.216.668"
          },
          {
            "raw": "- Phó CAP: Nguyễn Quang Hưng; SĐT: 0983.934.679",
            "text": "Phó CAP: Nguyễn Quang Hưng; SĐT: 0983.934.679"
          },
          {
            "raw": "- Trực ban: 0203.39003.976; 02033.900.050",
            "text": "Trực ban: 0203.39003.976; 02033.900.050"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Hải Sơn",
        "raw_title": "50.3. Ủy ban nhân dân xã Hải Sơn",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Đỗ Viết Mạnh; SĐT: 0904.009.168",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Đỗ Viết Mạnh; SĐT: 0904.009.168"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Dương Trí Tuệ; SĐT: 0857.556.688",
            "text": "Phó Bí thư TT Đảng ủy: Dương Trí Tuệ; SĐT: 0857.556.688"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Lê Văn Cường; SĐT: 0912.085.092",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Lê Văn Cường; SĐT: 0912.085.092"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Nịnh Văn Sáng; SĐT: 0355.019.836",
            "text": "Phó Chủ tịch HĐND xã: Nịnh Văn Sáng; SĐT: 0355.019.836"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Hoàng Anh Ngọc; SĐT: 0916.881.950",
            "text": "Phó Chủ tịch UBND xã: Hoàng Anh Ngọc; SĐT: 0916.881.950"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Lê Văn Hùng; SĐT: 0984.343.682",
            "text": "Phó Chủ tịch UBND xã: Lê Văn Hùng; SĐT: 0984.343.682"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "50.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Móng Cái:",
        "raw_title": "50.5. Điện lực: Đội quản lý điện lực khu vực Móng Cái:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Minh Đức; SĐT: 0963.595.090",
            "text": "Đội trưởng: Nguyễn Minh Đức; SĐT: 0963.595.090"
          },
          {
            "raw": "- Đội Phó: Nguyễn Mạnh Cường; SĐT: 0982.585.388",
            "text": "Đội Phó: Nguyễn Mạnh Cường; SĐT: 0982.585.388"
          },
          {
            "raw": "- Đội Phó: Nguyễn Hùng Điệp; SĐT: 0963.031.199",
            "text": "Đội Phó: Nguyễn Hùng Điệp; SĐT: 0963.031.199"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.779.555; 02036.263.555",
            "text": "Tổ trực vận hành SĐT: 02033.779.555; 02036.263.555"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Móng Cái:",
        "raw_title": "50.6. Cấp nước: Xí nghiệp nước Móng Cái:",
        "contacts": [
          {
            "raw": "- Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559",
            "text": "Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "50.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thành phố Móng Cái; SĐT: 02032.207.488",
            "text": "Trung tâm y tế thành phố Móng Cái; SĐT: 02032.207.488"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "50.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 51,
    "type": "PHƯỜNG",
    "name": "MÓNG CÁI 1",
    "raw_title": "51. PHƯỜNG MÓNG CÁI 1",
    "district": "Thành phố Móng Cái",
    "team": "Đội KV9",
    "components": [
      "Móng Cái 1",
      "Trần Phú",
      "Hải Hòa",
      "Bình Ngọc",
      "Trà Cổ",
      "Hải Xuân"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "51.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Vũ Đình Hiệp; SĐT: 0936.085.533",
            "text": "Đội trưởng: Vũ Đình Hiệp; SĐT: 0936.085.533"
          },
          {
            "raw": "- Phó Đội trưởng: Ngô Quý Hải; SĐT: 0988.110.464",
            "text": "Phó Đội trưởng: Ngô Quý Hải; SĐT: 0988.110.464"
          },
          {
            "raw": "- Cán bộ: Phạm Quang Vinh; SĐT: 0787.277.166",
            "text": "Cán bộ: Phạm Quang Vinh; SĐT: 0787.277.166"
          },
          {
            "raw": "- Trực ban: 02033.886.114",
            "text": "Trực ban: 02033.886.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Móng Cái 1",
        "raw_title": "51.2. Công an phường Móng Cái 1",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Trần Quang Tiến; SĐT: 0906.068.255",
            "text": "Trưởng CAP: Trần Quang Tiến; SĐT: 0906.068.255"
          },
          {
            "raw": "- Phó CAP: Đặng Hồng Sơn; SĐT: 0913.355.147",
            "text": "Phó CAP: Đặng Hồng Sơn; SĐT: 0913.355.147"
          },
          {
            "raw": "- Phó CAP: Phạm Minh Hiếu; SĐT: 0377.189.606",
            "text": "Phó CAP: Phạm Minh Hiếu; SĐT: 0377.189.606"
          },
          {
            "raw": "- Phó CAP: Lã Lê Hường; SĐT: 0983.226.363",
            "text": "Phó CAP: Lã Lê Hường; SĐT: 0983.226.363"
          },
          {
            "raw": "- Phó CAP: Nguyễn Xuân Hòa; SĐT: 0942.626.656",
            "text": "Phó CAP: Nguyễn Xuân Hòa; SĐT: 0942.626.656"
          },
          {
            "raw": "- Phó CAP: Hoàng Đức Nghí; SĐT: 0979.090.907",
            "text": "Phó CAP: Hoàng Đức Nghí; SĐT: 0979.090.907"
          },
          {
            "raw": "- Trực ban: 02033.881.753; 02033.780.136; 02033.885.526; 02033.901.939",
            "text": "Trực ban: 02033.881.753; 02033.780.136; 02033.885.526; 02033.901.939"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Móng Cái 1",
        "raw_title": "51.3. Ủy ban nhân dân phường Móng Cái 1",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Hồ Quang Huy; SĐT: 0913.268.567",
            "text": "Bí thư, Chủ tịch HĐND phường: Hồ Quang Huy; SĐT: 0913.268.567"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Trần Bích Ngọc; SĐT: 0913.396.031",
            "text": "Phó Bí thư TT Đảng ủy: Trần Bích Ngọc; SĐT: 0913.396.031"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Đỗ Văn Tuấn; SĐT: 0936.912.829",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Đỗ Văn Tuấn; SĐT: 0936.912.829"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Phùng Thị Thu Vân; SĐT: 0906.017.969",
            "text": "Phó Chủ tịch HĐND phường: Phùng Thị Thu Vân; SĐT: 0906.017.969"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Thanh Hải; SĐT: 0913.678.990",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Thanh Hải; SĐT: 0913.678.990"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Hoàng Hải Long; SĐT: 0978.792.888",
            "text": "Phó Chủ tịch UBND phường: Hoàng Hải Long; SĐT: 0978.792.888"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "51.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Móng Cái:",
        "raw_title": "51.5. Điện lực: Đội quản lý điện lực khu vực Móng Cái:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Minh Đức; SĐT: 0963.595.090",
            "text": "Đội trưởng: Nguyễn Minh Đức; SĐT: 0963.595.090"
          },
          {
            "raw": "- Đội Phó: Nguyễn Mạnh Cường; SĐT: 0982.585.388",
            "text": "Đội Phó: Nguyễn Mạnh Cường; SĐT: 0982.585.388"
          },
          {
            "raw": "- Đội Phó: Nguyễn Hùng Điệp; SĐT: 0963.031.199",
            "text": "Đội Phó: Nguyễn Hùng Điệp; SĐT: 0963.031.199"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.779.555; 02036.263.555",
            "text": "Tổ trực vận hành SĐT: 02033.779.555; 02036.263.555"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Móng Cái:",
        "raw_title": "51.6. Cấp nước: Xí nghiệp nước Móng Cái:",
        "contacts": [
          {
            "raw": "- Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559",
            "text": "Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "51.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thành phố Móng Cái; SĐT: 02032.207.488",
            "text": "Trung tâm y tế thành phố Móng Cái; SĐT: 02032.207.488"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "51.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  },
  {
    "id": 52,
    "type": "PHƯỜNG",
    "name": "MÓNG CÁI 2",
    "raw_title": "52. PHƯỜNG MÓNG CÁI 2",
    "district": "Thành phố Móng Cái",
    "team": "Đội KV9",
    "components": [
      "Móng Cái 2",
      "Ninh Dương",
      "Ka Long",
      "Vạn Ninh"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "52.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Vũ Đình Hiệp; SĐT: 0936.085.533",
            "text": "Đội trưởng: Vũ Đình Hiệp; SĐT: 0936.085.533"
          },
          {
            "raw": "- Phó Đội trưởng: Ngô Quý Hải; SĐT: 0988.110.464",
            "text": "Phó Đội trưởng: Ngô Quý Hải; SĐT: 0988.110.464"
          },
          {
            "raw": "- Cán bộ: Phạm Quang Vinh; SĐT: 0787.277.166",
            "text": "Cán bộ: Phạm Quang Vinh; SĐT: 0787.277.166"
          },
          {
            "raw": "- Trực ban: 02033.886.114",
            "text": "Trực ban: 02033.886.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Móng Cái 2",
        "raw_title": "52.2. Công an phường Móng Cái 2",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Phạm Văn Hưởng; SĐT: 0773.385.688",
            "text": "Trưởng CAP: Phạm Văn Hưởng; SĐT: 0773.385.688"
          },
          {
            "raw": "- Phó CAP: Vũ Tiến Dũng; SĐT: 0984.666.558",
            "text": "Phó CAP: Vũ Tiến Dũng; SĐT: 0984.666.558"
          },
          {
            "raw": "- Phó CAP: Nguyễn Văn Huy; SĐT: 0961.103.292",
            "text": "Phó CAP: Nguyễn Văn Huy; SĐT: 0961.103.292"
          },
          {
            "raw": "- Phó CAP: Lê Thị Hương; SĐT: 0986.006.001",
            "text": "Phó CAP: Lê Thị Hương; SĐT: 0986.006.001"
          },
          {
            "raw": "- Phó CAP: Phạm Công Minh; SĐT: 0976.606.968",
            "text": "Phó CAP: Phạm Công Minh; SĐT: 0976.606.968"
          },
          {
            "raw": "- Phó CAP: Nguyễn Thành Quang; SĐT: 0904.088.528",
            "text": "Phó CAP: Nguyễn Thành Quang; SĐT: 0904.088.528"
          },
          {
            "raw": "- Trực ban: 02033.883.610; 02033.901.859",
            "text": "Trực ban: 02033.883.610; 02033.901.859"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Móng Cái 2",
        "raw_title": "52.3. Ủy ban nhân dân phường Móng Cái 2",
        "contacts": [
          {
            "raw": "- Bí thư, Chủ tịch HĐND phường: Vũ Thị Thanh Thảo; SĐT: 0904.256.988",
            "text": "Bí thư, Chủ tịch HĐND phường: Vũ Thị Thanh Thảo; SĐT: 0904.256.988"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Phạm Thị Oanh; SĐT: 0984.081.666",
            "text": "Phó Bí thư TT Đảng ủy: Phạm Thị Oanh; SĐT: 0984.081.666"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Phạm Văn Hoan; SĐT: 0903.462.243",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Phạm Văn Hoan; SĐT: 0903.462.243"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Lê Đức Tâm; SĐT: 0338.151.888",
            "text": "Phó Chủ tịch HĐND phường: Lê Đức Tâm; SĐT: 0338.151.888"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Đức Việt; SĐT: 0903.408.068",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Đức Việt; SĐT: 0903.408.068"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Nguyễn Tiến Thái; SĐT: 0903.459.609",
            "text": "Phó Chủ tịch UBND phường: Nguyễn Tiến Thái; SĐT: 0903.459.609"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "52.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Móng Cái:",
        "raw_title": "52.5. Điện lực: Đội quản lý điện lực khu vực Móng Cái:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Minh Đức; SĐT: 0963.595.090",
            "text": "Đội trưởng: Nguyễn Minh Đức; SĐT: 0963.595.090"
          },
          {
            "raw": "- Đội Phó: Nguyễn Mạnh Cường; SĐT: 0982.585.388",
            "text": "Đội Phó: Nguyễn Mạnh Cường; SĐT: 0982.585.388"
          },
          {
            "raw": "- Đội Phó: Nguyễn Hùng Điệp; SĐT: 0963.031.199",
            "text": "Đội Phó: Nguyễn Hùng Điệp; SĐT: 0963.031.199"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.779.555; 02036.263.555",
            "text": "Tổ trực vận hành SĐT: 02033.779.555; 02036.263.555"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Móng Cái:",
        "raw_title": "52.6. Cấp nước: Xí nghiệp nước Móng Cái:",
        "contacts": [
          {
            "raw": "- Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559",
            "text": "Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "52.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thành phố Móng Cái; SĐT: 02032.207.488",
            "text": "Trung tâm y tế thành phố Móng Cái; SĐT: 02032.207.488"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "52.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin.",
            "text": "Không có thông tin."
          }
        ]
      }
    ]
  },
  {
    "id": 53,
    "type": "PHƯỜNG",
    "name": "MÓNG CÁI 3",
    "raw_title": "53. PHƯỜNG MÓNG CÁI 3",
    "district": "Thành phố Móng Cái",
    "team": "Đội KV9",
    "components": [
      "Móng Cái 3",
      "Hải Yên",
      "Hải Đông"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "53.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Vũ Đình Hiệp; SĐT: 0936.085.533",
            "text": "Đội trưởng: Vũ Đình Hiệp; SĐT: 0936.085.533"
          },
          {
            "raw": "- Phó Đội trưởng: Ngô Quý Hải; SĐT: 0988.110.464",
            "text": "Phó Đội trưởng: Ngô Quý Hải; SĐT: 0988.110.464"
          },
          {
            "raw": "- Cán bộ: Phạm Quang Vinh; SĐT: 0787.277.166",
            "text": "Cán bộ: Phạm Quang Vinh; SĐT: 0787.277.166"
          },
          {
            "raw": "- Trực ban: 02033.886.114",
            "text": "Trực ban: 02033.886.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an phường Móng Cái 3",
        "raw_title": "53.2. Công an phường Móng Cái 3",
        "contacts": [
          {
            "raw": "- Trưởng CAP: Phạm Thị Hoài Thu; SĐT: 0913.268.054",
            "text": "Trưởng CAP: Phạm Thị Hoài Thu; SĐT: 0913.268.054"
          },
          {
            "raw": "- Phó CAP: Nguyễn Tiến Dũng; SĐT: 0987.987.005",
            "text": "Phó CAP: Nguyễn Tiến Dũng; SĐT: 0987.987.005"
          },
          {
            "raw": "- Phó CAP: Nguyễn Duy Linh; SĐT: 0915.697.818",
            "text": "Phó CAP: Nguyễn Duy Linh; SĐT: 0915.697.818"
          },
          {
            "raw": "- Phó CAP: Đỗ Xuân Trường; SĐT: 0904.021.398",
            "text": "Phó CAP: Đỗ Xuân Trường; SĐT: 0904.021.398"
          },
          {
            "raw": "- Phó CAP: Vũ Hoàng Giang; SĐT: 0923.411.888",
            "text": "Phó CAP: Vũ Hoàng Giang; SĐT: 0923.411.888"
          },
          {
            "raw": "- Phó CAP: Vũ Tùng Lâm; SĐT: 0983.671.690",
            "text": "Phó CAP: Vũ Tùng Lâm; SĐT: 0983.671.690"
          },
          {
            "raw": "- Trực ban: 02033.773.908; 02033.901.019",
            "text": "Trực ban: 02033.773.908; 02033.901.019"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân phường Móng Cái 3",
        "raw_title": "53.3. Ủy ban nhân dân phường Móng Cái 3",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy: Nguyễn Phúc Vinh; SĐT: 0913.355.939",
            "text": "Bí thư Đảng ủy: Nguyễn Phúc Vinh; SĐT: 0913.355.939"
          },
          {
            "raw": "- Phó Bí thư TT, Chủ tịch HĐND: Dương Thị Huệ; SĐT: 0912.092.478",
            "text": "Phó Bí thư TT, Chủ tịch HĐND: Dương Thị Huệ; SĐT: 0912.092.478"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND phường: Đỗ Thị Hồng Nhung; SĐT: 0912.030.269",
            "text": "Phó Bí thư, Chủ tịch UBND phường: Đỗ Thị Hồng Nhung; SĐT: 0912.030.269"
          },
          {
            "raw": "- Phó Chủ tịch HĐND phường: Nguyễn Thị Thanh; SĐT: 0946.215.268",
            "text": "Phó Chủ tịch HĐND phường: Nguyễn Thị Thanh; SĐT: 0946.215.268"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Hoàng Hải Sơn; SĐT: 0969.461.599",
            "text": "Phó Chủ tịch UBND phường: Hoàng Hải Sơn; SĐT: 0969.461.599"
          },
          {
            "raw": "- Phó Chủ tịch UBND phường: Vũ Thái Nam; SĐT: 0905.533.288",
            "text": "Phó Chủ tịch UBND phường: Vũ Thái Nam; SĐT: 0905.533.288"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "53.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Móng Cái:",
        "raw_title": "53.5. Điện lực: Đội quản lý điện lực khu vực Móng Cái:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Minh Đức; SĐT: 0963.595.090",
            "text": "Đội trưởng: Nguyễn Minh Đức; SĐT: 0963.595.090"
          },
          {
            "raw": "- Đội Phó: Nguyễn Mạnh Cường; SĐT: 0982.585.388",
            "text": "Đội Phó: Nguyễn Mạnh Cường; SĐT: 0982.585.388"
          },
          {
            "raw": "- Đội Phó: Nguyễn Hùng Điệp; SĐT: 0963.031.199",
            "text": "Đội Phó: Nguyễn Hùng Điệp; SĐT: 0963.031.199"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.779.555; 02036.263.555",
            "text": "Tổ trực vận hành SĐT: 02033.779.555; 02036.263.555"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Móng Cái:",
        "raw_title": "53.6. Cấp nước: Xí nghiệp nước Móng Cái:",
        "contacts": [
          {
            "raw": "- Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559",
            "text": "Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "53.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thành phố Móng Cái; SĐT: 02032.207.488",
            "text": "Trung tâm y tế thành phố Móng Cái; SĐT: 02032.207.488"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "53.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- BQL vận hành KCN Hải Yên, phương tiện: Nguyễn Anh Hùng - Phó GĐ, phương tiện: 01 Xe chữa cháy; SĐT: 0969.983.021",
            "text": "BQL vận hành KCN Hải Yên, phương tiện: Nguyễn Anh Hùng - Phó GĐ, phương tiện: 01 Xe chữa cháy; SĐT: 0969.983.021"
          },
          {
            "raw": "- Công ty TNHH xây dựng và thương mại Thiên Phú, phương tiện: Lê Văn Phú - Giám đốc, phương tiện: 04 Xe máy xúc, 02 Xe cẩu, Xe ben: 02; SĐT: 0988.193.888",
            "text": "Công ty TNHH xây dựng và thương mại Thiên Phú, phương tiện: Lê Văn Phú - Giám đốc, phương tiện: 04 Xe máy xúc, 02 Xe cẩu, Xe ben: 02; SĐT: 0988.193.888"
          }
        ]
      }
    ]
  },
  {
    "id": 54,
    "type": "XÃ",
    "name": "VĨNH THỰC",
    "raw_title": "54. XÃ VĨNH THỰC",
    "district": "Thành phố Móng Cái",
    "team": "Đội KV9",
    "components": [
      "Vĩnh Thực",
      "Vĩnh Trung"
    ],
    "subsections": [
      {
        "id": 1,
        "title": "Cảnh sát PCCC và CNCH",
        "raw_title": "54.1. Cảnh sát PCCC và CNCH",
        "contacts": [
          {
            "raw": "- Đội trưởng: Vũ Đình Hiệp; SĐT: 0936.085.533",
            "text": "Đội trưởng: Vũ Đình Hiệp; SĐT: 0936.085.533"
          },
          {
            "raw": "- Phó Đội trưởng: Ngô Quý Hải; SĐT: 0988.110.464",
            "text": "Phó Đội trưởng: Ngô Quý Hải; SĐT: 0988.110.464"
          },
          {
            "raw": "- Cán bộ: Phạm Quang Vinh; SĐT: 0787.277.166",
            "text": "Cán bộ: Phạm Quang Vinh; SĐT: 0787.277.166"
          },
          {
            "raw": "- Trực ban: 02033.886.114",
            "text": "Trực ban: 02033.886.114"
          }
        ]
      },
      {
        "id": 2,
        "title": "Công an xã Vĩnh Thực",
        "raw_title": "54.2. Công an xã Vĩnh Thực",
        "contacts": [
          {
            "raw": "- Trưởng CAX: Lê Mạnh Hùng; SĐT: 0979.719.194",
            "text": "Trưởng CAX: Lê Mạnh Hùng; SĐT: 0979.719.194"
          },
          {
            "raw": "- Phó CAP: Lạc Hùng; SĐT: 0986.166.607",
            "text": "Phó CAP: Lạc Hùng; SĐT: 0986.166.607"
          },
          {
            "raw": "- Phó CAP: Phạm Trung Phương; SĐT: 0912.067.294",
            "text": "Phó CAP: Phạm Trung Phương; SĐT: 0912.067.294"
          },
          {
            "raw": "- Phó CAP: Hoàng Mạnh Thăng; SĐT: 0983.882.609",
            "text": "Phó CAP: Hoàng Mạnh Thăng; SĐT: 0983.882.609"
          },
          {
            "raw": "- Phó CAP: Thái Tuấn Linh; SĐT: 0987.543.666",
            "text": "Phó CAP: Thái Tuấn Linh; SĐT: 0987.543.666"
          },
          {
            "raw": "- Phó CAP: Lê Hồng Sơn; SĐT: 0838.218.218",
            "text": "Phó CAP: Lê Hồng Sơn; SĐT: 0838.218.218"
          },
          {
            "raw": "- Trực ban: 02033.901.959",
            "text": "Trực ban: 02033.901.959"
          }
        ]
      },
      {
        "id": 3,
        "title": "Ủy ban nhân dân xã Vĩnh Thực",
        "raw_title": "54.3. Ủy ban nhân dân xã Vĩnh Thực",
        "contacts": [
          {
            "raw": "- Bí thư Đảng ủy, Chủ tịch HĐND xã: Trần Quốc Nam; SĐT: 0912.182.338",
            "text": "Bí thư Đảng ủy, Chủ tịch HĐND xã: Trần Quốc Nam; SĐT: 0912.182.338"
          },
          {
            "raw": "- Phó Bí thư TT Đảng ủy: Vy Quyết Hơn; SĐT: 0825.515.588",
            "text": "Phó Bí thư TT Đảng ủy: Vy Quyết Hơn; SĐT: 0825.515.588"
          },
          {
            "raw": "- Phó Bí thư, Chủ tịch UBND xã: Trần Ngọc Trung; SĐT: 0903.479.188",
            "text": "Phó Bí thư, Chủ tịch UBND xã: Trần Ngọc Trung; SĐT: 0903.479.188"
          },
          {
            "raw": "- Phó Chủ tịch HĐND xã: Tô Minh Sơn; SĐT: 0947.110.488",
            "text": "Phó Chủ tịch HĐND xã: Tô Minh Sơn; SĐT: 0947.110.488"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Đặng Tiến Dũng; SĐT: 0986.339.886",
            "text": "Phó Chủ tịch UBND xã: Đặng Tiến Dũng; SĐT: 0986.339.886"
          },
          {
            "raw": "- Phó Chủ tịch UBND xã: Ngô Văn Đường; SĐT: 0936.963.228",
            "text": "Phó Chủ tịch UBND xã: Ngô Văn Đường; SĐT: 0936.963.228"
          }
        ]
      },
      {
        "id": 4,
        "title": "Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "raw_title": "54.4. Lực lượng Cảnh sát giao thông phụ trách địa bàn",
        "contacts": [
          {
            "raw": "- Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999",
            "text": "Phó trưởng phòng PC08: Lương Đức Thiện; SĐT: 0862.305.999"
          },
          {
            "raw": "- Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888",
            "text": "Đội CSGT ĐB số 3: Đội trưởng: Võ Quang Hòa; SĐT: 0399.999.888"
          }
        ]
      },
      {
        "id": 5,
        "title": "Điện lực: Đội quản lý điện lực khu vực Móng Cái:",
        "raw_title": "54.5. Điện lực: Đội quản lý điện lực khu vực Móng Cái:",
        "contacts": [
          {
            "raw": "- Đội trưởng: Nguyễn Minh Đức; SĐT: 0963.595.090",
            "text": "Đội trưởng: Nguyễn Minh Đức; SĐT: 0963.595.090"
          },
          {
            "raw": "- Đội Phó: Nguyễn Mạnh Cường; SĐT: 0982.585.388",
            "text": "Đội Phó: Nguyễn Mạnh Cường; SĐT: 0982.585.388"
          },
          {
            "raw": "- Đội Phó: Nguyễn Hùng Điệp; SĐT: 0963.031.199",
            "text": "Đội Phó: Nguyễn Hùng Điệp; SĐT: 0963.031.199"
          },
          {
            "raw": "- Tổ trực vận hành SĐT: 02033.779.555; 02036.263.555",
            "text": "Tổ trực vận hành SĐT: 02033.779.555; 02036.263.555"
          }
        ]
      },
      {
        "id": 6,
        "title": "Cấp nước: Xí nghiệp nước Móng Cái:",
        "raw_title": "54.6. Cấp nước: Xí nghiệp nước Móng Cái:",
        "contacts": [
          {
            "raw": "- Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559",
            "text": "Phó giám đốc phụ trách: Đỗ Văn Cảnh; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Hoàng Minh Hải; SĐT: 0936.394.559"
          },
          {
            "raw": "- Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559",
            "text": "Phó giám đốc: Mạc Thị Thu Huyền; SĐT: 0936.394.559"
          }
        ]
      },
      {
        "id": 7,
        "title": "Y tế, cấp cứu:",
        "raw_title": "54.7. Y tế, cấp cứu:",
        "contacts": [
          {
            "raw": "- Trung tâm y tế thành phố Móng Cái; SĐT: 02032.207.488",
            "text": "Trung tâm y tế thành phố Móng Cái; SĐT: 02032.207.488"
          }
        ]
      },
      {
        "id": 8,
        "title": "Lực lượng, phương tiện khác trên địa bàn.",
        "raw_title": "54.8. Lực lượng, phương tiện khác trên địa bàn.",
        "contacts": [
          {
            "raw": "- Không có thông tin",
            "text": "Không có thông tin"
          }
        ]
      }
    ]
  }
];

const MARINE_CONTACTS = [
  {
    "title": "Cơ Quan, Tổ Chức Quản Lý Trên Biển",
    "contacts": [
      { "text": "Ban Quản Lý Vịnh Hạ Long – Yên Tử; SĐT: 0812.488.111" },
      { "text": "Đường dây nóng của Ban (Đ/c Tâm); SĐT: 0812.488.111" },
      { "text": "Cảng vụ đường thủy nội địa dưới biển (Đ/c Ngọc); SĐT: 0983.478.215" },
      { "text": "Cảng vụ đường thủy nội địa dưới biển (Phó Đại diện - Đ/c Vương); SĐT: 0982.033.997" },
      { "text": "Phó trưởng đại diện Cảng vụ Cảng Sun (Đ/c Tú); SĐT: 0911.456.318" },
      { "text": "Phó Gđ Cảng vụ & Đăng kiểm (Đ/c Hùng); SĐT: 0912.652.788" }
    ]
  },
  {
    "title": "Lực Lượng Biên Phòng & Công An",
    "contacts": [
      { "text": "Đồn biên phòng (Đ/c Thà); SĐT: 0912.092.0982" },
      { "text": "Tổ trưởng tổ CSGT thủy về du lịch (Đ/c Hùng); SĐT: 0912.900.359" },
      { "text": "Phòng CSĐT, Công an tỉnh (Mr.Hải); SĐT: 0911.892.999" },
      { "text": "Đội phó PCCC (Mr.Thịnh); SĐT: 0818.191.618" },
      { "text": "Đội trưởng Đội ma túy Đông biên phòng HG (Đ/c Thịnh); SĐT: 0396.170.555" },
      { "text": "Phó TP CS Kinh tế & MT CA Tỉnh (Đ/c Việt Anh); SĐT: 0912.469.888" },
      { "text": "Cán bộ phòng CSKT & MT CA Tỉnh (Đ/c Hưng); SĐT: 0913.262.377" },
      { "text": "Cán bộ Biên phòng Cửa Khẩu Cảng HG (Đ/c Trung); SĐT: 0868.874.182" },
      { "text": "Cán bộ Biên phòng Cửa Khẩu Cảng HG (Đ/c Sửu); SĐT: 0968.952.888" }
    ]
  },
  {
    "title": "Y Tế Cứu Trợ Trên Biển",
    "contacts": [
      { "text": "Cấp Cứu BV (Đ/c Cần); SĐT: 0904.688.283" },
      { "text": "Cấp Cứu BV (Đ/c Nam); SĐT: 0982.293.008" }
    ]
  }
];
