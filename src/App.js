import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { Grid, Paper, Button, Divider } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import './App.css'
function App() {
  const calcularFilasSinAumento = (
    puntosMaximos,
    sinAumento,
    maximo,
    totalFilasOriginal,
    aguja,
    secuencia
  ) => {
    if (maximo % secuencia !== 0) {
      setErrorMsg('error, el maximo deseado debe ser multiplo de 6')
    }
    if (
      puntosMaximos > 0 &&
      sinAumento > 0 &&
      maximo % 6 === 0 &&
      totalFilasOriginal > 0 &&
      aguja > 0 &&
      secuencia > 0
    ) {
      let fsAumento = Math.round(
        (parseInt(maximo) * parseInt(sinAumento)) / parseInt(puntosMaximos)
      )
      setTotalFilasSinAumento(fsAumento)
      let diferencia = (parseInt(maximo) - parseInt(puntosMaximos)) / secuencia
      diferencia = diferencia + (parseInt(fsAumento) - parseInt(sinAumento))
      diferencia =
        diferencia + (parseInt(maximo) - parseInt(puntosMaximos)) / secuencia
      diferencia += parseInt(totalFilasOriginal)
      console.log(diferencia)
      setFilasPatronNuevo(diferencia)
      let total = (parseInt(diferencia) * parseFloat(aguja)) / 10
      console.log(total)
      setTamañoTotalModificado(total)
    }
  }

  const [puntosMax, setPuntosMax] = useState(0)
  const [filasSinAumento, setFilasSinAumento] = useState(0)
  const [maximoDeseado, setMaximoDeseado] = useState(0)
  const [totalFilasPatronOriginal, setTotalFilasPatronOriginal] = useState(0)
  const [mmAgujas, setMmAgujas] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')
  const [totalFilasSinAumento, setTotalFilasSinAumento] = useState(0)
  const [filasPatronNuevo, setFilasPatronNuevo] = useState(0)
  const [tamañoTotalModificado, setTamañoTotalModificado] = useState(0)
  const [secuenciaMultiplo, setSecuenciaMultiplo] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault()
    calcularFilasSinAumento(
      puntosMax,
      filasSinAumento,
      maximoDeseado,
      totalFilasPatronOriginal,
      mmAgujas,
      secuenciaMultiplo
    )
    setPuntosMax(0)
    setMaximoDeseado(0)
    setFilasSinAumento(0)
    setTotalFilasPatronOriginal(0)
    setMmAgujas(0)
    setSecuenciaMultiplo(0)
  }
  return (
    <div>
      <Typography variant='h4' align='center' style={{ marginBottom: '10px' }}>
        Conversor Tamaño Amigurumis
      </Typography>
      <Paper style={{ marginBottom: '6rem' }}>
        <form onSubmit={handleSubmit}>
          <Grid container direction='row' spacing={2} justify='center'>
            <Grid item xs={12} md={6}>
              <Grid
                container
                direction='row'
                spacing={2}
                justify='center'
                align='center'
              >
                <Grid item xs={12} md={6}>
                  <TextField
                    autoFocus
                    type='number'
                    variant='filled'
                    label='PuntosMax'
                    value={puntosMax}
                    onChange={(e) => setPuntosMax(e.target.value)}
                    inputProps={{
                      style: { fontSize: '1.4rem' },
                    }}
                    InputLabelProps={{ style: { fontSize: '1.3rem' } }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    variant='filled'
                    label='Filas sin aumento'
                    type='number'
                    value={filasSinAumento}
                    onChange={(e) => setFilasSinAumento(e.target.value)}
                    inputProps={{
                      style: { fontSize: '1.4rem' },
                    }}
                    InputLabelProps={{ style: { fontSize: '1.3rem' } }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type='number'
                    variant='filled'
                    label='Maximo deseado'
                    value={maximoDeseado}
                    onChange={(e) => setMaximoDeseado(e.target.value)}
                    inputProps={{
                      style: { fontSize: '1.4rem' },
                    }}
                    InputLabelProps={{ style: { fontSize: '1.3rem' } }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type='number'
                    variant='filled'
                    label='Total filas original'
                    value={totalFilasPatronOriginal}
                    onChange={(e) =>
                      setTotalFilasPatronOriginal(e.target.value)
                    }
                    inputProps={{
                      style: { fontSize: '1.4rem' },
                    }}
                    InputLabelProps={{ style: { fontSize: '1.3rem' } }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type='number'
                    variant='filled'
                    label='mm Aguja'
                    value={mmAgujas}
                    onChange={(e) => setMmAgujas(e.target.value)}
                    inputProps={{
                      style: { fontSize: '1.4rem' },
                    }}
                    InputLabelProps={{ style: { fontSize: '1.3rem' } }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    type='number'
                    variant='filled'
                    label='Secuencia'
                    value={secuenciaMultiplo}
                    onChange={(e) => setSecuenciaMultiplo(e.target.value)}
                    inputProps={{
                      style: { fontSize: '1.4rem' },
                    }}
                    InputLabelProps={{ style: { fontSize: '1.3rem' } }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    variant='contained'
                    style={{
                      background: 'linear-gradient(to right, #89216b, #da4453)',
                      color: '#fff',
                    }}
                    type='submit'
                  >
                    Calcular
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant='h6' color='initial' align='center'>
                Resultado
              </Typography>
              <Grid container direction='column'>
                {errorMsg && <Alert severity='error'>{errorMsg}</Alert>}
                {!errorMsg && totalFilasSinAumento > 0 && (
                  <Grid item xs={12}>
                    <Typography variant='h6' color='secondary' align='center'>
                      Total de filas sin aumento: {totalFilasSinAumento}
                    </Typography>
                  </Grid>
                )}
                {!errorMsg && filasPatronNuevo > 0 && (
                  <Grid item xs={12}>
                    <Typography variant='h6' color='secondary' align='center'>
                      Total de filas patron nuevo: {filasPatronNuevo}
                    </Typography>
                  </Grid>
                )}
                {!errorMsg && tamañoTotalModificado > 0 && (
                  <Grid item xs={12}>
                    <Typography variant='h6' color='secondary' align='center'>
                      Tamaño total del patron modificado:
                      {tamañoTotalModificado}cm
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <div
        style={{
          position: 'fixed',
          left: '0',
          bottom: '0',
          width: '100%',
          color: 'white',
          backgroundColor: 'black',
          textAlign: 'center',
          padding: '10px',
        }}
      >
        <Typography variant='subtitle1' color='initial'>
          Creado por Franco Ibarra
        </Typography>
        <Divider />
        <Typography variant='subtitle1' color='initial'>
          Carol Nichepurenco.
        </Typography>
      </div>
    </div>
  )
}

export default App
