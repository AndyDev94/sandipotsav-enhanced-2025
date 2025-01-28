// Import necessary components
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

// Toaster component that renders all toasts
export function Toaster() {
  // Get toasts from the toast hook
  const { toasts } = useToast()

  return (
    // Toast provider wrapper
    <ToastProvider>
      {/* Map through and render each toast */}
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {/* Render toast title if provided */}
            {title && <ToastTitle>{title}</ToastTitle>}
            {/* Render toast description if provided */}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {/* Render close button */}
          {action}
          <ToastClose />
        </Toast>
      ))}
      {/* Toast viewport for positioning */}
      <ToastViewport />
    </ToastProvider>
  )
}

