import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Container from '../Container'
import { LeftArrow } from '../icons/LeftArrow'
import { RightArrow } from '../icons/RightArrow'

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
function Arrow(props: any) {
  let className = props.type === 'next' ? 'nextArrow' : 'prevArrow'
  className += ' arrow'
  const char =
    props.type === 'next' ? (
      <div className="absolute cursor-pointer top-[45%] right-1 w-10 h-10 bg-secondary flex justify-center items-center rounded-full ">
        <RightArrow />
      </div>
    ) : (
      <div className="absolute cursor-pointer top-[45%] left-1  w-10 h-10 bg-secondary flex justify-center items-center rounded-full ">
        <LeftArrow />
      </div>
    )
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  )
}

export const SliderComponent = () => {
  const settings = {
    className: 'center',
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    speed: 500,
    centerPadding: '30px',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }
  return (
    <Container>
      <Slider
        {...settings}
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
      >
        {imgArr.map((item, i) => (
          <div key={i} className="p-8 lg:p-8">
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
