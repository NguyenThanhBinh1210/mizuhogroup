import { Link } from 'react-router-dom'

const Socialmedia = () => {
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
        <h1 className='text-5xl text-primary text-center mb-5'>Điều khoản sử dụng truyền thông xã hội</h1>
        <p className='text-lg text-[#3f464a] mb-9'>
          Vui lòng đọc và chấp nhận các điều khoản sử dụng mạng xã hội sau đây (sau đây gọi là "điều khoản sử dụng")
          trước khi sử dụng bất kỳ tài khoản mạng xã hội chính thức nào do Mizuho Financial Group, Inc. (sau đây gọi là
          "MHFG") quản lý hoặc bất kỳ dịch vụ liên quan nào (tài khoản và dịch vụ liên quan) sau đây gọi là "dịch vụ").
        </p>
        <p className='text-lg text-[#3f464a] mb-9'>
          Các tài khoản mạng xã hội chính thức của MHFG được liệt kê trên trang web MHFG.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Điều 1: Áp dụng và sửa đổi Điều khoản sử dụng</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          1. Các điều khoản sử dụng được áp dụng cho bất kỳ người dùng dịch vụ nào (sau đây gọi là "người dùng").
          <br />
          2. Người dùng sẽ được coi là đã chấp nhận các điều khoản sử dụng ngay khi họ bắt đầu sử dụng dịch vụ.
          <br />
          3. MHFG có thể sửa đổi các điều khoản sử dụng mà không cần có sự đồng ý trước của người dùng hoặc cung cấp
          thông báo sau đó. Mọi thay đổi về điều khoản sử dụng sẽ có hiệu lực kể từ thời điểm điều khoản sử dụng mới
          được công bố trên trang web MHFG.
          <br />
          4. Trong trường hợp các điều khoản sử dụng riêng cho một tài khoản mạng xã hội chính thức của MHFG cụ thể khác
          với các điều khoản sử dụng chung này hoặc khi một mục xuất hiện trong các điều khoản sử dụng riêng lẻ nhưng
          không xuất hiện trong các điều khoản sử dụng chung, thì các điều khoản sử dụng riêng lẻ sẽ được ưu tiên .
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Điều 2: Giờ sử dụng</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Các tài khoản mạng xã hội chính thức của MHFG sẽ được theo dõi và quản lý tích cực từ 9:00 đến 17:00 (Giờ
          chuẩn Nhật Bản) chỉ vào các ngày trong tuần (tức là không bao gồm Thứ Bảy, Chủ Nhật, ngày lễ, ngày lễ thay thế
          và khoảng thời gian từ ngày 31 tháng 12 đến ngày 3 tháng 1). năm tiếp theo). Tuy nhiên, MHFG có thể giám sát
          và quản lý các tài khoản mạng xã hội chính thức vào những thời điểm khác với những tài khoản được liệt kê ở
          trên.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Điều 3: Truy cập thông tin cơ bản</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          MHFG có thể truy cập tất cả thông tin cơ bản có sẵn công khai trên tài khoản mạng xã hội của người dùng, chẳng
          hạn như tên, hồ sơ, ảnh, giới tính, danh sách bạn bè, v.v., trong giới hạn do điều khoản sử dụng nền tảng mạng
          xã hội đặt ra.
          <br />
          Mọi thông tin cá nhân của người dùng mà MHFG thu được sẽ được xử lý theo chính sách quyền riêng tư của MHFG .
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Điều 5: Quản lý quyền sở hữu trí tuệ</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          1. Bản quyền, nhãn hiệu hoặc bất kỳ quyền sở hữu trí tuệ nào khác liên quan đến thông tin hiển thị trên các
          tài khoản mạng xã hội do MHFG quản lý đều thuộc về MHFG hoặc chủ sở hữu quyền.
          <br />
          2. Người dùng không được sử dụng bất kỳ thông tin nào trên tài khoản mạng xã hội chính thức của MHFG theo bất
          kỳ cách nào trái với các giới hạn được quy định trong luật sở hữu trí tuệ mà không có sự cho phép của chủ sở
          hữu quyền.
          <br />
          3. Khi người dùng đăng bất kỳ thông tin nào lên tài khoản mạng xã hội chính thức của MHFG, người dùng đó được
          coi là đã cấp cho MHFG quyền sử dụng bất kỳ tài sản trí tuệ nào có trong thông tin đó ở bất kỳ đâu trên thế
          giới, trên cơ sở không độc quyền, miễn phí; người dùng cũng sẽ không thực hiện quyền sở hữu trí tuệ của mình
          đối với MHFG liên quan đến thông tin này.
          <br />
          4. Nếu người dùng vi phạm các quy định trên và do đó gây ra tranh chấp hoặc vấn đề khác giữa họ và bên thứ ba,
          chẳng hạn như chủ sở hữu quyền, họ sẽ tự chịu trách nhiệm giải quyết vấn đề bằng chi phí của mình.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Điều 6: Tuyên bố từ chối trách nhiệm</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          1. Bất kỳ thông tin nào được MHFG công bố trên các tài khoản mạng xã hội chính thức của mình đều không được
          coi là quan điểm hoặc quan điểm chính thức của MHFG và MHFG không đảm bảo tính chính xác, đầy đủ hoặc hữu ích
          của thông tin đó.
          <br />
          2. Mặc dù MHFG sẽ cố gắng đảm bảo rằng thông tin được công bố trên các tài khoản truyền thông xã hội chính
          thức của mình là hợp lệ tại thời điểm công bố nhưng thông tin đó có thể thay đổi bất kỳ lúc nào sau đó. Thông
          tin được công bố trên tài khoản mạng xã hội chính thức chỉ là một phần trong toàn bộ thông tin do MHFG phân
          phối. Một số thông tin MHFG sẽ không được phát tán qua mạng xã hội.
          <br />
          3. MHFG có thể sửa đổi hoặc xóa thông tin được công bố trên các tài khoản mạng xã hội chính thức của mình mà
          không cần cảnh báo trước. Trong những trường hợp không thể tránh khỏi, MHFG có thể tạm thời đình chỉ hoặc
          ngừng vĩnh viễn các dịch vụ truyền thông xã hội mà không cần cảnh báo.
          <br />
          4. MHFG không có nghĩa vụ phải trả lời bất kỳ câu hỏi nào, v.v. được gửi đến các tài khoản truyền thông xã hội
          chính thức của mình.
          <br />
          5. MHFG không chịu trách nhiệm đối với bất kỳ tổn thất hoặc thiệt hại nào mà người dùng phải gánh chịu do sử
          dụng hoặc không thể sử dụng tài khoản mạng xã hội chính thức của MHFG.
          <br />
          6. MHFG không chịu trách nhiệm đối với bất kỳ tranh chấp nào phát sinh giữa người dùng hoặc giữa người dùng và
          bên thứ ba liên quan đến tài khoản truyền thông xã hội chính thức của MHFG (điều này bao gồm nhưng không giới
          hạn ở các vấn đề phát sinh từ thông tin được đăng bởi người dùng hoặc người dùng). Trong trường hợp đó,
          (những) người dùng phải chịu trách nhiệm tự mình giải quyết tranh chấp. Vì các tài khoản mạng xã hội chính
          thức của MHFG được chạy trên nền tảng của nhà cung cấp dịch vụ mạng xã hội tương ứng nên MHFG không đảm bảo
          chức năng hoặc sự an toàn của việc sử dụng mạng xã hội. Hơn nữa, MHFG không có nghĩa vụ trả lời bất kỳ câu hỏi
          nào, v.v. liên quan đến trạng thái dịch vụ, phương pháp sử dụng hoặc các vấn đề kỹ thuật của nền tảng truyền
          thông xã hội.
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Điều 7: Luật điều chỉnh và thẩm quyền</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          1. Các điều khoản sử dụng này được điều chỉnh bởi luật pháp Nhật Bản.
          <br />
          2. Mọi tranh chấp phát sinh liên quan đến dịch vụ sẽ được xử lý theo thẩm quyền xét xử đầu tiên của Tòa án
          quận Tokyo.
        </p>
      </div>
    </div>
  )
}

export default Socialmedia
