'use client'

import { useEffect, useState } from 'react'
import Hand from './components/hand'
import Selection from './components/selection'

import s from './time.module.scss'

export default function Time() {
	const [showCurrentTime, setShowCurrentTime] = useState<ShowTime>({
		seconds: true,
		minutes: true,
		hours: true,
	})
	const [currentTime, setCurrentTime] = useState<Time>({
		seconds: new Date().getSeconds(),
		minutes: new Date().getMinutes(),
		hours: new Date().getHours(),
	})

	useEffect(() => {
		const id = setInterval(() => {
			const time = new Date()
			setCurrentTime({
				seconds: time.getSeconds(),
				minutes: time.getMinutes(),
				hours: time.getHours(),
			})
		}, 1000)

		return () => {
			clearInterval(id)
		}
	}, [])

	return (
		<div className={s.timeContainer}>
			<div className={s.timeContainer__time}>
				{showCurrentTime.hours && <Hand content={currentTime.hours} />}
				{showCurrentTime.minutes && <Hand content={currentTime.minutes} />}
				{showCurrentTime.seconds && <Hand content={currentTime.seconds} />}
			</div>
			<div className={s.divider} />
			<div className={s.timeContainer__select}>
				<Selection
					content='hours'
					setTime={setShowCurrentTime}
					time={showCurrentTime}
				/>
				<Selection
					content='minutes'
					setTime={setShowCurrentTime}
					time={showCurrentTime}
				/>
				<Selection
					content='seconds'
					setTime={setShowCurrentTime}
					time={showCurrentTime}
				/>
			</div>
		</div>
	)
}

export type Time = {
	seconds: number
	minutes: number
	hours: number
}

export type ShowTime = {
	seconds: boolean
	minutes: boolean
	hours: boolean
}
