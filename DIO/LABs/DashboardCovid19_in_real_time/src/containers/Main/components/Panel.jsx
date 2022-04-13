import NumberFormat from 'react-number-format';
import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { Card, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { AppCardTopLine1Styled, AppCardTopLine2Styled, AppLogoTop, AppShareStyled, AppTitlePart1Styled, AppTitlePart2Styled, AppUpdatedStyled, ItemStyled } from './style'
import LogoApp from '../../../assets/images/logo-app-72x72.png'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCoviddata }) {
  const { recovered } = data

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )

  const textCovid19 = `País: ${country} - recuperados: ${recovered}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: window.location.href
    })
  }

  const renderShareButton = (
    <div>     
      <FontAwesomeIcon icon={faShare} color="#ef5350" onClick={shareInfo} alt="Compartilhar" title="Compartilhar" size="lg" />      
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <AppCardTopLine1Styled>      
        <AppLogoTop src={LogoApp}/>
        <AppTitlePart1Styled> 
          COVID-19<AppTitlePart2Styled> Monitor em tempo real</AppTitlePart2Styled>    
        </AppTitlePart1Styled>        
        <AppShareStyled>
          {navigatorHasShare ? renderShareButton : renderCopyButton} 
        </AppShareStyled>
      </AppCardTopLine1Styled>
      <AppCardTopLine2Styled>
        <div className="pt-2">
          <Select onChange={onChange} value={country}>
            {COUNTRIES.map(renderCountries)}
          </Select>
        </div>
        <AppUpdatedStyled>
          <span>Atualizado em: {updateAt}</span>
          <br/>
          <span>Dados obtidos com base na última declaração dos países</span>
        </AppUpdatedStyled>
      </AppCardTopLine2Styled>
    </Card>
  )
}

export default memo(Panel)