export default {
  localhost: 'http://localhost:8888',
  sptrans: 'http://api.olhovivo.sptrans.com.br/v2.1',
  server: 'https://busserver.herokuapp.com',
  auth: {
    route: '/login/autenticar',
    required: ['token']
  },
  linhas: {
    route: '/linha/buscar',
    required: ['termosBusca']
  },
  trajeto: {
    route: '/shapes',
    required: ['codigoTrajeto']
  },
  paradas: {
    route: '/parada/buscar',
    required: ['termosBusca']
  },
  paradasPorLinha: {
    route: '/parada/buscarParadasPorLinha',
    required: ['codigoLinha']
  },
  corredores: {
    route: '/corredor'
  },
  paradasPorCorredor: {
    route: '/parada/buscarParadasPorCorredor',
    required: ['codigoCorredor']
  },
  posicaoVeiculos: {
    route: '/posicao',
    required: ['codigoLinha']
  },
  previsaoChegada: {
    route: '/previsao',
    required: ['codigoParada', 'codigoLinha']
  },
  previsaoLinha: {
    route: '/previsao/linha',
    required: ['codigoLinha']
  },
  previsaoParada: {
    route: '/previsao/parada',
    required: ['codigoParada']
  }
}
