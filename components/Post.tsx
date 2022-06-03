export default function Post(props) {
	return (
		<div className="post" id={props.postId}>
			<div className="post_container" id={props.postId}></div>
		</div>
	);
}
