import { Dispatch, SetStateAction } from 'react'
import { ShowTime } from '../page'

export default function Selection({
	content,
	setTime,
	time,
}: {
	time: ShowTime
	setTime: Dispatch<SetStateAction<ShowTime>>
	content: string
}) {
	return (
		<div>
			<input
				type='checkbox'
				name=''
				id={content}
				checked={
					content === 'hours' ? time.hours : content === 'seconds' ? time.seconds : time.minutes
				}
				onClick={() => {
					content === 'hours'
						? setTime({
								hours: !time.hours,
								minutes: time.minutes,
								seconds: time.seconds,
						  })
						: content === 'seconds'
						? setTime({
								hours: time.hours,
								minutes: time.minutes,
								seconds: !time.seconds,
						  })
						: setTime({
								hours: time.hours,
								minutes: !time.minutes,
								seconds: time.seconds,
						  })
				}}
			/>
			<label htmlFor={content}>Show {content}</label>
		</div>
	)
}
