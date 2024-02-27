const Business = () => {
  return (
    <div className='bg-[#d8d8d8] py-8 md:py-[72px]'>
      <div className='max-w-[1290px] bg-white mx-auto p-6 md:p-[72px] flex flex-col md:flex-row justify-between'>
        <span className='text-primary text-4xl md:text-5xl font-light w-full md:w-1/3'>Công việc kinh doanh</span>
        <p className='w-full md:w-1/3 max-w-[384px] text-primary my-3 md:py-0'>
          Đội ngũ chuyên gia dày dạn kinh nghiệm của chúng tôi luôn tận tâm giúp đỡ khách hàng - cả tổ chức phát hành và
          nhà đầu tư - đạt được kết quả tốt nhất có thể trong mọi điều kiện thị trường và tìm thấy sự ổn định cho sự
          phát triển trong tương lai của họ.
        </p>
        <div className='w-full md:w-1/3 '>
          <button className='border-[3px] hover:bg-primary transition-all hover:text-white duration-300 border-primary ml-auto block text-primary py-5 w-full md:w-max min-w-[200px] text-xl font-medium'>
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  )
}

export default Business
