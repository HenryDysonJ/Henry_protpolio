/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import LeftArrow from '@/app/assets/leftArrow';
import RightArrow from '@/app/assets/rightArrow';
import React, { useCallback, useEffect, useState } from 'react';

export const usePrevNextButtons = (emblaApi: any) => {
	const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
	const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

	const onPrevButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
	}, [emblaApi]);

	const onNextButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
	}, [emblaApi]);

	const onSelect = useCallback((emblaApi: any) => {
		setPrevBtnDisabled(!emblaApi.canScrollPrev());
		setNextBtnDisabled(!emblaApi.canScrollNext());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onSelect(emblaApi);
		emblaApi.on('reInit', onSelect).on('select', onSelect);
	}, [emblaApi, onSelect]);

	return {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	};
};

export const PrevButton = (props: any) => {
	const { children, disabled, ...restProps } = props;

	return (
		<button
			disabled={disabled}
			className='embla__button embla__button--prev inline-flex items-center justify-center w-[3.6rem] h-[3.6rem] rounded-full bg-transparent shadow-inset'
			type='button'
			{...restProps}
		>
			<LeftArrow />
			{children}
		</button>
	);
};

export const NextButton = (props: any) => {
	const { children, disabled, ...restProps } = props;

	return (
		<button
			disabled={disabled}
			className='embla__button embla__button--next inline-flex items-center justify-center w-[3.6rem] h-[3.6rem] rounded-full shadow-inset'
			type='button'
			{...restProps}
		>
			<RightArrow />
			{children}
		</button>
	);
};
