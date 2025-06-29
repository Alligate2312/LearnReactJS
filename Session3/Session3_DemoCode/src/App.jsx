import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemSelectorUseState from './components/ItemSelectorUseState'
import ItemSelectorUseReducer from './components/ItemSelectorUseReducer'
import MountExample from './components/useEffectOnMount'
import ColorChanger from './components/useEffectDependencyChange'
import Timer from './components/useEffectOnUnmount'
import DebouncedInput from './components/useEffectCleanupOnDependencyChange'
import FetchUsersThen from './components/FetchUsersThen'
import FetchUsersAsync from './components/FetchUsersAsync'
import FetchPosts from './components/FetchUsersWithHandleLoadingAndError'
import RaceConditionExample from './components/RaceCondition'

function App() {
  const [testValue, setTestValue] = useState(0);
  return (
    <div>
      {/* 1. useState: Multiple setX(); Logic spread across handlers calls; Higher bug risk */}
      {/* <ItemSelectorUseState /> */}

      {/* 2. useReducer: Single dispatch() call; Centralized state logic; Predictable, clean updates */}
      <ItemSelectorUseReducer />

      {/* 3. useEffect: onMount */}
      {/* <MountExample key={testValue}/>
      <button onClick={() => setTestValue(testValue + 1)}>Update component</button> */}

      {/* 4. useEffect: Dependency change */}
      {/* <ColorChanger /> */}

      {/* 5. useEffect: onUnmount */}
      {/* <Timer key={testValue}/>
      <button onClick={() => setTestValue(testValue + 1)}>Update component</button> */}

      {/* 6. useEffect: Cleanup on dependency change */}
      {/* <DebouncedInput /> */}

      {/* 7. fetchUser using .then: Familiar for beginners BUT Can get nested quickly */}
      {/* <FetchUsersThen key={testValue}/>
      <button onClick={() => setTestValue(testValue + 1)}>Update component</button> */}

      {/* 9. fetchUser using async/await: Cleaner, easier with try/catch/finally BUT Must define function */}
      {/* <FetchUsersAsync key={testValue}/>
      <button onClick={() => setTestValue(testValue + 1)}>Update component</button> */}

      {/* 10. fetch example with loading/error handler */}
      {/* <FetchPosts key={testValue} />
      <button onClick={() => setTestValue(testValue + 1)}>Update component</button> */}

      {/* 11. Race condition */}
      {/* <RaceConditionExample /> */}
    </div>
  )
}

export default App
