export default function Hand({ content }: { content: number }) {
	return <p>{content < 10 ? '0' + content : content}</p>
}
