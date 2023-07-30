import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Container from '../Container'

const imgArr = [
  {
    id: 1,
    name: '/img/Hadimba.png',
  },
  {
    id: 2,
    name: '/img/Kheerganga.png',
  },
  { id: 3, name: '/img/Serolsar.png' },
  {
    id: 4,
    name: '/img/Hadimba.png',
  },
  { id: 5, name: '/img/Kheerganga.png' },
]


export const SliderComponent = () => {
  const settings = {
    className: 'center',
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    speed: 500,
    centerPadding: '30px'
  }
  return (
    <Container>
      <Slider {...settings}>
        {imgArr.map((item, i) => (
          <div key={i} className="p-8">
            <div
              className="sliderwarpper relative flex items-end rounded-[30px] h-[463px] bg-cover text-center before:rounded-[30px] before:content-[''] before:bg-gradient2 before:absolute before:top-0 before:w-full before:h-full "
              style={{ backgroundImage: `url(${item.name})` }}
            >
              <div className="p-2.5 text-center relative z-50">
                <h2 className="text-2xl mb-2">Hidimba Devi Temple </h2>
                <p className="text-lightText mb-5">
                  It is an ancient cave temple dedicated to Hidimba Devi...
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  )
}
