import React from 'react';
import './css/index.css';

export const FluidGrid = ({
  gutter,
  children,
  classAdditions,
}) => {

    // Update children to pass properties to anticipated components
    const updatedChildren = React.Children.map(children, child =>
        React.cloneElement(child, {
            gutter: gutter,
        }),
    );

    // Build class string for css grid overrides
    let classString = "fg-container";
    classString += gutter ? "" : " fg-no-gutter";

    return (
        <div className={[classString].concat(classAdditions).join(" ")}>
            {updatedChildren}
        </div>
    );
};
