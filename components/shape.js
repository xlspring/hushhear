import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Shape = (props) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		width={231}
		height={251}
		fill="none"
		{...props}
	>
		<Path
			fill={props.color}
			d="M92 6.568a47 47 0 0 1 47 0l67.748 39.114a47 47 0 0 1 23.5 40.703v78.23a47 47 0 0 1-23.5 40.703L139 244.432a46.999 46.999 0 0 1-47 0l-67.748-39.114a47 47 0 0 1-23.5-40.703v-78.23a47 47 0 0 1 23.5-40.703L92 6.568Z"
		/>
	</Svg>
)
export default Shape