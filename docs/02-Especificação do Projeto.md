# Especificações do projeto

A determinação exata do problema, suas personas, requisitos funcionais e não-funcionais foram acordadas em reuniões online entre os membros da equipe. Foram reunidas informações e observações dos membros, e, complementarmente, foram coletadas informações com base em um roteiro de entrevistas semi-estruturado aplicado por conveniência. Os detalhes levantados nesse processo auxiliaram na construção de personas e histórias de usuários mais completas.,

## Personas

| Izabela Correa | Evaristo Antônio | Marcel |
| ---        |    ----   |          --- |
| <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t3-pomodoro/main/docs/img/doc/Izabela%20Correa.png" alt="Izabela Correa" width="100" height="100"/>     | <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t3-pomodoro/main/docs/img/doc/Evaristo%20Ant%C3%B4nio.png" alt="Evaristo Antônio" width="100" height="100"/>       | <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e1-proj-web-t3-pomodoro/main/docs/img/doc/Marcel.png" alt="Marcel" width="100" height="100"/> |
| Idade: 24 anos <br>Ocupação: Universitária e Analista de Projeto| Idade: 34 anos <br>Ocupação: Arquiteto freelancer        | Idade: 18 anos <br>Ocupação: Estudante de Ensino Médio |
| Hobbies, História:<br><ul><li>Assistir séries</li><li>Lutar Jiu-Jitsu</li></ul> | Hobbies, História:<br><ul><li>Ler livros</li><li>Jogar xadrez</li></ul>  | Hobbies, História:<br><ul><li>Tocar violão</li><li>Jogar Video game</li></ul> |
| Motivações: <br><ul><li>Conseguir conciliar trabalho com meus hobbies</li><li>Viajar nas férias</li></ul> | Motivações: <br><ul><li>Minha filha</li><li>Uma rotina de trabalho equilibrada</li></ul>           | Motivações: <br><ul><li>Continuar os estudos</li><li>Ser funcionário público no futuro</li></ul>   |
| Frustrações: <br><ul><li>Não conseguir organizar bem a jornada de trabalho</li><li>Não ter um bom desempenho na faculdade</li><li>Não aproveitar bem o tempo de descanso com preocupações de faculdade</li></ul> | Frustrações: <br><ul><li>Não ter uma rotina balanceada em relação ao tempo que passo com minha filha</li><li>Trabalho além do tempo programado</li><li>Não tenho tempo para praticar xadrez</li></ul> | Frustrações:  <br><ul><li>Estresse de passar no curso que desejo</li><li>Dificuldade de conciliar tempo de estudos com jogos</li><li>Não conseguir se motivar para estudar fora do horário de aula e sozinho</li></ul>  |

## História de usuário

A partir das características, problemas e rotinas das personas identificadas, foram registradas as seguintes histórias:

<table>
  <tr>
    <th>
        Eu como ...<br>[PERSONA]
    </th>
    <th>
        … quero/desejo ...<br>[O QUE]
    </th>
    <th>… para ...<br>[O QUÊ]
    </th>
  </tr>
  <tr>
    <td>Izabela Correa</td>
    <td>Uma plataforma de estudos onde eu consiga colocar contagem de tempo com emissões de alertas, que seja aplicada a técnica pomodoro.</td>
    <td>Para organizar minha rotina de estudo e ter um intervalo cronometrado entre as atividades e descanso.</td>
  </tr>
  <tr>
    <td>Izabela Correa</td>
    <td>Um site bonito, que muda de cor, para avisar quando está em pausa ou em atividade, e que também mude no período diurno ou noturno.</td>
    <td>Para facilitar a assimilação na troca entre atividades e pausa.
E para permitir uma leitura mais confortável, de acordo com o horário do dia em que estou realizando meus estudos.
</td>
  </tr>
  <tr>
    <td>Izabela Correa</td>
    <td>Poder compartilhar para meus colegas de curso o que estou estudando no momento.</td>
    <td>Para saber se estou por dentro de toda matéria, e para que eles possam complementar com mais informações etc.</td>
  </tr>
  <tr>
    <td>Evaristo Antônio</td>
    <td>Uma plataforma onde tenha o modo de rotina diária para incluir minha jornada de trabalho.</td>
    <td>Para ter uma noção mais exata de quanto tempo gasto em atividades de trabalho freelancer.</td>
  </tr>
  <tr>
    <td>Marcel</td>
    <td>Ter uma barra de tarefas para eu saber o que tenho que estudar e qual o meu progresso em cada matéria.</td>
    <td>Consolidar o hábito de estudar 8 horas por dia e saber se essa quantidade será suficiente até o dia de realização da prova.</td>
  </tr>
  <tr>
    <td>Marcel</td>
    <td>Ter recursos gratuitos para saber como utilizar da melhor forma possível meu tempo para estudos.</td>
    <td>Saber se estou com uma rotina equilibrada e coerente de estudos.</td>
  </tr>
   <tr>
    <td>Marcel</td>
    <td>Plataforma que me possibilite criar tabelas com grades de estudos e horários. Seguindo o modelo de lista to-do.</td>
    <td>Ser lembrado do que e quando estudar</td>
  </tr>
</table>

## Requisitos do projeto

O escopo funcional do projeto abrange duas principais partes: requisitos funcionais, descrevendo  possibilidades  de interação  dos  usuários, e requisitos  não  funcionais, descrevendo os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir, acompanhados por algumas limitações identificadas. Tais informações foram dispostas em tabelas para uma melhor compreensão.

### Requisitos funcionais

| ID  | Descrição | Prioridade |
| ------------- | ------------- | ------------- |
| RF-01 | O site deve apresentar na página principal um cronômetro que pode ser pausado e que emite sons. | Alta |
| RF-02 | O cronômetro vem ajustado para 25 minutos de atividade e 5 de pausa.  | Média |
| RF-03 | O site muda de cor: vermelho alaranjado em atividade e azul claro em pausa. | Alta |
| RF-04 | O cronômetro pode ser desativado para mostrar apenas em qual ciclo o usuário se encontra no momento. | Média |
| RF-05 | A paleta de cores do site pode ser alterada em modo diurno e modo noturno. | Média |
| RF-06 | O site possibilita a inserção de tabelas com grades de estudos com horários de estudo. | Baixa |
| RF-07 | O site possui 4 presets de rotina diária: rotina de estudos de estudantes de ensino fundamental e médio (tempo mais fragmentado), estudantes universitários (tempo menos fragmentado) e jornadas de trabalho de 6 e de 8 horas. | Baixa |
| RF-08 | A página principal possibilita abrir uma janela de lista to-do. | Média |
| RF-09 | É possível visualizar o tempo de estudos em uma barra de progresso. | Média |
| RF-10 | Os elementos da lista to-do são riscados quando concluídos. | Baixa |
| RF-11 | Os elementos da lista to-do podem ser associados ao cronômetro de tempo, garantindo a troca de atividades. | Baixa |
| RF-12 | A paleta de cores do site muda automaticamente de acordo com o horário do computador local. | Baixa |
| RF-13 | O som do cronômetro pode ser alterado pelo usuário em um menu de configurações. | Média |
| RF-14 | A página principal direciona para outra guia com recursos (vídeos, artigos e livros) sobre como utilizar melhor o tempo. | Média |
| RF-15 | A página principal direciona para outra guia com recursos (vídeos, artigos e livros) sobre a ciência por trás dos estudos e da memória. | Média |
| RF-16 | O site possibilita o compartilhamento de uma mesma sessão de estudos com amigos por meio do envio de um link. | Baixa |

### Requisitos não-funcionais

| ID  | Descrição | Prioridade |
| ------------- | ------------- | ------------- |
| RNF-01 | O site deve ser publicado em algum repositório público acessível na internet. | Alta |
| RNF-02 | Uso de design responsivo nas interfaces gráficas.  | Alta |
| RNF-03 | O cronômetro terá uma função de ficar em modo anônimo na tela. | Baixa |
| RNF-04 | Será possível o ajuste de tempo de estudos conforme a necessidade do usuário. | Média |
| RNF-05 | O site deverá cadastrar as atividades referentes a cada matéria que o usuário necessite. | Média |
| RNF-06 | Opção de marcar os tópicos de atividades que foram concluídos com checkbox. | Baixa |

## Restrições

| ID  | Descrição |
| ------------- | ------------- |
| RE-01 | O projeto necessita ser entregue até o início de dezembro. |
| RE-02 | O projeto deve ser implementado com uso de tecnologias web e Front End.  |
