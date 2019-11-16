import React from 'react'

const PageSecond = ({ handler }) => {
    return (
        <>
            <h1> PageSecond HOC</h1>
            <button onClick={handler}> Some click </button>
        </>
    )
}

PageSecond.defaultProps = {
    handler: () => console.log('default handlelr')
}


export default PageSecond;