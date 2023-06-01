import { MainContainer } from '../../styles'
import { Campo } from './styles'
import { BotaoSalvar } from '../../styles'
const Formulario = () => (
  <MainContainer>
    <h1>Nova Tarefa</h1>
    <Campo type="text" placeholder="Nome" />
    <Campo type="text" placeholder="E-mail" />
    <Campo type="text" placeholder="Telefone" />
    <BotaoSalvar>Cadastrar</BotaoSalvar>
  </MainContainer>
)

export default Formulario
