import Link from 'next/link'

export default function Header() {
	return (
		<nav>
			<Link href='/time'>Time</Link>
			<Link href='/calendar'>Calendar</Link>
		</nav>
	)
}
