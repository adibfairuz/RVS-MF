import React, {useRef, useEffect} from 'react'
// import { mount } from 'app2/App'
import { loadModule } from '../../utils'

const module = loadModule(
    'http://localhost:3002/remoteEntry.js',
    'app2',
    './App',
)

const App2 = () => {
    const ref = useRef(null)
    useEffect( async () => {
        const container = await module
        container.mount(ref.current)
    }, [])
    return (
        <div ref={ref} />
    )
}

export default App2