import * as React from 'react'

const style: any = {
    container: {
        height: '100%',
        width: '100%',
        padding: '20px'
    }
}

const Page: React.FC<{title: String} > = ({title}) => (
    <div style={style.container} >
        <h1>{title}</h1>
    </div>
)

export default Page;