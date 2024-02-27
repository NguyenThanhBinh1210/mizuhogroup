import { Link } from 'react-router-dom'

const News = () => {
  const NewData = [
    {
      title: 'Thông báo thay đổi Giám đốc điều hành đại diện(PDF/90KB)',
      date: 'Ngày 22 tháng 2 năm 2024'
    },
    {
      title: 'Thay đổi Giám đốc và Giám đốc điều hành(PDF/245KB)',
      date: 'Ngày 22 tháng 2 năm 2024'
    },
    {
      title: 'Thông báo mua lại cổ phần của Dịch vụ kế hoạch đóng góp xác định',
      date: 'Ngày 16 tháng 2 năm 2024'
    },
    {
      title: 'Mizuho Americas LLC trở thành Công ty Cổ phần Trung cấp',
      date: 'Ngày 16 tháng 2 năm 2024'
    },
    {
      title: '[Tài chính] Thông báo về Tỷ lệ vốn tại ngày 31 tháng 12 năm 2023',
      date: 'Ngày 14 tháng 2 năm 2024'
    }
  ]
  const InfoData = [
    {
      title: 'Thông tin bổ sung tài chính cho quý 3 năm tài chính 2023',
      date: '14/2/24'
    },
    {
      title:
        'Bài thuyết trình IR thu nhập cố định "Kết quả tài chính cho quý 3 năm tài chính 2023" (Tài liệu thuyết trình)',
      date: '14/2/24'
    },
    {
      title: 'Công bố thông tin trụ cột Basel 3 tạm thời cho năm tài chính 2023 (bản dịch tiếng Anh)',
      date: '8/2/24'
    },
    {
      title: 'Câu hỏi thường gặp về kết quả tài chính trong Quý 3 năm tài chính 2023',
      date: '2/2/24'
    },
    {
      title: 'Thông tin tỷ lệ vốn',
      date: '22/12/23      '
    }
  ]
  return (
    <div className='bg-white py-8 md:py-[72px] text-primary px-3'>
      <div className='max-w-[1290px] mx-auto'>
        <h2 className='text-4xl border-b pb-3'>Tin tức</h2>
        <ul className='mb-4'>
          {NewData.map((item, index) => (
            <li key={index} className='pt-9 pb-3 border-b last:border-b-0'>
              <p className='text-2xl hover:underline cursor-pointer'>{item.title}</p>
              <p className='mt-4 text-base font-bold text-gray-600'>{item.date}</p>
            </li>
          ))}
        </ul>
        <Link to={'/'} className='font-bold text-primary mt-4 hover:underline'>
          Tin tức trước đây
        </Link>
        <h2 className='text-4xl border-b pb-3 mt-10'>Thông tin</h2>
        <ul className='mb-4'>
          {InfoData.map((item, index) => (
            <li key={index} className='pt-9 pb-3 border-b last:border-b-0'>
              <p className='text-2xl hover:underline cursor-pointer'>{item.title}</p>
              <p className='mt-4 text-base font-bold text-gray-600'>{item.date}</p>
            </li>
          ))}
        </ul>

        <h2 className='text-4xl  pb-3'>Thông báo quan trọng</h2>
        <p className='py-3 text-lg'>Cảnh báo về Email lừa đảo (lừa đảo lừa đảo)</p>
        <ul className='list-disc text-lg pl-6 text-gray-600'>
          <li>
            Gần đây, các hoạt động kinh doanh đã được thúc đẩy bởi một thực thể tự nhận là "MZH Invest Group Pvt. Ltd."
            hoặc "Đầu tư MZH". Xin lưu ý rằng tổ chức này KHÔNG thuộc tập đoàn Mizuho và không liên kết với Tập đoàn tài
            chính Mizuho hoặc bất kỳ công ty nào trong tập đoàn của chúng tôi.
          </li>
          <li>
            Gần đây, các hoạt động kinh doanh đã được thúc đẩy bởi một thực thể tự nhận mình là "Môi giới Mizuho DKB".
            Xin lưu ý rằng tổ chức này KHÔNG thuộc tập đoàn Mizuho và không liên kết với Tập đoàn tài chính Mizuho hoặc
            bất kỳ công ty nào trong tập đoàn của chúng tôi.
          </li>
          <li>
            Gần đây, các hoạt động kinh doanh đã được thúc đẩy bởi một thực thể tự nhận mình là "Mizuho Corporate
            Global". Xin lưu ý rằng tổ chức này KHÔNG thuộc tập đoàn Mizuho và không liên kết với Tập đoàn tài chính
            Mizuho hoặc bất kỳ công ty nào trong tập đoàn của chúng tôi.
          </li>
          <li>
            Cảnh báo về các công ty tự nhận mình là công ty thuộc Tập đoàn tài chính Mizuho: Các công ty tự gọi mình là
            "Mua bán và sáp nhập Mizuho", "Mizuho Investments Inc.", "Mizuho Investments Beverly Hills" và "Mizuho
            Financial Global" đã thiết lập các trang web và tham gia vào hoạt động trên Internet, tự nhận mình là công
            ty thuộc Tập đoàn Tài chính Mizuho. Xin lưu ý rằng các công ty này hoàn toàn không có mối quan hệ hay liên
            kết nào với Tập đoàn tài chính Mizuho hoặc bất kỳ công ty nào trong tập đoàn của chúng tôi.
          </li>
          <li>
            Gần đây, hoạt động kinh doanh đã được thúc đẩy bởi một thực thể tự nhận là "Mizuho Holdings (6 Battery Road
            ♯12–01 Singapore. 049909)." Xin lưu ý rằng tổ chức này KHÔNG thuộc tập đoàn Mizuho và không liên kết với Tập
            đoàn tài chính Mizuho hoặc bất kỳ công ty nào trong tập đoàn của chúng tôi.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default News
