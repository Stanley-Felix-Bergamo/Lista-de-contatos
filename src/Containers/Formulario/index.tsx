import { Container, Campo } from './styles'
import { BotaoSalvar } from '../../styles'
const Formulario = () => (
  <Container>
    <h1>Nova Tarefa</h1>
    <Campo>
      <input type="text" placeholder="Nome Completo" />
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Telefone" />
    </Campo>
    <BotaoSalvar>Cadastrar</BotaoSalvar>
  </Container>
)

export default Formulario
