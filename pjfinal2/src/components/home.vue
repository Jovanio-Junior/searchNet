<template>
  <div class="d-flex justify-content-center mt-5">
    <b-card title="Procurar Disponibilidade">
        <div class="form-inline mt-4">
         <b-form-group label="Nome:" class="mr-2">
			<b-form-input  v-model="busca.Nome" type="text" placeholder="informe o Nome"></b-form-input>
		</b-form-group>
        <b-form-group label="Sobrenome:" class="ml-2">
            <b-form-input  v-model="busca.Sobrenome" type="text" placeholder="informe o Sobrenome"></b-form-input>
        </b-form-group>
        </div>
        <div class="form-inline mt-2">
            <b-form-group label="CEP" class="mr-2">
                <b-form-input v-model="busca.CEP" type="text" placeholder="informe o CEP"></b-form-input>
            </b-form-group>
            <b-form-group label="Possui Numero" class="ml-2 mr-2">
                <b-form-radio v-model="busca.PossuiNumero" :value="true">Sim</b-form-radio>
                <b-form-radio v-model="busca.PossuiNumero" :value="false">Não</b-form-radio>
            </b-form-group>
            <b-form-group label="Numero:" class="ml-2" v-if="busca.PossuiNumero">
                <b-form-input v-model="busca.Numero" type="number" placeholder="digite o numero" ></b-form-input>
            </b-form-group>
        </div>
        <div class="form-inline mt-2" v-if="!busca.PossuiNumero">
            <b-form-group label="Quadra" class="mr-2">
                <b-form-input v-model="busca.Quadra" type="number" placeholder="informe a quadra"></b-form-input>
            </b-form-group>
            <b-form-group label="Lote" class="ml-2">
                <b-form-input v-model="busca.Lote" type="number" placeholder="informe o lote"></b-form-input>
            </b-form-group>
        </div>
        <div class="col-xs-4 text-center">
        <b-button size="lg" class="mt-5 justify-content-center"
         pill variant="primary" @click="submit">Buscar</b-button>
        </div>
    </b-card>
  </div>
</template>

<script>
export default {
data() {
    return {
        busca: {
            flag: true,
            Nome: '',
            Sobrenome: '',
            Fone: '',
            CEP: '',
            PossuiNumero: true,
            Numero: 0,
            Quadra: 0,
            Lote: 0
        },
        
        
    }
},
methods: {
    async submit(){
        // this.$http.post('/resultados.json', this.elements).then()
        const res = await this.$http.post('/resultado', this.busca);
			this.busca.Nome = ''
            this.busca.Sobrenome = ''
            this.busca.CEP = ''
            this.busca.PossuiNumeroro = true
            this.busca.Numero = 0
            this.busca.Quadra = 0
            this.busca.Lote = 0
            this.busca.Fone = ''
            setTimeout( async () => {
                this.$router.push({ path: `/resultados/${res.data.id[0]}` });
            }, 500)
        
        
    }
}
}
</script>

<style>

</style>