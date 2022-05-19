import React from "react";

type Props = {
  children: React.ReactNode;
};

const Paragraph = ({children}: Props) => {
    return (
        <p 
            className="
                font-base 
                text-parfete-anthracite
                text-lg
            "
        >
            {children}
        </p>
    )
}

export default Paragraph