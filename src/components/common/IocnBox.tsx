import React from 'react'

type Props = {
    className?: string
    children: React.ReactNode
}

const IconBox = ({ className, children }: Props) => {
    return (
        <div className={`flex p-4 justify-center items-center rounded-full ${className}`}>
            {children}
        </div>
    )
}

export default IconBox