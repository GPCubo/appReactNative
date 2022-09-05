import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function DiscoveryIcon({active}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        clipRule="evenodd"
        d="M8.27 14.952l1.593-5.09 5.089-1.592-1.593 5.09-5.089 1.592z"
        stroke={active ? '#3DD598' : "#96A7AF"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx={11.611}
        cy={11.611}
        r={9.61098}
        stroke={active ? '#3DD598' : "#96A7AF"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default DiscoveryIcon
