import React from 'react'

const UserAvatar = ({ width, src, ...props }) => {
	const Avatar = src.slice(0, 4).map((item, index) => {
		let translateX = ''
		switch (index) {
			case 1:
				translateX = 'transform -translate-x-1/2'
				break
			case 2:
				translateX = 'transform -translate-x-full'
				break
			case 3:
				translateX = 'transform -translate-x-3/2'
		}
		let border = 'border'
		if (width <= 250) {
			border = 'border'
		} else if (width <= 300 && width >= 250) {
			border = 'border-2'
		} else if (width <= 400) {
			border = 'border-4'
		} else {
			border = 'border-8'
		}
		return (
			<div
				key={index}
				className={`object-cover ${translateX} bg-white rounded-1/2 m-0 object-center overflow-hidden h-full w-full ${border} border-brand-avatar-green`}
			>
				<img src={item} className="h-full w-full" alt="Avatar 1" />
			</div>
		)
	})
	return (
		<>
			<div
				className="inline-flex justify-stretch items-center w-full h-full"
				{...props}
				style={{ height: width / 4, width: `${width}px` }}
			>
				{Avatar}
			</div>
		</>
	)
}
export default UserAvatar
