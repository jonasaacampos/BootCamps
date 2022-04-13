import React, { memo } from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format';
import { Grid, Skeleton } from '../../../components'
import Card from './Card'
import { faViruses, faSkullCrossbones, faLungsVirus, faBookDead, faVirusSlash } from '@fortawesome/free-solid-svg-icons'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data
  const colorCases = '#d32f2f'
  const colorTotalDeaths = '#263238'
  const colorTodayCases = '#fdd835'
  const colorDeaths = '#000000'
  const colorRecovered = '#43a047'

  const getValue = (value) => value ? value : <Skeleton variant="text" width="100%" />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label=" Total de casos" color={colorCases} icon={faViruses} iconColor={colorCases} />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label=" Óbitos hoje" color={colorTotalDeaths} icon={faSkullCrossbones} iconColor={colorTotalDeaths} />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label=" Casos hoje" color={colorTodayCases} icon={faLungsVirus} iconColor={colorTodayCases}/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label=" Total mortos" color={colorDeaths} icon={faBookDead} iconColor={colorDeaths}/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label=" Total recuperados" color={colorRecovered} icon={faVirusSlash} iconColor={colorRecovered}/>
      </Grid>
    </Grid>
  )
}

export default memo(Board)
