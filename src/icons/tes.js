import * as React from "react"
import Svg, { Path } from "react-native-svg"

// Specify the type for props
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M3.818 11h16.364c1.004 0 1.818.895 1.818 2v2c0 1.105-.814 2-1.818 2H3.818C2.814 17 2 16.105 2 15v-2c0-1.105.814-2 1.818-2ZM4 13v2h16v-2H4ZM3.818 3h16.364C21.186 3 22 3.895 22 5v2c0 1.105-.814 2-1.818 2H3.818C2.814 9 2 8.105 2 7V5c0-1.105.814-2 1.818-2ZM4 5v2h16V5H4ZM2 19h12v2H2v-2Z"
    />
  </Svg>
)

export default SvgComponent
