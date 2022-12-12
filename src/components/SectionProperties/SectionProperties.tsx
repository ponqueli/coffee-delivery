import coffeeImg from '../../assets/Imagem.svg'
import { Qualities } from '../Qualities'
import { BannerContent, LeftSide, RightSide, SectionBanner } from './styles'
export function SectionProperties() {
  return (
    <SectionBanner>
      <BannerContent>
        <RightSide>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <Qualities />
        </RightSide>
        <LeftSide>
          <img
            src={coffeeImg}
            alt="image of glass of coffee with coffee beans around"
          />
        </LeftSide>
      </BannerContent>
    </SectionBanner>
  )
}
