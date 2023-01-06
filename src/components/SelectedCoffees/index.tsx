import { Plus, Minus, Trash } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { Container, ContainerAmountCoffee } from './styles'

interface CartFormatted {
  id: number
  price: number
  photo: string
  title: string
  description: string
  tags: string[]
  amount: number
  priceFormatted: string
  subTotal: string
}

interface SelectedCoffeesProps {
  item: CartFormatted
}

export function SelectedCoffees({ item }: SelectedCoffeesProps) {
  const { removeCart, updateAmount } = useCart()

  function handleRemoveItem(id: number) {
    removeCart(id)
  }

  function handleIncrement(id: number) {
    updateAmount(id, 'increment')
  }

  function handleDecrement(id: number) {
    updateAmount(id, 'decrement')
  }

  return (
    <Container>
      <img src={item.photo} alt={`Imagem ${item.title}`} />
      <p>{item.title}</p>
      <div className="ContentAmountAndButtonRemove">
        <ContainerAmountCoffee>
          <button
            type="button"
            onClick={() => handleDecrement(item.id)}
            disabled={item.amount <= 1}
          >
            <Minus size={16} />
          </button>
          <input type="number" value={item.amount} readOnly />
          <button type="button" onClick={() => handleIncrement(item.id)}>
            <Plus size={16} />
          </button>
        </ContainerAmountCoffee>

        <button
          className="buttonRemove"
          type="button"
          onClick={() => handleRemoveItem(item.id)}
        >
          <Trash />
          <span>REMOVER</span>
        </button>
      </div>
      <span>{item.subTotal}</span>
    </Container>
  )
}
