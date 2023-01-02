import { AddToCart, CoffeeCardContainer, Tags } from './styles'

interface CoffeeProps {
  id: number
  name: string
  description: string
  price: number
  photo: string
  tags: string[]
}

interface CoffeeCardProps {
  coffee: CoffeeProps
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
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
      </AddToCart>
    </CoffeeCardContainer>
  )
}
