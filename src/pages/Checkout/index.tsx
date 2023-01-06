import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import { SectionAddress } from '../../components/SectionAddress'
import * as zod from 'zod'
import { AddressAndPaymentContainer, CheckoutContainer } from './styles'
import { SectionPayment } from '../../components/SectionPayment'
import { SectionCoffeeSelected } from '../../components/SectionCoffeeSelected'
import { useCart } from '../../hooks/useCart'

const newFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'CEP é obrigatório'),
  street: zod.string().min(1, 'Rua é obrigatório'),
  number: zod.string().min(1, 'Número é obrigatório'),
  complement: zod.string(),
  district: zod.string().min(1, 'Bairro é obrigatório'),
  city: zod.string().min(1, 'Cidade é obrigatório'),
  uf: zod.string().min(2, 'UF é obrigatório'),
})

export type OrderData = zod.infer<typeof newFormValidationSchema>
type NewFormData = OrderData

export function Checkout() {
  const { clearCart } = useCart()
  const navigate = useNavigate()

  const newForm = useForm<NewFormData>({
    resolver: zodResolver(newFormValidationSchema),
    defaultValues: {
      cep: '',
      complement: '',
      city: '',
      number: '',
      district: '',
      street: '',
      uf: '',
    },
  })

  const { handleSubmit } = newForm

  function handleNewForm(data: NewFormData) {
    if (data !== undefined) {
      clearCart()
      navigate('/ConfirmedOrder', { state: data })
    } else {
      return toast.error('Something went wrong!')
    }
  }

  return (
    <FormProvider {...newForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleNewForm)}>
        <section>
          <h1>Complete seu pedido</h1>
          <AddressAndPaymentContainer>
            <SectionAddress />
            <SectionPayment />
          </AddressAndPaymentContainer>
        </section>
        <section>
          <h1>Cafés selecionados</h1>
          <div>
            <SectionCoffeeSelected />
          </div>
        </section>
      </CheckoutContainer>
    </FormProvider>
  )
}
