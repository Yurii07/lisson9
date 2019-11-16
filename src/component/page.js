import React from 'react'

const Page = ({ handler }) => {
    return (
        <>
            <h1> Page </h1>
            <button onClick={handler}> Button </button>
        </>
    )
}

Page.defaultProps = {
    handler: () => console.log('default handlelr')
}


export default Page;