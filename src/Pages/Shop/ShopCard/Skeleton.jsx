import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={510}
    viewBox="0 0 280 510"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="20" rx="0" ry="0" width="280" height="310" />
    <rect x="0" y="340" rx="0" ry="0" width="280" height="50" />
    <rect x="0" y="410" rx="0" ry="0" width="130" height="50" />
    <rect x="150" y="410" rx="0" ry="0" width="130" height="50" />
  </ContentLoader>
)

export default Skeleton;