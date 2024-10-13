import React from 'react';

function RightArrow() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='52'
			height='52'
			fill='none'
			viewBox='0 0 52 52'
		>
			<g filter='url(#filter0_d_8_426)'>
				<rect
					width='40'
					height='40'
					x='46'
					y='42'
					fill='#fff'
					rx='20'
					shapeRendering='crispEdges'
					transform='rotate(-180 46 42)'
				></rect>
				<rect
					width='41'
					height='41'
					x='46.5'
					y='42.5'
					stroke='#DBECFE'
					rx='20.5'
					shapeRendering='crispEdges'
					transform='rotate(-180 46.5 42.5)'
				></rect>
				<path
					stroke='#202020'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='1.5'
					d='M23 28l6-6-6-6'
				></path>
			</g>
			<defs>
				<filter
					id='filter0_d_8_426'
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
						result='effect1_dropShadow_8_426'
					></feBlend>
					<feBlend
						in='SourceGraphic'
						in2='effect1_dropShadow_8_426'
						result='shape'
					></feBlend>
				</filter>
			</defs>
		</svg>
	);
}

export default RightArrow;
