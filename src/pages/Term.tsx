import { Link } from 'react-router-dom'

const Term = () => {
  return (
    <div>
      <div className='border-b py-4 '>
        <div className='max-w-[1290px] mx-auto text-xs flex items-center gap-x-3'>
          <Link to={'/'}>Worldwide </Link>
          <svg
            className='w-3 h-3 text-gray-800 '
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m9 5 7 7-7 7' />
          </svg>
          <Link to={'/'}>Terms and Conditions</Link>
        </div>
      </div>
      <div className='py-10 px-4  max-w-[1290px] mx-auto'>
        <h1 className='text-5xl text-primary text-center mb-5'>Các điều khoản và điều kiện</h1>
        <p className='text-lg text-[#3f464a] mb-9'>
          xin hãy đọc kỹ càng những điều khoản và điều kiện này. Bằng cách truy cập Trang web này và bất kỳ trang nào
          trong đó, bạn đồng ý bị ràng buộc bởi các điều khoản và điều kiện được mô tả bên dưới. Nếu bạn không đồng ý
          với các điều khoản và điều kiện được mô tả bên dưới, vui lòng không truy cập Trang web này hoặc bất kỳ trang
          nào trong đó.
        </p>
        <p className='text-lg text-[#3f464a] mb-9'>
          Trang web của Tập đoàn Tài chính Mizuho ("Trang web") được quản lý bởi Tập đoàn Tài chính Mizuho ("MHFG").
          MHFG có quyền, bất cứ lúc nào và theo quyết định riêng của mình, thay đổi, sửa đổi, thêm hoặc xóa các phần của
          các điều khoản và điều kiện này mà không cần thông báo trước. Vui lòng kiểm tra các điều khoản và điều kiện
          này định kỳ để biết những thay đổi.
        </p>
        <p className='text-lg text-[#3f464a] mb-9'>
          Không có thông tin hay ý kiến nào có trên Trang web cấu thành sự chào mời hoặc đề nghị của MHFG hoặc các công
          ty trong tập đoàn của MHFG để mua hoặc bán bất kỳ công cụ tài chính nào hoặc cung cấp bất kỳ lời khuyên hoặc
          dịch vụ đầu tư nào.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>
          Tuyên bố từ chối trách nhiệm về các dự đoán trong tương lai
        </h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Thông tin trên Trang web có thể bao gồm các tuyên bố hướng tới tương lai liên quan đến điều kiện tài chính,
          kết quả hoạt động và kinh doanh của MHFG và các công ty thuộc tập đoàn (gọi chung là "tập đoàn Mizuho"). những
          tuyên bố hướng tới tương lai này phản ánh những rủi ro và sự không chắc chắn nhất định do những thay đổi trong
          môi trường quản lý. MHFG không bảo đảm hay bảo đảm về tính chính xác của những tuyên bố này.
        </p>
        <p className='text-lg text-[#3f464a] mb-9'>
          Trang web này không được tạo ra nhằm mục đích kêu gọi đầu tư. Người đọc được cảnh báo không nên tin tưởng quá
          mức vào những tuyên bố hướng tới tương lai này.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Giao dịch nội gián</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Mục đích của Trang web là tạo điều kiện tiết lộ thông tin một cách công bằng và kịp thời cho các cổ đông, nhà
          đầu tư và khách hàng của Tập đoàn Mizuho, cũng như cung cấp nhiều loại thông tin, bao gồm cả thông cáo báo
          chí. Thông tin có trên Trang web có thể bao gồm "thông tin quan trọng" như được định nghĩa bởi Luật Giao dịch
          và Công cụ Tài chính. Nếu một người nhận được thông tin đó bằng cách xem Trang web trong vòng mười hai giờ sau
          khi tiết lộ thông tin đó cho giới truyền thông và người đó sau đó thực hiện bất kỳ hoạt động mua, bán hoặc
          giao dịch nào khác được chỉ định theo Luật Giao dịch và Công cụ Tài chính đối với cổ phiếu hoặc chứng khoán
          khác hoặc cụ do Tập đoàn Mizuho phát hành, các giao dịch đó có thể bị coi là vi phạm Luật Giao dịch và Công cụ
          Tài chính. Khách truy cập Trang web là cư dân của các quốc gia khác ngoài Nhật Bản có thể phải chịu các hạn
          chế tương tự theo luật pháp của quốc gia cư trú của họ và MHFG mong muốn rằng những khách truy cập đó sẽ sử
          dụng thông tin có trong Trang web tuân thủ các hạn chế đó.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Bản quyền</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Bản quyền (c) Tập đoàn tài chính Mizuho, Inc. Mọi quyền được bảo lưu.
        </p>
        <p className='text-lg text-[#3f464a] mb-9'>
          Toàn bộ nội dung có trên Trang web (bao gồm nhưng không giới hạn ở tất cả thông tin, nhãn hiệu, thiết kế,
          v.v.) đều có bản quyền với mọi quyền được bảo lưu và không được sử dụng, sao chép hoặc thay đổi mà không có sự
          đồng ý trước rõ ràng của MHFG.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Nhãn hiệu</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Các quyền liên quan đến nhãn hiệu, biểu tượng, logo, tên thương mại, v.v. được sử dụng trên Trang web được bảo
          vệ theo Luật Nhãn hiệu và các luật khác. Việc sử dụng chúng, v.v. mà không có sự cho phép của chủ sở hữu quyền
          tương ứng đều bị cấm theo Luật Nhãn hiệu và các luật khác.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>
          Tuyên bố miễn trừ trách nhiệm bảo hành và giới hạn trách nhiệm pháp lý
        </h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Thông tin trên Trang web được cung cấp "nguyên trạng" và "có sẵn". Nhóm Mizuho không đảm bảo tính chính xác,
          đầy đủ hoặc đầy đủ của thông tin và tài liệu có trên Trang này và từ chối trách nhiệm rõ ràng đối với các lỗi
          hoặc thiếu sót có trong thông tin và tài liệu đó. không có sự bảo đảm dưới bất kỳ hình thức nào, rõ ràng hay
          ngụ ý, đối với nội dung của Trang web này. Nhóm Mizuho không bảo đảm hoặc đảm bảo về tính chính xác, đầy đủ
          hoặc đầy đủ của thông tin trên Trang này cho bất kỳ mục đích cụ thể nào và từ chối rõ ràng mọi bảo đảm về khả
          năng bán được hoặc sự phù hợp cho một mục đích cụ thể.
        </p>
        <p className='text-lg text-[#3f464a] mb-9'>
          Nhóm Mizuho không đảm bảo rằng các chức năng có sẵn trên Trang web sẽ không bị gián đoạn hoặc không có lỗi,
          các lỗi đó sẽ được sửa chữa hoặc Trang web hoặc các máy chủ cung cấp nội dung đó không có vi-rút hoặc các
          thành phần có hại khác. Nhóm Mizuho không bảo đảm hoặc đưa ra bất kỳ tuyên bố nào về việc sử dụng hoặc kết quả
          của việc sử dụng nội dung của Trang web hoặc về các trang web liên kết đến hoặc từ Trang web hoặc về tính
          chính xác, hợp lệ, kịp thời hoặc đầy đủ của bất kỳ thông tin nào có sẵn cho bất kỳ mục đích cụ thể nào.
        </p>
        <p className='text-lg text-[#3f464a] mb-9'>
          Cả MHFG và bất kỳ chi nhánh, giám đốc, cán bộ hoặc nhân viên nào của MHFG cũng như bất kỳ nhà cung cấp bên thứ
          ba nào sẽ không chịu trách nhiệm pháp lý hoặc có bất kỳ trách nhiệm nào đối với bất kỳ tổn thất hoặc thiệt hại
          nào, bao gồm nhưng không giới hạn các thiệt hại trực tiếp hoặc gián tiếp, đặc biệt, ngẫu nhiên hoặc do hậu quả
          , tổn thất hoặc chi phí phát sinh liên quan đến Trang web này hoặc bất kỳ trang web liên kết nào, hoặc việc sử
          dụng chúng hoặc việc bất kỳ bên nào không thể sử dụng bất kỳ trang nào trong đó hoặc đối với bất kỳ thiệt hại
          nào, bao gồm nhưng không giới hạn các thiệt hại, tổn thất trực tiếp hoặc gián tiếp, đặc biệt, ngẫu nhiên hoặc
          do hậu quả hoặc các chi phí phát sinh liên quan đến bất kỳ lỗi hoặc gián đoạn nào của Trang web, hoặc do hành
          động hoặc thiếu sót của bất kỳ bên nào khác liên quan đến việc tạo ra Trang web hoặc dữ liệu chứa trong đó.
          trong đây hoặc do bất kỳ nguyên nhân nào khác liên quan đến việc truy cập, không thể truy cập hoặc sử dụng
          Trang web hoặc các nội dung này, gián đoạn, khiếm khuyết, chậm trễ trong hoạt động hoặc truyền tải, vi-rút máy
          tính hoặc lỗi đường truyền hoặc hệ thống, cho dù các tình huống có phát sinh hay không sự kiện đó có thể nằm
          trong tầm kiểm soát của MHFG hoặc của bất kỳ nhà cung cấp hỗ trợ phần mềm hoặc dịch vụ nào.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Liên kết</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Trang web này có thể chứa các liên kết đến các trang web được kiểm soát hoặc quản lý bởi các bên thứ ba không
          liên kết với MHFG. MHFG không chịu trách nhiệm pháp lý về tính chính xác, hợp lệ, kịp thời hoặc đầy đủ của bất
          kỳ thông tin nào có trong bất kỳ liên kết nào như vậy. MHFG từ chối trách nhiệm pháp lý đối với mọi thông tin,
          tài liệu, sản phẩm hoặc dịch vụ được cung cấp tại bất kỳ trang web nào của bên thứ ba được liên kết với trang
          web này. bằng cách tạo liên kết đến trang web của bên thứ ba, MHFG không xác nhận hoặc giới thiệu bất kỳ sản
          phẩm hoặc dịch vụ nào được cung cấp hoặc thông tin có trên trang web đó, MHFG cũng không chịu trách nhiệm pháp
          lý về bất kỳ sai sót nào của sản phẩm hoặc dịch vụ được cung cấp hoặc quảng cáo trên các trang web đó.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Cookie</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Trang web sử dụng "cookie" nhằm mục đích đảm bảo an ninh và cung cấp thông tin phù hợp khi khách truy cập
          Trang web. Cookie là công nghệ cho phép nhận dạng việc truy cập lặp lại và các lượt truy cập vào Trang web của
          cùng một khách truy cập thông qua việc lưu trữ các tệp văn bản (thông tin) nhất định trên thiết bị đầu cuối
          của khách truy cập thông qua trình duyệt web. Tuy nhiên, các cookie được sử dụng trên Trang web không chứa
          thông tin nhận dạng khách truy cập. Ngoài ra, thông thường khách truy cập có thể thay đổi cài đặt trình duyệt
          để từ chối chấp nhận cookie hoặc hiển thị cảnh báo khi cookie được chấp nhận. (Thông thường, các trình duyệt
          được định cấu hình để chấp nhận cookie.) Tuy nhiên, do đó, một phần dịch vụ trên trang web có thể không khả
          dụng. Tham khảo phần Cài đặt cookie để biết thông tin về việc thay đổi cài đặt trình duyệt.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Bảo vệ</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Trang web sử dụng đường truyền được mã hóa SSL (giao thức Lớp cổng bảo mật) cho các dịch vụ liên quan đến việc
          xử lý thông tin của khách truy cập. Với việc truyền mã hóa SSL, thông tin khách truy cập được mã hóa trước khi
          truyền.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Đèn hiệu web</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Trang web sử dụng "đèn hiệu web" nhằm mục đích cung cấp dịch vụ tốt hơn cho khách truy cập. Đèn hiệu web là
          các tệp hình ảnh nhỏ được nhúng trong các trang web. (Đèn hiệu web còn được gọi là "GIF rõ ràng"). Bằng cách
          nhúng các tín hiệu web vào các trang web cụ thể, MHFG thu thập dữ liệu thống kê trên trang web về các vấn đề
          như liệu các trang web đó đã được truy cập hay chưa và số lượt truy cập. Trong mọi trường hợp, MHFG không thu
          thập thông tin mà từ đó các cá nhân có thể được nhận dạng thông qua việc sử dụng đèn hiệu web.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Sẵn có quốc tế</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Trang web này không nhằm mục đích phân phối hoặc sử dụng bởi bất kỳ cá nhân hoặc tổ chức nào ở bất kỳ khu vực
          tài phán hoặc quốc gia nào mà việc phân phối hoặc sử dụng đó trái với luật pháp hoặc quy định của địa phương.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Xử lý thông tin cá nhân</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          MHFG đã thiết lập Chính sách bảo mật liên quan đến thông tin khách hàng. Để biết chi tiết về việc xử lý thông
          tin cá nhân, vui lòng đọc Chính sách quyền riêng tư .
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Thông báo khác</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Về cơ bản, nội dung được dựa trên ngày đăng. Các điều khoản và điều kiện khác có thể được mô tả ở nơi khác
          trên Trang web. Vui lòng kiểm tra các điều khoản và điều kiện này cũng như các điều khoản và điều kiện nói
          trên.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Luật chi phối</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Các điều khoản và điều kiện này cũng như việc sử dụng Trang web này sẽ chịu sự điều chỉnh của luật pháp Nhật
          Bản.
        </p>
      </div>
    </div>
  )
}

export default Term
