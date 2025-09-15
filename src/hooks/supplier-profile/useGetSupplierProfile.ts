import { getSupplierProfile } from '@/services/supplierProfileServices'
import { useQuery } from '@tanstack/react-query'

export default function useGetSupplierProfile() {
  return useQuery({
    queryKey: ['supplier-profile'],
    queryFn: () => getSupplierProfile(),
  })
}
