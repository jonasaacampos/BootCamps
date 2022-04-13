import styled from 'styled-components'
import { CardContent, Typography } from '../../../components'

export const AppLogoTop = styled.img`
  width: 8vw;
`

// estilo bordas laterais 
export const AppCardTopLine1Styled = styled(CardContent)`
  display: flex;
  align-items: center;  
  justify-content: space-around;
  padding-top: 50px; 
`

export const AppCardTopLine2Styled = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: space-around;  
`

export const AppTitlePart1Styled = styled(Typography)` 
  font-weight: 100;
  font-size: 4vw;
  line-height: 0.5;
  color: #ef5350;
  text-align: center;
`

export const AppTitlePart2Styled = styled(Typography)`
  font-weight: bold;
  font-size: 4vw;
  color: #c62828;
`

export const AppShareStyled = styled(Typography)`  
  color: #81d4fa;
  cursor: pointer;
`
export const AppUpdatedStyled = styled(Typography)`
  font-weight: 100;
  font-size: 1.5vw;
  color: #607d8b;  
`

// Labels
export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 0.9rem;
  color: #000103;  
`

// Values
export const ValueStyled = styled(Typography)`  
  font-weight: 400;
  color: #000b1c;
  font-size: 2.2rem;
  text-align: center;
  
`

export const CardContentStyled = styled(CardContent)`
  border-left: 10px solid ${({ color }) => color || '#5d78ff'};
`

export const CardIconStyled = styled.div`
  display: flex;
  align-items:  center; 
  justify-content: space-around;
`

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 130px;
`
