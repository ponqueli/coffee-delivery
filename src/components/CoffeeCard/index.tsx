import { Plus, Minus } from 'phosphor-react'
import {
  AddCartWrapper,
  AddToCart,
  CoffeeCardContainer,
  ContainerAmountCoffee,
  Tags,
} from './styles'
import { useState } from 'react'
import { ButtonCart } from '../ButtonCart'
import { Cart, useCart } from '../../hooks/useCart'
import { CoffeeFormatted } from '../CoffeesMenu'

interface CoffeeCardProps {
  coffee: CoffeeFormatted
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [amount, setAmount] = useState(0)
  const { addCart } = useCart()

  function handleAddCart(product: Cart) {
    const newProduct = {
      ...product,
      amount,
    }

    addCart(newProduct)
    setAmount(1)
  }

  function handleDecrementAmount() {
    if (amount > 0) {
      setAmount((amount) => amount - 1)
    }
  }

  function handleIncrementAmount() {
    setAmount((amount) => amount + 1)
  }

  return (
    <CoffeeCardContainer>
      <img src={`/${coffee.photo}`} alt={coffee.name} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <h2>{coffee.name}</h2>
      <p className="description">{coffee.description}</p>

      <AddToCart>
        <span>
          R$ {` `}
          {coffee.price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
          })}
        </span>
        <AddCartWrapper>
          <ContainerAmountCoffee>
            <button
              type="button"
              onClick={handleDecrementAmount}
              disabled={amount === 0}
            >
              <Minus size={16} />
            </button>
            <input type="number" value={amount} readOnly />
            <button type="button" onClick={handleIncrementAmount}>
              <Plus size={16} />
            </button>
          </ContainerAmountCoffee>
          <ButtonCart
            variant="purple"
            disabled={amount === 0}
            onHandleClick={() => handleAddCart(coffee)}
          />
        </AddCartWrapper>
      </AddToCart>
    </CoffeeCardContainer>
  )
}
