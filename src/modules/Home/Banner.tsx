import banner from '~/assets/images/mizuhoglobal_Banner.jpg'
const Banner = () => {
  return (
    <div className='relative h-[620px] lg:h-[110vh]'>
      <img className='object-cover w-full h-full' src={banner} alt='banner' />
      <div className='absolute p-4 lg:p-20  w-full h-full top-0 left-0'>
        <div className=' w-full h-full flex flex-col-reverse lg:flex-row max-w-[1296px] mx-auto'>
          <div className='mt-16 md:mt-0 flex flex-col justify-end'>
            <div className='flex items-center gap-2 cursor-pointer group py-3'>
              <div className='w-1.5 h-3.5 group-hover:bg-opacity-100 transition-all  bg-white bg-opacity-60'></div>
              <p className='text-[22px] lg:text-[36px] text-white'>Worldwide</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer group py-3'>
              <div className='w-1.5 h-3.5 group-hover:bg-opacity-100 transition-all  bg-white bg-opacity-60'></div>
              <p className='text-[22px] lg:text-[36px] text-white'>Japan</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer group py-3'>
              <div className='w-1.5 h-3.5 group-hover:bg-opacity-100 transition-all  bg-white bg-opacity-60'></div>
              <p className='text-[22px] lg:text-[36px] text-white'>Asia Pacific</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer group py-3'>
              <div className='w-1.5 h-3.5 group-hover:bg-opacity-100 transition-all  bg-white bg-opacity-60'></div>
              <p className='text-[22px] lg:text-[36px] text-white'>Americas</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer group py-3'>
              <div className='w-1.5 h-3.5 group-hover:bg-opacity-100 transition-all  bg-white bg-opacity-60'></div>
              <p className='text-[22px] lg:text-[36px] text-white'>Europe, Middle East, and Africa</p>
            </div>
          </div>
          <div className='w-full lg:w-[560px] p-4 lg:p-[48px] bg-[rgba(255,255,255,0.75)] md:ml-auto'>
            <h2 className='text-[32px] text-primary lg:text-[55px] leading-none'>
              Tận dụng kiến thức chuyên môn sâu rộng và các giải pháp tài chính liền mạch của chúng tôi
            </h2>
            <p className='text-[#3f464a] mt-3 hidden lg:block'>
              Tập đoàn tài chính Mizuho là một trong những tổ chức tài chính lớn nhất thế giới, cung cấp các dịch vụ tài
              chính và chiến lược thông qua các công ty trong tập đoàn, bao gồm Ngân hàng Mizuho và Chứng khoán Mizuho.
            </p>
            <button className='bg-[#286a88] border-2 border-[#286a88] hover:bg-opacity-80 transition-all text-white font-bold min-w-[200px] py-5 text-xl mt-4'>
              Bạn là ai?{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
