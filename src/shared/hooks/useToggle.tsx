import { useCallback, useState } from 'react'

interface ToggleHookReturn {
  value: boolean
  setTrue: () => void
  setFalse: () => void
}

export default function useToggle (initialValue = false): ToggleHookReturn {
  const [value, setValue] = useState(initialValue)

  const setFalse = useCallback(() => {
    setValue(false)
  }, [])

  const setTrue = useCallback(() => {
    setValue(true)
  }, [])

  return { value, setFalse, setTrue }
}
