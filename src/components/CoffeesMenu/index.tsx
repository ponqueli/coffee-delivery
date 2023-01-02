import { CoffeeCard } from '../CoffeeCard'
import { coffees } from '../../data/coffees-menu'
import { CoffeeContainerList, MenuContainer } from './styles'

export function CoffeesMenu() {
  return (
    <MenuContainer>
      <h1>Nossos Cafés</h1>
      <CoffeeContainerList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeContainerList>
    </MenuContainer>
  )
}
