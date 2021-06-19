<template>
  <b-card  class="d-flex justify-content-center m-5">
    <b-spinner class="carregar mt-5 mb-5" v-if="carregandoDados" label="Loading..."></b-spinner>
    <div v-else v-for="(element, i) in elements" :key="i" class="form-inline mt-3">
      <b-form-group class="imgOperadora">
        <b-img class="img-fluid" :src="element.OperadoraId == 41 ? imgtim : element.imgOperadora" rounded alt="Rounded image" ></b-img>
      </b-form-group>
      <b-form-group class="texto Velocidade mt-2" style="margin-left: 8%;">
        <span class="texto2">{{ element.Velocidade }}</span>
      </b-form-group>
      <b-form-group class="tipo mt-2" style="margin-left: 8%;">
        <b-img class="img-fluid" :src="img" rounded alt="Rounded image" ></b-img>
        <p class="text-uppercase text-center">{{ element.Tipo}}</p>
      </b-form-group>
      <b-form-group class="texto mt-2" style="margin-left: 8%;">
        <span class="texto2">{{ element.Descricao }}</span>
      </b-form-group>
      <b-form-group class="valor mt-2" style="margin-left: 2%;">
        <p class="text-uppercase text-center">Valor:</p>
        <span class="texto2">{{ element.Valor  | moeda}}</span>
      </b-form-group>
      
    </div>
  </b-card>
</template>

<script>
export default {
  filters: {
    moeda(valor) {
      var f = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      return f
    }
  },
  data() {
    return {
      carregandoDados: true,
      elements: [],
      img: 'https://www.inova.jor.br/wp-content/uploads/2020/11/Fibra_optica_WDC_Networks.jpg',
      imgtim: 'https://www.belohorizonte.com.br/wp-content/uploads/2020/07/TIM-live-2.jpg'
    }
  },
  mounted() { 
    this.getDados(); 
  }, 
  methods: { 
    async getDados() { 
      setTimeout(async () => {
        const resp = await this.$http.get( `/buscaid/${this.$route.params.id}`);
        this.elements = await resp.data
        this.carregandoDados = false
      }, 6000)
      
    } 
  } 
  // created() {
  //   this.carregarDados();
  // },
  // methods: {
  //   async carregarDados() {
  //       // {
  //       //   id: this.$route.params.id
  //       // }
  //       await this.$http.get('/buscaid',{id: 4})
  //         .then(async (resp) => {
  //           await console.log(resp.data)
  //         }).catch(() => {
  //           console.log(222)
  //       })


  //       //const data = await this.$http.get()
  //       //  .then(() => {
  //       //    console.log('teste')
  //       //  }).catch(() => {
  //       //    console.log('erro')
  //       //  })
  //   }
  // }
}
</script>


<style>
.texto {
  width: 291px;
  height: 103px;
}
.texto2 {
  font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 19px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.015em;
}

.imgOperadora {
  width: 110px;
  height: 106px;
}

.tipo {
  width: 74px;
  height: 69px;
}

.carregar {
  margin-left: 50%;
}
</style>