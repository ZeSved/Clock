import styles from './page.module.css'
import Time from './time/page'

export default function Home() {
	return (
		<main className={styles.main}>
			<Time />
		</main>
	)
}
