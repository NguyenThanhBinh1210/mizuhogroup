const Business = () => {
  return (
    <div className='bg-[#d8d8d8] py-8 md:py-[72px]'>
      <div className='max-w-[1290px] bg-white mx-auto p-6 md:p-[72px] flex flex-col md:flex-row justify-between'>
        <span className='text-primary text-4xl md:text-5xl font-light w-full md:w-1/3'>Our business</span>
        <p className='w-full md:w-1/3 max-w-[384px] text-primary my-3 md:py-0'>
          Our seasoned team of specialists is dedicated to helping our clients — both issuers and investors — achieve
          the best possible results in all market conditions and find stability for their future growth.
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
