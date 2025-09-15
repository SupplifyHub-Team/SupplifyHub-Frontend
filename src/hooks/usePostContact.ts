import { postContactService } from '@/services/contactService'
import { ApiError } from '@/utils/handleApiError'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export default function usePostContact() {
  return (
    useMutation({
        mutationFn: postContactService,
        onSuccess: () => {
            toast.success( "تم إرسال رسالتك بنجاح! سنرد عليك قريباً.")
        },
        onError: (error: ApiError) => {
            toast.error(error.message || "حدث خطأ ما. يرجى المحاولة مرة أخرى.")
        }
    })
  )
}

