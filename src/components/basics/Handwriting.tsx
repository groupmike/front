import React from "react";

type Props = {
  children: React.ReactNode;
};

const Handwriting = ({children}: Props) => {
    return (
        <p 
            className="
                font-handwriting
                text-parfete-rose
                text-4xl
            "
        >
            {children}
        </p>
    )
}

export default Handwriting