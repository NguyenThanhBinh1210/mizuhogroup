import Banner from '~/modules/Home/Banner'
import Business from '~/modules/Home/Business'
import Featured from '~/modules/Home/Featured'
import Featured2 from '~/modules/Home/Featured2'
import News from '~/modules/Home/News'
import Primary from '~/modules/Home/Primary'
import Rick from '~/modules/Home/Rick'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Business></Business>
      <Featured></Featured>
      <Primary></Primary>
      <Featured2></Featured2>
      <News></News>
      <Rick></Rick>
    </div>
  )
}

export default Home
