import { Header } from '../../components/Header'
import * as S from './styled'

export default function LandingPage (){

    return (
        <>
        <S.Wrapper>
            <Header/>
            <S.Gradient>
            <S.Background/>
            <S.Button to='/inicio'>Encontre seu destino</S.Button>
            </S.Gradient>
                
            
        </S.Wrapper>
        </>
    )
}