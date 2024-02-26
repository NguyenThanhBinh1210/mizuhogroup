import { Link } from 'react-router-dom'

const Privacy = () => {
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
        <h1 className='text-5xl text-primary text-center mb-5'>Chính sách bảo mật</h1>
        <p className='text-primary text-center text-4xl'>Chính Sách Bảo Mật Về Thông Tin Khách Hàng</p>
        <div className='text-right mt-8 text-lg mb-9'>
          <p>
            Mizuho Financial Group, Inc. (Đơn vị xử lý thông tin cá nhân)
            <br />
            Otemachi Tower 1-5-5 Otemachi, Chiyoda-ku,
            <br />
            Chủ tịch Tokyo & Giám đốc điều hành Tập đoàn Masahiro Kihara
          </p>
        </div>
        <p className='text-lg text-[#3f464a] mb-9'>
          Mizuho Financial Group, Inc. ("MHFG") sau đây thiết lập và công bố "Chính sách quyền riêng tư liên quan đến
          thông tin khách hàng" ("Chính sách này"), trong đó đặt ra các chính sách của MHFG trong việc bảo vệ thông tin
          cá nhân của khách hàng và cách tiếp cận cơ bản của MHFG trong việc xử lý thông tin cá nhân của khách hàng.
          thông tin (bao gồm Mã số cá nhân của khách hàng và thông tin cá nhân chứa Mã số cá nhân (sau đây gọi chung là
          "Thông tin cá nhân cụ thể, v.v.")), áp dụng cho Tập đoàn tài chính Mizuho bao gồm MHFG, các công ty con và chi
          nhánh hợp nhất của nó (mà được hạch toán theo phương pháp vốn chủ sở hữu) được liệt kê trong Báo cáo tài chính
          của MHFG.
        </p>
        <h4 className='text-3xl text-[#3f464a] mb-9'>Chính sách quản lý</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Tập đoàn tài chính Mizuho nhận thấy việc bảo vệ và sử dụng thông tin cá nhân phù hợp là trách nhiệm xã hội
          quan trọng và nỗ lực hết sức để bảo vệ và sử dụng thông tin cá nhân một cách phù hợp tuân thủ luật pháp và quy
          định bao gồm "Luật bảo vệ dữ liệu cá nhân tại Nhật Bản", "Đạo luật sử dụng thông tin cá nhân tại Nhật Bản".
          Những con số để xác định một cá nhân cụ thể trong thủ tục hành chính" và các quy định liên quan khác cũng như
          quy định nội bộ của Tập đoàn tài chính Mizuho, bao gồm cả Chính sách này khi Tập đoàn tài chính Mizuho tiến
          hành kinh doanh.
        </p>
        <h4 className='text-3xl text-[#3f464a] mb-9'>Mua lại thích hợp</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Tập đoàn tài chính Mizuho sẽ thu thập thông tin cá nhân cần thiết để tiến hành hoạt động kinh doanh của mình
          bằng các phương tiện phù hợp và hợp pháp.
        </p>
        <h4 className='text-3xl text-[#3f464a] mb-9'>Mục đích sử dụng</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Tập đoàn tài chính Mizuho sẽ nêu rõ mục đích sử dụng thông tin cá nhân và sẽ xử lý thông tin cá nhân trong
          phạm vi cần thiết để đạt được mục đích đó và sẽ không sử dụng thông tin cá nhân ngoài phạm vi đó.
        </p>
        <p className='text-lg text-[#3f464a] mb-9'>
          Trong trường hợp có những hạn chế đặc biệt đối với việc sử dụng thông tin cá nhân cụ thể theo luật và/hoặc quy
          định, chẳng hạn như việc sử dụng Mã số cá nhân theo "Đạo luật sử dụng mã số để nhận dạng một cá nhân cụ thể
          trong thủ tục hành chính", Tập đoàn tài chính Mizuho sẽ không xử lý thông tin cá nhân cụ thể đó cho các mục
          đích không liên quan đến các vấn đề nói trên.
        </p>
        <p className='text-lg text-[#3f464a] mb-9'>
          Mục đích sử dụng thông tin cá nhân được quy định thông qua trang web hoặc các biện pháp khác do mỗi công ty
          thuộc Tập đoàn tài chính Mizuho cung cấp.
        </p>
        <h4 className='text-3xl text-[#3f464a] mb-9'>Cấm sử dụng thông tin cá nhân không đúng cách</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Tập đoàn tài chính Mizuho sẽ không sử dụng thông tin cá nhân bằng các phương pháp có thể thúc đẩy hoặc gây ra
          các hành động bất hợp pháp hoặc bất công.
        </p>
        <h4 className='text-3xl text-[#3f464a] mb-9'>Cung cấp thông tin cá nhân cho bên thứ ba</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Về nguyên tắc, Tập đoàn Tài chính Mizuho sẽ không cung cấp thông tin cá nhân cho bất kỳ bên thứ ba nào trừ khi
          cá nhân liên quan đồng ý với việc sử dụng đó hoặc được pháp luật cho phép. Tuy nhiên, Tập đoàn Tài chính
          Mizuho có thể cung cấp thông tin cá nhân cho các đơn vị liên quan có quy định khác mà không có sự đồng ý của
          khách hàng trong các trường hợp sau:
        </p>
        <p className='text-lg text-[#3f464a] mb-9'>
          Tuy nhiên, đối với Thông tin cá nhân cụ thể, v.v., Tập đoàn tài chính Mizuho sẽ không cung cấp thông tin đó
          cho bên thứ ba ngoại trừ các trường hợp được quy định trong "Đạo luật sử dụng số để nhận dạng một cá nhân cụ
          thể trong thủ tục hành chính".
        </p>
        <h4 className='text-3xl text-[#3f464a] mb-9'>Xử lý thông tin nhạy cảm</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Tập đoàn tài chính Mizuho sẽ không thu thập, sử dụng và cung cấp cho bất kỳ thông tin nhạy cảm nào của bên thứ
          ba (*1) ("thông tin nhạy cảm" như được định nghĩa trong Nguyên tắc bảo vệ thông tin cá nhân trong lĩnh vực tài
          chính, bao gồm cả "Thông tin cá nhân cần chú ý") ngoài trong các trường hợp được quy định tại Hướng dẫn nêu
          trên như khi được pháp luật cho phép hoặc cần thiết tiến hành kinh doanh với điều kiện được Tập đoàn tài chính
          Mizuho chấp thuận.
        </p>
        <h4 className='text-3xl text-[#3f464a] mb-9'>Các biện pháp an ninh/bảo vệ</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Tập đoàn tài chính Mizuho sẽ duy trì và quản lý thông tin cá nhân chính xác và cập nhật, đồng thời ngăn chặn
          rò rỉ thông tin bằng các biện pháp bảo mật cần thiết và phù hợp. Hơn nữa, nó sẽ tiến hành giám sát cần thiết
          và phù hợp đối với nhân viên và nhà cung cấp dịch vụ (bao gồm cả nhà thầu phụ, v.v.) về những người xử lý
          thông tin cá nhân. Hơn nữa, các biện pháp bảo mật do Tập đoàn tài chính Mizuho thực hiện có thể được kiểm tra
          bằng “Các biện pháp bảo mật do Tập đoàn tài chính Mizuho thực hiện” được đăng trên trang web của công ty chúng
          tôi.
        </p>
        <h4 className='text-3xl text-[#3f464a] mb-9'>Cải tiến liên tục</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Tập đoàn tài chính Mizuho sẽ liên tục xem xét Chính sách này theo sự phát triển của công nghệ thông tin và
          những thay đổi trong nhu cầu xã hội, đồng thời cải thiện việc xử lý thông tin cá nhân.
        </p>
        <h4 className='text-3xl text-[#3f464a] mb-9'>Bình luận & Yêu cầu</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Tập đoàn tài chính Mizuho sẽ nỗ lực giải quyết những ý kiến và yêu cầu của khách hàng về việc quản lý thông
          tin cá nhân một cách chân thành và kịp thời.
        </p>
      </div>
    </div>
  )
}

export default Privacy
