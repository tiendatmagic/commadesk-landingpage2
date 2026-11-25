import type { LegalDocKey, LegalDocumentContent } from '../../types';

export const legalVi: Record<LegalDocKey, LegalDocumentContent> = {
  privacy: {
    badge: 'Quyền Riêng Tư & Bảo Vệ Dữ Liệu',
    title: ['Chính Sách Bảo Mật', 'Bảo vệ & xử lý dữ liệu'],
    subtitle:
      'Cách CommaDesk thu thập, bảo vệ và xử lý dữ liệu cá nhân cũng như dữ liệu vận hành doanh nghiệp trên Web, Máy tính, Di động và Máy chủ riêng.',
    effectiveDateLabel: 'Ngày hiệu lực',
    effectiveDate: '25 tháng 11, 2026',
    versionLabel: 'Phiên bản',
    version: '2.0',
    scopeLabel: 'Phạm vi áp dụng',
    scope: 'Web, Máy tính & Di động',
    switchDocLabel: 'Xem Điều khoản Dịch vụ',
    switchDocHref: '/terms-of-service',
    highlightsTitle: 'Cam Kết Bảo Mật Cốt Lõi',
    highlights: [
      {
        title: 'Tách Biệt Dữ Liệu Theo Đơn Vị',
        description:
          'Mỗi không gian làm việc doanh nghiệp được phân tách riêng biệt, đảm bảo dữ liệu công ty thành viên và chi nhánh luôn riêng tư.',
      },
      {
        title: 'Không Thương Mại Hóa Dữ Liệu',
        description:
          'Chúng tôi không bán, cho thuê hoặc chia sẻ hồ sơ vận hành, thông tin nhân sự hay báo cáo doanh nghiệp cho bên quảng cáo thứ ba.',
      },
      {
        title: 'Chấm Công & Camera Do Doanh Nghiệp Kiểm Soát',
        description:
          'Chấm công khuôn mặt, định vị GPS và giám sát camera chỉ vận hành khi tổ chức bật tính năng và tuân thủ quy định pháp luật hiện hành.',
      },
    ],
    tocTitle: 'Mục Lục Nội Dung',
    sections: [
      {
        id: 'scope-and-roles',
        number: '01',
        title: 'Phạm Vi Áp Dụng & Vai Trò Kiểm Soát Dữ Liệu',
        paragraphs: [
          'Chính sách Bảo mật này giải thích cách CommaDesk ("chúng tôi") xử lý thông tin khi bạn truy cập website công khai, tìm hiểu giải pháp hoặc sử dụng ứng dụng CommaDesk trên Web, Ứng dụng Máy tính (Windows/macOS) và Di động (iOS/Android).',
          'Đối với khách truy cập website công khai hoặc liên hệ tư vấn, CommaDesk đóng vai trò là Bên Kiểm soát Dữ liệu. Đối với doanh nghiệp sử dụng CommaDesk để quản trị nhân sự, dự án, kho vận, sổ văn bản, CRM hoặc camera giám sát, tổ chức đăng ký là Bên Kiểm soát Dữ liệu và CommaDesk là Bên Xử lý Dữ liệu chỉ hành động theo chỉ thị hợp lệ của tổ chức đó.',
        ],
      },
      {
        id: 'information-we-collect',
        number: '02',
        title: 'Thông Tin Chúng Tôi Thu Thập',
        paragraphs: [
          'Chúng tôi chỉ thu thập những thông tin cần thiết để vận hành các phân hệ nghiệp vụ mà doanh nghiệp lựa chọn:',
        ],
        bullets: [
          'Thông tin Tài khoản & Tổ chức: Họ tên, email công việc, chức danh, đơn vị trực thuộc và cấu hình phân quyền theo vai trò do Quản trị viên tổ chức thiết lập.',
          'Dữ liệu Vận hành & Không gian làm việc: Đầu việc Kanban/Gantt, sổ văn bản đến/đi, phiếu xuất nhập kho, yêu cầu hỗ trợ, điều phối đội xe và trao đổi nội bộ do người dùng được cấp quyền tạo lập.',
          'Phân hệ Chấm công & Camera Tùy chọn (Khi Khách hàng kích hoạt): Thời gian chấm công, tọa độ GPS tại điểm chấm công, dữ liệu đối chiếu khuôn mặt chấm công và sự kiện camera được cấp quyền.',
          'Nhật ký An toàn & Hoạt động: Phiên đăng nhập, xác nhận thiết bị tin cậy, lịch sử truy cập và nhật ký thay đổi (lịch sử truy cập, cập nhật hồ sơ và thay đổi phân quyền) phục vụ bảo vệ dữ liệu.',
          'Tùy chọn Hiển thị: Tùy chọn ngôn ngữ giao diện (Tiếng Việt hoặc Tiếng Anh) lưu trên trình duyệt của bạn.',
        ],
        callout: {
          title: 'Đối với Khách truy cập Trang Công khai',
          content:
            'Việc xem trang giới thiệu, cẩm nang tính năng và các trang pháp lý công khai không yêu cầu đăng nhập. Chỉ tùy chọn ngôn ngữ hiển thị được ghi nhớ ngay trên trình duyệt của bạn.',
        },
      },
      {
        id: 'how-we-use-data',
        number: '03',
        title: 'Mục Đích Sử Dụng Dữ Liệu',
        paragraphs: [
          'CommaDesk xử lý dữ liệu cá nhân và dữ liệu tổ chức hoàn toàn cho các mục đích vận hành hợp pháp và thực hiện hợp đồng dịch vụ:',
        ],
        bullets: [
          'Cung cấp không gian làm việc, xác thực đăng nhập (bao gồm bảo mật 2 lớp) và duy trì vận hành đa chi nhánh.',
          'Thực thi chính sách phân quyền theo vai trò để mỗi nhân sự chỉ tiếp cận đúng phân hệ và dữ liệu thuộc phạm vi nhiệm vụ.',
          'Tổng hợp báo cáo vận hành, bảng công, dữ liệu tính lương tự động và nhắc hạn phê duyệt theo cấu hình của doanh nghiệp.',
          'Phát hiện truy cập bất thường, hỗ trợ thu hồi phiên từ xa và duy trì nhật ký hoạt động minh bạch.',
          'Hỗ trợ khách hàng, duy trì độ ổn định dịch vụ và gửi thông báo quan trọng về bảo mật hoặc cập nhật tính năng.',
        ],
      },
      {
        id: 'third-party-integrations',
        number: '04',
        title: 'Tích Hợp Bên Thứ Ba & Chia Sẻ Dữ Liệu',
        paragraphs: [
          'CommaDesk không bán dữ liệu cá nhân. Dữ liệu chỉ được chia sẻ trong các trường hợp được kiểm soát chặt chẽ sau:',
        ],
        bullets: [
          'Tích hợp do Khách hàng chủ động kết nối: Đồng bộ hai chiều với phần mềm bên ngoài được Quản trị viên cấu hình (như phần mềm kế toán, hệ thống bán hàng POS KiotViet hoặc kênh thông báo Zalo, Telegram).',
          'Đơn vị cung cấp Dịch vụ & Lưu trữ: Đối tác vận hành máy chủ, lưu trữ bảo mật và dịch vụ gửi email/thông báo tuân thủ thỏa thuận bảo mật nghiêm ngặt.',
          'Yêu cầu Pháp lý: Khi có yêu cầu hợp lệ từ cơ quan nhà nước có thẩm quyền hoặc quy định pháp luật bắt buộc, kèm thông báo cho tổ chức khách hàng trong phạm vi pháp luật cho phép.',
        ],
      },
      {
        id: 'security-and-isolation',
        number: '05',
        title: 'Bảo Vệ Dữ Liệu & Thời Gian Lưu Trữ',
        paragraphs: [
          'CommaDesk áp dụng cơ chế bảo vệ nhiều lớp cho đường truyền, lưu trữ và quyền truy cập. Toàn bộ kết nối được mã hóa khi truyền tải, thông tin đăng nhập được bảo vệ an toàn và mọi thay đổi quản trị quan trọng đều được ghi nhận vào nhật ký hoạt động.',
          'Với các tập đoàn hoặc cơ quan hành chính yêu cầu chủ quyền dữ liệu nội bộ, CommaDesk hỗ trợ mô hình Máy chủ Riêng (On-Premises), cho phép toàn bộ dữ liệu nằm hoàn toàn trong hạ tầng mạng nội bộ của khách hàng.',
          'Dữ liệu được lưu trữ trong suốt thời gian hợp đồng còn hiệu lực hoặc theo thời hạn lưu trữ luật định (như hồ sơ sổ văn bản và chứng từ lương). Khi chấm dứt dịch vụ, khách hàng có quyền trích xuất toàn bộ dữ liệu và yêu cầu xóa an toàn theo lộ trình thỏa thuận.',
        ],
      },
      {
        id: 'your-privacy-rights',
        number: '06',
        title: 'Quyền Của Chủ Thể Dữ Liệu',
        paragraphs: [
          'Theo quy định pháp luật hiện hành (bao gồm Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân tại Việt Nam và các chuẩn mực quốc tế tương đương), bạn có các quyền sau:',
        ],
        bullets: [
          'Quyền được biết, truy cập và yêu cầu trích xuất bản sao dữ liệu cá nhân của mình đang được xử lý trên hệ thống.',
          'Quyền yêu cầu đính chính, cập nhật thông tin hồ sơ nhân sự khi có sai sót hoặc thay đổi.',
          'Quyền yêu cầu xóa dữ liệu, hạn chế xử lý hoặc phản đối một số hoạt động xử lý trong phạm vi pháp luật cho phép.',
          'Quyền rút lại sự đồng ý đối với các tính năng tùy chọn (như chấm công khuôn mặt hoặc định vị GPS) thông qua Quản trị viên đơn vị hoặc chuyển sang phương thức chấm công thay thế.',
        ],
        callout: {
          title: 'Lưu ý cho Nhân sự Thuộc Tổ chức Khách hàng',
          content:
            'Nếu tài khoản của bạn do doanh nghiệp hoặc cơ quan chủ quản cấp phát, vui lòng liên hệ Quản trị viên nội bộ trước để được xử lý nhanh nhất các yêu cầu truy cập hoặc chỉnh sửa dữ liệu.',
        },
      },
      {
        id: 'updates-and-contact',
        number: '07',
        title: 'Cập Nhật Chính Sách & Thông Tin Liên Hệ',
        paragraphs: [
          'Chúng tôi có thể cập nhật Chính sách Bảo mật định kỳ để phản ánh các tính năng mới, quy định pháp lý mới hoặc cải tiến bảo mật. Mọi thay đổi sẽ được công bố trực tiếp tại trang này.',
          'Nếu bạn có câu hỏi về chính sách bảo mật hoặc yêu cầu liên quan đến dữ liệu cá nhân, vui lòng liên hệ Bộ phận Bảo mật Dữ liệu theo thông tin bên dưới.',
        ],
      },
    ],
    contactTitle: 'Liên Hệ Về Quyền Riêng Tư & Bảo Mật Dữ Liệu',
    contactDesc:
      'Cần gửi yêu cầu bảo vệ dữ liệu, rà soát cam kết bảo mật hoặc xác minh chính sách cho doanh nghiệp của bạn?',
    contactEmailLabel: 'Email Bảo Mật',
    contactEmail: 'privacy@commadesk.com',
    entityLabel: 'Đơn vị Cung cấp Dịch vụ',
    entityValue: 'CommaDesk',
    securityCtaLabel: 'Xem Bảo Mật & Phân Quyền',
  },

  terms: {
    badge: 'Pháp Lý & Tuân Thủ',
    title: ['Điều Khoản Dịch Vụ', 'Quy định sử dụng nền tảng'],
    subtitle:
      'Các điều khoản ràng buộc quy định việc truy cập website công khai, không gian làm việc đám mây, ứng dụng máy tính/di động và các phân hệ nghiệp vụ của CommaDesk.',
    effectiveDateLabel: 'Ngày hiệu lực',
    effectiveDate: '25 tháng 11, 2026',
    versionLabel: 'Phiên bản',
    version: '2.0',
    scopeLabel: 'Phạm vi áp dụng',
    scope: 'Web, Máy tính & Di động',
    switchDocLabel: 'Xem Chính sách Bảo mật',
    switchDocHref: '/privacy-policy',
    highlightsTitle: 'Trụ Cột Thỏa Thuận Chính',
    highlights: [
      {
        title: 'Khách Hàng Toàn Quyền Sở Hữu Dữ Liệu',
        description:
          'Doanh nghiệp giữ toàn quyền sở hữu và quyền trích xuất đối với mọi dữ liệu dự án, nhân sự, văn bản và tệp vận hành.',
      },
      {
        title: 'Linh Hoạt Cloud & Máy Chủ Riêng',
        description:
          'Phạm vi cấp phép rõ ràng cho cả mô hình Đám mây trực tuyến lẫn triển khai trên Máy chủ riêng nội bộ (On-Premises).',
      },
      {
        title: 'Tiêu Chuẩn Vận Hành & Quản Trị',
        description:
          'Cam kết độ sẵn sàng rõ ràng, trách nhiệm phân quyền theo vai trò và quy tắc sử dụng hệ thống an toàn.',
      },
    ],
    tocTitle: 'Mục Lục Nội Dung',
    sections: [
      {
        id: 'acceptance-of-terms',
        number: '01',
        title: 'Chấp Thuận Điều Khoản',
        paragraphs: [
          'Khi truy cập website công khai của CommaDesk, tìm hiểu tài liệu sản phẩm hoặc sử dụng nền tảng CommaDesk (trên Web, Ứng dụng Máy tính Windows/macOS hoặc Di động iOS/Android), bạn đồng ý tuân thủ các Điều khoản Dịch vụ này ("Điều khoản") cùng Chính sách Bảo mật của chúng tôi.',
          'Nếu bạn xác lập thỏa thuận này nhân danh một doanh nghiệp, cơ quan nhà nước hoặc tổ chức pháp nhân ("Khách hàng"), bạn xác nhận mình có đầy đủ thẩm quyền đại diện để ràng buộc tổ chức đó và các người dùng trực thuộc.',
        ],
      },
      {
        id: 'service-scope-and-deployment',
        number: '02',
        title: 'Phạm Vi Nền Tảng & Mô Hình Triển Khai',
        paragraphs: [
          'CommaDesk cung cấp nền tảng vận hành doanh nghiệp hợp nhất bao gồm: Dự án & Công việc, Tổ chức & Nhân sự, Sổ văn bản & Ký số, Kho hàng & Đội xe GPS, CRM & CSKH, Truyền thông nội bộ, Camera giám sát và Phân quyền bảo mật.',
        ],
        bullets: [
          'Phiên bản Cloud: Do CommaDesk vận hành trực tuyến với cơ chế tách biệt dữ liệu theo đơn vị, sao lưu định kỳ và cập nhật tính năng thường xuyên.',
          'Phiên bản Máy chủ Riêng (On-Premises): Triển khai trên hạ tầng do Khách hàng tự quản lý theo Hợp đồng Doanh nghiệp hoặc Đơn đặt hàng riêng.',
          'Trang Giới thiệu & Cẩm nang Công khai: Được cung cấp công khai nhằm mục đích tham khảo thông tin sản phẩm; quyền sử dụng từng phân hệ cụ thể phụ thuộc vào gói dịch vụ đã đăng ký.',
        ],
      },
      {
        id: 'accounts-and-security',
        number: '03',
        title: 'Tài Khoản Doanh Nghiệp & Trách Nhiệm Bảo Mật',
        paragraphs: [
          'Khách hàng chịu trách nhiệm thiết lập phân quyền theo vai trò, quản lý cấp phát/thu hồi tài khoản nhân sự và bảo vệ thông tin đăng nhập quản trị.',
        ],
        bullets: [
          'Áp dụng chính sách mật khẩu mạnh và bật Xác thực 2 lớp (2FA) cho các tài khoản quản trị hoặc có quyền phê duyệt quan trọng.',
          'Kịp thời khóa tài khoản hoặc thu hồi phiên đăng nhập khi nhân sự, cộng tác viên chấm dứt hợp tác với tổ chức.',
          'Thông báo ngay cho CommaDesk khi phát hiện dấu hiệu truy cập trái phép hoặc rò rỉ thông tin xác thực.',
        ],
      },
      {
        id: 'data-ownership-and-ip',
        number: '04',
        title: 'Quyền Sở Hữu Dữ Liệu & Sở Hữu Trí Tuệ',
        paragraphs: [
          'Giữa CommaDesk và Khách hàng, Khách hàng giữ toàn bộ quyền sở hữu và quyền kiểm soát đối với mọi dữ liệu, văn bản, tệp đính kèm, hồ sơ nhân sự và cấu hình được tạo hoặc tải lên không gian làm việc của mình ("Dữ liệu Khách hàng").',
          'CommaDesk giữ toàn bộ quyền sở hữu trí tuệ đối với phần mềm nền tảng, giao diện người dùng, nhãn hiệu, logo và tài liệu hướng dẫn. Ngoại trừ quyền sử dụng dịch vụ trong thời hạn hợp đồng, không có quyền sở hữu trí tuệ nào của nền tảng được chuyển nhượng.',
        ],
        callout: {
          title: 'Cam Kết Không Chiếm Hữu Dữ Liệu Khách Hàng',
          content:
            'CommaDesk chỉ xử lý Dữ liệu Khách hàng để cung cấp, bảo vệ, khắc phục sự cố và sao lưu dịch vụ — không sử dụng dữ liệu kinh doanh nội bộ của bạn để cạnh tranh hay cho mục đích trái phép.',
        },
      },
      {
        id: 'acceptable-use',
        number: '05',
        title: 'Quy Tắc Sử Dụng Hợp Lệ',
        paragraphs: [
          'Người dùng và tổ chức cam kết không lạm dụng nền tảng hoặc website công khai. Các hành vi bị nghiêm cấm bao gồm:',
        ],
        bullets: [
          'Cố ý vượt qua cơ chế tách biệt dữ liệu giữa các đơn vị, cổng xác thực hoặc ranh giới phân quyền.',
          'Tải lên nội dung vi phạm pháp luật, tệp độc hại hoặc xử lý dữ liệu sinh trắc học/camera khi chưa thông báo và xin chấp thuận hợp lệ từ người lao động hoặc khách thăm theo luật định.',
          'Sao chép, dịch ngược hoặc bán lại cấu phần nền tảng khi chưa có chấp thuận bằng văn bản từ CommaDesk.',
          'Gây gián đoạn khả năng vận hành hệ thống thông qua tấn công tự động, thư rác hoặc lưu lượng truy cập bất thường.',
        ],
      },
      {
        id: 'availability-and-disclaimers',
        number: '06',
        title: 'Độ Sẵn Sàng Dịch Vụ, SLA & Miễn Trừ Mặc Định',
        paragraphs: [
          'Đối với gói Cloud Doanh nghiệp trả phí, CommaDesk cam kết duy trì độ sẵn sàng dịch vụ ổn định (ngoại trừ bảo trì định kỳ có thông báo trước và sự kiện bất khả kháng) theo chi tiết tại Hợp đồng hoặc SLA đính kèm.',
          'Trừ khi được quy định cụ thể trong hợp đồng ký kết riêng, website công khai và các tiện ích tham khảo được cung cấp theo nguyên trạng ("AS IS" và "AS AVAILABLE").',
        ],
      },
      {
        id: 'limitation-of-liability',
        number: '07',
        title: 'Giới Hạn Trách Nhiệm & Chấm Dứt Dịch Vụ',
        paragraphs: [
          'Trong phạm vi tối đa pháp luật cho phép, không bên nào chịu trách nhiệm đối với các thiệt hại gián tiếp, ngẫu nhiên, đặc biệt hoặc mang tính hệ quả như mất lợi nhuận kỳ vọng hoặc gián đoạn kinh doanh ngoài phạm vi hợp đồng trực tiếp.',
          'CommaDesk có quyền tạm ngưng hoặc chấm dứt quyền truy cập nếu Khách hàng vi phạm nghiêm trọng Điều khoản (bao gồm vi phạm an ninh hệ thống hoặc quy tắc sử dụng hợp lệ) mà không khắc phục sau thời hạn thông báo hợp lý. Khi chấm dứt dịch vụ, Khách hàng có khoảng thời gian hợp lý để trích xuất toàn bộ dữ liệu trước khi hệ thống thực hiện xóa an toàn.',
        ],
      },
      {
        id: 'governing-law-and-contact',
        number: '08',
        title: 'Sửa Đổi Điều Khoản, Luật Điều Chỉnh & Liên Hệ',
        paragraphs: [
          'CommaDesk có thể điều chỉnh nội dung Điều khoản này theo từng giai đoạn phát triển sản phẩm. Việc tiếp tục sử dụng website công khai hoặc nền tảng sau khi bản cập nhật có hiệu lực đồng nghĩa với việc bạn chấp thuận phiên bản mới.',
          'Các Điều khoản này được điều chỉnh theo pháp luật quy định trong Hợp đồng Doanh nghiệp của bạn (hoặc pháp luật Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam đối với việc truy cập website công khai nói chung). Mọi thông báo pháp lý hoặc câu hỏi hợp đồng vui lòng gửi về địa chỉ bên dưới.',
        ],
      },
    ],
    contactTitle: 'Bộ Phận Pháp Lý & Tuân Thủ',
    contactDesc:
      'Cần giải đáp về điều khoản cấp phép doanh nghiệp, Phụ lục Xử lý Dữ liệu (DPA) hoặc thông tin pháp lý chính thức?',
    contactEmailLabel: 'Email Pháp Lý',
    contactEmail: 'legal@commadesk.com',
    entityLabel: 'Đơn vị Cung cấp Dịch vụ',
    entityValue: 'CommaDesk',
    securityCtaLabel: 'Xem Bảo Mật & Phân Quyền',
  },
};
