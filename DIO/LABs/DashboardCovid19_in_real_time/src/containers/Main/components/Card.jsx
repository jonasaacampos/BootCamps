import React, { memo } from 'react'
import { Card as CardUI } from '../../../components'
import {
  LabelStyled,
  ValueStyled,
  CardContentStyled,
  CardIconStyled
} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Card({ value, label, color, icon, iconColor, iconSize}) {

const iconAwesome = icon ? icon : {faUser}
const sizeAwesome = iconSize ? iconSize : 'lg'
const colorAwesome = iconColor ? iconColor : '#b2ebf2'

  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>{value}</ValueStyled> 
          <CardIconStyled>
            <LabelStyled> 
              <FontAwesomeIcon icon={iconAwesome} color={colorAwesome} size={sizeAwesome}/>
              {label}
            </LabelStyled>
          </CardIconStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(Card)