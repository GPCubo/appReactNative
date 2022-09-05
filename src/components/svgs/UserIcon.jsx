import * as React from "react"
import Svg, { Path } from "react-native-svg"

function UserIcon({active}) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9 9.15c2.485 0 4.5-2.048 4.5-4.575S11.485 0 9 0 4.5 2.048 4.5 4.575 6.515 9.151 9 9.151zM18 16.014c0 2.779-4.582 1.83-9 1.83s-9 .949-9-1.83c0-2.78 4.582-5.033 9-5.033s9 2.253 9 5.033z"
        fill={active ? '#3DD598' : "#96A7AF"}
      />
    </Svg>
  )
}

export default UserIcon
