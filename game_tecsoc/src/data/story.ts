import type { Story } from '../types/story'
import RioIguacuPoluido from '../assets/RioIguacuPoluido.png'
import Felipe from '../assets/Felipe.png'
import cataratas from '../assets/cataratas.png'
import yara from '../assets/peixe.png'
import capivara from '../assets/capivara.png'
import arara from '../assets/arara filha da puta.png'
import tartaruga from '../assets/tartaruga.png'
import tatu from '../assets/tatu.png'
import nascente from '../assets/nascente.jpg'
import zoologico from '../assets/zoologico.jpg'
import pedro from '../assets/Pedro.png'
import represa from '../assets/represa.jpg'
import ponte from '../assets/pontevitoria.jpg'
import cataratona from '../assets/cataratas2.jpg'

export const story: Story = {
  phases: [
    {
      id: '1',
      title: 'FASE 1 — Nascente do Rio Iguaçu',
      startScreenId: 'intro',
      screens: [
        {
          id: 'intro',
          title: 'Nasce a Vida',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'GUIA',
          texts: [
            'Aqui, no alto das montanhas, brotam as primeiras águas do Rio Iguaçu.',
            'A nascente é pura e cristalina, abrigando pequenas formas de vida.',
            'Mas já há sinais de desmatamento ao redor.',
            'Se não cuidarmos daqui, o rio já começa ferido.',
            'O que devemos fazer para proteger essa nascente?'
          ],
          choices: [
            { label: 'Organizar mutirão de reflorestamento', toScreenId: 'reflorestar' },
            { label: 'Pressionar autoridades locais', toScreenId: 'autoridades' },
            { label: 'Educar moradores da região', toScreenId: 'educar' },
            { label: 'Acompanhar o crescimento das árvores', toScreenId: 'acompanhar' }
          ]
        },
        {
          id: 'reflorestar',
          title: 'Reflorestamento',
          backgroundUrl: nascente,
          texts: [
            'Você reúne voluntários e planta árvores nativas.',
            'O solo começa a se recuperar.',
            'A biodiversidade volta a aparecer.',
            'Moradores se inspiram no exemplo.',
            'O rio ganha fôlego em sua primeira etapa.'
          ],
          result: { title: 'Resultado — Nascente protegida', summary: 'Água cristalina garantida!', nextPhaseId: '2' }
        },
        {
          id: 'autoridades',
          title: 'Pressão Política',
          backgroundUrl: nascente,
          texts: [
            'Você leva denúncias à prefeitura.',
            'Os fiscais iniciam ações contra desmatamento.',
            'Planos de proteção de mananciais são anunciados.',
            'O processo é lento, mas gera impacto.',
            'A nascente respira mais segura.'
          ],
          result: { title: 'Resultado — Fiscalização iniciada', summary: 'Autoridades envolvidas.', nextPhaseId: '2' }
        },
        {
          id: 'educar',
          title: 'Educação Ambiental',
          backgroundUrl: nascente,
          texts: [
            'Você organiza palestras nas escolas locais.',
            'As crianças abraçam a causa.',
            'Pais e professores aderem ao movimento.',
            'Pequenos projetos de coleta seletiva surgem.',
            'A comunidade assume o cuidado da nascente.'
          ],
          result: { title: 'Resultado — Consciência comunitária', summary: 'Cuidado coletivo criado.', nextPhaseId: '2' }
        }
      ]
    },
    {
      id: '2',
      title: 'FASE 2 — Zoológico de Curitiba',
      startScreenId: 'entrada',
      screens: [
        {
          id: 'entrada',
          title: 'Educação e Conservação',
          backgroundUrl: zoologico,
          characterUrl: pedro,
          speaker: 'GUIA',
          texts: [
            'O Zoológico de Curitiba abriga animais que dependem do rio.',
            'Visitantes aprendem sobre a importância da água limpa.',
            'Mas há lixo chegando até aqui.',
            'Os animais sofrem com plástico e resíduos.',
            'Qual ação devemos tomar?'
          ],
          choices: [
            { label: 'Campanha de coleta de lixo', toScreenId: 'coleta' },
            { label: 'Programa de reciclagem', toScreenId: 'reciclagem' },
            { label: 'Educação dos visitantes', toScreenId: 'visitantes' }
          ]
        },
        {
          id: 'coleta',
          title: 'Mutirão de Limpeza',
          backgroundUrl: zoologico,
          texts: [
            'Grupos se mobilizam para recolher lixo.',
            'Toneladas de resíduos são retiradas.',
            'O impacto é imediato.',
            'Animais voltam a nadar em águas mais limpas.',
            'O zoológico vira exemplo nacional.'
          ],
          result: { title: 'Resultado — Ambiente limpo', summary: 'Fauna agradecida!', nextPhaseId: '3' }
        },
        {
          id: 'reciclagem',
          title: 'Reciclagem Organizada',
          backgroundUrl: zoologico,
          texts: [
            'Você cria pontos de reciclagem no parque.',
            'Visitantes passam a separar o lixo.',
            'Recursos são destinados a projetos ambientais.',
            'Escolas replicam a iniciativa.',
            'Menos resíduos chegam ao rio.'
          ],
          result: { title: 'Resultado — Reciclagem ativa', summary: 'Resíduos diminuídos.', nextPhaseId: '3' }
        },
        {
          id: 'visitantes',
          title: 'Educação dos Visitantes',
          backgroundUrl: zoologico,
          texts: [
            'Palestras e placas educativas são instaladas.',
            'Visitantes entendem seu impacto.',
            'O comportamento muda gradualmente.',
            'O parque registra menos lixo.',
            'A natureza agradece em silêncio.'
          ],
          result: { title: 'Resultado — Conscientização ampliada', summary: 'Visitantes transformados.', nextPhaseId: '3' }
        }
      ]
    },
    {
      id: '3',
      title: 'FASE 3 — Represa no Caminho',
      startScreenId: 'alerta',
      screens: [
        {
          id: 'alerta',
          title: 'A Represa',
          backgroundUrl: represa,
          speaker: 'NARRADOR',
          texts: [
            'Uma grande represa barra o caminho do rio.',
            'Ela gera energia, mas altera o fluxo natural.',
            'Peixes migratórios sofrem.',
            'Comunidades ribeirinhas reclamam.',
            'O que fazer diante desse desafio?'
          ],
          choices: [
            { label: 'Criar passagens para peixes', toScreenId: 'peixes' },
            { label: 'Negociar compensações', toScreenId: 'compensacao' },
            { label: 'Protestar contra a represa', toScreenId: 'protesto' }
          ]
        },
        {
          id: 'peixes',
          title: 'Passagens Ecológicas',
          backgroundUrl: represa,
          texts: [
            'Você propõe escadas de peixe.',
            'A obra começa com apoio técnico.',
            'Espécies voltam a migrar.',
            'Pesca se fortalece novamente.',
            'Comunidades celebram.'
          ],
          result: { title: 'Resultado — Biodiversidade preservada', summary: 'Fluxo de vida restaurado.', nextPhaseId: '4' }
        },
        {
          id: 'compensacao',
          title: 'Compensações Sociais',
          backgroundUrl: represa,
          texts: [
            'Você negocia recursos para moradores.',
            'Projetos de agricultura sustentável surgem.',
            'Infraestrutura comunitária melhora.',
            'O impacto não some, mas diminui.',
            'O rio continua, mesmo com barreiras.'
          ],
          result: { title: 'Resultado — Comunidades apoiadas', summary: 'Equilíbrio parcial alcançado.', nextPhaseId: '4' }
        },
        {
          id: 'protesto',
          title: 'Protesto Ambiental',
          backgroundUrl: represa,
          texts: [
            'Você organiza protestos pacíficos.',
            'A mídia cobre o movimento.',
            'A pressão cresce sobre a gestão.',
            'Medidas de mitigação são implementadas.',
            'A luta continua.'
          ],
          result: { title: 'Resultado — Voz ativa', summary: 'Consciência social aumentada.', nextPhaseId: '4' }
        }
      ]
    },
    {
      id: '4',
      title: 'FASE 4 — Ponte Histórica',
      startScreenId: 'chegada',
      screens: [
        {
          id: 'chegada',
          title: 'A Ponte',
          backgroundUrl: ponte,
          texts: [
            'Chegamos a uma ponte histórica sobre o rio.',
            'Ela conecta culturas e cidades.',
            'Mas sofre com pichações e poluição ao redor.',
            'É um símbolo em risco.',
            'O que devemos fazer?'
          ],
          choices: [
            { label: 'Restaurar a ponte', toScreenId: 'restaurar' },
            { label: 'Criar projeto turístico', toScreenId: 'turismo' },
            { label: 'Organizar evento cultural', toScreenId: 'cultura' }
          ]
        },
        {
          id: 'restaurar',
          title: 'Restauração da Ponte',
          backgroundUrl: ponte,
          texts: [
            'Engenheiros e artistas trabalham juntos.',
            'A ponte ganha nova vida.',
            'O entorno é revitalizado.',
            'Moradores se orgulham.',
            'Turistas visitam em peso.'
          ],
          result: { title: 'Resultado — Patrimônio protegido', summary: 'História preservada.', nextPhaseId: '5' }
        },
        {
          id: 'turismo',
          title: 'Turismo Sustentável',
          backgroundUrl: ponte,
          texts: [
            'Você cria um roteiro ecológico-cultural.',
            'Guias locais são capacitados.',
            'Economia regional cresce.',
            'Visitantes aprendem sobre o rio.',
            'Sustentabilidade vira lema.'
          ],
          result: { title: 'Resultado — Economia verde', summary: 'Renda com responsabilidade.', nextPhaseId: '5' }
        },
        {
          id: 'cultura',
          title: 'Evento Cultural',
          backgroundUrl: ponte,
          texts: [
            'Concertos e exposições acontecem na ponte.',
            'Público se emociona.',
            'A mídia nacional destaca o evento.',
            'Jovens artistas ganham espaço.',
            'A ponte vira palco de união.'
          ],
          result: { title: 'Resultado — Arte e comunidade', summary: 'Patrimônio vivo.', nextPhaseId: '5' }
        }
      ]
    },
    {
      id: '5',
      title: 'FASE 5 — Cataratas do Iguaçu',
      startScreenId: 'grandfinale',
      screens: [
        {
          id: 'grandfinale',
          title: 'A Grande Queda',
          backgroundUrl: cataratona,
          texts: [
            'O rio chega ao seu destino final: as Cataratas.',
            'Uma das maravilhas naturais do mundo.',
            'Milhares de litros por segundo despencam em harmonia.',
            'Aqui se encerra a jornada.',
            'Mas o cuidado com o rio nunca termina.'
          ],
          result: { title: 'Fim da Jornada', summary: 'Você acompanhou o rio da nascente até a foz. O futuro depende de nossas escolhas.', nextPhaseId: undefined }
        }
      ]
    }
  ]
}