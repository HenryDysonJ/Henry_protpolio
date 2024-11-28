import React from 'react';

function LeftArrow() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='52'
			height='52'
			fill='none'
			viewBox='0 0 52 52'
		>
			<g filter='url(#filter0_d_8_422)'>
				<rect
					width='40'
					height='40'
					x='6'
					y='2'
					fill='#fff'
					rx='20'
					shapeRendering='crispEdges'
				></rect>
				<rect
					width='41'
					height='41'
					x='5.5'
					y='1.5'
					stroke='#DBECFE'
					rx='20.5'
					shapeRendering='crispEdges'
				></rect>
				<g clipPath='url(#clip0_8_422)'>
					<path
						stroke='#202020'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='1.5'
						d='M29 16l-6 6 6 6'
					></path>
				</g>
			</g>
			<defs>
				<filter
					id='filter0_d_8_422'
					width='50.4'
					height='50.4'
					x='0.8'
					y='0.8'
					colorInterpolationFilters='sRGB'
					filterUnits='userSpaceOnUse'
				>
					<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
					<feColorMatrix
						in='SourceAlpha'
						result='hardAlpha'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
					></feColorMatrix>
					<feOffset dy='4'></feOffset>
					<feGaussianBlur stdDeviation='2.1'></feGaussianBlur>
					<feComposite in2='hardAlpha' operator='out'></feComposite>
					<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0'></feColorMatrix>
					<feBlend
						in2='BackgroundImageFix'
						result='effect1_dropShadow_8_422'
					></feBlend>
					<feBlend
						in='SourceGraphic'
						in2='effect1_dropShadow_8_422'
						result='shape'
					></feBlend>
				</filter>
				<clipPath id='clip0_8_422'>
					<path
						fill='#fff'
						d='M0 0H24V24H0z'
						transform='translate(14 10)'
					></path>
				</clipPath>
			</defs>
		</svg>
	);
}

export default LeftArrow;
