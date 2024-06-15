import React from 'react'


type BtnComponentProp = {
    btnText?: string;
    btnOnClick?: () => void,
    children?: React.ReactNode
}

const BtnComponent = ({
    btnText,
    btnOnClick,
    children
}: BtnComponentProp) => {
    return (
        <button
            onClick={btnOnClick}
            className='p-2 rounded-lg font-semibold text-sm px-7 text-blue-500  border-2 tracking-wider'>
            { btnText }
            {children}
        </button>
    )
}

export default BtnComponent