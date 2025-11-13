import type { Story } from '../types/story'
import cataratas from '../assets/cataratas.png'
import yara from '../assets/peixe.png'
import capivara from '../assets/capivara.png'
import arara from '../assets/arara.png'
import tartaruga from '../assets/tartaruga.png'
import tatu from '../assets/tatu.png'
import nascente from '../assets/nascente.jpg'
import zoologico from '../assets/zoologico.jpg'
import represa from '../assets/represa.jpg'
import ponte from '../assets/pontevitoria.jpg'

// Personagens:
/*
- Arara (Rubi)
- Capivara (Mia)
- Peixe (Yara)
- Tatu (Richard)
- Cágado (Goioxim)

Cenários:
- Nascente do Rio Iguaçu
- Zoológico de Curitiba
- Represa no Caminho
- Ponte Histórica (União da Vitória - PR)
- Cataratas do Iguaçu
*/

export const story: Story = {
  phases: [
{
      id: '1',
      title: 'FASE 1 — Nascente do Rio Iguaçu',
      startScreenId: 'intro',
      screens: [
        {
          id: 'intro',
          title: 'Um Encontro na Nascente',
          backgroundUrl: nascente,
          speaker: 'NARRADOR',
          texts: [
            'Você caminha por uma trilha verdejante e úmida.',
            'O som suave de água correndo fica mais forte a cada passo.',
            'Finalmente, você chega a uma clareira serena, onde a água brota da terra, formando um espelho d\'água.',
            'É aqui que nasce o majestoso Rio Iguaçu.',
            'Pousada em um galho de corticeira-do-banhado, uma ave de um vermelho vibrante observa você com olhos inteligentes.'
          ],
          choices: [
            { label: 'Observar a arara em silêncio', toScreenId: 'encontro_rubi' }
          ]
        },
        {
          id: 'encontro_rubi',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Olá! Que surpresa ver alguém por aqui.',
            'Meu nome é Rubi. Bem-vindo(a) à minha casa, a nascente do Rio Iguaçu.',
            'É bonita, não é?'
          ],
          choices: [
            { label: 'É um lugar incrivelmente pacífico.', toScreenId: 'resposta_pacifico' },
            { label: 'Nunca imaginei que a origem de um rio tão grande fosse assim.', toScreenId: 'resposta_origem' },
            { label: 'Essa árvore onde você está é linda!', toScreenId: 'resposta_arvore' },
            { label: 'Sim, e você o torna ainda mais bonito!', toScreenId: 'resposta_elogio' }
          ]
        },
        {
          id: 'resposta_pacifico',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'É mesmo, não é? Aqui a vida ainda respira no seu ritmo natural.',
            'É um dos poucos lugares onde ainda podemos ouvir o silêncio.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'sombra_na_agua' }
          ]
        },
        {
          id: 'resposta_origem',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Sim! Tudo que é grande começa pequeno.',
            'Esta água cristalina vai viajar centenas de quilômetros até se tornar as majestosas Cataratas.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'sombra_na_agua' }
          ]
        },
        {
          id: 'resposta_arvore',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Ah, a corticeira-do-banhado! Ela é essencial para nós.',
            'Seus frutos são nosso alimento e seus galhos, nossa proteção.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'sombra_na_agua' }
          ]
        },
        {
          id: 'resposta_elogio',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Obrigada! *balança as penas modestamente*',
            'Nós, araras, somos as joias vivas desta floresta.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'sombra_na_agua' }
          ]
        },
        {
          id: 'sombra_na_agua',
          title: 'Uma Sombra na Água',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'NARRADOR',
          texts: [
            'Rubi voa do galho e pousa em uma pedra na beira da nascente.',
            'Ela encara o próprio reflexo na água cristalina.',
            'Sua postura animada parece murchar um pouco.',
            'Um ar de melancolia a envolve.'
          ],
          choices: [
            { label: 'Observar Rubi', toScreenId: 'rubi_melancolia' }
          ]
        },
        {
          id: 'rubi_melancolia',
          title: 'Solidão',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Sabe, às vezes eu olho para mim mesma... e me sinto tão sozinha.',
            'Vejo essa cor vermelha tão forte, e me pergunto por quanto tempo ela ainda vai colorir esta mata.'
          ],
          choices: [
            { label: 'Por que você se sentiria sozinha em um lugar tão cheio de vida?', toScreenId: 'resposta_vida' },
            { label: 'É uma cor linda. Deveria ter orgulho.', toScreenId: 'resposta_orgulho' },
            { label: 'O que quer dizer com "por quanto tempo"?', toScreenId: 'resposta_tempo' },
            { label: 'Tem algo te preocupando, Rubi?', toScreenId: 'resposta_preocupacao' }
          ]
        },
        {
          id: 'resposta_vida',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'A floresta está cheia de vida, sim... mas de outras espécies.',
            'Cada vez vejo menos araras como eu. Os bandos estão menores, mais distantes.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'palavra_assustadora' }
          ]
        },
        {
          id: 'resposta_orgulho',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Tenho orgulho, sim. Mas o orgulho não aquece os ninhos vazios.',
            'Não enche a floresta com os gritos dos filhotes.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'palavra_assustadora' }
          ]
        },
        {
          id: 'resposta_tempo',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'É que... há uma palavra que paira sobre nós.',
            'Uma palavra que os humanos usam, mas talvez não entendam completamente.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'palavra_assustadora' }
          ]
        },
        {
          id: 'resposta_preocupacao',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Tudo me preocupa ultimamente.',
            'O som das máquinas que se aproxima, as árvores que caem... e o silêncio que fica.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'palavra_assustadora' }
          ]
        },
        {
          id: 'palavra_assustadora',
          title: 'A Palavra Assustadora',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'NARRADOR',
          texts: [
            'A arara se aproxima um pouco mais de você.',
            'Seus olhos negros e redondos fixos nos seus, como se buscasse compreensão.',
            'A palavra que ela teme paira no ar.'
          ],
          choices: [
            { label: 'Ouvir Rubi', toScreenId: 'extincao' }
          ]
        },
        {
          id: 'extincao',
          title: 'Extinção',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'A palavra é "extinção".',
            'Você... você sabe o que isso significa?',
            'É quando não existe mais nenhum, nem um único exemplar de uma espécie em todo o mundo.',
            'Apagado. Para sempre.',
            'Você consegue imaginar algo tão triste?'
          ],
          choices: [
            { label: 'Sim, é um conceito terrível.', toScreenId: 'resposta_terrivel' },
            { label: 'Já ouvi falar, mas nunca pensei muito sobre isso.', toScreenId: 'resposta_nunca_pensou' },
            { label: 'Não exatamente. O que causa isso?', toScreenId: 'resposta_causas' },
            { label: 'Deve ser muito assustador pensar nisso.', toScreenId: 'resposta_assustador' }
          ]
        },
        {
          id: 'resposta_terrivel',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Terrível é pouco. É o fim de uma história que começou há milhões de anos.',
            'É o silêncio eterno onde antes havia cor e vida.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'ninhos_vazios' }
          ]
        },
        {
          id: 'resposta_nunca_pensou',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Pois é hora de pensar. Porque para nós não é um conceito, é uma possibilidade real.',
            'Algo que pode acontecer a qualquer momento.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'ninhos_vazios' }
          ]
        },
        {
          id: 'resposta_causas',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Muitas coisas... a floresta que some, os caçadores, o tráfico.',
            'Mas principalmente, o esquecimento. Quando as pessoas esquecem que precisamos existir.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'ninhos_vazios' }
          ]
        },
        {
          id: 'resposta_assustador',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'É o mais assustador que existe. Acordar todos os dias sabendo que pode ser um dos últimos.',
            'Que suas cores podem ser as últimas que esta floresta verá.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'ninhos_vazios' }
          ]
        },
        {
          id: 'ninhos_vazios',
          title: 'Ninhos Vazios',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'NARRADOR',
          texts: [
            'Rubi o convida a segui-la com um chamado.',
            'Ela voa para uma pequena colina próxima, onde se erguem várias palmeiras altas e ocas.',
            'Muitos dos buracos nos troncos parecem ninhos antigos.'
          ],
          choices: [
            { label: 'Observar os ninhos', toScreenId: 'rubi_ninhos' }
          ]
        },
        {
          id: 'rubi_ninhos',
          title: 'Memórias Perdidas',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Veja. Cada um desses buracos já foi o lar de uma família de araras.',
            'Eu me lembro do barulho, da gritaria dos filhotes pedindo comida.',
            'Agora... só o vento assobia neles.',
            'Onde todos foram parar?'
          ],
          choices: [
            { label: 'Que triste ver tantos lares abandonados.', toScreenId: 'resposta_triste' },
            { label: 'O que aconteceu com as outras araras?', toScreenId: 'resposta_aconteceu' },
            { label: 'Você não tem sua própria família?', toScreenId: 'resposta_familia' },
            { label: 'Talvez eles apenas tenham se mudado.', toScreenId: 'resposta_mudaram' }
          ]
        },
        {
          id: 'resposta_triste',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'É mais que triste. Cada ninho vazio é uma história interrompida.',
            'Uma promessa de vida que não se cumpriu.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'barulho_distante' }
          ]
        },
        {
          id: 'resposta_aconteceu',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Alguns foram capturados, outros não encontraram mais comida...',
            'A floresta está ficando pequena demais para nós.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'barulho_distante' }
          ]
        },
        {
          id: 'resposta_familia',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Tive... uma vez. Meu companheiro não voltou de um voo de forrageio.',
            'Meus ovos nunca eclodiram... *sua voz some por um instante*'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'barulho_distante' }
          ]
        },
        {
          id: 'resposta_mudaram',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Se mudaram para onde? Não há mais para onde ir!',
            'As florestas estão cercadas, os rios estão sendo cortados...'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'barulho_distante' }
          ]
        },
        {
          id: 'barulho_distante',
          title: 'O Barulho Distante',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'NARRADOR',
          texts: [
            'Enquanto Rubi fala, um zumbido baixo e distante quebra a paz da nascente.',
            'Parece o som de um motor, vindo de além das árvores.',
            'Rubi se encolhe instintivamente.'
          ],
          choices: [
            { label: 'Observar a reação de Rubi', toScreenId: 'rubi_barulho' }
          ]
        },
        {
          id: 'rubi_barulho',
          title: 'O Som da Destruição',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Está ouvindo? Esse barulho... ele chega cada vez mais perto.',
            'É o som do mundo de vocês, dos humanos.',
            'Ele assusta os outros animais e derruba as nossas árvores, a nossa comida, os nossos abrigos.',
            'Vocês não percebem que, ao destruir a floresta, estão nos destruindo também?'
          ],
          choices: [
            { label: 'Nem todos os humanos são assim.', toScreenId: 'resposta_nem_todos' },
            { label: 'Eu sinto muito, Rubi. Às vezes não pensamos nas consequências.', toScreenId: 'resposta_desculpas' },
            { label: 'Deve ser assustador viver com esse medo constante.', toScreenId: 'resposta_medo_constante' },
            { label: 'O que exatamente vocês perdem quando uma árvore é derrubada?', toScreenId: 'resposta_perdem' }
          ]
        },
        {
          id: 'resposta_nem_todos',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Eu sei... eu sei que nem todos.',
            'Mas são poucos os que tentam parar a destruição.',
            'A maioria apenas observa.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'luz_esperanca' }
          ]
        },
        {
          id: 'resposta_desculpas',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Desculpas não plantam novas árvores...',
            'Mas é bom ouvir que pelo menos alguém reconhece o que está acontecendo.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'luz_esperanca' }
          ]
        },
        {
          id: 'resposta_medo_constante',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'É como viver com uma tempestade sempre no horizonte.',
            'Você nunca sabe quando vai chegar, mas sabe que vai.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'luz_esperanca' }
          ]
        },
        {
          id: 'resposta_perdem',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Tudo! Cada árvore é um supermercado, uma farmácia, uma casa.',
            'São frutos, remédios, abrigo... é uma vida inteira que desaparece.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'luz_esperanca' }
          ]
        },
        {
          id: 'luz_esperanca',
          title: 'Uma Luz de Esperança',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'NARRADOR',
          texts: [
            'O humor de Rubi parece sombrio, mas então ela olha para o outro lado da clareira.',
            'Seu semblante se suaviza um pouco, como se lembrasse de algo diferente.'
          ],
          choices: [
            { label: 'Observar', toScreenId: 'rubi_esperanca' }
          ]
        },
        {
          id: 'rubi_esperanca',
          title: 'Humanos Diferentes',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Mas... como você disse, nem todos são iguais.',
            'De vez em quando, vejo humanos diferentes.',
            'Eles andam em silêncio, não carregam gaiolas nem machados.',
            'Eles nos observam de longe e parecem... felizes em nos ver.'
          ],
          choices: [
            { label: 'Acho que sei de quem você está falando. São pesquisadores!', toScreenId: 'resposta_pesquisadores' },
            { label: 'Eles não te dão medo?', toScreenId: 'resposta_medo_pesquisadores' },
            { label: 'O que você acha que eles querem?', toScreenId: 'resposta_querem' },
            { label: 'Isso é bom! É um sinal de que alguns se importam.', toScreenId: 'resposta_importam' }
          ]
        },
        {
          id: 'resposta_pesquisadores',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Pesquisadores? Ah, então é isso!',
            'Eles nos observam, anotam coisas... talvez estejam tentando nos entender.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'papel_rio' }
          ]
        },
        {
          id: 'resposta_medo_pesquisadores',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'No início sim, mas eles nunca se aproximam demais.',
            'Respeitam nosso espaço. É... reconfortante.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'papel_rio' }
          ]
        },
        {
          id: 'resposta_querem',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Acho que querem aprender. Conhecer.',
            'Diferente dos outros, que só querem tirar.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'papel_rio' }
          ]
        },
        {
          id: 'resposta_importam',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Sim... saber que alguém se importa faz toda a diferença.',
            'Nos dá esperança de que talvez não seja tarde demais.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'papel_rio' }
          ]
        },
        {
          id: 'papel_rio',
          title: 'O Papel do Rio',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'NARRADOR',
          texts: [
            'Rubi volta a olhar para a nascente do Iguaçu.',
            'A água continua seu fluxo, indiferente à conversa, iniciando sua longa jornada de centenas de quilômetros.'
          ],
          choices: [
            { label: 'Ouvir Rubi', toScreenId: 'rubi_rio' }
          ]
        },
        {
          id: 'rubi_rio',
          title: 'Tudo Está Conectado',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Este rio é como a vida da floresta.',
            'Ele nasce aqui, puro.',
            'Mas no caminho, ele pode ser poluído.',
            'Se o rio adoece, todos nós que bebemos dele adoecemos também.',
            'Proteger a mim e proteger o rio... é a mesma coisa. Tudo está conectado.'
          ],
          choices: [
            { label: 'A saúde da água é a saúde da terra.', toScreenId: 'resposta_saude_agua' },
            { label: 'Então, cuidar dos rios é uma forma de proteger os animais?', toScreenId: 'resposta_cuidar_rios' },
            { label: 'É uma grande responsabilidade para um pequeno riacho.', toScreenId: 'resposta_responsabilidade' },
            { label: 'A poluição também é um grande perigo.', toScreenId: 'resposta_poluicao' }
          ]
        },
        {
          id: 'resposta_saude_agua',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Exatamente! A água é o sangue da floresta.',
            'Se o sangue está doente, todo o corpo sofre.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'pergunta_direta' }
          ]
        },
        {
          id: 'resposta_cuidar_rios',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Sim! Cada rio limpo é uma chance de vida para milhares de espécies.',
            'Inclusive para a minha.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'pergunta_direta' }
          ]
        },
        {
          id: 'resposta_responsabilidade',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'E começa com gestos pequenos!',
            'Proteger esta nascente já é proteger todo o rio que virá depois.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'pergunta_direta' }
          ]
        },
        {
          id: 'resposta_poluicao',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Um perigo invisível que viaja por toda parte.',
            'O que vocês jogam no rio lá longe, acaba chegando até nós aqui.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'pergunta_direta' }
          ]
        },
        {
          id: 'pergunta_direta',
          title: 'Uma Pergunta Direta',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'NARRADOR',
          texts: [
            'Rubi voa para um galho bem na sua frente, inclinando a cabeça.',
            'Seus olhos parecem conter uma urgência, uma necessidade de entender o seu ponto de vista.'
          ],
          choices: [
            { label: 'Ouvir', toScreenId: 'rubi_pergunta' }
          ]
        },
        {
          id: 'rubi_pergunta',
          title: 'O Que Fazer?',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Você que veio do outro mundo, do mundo dos humanos... me diga.',
            'Agora que você ouviu meu medo, o que você acha que pode ser feito?',
            'O que você faria para que eu e minha espécie não desapareçamos?'
          ],
          choices: [
            { label: 'Plantar mais árvores, para que vocês tenham comida e lar.', toScreenId: 'resposta_plantar' },
            { label: 'Criar leis mais duras contra o desmatamento e o tráfico de animais.', toScreenId: 'resposta_leis' },
            { label: 'Ensinar outras pessoas, especialmente as crianças, sobre a importância de vocês.', toScreenId: 'resposta_ensinar' },
            { label: 'Apoiar os "pesquisadores" e os projetos que protegem a floresta.', toScreenId: 'resposta_apoiar' }
          ]
        },
        {
          id: 'resposta_plantar',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Ah, isso seria maravilhoso!',
            'Cada árvore plantada é uma nova esperança, um novo lar possível.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'som_esperanca' }
          ]
        },
        {
          id: 'resposta_leis',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Leis... sim, precisamos que nos protejam.',
            'Que digam claramente: "esta floresta é importante, esta vida vale a pena".'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'som_esperanca' }
          ]
        },
        {
          id: 'resposta_ensinar',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'As crianças! Elas entendem melhor que os adultos, às vezes.',
            'Se elas aprenderem a nos amar, talvez o futuro seja diferente.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'som_esperanca' }
          ]
        },
        {
          id: 'resposta_apoiar',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Os que já estão tentando ajudar... sim!',
            'Eles precisam de força, de recursos... de saber que não estão sozinhos.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'som_esperanca' }
          ]
        },
        {
          id: 'som_esperanca',
          title: 'O Som da Esperança',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'NARRADOR',
          texts: [
            'Ao longe, um som diferente ecoa pela mata.',
            'Não é um motor, mas o chamado de outra arara.',
            'Rubi ergue a cabeça instantaneamente, e todo o seu corpo fica em alerta.',
            'Um brilho de pura alegria surge em seus olhos.'
          ],
          choices: [
            { label: 'Observar', toScreenId: 'rubi_alegria' }
          ]
        },
        {
          id: 'rubi_alegria',
          title: 'Tupi!',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Você ouviu? Você ouviu?',
            'É o Tupi! Meu amigo!',
            'Eu não o via há semanas! Ele está aqui!',
            'Não estou sozinha!',
            'Isso significa que ele está bem, que encontrou comida!'
          ],
          choices: [
            { label: 'Que notícia maravilhosa, Rubi!', toScreenId: 'resposta_maravilhosa' },
            { label: 'Vá encontrá-lo!', toScreenId: 'resposta_va' },
            { label: 'Fico tão feliz por você!', toScreenId: 'resposta_feliz' },
            { label: 'A esperança nunca deve ser perdida.', toScreenId: 'resposta_esperanca_nunca' }
          ]
        },
        {
          id: 'resposta_maravilhosa',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'É a melhor notícia que eu poderia ter!',
            'Saber que ele está bem... que ainda há outros por aí...'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'promessa' }
          ]
        },
        {
          id: 'resposta_va',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Vou, vou sim! Preciso saber como ele está!',
            '*agita as asas animadamente*'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'promessa' }
          ]
        },
        {
          id: 'resposta_feliz',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Eu também! Você não imagina o quanto!',
            'É como se um peso enorme tivesse saído das minhas asas.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'promessa' }
          ]
        },
        {
          id: 'resposta_esperanca_nunca',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Nunca! Enquanto houver um de nós, haverá esperança.',
            'Enquanto pudermos nos encontrar, haverá razão para lutar.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'promessa' }
          ]
        },
        {
          id: 'promessa',
          title: 'Uma Promessa',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'NARRADOR',
          texts: [
            'Rubi abre as asas, pronta para voar na direção do chamado de seu amigo.',
            'O vermelho de suas penas parece ainda mais intenso sob a luz do sol poente.',
            'Ela se vira para você uma última vez.'
          ],
          choices: [
            { label: 'Despedir-se', toScreenId: 'rubi_despedida' }
          ]
        },
        {
          id: 'rubi_despedida',
          title: 'Não Se Esqueça',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Obrigada por me ouvir. De verdade.',
            'Falar sobre meu medo com alguém que entende o tornou um pouco menor.',
            'Por favor, não se esqueça de mim.',
            'Não se esqueça da minha história e da história de tantos outros como eu.'
          ],
          choices: [
            { label: 'Eu prometo que vou me lembrar, Rubi.', toScreenId: 'final_lembrar' },
            { label: 'Vou aprender mais sobre como ajudar.', toScreenId: 'final_aprender' },
            { label: 'Sua história me inspirou. Vou contar para outras pessoas.', toScreenId: 'final_contar' },
            { label: 'Você não está sozinha. Nós nos importamos.', toScreenId: 'final_importar' }
          ]
        },
        {
          id: 'final_lembrar',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Obrigada. A memória é a primeira forma de cuidado.',
            'Enquanto formos lembrados, nunca desapareceremos por completo.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'final_consolidado' }
          ]
        },
        {
          id: 'final_aprender',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'O conhecimento é poder. O poder de mudar, de proteger.',
            'Que bom saber que você quer aprender mais.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'final_consolidado' }
          ]
        },
        {
          id: 'final_contar',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Contar nossa história... isso é tudo que podemos pedir.',
            'Que nossa voz ecoe através da sua.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'final_consolidado' }
          ]
        },
        {
          id: 'final_importar',
          title: 'Rubi',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Saber que alguém se importa...',
            'Isso faz toda a diferença. Obrigada.'
          ],
          choices: [
            { label: 'Continuar', toScreenId: 'final_consolidado' }
          ]
        },
        {
          id: 'final_consolidado',
          title: 'Adeus, Amigo(a)',
          backgroundUrl: nascente,
          characterUrl: arara,
          speaker: 'RUBI',
          texts: [
            'Obrigada.',
            'Saber disso me dá força.',
            'Enquanto formos lembrados, nunca desapareceremos por completo.',
            'Agora, tenho que ir. Adeus, amigo(a)!'
          ],
          result: { 
            title: 'Fase 1 Concluída — A História de Rubi', 
            summary: 'Você ouviu o chamado de uma Arara-vermelha-grande e aprendeu sobre os desafios da conservação. A jornada pelo Rio Iguaçu continua...', 
            nextPhaseId: '2' 
          }
        }
      ]
    },
{
  id: '2',
  title: 'FASE 2 — Zoológico de Curitiba',
  startScreenId: 'intro',
  screens: [
    {
      id: 'intro',
      title: 'Um Encontro no Zoológico',
      backgroundUrl: zoologico,
      speaker: 'NARRADOR',
      texts: [
        'O dia está agradável no Zoológico de Curitiba.',
        'Você se aproxima de um amplo recinto que imita a margem de um rio, com uma grande piscina de água limpa e grama verde.',
        'Várias capivaras descansam ao sol, mas uma delas, sentada bem na beirada da água, observa você com uma calma curiosa.'
      ],
      choices: [
        { label: 'Aproximar-se da capivara', toScreenId: 'encontro_mia' }
      ]
    },
    {
      id: 'encontro_mia',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Olá. Seja bem-vindo(a). Meu nome é Mia.',
        'Gosto de ficar aqui, sentindo a água.',
        'Meus pais dizem que isso está em nosso sangue, a "memória do rio".',
        'Eles falam que esta água aqui do zoo é um espelho limpo do nosso verdadeiro lar, o Rio Iguaçu, que passa aqui perto.'
      ],
      choices: [
        { label: 'Prazer em conhecer, Mia. É um lugar bem tranquilo.', toScreenId: 'resposta_tranquilo' },
        { label: '"Memória do rio"? O que é isso?', toScreenId: 'resposta_memoria' },
        { label: 'Você parece gostar muito de água.', toScreenId: 'resposta_agua' },
        { label: 'Então o Rio Iguaçu é diferente daqui?', toScreenId: 'resposta_diferente' }
      ]
    },
    {
      id: 'resposta_tranquilo',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'É tranquilo, sim. Às vezes até demais.',
        'Aqui não temos as surpresas do rio verdadeiro... nem os perigos, é claro.',
        'Mas também não temos a liberdade.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'flores_nao_murcham' }
      ]
    },
    {
      id: 'resposta_memoria',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'É uma sabedoria que carregamos nas células.',
        'A lembrança ancestral de nadar em águas correntes, de sentir a correnteza.',
        'Mesmo aqui, longe do rio, essa memória ainda nos guia.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'flores_nao_murcham' }
      ]
    },
    {
      id: 'resposta_agua',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'A água é nossa vida. É onde nos sentimos mais em casa.',
        'Flutuando na água, me sinto conectada com minhas ancestrais.',
        'É como se o rio ainda estivesse me abraçando.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'flores_nao_murcham' }
      ]
    },
    {
      id: 'resposta_diferente',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Muito diferente. Esta água é... controlada.',
        'No rio, a água tem personalidade. Muda com as estações, com as chuvas.',
        'Aqui é sempre a mesma coisa. Segura, mas sem alma.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'flores_nao_murcham' }
      ]
    },
    {
      id: 'flores_nao_murcham',
      title: 'As Flores que Não Murcham',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'NARRADOR',
      texts: [
        'Mia entra lentamente na água, boiando com apenas os olhos e o focinho para fora, como é típico de sua espécie.',
        'Ela parece pensativa, olhando para um ponto fixo na superfície.'
      ],
      choices: [
        { label: 'Observar Mia', toScreenId: 'mia_flores' }
      ]
    },
    {
      id: 'mia_flores',
      title: 'Flores Estranhas',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Meus avós contam que, nas margens do Iguaçu, às vezes aparecem umas "flores" estranhas.',
        'De cores vibrantes, que brilham no sol.',
        'Mas elas não têm cheiro, os peixes não chegam perto e elas nunca murcham.',
        'Elas flutuam por dias, presas nos galhos.'
      ],
      choices: [
        { label: 'Que tipo de flores são essas?', toScreenId: 'resposta_tipo_flores' },
        { label: 'Elas não são flores de verdade, são?', toScreenId: 'resposta_nao_flores' },
        { label: 'Isso não parece algo bom.', toScreenId: 'resposta_nao_bom' },
        { label: 'Por que os peixes não chegam perto?', toScreenId: 'resposta_peixes_longe' }
      ]
    },
    {
      id: 'resposta_tipo_flores',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Os humanos as chamam de "plástico", eu acho.',
        'Elas vêm em muitas formas: garrafas que brilham, sacos que voam como fantasmas...',
        'Mas nenhuma deles alimenta ou abriga como as flores de verdade.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_gosto_estranho' }
      ]
    },
    {
      id: 'resposta_nao_flores',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Não, não são. São imitações vazias.',
        'Flores de verdade alimentam, curam, abrigam...',
        'Estas só enganam e poluem.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_gosto_estranho' }
      ]
    },
    {
      id: 'resposta_nao_bom',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Não é bom mesmo. Os mais jovens às vezes tentam comê-las, achando que são comida.',
        'E ficam doentes, ou pior...',
        'É uma armadilha colorida.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_gosto_estranho' }
      ]
    },
    {
      id: 'resposta_peixes_longe',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Os peixes são sábios. Eles sentem o perigo que nós não vemos.',
        'Essas "flores" soltam coisas na água que os machucam.',
        'Eles sabem que não é natural.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_gosto_estranho' }
      ]
    },
    {
      id: 'agua_gosto_estranho',
      title: 'A Água com Gosto de Chuva Estranha',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'NARRADOR',
      texts: [
        'A capivara mergulha e emerge um pouco mais perto, sacudindo as orelhas.',
        'Seu olhar tranquilo carrega uma pitada de confusão.'
      ],
      choices: [
        { label: 'Ouvir Mia', toScreenId: 'mia_chuva_estranha' }
      ]
    },
    {
      id: 'mia_chuva_estranha',
      title: 'Perigo Invisível',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Além das flores de plástico, há outro problema. Um perigo que não se pode ver.',
        'Às vezes, contam os parentes que vivem lá, a água vem com um gosto diferente, um cheiro que arde no nariz.',
        'Dizem que é como se uma "chuva estranha" caísse na água, deixando tudo doente.'
      ],
      choices: [
        { label: 'Você está falando de poluição química?', toScreenId: 'resposta_quimica' },
        { label: 'Como assim, "gosto diferente"?', toScreenId: 'resposta_gosto' },
        { label: 'Isso deve ser muito perigoso para vocês.', toScreenId: 'resposta_perigoso' },
        { label: 'E de onde vem essa "chuva estranha"?', toScreenId: 'resposta_origem_chuva' }
      ]
    },
    {
      id: 'resposta_quimica',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Poluição química... sim, deve ser isso.',
        'É um veneno que não se vê, mas que está lá.',
        'Ele não mata rápido, vai enfraquecendo aos poucos.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'silencio_peixes' }
      ]
    },
    {
      id: 'resposta_gosto',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'O gosto da vida sai da água. Fica um sabor metálico, amargo.',
        'As plantas aquáticas murcham, os peixes ficam lentos...',
        'A água perde sua essência.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'silencio_peixes' }
      ]
    },
    {
      id: 'resposta_perigoso',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'É o pior tipo de perigo, porque você não sabe que está nele até ser tarde.',
        'Bebe a água, come as plantas... e só depois sente as consequências.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'silencio_peixes' }
      ]
    },
    {
      id: 'resposta_origem_chuva',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Vem das cidades. Dos lugares onde vocês vivem.',
        'A água lava suas ruas, suas fábricas... e traz tudo para o rio.',
        'É uma chuva que carrega a sujeira de vocês até nós.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'silencio_peixes' }
      ]
    },
    {
      id: 'silencio_peixes',
      title: 'O Silêncio dos Peixes',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'NARRADOR',
      texts: [
        'Mia apoia as patas dianteiras na borda do tanque, olhando para o fundo.',
        'No zoológico, a água é tão clara que se pode ver cada pedrinha.'
      ],
      choices: [
        { label: 'Observar', toScreenId: 'mia_peixes' }
      ]
    },
    {
      id: 'mia_peixes',
      title: 'Corrente de Silêncio',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Aqui, às vezes eles soltam peixinhos para nós.',
        'Mas lá no rio... os mais velhos dizem que está cada vez mais difícil encontrá-los.',
        'Os lambaris, os bagres... estão sumindo.',
        'E quando os peixes somem, as lontras e as garças também ficam mais raras.',
        'É uma corrente de silêncio.'
      ],
      choices: [
        { label: 'Um problema afeta todos os outros, então.', toScreenId: 'resposta_teia' },
        { label: 'Vocês, capivaras, comem peixes?', toScreenId: 'resposta_comem_peixes' },
        { label: 'É triste pensar no rio ficando mais vazio.', toScreenId: 'resposta_triste_vazio' },
        { label: 'Ninguém faz nada para limpar o rio?', toScreenId: 'resposta_limpar' }
      ]
    },
    {
      id: 'resposta_teia',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Exatamente! Tudo está conectado, como uma teia delicada.',
        'Quando um fio se rompe, toda a teia pode desmoronar.',
        'Os peixes somem, então os que comem peixes também somem...'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'historias_cristal' }
      ]
    },
    {
      id: 'resposta_comem_peixes',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Não, nós comemos plantas. Mas os peixes são nossos vizinhos.',
        'E quando os vizinhos adoecem, é sinal de que algo está muito errado.',
        'Além disso, sem peixes, quem vai controlar os insetos?'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'historias_cristal' }
      ]
    },
    {
      id: 'resposta_triste_vazio',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'É a pior solidão. O rio vai ficando mudo.',
        'Antes havia cantos, mergulhos, vida... agora só o barulho das máquinas.',
        'Um rio vazio é um rio morto.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'historias_cristal' }
      ]
    },
    {
      id: 'resposta_limpar',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Alguns tentam. Vejo humanos de laranja às vezes, recolhendo as "flores" falsas.',
        'Mas é como enxugar gelo. A sujeira volta sempre.',
        'Será que não seria melhor não sujar em primeiro lugar?'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'historias_cristal' }
      ]
    },
    {
      id: 'historias_cristal',
      title: 'Histórias de um Rio de Cristal',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'NARRADOR',
      texts: [
        'A capivara parece mergulhar em uma memória antiga.',
        'Seus olhos perdidos no horizonte, para além dos muros do zoológico.'
      ],
      choices: [
        { label: 'Ouvir', toScreenId: 'mia_bisavo' }
      ]
    },
    {
      id: 'mia_bisavo',
      title: 'Nuvens de Prata',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Minha bisavó nasceu na beira do Iguaçu.',
        'Ela contava que, no tempo dela, a água era tão limpa que dava para ver as capivaras andando no fundo do rio.',
        'Os cardumes de peixes eram como nuvens de prata se movendo sob a água.',
        'Parece uma história de um mundo que não existe mais.'
      ],
      choices: [
        { label: 'É difícil imaginar um rio tão limpo perto de uma cidade grande.', toScreenId: 'resposta_cidade' },
        { label: 'Essa deve ser uma memória muito preciosa para sua família.', toScreenId: 'resposta_preciosa' },
        { label: 'O que você acha que mudou tão rápido?', toScreenId: 'resposta_mudou' },
        { label: 'Você gostaria de ter conhecido o rio assim?', toScreenId: 'resposta_gostaria' }
      ]
    },
    {
      id: 'resposta_cidade',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'A cidade cresceu e virou as costas para o rio.',
        'Em vez de cuidar dele, usaram como lixeira.',
        'E o preço que pagamos é perder essa beleza para sempre.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'origem_problema' }
      ]
    },
    {
      id: 'resposta_preciosa',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'É nosso tesouro familiar. Passamos essas histórias de geração em geração.',
        'Para que nunca esqueçamos como as coisas deveriam ser.',
        'Para manter viva a esperança de um dia voltar a ver o rio assim.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'origem_problema' }
      ]
    },
    {
      id: 'resposta_mudou',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'A ganância mudou. A pressa mudou.',
        'Os humanos queriam mais espaço, mais coisas... e esqueceram que precisam do rio tanto quanto nós.',
        'Progresso não deveria significar destruição.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'origem_problema' }
      ]
    },
    {
      id: 'resposta_gostaria',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Mais que tudo no mundo! Nadar em águas realmente limpas...',
        'Ver aquelas nuvens de prata com meus próprios olhos...',
        'Mas me contento em saber que um dia foi possível. Isso me dá esperança.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'origem_problema' }
      ]
    },
    {
      id: 'origem_problema',
      title: 'A Origem do Problema',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'NARRADOR',
      texts: [
        'Mia sai da água e se senta na grama, mascando um broto de forma metódica.',
        'Ela parece tentar entender um quebra-cabeça muito complexo.'
      ],
      choices: [
        { label: 'Ouvir', toScreenId: 'mia_origem' }
      ]
    },
    {
      id: 'mia_origem',
      title: 'De Costas para o Rio',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Eu fico pensando... de onde vem tudo isso?',
        'O rio não nasce sujo. Lá na nascente, onde a arara Rubi mora, ele é puro.',
        'A sujeira... ela entra no caminho. Ela vem da cidade.',
        'Vem das casas de vocês.',
        'Vocês vivem perto do rio, mas vivem de costas para ele?'
      ],
      choices: [
        { label: 'Acho que muitas pessoas esquecem que o esgoto e o lixo vão para algum lugar.', toScreenId: 'resposta_algum_lugar' },
        { label: 'Não é por maldade. Acho que é falta de atenção.', toScreenId: 'resposta_atencao' },
        { label: 'É mais fácil jogar fora do que cuidar.', toScreenId: 'resposta_facil' },
        { label: 'É uma pergunta muito importante, Mia.', toScreenId: 'resposta_importante' }
      ]
    },
    {
      id: 'resposta_algum_lugar',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Esse "algum lugar" é nossa casa.',
        'O que para vocês é "fora", para nós é dentro.',
        'O rio é a nossa rua, a nossa praça, o nosso quintal.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'refugio_agridoce' }
      ]
    },
    {
      id: 'resposta_atencao',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Falta de atenção pode doer tanto quanto maldade.',
        'Quando você não vê o que está destruindo, continua destruindo.',
        'Às vezes, prestar atenção é o primeiro passo para cuidar.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'refugio_agridoce' }
      ]
    },
    {
      id: 'resposta_facil',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'O fácil nem sempre é o certo.',
        'Cuidar dá trabalho, eu sei. Mas é um trabalho que vale a pena.',
        'Porque no final, cuidar do rio é cuidar de vocês mesmos.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'refugio_agridoce' }
      ]
    },
    {
      id: 'resposta_importante',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'É a pergunta que todos deveriam fazer.',
        'Por que construímos nossas casas viradas para longe da água que nos dá vida?',
        'Talvez seja hora de virar o rosto novamente para o rio.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'refugio_agridoce' }
      ]
    },
    {
      id: 'refugio_agridoce',
      title: 'Um Refúgio Agridoce',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'NARRADOR',
      texts: [
        'Mia olha ao redor do seu recinto no zoológico.',
        'A água tratada, a comida fresca, a ausência de predadores.',
        'Um suspiro tranquilo, mas com um toque de melancolia, escapa dela.'
      ],
      choices: [
        { label: 'Ouvir', toScreenId: 'mia_refugio' }
      ]
    },
    {
      id: 'mia_refugio',
      title: 'Paraíso e Gaiola',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Aqui eu estou segura. A água é sempre limpa.',
        'Mas isso é justo? Que eu tenha que viver presa para ter o que meus bisavós tinham de graça na natureza?',
        'Este lugar é um paraíso e uma gaiola ao mesmo tempo.'
      ],
      choices: [
        { label: 'Eu entendo seu sentimento. É uma segurança com um preço.', toScreenId: 'resposta_preco' },
        { label: 'Pelo menos aqui sua espécie está protegida.', toScreenId: 'resposta_protegida' },
        { label: 'Isso mostra o quanto as coisas pioraram lá fora.', toScreenId: 'resposta_pioraram' },
        { label: 'Você preferiria viver no rio, mesmo com os perigos?', toScreenId: 'resposta_preferiria' }
      ]
    },
    {
      id: 'resposta_preco',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'O preço da liberdade é alto, mas o preço do cativeiro é a alma.',
        'Aqui tenho tudo, exceto o que mais importa: a liberdade de ser quem eu sou.',
        'De seguir o chamado da "memória do rio".'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'grande_duvida' }
      ]
    },
    {
      id: 'resposta_protegida',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Protegida, sim. Mas a que custo?',
        'Minha espécie sobrevive aqui, mas perde sua essência.',
        'Somos capivaras, não deveríamos precisar de grades para sobreviver.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'grande_duvida' }
      ]
    },
    {
      id: 'resposta_pioraram',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Pioraram tanto que zoológicos se tornaram necessários.',
        'Quando a natureza precisa de jaulas para sobreviver, algo está muito errado.',
        'Espero que um dia os zoológicos sejam desnecessários.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'grande_duvida' }
      ]
    },
    {
      id: 'resposta_preferiria',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Em um instante. Os perigos do rio são naturais.',
        'Já os perigos que vocês criaram... esses sim são assustadores.',
        'Mas pelo menos no rio eu seria livre.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'grande_duvida' }
      ]
    },
    {
      id: 'grande_duvida',
      title: 'A Grande Dúvida',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'NARRADOR',
      texts: [
        'A capivara se aproxima da cerca que a separa do caminho dos visitantes.',
        'Olhando para você com uma sinceridade desarmante.'
      ],
      choices: [
        { label: 'Ouvir Mia', toScreenId: 'mia_duvida' }
      ]
    },
    {
      id: 'mia_duvida',
      title: 'Palavras Bonitas e Complicadas',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Meus tratadores falam muito sobre "reciclar", "não poluir", "consumo consciente".',
        'São palavras bonitas, mas complicadas.',
        'Você, que entende o mundo dos humanos, pode me explicar de uma forma simples?',
        'O que vocês podem fazer no dia a dia para que menos "flores de plástico" cheguem até nós?'
      ],
      choices: [
        { label: 'Separar o lixo para que ele possa ser reutilizado.', toScreenId: 'resposta_separar' },
        { label: 'Usar menos plástico, como sacolas e garrafas.', toScreenId: 'resposta_usar_menos' },
        { label: 'Nunca jogar lixo no chão, sempre no lugar certo.', toScreenId: 'resposta_lugar_certo' },
        { label: 'Não jogar óleo de cozinha ou produtos químicos na pia.', toScreenId: 'resposta_oleo' }
      ]
    },
    {
      id: 'resposta_separar',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Ah, então o lixo pode ter uma segunda chance!',
        'Isso faz sentido. Em vez de virar "flores falsas" no rio, ele vira algo útil.',
        'Gosto dessa ideia de transformação.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'rio_que_une' }
      ]
    },
    {
      id: 'resposta_usar_menos',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Menos plástico... menos problemas!',
        'Se não criam tanto lixo, não precisam se preocupar com onde colocá-lo.',
        'É uma solução tão simples e elegante.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'rio_que_une' }
      ]
    },
    {
      id: 'resposta_lugar_certo',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Cada coisa no seu lugar... como na natureza!',
        'As folhas caem no chão da floresta, não no rio.',
        'Se o lixo de vocês ficasse onde deve ficar, não chegaria até nós.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'rio_que_une' }
      ]
    },
    {
      id: 'resposta_oleo',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'O óleo! Isso explica a "chuva estranha"!',
        'Quando vocês lavam essas coisas na pia, elas vão direto para a água.',
        'Faz todo sentido manter essas coisas longe do rio.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'rio_que_une' }
      ]
    },
    {
      id: 'rio_que_une',
      title: 'O Rio que Une',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'NARRADOR',
      texts: [
        'Outras capivaras do grupo começam a se mover, bocejando e se espreguiçando ao sol da tarde.',
        'A hora do descanso em família estava começando.'
      ],
      choices: [
        { label: 'Observar', toScreenId: 'mia_mensageiro' }
      ]
    },
    {
      id: 'mia_mensageiro',
      title: 'O Rio Mensageiro',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'O Rio Iguaçu não é só a minha casa. Ele passa por muitos lugares, por muitas cidades.',
        'Ele conecta todos vocês.',
        'O lixo que uma pessoa joga em Curitiba pode viajar e chegar até as Cataratas.',
        'O rio é um mensageiro. Que mensagem vocês querem que ele leve?'
      ],
      choices: [
        { label: 'Uma mensagem de cuidado e respeito.', toScreenId: 'resposta_cuidado' },
        { label: 'Você me fez pensar em algo que eu nunca tinha parado para refletir.', toScreenId: 'resposta_reflexao' },
        { label: 'Que somos parte da mesma natureza que ele.', toScreenId: 'resposta_parte' },
        { label: 'Que estamos tentando consertar nossos erros.', toScreenId: 'resposta_consertar' }
      ]
    },
    {
      id: 'resposta_cuidado',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Essa é uma mensagem que o rio gostaria de carregar.',
        'Cuidado e respeito são as sementes da mudança.',
        'Se essa mensagem se espalhar, quem sabe o rio não volte a ser cristalino?'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pedido_calmo' }
      ]
    },
    {
      id: 'resposta_reflexao',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'A reflexão é o primeiro passo.',
        'Quando as pessoas param para pensar, começam a ver as conexões.',
        'E quando veem as conexões, começam a cuidar.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pedido_calmo' }
      ]
    },
    {
      id: 'resposta_parte',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Essa é a verdade mais importante!',
        'Não somos separados da natureza - somos parte dela.',
        'Quando entendemos isso, cuidar se torna natural.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pedido_calmo' }
      ]
    },
    {
      id: 'resposta_consertar',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Consertar é bom, mas prevenir é melhor.',
        'Mas sim, é importante tentar consertar o que foi quebrado.',
        'Mostra que vocês se importam.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pedido_calmo' }
      ]
    },
    {
      id: 'pedido_calmo',
      title: 'Um Pedido Calmo',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'NARRADOR',
      texts: [
        'Mia se vira para se juntar ao seu grupo, que agora se amontoa em uma pilha preguiçosa e confortável na grama.',
        'Antes de ir, ela olha para você uma última vez.'
      ],
      choices: [
        { label: 'Despedir-se', toScreenId: 'mia_despedida' }
      ]
    },
    {
      id: 'mia_despedida',
      title: 'Leve Essa Memória',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Obrigada por conversar. É bom compartilhar a "memória do rio" com alguém.',
        'Da próxima vez que você vir um rio, qualquer rio, lembre-se de mim.',
        'Lembre-se que ali dentro existe um mundo que depende da sua bondade.',
        'Leve essa memória com você.'
      ],
      choices: [
        { label: 'Pode deixar, Mia. Eu levarei.', toScreenId: 'final_levarei' },
        { label: 'Sua história mudou a forma como eu vejo os rios.', toScreenId: 'final_mudou' },
        { label: 'Vou fazer minha parte, eu prometo.', toScreenId: 'final_prometo' },
        { label: 'Obrigado por compartilhar sua sabedoria, Mia.', toScreenId: 'final_sabedoria' }
      ]
    },
    {
      id: 'final_levarei',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Que bom. As memórias são as sementes mais poderosas.',
        'Elas podem crescer e se transformar em ações.',
        'Cuide bem delas.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_mudou',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Isso me alegra profundamente.',
        'Quando mudamos a forma de ver, mudamos a forma de agir.',
        'Essa mudança é o começo de tudo.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_prometo',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Uma promessa é um presente precioso.',
        'Ela cria um laço entre nós, entre você e o rio.',
        'Acredito em você.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_sabedoria',
      title: 'Mia',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'A sabedoria só tem valor quando é compartilhada.',
        'Obrigada por estar disposto(a) a recebê-la.',
        'Que ela floresça em ações boas.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_consolidado',
      title: 'O Professor Silencioso',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Fico feliz. A reflexão é a primeira semente da mudança.',
        'O rio é um professor silencioso. Basta querer ouvi-lo.',
        'Fique bem.'
      ],
      result: { 
        title: 'Fase 2 Concluída — A Memória de Mia', 
        summary: 'Você aprendeu com uma capivara sobre a poluição do rio e como pequenas ações podem fazer diferença. A jornada continua...', 
        nextPhaseId: '3' 
      }
    }
  ]
},
{
  id: '3',
  title: 'FASE 3 — Ponte Histórica',
  startScreenId: 'intro',
  screens: [
    {
      id: 'intro',
      title: 'Um Encontro sob o Gigante de Ferro',
      backgroundUrl: ponte,
      speaker: 'NARRADOR',
      texts: [
        'A noite cai sobre as cidades-gêmeas de União da Vitória e Porto União.',
        'Sob os arcos da imponente Ponte Machado da Costa, o mundo é feito de sombras e do som constante da água do Rio Iguaçu.',
        'Perto de um dos pilares, um focinho farejador surge, seguido por uma casca blindada.',
        'Um Tatu-galinha começa seu forrageio noturno. Ele para ao sentir sua presença.'
      ],
      choices: [
        { label: 'Observar o tatu', toScreenId: 'encontro_richard' }
      ]
    },
    {
      id: 'encontro_richard',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Oh. Olá. Desculpe, eu não esperava companhia.',
        'Meu nome é Richard. Eu moro aqui, neste solo.',
        'Para mim, a história desta cidade não está nos livros, mas aqui embaixo, nas camadas de terra que eu escavo toda noite.'
      ],
      choices: [
        { label: 'Prazer, Richard. Não quis assustá-lo.', toScreenId: 'resposta_assustar' },
        { label: 'O que a terra conta para você?', toScreenId: 'resposta_terra_conta' },
        { label: 'É um lugar interessante para se morar.', toScreenId: 'resposta_interessante' },
        { label: 'Um tatu-galinha! Que animal incrível.', toScreenId: 'resposta_incrivel' }
      ]
    },
    {
      id: 'resposta_assustar',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Não se preocupe. Eu me assusto fácil, é verdade.',
        'Vivemos sempre alerta. É o preço de ser pequeno neste mundo grande.',
        'Mas sua presença parece... pacífica.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'rio_zangado' }
      ]
    },
    {
      id: 'resposta_terra_conta',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Ah, a terra conta tudo! Ela guarda cada memória.',
        'Camadas sobre camadas de histórias: tempestades, cheias, construções...',
        'Cada escavação é uma página de um livro invisível.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'rio_zangado' }
      ]
    },
    {
      id: 'resposta_interessante',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Interessante e barulhento! *olha para cima*',
        'Mas sim, tem suas vantagens. A ponte nos protege da chuva.',
        'E a vista do rio... bem, ela lembra o que perdemos.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'rio_zangado' }
      ]
    },
    {
      id: 'resposta_incrivel',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Incrível? *balança modestamente a cabeça*',
        'Somos apenas escavadores obstinados.',
        'Mas obrigado. É raro sermos vistos como algo além de pragas.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'rio_zangado' }
      ]
    },
    {
      id: 'rio_zangado',
      title: 'O Rio Zangado',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'NARRADOR',
      texts: [
        'Richard enfia o focinho na terra e remexe por um instante.',
        'Enquanto come, ele parece se lembrar de algo, como se o gosto da terra trouxesse memórias.'
      ],
      choices: [
        { label: 'Ouvir Richard', toScreenId: 'richard_cheia' }
      ]
    },
    {
      id: 'richard_cheia',
      title: 'A Grande Cheia',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Este solo é diferente. Embaixo da terra seca, existe uma camada grossa de areia.',
        'Meus avós contaram. Foi de uma vez em que o rio se cansou de ser pequeno e decidiu visitar a cidade inteira.',
        'Uma "grande cheia". Ele quis mostrar até onde ia seu verdadeiro quintal.'
      ],
      choices: [
        { label: 'Você está falando de uma grande inundação?', toScreenId: 'resposta_inundacao' },
        { label: 'O rio quis mostrar seu poder, então.', toScreenId: 'resposta_poder' },
        { label: 'Isso deve ter sido aterrorizante para os animais da época.', toScreenId: 'resposta_aterrorizante' },
        { label: 'E essas marcas ainda estão aqui, debaixo dos nossos pés?', toScreenId: 'resposta_marcas' }
      ]
    },
    {
      id: 'resposta_inundacao',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Inundação... sim, vocês chamam assim.',
        'Para nós foi uma redefinição. O rio reivindicando seu espaço.',
        'Mostrando que não pode ser ignorado para sempre.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'margens_parede' }
      ]
    },
    {
      id: 'resposta_poder',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Não apenas poder, mas identidade.',
        'O rio estava dizendo: "Lembrem-se de mim! Eu sou maior que seus muros!"',
        'Foi um lembrete necessário, embora caro.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'margens_parede' }
      ]
    },
    {
      id: 'resposta_aterrorizante',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Aterrorizante, mas também... natural.',
        'Diferente dos perigos que vocês criam, este veio da própria terra.',
        'Nós sabemos como lidar com a natureza. Com o concreto... não tanto.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'margens_parede' }
      ]
    },
    {
      id: 'resposta_marcas',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Estão! Cada camada de areia é uma página desse capítulo.',
        'A terra não esquece. Ela arquiva cada evento, cada mudança.',
        'Basta saber ler suas páginas.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'margens_parede' }
      ]
    },
    {
      id: 'margens_parede',
      title: 'As Margens que Viraram Parede',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'NARRADOR',
      texts: [
        'Richard caminha até a beira do rio.',
        'A margem aqui não é de terra fofa, mas de lajotas de concreto e uma parede baixa, uma contenção.'
      ],
      choices: [
        { label: 'Observar', toScreenId: 'richard_concreto' }
      ]
    },
    {
      id: 'richard_concreto',
      title: 'Pedra Dura e Estéril',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Depois da grande cheia, os humanos ficaram com medo. E o medo os fez construir isso. Paredes.',
        'Eles acham que podem colocar o rio em uma caixa.',
        'Antes, a margem era suave, havia barrancos para eu cavar. Agora... é só pedra dura e estéril.'
      ],
      choices: [
        { label: 'Eles fizeram isso para proteger a cidade, eu imagino.', toScreenId: 'resposta_proteger' },
        { label: 'Então você perdeu sua casa por causa disso?', toScreenId: 'resposta_perdeu_casa' },
        { label: 'A margem de um rio é um lugar cheio de vida, não é?', toScreenId: 'resposta_margem_vida' },
        { label: 'O concreto parece tão fora de lugar aqui.', toScreenId: 'resposta_fora_lugar' }
      ]
    },
    {
      id: 'resposta_proteger',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Proteger de um lado, destruir do outro.',
        'Sempre é assim com as soluções humanas, não é?',
        'Ganham segurança, perdem natureza.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'tesouros_nao_alimentam' }
      ]
    },
    {
      id: 'resposta_perdeu_casa',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Perdi os melhores lugares para cavar.',
        'As margens macias onde as minhocas abundavam...',
        'Agora preciso me contentar com as sobras.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'tesouros_nao_alimentam' }
      ]
    },
    {
      id: 'resposta_margem_vida',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Era um berçário de vida! Insetos, plantas, larvas...',
        'Agora é um deserto de concreto.',
        'Onde antes havia ecossistema, agora há apenas... pedra.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'tesouros_nao_alimentam' }
      ]
    },
    {
      id: 'resposta_fora_lugar',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Fora de lugar e fora de sintonia.',
        'A natureza não constrói linhas retas.',
        'Essa rigidez... ela nega a fluidez da vida.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'tesouros_nao_alimentam' }
      ]
    },
    {
      id: 'tesouros_nao_alimentam',
      title: 'Tesouros que Não Alimentam',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'NARRADOR',
      texts: [
        'Enquanto fareja perto da parede de concreto, Richard cava rapidamente e desenterra algo que brilha: uma tampa de garrafa enferrujada.',
        'Ele a cheira e a empurra para o lado com desdém.'
      ],
      choices: [
        { label: 'Observar', toScreenId: 'richard_lixo' }
      ]
    },
    {
      id: 'richard_lixo',
      title: 'Camadas de Lixo',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Veem? Outro tipo de marca que os humanos deixam.',
        'Embaixo, a areia da grande cheia. Mais para cima, cacos de vidro e metais enferrujados.',
        'Eu cavo em busca de vida, de larvas. E encontro o lixo de vocês.',
        'Tesouros que não alimentam.'
      ],
      choices: [
        { label: 'É triste pensar que o lixo que jogamos fora fica enterrado por tanto tempo.', toScreenId: 'resposta_enterrado' },
        { label: 'Você já se machucou com alguma dessas coisas?', toScreenId: 'resposta_machucou' },
        { label: 'O solo se tornou um arquivo da nossa poluição.', toScreenId: 'resposta_arquivo' },
        { label: 'É como se vocês tivessem que garimpar pela comida.', toScreenId: 'resposta_garimpar' }
      ]
    },
    {
      id: 'resposta_enterrado',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Fica para sempre! Gerações de tatús encontrarão essas mesmas coisas.',
        'O que vocês jogam fora em um dia, nós encontramos por anos.',
        'É uma herança pesada.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'monstro_ruge' }
      ]
    },
    {
      id: 'resposta_machucou',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Já cortei as patas em vidros. Já engasguei com plásticos.',
        'Cada escavação é uma roleta russa.',
        'Não sabemos se vamos encontrar comida ou perigo.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'monstro_ruge' }
      ]
    },
    {
      id: 'resposta_arquivo',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Um arquivo triste, mas preciso.',
        'Cada camada conta a história do seu "progresso".',
        'E do nosso declínio.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'monstro_ruge' }
      ]
    },
    {
      id: 'resposta_garimpar',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Garimpar pela sobrevivência... é uma boa forma de colocar.',
        'Procuramos ouro biológico em meio ao lixo industrial.',
        'A vida persistindo no meio do descarte.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'monstro_ruge' }
      ]
    },
    {
      id: 'monstro_ruge',
      title: 'O Monstro que Ruge em Cima',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'NARRADOR',
      texts: [
        'Um caminhão pesado passa pela ponte.',
        'Toda a estrutura de metal range e vibra.',
        'Richard se encolhe, esperando o barulho passar.'
      ],
      choices: [
        { label: 'Observar', toScreenId: 'richard_barulho' }
      ]
    },
    {
      id: 'richard_barulho',
      title: 'Rio de Metal',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Este é o outro rio. O rio de metal e borracha que corre sobre nós. Ele nunca dorme.',
        'Suas luzes fortes confundem os insetos noturnos, que são meu alimento.',
        'A ponte une as cidades de vocês, mas cria um muro mortal para nós.'
      ],
      choices: [
        { label: 'A poluição sonora e luminosa é um problema que nem notamos.', toScreenId: 'resposta_poluicao_sonora' },
        { label: 'O progresso humano muitas vezes ignora a vida selvagem.', toScreenId: 'resposta_progresso' },
        { label: 'Deve ser muito estressante viver com esse barulho constante.', toScreenId: 'resposta_estressante' },
        { label: 'As estradas são como rios perigosos para vocês.', toScreenId: 'resposta_estradas' }
      ]
    },
    {
      id: 'resposta_poluicao_sonora',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Para vocês é fundo, para nós é primeiro plano.',
        'Esse barulho constante... ele nos enlouquece aos poucos.',
        'Não sabemos mais distinguir os sons da natureza.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'ponte_testemunha' }
      ]
    },
    {
      id: 'resposta_progresso',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Ignora ou simplesmente não vê.',
        'Quando constroem, veem apenas o que ganham, não o que destroem.',
        'O progresso deveria incluir, não excluir.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'ponte_testemunha' }
      ]
    },
    {
      id: 'resposta_estressante',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'É como viver dentro de um trovão sem fim.',
        'Nossos sentidos, afiados para a floresta, não foram feitos para isso.',
        'Vivemos em estado constante de alerta.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'ponte_testemunha' }
      ]
    },
    {
      id: 'resposta_estradas',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Rios de morte, sim. Muitos dos nossos tentam atravessar...',
        'E poucos conseguem.',
        'Essas faixas pretas são nossas maiores inimigas.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'ponte_testemunha' }
      ]
    },
    {
      id: 'ponte_testemunha',
      title: 'A Ponte como Testemunha',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'NARRADOR',
      texts: [
        'O tatu-galinha olha para cima, para o emaranhado de vigas de ferro.',
        'Sua irritação parece dar lugar a um respeito relutante.'
      ],
      choices: [
        { label: 'Ouvir', toScreenId: 'richard_ponte' }
      ]
    },
    {
      id: 'richard_ponte',
      title: 'Velha Senhora de Ferro',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Mas sabe... eu respeito esta velha senhora de ferro.',
        'Ela está aqui há muito tempo. Ela viu a "grande cheia".',
        'Ela me dá um teto, mesmo que barulhento.',
        'Ela é uma testemunha silenciosa. O que você acha que ela diria se pudesse falar?'
      ],
      choices: [
        { label: 'Talvez ela pedisse mais cuidado com o rio que passa sob ela.', toScreenId: 'resposta_cuidado_rio' },
        { label: 'Ela contaria histórias de todos que já a atravessaram.', toScreenId: 'resposta_historias' },
        { label: 'Acho que ela diria que viu coisas demais.', toScreenId: 'resposta_viu_demais' },
        { label: 'Talvez ela se sentisse orgulhosa e cansada ao mesmo tempo.', toScreenId: 'resposta_orgulhosa_cansada' }
      ]
    },
    {
      id: 'resposta_cuidado_rio',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Sim... "Cuidem do que passa por baixo, não apenas do que passa por cima."',
        'A ponte entenderia que sua existência depende da saúde do rio.',
        'Tudo está conectado, até mesmo o ferro e a água.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'vida_espacos_sobrantes' }
      ]
    },
    {
      id: 'resposta_historias',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Ah, as histórias que ela guarda...',
        'Amores, guerras, fugas, encontros...',
        'Ela viu a cidade nascer e o rio ser domesticado.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'vida_espacos_sobrantes' }
      ]
    },
    {
      id: 'resposta_viu_demais',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Demais mesmo. Progresso e destruição andando de mãos dadas.',
        'Ela viu o concreto substituir a terra, o barulho substituir o silêncio.',
        'Testemunhou a troca desigual.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'vida_espacos_sobrantes' }
      ]
    },
    {
      id: 'resposta_orgulhosa_cansada',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Orgulhosa por unir, cansada de ser usada para separar.',
        'Ela conecta humanos, mas desconecta a natureza.',
        'Deve ser uma contradição pesada de carregar.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'vida_espacos_sobrantes' }
      ]
    },
    {
      id: 'vida_espacos_sobrantes',
      title: 'A Vida nos Espaços Sobrantes',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'NARRADOR',
      texts: [
        'Richard volta a farejar o chão, movendo-se com eficiência.',
        'Ele se esgueira por entre uma moita de capim que teima em crescer numa fresta do concreto.'
      ],
      choices: [
        { label: 'Observar', toScreenId: 'richard_frestas' }
      ]
    },
    {
      id: 'richard_frestas',
      title: 'Especialistas em Invisibilidade',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Nosso mundo encolheu. Então aprendemos a viver nas sobras. Nas frestas. Embaixo de pontes.',
        'Nos tornamos especialistas em invisibilidade.',
        'Mas viver escondido não é a mesma coisa que viver em paz.',
        'Você acha que os humanos percebem que existimos nesses pequenos bolsões de vida?'
      ],
      choices: [
        { label: 'Acho que a maioria não faz a menor ideia.', toScreenId: 'resposta_nao_ideia' },
        { label: 'Algumas pessoas sim, as que prestam mais atenção.', toScreenId: 'resposta_algumas_pessoas' },
        { label: 'É impressionante como a vida encontra um caminho.', toScreenId: 'resposta_impressionante_vida' },
        { label: 'Talvez se vocês fossem mais vistos, seriam mais respeitados.', toScreenId: 'resposta_mais_vistos' }
      ]
    },
    {
      id: 'resposta_nao_ideia',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Pois deveriam. Esses "espaços sobrando" são nossos últimos refúgios.',
        'Quando esses também desaparecerem, para onde iremos?',
        'A invisibilidade é nossa proteção, mas também nossa maldição.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'sabedoria_pequeno' }
      ]
    },
    {
      id: 'resposta_algumas_pessoas',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Essas pessoas são faróis de esperança.',
        'Elas nos veem não como invasores, mas como sobreviventes.',
        'Elas entendem que a cidade também é nossa casa.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'sabedoria_pequeno' }
      ]
    },
    {
      id: 'resposta_impressionante_vida',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'A vida é teimosa! Ela insiste, persiste, resiste.',
        'Encontra brechas, frestas, mínimas oportunidades...',
        'Nossa existência é um ato de rebeldia biológica.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'sabedoria_pequeno' }
      ]
    },
    {
      id: 'resposta_mais_vistos',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Talvez... ou talvez nos tornássemos apenas mais visíveis para sermos removidos.',
        'A linha entre ser visto e ser ameaçado é muito tênue.',
        'Às vezes, a invisibilidade é nossa única proteção.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'sabedoria_pequeno' }
      ]
    },
    {
      id: 'sabedoria_pequeno',
      title: 'A Sabedoria de Ser Pequeno',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'NARRADOR',
      texts: [
        'Richard para e se senta sobre as patas traseiras.',
        'Ele parece pequeno e vulnerável sob a imensidão da ponte.'
      ],
      choices: [
        { label: 'Ouvir', toScreenId: 'richard_pequeno' }
      ]
    },
    {
      id: 'richard_pequeno',
      title: 'Ser Pequeno',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Eu sou pequeno. Minha vida é cavar, comer insetos, me esconder.',
        'Eu vejo essas mudanças imensas, as paredes, a poluição, o barulho... e me sinto impotente.',
        'O que a ação de um ser tão pequeno como eu pode fazer para mudar algo tão grande?'
      ],
      choices: [
        { label: 'Você mantém o solo saudável. Isso já é uma grande coisa.', toScreenId: 'resposta_solo_saudavel' },
        { label: 'Talvez o seu papel seja ser uma testemunha, um guardião da história.', toScreenId: 'resposta_testemunha' },
        { label: 'Muitos pequenos juntos podem fazer uma grande mudança.', toScreenId: 'resposta_juntos' },
        { label: 'Você sobrevive. E isso, por si só, é um ato de resistência.', toScreenId: 'resposta_sobrevive' }
      ]
    },
    {
      id: 'resposta_solo_saudavel',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'O solo... sim, nós o arejamos, o fertilizamos com nosso trabalho.',
        'Talvez nossa pequena contribuição seja manter a terra viva.',
        'Enquanto houver solo saudável, haverá esperança.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'cheiro_chuva' }
      ]
    },
    {
      id: 'resposta_testemunha',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Um guardião das memórias do subsolo...',
        'Alguém precisa lembrar como as coisas eram.',
        'E contar às próximas gerações o que foi perdido.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'cheiro_chuva' }
      ]
    },
    {
      id: 'resposta_juntos',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Como as formigas! Cada uma pequena, mas juntas movem montanhas.',
        'Talvez nossa força esteja na comunidade, não no indivíduo.',
        'Sozinhos somos vulneráveis, juntos somos resistência.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'cheiro_chuva' }
      ]
    },
    {
      id: 'resposta_sobrevive',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Sobreviver é nossa forma de protesto.',
        'Cada dia que permanecemos aqui é um "não" à destruição.',
        'Existir é resistir.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'cheiro_chuva' }
      ]
    },
    {
      id: 'cheiro_chuva',
      title: 'O Cheiro da Chuva',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'NARRADOR',
      texts: [
        'O vento muda, trazendo o cheiro de chuva e de terra molhada.',
        'Richard levanta o focinho e aspira o ar.'
      ],
      choices: [
        { label: 'Observar', toScreenId: 'richard_chuva' }
      ]
    },
    {
      id: 'richard_chuva',
      title: 'Chuva que Traz Sujeira',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'A chuva está vindo. Para mim, chuva é vida. Traz as minhocas.',
        'Mas aqui, ela também traz preocupação.',
        'Ela lava toda a sujeira da cidade, o óleo dos carros, o lixo das ruas, e joga tudo dentro do rio.',
        'A chuva que deveria ser limpa se torna uma sopa de poluição.'
      ],
      choices: [
        { label: 'É o ciclo da natureza sendo usado para espalhar a sujeira humana.', toScreenId: 'resposta_ciclo' },
        { label: 'Então, para o rio, a chuva se tornou um problema?', toScreenId: 'resposta_problema_chuva' },
        { label: 'Tudo está conectado, não é? A cidade, o rio, o ar...', toScreenId: 'resposta_conectado' },
        { label: 'Existe algo que se possa fazer para a chuva voltar a ser só... chuva?', toScreenId: 'resposta_solucao_chuva' }
      ]
    },
    {
      id: 'resposta_ciclo',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Um ciclo pervertido. A água que deveria purificar, contamina.',
        'A natureza sendo transformada em veículo de destruição.',
        'É uma ironia trágica.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'amanhecer_retirada' }
      ]
    },
    {
      id: 'resposta_problema_chuva',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Um problema criado por vocês, sofrido por nós.',
        'A chuva deveria ser celebração, não ameaça.',
        'Vocês corromperam até mesmo a água do céu.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'amanhecer_retirada' }
      ]
    },
    {
      id: 'resposta_conectado',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Tudo! O que acontece na cidade afeta o rio.',
        'O que vocês jogam no chão, nós bebemos na água.',
        'Não há separação, apenas ilusão de separação.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'amanhecer_retirada' }
      ]
    },
    {
      id: 'resposta_solucao_chuva',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Parar de sujar seria um bom começo.',
        'Se as ruas estivessem limpas, a chuva lavaria apenas poeira.',
        'O problema não é a chuva, é o que ela encontra pelo caminho.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'amanhecer_retirada' }
      ]
    },
    {
      id: 'amanhecer_retirada',
      title: 'O Amanhecer e a Retirada',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'NARRADOR',
      texts: [
        'No horizonte, o céu começa a clarear, anunciando o fim da noite.',
        'Richard caminha de volta para a entrada de sua toca, um buraco discreto na terra escura.'
      ],
      choices: [
        { label: 'Despedir-se', toScreenId: 'richard_despedida' }
      ]
    },
    {
      id: 'richard_despedida',
      title: 'Camadas Mais Gentis',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Minha hora acabou. O sol pertence a vocês. Eu volto para o silêncio da terra.',
        'Obrigado por me ouvir. É raro que alguém pare para escutar a história que o chão tem para contar.',
        'Por favor, quando andar pela cidade, lembre-se que você está caminhando sobre muitas outras histórias.',
        'E ajude a escrever uma camada mais gentil no futuro.'
      ],
      choices: [
        { label: 'Obrigado por compartilhar suas histórias, Richard.', toScreenId: 'final_historias' },
        { label: 'Eu vou prestar mais atenção ao chão sob meus pés.', toScreenId: 'final_atencao' },
        { label: 'Sua perspectiva me ensinou muito.', toScreenId: 'final_perspectiva' },
        { label: 'Tenha um bom descanso. O mundo aqui de cima fica aos nossos cuidados.', toScreenId: 'final_cuidados' }
      ]
    },
    {
      id: 'final_historias',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'As histórias precisam de ouvidos para ganhar vida.',
        'Obrigado por ser esses ouvidos.',
        'Que elas ecoem em suas ações.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_atencao',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'A atenção é a primeira forma de respeito.',
        'Quando vocês prestam atenção, começam a cuidar.',
        'Esse é o primeiro passo.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_perspectiva',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'A perspectiva do subsolo tem muito a ensinar.',
        'Vemos o que está escondido, o que foi esquecido.',
        'Que esse conhecimento guie seus passos.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_cuidados',
      title: 'Richard',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Essas palavras me tranquilizam.',
        'Saber que há cuidado lá em cima...',
        'Isso torna o barulho mais suportável.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_consolidado',
      title: 'O Guardião do Subsolo',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Fico feliz. As histórias só têm valor quando são compartilhadas.',
        'Saber que você prestará atenção me faz descansar mais tranquilo.',
        'Cuidem bem do nosso teto.'
      ],
      result: { 
        title: 'Fase 3 Concluída — O Historiador do Subsolo', 
        summary: 'Você conheceu Richard e aprendeu sobre a vida urbana vista de baixo, os impactos das construções e a resiliência dos pequenos. A jornada continua...', 
        nextPhaseId: '4' 
      }
    }
  ]
},
{
  id: '4',
  title: 'FASE 4 — Represa no Caminho',
  startScreenId: 'intro',
  screens: [
    {
      id: 'intro',
      title: 'Um Vislumbre Dourado',
      backgroundUrl: represa,
      speaker: 'NARRADOR',
      texts: [
        'Você não está na margem, mas flutuando em um silêncio subaquático.',
        'A luz do sol penetra na água esverdeada e profunda, revelando um vasto corpo d\'água, quase sem correnteza.',
        'É uma represa no Rio Iguaçu.',
        'Passando rápido como um relâmpago dourado, um peixe magnífico para a sua frente.',
        'Suas escamas brilham. É um Mandi Pintado.'
      ],
      choices: [
        { label: 'Observar o peixe', toScreenId: 'encontro_yara' }
      ]
    },
    {
      id: 'encontro_yara',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Você é diferente. Não tem escamas nem nadadeiras. Visitante?',
        'Meu nome é Yara. Bem-vindo(a) ao meu lar.',
        'Ou ao que restou dele.',
        'É grande, não é? Espaçoso. Mas espaço nem sempre significa liberdade.'
      ],
      choices: [
        { label: 'Olá, Yara. Você é um peixe impressionante!', toScreenId: 'resposta_impressionante' },
        { label: 'O que quer dizer com "o que restou dele"?', toScreenId: 'resposta_restou' },
        { label: 'Por que não é liberdade? Parece um lugar enorme.', toScreenId: 'resposta_liberdade' },
        { label: 'É um mundo muito silencioso aqui embaixo.', toScreenId: 'resposta_silencioso' }
      ]
    },
    {
      id: 'resposta_impressionante',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Impressionante? *suas escamas brilham modestamente*',
        'Somos os últimos guardiões dourados deste rio.',
        'Mas nossa beleza não nos protege das paredes de concreto.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'parede_impede' }
      ]
    },
    {
      id: 'resposta_restou',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'O rio de verdade... ele fluía! Tinha personalidade, tinha vontade.',
        'Esta represa é só uma sombra, um fantasma do que um dia foi.',
        'É o que sobrou depois que o progresso chegou.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'parede_impede' }
      ]
    },
    {
      id: 'resposta_liberdade',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Liberdade não é sobre espaço, é sobre movimento!',
        'Podemos nadar por quilômetros... mas sempre batemos na mesma parede.',
        'É uma prisão de água, não importa o quão grande seja.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'parede_impede' }
      ]
    },
    {
      id: 'resposta_silencioso',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Silencioso demais. O rio verdadeiro cantava.',
        'A água batendo nas pedras, os peixes se reunindo...',
        'Aqui o silêncio é o som da vida interrompida.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'parede_impede' }
      ]
    },
    {
      id: 'parede_impede',
      title: 'A Parede que Impede o Caminho',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'NARRADOR',
      texts: [
        'Yara nada em círculos, sua energia contida é quase palpável.',
        'Ela então se vira e nada com determinação em uma direção.',
        'Ao longe, uma imensa sombra se agiganta na água turva: a base submersa de uma barragem de concreto.'
      ],
      choices: [
        { label: 'Observar a barragem', toScreenId: 'yara_parede' }
      ]
    },
    {
      id: 'yara_parede',
      title: 'O Ponto Final',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Veja. Aquilo. A grande parede. O ponto final.',
        'O rio continua do outro lado, eu sinto o chamado dele.',
        'Mas não podemos passar. Tentamos saltar, mas é alto demais.',
        'É o maior impacto do seu povo na nossa vida.'
      ],
      choices: [
        { label: 'Deve ser frustrante bater contra uma parede o tempo todo.', toScreenId: 'resposta_frustrante' },
        { label: 'Por que os humanos construíram isso?', toScreenId: 'resposta_porque' },
        { label: 'E o que existe do outro lado?', toScreenId: 'resposta_outro_lado' },
        { label: 'Não há mesmo nenhuma forma de atravessar?', toScreenId: 'resposta_atravessar' }
      ]
    },
    {
      id: 'resposta_frustrante',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Frustrante é pouco. É como ter asas e encontrar um teto de vidro.',
        'Você vê o céu, sente o chamado... mas nunca alcança.',
        'É uma tortura diária.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'danca_interrompida' }
      ]
    },
    {
      id: 'resposta_porque',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Dizem que é para "energia". Para fazer as luzes de vocês brilharem.',
        'Mas que tipo de energia vale o preço de interromper uma vida?',
        'De calar o canto do rio?'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'danca_interrompida' }
      ]
    },
    {
      id: 'resposta_outro_lado',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Do outro lado... está o resto da nossa família.',
        'Os locais de desova ancestrais, as corredeiras onde nascemos...',
        'Tudo o que nos faz quem somos está lá, inalcançável.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'danca_interrompida' }
      ]
    },
    {
      id: 'resposta_atravessar',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Há uma "escada" que construíram. Uma imitação tosca do rio.',
        'Alguns tentam, mas é confusa, artificial...',
        'Não é a mesma coisa que seguir o chamado natural.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'danca_interrompida' }
      ]
    },
    {
      id: 'danca_interrompida',
      title: 'A Dança Interrompida',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'NARRADOR',
      texts: [
        'Yara se afasta da barragem, como se a visão dela fosse dolorosa.',
        'A época de cheia está passando, e algo em seu corpo parece chamar por uma jornada.'
      ],
      choices: [
        { label: 'Ouvir Yara', toScreenId: 'yara_piracema' }
      ]
    },
    {
      id: 'yara_piracema',
      title: 'Piracema',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Todo ano, quando a água esquenta, um chamado ancestral nos move.',
        'É a Piracema. A época de subir o rio, contra a correnteza, para encontrar o lugar perfeito para desovar.',
        'É a nossa dança da vida.',
        'Mas como podemos dançar se o salão foi cortado ao meio?'
      ],
      choices: [
        { label: 'O que acontece se vocês não conseguem subir o rio?', toScreenId: 'resposta_nao_sobem' },
        { label: 'Piracema... é uma palavra bonita para uma jornada tão importante.', toScreenId: 'resposta_palavra_bonita' },
        { label: 'Então a barragem impede a reprodução de vocês?', toScreenId: 'resposta_reproducao' },
        { label: 'Todos os peixes fazem essa viagem?', toScreenId: 'resposta_todos' }
      ]
    },
    {
      id: 'resposta_nao_sobem',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Não desovamos. Ou desovamos em lugares inadequados.',
        'Os filhotes não sobrevivem, ou nascem fracos.',
        'É o fim lento da nossa linhagem.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_preguicosa' }
      ]
    },
    {
      id: 'resposta_palavra_bonita',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Piracema significa "subida do peixe".',
        'É nossa jornada mais sagrada, nosso ritual mais antigo.',
        'E vocês a transformaram em uma parede intransponível.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_preguicosa' }
      ]
    },
    {
      id: 'resposta_reproducao',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Impede, diminui, corrompe.',
        'Alguns de nós ainda tentam, mas é como nadar contra um muro.',
        'A cada ano, somos menos.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_preguicosa' }
      ]
    },
    {
      id: 'resposta_todos',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Os migrantes sim. Nós, os grandes viajantes do rio.',
        'Os peixes menores ficam, mas nós... nós precisamos da jornada.',
        'É em nossa essência, em nosso sangue.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_preguicosa' }
      ]
    },
    {
      id: 'agua_preguicosa',
      title: 'A Água Preguiçosa',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'NARRADOR',
      texts: [
        'Yara se esconde sob um grande tronco submerso.',
        'A água ao redor dela quase não se move.',
        'Partículas de sedimento flutuam lentamente, como poeira em um quarto fechado.'
      ],
      choices: [
        { label: 'Observar', toScreenId: 'yara_agua_parada' }
      ]
    },
    {
      id: 'yara_agua_parada',
      title: 'Água Sem Pulso',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'A água também mudou. O rio de verdade tinha pulso. Corria rápido.',
        'Esta água aqui é... preguiçosa. Parada.',
        'O fundo fica mais lodoso, e algumas das plantas que gostávamos desapareceram.'
      ],
      choices: [
        { label: 'A represa mudou a personalidade do rio.', toScreenId: 'resposta_personalidade' },
        { label: 'Isso afeta a sua respiração?', toScreenId: 'resposta_respiracao' },
        { label: 'E a comida? Também mudou?', toScreenId: 'resposta_comida' },
        { label: 'Então não é só uma barreira, é uma mudança completa no ambiente.', toScreenId: 'resposta_mudanca_completa' }
      ]
    },
    {
      id: 'resposta_personalidade',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Mudou completamente! O rio tinha alma, tinha caráter.',
        'Agora é apenas... água parada.',
        'É como comparar um animal selvagem com um de zoológico.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'canoas_sem_remo' }
      ]
    },
    {
      id: 'resposta_respiracao',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'A água parada tem menos oxigênio.',
        'Às vezes, nas profundezas, falta o ar para respirar.',
        'É outra forma silenciosa de morrer.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'canoas_sem_remo' }
      ]
    },
    {
      id: 'resposta_comida',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'As plantas que comíamos sumiram.',
        'Os pequenos organismos que nos alimentavam... muitos não sobreviveram.',
        'É uma crise alimentar constante.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'canoas_sem_remo' }
      ]
    },
    {
      id: 'resposta_mudanca_completa',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Uma transformação total! Água, comida, reprodução, migração...',
        'Tudo que fazia deste rio nosso lar foi alterado.',
        'Vivemos em um mundo que não foi feito para nós.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'canoas_sem_remo' }
      ]
    },
    {
      id: 'canoas_sem_remo',
      title: 'Canoas sem Remo e Fios que Mordem',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'NARRADOR',
      texts: [
        'Um zumbido grave começa a vibrar pela água. Vem da superfície.',
        'Yara se encolhe instintivamente sob o tronco.',
        'Uma sombra veloz passa sobre eles, um barco a motor.'
      ],
      choices: [
        { label: 'Observar', toScreenId: 'yara_barcos' }
      ]
    },
    {
      id: 'yara_barcos',
      title: 'Armadilhas Invisíveis',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Estão vendo? As canoas sem remo. São barulhentas e rápidas.',
        'E, às vezes, elas deixam presentes para trás: fios brilhantes que ficam presos em galhos, com iscas que enganam os mais jovens.',
        'Fios que mordem de volta.'
      ],
      choices: [
        { label: 'Você quer dizer as linhas de pesca?', toScreenId: 'resposta_linhas' },
        { label: 'O barulho deve ser ensurdecedor aqui embaixo.', toScreenId: 'resposta_barulho' },
        { label: 'É triste que a diversão de alguns seja o perigo de outros.', toScreenId: 'resposta_triste_diversao' },
        { label: 'Vocês aprenderam a desviar desses perigos?', toScreenId: 'resposta_desviar' }
      ]
    },
    {
      id: 'resposta_linhas',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Linhas de pesca, sim. Elas brilham como comida, mas trazem dor.',
        'Muitos dos nossos morrem presos nelas, sufocando.',
        'É uma morte lenta e agonizante.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'familias_divididas' }
      ]
    },
    {
      id: 'resposta_barulho',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'O barulho nos enlouquece! Nossos ouvidos são sensíveis.',
        'Ele confunde nossos sons, atrapalha nossa comunicação...',
        'Vivemos em um caos acústico constante.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'familias_divididas' }
      ]
    },
    {
      id: 'resposta_triste_diversao',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Triste e injusto. Sua diversão, nossa agonia.',
        'Enquanto vocês se divertem, nós lutamos pela sobrevivência.',
        'Será que não poderiam encontrar outras formas de lazer?'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'familias_divididas' }
      ]
    },
    {
      id: 'resposta_desviar',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Aprendemos, mas os jovens ainda caem.',
        'Ensinamos nossos filhotes: "desconfiem do que brilha demais".',
        'Mas a fome às vezes fala mais alto.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'familias_divididas' }
      ]
    },
    {
      id: 'familias_divididas',
      title: 'Famílias Divididas',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'NARRADOR',
      texts: [
        'O barco se afasta e o silêncio pesado retorna.',
        'Yara olha novamente na direção da barragem, mas desta vez sua expressão não é de raiva, mas de uma profunda melancolia.'
      ],
      choices: [
        { label: 'Ouvir', toScreenId: 'yara_familia' }
      ]
    },
    {
      id: 'yara_familia',
      title: 'Cicatriz de Pedra',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Eu nunca conheci meus parentes do baixo Iguaçu. A parede foi construída antes de eu nascer.',
        'Mas eu me pergunto: será que existem Mandis Pintados lá, olhando para esta mesma parede, só que do outro lado?',
        'Somos uma única família, dividida por uma cicatriz de pedra.'
      ],
      choices: [
        { label: 'Nunca tinha pensado nesse aspecto, na separação das populações.', toScreenId: 'resposta_separacao' },
        { label: 'É uma ideia muito solitária.', toScreenId: 'resposta_solitaria' },
        { label: 'Talvez a "escada" que você mencionou ajude nisso.', toScreenId: 'resposta_escada_ajude' },
        { label: 'A natureza não conhece fronteiras, mas os humanos são bons em criá-las.', toScreenId: 'resposta_fronteiras' }
      ]
    },
    {
      id: 'resposta_separacao',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'É o aspecto mais cruel! Dividiram não apenas o rio, mas as famílias.',
        'Primos que nunca se encontrarão, histórias que nunca se cruzarão...',
        'É um genocídio silencioso.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'escada_estranha' }
      ]
    },
    {
      id: 'resposta_solitaria',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'A solidão de saber que há outros como você, mas nunca poder encontrá-los...',
        'É como ser órfão em um orfanato cheio.',
        'Sabemos que existem, mas estamos separados para sempre.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'escada_estranha' }
      ]
    },
    {
      id: 'resposta_escada_ajude',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'A escada ajuda alguns, mas não é a solução.',
        'É como dar uma muleta para quem perdeu as pernas.',
        'Não restaura a dança natural da vida.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'escada_estranha' }
      ]
    },
    {
      id: 'resposta_fronteiras',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Excelentes em criar fronteiras, péssimos em entender conexões.',
        'O rio não conhece propriedade, não conhece limites...',
        'Ele apenas flui, como a vida deveria fazer.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'escada_estranha' }
      ]
    },
    {
      id: 'escada_estranha',
      title: 'A Escada Estranha',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'NARRADOR',
      texts: [
        'Com um movimento de cauda, Yara leva você para perto da base da barragem.',
        'Ali, uma estrutura curiosa está acoplada ao paredão: uma série de pequenos tanques em zigue-zague, com água correndo por eles.',
        'É uma escada de peixes.'
      ],
      choices: [
        { label: 'Observar a escada', toScreenId: 'yara_escada' }
      ]
    },
    {
      id: 'yara_escada',
      title: 'Cachoeira ao Contrário',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'É isto. A "escada". A cachoeira ao contrário que eles construíram.',
        'A água flui, nos atrai. Alguns peixes, os mais desesperados, tentam subir.',
        'É um caminho confuso, apertado, cheio de cantos.',
        'Não é como saltar uma cachoeira de verdade, sentindo a força do rio.'
      ],
      choices: [
        { label: 'Pelo menos é uma tentativa de ajudar.', toScreenId: 'resposta_tentativa' },
        { label: 'Funciona? Muitos peixes conseguem passar?', toScreenId: 'resposta_funciona' },
        { label: 'Parece muito artificial em comparação com um rio.', toScreenId: 'resposta_artificial' },
        { label: 'Por que você não a usa?', toScreenId: 'resposta_nao_usa' }
      ]
    },
    {
      id: 'resposta_tentativa',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Uma tentativa, sim. Mas é como pedir desculpas depois de quebrar algo.',
        'Não restaura o que foi perdido.',
        'O gesto é bonito, mas o dano permanece.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'luz_sombra' }
      ]
    },
    {
      id: 'resposta_funciona',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Funciona para alguns, para os mais fortes, mais determinados.',
        'Mas muitos se perdem, se machucam, desistem...',
        'É uma solução imperfeita para um problema desnecessário.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'luz_sombra' }
      ]
    },
    {
      id: 'resposta_artificial',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Artificial como tudo que vocês constroem para "consertar" a natureza.',
        'Nada substitui o fluxo natural, o chamado ancestral.',
        'É uma imitação pobre da realidade.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'luz_sombra' }
      ]
    },
    {
      id: 'resposta_nao_usa',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Porque ela nega quem somos! Nós somos criaturas do rio, não de tanques.',
        'Saltar corredeiras está em nosso DNA, não subir degraus de concreto.',
        'Prefiro a dignidade da resistência à humilhação da adaptação forçada.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'luz_sombra' }
      ]
    },
    {
      id: 'luz_sombra',
      title: 'A Luz de Vocês, a Nossa Sombra',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'NARRADOR',
      texts: [
        'Yara se afasta da escada e para no meio da imensa columna de água da represa.',
        'Olhando para cima, para a superfície distante onde brilha o sol.'
      ],
      choices: [
        { label: 'Ouvir', toScreenId: 'yara_luz' }
      ]
    },
    {
      id: 'yara_luz',
      title: 'O Preço da Energia',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Tudo isso... toda essa mudança... para que as luzes da cidade de vocês se acendem à noite.',
        'Eu entendo que vocês precisam de energia.',
        'Mas essa "luz" de vocês vale a sombra que ela lança sobre o rio?',
        'Vale o silêncio da nossa dança?'
      ],
      choices: [
        { label: 'É uma pergunta difícil. A maioria das pessoas nem pensa nesse dilema.', toScreenId: 'resposta_dilema' },
        { label: 'Acho que precisamos encontrar outras formas de gerar energia.', toScreenId: 'resposta_outras_formas' },
        { label: 'Visto daqui de baixo, o preço parece alto demais.', toScreenId: 'resposta_preco_alto' },
        { label: 'O que você gostaria que os humanos entendessem?', toScreenId: 'resposta_entendessem' }
      ]
    },
    {
      id: 'resposta_dilema',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Pois deveriam pensar! Cada luz acesa tem um custo invisível.',
        'Nosso sofrimento não aparece na conta de energia.',
        'Talvez se vissem o preço real, pensariam duas vezes.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'cardume_esperanca' }
      ]
    },
    {
      id: 'resposta_outras_formas',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Outras formas que não silenciem rios, que não interrompam vidas.',
        'O sol brilha para todos, o vento sopra para todos...',
        'Por que escolher a energia que destrói?'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'cardume_esperanca' }
      ]
    },
    {
      id: 'resposta_preco_alto',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Alto demais! O preço de um rio, de milhares de vidas...',
        'Nenhuma luz vale esse custo.',
        'É uma troca injusta, desequilibrada.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'cardume_esperanca' }
      ]
    },
    {
      id: 'resposta_entendessem',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Que não há "outro lado". Que o rio que morre é o mesmo que lhes dá água.',
        'Que nossa dança interrompida é o prelúdio do seu próprio fim.',
        'Que salvar o rio é salvar a si mesmos.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'cardume_esperanca' }
      ]
    },
    {
      id: 'cardume_esperanca',
      title: 'Um Cardume de Esperança',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'NARRADOR',
      texts: [
        'Enquanto Yara fala, um pequeno cardume de lambaris passa por eles, movendo-se como um único corpo prateado.',
        'Yara os observa, e seu semblante endurecido se suaviza por um instante.'
      ],
      choices: [
        { label: 'Observar', toScreenId: 'yara_esperanca' }
      ]
    },
    {
      id: 'yara_esperanca',
      title: 'A Vida Insiste',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Mas olhe. A vida insiste.',
        'Eles ainda estão aqui. Nós ainda estamos aqui.',
        'Nos adaptamos. Buscamos novas formas de sobreviver.',
        'A cada novo filhote que nasce deste lado da parede, a vida grita que não foi derrotada.',
        'Somos a resistência do rio.'
      ],
      choices: [
        { label: 'A natureza é incrivelmente resiliente.', toScreenId: 'resposta_resiliente' },
        { label: 'Essa é uma visão muito poderosa, Yara.', toScreenId: 'resposta_poderosa' },
        { label: 'Essa resistência é a maior esperança que vocês têm.', toScreenId: 'resposta_resistencia' },
        { label: 'O que lhes dá forças para continuar?', toScreenId: 'resposta_forcas' }
      ]
    },
    {
      id: 'resposta_resiliente',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Resiliente e teimosa! A vida não desiste fácil.',
        'Encontra brechas, oportunidades, mínimas chances...',
        'E persiste, contra todas as probabilidades.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'mergulho_final' }
      ]
    },
    {
      id: 'resposta_poderosa',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Poderosa porque é verdadeira.',
        'Enquanto houver um de nós, o rio não estará morto.',
        'Nossa existência é a memória viva do que um dia foi.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'mergulho_final' }
      ]
    },
    {
      id: 'resposta_resistencia',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Nossa única esperança! Enquanto pudermos resistir, há chance.',
        'Chance de que um dia as paredes caiam, que os rios voltem a correr...',
        'A resistência mantém viva essa possibilidade.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'mergulho_final' }
      ]
    },
    {
      id: 'resposta_forcas',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'O chamado ancestral. A memória do rio correndo livre.',
        'E a esperança de que um dia humanos como você ouçam.',
        'Que entendam que progresso não precisa significar destruição.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'mergulho_final' }
      ]
    },
    {
      id: 'mergulho_final',
      title: 'O Mergulho Final',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'NARRADOR',
      texts: [
        'Yara faz um último círculo ao seu redor.',
        'A conversa chegou ao fim.',
        'Ela precisa voltar à sua vida, à sua luta diária pela sobrevivência neste novo mundo.'
      ],
      choices: [
        { label: 'Despedir-se', toScreenId: 'yara_despedida' }
      ]
    },
    {
      id: 'yara_despedida',
      title: 'Rio com Saudades',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Agora eu preciso ir. A caça me espera.',
        'Obrigada por ouvir. A maioria dos humanos só vê a superfície da água.',
        'Você olhou para o fundo.',
        'Leve essa visão com você.',
        'Lembre-se que debaixo de cada lago de represa, existe um rio com saudades de correr.'
      ],
      choices: [
        { label: 'Eu não vou esquecer, Yara. Prometo.', toScreenId: 'final_prometo' },
        { label: 'Sua história me deu muito o que pensar sobre o progresso.', toScreenId: 'final_progresso' },
        { label: 'Boa sorte na sua jornada. Continue lutando.', toScreenId: 'final_luta' },
        { label: 'Seja a voz do rio. Eu ajudarei a ecoá-la.', toScreenId: 'final_voz' }
      ]
    },
    {
      id: 'final_prometo',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'A memória é nossa maior aliada.',
        'Enquanto formos lembrados, não estaremos completamente perdidos.',
        'Obrigada pela promessa.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_progresso',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Pensar é o primeiro passo para mudar.',
        'Que sua reflexão se transforme em ação.',
        'O progresso pode ser diferente.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_luta',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Lutaremos até o último de nós.',
        'Enquanto houver um Mandi Pintado, o rio terá um defensor.',
        'Obrigada pelo apoio.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_voz',
      title: 'Yara',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Que nossa voz ecoe através da sua.',
        'Que o canto do rio seja ouvido em sua terra.',
        'Juntos, podemos fazer a diferença.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_consolidado',
      title: 'A Luta Continua',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Obrigada. A memória é o primeiro passo.',
        'O verdadeiro progresso não deveria deixar ninguém para trás.',
        'Um Mandi Pintado nunca para de lutar.',
        'Nade bem na sua própria correnteza. Adeus.'
      ],
      result: { 
        title: 'Fase 4 Concluída — O Rio Interrompido', 
        summary: 'Você conheceu Yara e aprendeu sobre o impacto das barragens nos rios e na vida aquática. A jornada pelo Iguaçu continua...', 
        nextPhaseId: '5' 
      }
    }
  ]
},
{
  id: '5',
  title: 'FASE 5 — Cataratas do Iguaçu',
  startScreenId: 'intro',
  screens: [
    {
      id: 'intro',
      title: 'O Observador na Rocha',
      backgroundUrl: cataratas,
      speaker: 'NARRADOR',
      texts: [
        'O ar vibra. O chão treme suavemente.',
        'O som é uma presença física: o rugido das Cataratas do Iguaçu.',
        'Em uma poça calma, formada pela névoa, um cágado de casco enrugado e olhos antigos observa você.'
      ],
      choices: [
        { label: 'Aproximar-se do cágado', toScreenId: 'encontro_goioxim' }
      ]
    },
    {
      id: 'encontro_goioxim',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Seja bem-vindo(a) ao Grande Trovão D\'Água.',
        'Meu nome é Goioxim.',
        'Há muitas estações eu observo os dois grandes rios que passam por aqui: o rio de água, que sempre esteve, e o rio de gente, que nunca para de chegar.',
        'Ambos são poderosos à sua maneira.'
      ],
      choices: [
        { label: 'Olá, Goioxim. Que lugar inacreditável.', toScreenId: 'resposta_inacreditavel' },
        { label: '"Rio de gente"? É uma forma interessante de descrever os turistas.', toScreenId: 'resposta_rio_gente' },
        { label: 'Você não se cansa de todo esse barulho?', toScreenId: 'resposta_barulho' },
        { label: 'Você deve ser muito velho para ter visto tantas estações.', toScreenId: 'resposta_velho' }
      ]
    },
    {
      id: 'resposta_inacreditavel',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Inacreditável e inesquecível. O poder da água em sua forma mais pura.',
        'Este lugar lembra a todos que a natureza ainda é a força maior.',
        'Mesmo com todo seu concreto e metal.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'oferendas' }
      ]
    },
    {
      id: 'resposta_rio_gente',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Um rio constante, fluindo de todas as direções.',
        'Assim como a água, vocês vêm em ondas, em correntes...',
        'Mas diferente da água, vocês nem sempre deixam o lugar como encontraram.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'oferendas' }
      ]
    },
    {
      id: 'resposta_barulho',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'O barulho das quedas é música. O barulho dos humanos... bem, esse cansa.',
        'Mas aprendi a encontrar paz mesmo no caos.',
        'A quietude está dentro de nós, não fora.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'oferendas' }
      ]
    },
    {
      id: 'resposta_velho',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Velho o suficiente para ver as mudanças, jovem o suficiente para ainda ter esperança.',
        'Vi esta floresta crescer, vi o rio mudar seu curso...',
        'A idade traz paciência, não apenas rugas.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'oferendas' }
      ]
    },
    {
      id: 'oferendas',
      title: 'As Oferendas que o Rio Não Aceita',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'NARRADOR',
      texts: [
        'Goioxim desliza suavemente da pedra para a água.',
        'No fundo da poça, algo colorido e brilhante chama a atenção.',
        'É um invólucro plástico de algum alimento.'
      ],
      choices: [
        { label: 'Observar', toScreenId: 'goioxim_lixo' }
      ]
    },
    {
      id: 'goioxim_lixo',
      title: 'Oferendas Estranhas',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'O rio de água, quando leva uma folha, a transforma em alimento.',
        'Tudo o que ele carrega, ele reaproveita.',
        'Mas o rio de gente deixa oferendas estranhas... cascas coloridas que não apodrecem, frutas de vidro que quebram e fios que prendem.',
        'O rio não sabe o que fazer com elas.'
      ],
      choices: [
        { label: 'Você quer dizer o lixo que as pessoas deixam para trás.', toScreenId: 'resposta_lixo' },
        { label: 'É incrível como na natureza nada é desperdiçado.', toScreenId: 'resposta_nada_desperdicado' },
        { label: 'Deve ser triste ver um lugar tão bonito ser poluído assim.', toScreenId: 'resposta_triste_poluicao' },
        { label: 'Qual foi a coisa mais estranha que você já viu aqui?', toScreenId: 'resposta_mais_estranha' }
      ]
    },
    {
      id: 'resposta_lixo',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Lixo... sim, essa é a palavra de vocês.',
        'Para nós é mais que lixo - são sinais de desrespeito.',
        'Cada embalagem é um "não me importo" deixado para trás.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_cansada' }
      ]
    },
    {
      id: 'resposta_nada_desperdicado',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Na natureza, tudo é ciclo. Morte vira vida, folha vira nutriente.',
        'Seu lixo quebra esse ciclo. Fica preso, não se transforma.',
        'É como uma nota errada em uma sinfonia perfeita.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_cansada' }
      ]
    },
    {
      id: 'resposta_triste_poluicao',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Triste e desnecessária. Tanta beleza... e ainda assim não é suficiente.',
        'As pessoas vêm ver a grandeza da natureza e deixam sua pequenez para trás.',
        'É uma contradição que me entristece.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_cansada' }
      ]
    },
    {
      id: 'resposta_mais_estranha',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Ah, já vi de tudo... sapatos que andam sozinhos na correnteza,',
        'Brinquedos que nunca brincaram, máquinas que capturam momentos...',
        'Mas o mais estranho são as coisas que deveriam conter comida, mas só contêm ar.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_cansada' }
      ]
    },
    {
      id: 'agua_cansada',
      title: 'A Água Cansada',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'NARRADOR',
      texts: [
        'O cágado levanta o pescoço comprido para fora d\'água, parecendo provar o ar e a névoa.',
        'Ele parece sentir algo na própria água que você não consegue ver.'
      ],
      choices: [
        { label: 'Ouvir', toScreenId: 'goioxim_memoria' }
      ]
    },
    {
      id: 'goioxim_memoria',
      title: 'Água com Memória',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Eu vivo no fim do caminho. Toda a jornada do Rio Iguaçu termina aqui.',
        'E esta água... ela chega com memória.',
        'Às vezes, ela chega com o gosto da poluição da cidade da capivara Mia.',
        'Às vezes, chega lenta, com a lembrança da parede de pedra que parou o peixe Yara.',
        'A água me conta as histórias de todo o seu percurso.'
      ],
      choices: [
        { label: 'Então tudo o que acontece rio acima, afeta vocês aqui?', toScreenId: 'resposta_tudo_afeta' },
        { label: 'É poético pensar que a água carrega memórias.', toScreenId: 'resposta_poetico' },
        { label: 'Como você consegue sentir essas diferenças?', toScreenId: 'resposta_como_sente' },
        { label: 'Isso faz deste lugar um grande termômetro da saúde do rio.', toScreenId: 'resposta_termometro' }
      ]
    },
    {
      id: 'resposta_tudo_afeta',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Tudo! O rio é uma veia única, do coração até as pontas dos dedos.',
        'O que entra na nascente chega aqui. O que é jogado no caminho também.',
        'Não há "lá" e "aqui" - há apenas o rio.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'verdadeira_lembranca' }
      ]
    },
    {
      id: 'resposta_poetico',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Poético e verdadeiro. A água é o grande arquivo vivo.',
        'Ela registra cada encontro, cada transformação...',
        'Basta saber ler suas páginas líquidas.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'verdadeira_lembranca' }
      ]
    },
    {
      id: 'resposta_como_sente',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Com o corpo inteiro! Minha pele sente a textura,',
        'Meu paladar detecta os sabores, meus pulmões sentem o oxigênio...',
        'Quando se vive na água, aprende-se sua linguagem.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'verdadeira_lembranca' }
      ]
    },
    {
      id: 'resposta_termometro',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Exatamente! Nós somos o termômetro, o diagnóstico final.',
        'Se estamos bem, o rio está bem. Se sofremos, todo o rio sofre.',
        'As Cataratas são o espelho da saúde de toda a bacia.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'verdadeira_lembranca' }
      ]
    },
    {
      id: 'verdadeira_lembranca',
      title: 'A Verdadeira Lembrança',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'NARRADOR',
      texts: [
        'Você observa os outros visitantes ao longe, nas passarelas.',
        'Todos estão com celulares e câmeras, tentando capturar a imagem perfeita.'
      ],
      choices: [
        { label: 'Observar', toScreenId: 'goioxim_lembranca' }
      ]
    },
    {
      id: 'goioxim_lembranca',
      title: 'Plantar no Coração',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'O rio de gente tem uma obsessão em capturar as coisas. Eles chamam de "lembrança".',
        'Mas a verdadeira lembrança não é algo que se põe no bolso. É algo que se planta no coração.'
      ],
      choices: [
        { label: 'A melhor lembrança é a experiência de estar aqui.', toScreenId: 'resposta_experiencia' },
        { label: 'Mas as fotos nos ajudam a lembrar e a mostrar essa beleza para outros.', toScreenId: 'resposta_fotos' },
        { label: 'É verdade, tirar algo de um lugar é como roubar um pedaço dele.', toScreenId: 'resposta_roubar' },
        { label: 'O que você acha que as pessoas deveriam levar daqui?', toScreenId: 'resposta_deveriam_levar' }
      ]
    },
    {
      id: 'resposta_experiencia',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'A experiência! O rugido na pele, a névoa no rosto...',
        'Isso fica gravado na alma, não em pixels.',
        'A memória verdadeira é feita de sensações, não de imagens.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'passo_lento' }
      ]
    },
    {
      id: 'resposta_fotos',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Mostrar é bom, mas sentir é melhor.',
        'Uma foto pode inspirar, mas a experiência pode transformar.',
        'Que tal inspirar através da transformação, não apenas da imagem?'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'passo_lento' }
      ]
    },
    {
      id: 'resposta_roubar',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Roubar sem dar nada em troca...',
        'Na natureza, toda troca é equilibrada.',
        'Talvez em vez de tirar, vocês pudessem deixar algo bom?'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'passo_lento' }
      ]
    },
    {
      id: 'resposta_deveriam_levar',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Deveriam levar a responsabilidade.',
        'A lembrança de que lugares assim precisam de cuidado.',
        'E a vontade de proteger essa beleza para os que virão depois.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'passo_lento' }
      ]
    },
    {
      id: 'passo_lento',
      title: 'O Passo Lento da Sabedoria',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'NARRADOR',
      texts: [
        'Goioxim se move lentamente pela poça. Cada movimento é deliberado, sem pressa.',
        'Ele personifica a paciência, em contraste com a pressa dos visitantes.'
      ],
      choices: [
        { label: 'Observar', toScreenId: 'goioxim_devagar' }
      ]
    },
    {
      id: 'goioxim_devagar',
      title: 'Ritmo da Sustentabilidade',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Eu me movo devagar. A vida me ensinou que não se perde nada por ir devagar. Ganha-se tudo.',
        'O rio de gente corre. Eles olham, mas não veem. Ouvem, mas não escutam.',
        'Sustentabilidade também é uma questão de ritmo. É preciso desacelerar para entender.'
      ],
      choices: [
        { label: 'Vivemos em um mundo muito acelerado. É difícil ir devagar.', toScreenId: 'resposta_acelerado' },
        { label: 'O que você vê, que nós não vemos em nossa pressa?', toScreenId: 'resposta_o_que_ve' },
        { label: 'A tartaruga vence a lebre, como na fábula.', toScreenId: 'resposta_fabula' },
        { label: 'É uma boa lição. A natureza tem seu próprio tempo.', toScreenId: 'resposta_proprio_tempo' }
      ]
    },
    {
      id: 'resposta_acelerado',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Difícil, mas necessário. A pressa é inimiga da profundidade.',
        'Correndo, vocês veem apenas a superfície.',
        'Andando devagar, descobrem os segredos das profundezas.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'caminho_mundo' }
      ]
    },
    {
      id: 'resposta_o_que_ve',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Vejo os detalhes. A dança dos insetos na água,',
        'A maneira como a luz muda através das gotas...',
        'A pressa faz vocês perderem a poesia dos pequenos momentos.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'caminho_mundo' }
      ]
    },
    {
      id: 'resposta_fabula',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'A fábula ensina bem: consistência vence velocidade.',
        'Não se trata de chegar primeiro, mas de chegar completo.',
        'E de deixar um rastro que não destrói o caminho.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'caminho_mundo' }
      ]
    },
    {
      id: 'resposta_proprio_tempo',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Tem seu próprio ritmo, sua própria sabedoria.',
        'A floresta não tem pressa, mas sempre chega onde precisa.',
        'Talvez vocês pudessem aprender com essa paciência.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'caminho_mundo' }
      ]
    },
    {
      id: 'caminho_mundo',
      title: 'O Caminho e o Mundo',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'NARRADOR',
      texts: [
        'Goioxim olha na direção de uma das passarelas metálicas que serpenteiam sobre a água.',
        'Elas permitem que as pessoas cheguem perto das quedas em segurança.'
      ],
      choices: [
        { label: 'Ouvir', toScreenId: 'goioxim_passarela' }
      ]
    },
    {
      id: 'goioxim_passarela',
      title: 'O Acordo',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Essas trilhas de metal são um acordo. Elas protegem vocês do rio, e protegem o rio de vocês.',
        'Mas elas também criam uma separação. O humano anda por cima, a natureza vive por baixo.',
        'O acordo só funciona se o humano se lembrar que a passarela não é o mundo todo.'
      ],
      choices: [
        { label: 'As passarelas são necessárias para organizar a visitação.', toScreenId: 'resposta_necessarias' },
        { label: 'É verdade, ficamos confinados ao caminho.', toScreenId: 'resposta_confinados' },
        { label: 'Elas são como veias em um corpo maior.', toScreenId: 'resposta_veias' },
        { label: 'O que acontece quando as pessoas saem do caminho?', toScreenId: 'resposta_saem_caminho' }
      ]
    },
    {
      id: 'resposta_necessarias',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Necessárias, sim. Mas não suficientes.',
        'Elas organizam os pés, mas e o coração?',
        'A verdadeira proteção vem do respeito, não das grades.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pequenos_gigantes' }
      ]
    },
    {
      id: 'resposta_confinados',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Confinados pela segurança, mas também pela falta de imaginação.',
        'Há outras formas de ver, de sentir...',
        'Às vezes é preciso parar e apenas... existir no espaço.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pequenos_gigantes' }
      ]
    },
    {
      id: 'resposta_veias',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Veias que levam a vida, mas também podem levar a morte.',
        'Tudo depende de como são usadas.',
        'Que essas veias levem nutrientes, não venenos.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pequenos_gigantes' }
      ]
    },
    {
      id: 'resposta_saem_caminho',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Quando saem do caminho... às vezes descobrem maravilhas.',
        'Outras vezes, causam danos.',
        'O equilíbrio está em saber quando explorar e quando preservar.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pequenos_gigantes' }
      ]
    },
    {
      id: 'pequenos_gigantes',
      title: 'Os Pequenos Gigantes',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'NARRADOR',
      texts: [
        'Um bando de andorinhões-de-cascata, pássaros que fazem ninhos atrás das cortinas d\'água, mergulha em alta velocidade.'
      ],
      choices: [
        { label: 'Observar', toScreenId: 'goioxim_andorinhas' }
      ]
    },
    {
      id: 'goioxim_andorinhas',
      title: 'Cada Ser Tem Seu Papel',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Olhe para eles. Pequenos, mas têm a coragem de viver no coração do Trovão.',
        'Eles nos ensinam que não é preciso ser grande para ser forte.',
        'Cada ser tem seu papel. O andorinhão, o quati... e vocês, os humanos.',
        'O que vocês acham que é o papel de vocês neste ciclo?'
      ],
      choices: [
        { label: 'Acho que nosso papel deveria ser o de guardiões.', toScreenId: 'resposta_guardioes' },
        { label: 'Com o poder que temos, vem uma grande responsabilidade.', toScreenId: 'resposta_responsabilidade' },
        { label: 'No momento, parece que nosso papel é o de desequilibrar as coisas.', toScreenId: 'resposta_desequilibrar' },
        { label: 'Eu não tenho certeza. Talvez seja aprender a pertencer.', toScreenId: 'resposta_pertencer' }
      ]
    },
    {
      id: 'resposta_guardioes',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Guardar é mais que proteger - é entender.',
        'É conhecer os ritmos, as necessidades, os equilíbrios...',
        'Um bom guardião sabe quando intervir e quando observar.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'licao_agua' }
      ]
    },
    {
      id: 'resposta_responsabilidade',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Grande responsabilidade, sim. O poder de vocês é imenso.',
        'Podem destruir ou podem curar.',
        'A escolha de cada dia define que caminho seguirão.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'licao_agua' }
      ]
    },
    {
      id: 'resposta_desequilibrar',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Desequilibrar é fácil. Reequilibrar é a verdadeira sabedoria.',
        'Reconhecer os erros é o primeiro passo.',
        'O segundo é agir diferente.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'licao_agua' }
      ]
    },
    {
      id: 'resposta_pertencer',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Aprender a pertencer... essa é a lição mais profunda.',
        'Não como donos, mas como parte.',
        'Quando sentirem que são natureza, agirão como natureza age: em equilíbrio.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'licao_agua' }
      ]
    },
    {
      id: 'licao_agua',
      title: 'A Lição da Água',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'NARRADOR',
      texts: [
        'A água que espirra de uma pequena queda lava o casco de Goioxim, que fecha os olhos por um momento.'
      ],
      choices: [
        { label: 'Observar', toScreenId: 'goioxim_agua' }
      ]
    },
    {
      id: 'goioxim_agua',
      title: 'Ser Como a Água',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'A água não luta. Ela contorna. Ela persiste.',
        'Ela é suave, mas pode esculpir o cânion mais profundo.',
        'Sustentabilidade é como a água. Não é sobre a força bruta, mas sobre a persistência inteligente.',
        'Onde em sua vida você pode ser mais como a água?'
      ],
      choices: [
        { label: 'Consumindo menos, deixando um rastro mais suave.', toScreenId: 'resposta_rastro_suave' },
        { label: 'Adaptando minhas necessidades ao que o planeta pode oferecer.', toScreenId: 'resposta_adaptar' },
        { label: 'Sendo mais paciente e persistente nas minhas ações.', toScreenId: 'resposta_paciente' },
        { label: 'É uma pergunta profunda. Preciso pensar sobre isso.', toScreenId: 'resposta_pensar' }
      ]
    },
    {
      id: 'resposta_rastro_suave',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Um rastro suave... como a água que passa sem perturbar as pedras.',
        'Viver de forma que sua passagem não destrua, mas enriqueça.',
        'Essa é a verdadeira leveza.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'vento_leva' }
      ]
    },
    {
      id: 'resposta_adaptar',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Adaptar-se às possibilidades, não forçar os limites.',
        'A água se molda ao leito do rio, não o contrário.',
        'Viver dentro dos meios da Terra, não além deles.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'vento_leva' }
      ]
    },
    {
      id: 'resposta_paciente',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Paciência e persistência - as virtudes da água.',
        'Ela não desiste, apenas encontra novos caminhos.',
        'Mudanças reais levam tempo, mas sempre avançam.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'vento_leva' }
      ]
    },
    {
      id: 'resposta_pensar',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Pensar já é o primeiro passo.',
        'A reflexão é o início de toda transformação.',
        'Que sua busca por respostas o leve a ações significativas.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'vento_leva' }
      ]
    },
    {
      id: 'vento_leva',
      title: 'O Vento que Leva e Traz',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'NARRADOR',
      texts: [
        'Uma brisa mais forte sopra através das quedas, carregando a névoa densa sobre a floresta.',
        'É um vento que parece carregar as vozes do rio.'
      ],
      choices: [
        { label: 'Ouvir', toScreenId: 'goioxim_vento' }
      ]
    },
    {
      id: 'goioxim_vento',
      title: 'Mensagem no Vento',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'O vento que nos molha com a névoa é o mesmo que leva as sementes e o som do Trovão.',
        'Tudo está conectado.',
        'O que você faz aqui, hoje, o vento pode levar como uma mensagem.',
        'Que mensagem você gostaria que ele levasse?'
      ],
      choices: [
        { label: 'Uma mensagem de esperança e de mudança.', toScreenId: 'resposta_esperanca' },
        { label: 'Que ainda há tempo de consertar nossos erros.', toScreenId: 'resposta_tempo' },
        { label: 'Que a beleza deste lugar vale qualquer esforço para protegê-lo.', toScreenId: 'resposta_beleza' },
        { label: 'Que um humano esteve aqui e aprendeu a ouvir.', toScreenId: 'resposta_aprendeu_ouvir' }
      ]
    },
    {
      id: 'resposta_esperanca',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Esperança é a semente de toda mudança.',
        'Que essa mensagem encontre terra fértil em outros corações.',
        'E floresça em ações concretas.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'proxima_gota' }
      ]
    },
    {
      id: 'resposta_tempo',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Há tempo, sim. Mas não há tempo a perder.',
        'Que essa urgência inspire ação, não desespero.',
        'Cada dia conta, cada escolha importa.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'proxima_gota' }
      ]
    },
    {
      id: 'resposta_beleza',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'A beleza que inspira proteção...',
        'Que essa mensagem lembre a todos que algumas coisas',
        'são grandes demais, preciosas demais para serem perdidas.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'proxima_gota' }
      ]
    },
    {
      id: 'resposta_aprendeu_ouvir',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Aprender a ouvir... essa é a lição mais rara.',
        'Que sua escuta inspire outros a também parar e ouvir.',
        'As respostas estão sempre disponíveis, para quem sabe escutar.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'proxima_gota' }
      ]
    },
    {
      id: 'proxima_gota',
      title: 'A Próxima Gota',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'NARRADOR',
      texts: [
        'O sol se põe, pintando a névoa com tons de laranja.',
        'Goioxim se prepara para deslizar de sua rocha para o repouso noturno.'
      ],
      choices: [
        { label: 'Despedir-se', toScreenId: 'goioxim_despedida' }
      ]
    },
    {
      id: 'goioxim_despedida',
      title: 'Promessa para a Próxima Gota',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'O rio de gente vai embora. O rio de água continua.',
        'A sua jornada continua para além destas quedas.',
        'Minha última pergunta para você é: que promessa você faz para a próxima gota d\'água?'
      ],
      choices: [
        { label: 'Prometo pensar nela antes de desperdiçar água.', toScreenId: 'final_desperdicar' },
        { label: 'Prometo ajudar a manter seu caminho limpo.', toScreenId: 'final_limpo' },
        { label: 'Prometo me lembrar da jornada dela e da importância de cada parte do rio.', toScreenId: 'final_jornada' },
        { label: 'Prometo contar sua história.', toScreenId: 'final_historia' }
      ]
    },
    {
      id: 'final_desperdicar',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Pensar antes de agir - essa é a raiz da sabedoria.',
        'Cada gota poupada é uma vitória para o rio.',
        'Sua consciência é a maior proteção que a água pode ter.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_limpo',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Um caminho limpo para a água... e para a vida.',
        'Sua ação direta faz toda a diferença.',
        'Cada pedaço de lixo recolhido é um suspiro de alívio para o rio.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_jornada',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Lembrar a jornada é honrar a água.',
        'Cada parte do rio tem sua importância, sua magia.',
        'Sua memória mantém o rio vivo, mesmo longe dele.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_historia',
      title: 'Goioxim',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Contar nossa história é dar voz ao rio.',
        'Através de suas palavras, nossa existência ganha significado.',
        'Que nossa história inspire cuidado, respeito e amor.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'final_consolidado' }
      ]
    },
    {
      id: 'final_consolidado',
      title: 'O Fim da Jornada',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Essa é a grande sabedoria. Da nascente à foz, tudo é um só.',
        'Ao cuidar de qualquer parte, você cuida do todo.',
        'Vá em paz, e que seu caminho seja sustentável.'
      ],
      result: { 
        title: 'Jornada Completa — O Ciclo do Trovão D\'Água', 
        summary: 'Você completou toda a jornada pelo Rio Iguaçu, da nascente às Cataratas. Conheceu cinco guardiões que compartilharam suas histórias e sabedoria. Agora, a responsabilidade está em suas mãos. Cada escolha importa. Cada gota conta.', 
        nextPhaseId: undefined 
      }
    }
  ]
}
  ]
}