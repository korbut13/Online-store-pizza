import React from "react";
import ContentLoader from "react-content-loader";

const PizzaSkeleton:React.FC = () => (
  <ContentLoader
    style={{marginBottom:"53px"}}
    speed={5}
    width={285}
    height={480}
    viewBox="0 0 285 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="139" cy="129" r="120" />
    <rect x="29" y="270" rx="8" ry="8" width="232" height="31" />
    <rect x="4" y="321" rx="16" ry="16" width="276" height="83" />
    <rect x="2" y="436" rx="8" ry="8" width="102" height="31" />
    <rect x="133" y="427" rx="20" ry="20" width="152" height="44" />
  </ContentLoader>
)

export default PizzaSkeleton;
