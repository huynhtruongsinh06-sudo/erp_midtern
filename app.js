/**
 * SAP S/4HANA FIORI Master Guidebook - Interactive Application Logic
 * Course: IS091IU - Management Information Systems with ERP Application
 * HCMIU - International University VNU-HCM
 */

// 1. Fiori Applications Database
const fioriAppsData = [
  // SD Apps
  {
    name: "Manage Business Partner Master Data",
    module: "SD",
    role: "David Lopez (Sales Representative US East)",
    tcode: "BP",
    desc: "Tạo và quản lý hồ sơ đối tác khách hàng (The Bike Zone ###) với các vai trò FLCU00 (FI Customer) và FLCU01 (Customer).",
    stepId: "sd-cs-1"
  },
  {
    name: "Manage Sales Inquiries",
    module: "SD",
    role: "Maria Diaz (Sales Person 1 US East)",
    tcode: "VA11 / VA13",
    desc: "Tiếp nhận yêu cầu tìm hiểu giá/thông tin của khách hàng (5 xe Deluxe Touring, 2 xe Pro Touring).",
    stepId: "sd-cs-2"
  },
  {
    name: "Manage Sales Quotations",
    module: "SD",
    role: "Maria Diaz (Sales Person 1 US East)",
    tcode: "VA21 / VA23",
    desc: "Lập bảng báo giá chính thức kế thừa từ Inquiry, áp dụng chiết khấu 5% điều kiện RA00.",
    stepId: "sd-cs-3"
  },
  {
    name: "Manage Sales Orders",
    module: "SD",
    role: "Matthias Dosch (Sales Person 2 US East)",
    tcode: "VA01 / VA03",
    desc: "Tạo đơn bán hàng chuẩn (Standard Sales Order - OR) tham chiếu từ Báo giá (Quotation).",
    stepId: "sd-cs-4"
  },
  {
    name: "Stock Overview",
    module: "SD",
    role: "Sergey Petrov (Warehouse Employee)",
    tcode: "MMBE",
    desc: "Kiểm tra mức tồn kho khả dụng tại Plant MI00 kho FG00 trước và sau khi xuất hàng.",
    stepId: "sd-cs-5"
  },
  {
    name: "Track Sales Orders",
    module: "SD",
    role: "Matthias Dosch (Sales Person 2 US East)",
    tcode: "VA03 / Fulfillment",
    desc: "Theo dõi tiến độ thực hiện đơn hàng xuyên suốt các khâu Bán hàng, Kho vận và Kế toán.",
    stepId: "sd-cs-6"
  },
  {
    name: "Create Outbound Deliveries",
    module: "SD",
    role: "Sergey Petrov (Warehouse Employee)",
    tcode: "VL01N",
    desc: "Khởi tạo lệnh xuất kho vận chuyển (Outbound Delivery) từ Shipping Point MI00.",
    stepId: "sd-cs-7"
  },
  {
    name: "Pick Outbound Delivery / Change Outbound Delivery",
    module: "SD",
    role: "Sergey Petrov (Warehouse Employee)",
    tcode: "VL02N",
    desc: "Nhặt hàng trong kho (Picking) và ghi nhận xuất kho thực tế (Post Goods Issue - 601). Tạo bút toán WL.",
    stepId: "sd-cs-9"
  },
  {
    name: "Create Billing Documents",
    module: "SD",
    role: "Stephanie Bernard (AR Accountant)",
    tcode: "VF01",
    desc: "Lập hóa đơn thanh toán F2 cho khách hàng dựa trên chứng từ giao hàng Outbound Delivery.",
    stepId: "sd-cs-11"
  },
  {
    name: "Manage Billing Documents",
    module: "SD",
    role: "Stephanie Bernard (AR Accountant)",
    tcode: "VF03",
    desc: "Xem hóa đơn khách hàng và kiểm tra bút toán doanh thu / phải thu (Journal Entry RV).",
    stepId: "sd-cs-12"
  },
  {
    name: "Post Incoming Payments",
    module: "SD",
    role: "Stephanie Bernard (AR Accountant)",
    tcode: "F-28",
    desc: "Ghi nhận tiền thanh toán của khách vào tài khoản Ngân hàng Bank 1 và tất toán công nợ (DZ).",
    stepId: "sd-cs-13"
  },
  {
    name: "Display Sales Order / Document Flow",
    module: "SD",
    role: "David Lopez (Sales Representative)",
    tcode: "VA03",
    desc: "Xem sơ đồ cây chuỗi chứng từ liên kết xuyên suốt quy trình Order-to-Cash.",
    stepId: "sd-cs-14"
  },

  // MM Apps
  {
    name: "Manage Business Partner Master Data (Vendor)",
    module: "MM",
    role: "Joyce Hausman (Contract Manager)",
    tcode: "BP",
    desc: "Tạo hồ sơ nhà cung cấp Mid-West Supply ### với vai trò FLVN00 (FI Vendor) và FLVN01 (Supplier).",
    stepId: "mm-cs-1"
  },
  {
    name: "Create Material / Manage Product Master Data",
    module: "MM",
    role: "Sandeep Das (Warehouse Supervisor)",
    tcode: "MM01",
    desc: "Tạo mã vật tư khóa xích CHLK1### loại hàng hóa thương mại (HAWA) ngành cơ khí (M).",
    stepId: "mm-cs-2"
  },
  {
    name: "Change Material",
    module: "MM",
    role: "Sandeep Das (Warehouse Supervisor)",
    tcode: "MM02",
    desc: "Mở rộng dữ liệu vật tư cho Plant DL00 và kho TG00, định giá chuẩn $32.00 USD.",
    stepId: "mm-cs-3"
  },
  {
    name: "Manage Purchase Requisitions",
    module: "MM",
    role: "Wilton Saban (Inventory Supervisor)",
    tcode: "ME51N",
    desc: "Tạo yêu cầu mua sắm nội bộ (Purchase Requisition) 200 chiếc khóa xích cho nhà máy Dallas.",
    stepId: "mm-cs-5"
  },
  {
    name: "Monitor Material Coverage",
    module: "MM",
    role: "Alberto Conti (Inventory Assistant)",
    tcode: "MD04 / Stock",
    desc: "Giám sát mức độ đáp ứng vật tư và các nhu cầu bổ sung hàng tồn kho.",
    stepId: "mm-cs-6"
  },
  {
    name: "Manage RFQs",
    module: "MM",
    role: "Aura Maxwell (Purchasing Agent 2)",
    tcode: "ME41",
    desc: "Phát hành yêu cầu chào giá (Request for Quotation) gửi tới 3 nhà cung cấp tiềm năng.",
    stepId: "mm-cs-7"
  },
  {
    name: "Manage Supplier Quotations",
    module: "MM",
    role: "Aura Maxwell (Purchasing Agent 2)",
    tcode: "ME47",
    desc: "Nhập giá chào thầu nhận được từ Mid-West Supply ($32), Dallas Bike Basics ($35), Spy Gear ($34).",
    stepId: "mm-cs-8"
  },
  {
    name: "Compare Supplier Quotations",
    module: "MM",
    role: "Aura Maxwell (Purchasing Agent 2)",
    tcode: "ME49",
    desc: "So sánh giá chào thầu trực quan, chấp thuận Mid-West Supply và loại bỏ các đối thủ cạnh tranh.",
    stepId: "mm-cs-9"
  },
  {
    name: "Manage Purchase Orders",
    module: "MM",
    role: "Aura Maxwell (Purchasing Agent 2)",
    tcode: "ME21N / ME23N",
    desc: "Tạo đơn đặt mua hàng chính thức (Standard PO) tham chiếu từ Báo giá trúng thầu.",
    stepId: "mm-cs-10"
  },
  {
    name: "Post Goods Receipt for Purchasing Document",
    module: "MM",
    role: "Tatiana Karsova (Goods Receipt Clerk)",
    tcode: "MIGO",
    desc: "Ghi nhận nhập kho lô hàng (Đợt 1 vào Quality Inspection, Đợt 2 vào Unrestricted). Tạo bút toán WE.",
    stepId: "mm-cs-12"
  },
  {
    name: "Transfer Stock - In-Plant",
    module: "MM",
    role: "Sergey Petrov (Warehouse Employee)",
    tcode: "MIGO_TR",
    desc: "Chuyển vật tư từ trạng thái Kiểm tra chất lượng (QI) sang Sẵn sàng sử dụng (Unrestricted - 321).",
    stepId: "mm-cs-13"
  },
  {
    name: "Create Supplier Invoice",
    module: "MM",
    role: "Silvia Cassano (AP Accountant)",
    tcode: "MIRO",
    desc: "Kiểm tra và ghi nhận hóa đơn từ nhà cung cấp (3-Way Matching: PO - GR - Invoice). Tạo bút toán RE.",
    stepId: "mm-cs-15"
  },
  {
    name: "Post Outgoing Payments",
    module: "MM",
    role: "Silvia Cassano (AP Accountant)",
    tcode: "F-53",
    desc: "Thực hiện thanh toán tiền hàng từ tài khoản ngân hàng Bank 1 cho nhà cung cấp (KZ).",
    stepId: "mm-cs-21"
  },
  {
    name: "Manage Supplier Line Items / Balances",
    module: "MM",
    role: "Silvia Cassano (AP Accountant)",
    tcode: "FBL1N / FK10N",
    desc: "Kiểm tra số dư công nợ nhà cung cấp, đối chiếu trạng thái tất toán (Open / Cleared).",
    stepId: "mm-cs-22"
  },
  {
    name: "Display G/L Account Balances",
    module: "MM",
    role: "Shuyuan Chen (Head of Accounting)",
    tcode: "FAGLB03",
    desc: "Xem số dư các tài khoản sổ cái liên quan: Kho (1130000), GR/IR (9100000), Phải trả (3300000).",
    stepId: "mm-cs-24"
  },

  // FI Apps
  {
    name: "Manage G/L Account Master Data",
    module: "FI",
    role: "Shuyuan Chen (Head of Accounting)",
    tcode: "FS00",
    desc: "Thiết lập các tài khoản sổ cái mới: TK Ngân hàng phụ (18100##), TK Phải trả chủ nhà (3300###), TK Chi phí thuê (7403###).",
    stepId: "fi-cs-1"
  },
  {
    name: "Post General Journal Entries",
    module: "FI",
    role: "Silvia Cassano (AP Accountant)",
    tcode: "FB50",
    desc: "Ghi nhận bút toán chuyển tiền $100,000 USD từ tài khoản ngân hàng chính sang ngân hàng phụ.",
    stepId: "fi-cs-5"
  },
  {
    name: "Enter Incoming Invoices",
    module: "FI",
    role: "Silvia Cassano (AP Accountant)",
    tcode: "FB60",
    desc: "Nhập hóa đơn chi phí thuê mặt bằng $1,500 USD từ đối tác Landlord ###, gán Cost Center NAAD1000.",
    stepId: "fi-cs-7"
  },
  {
    name: "Balance Sheet / Income Statement",
    module: "FI",
    role: "Shuyuan Chen (Head of Accounting)",
    tcode: "F.01",
    desc: "Chạy báo cáo tài chính tổng hợp: Bảng cân đối kế toán và Báo cáo kết quả hoạt động kinh doanh.",
    stepId: "fi-cs-12"
  }
];

// 2. Interactive T-Accounts Data
const tAccountsData = {
  mm: {
    title: "Chu trình Mua Hàng MM (Procure-to-Pay) - T-Accounts Tổng Hợp",
    summary: "Theo dõi luồng biến động giữa Tài khoản Hàng hóa (1130000), Tài khoản Trung gian GR/IR (9100000), Tài khoản Phải trả Nhà cung cấp (3300000) và Ngân hàng (1810000).",
    accounts: [
      {
        code: "1130000",
        name: "Inventory Trading Goods (Tồn Kho Hàng Hóa)",
        debits: [
          { label: "Step 12: Nhập kho Đợt 1 (100 cái)", amount: "$3,200.00" },
          { label: "Step 18: Nhập kho Đợt 2 (100 cái)", amount: "$3,200.00" }
        ],
        credits: [],
        balance: "$6,400.00 (Nợ)"
      },
      {
        code: "9100000",
        name: "GR/IR Clearing Account (Tài khoản Trung gian GR/IR)",
        debits: [
          { label: "Step 15: Hóa đơn Đợt 1", amount: "$3,200.00" },
          { label: "Step 20: Hóa đơn Đợt 2", amount: "$3,200.00" }
        ],
        credits: [
          { label: "Step 12: Nhập kho Đợt 1 (WE)", amount: "$3,200.00" },
          { label: "Step 18: Nhập kho Đợt 2 (WE)", amount: "$3,200.00" }
        ],
        balance: "$0.00 (Đã tất toán cân bằng)"
      },
      {
        code: "3300000",
        name: "Accounts Payable Mid-West (Phải Trả Nhà Cung Cấp)",
        debits: [
          { label: "Step 21: Thanh toán Ngân hàng (KZ)", amount: "$6,400.00" }
        ],
        credits: [
          { label: "Step 15: Hóa đơn Đợt 1 (RE)", amount: "$3,200.00" },
          { label: "Step 20: Hóa đơn Đợt 2 (RE)", amount: "$3,200.00" }
        ],
        balance: "$0.00 (Hết nợ - Cleared)"
      },
      {
        code: "1810000",
        name: "Bank 1 (Tài Khoản Tiền Gửi Ngân Hàng)",
        debits: [],
        credits: [
          { label: "Step 21: Xuất tiền trả NCC Mid-West", amount: "$6,400.00" }
        ],
        balance: "-$6,400.00 (Có)"
      }
    ]
  },
  sd: {
    title: "Chu trình Bán Hàng SD (Order-to-Cash) - T-Accounts Tổng Hợp",
    summary: "Theo dõi luồng doanh thu, chiết khấu, giá vốn hàng bán (COGS), công nợ phải thu khách hàng (The Bike Zone) và tiền về tài khoản ngân hàng.",
    accounts: [
      {
        code: "6993000 / 1110000",
        name: "Xuất kho: COGS (6993000) & Finished Goods (1110000)",
        debits: [
          { label: "Step 9: Nợ 6993000 (Giá vốn COGS)", amount: "$10,000.00" }
        ],
        credits: [
          { label: "Step 9: Có 1110000 (Tồn kho thành phẩm)", amount: "$10,000.00" }
        ],
        balance: "Lô hàng 7 xe xuất xưởng"
      },
      {
        code: "4000000 / 4770000",
        name: "Doanh Thu (4000000) & Chiết Khấu (4770000)",
        debits: [
          { label: "Step 12: Nợ 4770000 (Chiết khấu 5% + cước)", amount: "$1,307.50" }
        ],
        credits: [
          { label: "Step 12: Có 4000000 (Doanh thu gộp 7 xe)", amount: "$21,400.00" }
        ],
        balance: "Doanh thu thuần: $20,092.50"
      },
      {
        code: "1200000",
        name: "Trade Receivables Customer (Phải Thu The Bike Zone)",
        debits: [
          { label: "Step 12: Hóa đơn xuất bán (RV)", amount: "$20,092.50" }
        ],
        credits: [
          { label: "Step 13: Khách thanh toán tiền (DZ)", amount: "$20,092.50" }
        ],
        balance: "$0.00 (Đã thu hồi đủ nợ - Cleared)"
      },
      {
        code: "1810000",
        name: "Bank 1 (Tài Khoản Tiền Gửi Ngân Hàng)",
        debits: [
          { label: "Step 13: Tiền khách chuyển về", amount: "$20,092.50" }
        ],
        credits: [],
        balance: "+$20,092.50 (Nợ)"
      }
    ]
  },
  fi: {
    title: "Chu trình Chi Phí Thuê Văn Phòng (FI-AP) - T-Accounts Tổng Hợp",
    summary: "Điều chuyển quỹ vốn ban đầu, ghi nhận chi phí thuê mặt bằng hàng tháng và thanh toán cho đối tác Landlord.",
    accounts: [
      {
        code: "1810000 & 18100##",
        name: "Điều chuyển Ngân hàng Chính -> Ngân hàng Phụ",
        debits: [
          { label: "Step 5: Nợ 18100## (Alternate Bank)", amount: "$100,000.00" }
        ],
        credits: [
          { label: "Step 5: Có 1810000 (Main Bank)", amount: "$100,000.00" },
          { label: "Step 10: Có 18100## (Trả tiền thuê)", amount: "$1,500.00" }
        ],
        balance: "Số dư TK phụ: $98,500.00"
      },
      {
        code: "7403###",
        name: "Rent Expense (Chi Phí Thuê Mặt Bằng)",
        debits: [
          { label: "Step 7: Chi phí thuê tháng (KR)", amount: "$1,500.00" }
        ],
        credits: [],
        balance: "$1,500.00 (Nợ)"
      },
      {
        code: "3300###",
        name: "Reconciliation AP Landlord (Phải Trả Chủ Nhà)",
        debits: [
          { label: "Step 10: Thanh toán tiền thuê (KZ)", amount: "$1,500.00" }
        ],
        credits: [
          { label: "Step 7: Hóa đơn tiền thuê (KR)", amount: "$1,500.00" }
        ],
        balance: "$0.00 (Đã tất toán công nợ)"
      }
    ]
  }
};

// 3. Exam & Midterm Quiz Database (From Studocu and HCMIU Reviews)
const quizData = [
  {
    id: 1,
    question: "Trong ngành sản xuất máy bay thương mại, Boeing và Airbus thống lĩnh thị trường nhờ rào cản vốn khổng lồ, công nghệ cao và tiêu chuẩn an toàn ngặt nghèo. Ví dụ này thuộc về áp lực nào trong mô hình 5 áp lực của Michael Porter?",
    options: [
      "A. Áp lực từ nhà cung ứng (Bargaining Power of Suppliers)",
      "B. Rào cản gia nhập ngành thấp (Low Threat of New Entrants)",
      "C. Rào cản gia nhập ngành cao (High Barrier to Entry / Low Threat of New Entrants)",
      "D. Áp lực từ khách hàng mua sắm (Bargaining Power of Buyers)"
    ],
    answer: 2,
    explanation: "Vốn khổng lồ, công nghệ phức tạp và quy định ngặt nghèo tạo ra rào cản gia nhập cực cao (High barrier to entry), khiến mối đe dọa từ đối thủ mới gia nhập (Threat of New Entrants) là rất thấp."
  },
  {
    id: 2,
    question: "Các chuỗi siêu thị bán lẻ khổng lồ như Walmart có thể đàm phán giá mua hàng cực thấp từ các nhà cung cấp nhờ vào khối lượng đơn hàng khổng lồ. Đây là biểu hiện của:",
    options: [
      "A. Quyền lực thương lượng mạnh của người mua (Strong Bargaining Power of Buyers)",
      "B. Quyền lực của nhà cung cấp (Bargaining Power of Suppliers)",
      "C. Nguy cơ hàng thay thế (Threat of Substitutes)",
      "D. Khác biệt hóa tập trung (Differentiation Focus)"
    ],
    answer: 0,
    explanation: "Walmart mua hàng với số lượng lớn (Volume purchasing) nên nắm quyền thương lượng giá rất lớn đối với các nhà cung cấp nhỏ hơn."
  },
  {
    id: 3,
    question: "Thành phần nào quyết định tốc độ, dung lượng lưu trữ và khả năng xử lý của hệ thống MIS, xử lý các phép tính phức tạp và cơ sở dữ liệu quy mô lớn?",
    options: [
      "A. Phần mềm (Software)",
      "B. Phần cứng (Hardware)",
      "C. Quy trình nghiệp vụ (Business Process)",
      "D. Dữ liệu tổng thể (Master Data)"
    ],
    answer: 1,
    explanation: "Hardware (Phần cứng) bao gồm máy chủ, chip xử lý, RAM, ổ cứng lưu trữ, trực tiếp quyết định tốc độ xử lý vật lý của hệ thống."
  },
  {
    id: 4,
    question: "Thương hiệu siêu xe Lamborghini sản xuất dòng xe thể thao cao cấp cho một nhóm khách hàng tinh hoa ưu tiên phong cách, hiệu năng vượt trội và không bận tâm về giá. Đây là chiến lược nào của Michael Porter?",
    options: [
      "A. Dẫn đầu về chi phí (Cost Leadership)",
      "B. Khác biệt hóa tập trung (Differentiation Focus)",
      "C. Chi phí tập trung (Cost Focus)",
      "D. Khác biệt hóa rộng rãi (Broad Differentiation)"
    ],
    answer: 1,
    explanation: "Lamborghini tập trung vào một phân khúc thị trường hẹp (Niche Market) với sản phẩm siêu sang độc bản, đó là chiến lược Differentiation Focus."
  },
  {
    id: 5,
    question: "Trong bài thực hành MM 2, loại chứng từ 'WE' và dòng hiển thị 'Number of Reversed Items: 0 of 2' có ý nghĩa gì?",
    options: [
      "A. 'WE' là hóa đơn bán lẻ; '0 of 2' nghĩa là chưa giao hàng",
      "B. 'WE' là chứng từ nhập kho (Goods Receipt); '0 of 2' nghĩa là không có mặt hàng nào trong 2 mặt hàng bị hủy hoặc trả lại",
      "C. 'WE' là chứng từ thanh toán; '0 of 2' nghĩa là chưa trả tiền",
      "D. 'WE' là yêu cầu báo giá; '0 of 2' là chưa nhận báo giá"
    ],
    answer: 1,
    explanation: "Mã loại chứng từ 'WE' (Wareneingang trong tiếng Đức) đại diện cho việc hàng đã được nhập kho. '0 of 2' xác nhận cả 2 mục hàng nhập kho đều nguyên vẹn, chưa phát sinh chứng từ hoàn trả (Reversal)."
  },
  {
    id: 6,
    question: "Trong bài thực hành MM 3, trạng thái 'Blocked for Payment' trên hóa đơn nhà cung cấp có nghĩa là gì?",
    options: [
      "A. Tài khoản ngân hàng của công ty bị phong tỏa",
      "B. Hóa đơn nhà cung cấp bị chặn thanh toán do sai lệch số lượng/giá cả so với PO hoặc chưa có biên bản nhập kho",
      "C. Nhà cung cấp đã chủ động hủy bỏ hóa đơn",
      "D. Hóa đơn đã được thanh toán hoàn tất"
    ],
    answer: 1,
    explanation: "Quy tắc 3-Way Matching trong SAP sẽ tự động kích hoạt 'Blocked for Payment' nếu giá hoặc số lượng trên hóa đơn (Invoice) không khớp với Đơn mua (PO) hoặc Phiếu nhập kho (GR), hoặc do người dùng đặt chặn thủ công."
  },
  {
    id: 7,
    question: "Một bút toán sổ cái (Journal Entry) trong SAP có ý nghĩa gì và các chứng từ tham chiếu RMRP, MKPF đại diện cho điều gì?",
    options: [
      "A. Là hợp đồng mua bán; RMRP là thư bảo lãnh, MKPF là báo cáo thuế",
      "B. Là bản ghi nghiệp vụ tài chính kép (ghi Nợ/Có) vào sổ cái; RMRP là chứng từ hóa đơn (Invoice Receipt), MKPF là chứng từ vật tư (Material Document)",
      "C. Là danh sách khách hàng; RMRP là mã bưu điện",
      "D. Là danh mục tồn kho; RMRP là mã vạch sản phẩm"
    ],
    answer: 1,
    explanation: "Journal Entry phản ánh bút toán kế toán kép. RMRP liên kết tới việc ghi nhận hóa đơn nhà cung cấp, MKPF là bảng chứng từ vật tư ghi nhận biến động kho vật lý."
  },
  {
    id: 8,
    question: "Làm thế nào để biết một hóa đơn nhà cung cấp đã được thanh toán và ý nghĩa của 'Clearing Status' là gì?",
    options: [
      "A. Xuất hiện chứng từ loại KZ (Vendor Payment), Nợ TK Phải trả và Có TK Ngân hàng; Clearing Status biểu thị các khoản mục nợ/có liên quan đã được bù trừ, tất toán hết",
      "B. Dựa vào ngày đến hạn của hóa đơn",
      "C. Kiểm tra xem kho đã nhận hàng hay chưa",
      "D. Dựa vào mã bưu điện của nhà cung cấp"
    ],
    answer: 0,
    explanation: "Chứng từ KZ (Kreditorenzahlung) xác nhận tiền đã rời ngân hàng để giảm nợ phải trả. Khi bù trừ hoàn tất, mục nợ chuyển từ trạng thái Open (đỏ) sang Cleared (xanh)."
  },
  {
    id: 9,
    question: "Điểm khác biệt cốt lõi giữa Billing Document và Customer Invoice trong phân hệ SAP SD là gì?",
    options: [
      "A. Billing Document áp dụng cho thanh toán ngay, Customer Invoice áp dụng cho trả góp",
      "B. Billing Document là thuật ngữ chung bao gồm Hóa đơn bán lẻ, Giấy báo Có (Credit Memo), Giấy báo Nợ (Debit Memo), Pro forma Invoice; Customer Invoice là một loại Billing Document cụ thể yêu cầu thanh toán",
      "C. Customer Invoice do kho phát hành, Billing Document do ngân hàng phát hành",
      "D. Không có điểm khác biệt nào"
    ],
    answer: 1,
    explanation: "Billing Document là khái niệm bao trùm (umbrella term) cho toàn bộ chứng từ thanh toán/điều chỉnh trong SD, trong đó Customer Invoice (loại F2) là hóa đơn chính thức đòi tiền khách."
  },
  {
    id: 10,
    question: "Vì sao công ty Global Bike Inc. (GBI) triển khai mô hình Shared Services cho hệ thống CNTT tập trung tại Dallas?",
    options: [
      "A. Vì Dallas là nơi sản xuất toàn bộ khung xe đạp",
      "B. Giúp chuẩn hóa quy trình toàn cầu, giảm thiểu chi phí quản lý vận hành, đảm bảo tính toàn vẹn dữ liệu xuyên suốt các chi nhánh Mỹ và Đức",
      "C. Để tránh phải nộp thuế tại Đức",
      "D. Vì Đức không có kết nối cáp quang internet"
    ],
    answer: 1,
    explanation: "Mô hình Trung tâm dịch vụ chia sẻ (IT Shared Services) tại Dallas tạo ra 'Single Source of Truth' duy nhất, giúp GBI hợp nhất báo cáo đa quốc gia (US GAAP & IFRS) và tối ưu chi phí."
  }
];

// 4. Core Guidebook Engine
document.addEventListener("DOMContentLoaded", () => {
  initStudentIdReplacer();
  initTheme();
  initReadingProgress();
  initFioriAppFinder();
  initTAccountsVisualizer();
  initQuiz();
  initCheckpoints();
  initGlobalSearch();
});

// Student ID Replacer
function initStudentIdReplacer() {
  const input = document.getElementById("student-id-input");
  if (!input) return;

  const savedId = localStorage.getItem("sap_student_id") || "180";
  input.value = savedId;
  applyStudentId(savedId);

  input.addEventListener("input", (e) => {
    const val = e.target.value.trim() || "###";
    localStorage.setItem("sap_student_id", val);
    applyStudentId(val);
  });
}

function applyStudentId(num) {
  const targets = document.querySelectorAll(".student-num-val");
  targets.forEach(el => {
    el.textContent = num;
  });
}

// Theme Switcher
function initTheme() {
  const savedTheme = localStorage.getItem("sap_guide_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const btns = document.querySelectorAll(".theme-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("sap_guide_theme", theme);
    });
  });
}

// Reading Progress
function initReadingProgress() {
  const bar = document.getElementById("reading-progress");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    bar.style.width = `${progress}%`;
  });
}

// Fiori App Finder
function initFioriAppFinder() {
  const container = document.getElementById("app-grid-container");
  const searchInput = document.getElementById("finder-search-input");
  const filterBtns = document.querySelectorAll(".finder-filter-btn");

  if (!container) return;

  let currentModule = "ALL";
  let currentSearch = "";

  function render() {
    const filtered = fioriAppsData.filter(item => {
      const matchMod = currentModule === "ALL" || item.module === currentModule;
      const matchSearch = currentSearch === "" || 
        item.name.toLowerCase().includes(currentSearch) ||
        item.tcode.toLowerCase().includes(currentSearch) ||
        item.role.toLowerCase().includes(currentSearch) ||
        item.desc.toLowerCase().includes(currentSearch);
      return matchMod && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 30px; color: var(--text-muted);">Không tìm thấy ứng dụng SAP Fiori nào phù hợp với từ khóa "${currentSearch}".</div>`;
      return;
    }

    container.innerHTML = filtered.map(app => `
      <div class="app-tile">
        <div class="app-tile-top">
          <span class="badge-app">${app.module}</span>
          <span class="app-tcode">T-Code: ${app.tcode}</span>
        </div>
        <div class="app-tile-title">${app.name}</div>
        <div class="app-tile-role"><i class="fas fa-user-tie"></i> ${app.role}</div>
        <div class="app-tile-desc">${app.desc}</div>
        <div style="margin-top: 12px; text-align: right;">
          <a href="#${app.stepId}" class="btn-header" style="padding: 4px 10px; font-size: 0.75rem;">
            Đến bước hướng dẫn <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `).join("");
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentModule = btn.dataset.module;
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      render();
    });
  }

  render();
}

// T-Accounts Visualizer
function initTAccountsVisualizer() {
  const tabs = document.querySelectorAll(".t-account-tab");
  const display = document.getElementById("t-accounts-display");
  if (!display) return;

  function renderCycle(cycleKey) {
    const cycle = tAccountsData[cycleKey];
    if (!cycle) return;

    let html = `
      <div style="margin-bottom: 20px;">
        <h3 style="font-size: 1.2rem; color: var(--text-main); margin-bottom: 6px;">${cycle.title}</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">${cycle.summary}</p>
      </div>
      <div class="t-account-container">
    `;

    cycle.accounts.forEach(acc => {
      html += `
        <div class="t-account-box">
          <div class="t-account-header">
            <div>${acc.name}</div>
            <div class="t-account-code">TK: ${acc.code}</div>
          </div>
          <div class="t-account-body">
            <div class="t-account-side debit">
              <div class="t-side-label">Nợ (Debit)</div>
              ${acc.debits.map(d => `
                <div class="t-entry dr">
                  <span>${d.label}</span>
                  <strong>${d.amount}</strong>
                </div>
              `).join("")}
            </div>
            <div class="t-account-side credit">
              <div class="t-side-label">Có (Credit)</div>
              ${acc.credits.map(c => `
                <div class="t-entry cr">
                  <span>${c.label}</span>
                  <strong>${c.amount}</strong>
                </div>
              `).join("")}
            </div>
          </div>
          <div style="background: var(--bg-main); padding: 8px 12px; font-size: 0.8rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between;">
            <span style="color: var(--text-muted);">Số dư cuối kỳ:</span>
            <strong style="color: var(--primary);">${acc.balance}</strong>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    display.innerHTML = html;
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderCycle(tab.dataset.cycle);
    });
  });

  renderCycle("mm");
}

// Midterm Quiz Engine
function initQuiz() {
  const container = document.getElementById("quiz-container");
  const scoreBox = document.getElementById("quiz-score-box");
  if (!container) return;

  let userAnswers = {};

  function renderQuiz() {
    container.innerHTML = quizData.map((q, idx) => `
      <div class="quiz-card" id="quiz-card-${q.id}">
        <div class="quiz-question-num">Câu hỏi ${idx + 1} / ${quizData.length}</div>
        <div class="quiz-question-text">${q.question}</div>
        <div class="quiz-options">
          ${q.options.map((opt, oIdx) => `
            <div class="quiz-opt" data-qid="${q.id}" data-oidx="${oIdx}">
              ${opt}
            </div>
          `).join("")}
        </div>
        <div class="quiz-explanation" id="quiz-exp-${q.id}">
          <strong>💡 Giải thích chi tiết:</strong> ${q.explanation}
        </div>
      </div>
    `).join("");

    // Attach click handlers
    document.querySelectorAll(".quiz-opt").forEach(optEl => {
      optEl.addEventListener("click", () => {
        const qid = parseInt(optEl.dataset.qid);
        const oidx = parseInt(optEl.dataset.oidx);
        checkAnswer(qid, oidx);
      });
    });
  }

  function checkAnswer(qid, selectedIdx) {
    const q = quizData.find(item => item.id === qid);
    if (!q) return;

    userAnswers[qid] = selectedIdx;
    const card = document.getElementById(`quiz-card-${qid}`);
    const options = card.querySelectorAll(".quiz-opt");
    const exp = document.getElementById(`quiz-exp-${qid}`);

    options.forEach((el, idx) => {
      el.classList.remove("selected", "correct", "wrong");
      if (idx === q.answer) {
        el.classList.add("correct");
      }
      if (idx === selectedIdx && selectedIdx !== q.answer) {
        el.classList.add("wrong");
      }
      if (idx === selectedIdx) {
        el.classList.add("selected");
      }
    });

    exp.classList.add("show");
    updateScore();
  }

  function updateScore() {
    if (!scoreBox) return;
    const answeredCount = Object.keys(userAnswers).length;
    let correctCount = 0;
    quizData.forEach(q => {
      if (userAnswers[q.id] === q.answer) {
        correctCount++;
      }
    });

    scoreBox.innerHTML = `
      <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 15px 20px; display: flex; align-items: center; justify-content: space-between;">
        <div>
          <div style="font-size: 0.85rem; color: var(--text-muted);">Kết quả ôn tập của bạn:</div>
          <div style="font-size: 1.4rem; font-weight: 800; color: var(--primary);">
            ${correctCount} / ${quizData.length} câu đúng (${Math.round((correctCount / quizData.length) * 100)}%)
          </div>
        </div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">
          Đã làm ${answeredCount} / ${quizData.length} câu
        </div>
      </div>
    `;
  }

  renderQuiz();
}

// Checkpoint Step Tracking
function initCheckpoints() {
  const buttons = document.querySelectorAll(".checkpoint-btn");
  const savedState = JSON.parse(localStorage.getItem("sap_step_checkpoints") || "{}");

  buttons.forEach(btn => {
    const stepId = btn.dataset.stepId;
    if (savedState[stepId]) {
      btn.classList.add("completed");
      btn.innerHTML = `<i class="fas fa-check-circle"></i> Đã hoàn thành`;
    }

    btn.addEventListener("click", () => {
      const isDone = btn.classList.toggle("completed");
      savedState[stepId] = isDone;
      localStorage.setItem("sap_step_checkpoints", JSON.stringify(savedState));

      if (isDone) {
        btn.innerHTML = `<i class="fas fa-check-circle"></i> Đã hoàn thành`;
      } else {
        btn.innerHTML = `<i class="far fa-circle"></i> Đánh dấu hoàn thành`;
      }
      updateSidebarProgress();
    });
  });

  updateSidebarProgress();
}

function updateSidebarProgress() {
  const savedState = JSON.parse(localStorage.getItem("sap_step_checkpoints") || "{}");
  const completedCount = Object.values(savedState).filter(Boolean).length;
  const badge = document.getElementById("sidebar-completed-badge");
  if (badge) {
    badge.textContent = `${completedCount} hoàn thành`;
  }
}

// Global Instant Search
function initGlobalSearch() {
  const input = document.getElementById("global-search-input");
  if (!input) return;

  input.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    const stepCards = document.querySelectorAll(".step-card");
    const navItems = document.querySelectorAll(".sidebar-nav .nav-item");

    if (q === "") {
      stepCards.forEach(card => card.style.display = "");
      navItems.forEach(item => item.style.display = "");
      return;
    }

    stepCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(q)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });

    navItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(q)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
}
