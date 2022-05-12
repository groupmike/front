import React from "react";

type Props = {
  children: React.ReactNode;
};

const H1 = ({children}: Props) => {
    return (
        <h1 
            className="
                font-base 
                text-parfete-turquoise 
                text-4xl
                uppercase
            "
        >
            {children}
        </h1>
    )
}

export default H1