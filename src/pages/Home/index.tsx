import { CoffeesMenu } from '../../components/CoffeesMenu'
import { SectionProperties } from '../../components/SectionProperties/SectionProperties'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <SectionProperties />
      <CoffeesMenu />
    </HomeContainer>
  )
}
