import React, {useRef, useEffect} from 'react'
// import { mount } from 'app1/App'
import { loadModule } from '../../utils'

const module = loadModule(
    'http://localhost:3001/remoteEntry.js',
    'app1',
    './App',
)

const App1 = () => {
    const ref = useRef(null)
    useEffect( async () => {
        const container = await module
        container.mount(ref.current)
    }, [])
    return (
        <div ref={ref} />
    )
}

export default App1