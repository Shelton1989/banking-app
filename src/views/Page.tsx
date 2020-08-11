import * as React from 'react'

const Page: React.FC<{title: String} > = ({title}) => (
    <div >
        <h1>{title}</h1>
    </div>
)

export default Page;