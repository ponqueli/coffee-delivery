import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'
import { SectionAddress } from '../../components/SectionAddress'
import * as zod from 'zod'
import { AddressAndPaymentContainer, CheckoutContainer } from './styles'

const newFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe O Estado'),
})

export type OrderData = zod.infer<typeof newFormValidationSchema>
type NewFormData = OrderData

export function Checkout() {
  const [dataForm, setDataForm] = useState<NewFormData>()
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
      setDataForm(data)
      // clearCart()
      navigate('/checkout/success')
    } else {
      toast.error('Something went wrong!')
    }
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleNewForm)}>
      <FormProvider {...newForm}>
        <section>
          <h1>Complete seu pedido</h1>
          <AddressAndPaymentContainer>
            <SectionAddress />
          </AddressAndPaymentContainer>
        </section>
        <section>
          <h1>Cafés selecionados</h1>
        </section>
      </FormProvider>
    </CheckoutContainer>
  )
}
