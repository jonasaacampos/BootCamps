// Fazendo uma interface com cada componente, e importando para este arquivo, podemos exportar todos os compoentes de uma só vez.
// isso ajuda na organização, manutenção e expansão do código

import { Card, CardContent } from './Card'
import Button from './Button'
import Grid from './Grid'
import Typography from './Typography'
import Skeleton from './Skeleton'
import Select from './Select'
import MenuItem from './MenuItem'

export {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Skeleton,
  Select,
  MenuItem
}