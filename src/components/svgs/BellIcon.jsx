import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BellICon({active}) {
  return (
    <Svg
      width={19}
      height={22}
      viewBox="0 0 19 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.4 0C5.698 0 2.696 2.955 2.696 6.6v2.829c0 1.02-.336 2.012-.958 2.828l-1.42 1.864c-.543.713-.384 1.689.447 2.042C2.26 16.8 5.016 17.6 9.4 17.6c4.385 0 7.14-.802 8.637-1.437.831-.353.99-1.33.447-2.042l-1.42-1.864a4.666 4.666 0 01-.958-2.828V6.6c0-3.645-3.002-6.6-6.706-6.6zm0 21.45c-1.392 0-2.546-1.003-2.758-2.314a32.04 32.04 0 002.759.114c1.004 0 1.922-.042 2.76-.114-.213 1.311-1.368 2.314-2.76 2.314z"
        fill={active ? '#3DD598' : "#96A7AF"}
      />
    </Svg>
  )
}

export default BellICon
