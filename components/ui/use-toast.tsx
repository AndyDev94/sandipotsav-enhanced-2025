// Import necessary types and utilities
import * as React from "react"
import type { ToastActionElement, ToastProps } from "@/components/ui/toast"

// Define toast types and interfaces
const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

// Generate unique toast ID
function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

// Toast dispatch type
type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

// Toast reducer for managing state
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string, dispatch: React.Dispatch<Action>) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

// Create toast context
const ToastContext = React.createContext<{
  toasts: ToasterToast[]
  toast: (props: Omit<ToasterToast, "id">) => void
  dismiss: (toastId?: string) => void
}>({
  toasts: [],
  toast: () => null,
  dismiss: () => null,
})

// Initial state
const initialState: State = {
  toasts: [],
}

// Toast provider component
export function ToastProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    state.toasts.forEach((toast) => {
      if (toast.open) {
        addToRemoveQueue(toast.id, dispatch)
      }
    })
  }, [state.toasts])

  return (
    <ToastContext.Provider
      value={{
        toasts: state.toasts,
        toast: (props) => {
          const id = genId()

          dispatch({
            type: "ADD_TOAST",
            toast: {
              ...props,
              id,
              open: true,
            },
          })
        },
        dismiss: (toastId) => {
          dispatch({ type: "DISMISS_TOAST", toastId })
        },
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

// Custom hook for using toast
export const useToast = () => {
  const { toasts, toast, dismiss } = React.useContext(ToastContext)

  return {
    toasts,
    toast: React.useCallback(({ ...props }: Omit<ToasterToast, "id">) => toast(props), [toast]),
    dismiss: React.useCallback((toastId?: string) => dismiss(toastId), [dismiss]),
  }
}

