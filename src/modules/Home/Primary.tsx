import { Link } from 'react-router-dom'
import banner from '~/assets/images/mizuhoglobal_Desktop4.jpg'
const Primary = () => {
  return (
    <div className='bg-[#f5f4f4] py-4 lg:py-[72px]'>
      <div className='w-full max-w-[1290px] bg-white cursor-pointer group mx-auto  flex flex-col md:flex-row justify-between'>
        <div className='w-full p-4 lg:p-[48px] md:max-w-[520px] flex flex-col justify-center bg-[#3d9bc6] text-white'>
          <p className='text-3xl md:text-5xl '>
            Trách nhiệm của chúng tôi là đối với bạn, không phải lợi nhuận cuối cùng của chúng tôi.
          </p>
          <p className='my-6'>
            Trách nhiệm xã hội của doanh nghiệp (CSR) là một phần không thể thiếu trong nỗ lực của chúng tôi nhằm phục
            vụ lợi ích của bạn và tất cả các bên liên quan khác. Hiểu rõ hơn về cách tiếp cận CSR của chúng tôi thông
            qua các nghiên cứu điển hình, sáng kiến nhằm giải quyết các vấn đề xã hội, những đóng góp xã hội đáng chú ý
            và cam kết của chúng tôi đối với sự đa dạng trong quản lý nguồn nhân lực.
          </p>
          <Link to={'/'} className='font-bold group-hover:underline'>
            Đọc thêm
          </Link>
        </div>
        <div className='w-full flex-1 m'>
          <img className='block w-full h-full object-cover' src={banner} alt='banner' />
        </div>
      </div>
    </div>
  )
}

export default Primary
