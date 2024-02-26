import { Link } from 'react-router-dom'

const Laundering = () => {
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
        <h4 className='text-3xl text-primary text-center mb-9'>Chính sách</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          MHFG phải tuân thủ mọi luật và quy định liên quan đến việc ngăn chặn ML/TF được áp dụng.
          <br />
          MHFG sẽ không chấp nhận bất kỳ khách hàng hoặc giao dịch nào liên quan đến ML/TF.
          <br />
          MHFG sẽ thiết lập một khuôn khổ thích hợp để ngăn chặn ML/TF và tiến hành các biện pháp sau:
          <br />
          - Đánh giá rủi ro ML/TF
          <br />
          - Thẩm định khách hàng như KYC để ngăn chặn ML/TF
          <br />- Báo cáo hoạt động đáng ngờ và thực hiện các biện pháp áp dụng như phong tỏa tài sản
        </p>
        <h4 className='text-3xl text-primary text-center mb-9'>Cơ cấu quản lý</h4>
        <p className='text-lg text-[#3f464a] mb-9'>
          Để thiết lập khuôn khổ thích hợp nhằm ngăn chặn ML/TF, MHFG sẽ thực hiện các biện pháp sau:
        </p>
        <p className='text-lg text-[#3f464a] mb-9'>
          - Thiết lập và phát triển cơ cấu tổ chức, chính sách và thủ tục ngăn ngừa ML/TF
          <br />
          - Đào tạo để đảm bảo tất cả giám đốc và nhân viên hiểu tầm quan trọng của việc ngăn chặn ML/TF và nhận thức về
          từng vai trò và trách nhiệm trong khuôn khổ
          <br />- Đánh giá tình trạng tuân thủ khuôn khổ ngăn chặn ML/TF và cải thiện bền vững khuôn khổ dựa trên kết
          quả đánh giá
        </p>
      </div>
    </div>
  )
}

export default Laundering
