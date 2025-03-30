<h1 align="center">Fatec Jacareí- DSM 1º SEMESTRE</h1>

# <p>Equipe 💻: TechCastle </p>
<br>

# SOBRE O PROJETO 
## <p align="justify"> Aplicação Web para visualização de horários de aula e ambientes.</p>

## Link para o Trello

Clique [aqui](https://trello.com/) para acessar o quadro do Trello do projeto.

## SPRINTS

| Sprint | Link        | Início      | Entrega     | Status |
|--------|-------------|-------------|-------------|--------|
| 01     | [Sprint 01](#sprint-1) | 24/03/2025  | 15/04/2025  |       |
| 02     | [Sprint 02](#sprint-2) | 16/04/2025  | 13/05/2025  |       |
| 03     | [Sprint 03](#sprint-3) | 14/05/2025  | 11/06/2025  |       |

<br>

<span id="backlog">

<br>

## :page_with_curl: Product Backlog

### REQUISITOS FUNCIONAIS

| REQUISITO FUNCIONAL_ID | REQUISITOS                                                                                                 | SPRINTS |
|------------------------|------------------------------------------------------------------------------------------------------------|---------|
| RF - 1                 | Fazer a ingestão de dados no sistema a partir de uma fonte tal como um arquivo CSV                         | #02     |
| RF - 2                 | (opcional) Fazer o gerenciamento dos dados do sistema (CRUD) através da interface da aplicação, permitindo que a secretaria acadêmica/coordenação altere os dados por meio de uma tela da aplicação                                                                                                                             | #03     |
| RF - 3                 | Garantir que o cadastro ou a ingestão de dados satisfaça as regras básicas de alocação da faculdade (ex.: duas turmas diferentes não podem ser alocadas na mesma sala, e um professor não pode ter duas turmas no mesmo horário)                                                                                                         | #02     |
| RF - 4                 | Permitir que o sistema exporte relatórios/mapas de ambientes e horários em formato PDF                     | #03 |
| RF - 5                 | Permitir consultas no sistema (ex.: por turma, turno, professor, data) para apoiar a gestão da faculdade   | #02     |

### REQUISITOS NÃO FUNCIONAIS

| REQUISITO NÃO_FUNCIONAL_ID | REQUISITOS                                                                                          | SPRINTS     |
|----------------------------|-----------------------------------------------------------------------------------------------------|-------------|
| RNF - 1                    | Requisito de interface: exibir um mapa de salas com a opção interativa de clicar e visualizar a situação do ambiente (ex. aulas alocadas ao longo dos turnos do dia)   | #01   #02   |
| RNF - 2                    | Garantir que o sistema seja responsivo, mantendo um layout consistente em dispositivos móveis e preservando a arquitetura de informação da interface    | #01       |

## :page_with_curl: EQUIPE

<br>

| NOME               | FUNÇÃO        | GITHUB                               |
|--------------------|---------------|--------------------------------------|
| Bruno Berval       | Project Owner | [BrunoBerval](https://github.com/BrunoBerval) |
| Fernanda Vilela    | Scrum Master  | [fernanda-vilela](https://github.com/fernanda-vilela)      |
| Bruna Rodrigues    | Developer     | [brunagomess26](https://github.com/brunagomess26) |
| Camila Aparecida   | Developer     | [camilaapfqsantos](https://github.com/camilaapfqsantos) |
| Nicolas Kauê       | Developer     | [nickdsm24](https://github.com/nickdsm24) |
| Pedro Enrique      | Developer     | [lJesusl-f](https://github.com/lJesusl-f) |
| Ryan Pedro         | Developer     | [RockLeeVSGaaraLinkinPark](https://github.com/RockLeeVSGaaraLinkinPark)|
| Suelen Castro      | Developer     | [gatinhosdeluvinhas](https://github.com/gatinhosdeluvinhas)|

<br>

<span id="sprint-1">
 
## :page_with_curl: SPRINT 1 
<p align="justify">Na Primeira Sprint .... </p>

<br>

### • Sprint Backlog
<br>

| ID REFERENCIA |Pioridade (Scrum Poker Planning) | REQUISITO DA SPRINT| Responsável |TAREFA INICIADA | TAREFA CONCLUIDA | 
|---------------|--------------------|---------------|-----------------|-----------------|------------------|
|  RNF - 2    | 2 |Definir elementos das páginas para criar os protótipos iniciais utilizando diagrama de casos de uso |Bruna e Pedro | ✔  |✔  |
|  RNF - 1    | 4 |Elaboração dos protóripos das telas no Figma para ambiente desktop e mobile, verificando a navegabilidade do site   |Bruna, Suelen e Pedro | ✔  |✔  |
|  RNF - 2 | 1 |Definir a harmonia visual do site, escolhendo contrastes e paleta de cores com a equipe|Bruna, Suelen e Pedro  | ✔  |✔  |
|  RF - 1/ RF - 5    | 1 |Levantamento das informações referentes aos horários de aulas e disposição das salas da Fatec|Camila, Ryan e Nicolas|  ✔  |✔  |
|  RF - 1/ RF - 3    | 5 |Coleta de informações em CSV e  |Ryan e Camila   | ✔  |✔  |
|  RNF - 2    | 2 |Desenvolver a primeira versão da página de cadastro de matérias em HTML, estilizando em CSS de acordo com o design do Figma e colocar as funcionalidades do JavaScript, quando necessário. |Bruna |  ✔  |✔  |
|  RNF - 2    | 2 |Desenvolver a primeira versão da página de cadastro de professores em HTML, estilizando em CSS de acordo com o design do Figma e colocar as funcionalidades do JavaScript, quando necessário. |Camila |  ✔  |✔  |
|  RNF - 2    | 2 |Desenvolver a primeira versão da página de hirários por turma em HTML, estilizando em CSS de acordo com o design do Figma e colocar as funcionalidades do JavaScript, quando necessário. |Ryan |  ✔  |✔  |
|  RNF - 2    | 2 |Desenvolver a primeira versão da página de lista de professores em HTML, estilizando em CSS de acordo com o design do Figma e colocar as funcionalidades do JavaScript, quando necessário. |Nicolas |  ✔  |✔  |
|  RNF - 2    | 2 |Desenvolver a primeira versão da página de lista de salas em HTML, estilizando em CSS de acordo com o design do Figma e colocar as funcionalidades do JavaScript, quando necessário. |Suelen e Pedro |  ✔  |✔  |
|  RNF - 2    | 2 |Desenvolver a primeira versão da página de login da secretaria em HTML, estilizando em CSS de acordo com o design do Figma e colocar as funcionalidades do JavaScript, quando necessário. |Fernanda |  ✔  |✔  |
|  RNF - 2    | 2 |Desenvolver a primeira versão da página da tela inicial da secretaria em HTML, estilizando em CSS de acordo com o design do Figma e colocar as funcionalidades do JavaScript, quando necessário. |Bruno |  ✔  |✔  |
<br>



