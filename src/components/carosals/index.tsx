import React, { useCallback, useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './navigateButtons'
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import EyeIcon from '@/app/assets/eye'

const CardList = ({ title, link, logo }: { title: string, link: string, logo: string }) => {
  return (
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 rounded-2xl">
      <Image
        removeWrapper
        alt={title}
        className="z-0 w-full h-full object-contain bg-black/40"
        src={logo}
  
      />
      <CardFooter className="absolute flex flex-row justify-between items-center bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 px-3 py-1">
        <h4 className="text-white/90 font-medium text-lg">{title}</h4>
        <a href={link} target='_blank'>
          <Button startContent={<EyeIcon />} className='w-max p-0' radius="full" size="sm" />
        </a>
      </CardFooter>
    </Card>
  )
}

type PropType = {
  slides: { title: string, demoLink: string, logo: string }[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ playOnInit: true, delay: 2000 })])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay
      if (!autoplay) return

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop

      resetOrStop()
      callback()
    },
    [emblaApi]
  )

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <CardList title={item?.title} link={item?.demoLink} logo={item?.logo} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <div className='absolute z-[111111] left-0 top-0 bottom-0 flex items-center'>
            <PrevButton
              onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
              disabled={prevBtnDisabled}
            />
          </div>

          <div className='absolute z-[111111] right-2 top-0 bottom-0 flex items-center'>
            <NextButton
              onClick={() => onButtonAutoplayClick(onNextButtonClick)}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
