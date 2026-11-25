import type { LegalDocKey, LegalDocumentContent } from '../../types';

export const legalVi: Record<LegalDocKey, LegalDocumentContent> = {
  privacy: {
    badge: 'Quyền Riêng Tư & Bảo Vệ Dữ Liệu',
    title: ['Chính Sách Bảo Mật.', 'Minh Bạch Từ Thiết Kế.'],
    subtitle:
      'Cách CommaDesk thu thập, cô lập, bảo vệ và xử lý dữ liệu cá nhân cũng như dữ liệu vận hành doanh nghiệp trên hệ sinh thái Web, Máy tính, Di động và Máy chủ riêng.',
    effectiveDateLabel: 'Ngày hiệu lực',
    effectiveDate: '25 tháng 11, 2026',
    versionLabel: 'Phiên bản',
    version: 'v2.0 (Doanh nghiệp)',
    scopeLabel: 'Phạm vi áp dụng',
    scope: 'Web Công khai, Cloud SaaS, Desktop & Mobile',
    switchDocLabel: 'Xem Điều khoản Dịch vụ',
    switchDocHref: '/terms-of-service',
    highlightsTitle: 'Cam Kết Bảo Mật Cốt Lõi',
    highlights: [
      {
        title: 'Cô Lập Dữ Liệu Đa Tổ Chức',
        description:
          'Mỗi không gian làm việc doanh nghiệp được phân tách logic chặt chẽ, đảm bảo dữ liệu công ty thành viên và chi nhánh không bao giờ rò rỉ chéo.',
      },
      {
        title: 'Không Thương Mại Hóa Dữ Liệu',
        description:
          'Chúng tôi tuyệt đối không bán, cho thuê hoặc chia sẻ hồ sơ vận hành, thông tin nhân sự hay dữ liệu phân tích cho bên quảng cáo thứ ba.',
      },
      {
        title: 'Sinh Trắc Học & GPS Do Doanh Nghiệp Kiểm Soát',
        description:
          'Chấm công Face AI, định vị GPS và phân tích camera chỉ vận hành khi tổ chức kích hoạt và tuân thủ đúng quy định pháp luật hiện hành.',
      },
    ],
    tocTitle: 'Mục Lục Nội Dung',
    sections: [
      {
        id: 'scope-and-roles',
        number: '01',
        title: 'Phạm Vi Áp Dụng & Vai Trò Kiểm Soát Dữ Liệu',
        paragraphs: [
          'Chính sách Bảo mật này giải thích cách CommaDesk ("CommaDesk", "chúng tôi") xử lý thông tin khi bạn truy cập website công khai (bao gồm trang giới thiệu này), tìm hiểu giải pháp hoặc sử dụng ứng dụng CommaDesk trên Web Cloud, Ứng dụng Máy tính (Windows/macOS) và Di động (iOS/Android).',
          'Đối với khách truy cập website công khai hoặc liên hệ tư vấn, CommaDesk đóng vai trò là Bên Kiểm soát Dữ liệu. Đối với doanh nghiệp sử dụng CommaDesk để quản trị nhân sự, dự án, kho vận, sổ văn bản, CRM hoặc AI Vision, tổ chức đăng ký là Bên Kiểm soát Dữ liệu và CommaDesk là Bên Xử lý Dữ liệu chỉ hành động theo chỉ thị hợp lệ của tổ chức đó.',
        ],
      },
      {
        id: 'information-we-collect',
        number: '02',
        title: 'Thông Tin Chúng Tôi Thu Thập',
        paragraphs: [
          'Chúng tôi chỉ thu thập những thông tin thực sự cần thiết để vận hành hệ thống doanh nghiệp đa phân hệ một cách an toàn và chính xác:',
        ],
        bullets: [
          'Thông tin Tài khoản & Tổ chức: Họ tên, email công việc, chức danh, đơn vị trực thuộc và cấu hình phân quyền đa tầng do Quản trị viên tổ chức thiết lập.',
          'Dữ liệu Vận hành & Không gian làm việc: Đầu việc Kanban/Gantt, sổ văn bản đến/đi, phiếu xuất nhập kho SKU, ticket hỗ trợ, điều phối đội xe và trao đổi nội bộ do người dùng được cấp quyền tạo lập.',
          'Phân hệ Nhân sự & AI Tùy chọn (Khi Khách hàng kích hoạt): Thời gian chấm công, tọa độ GPS tại điểm chấm công, vector nhận diện khuôn mặt Face AI và sự kiện camera được cấp quyền.',
          'Thông số Kỹ thuật & Nhật ký An toàn: Phiên đăng nhập, định danh thiết bị tin cậy, địa chỉ IP, thông tin chẩn đoán trình duyệt/hệ điều hành và nhật ký kiểm toán đa lớp phục vụ bảo mật.',
          'Tùy chọn Giao diện Cục bộ: Lưu trữ nhẹ trên trình duyệt như ngôn ngữ hiển thị (Tiếng Việt hoặc Tiếng Anh) thông qua localStorage.',
        ],
        callout: {
          title: 'Đối với Khách truy cập Trang Công khai',
          content:
            'Việc xem trang giới thiệu, cẩm nang tính năng và các trang pháp lý công khai không yêu cầu đăng nhập. Chúng tôi chỉ lưu tùy chọn ngôn ngữ ngay trên trình duyệt của bạn.',
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
          'Cung cấp, xác thực đăng nhập (bao gồm bảo mật 2 lớp 2FA/OTP) và duy trì không gian làm việc đa chi nhánh.',
          'Thực thi chính sách phân quyền đa tầng để mỗi nhân sự chỉ tiếp cận đúng phân hệ và dữ liệu thuộc phạm vi nhiệm vụ.',
          'Tổng hợp báo cáo vận hành thời gian thực, bảng công, dữ liệu tính lương tự động và cảnh báo SLA theo cấu hình của doanh nghiệp.',
          'Phát hiện truy cập bất thường, thu hồi phiên từ xa và duy trì nhật ký hoạt động minh bạch, chống chỉnh sửa.',
          'Hỗ trợ kỹ thuật, giám sát độ ổn định hạ tầng và gửi thông báo quan trọng về bảo mật hoặc cập nhật phiên bản.',
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
          'Tích hợp do Khách hàng chủ động kết nối: Đồng bộ hai chiều với phần mềm bên ngoài được Quản trị viên cấu hình (như phần mềm kế toán/ERP, hệ thống bán hàng POS KiotViet hoặc kênh thông báo Zalo/Telegram/Webhook).',
          'Đơn vị cung cấp Hạ tầng (Sub-processors): Đối tác máy chủ đám mây, lưu trữ đối tượng mã hóa và dịch vụ gửi thông báo tuân thủ thỏa thuận bảo mật nghiêm ngặt.',
          'Yêu cầu Pháp lý: Khi có yêu cầu hợp lệ từ cơ quan nhà nước có thẩm quyền hoặc quy định pháp luật bắt buộc, kèm thông báo cho tổ chức khách hàng trong phạm vi pháp luật cho phép.',
        ],
      },
      {
        id: 'security-and-isolation',
        number: '05',
        title: 'Kiến Trúc Bảo Mật & Thời Gian Lưu Trữ',
        paragraphs: [
          'CommaDesk áp dụng cơ chế bảo vệ nhiều lớp xuyên suốt đường truyền, lưu trữ và tầng ứng dụng. Toàn bộ kết nối được mã hóa TLS, thông tin xác thực được băm mật mã an toàn và mọi tác vụ quản trị quan trọng đều được ghi nhận vào nhật ký kiểm toán.',
          'Với các tập đoàn hoặc cơ quan hành chính yêu cầu chủ quyền dữ liệu tuyệt đối, CommaDesk cung cấp mô hình Máy chủ Riêng (On-Premises), cho phép toàn bộ dữ liệu nằm hoàn toàn trong hạ tầng mạng nội bộ của khách hàng.',
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
          'Quyền rút lại sự đồng ý đối với các tính năng tùy chọn (như chấm công sinh trắc học hoặc định vị GPS) thông qua Quản trị viên đơn vị hoặc chuyển sang phương thức chấm công thay thế.',
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
          'Chúng tôi có thể cập nhật Chính sách Bảo mật định kỳ để phản ánh các tính năng mới, quy định pháp lý mới hoặc cải tiến an ninh hệ thống. Mọi thay đổi sẽ được công bố công khai tại trang này kèm Ngày hiệu lực và Số phiên bản cập nhật.',
          'Nếu bạn có câu hỏi về chính sách bảo mật, danh sách bên xử lý phụ hoặc yêu cầu liên quan đến dữ liệu cá nhân, vui lòng liên hệ Bộ phận Bảo mật Dữ liệu theo thông tin bên dưới.',
        ],
      },
    ],
    contactTitle: 'Liên Hệ Về Quyền Riêng Tư & Bảo Mật Dữ Liệu',
    contactDesc:
      'Cần gửi yêu cầu bảo vệ dữ liệu, rà soát tuân thủ an ninh thông tin hoặc xác minh chính sách cho doanh nghiệp của bạn?',
    contactEmailLabel: 'Email Bảo Mật',
    contactEmail: 'privacy@commadesk.com',
    entityLabel: 'Đơn vị Chủ quản / Cung cấp',
    entityValue: 'CommaDesk Inc.',
    securityCtaLabel: 'Xem Kiến Trúc Bảo Mật',
  },

  terms: {
    badge: 'Pháp Lý & Tuân Thủ',
    title: ['Điều Khoản Dịch Vụ.', 'Quy Chuẩn Vận Hành Rõ Ràng.'],
    subtitle:
      'Các điều khoản ràng buộc quy định việc truy cập website công khai, không gian làm việc đám mây, ứng dụng máy tính/di động và hệ sinh thái phân hệ của CommaDesk.',
    effectiveDateLabel: 'Ngày hiệu lực',
    effectiveDate: '25 tháng 11, 2026',
    versionLabel: 'Phiên bản',
    version: 'v2.0 (Doanh nghiệp)',
    scopeLabel: 'Phạm vi áp dụng',
    scope: 'Web Công khai, Cloud SaaS & Ứng dụng Doanh nghiệp',
    switchDocLabel: 'Xem Chính sách Bảo mật',
    switchDocHref: '/privacy-policy',
    highlightsTitle: 'Trụ Cột Thỏa Thuận Chính',
    highlights: [
      {
        title: 'Khách Hàng Toàn Quyền Sở Hữu Dữ Liệu',
        description:
          'Doanh nghiệp giữ 100% quyền sở hữu và quyền trích xuất đối với toàn bộ dữ liệu dự án, nhân sự, văn bản và tài sản vận hành.',
      },
      {
        title: 'Linh Hoạt Cloud & Máy Chủ Riêng',
        description:
          'Phạm vi cấp phép rõ ràng cho cả mô hình Đám mây SaaS trực tuyến lẫn triển khai trên Máy chủ riêng nội bộ (On-Premises).',
      },
      {
        title: 'Cam Kết Vận Hành & Quản Trị Minh Bạch',
        description:
          'Tiêu chuẩn độ sẵn sàng SLA rõ ràng, trách nhiệm phân quyền theo vai trò và quy tắc sử dụng hệ thống an toàn.',
      },
    ],
    tocTitle: 'Mục Lục Nội Dung',
    sections: [
      {
        id: 'acceptance-of-terms',
        number: '01',
        title: 'Chấp Thuận Điều Khoản',
        paragraphs: [
          'Khi truy cập website công khai của CommaDesk, tìm hiểu tài liệu sản phẩm hoặc triển khai sử dụng nền tảng CommaDesk (trên Web, Ứng dụng Máy tính Windows/macOS hoặc Di động iOS/Android), bạn đồng ý tuân thủ các Điều khoản Dịch vụ này ("Điều khoản") cùng Chính sách Bảo mật của chúng tôi.',
          'Nếu bạn xác lập thỏa thuận này nhân danh một doanh nghiệp, cơ quan nhà nước hoặc tổ chức pháp nhân ("Khách hàng"), bạn xác nhận mình có đầy đủ thẩm quyền đại diện để ràng buộc tổ chức đó và các người dùng trực thuộc.',
        ],
      },
      {
        id: 'service-scope-and-deployment',
        number: '02',
        title: 'Phạm Vi Nền Tảng & Mô Hình Triển Khai',
        paragraphs: [
          'CommaDesk cung cấp hệ điều hành doanh nghiệp hợp nhất đa phân hệ bao gồm: Dự án & Công việc, Tổ chức & Nhân sự, Sổ văn bản & Ký số, Kho SKU & Đội xe GPS, CRM & Helpdesk, Truyền thông nội bộ, Camera AI và Quản trị Bảo mật.',
        ],
        bullets: [
          'Phiên bản Cloud SaaS: Do CommaDesk vận hành trên hạ tầng đám mây với cơ chế cô lập dữ liệu đa tổ chức, sao lưu định kỳ và cập nhật liên tục.',
          'Phiên bản Máy chủ Riêng (On-Premises): Triển khai trên hạ tầng do Khách hàng tự quản lý theo Hợp đồng Doanh nghiệp hoặc Đơn đặt hàng riêng.',
          'Trang Giới thiệu & Tài liệu Công khai: Được cung cấp công khai nhằm mục đích tham khảo thông tin và kiểm chứng tuân thủ; quyền sử dụng từng phân hệ cụ thể phụ thuộc vào gói dịch vụ đã đăng ký.',
        ],
      },
      {
        id: 'accounts-and-security',
        number: '03',
        title: 'Tài Khoản Doanh Nghiệp & Trách Nhiệm Bảo Mật',
        paragraphs: [
          'Khách hàng chịu trách nhiệm thiết lập phân quyền đa tầng, quản lý cấp phát/thu hồi tài khoản nhân sự và bảo vệ thông tin đăng nhập quản trị.',
        ],
        bullets: [
          'Áp dụng chính sách mật khẩu mạnh và bật Xác thực 2 lớp (2FA/OTP) cho các tài khoản quản trị hoặc có quyền phê duyệt quan trọng.',
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
          'CommaDesk giữ toàn bộ quyền sở hữu trí tuệ đối với mã nguồn nền tảng, giao diện người dùng, tài sản đồ họa, nhãn hiệu, logo, tài liệu hướng dẫn và thuật toán cốt lõi. Ngoại trừ quyền sử dụng dịch vụ trong thời hạn hợp đồng, không có quyền sở hữu trí tuệ nào của nền tảng được chuyển nhượng.',
        ],
        callout: {
          title: 'Cam Kết Không Chiếm Hữu Dữ Liệu Khách Hàng',
          content:
            'CommaDesk chỉ xử lý Dữ liệu Khách hàng để cung cấp, bảo mật, khắc phục sự cố và sao lưu dịch vụ — tuyệt đối không sử dụng dữ liệu kinh doanh nội bộ của bạn để cạnh tranh hoặc huấn luyện mô hình công khai trái phép.',
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
          'Cố ý vượt qua cơ chế cô lập dữ liệu đa tổ chức, cổng xác thực, giới hạn lưu lượng hoặc ranh giới phân quyền.',
          'Tải lên nội dung vi phạm pháp luật, mã độc hoặc xử lý dữ liệu sinh trắc học/camera khi chưa thông báo và xin chấp thuận hợp lệ từ người lao động hoặc khách thăm theo luật định.',
          'Dịch ngược mã nguồn, cào dữ liệu trái phép, tách cấu phần hoặc bán lại nền tảng khi chưa có chấp thuận bằng văn bản từ CommaDesk.',
          'Gây gián đoạn khả năng vận hành hệ thống thông qua tấn công tự động, thư rác hoặc vòng lặp kết nối bất thường.',
        ],
      },
      {
        id: 'availability-and-disclaimers',
        number: '06',
        title: 'Độ Sẵn Sàng Dịch Vụ, SLA & Miễn Trừ Mặc Định',
        paragraphs: [
          'Đối với gói Cloud Doanh nghiệp trả phí, CommaDesk cam kết mục tiêu vận hành ổn định cao (99.9% uptime, ngoại trừ bảo trì định kỳ có thông báo trước và sự kiện bất khả kháng) theo chi tiết tại Hợp đồng hoặc SLA đính kèm.',
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
    entityValue: 'CommaDesk Inc.',
    securityCtaLabel: 'Xem Kiến Trúc Bảo Mật',
  },
};
