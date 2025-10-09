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
      title: 'Um Lugar de Paz',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Pacífico, sim... Na maior parte do tempo.',
        'É o meu lugar favorito no mundo.',
        'Sinto que a água leva todas as preocupações embora.',
        'Ou quase todas...'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'sombra_na_agua' }
      ]
    },
    {
      id: 'resposta_origem',
      title: 'O Começo de Tudo',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Pois é! Todos falam das Cataratas, mas ninguém se lembra de onde tudo começa.',
        'Um grande rio precisa de um começo humilde e protegido, não acha?'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'sombra_na_agua' }
      ]
    },
    {
      id: 'resposta_arvore',
      title: 'A Corticeira',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'É uma corticeira! Adoro os ninhos que fazemos nelas.',
        'São fortes e seguras.',
        'Proteger árvores como esta é proteger lares como o meu.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'sombra_na_agua' }
      ]
    },
    {
      id: 'resposta_elogio',
      title: 'Penas Vermelhas',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Ah, obrigada! Minhas penas são meu maior orgulho.',
        'E também... meu maior medo.',
        'Mas obrigada pelo elogio!'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'sombra_na_agua' }
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
      title: 'Cada Vez Menos',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'A floresta está cheia de vida, é verdade.',
        'Mas... não vejo tantos vermelhos como antigamente.',
        'Minha família, meus amigos...',
        'Estamos cada vez em menor número.'
      ],
      choices: [
        { label: 'Continuar ouvindo', toScreenId: 'palavra_assustadora' }
      ]
    },
    {
      id: 'resposta_orgulho',
      title: 'Beleza Perigosa',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Eu tenho orgulho!',
        'Mas é por causa dela que muitos de nós somos caçados.',
        'Às vezes, ser bonita demais chama a atenção errada.'
      ],
      choices: [
        { label: 'Continuar ouvindo', toScreenId: 'palavra_assustadora' }
      ]
    },
    {
      id: 'resposta_tempo',
      title: 'Desaparecer',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Quero dizer que... eu ouvi uma palavra assustadora.',
        'Uma palavra que significa "desaparecer para sempre".',
        'Tenho medo que seja o destino da minha espécie.'
      ],
      choices: [
        { label: 'Continuar ouvindo', toScreenId: 'palavra_assustadora' }
      ]
    },
    {
      id: 'resposta_preocupacao',
      title: 'O Reflexo Não Mente',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Sim... Desculpe o desabafo.',
        'É que o reflexo na água não mente.',
        'Hoje, sou só eu aqui.',
        'Antigamente, seriam dezenas de araras bebendo água juntas.'
      ],
      choices: [
        { label: 'Continuar ouvindo', toScreenId: 'palavra_assustadora' }
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
      title: 'Silêncio Eterno',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'É mais que terrível.',
        'É um silêncio que não pode ser desfeito.',
        'Um vazio na floresta onde antes havia cor e som.',
        'Fico feliz que você entenda a gravidade disso.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'ninhos_vazios' }
      ]
    },
    {
      id: 'resposta_nunca_pensou',
      title: 'Realidade Próxima',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Ninguém pensa muito... até que a ameaça chegue perto de casa.',
        'Para mim, não é mais só uma palavra.',
        'É uma possibilidade real.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'ninhos_vazios' }
      ]
    },
    {
      id: 'resposta_causas',
      title: 'As Causas',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Muitas coisas...',
        'A nossa casa, a floresta, diminui a cada dia.',
        'E alguns humanos nos capturam para vender.',
        'Eles nos tiram da nossa família para vivermos em gaiolas.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'ninhos_vazios' }
      ]
    },
    {
      id: 'resposta_assustador',
      title: 'Noites Sem Dormir',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'É sim.',
        'Às vezes eu não consigo dormir, ouvindo os ruídos da noite.',
        'E pensando em quantos de nós ainda restam para ver o sol nascer amanhã.'
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
      title: 'Cemitério de Memórias',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'É um cemitério de memórias.',
        'Cada ninho vazio é uma história que não teve continuação.',
        'Uma promessa quebrada.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'barulho_distante' }
      ]
    },
    {
      id: 'resposta_aconteceu',
      title: 'Destinos Trágicos',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Algumas foram levadas por caçadores.',
        'Outras não encontraram mais comida, porque as árvores de onde tiramos frutos foram cortadas.',
        'Outras... simplesmente não voltaram.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'barulho_distante' }
      ]
    },
    {
      id: 'resposta_familia',
      title: 'Sem Família',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Eu... ainda não.',
        'É difícil encontrar um parceiro quando somos tão poucos.',
        'E tenho medo de trazer filhotes a um mundo onde não sei se eles estarão seguros.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'barulho_distante' }
      ]
    },
    {
      id: 'resposta_mudaram',
      title: 'Não Se Mudaram',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Eu gostaria de acreditar nisso.',
        'Mas as araras ficam perto de onde nascem.',
        'Elas não se mudaram.',
        'Elas sumiram.'
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
      title: 'Os Bons São Raros',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Eu sei... eu quero acreditar nisso.',
        'Mas os que fazem barulho e destroem são os que chegam mais longe.',
        'Os bons, eu quase não vejo.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'luz_esperanca' }
      ]
    },
    {
      id: 'resposta_desculpas',
      title: 'Desculpas Não Bastam',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Suas desculpas são gentis, mas... não trazem as árvores de volta.',
        'Talvez, se mais de vocês pensassem antes, o barulho não fosse de destruição, mas de cuidado.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'luz_esperanca' }
      ]
    },
    {
      id: 'resposta_medo_constante',
      title: 'Vida Exaustiva',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'É exaustivo.',
        'Qualquer ruído diferente, qualquer sombra no céu... nosso coração dispara.',
        'Não é justo viver assim.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'luz_esperanca' }
      ]
    },
    {
      id: 'resposta_perdem',
      title: 'Um Mundo Inteiro',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Tudo! Perdemos comida, como coquinhos e sementes.',
        'Perdemos um lugar para dormir e nos proteger da chuva e de predadores.',
        'E perdemos um lugar para fazer nossos ninhos.',
        'Uma árvore é um mundo inteiro para nós.'
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
        'Eles têm cadernos e uns objetos estranhos que apontam para nós, mas que não machucam.',
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
      title: 'Pesquisadores',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        '"Pesquisadores"... Gosto dessa palavra.',
        'Eles parecem querer "pesquisar" uma forma de nos ajudar, não de nos ferir.',
        'Eles me dão um pingo de esperança.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'papel_rio' }
      ]
    },
    {
      id: 'resposta_medo_pesquisadores',
      title: 'Respeito',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'No começo, sim. Muito.',
        'Mas eles são pacientes. Nunca chegam perto demais.',
        'Parecem entender nossos limites.',
        'É um tipo diferente de respeito.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'papel_rio' }
      ]
    },
    {
      id: 'resposta_querem',
      title: 'Contar Histórias',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Eu acho que eles querem nos contar.',
        'Contar quantos de nós ainda existem.',
        'Para que outras pessoas saibam.',
        'Para que talvez... o barulho dos motores pare.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'papel_rio' }
      ]
    },
    {
      id: 'resposta_importam',
      title: 'Calor no Coração',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Sim! É um calorzinho no coração.',
        'Saber que alguém nos vê como seres vivos, e não como um objeto bonito para se ter.',
        'Me faz pensar que talvez o futuro não seja tão escuro.'
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
      title: 'Saúde da Terra',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Exatamente! Você entende.',
        'Sem água limpa, as plantas morrem, os animais vão embora ou morrem também.',
        'A floresta vira um deserto silencioso.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pergunta_direta' }
      ]
    },
    {
      id: 'resposta_cuidar_rios',
      title: 'Presente para Todos',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Sim! É uma das formas mais importantes.',
        'Manter as nascentes limpas, não jogar lixo, não deixar veneno escorrer para a água...',
        'Tudo isso é um presente para nós.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pergunta_direta' }
      ]
    },
    {
      id: 'resposta_responsabilidade',
      title: 'Ideias Que Crescem',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Ele parece pequeno aqui, mas ganha força.',
        'Assim como uma boa ideia.',
        'Começa pequena, com uma pessoa, e pode crescer e mudar o mundo.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pergunta_direta' }
      ]
    },
    {
      id: 'resposta_poluicao',
      title: 'Perigo Invisível',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Sim, um perigo invisível.',
        'Não faz barulho como as motosserras, mas mata aos poucos, por dentro.',
        'Envenena nossos peixes, nossas frutas e a nós mesmos.'
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
      title: 'Replantar',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Sim! Replantar!',
        'Trazer de volta o verde que foi tirado.',
        'Cada árvore nova é uma promessa de futuro.',
        'É uma ideia maravilhosa!'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'som_esperanca' }
      ]
    },
    {
      id: 'resposta_leis',
      title: 'Leis Mais Fortes',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Leis! Isso é importante.',
        'Se a destruição for um crime e tiver punição, talvez os humanos maus pensem duas vezes antes de ligar suas motosserras.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'som_esperanca' }
      ]
    },
    {
      id: 'resposta_ensinar',
      title: 'Educação',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Ensinar! Sim!',
        'Se as crianças aprenderem a nos amar, quando crescerem, elas vão nos proteger.',
        'O conhecimento pode ser o escudo mais forte de todos.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'som_esperanca' }
      ]
    },
    {
      id: 'resposta_apoiar',
      title: 'Apoiar os Protetores',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Apoiar os bons! Eles não podem fazer tudo sozinhos, precisam de ajuda.',
        'Se eles tiverem mais recursos, poderão proteger áreas maiores e salvar mais de nós.'
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
      title: 'A Melhor Música',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'É maravilhosa! É a melhor música que eu poderia ouvir.',
        'Cada chamado que a gente ouve é uma vitória contra o silêncio.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'promessa' }
      ]
    },
    {
      id: 'resposta_va',
      title: 'Agradecimento',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Eu vou! Mas queria te agradecer primeiro.',
        'Sua companhia me deu força.',
        'Agora vou compartilhar essa alegria com ele!'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'promessa' }
      ]
    },
    {
      id: 'resposta_feliz',
      title: 'Empatia',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Obrigada!',
        'Sua felicidade pela minha felicidade... isso é empatia, não é?',
        'É disso que o mundo precisa.',
        'Que vocês sintam a nossa dor, mas também a nossa alegria.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'promessa' }
      ]
    },
    {
      id: 'resposta_esperanca_nunca',
      title: 'Esperança Teimosa',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Você tem razão.',
        'Mesmo quando os ninhos estão vazios e o futuro é incerto, um único chamado pode reacender tudo.',
        'A esperança é teimosa como uma semente.'
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
      title: 'Memória Poderosa',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Obrigada.',
        'A memória é poderosa.',
        'Enquanto formos lembrados, nunca desapareceremos por completo.',
        'Voe bem na sua jornada!'
      ],
      result: { 
        title: 'Fase 1 Concluída — A História de Rubi', 
        summary: 'Você ouviu o chamado de uma Arara-vermelha-grande e aprendeu sobre os desafios da conservação. A jornada pelo Rio Iguaçu continua...', 
        nextPhaseId: '2' 
      }
    },
    {
      id: 'final_aprender',
      title: 'Conhecimento e Ação',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Isso é tudo que eu poderia pedir.',
        'O conhecimento leva à ação, e a ação leva à mudança.',
        'Seu esforço fará a diferença!'
      ],
      result: { 
        title: 'Fase 1 Concluída — A História de Rubi', 
        summary: 'Você ouviu o chamado de uma Arara-vermelha-grande e aprendeu sobre os desafios da conservação. A jornada pelo Rio Iguaçu continua...', 
        nextPhaseId: '2' 
      }
    },
    {
      id: 'final_contar',
      title: 'Espalhe a História',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Sim, por favor! Espalhe nossa história.',
        'Que a minha voz ecoe através da sua.',
        'Quanto mais pessoas souberem, mais forte será nosso exército de protetores!'
      ],
      result: { 
        title: 'Fase 1 Concluída — A História de Rubi', 
        summary: 'Você ouviu o chamado de uma Arara-vermelha-grande e aprendeu sobre os desafios da conservação. A jornada pelo Rio Iguaçu continua...', 
        nextPhaseId: '2' 
      }
    },
    {
      id: 'final_importar',
      title: 'Força do Coração',
      backgroundUrl: nascente,
      characterUrl: arara,
      speaker: 'RUBI',
      texts: [
        'Saber disso... me dá mais força do que qualquer semente de palmeira.',
        'Obrigada. De coração.',
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
      title: 'Tranquilidade e Agitação',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'É tranquilo, sim. Seguro.',
        'Temos comida, água limpa... É uma vida boa.',
        'Mas a tranquilidade daqui me faz pensar na agitação de lá.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'flores_nao_murcham' }
      ]
    },
    {
      id: 'resposta_memoria',
      title: 'A Memória do Rio',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'É a saudade de algo que nunca vivemos.',
        'A vontade de nadar em um rio grande, de sentir a correnteza.',
        'É a história dos nossos avós correndo em nossas veias.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'flores_nao_murcham' }
      ]
    },
    {
      id: 'resposta_agua',
      title: 'O Refúgio da Água',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Nós somos os maiores roedores do mundo, e a água é metade da nossa vida.',
        'Nós comemos, dormimos e nos protegemos nela.',
        'A água é nosso refúgio.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'flores_nao_murcham' }
      ]
    },
    {
      id: 'resposta_diferente',
      title: 'O Espelho Embaçado',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Pelas histórias que ouço... sim. Muito diferente.',
        'Eles dizem que o espelho d\'água de lá está... um pouco embaçado.',
        'Manchado.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'flores_nao_murcham' }
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
      title: 'Flores de Plástico',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'São flores de plástico, de metal... os humanos as chamam de "lixo".',
        'Elas viajam pelo rio como sementes ruins, enfeitando a margem com perigo.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_gosto_estranho' }
      ]
    },
    {
      id: 'resposta_nao_flores',
      title: 'O Fora é Nossa Casa',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Você é esperto(a). Não, não são.',
        'São coisas que os humanos usam e depois jogam fora.',
        'Mas para onde é "fora"? Para nós, "fora" é a nossa casa.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_gosto_estranho' }
      ]
    },
    {
      id: 'resposta_nao_bom',
      title: 'Flores que Tiram Vida',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Não é. Pássaros se enroscam nelas.',
        'Os peixes comem pedacinhos e adoecem.',
        'São flores que, em vez de dar vida, tiram.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_gosto_estranho' }
      ]
    },
    {
      id: 'resposta_peixes_longe',
      title: 'A Sabedoria da Natureza',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Porque eles sabem que aquilo não é comida.',
        'A natureza é sábia, ela reconhece o que não pertence.',
        'O problema é que às vezes o engano acontece.'
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
      title: 'Veneno Invisível',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Essa é a palavra que os humanos cuidadores usam. "Química".',
        'Um veneno invisível.',
        'É o pior tipo de perigo, porque não sabemos onde ele está.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'silencio_peixes' }
      ]
    },
    {
      id: 'resposta_gosto',
      title: 'Gosto de Aviso',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Um gosto amargo, metálico.',
        'Não é o gosto de terra e folhas que a água deveria ter.',
        'É um gosto que avisa: "não beba".'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'silencio_peixes' }
      ]
    },
    {
      id: 'resposta_perigoso',
      title: 'A Água é Nossa Vida',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'É sim. A água é nossa vida.',
        'Se não podemos confiar nela, onde vamos encontrar segurança?',
        'Adoece a gente por dentro, devagarinho.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'silencio_peixes' }
      ]
    },
    {
      id: 'resposta_origem_chuva',
      title: 'O Veneno que Escorre',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Vem das grandes construções humanas na beira do rio, das fazendas que usam pós para matar os insetos...',
        'O veneno escorre da terra e entra na nossa corrente sanguínea, que é o rio.'
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
      title: 'A Teia da Vida',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Isso. Você entende a Teia da Vida.',
        'Ninguém vive sozinho na natureza.',
        'O que afeta o menor dos peixes, uma hora, afeta a maior das capivaras.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'historias_cristal' }
      ]
    },
    {
      id: 'resposta_comem_peixes',
      title: 'Alarme de Silêncio',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Não, nós comemos plantas e grama.',
        'Mas nós convivemos com os peixes. Eles limpam o fundo, comem algas.',
        'A presença deles é um sinal de que o rio está saudável.',
        'O silêncio deles é um alarme.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'historias_cristal' }
      ]
    },
    {
      id: 'resposta_triste_vazio',
      title: 'Rio Morrendo',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Muito. Um rio não é feito só de água.',
        'É feito dos sons, dos movimentos, das vidas que ele abriga.',
        'Um rio silencioso é um rio morrendo.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'historias_cristal' }
      ]
    },
    {
      id: 'resposta_limpar',
      title: 'Secar a Chuva com uma Folha',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Alguns humanos tentam. Os mesmos que cuidam de nós aqui.',
        'Eles colocam placas, limpam as margens.',
        'Mas é como tentar secar a chuva com uma folha.',
        'A sujeira que chega é sempre maior.'
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
      title: 'O Rio Estava Primeiro',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Mas a cidade e o rio deveriam ser amigos.',
        'O rio estava aqui primeiro.',
        'A cidade cresceu ao lado dele, bebendo de sua água.',
        'Não é justo que agora ela o sufoque.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'origem_problema' }
      ]
    },
    {
      id: 'resposta_preciosa',
      title: 'Esperança de Restauração',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'É a nossa maior riqueza.',
        'É a história que nos lembra de como as coisas deveriam ser.',
        'Nos dá um motivo para ter esperança de que, talvez, um dia, ele possa ser assim de novo.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'origem_problema' }
      ]
    },
    {
      id: 'resposta_mudou',
      title: 'A Pressa dos Humanos',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'A pressa dos humanos.',
        'A quantidade de coisas que vocês produzem, usam e jogam fora.',
        'A cidade cresceu, e o rio encolheu. Não em tamanho, mas em vida.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'origem_problema' }
      ]
    },
    {
      id: 'resposta_gostaria',
      title: 'O Gosto de Água Pura',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Mais do que tudo.',
        'Mais do que a grama mais verde e a água mais limpa do zoológico.',
        'Porque lá era a nossa liberdade.',
        'E liberdade tem o gosto de água pura.'
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
      title: 'Portais de Sujeira',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'É isso. "Algum lugar" é a nossa casa.',
        'O vaso sanitário, a pia, a lata de lixo... são portais que trazem as coisas do seu mundo para o nosso.',
        'Precisamos que vocês fechem esses portais.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'refugio_agridoce' }
      ]
    },
    {
      id: 'resposta_atencao',
      title: 'Pequenos Gestos, Grande Monstro',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'A falta de atenção de um pode causar a dor de muitos.',
        'Um papel de bala no chão, um óleo jogado na pia...',
        'São pequenos gestos que, somados, formam um monstro de sujeira no rio.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'refugio_agridoce' }
      ]
    },
    {
      id: 'resposta_facil',
      title: 'Fácil e Difícil',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Pode ser mais fácil para vocês, mas é imensamente mais difícil para nós.',
        'Viver desviando de lixo, bebendo água com veneno... não é nada fácil.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'refugio_agridoce' }
      ]
    },
    {
      id: 'resposta_importante',
      title: 'Entender a Doença',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Eu acho que sim.',
        'Porque se vocês não souberem a resposta, como poderão resolver o problema?',
        'A cura começa quando se entende a doença.'
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
      title: 'O Preço da Liberdade',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Exatamente. O preço é a liberdade e o rio de verdade.',
        'Às vezes me pergunto o que é melhor: uma vida longa em um copo d\'água limpa ou uma vida curta em um oceano de possibilidades?'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'grande_duvida' }
      ]
    },
    {
      id: 'resposta_protegida',
      title: 'Situação Estranha',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Sim, e sou grata por isso.',
        'Os humanos que cuidam de nós aqui são bons. Eles nos protegem de outros humanos.',
        'É uma situação estranha, não acha?'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'grande_duvida' }
      ]
    },
    {
      id: 'resposta_pioraram',
      title: 'Pedido de Socorro',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Sim. O fato de um zoológico ser necessário para a sobrevivência de uma espécie é o maior sinal de que o mundo natural está pedindo socorro.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'grande_duvida' }
      ]
    },
    {
      id: 'resposta_preferiria',
      title: 'Conflito Interior',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Meu coração não sabe a resposta.',
        'A "memória do rio" grita que sim. Mas o medo do que o rio se tornou me faz ser grata por este porto seguro.',
        'É um conflito que mora em mim.'
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
      title: 'Segunda Vida',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Ah, então o lixo pode ter uma segunda vida?',
        'Como uma folha seca que vira adubo?',
        'Isso é maravilhoso! Dar uma nova chance às coisas em vez de jogá-las no rio.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'rio_que_une' }
      ]
    },
    {
      id: 'resposta_usar_menos',
      title: 'Sabedoria Natural',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Entendi. Se vocês usarem menos, menos será jogado fora.',
        'É como comer só as folhas que precisamos, em vez de arrancar a planta inteira.',
        'É uma ideia muito sábia.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'rio_que_une' }
      ]
    },
    {
      id: 'resposta_lugar_certo',
      title: 'A Limpeza Começa nas Mãos',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Parece tão simples e tão óbvio.',
        'Se cada um guardasse seu lixo, o chão, o vento e a chuva não o levariam para nossa casa.',
        'A limpeza do rio começa na limpeza das mãos.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'rio_que_une' }
      ]
    },
    {
      id: 'resposta_oleo',
      title: 'A Boca do Rio',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'A pia... então ela é uma boca do rio dentro da casa de vocês.',
        'Tudo que desce por ela vem nos visitar.',
        'Cuidar do que entra na pia é cuidar de quem bebe da água lá na frente.'
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
      title: 'Melhores Mensagens',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Cuidado e respeito. São as melhores mensagens.',
        'Que a água leve a notícia de que os humanos estão finalmente aprendendo a conviver com ele.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pedido_calmo' }
      ]
    },
    {
      id: 'resposta_reflexao',
      title: 'Semente de Mudança',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Isso é bom. A reflexão é a primeira semente da mudança.',
        'Se minha história fez uma pequena ondinha no seu pensamento, já valeu a pena.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pedido_calmo' }
      ]
    },
    {
      id: 'resposta_parte',
      title: 'Bons Vizinhos',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Exato! Vocês não são donos do rio, são vizinhos.',
        'E bons vizinhos cuidam da casa e do quintal que dividem.',
        'O rio é o nosso quintal.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pedido_calmo' }
      ]
    },
    {
      id: 'resposta_consertar',
      title: 'O Rio Perdoa',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Consertar erros é um ato de coragem.',
        'O rio é paciente. Ele viu muita coisa.',
        'Ele saberá perdoar se as ações de vocês forem sinceras.'
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
      title: 'Sementes de Memória',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Fico feliz. As memórias são como sementes.',
        'Plante-as em outras pessoas.',
        'Tenha um bom dia no nosso zoológico.'
      ],
      result: { 
        title: 'Fase 2 Concluída — A Memória de Mia', 
        summary: 'Você aprendeu com uma capivara sobre a poluição do rio e como pequenas ações podem fazer diferença. A jornada continua...', 
        nextPhaseId: '3' 
      }
    },
    {
      id: 'final_mudou',
      title: 'Novos Olhos',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Que bom. Às vezes, tudo que precisamos é de um novo par de olhos para ver o que sempre esteve ali.',
        'Olhe sempre com os olhos do rio.'
      ],
      result: { 
        title: 'Fase 2 Concluída — A Memória de Mia', 
        summary: 'Você aprendeu com uma capivara sobre a poluição do rio e como pequenas ações podem fazer diferença. A jornada continua...', 
        nextPhaseId: '3' 
      }
    },
    {
      id: 'final_prometo',
      title: 'Todo Poderoso',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Uma promessa é algo muito forte.',
        'Fico com o coração mais tranquilo em saber disso.',
        'Cada pequena parte, quando se junta, vira um todo poderoso.'
      ],
      result: { 
        title: 'Fase 2 Concluída — A Memória de Mia', 
        summary: 'Você aprendeu com uma capivara sobre a poluição do rio e como pequenas ações podem fazer diferença. A jornada continua...', 
        nextPhaseId: '3' 
      }
    },
    {
      id: 'final_sabedoria',
      title: 'O Professor Silencioso',
      backgroundUrl: zoologico,
      characterUrl: capivara,
      speaker: 'MIA',
      texts: [
        'Não é sabedoria, é apenas o que a água me ensinou.',
        'O rio é um professor silencioso.',
        'Basta querer ouvi-lo. Fique bem.'
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
  title: 'FASE 3 — Represa no Caminho',
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
        'Suas escamas brilham. É um Dourado.'
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
      title: 'Feito para o Movimento',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Obrigada. Sou um Dourado.',
        'Fomos feitos para sermos fortes, para caçar, para saltar cachoeiras.',
        'Fomos feitos para o movimento.',
        'É o que me mantém viva, mesmo aqui.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'parede_impede' }
      ]
    },
    {
      id: 'resposta_restou',
      title: 'Coração Represado',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Este lugar já foi um rio. Um corpo comprido, com pulso, com um caminho a seguir.',
        'Agora é um lago. Um coração que foi represado.',
        'A alma do rio ainda está aqui, mas o corpo foi acorrentado.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'parede_impede' }
      ]
    },
    {
      id: 'resposta_liberdade',
      title: 'Fluxo Interrompido',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'É enorme, sim. Mas tem um fim. Um fim abrupto, artificial.',
        'Uma parede de pedra e barulho que não deveria estar aqui.',
        'Liberdade é poder seguir o fluxo, e o fluxo... foi interrompido.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'parede_impede' }
      ]
    },
    {
      id: 'resposta_silencioso',
      title: 'Silêncio da Estagnação',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Silencioso para você, talvez.',
        'Para mim, este silêncio é pesado.',
        'Sinto falta do barulho das corredeiras, do som da água batendo nas pedras.',
        'Este é o silêncio da estagnação.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'parede_impede' }
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
        'Tentamos encontrar uma fresta, mas ela é impenetrável.',
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
      title: 'Instinto Negado',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Frustrante é pouco. É desesperador.',
        'É um instinto que grita "suba, suba, suba!", mas há uma muralha dizendo "não, não, não!".',
        'Muitos desistem. Eu ainda não.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'danca_interrompida' }
      ]
    },
    {
      id: 'resposta_porque',
      title: 'Luz e Escuridão',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Eles dizem que é para criar "luz" para as casas de vocês. Energia.',
        'Para fazer suas caixas brilhantes funcionarem.',
        'Mas a luz de vocês criou uma escuridão eterna em nosso caminho.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'danca_interrompida' }
      ]
    },
    {
      id: 'resposta_outro_lado',
      title: 'O Futuro Bloqueado',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'O resto do nosso mundo. A continuação do rio, com outras corredeiras, outros poços, outros alimentos.',
        'E o mais importante: os locais onde nossos ovos devem ser postos.',
        'O nosso futuro está do outro lado.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'danca_interrompida' }
      ]
    },
    {
      id: 'resposta_atravessar',
      title: 'Escada Estranha',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Não uma forma natural.',
        'Os humanos criaram uma "escada" estranha para nós, mas... não é a mesma coisa.',
        'É um truque. O rio de verdade não tem degraus.'
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
        'Ela para perto de umas plantas aquáticas, o olhar distante.',
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
      title: 'Dança Enfraquecida',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Muitos não desovam. Ou soltam seus ovos em locais errados, onde não sobrevivem.',
        'A cada ano, a dança fica mais fraca.',
        'A cada ano, vemos menos Dourados jovens.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_preguicosa' }
      ]
    },
    {
      id: 'resposta_palavra_bonita',
      title: 'Os Que Entendiam',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'É bonita, não é? Significa "a subida do peixe" na língua dos humanos que viviam aqui antes.',
        'Eles entendiam e respeitavam nossa jornada.',
        'Parece que os de hoje se esqueceram.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_preguicosa' }
      ]
    },
    {
      id: 'resposta_reproducao',
      title: 'Parede do Futuro',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Exatamente. Ela não impede só a nossa passagem, impede a chegada da próxima geração.',
        'É uma parede que não barra apenas peixes, mas o próprio futuro.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_preguicosa' }
      ]
    },
    {
      id: 'resposta_todos',
      title: 'Os Viajantes',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Muitos dos grandes, sim. Os migradores.',
        'Pacus, piaparas, e nós, os Dourados.',
        'Somos os viajantes do rio. Ou éramos.'
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
        'A água também mudou. O rio de verdade tinha pulso.',
        'Corria rápido em alguns trechos, criava remansos em outros. Havia oxigênio, movimento.',
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
      title: 'De Atleta a Gigante Adormecido',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Personalidade! Gostei disso. Sim.',
        'De um atleta corredor, ele virou um gigante adormecido.',
        'E nós, que éramos os velocistas, temos que aprender a viver em um quarto de dormir.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'canoas_sem_remo' }
      ]
    },
    {
      id: 'resposta_respiracao',
      title: 'Ofegantes',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Em dias muito quentes, sim. A água parada esquenta mais e perde oxigênio.',
        'Ficamos ofegantes.',
        'Temos que procurar as poucas áreas onde a água ainda se mexe um pouco.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'canoas_sem_remo' }
      ]
    },
    {
      id: 'resposta_comida',
      title: 'Espécies Invasoras',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Sim. Alguns peixes menores que caçávamos, os lambaris, gostavam de água corrente. Estão mais raros aqui.',
        'Agora, vemos outros peixes, espécies que gostam de água parada, que não são daqui.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'canoas_sem_remo' }
      ]
    },
    {
      id: 'resposta_mudanca_completa',
      title: 'Tudo de Uma Vez',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Completa. Os humanos pensam que só colocaram uma parede na água.',
        'Mas eles não entendem que, ao parar a água, eles mudaram o vento, a temperatura, a comida, a casa e o futuro.',
        'Tudo de uma vez.'
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
        'Assustam os cardumes e reviram o fundo.',
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
      title: 'Armadilha Covarde',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Isso. Elas são quase invisíveis na água.',
        'Um peixe faminto vê a isca, morde, e fica preso.',
        'Luta até não ter mais forças. É uma armadilha covarde.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'familias_divididas' }
      ]
    },
    {
      id: 'resposta_barulho',
      title: 'Trovão Constante',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'É como se o céu estivesse trovejando o tempo todo.',
        'Nós não temos pálpebras para fechar, nem mãos para tapar os ouvidos.',
        'Apenas sentimos a vibração do medo em todo o corpo.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'familias_divididas' }
      ]
    },
    {
      id: 'resposta_triste_diversao',
      title: 'Sem Equilíbrio',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'É a história da nossa relação, não é?',
        'A luz de vocês é a nossa escuridão. A diversão de vocês é o nosso medo.',
        'Parece que nunca há um equilíbrio.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'familias_divididas' }
      ]
    },
    {
      id: 'resposta_desviar',
      title: 'Curiosidade Fatal',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Os mais velhos, como eu, sim. Aprendemos a reconhecer o brilho estranho, a comida que parece fácil demais.',
        'Mas os filhotes... os filhotes são curiosos.',
        'E a curiosidade, neste novo rio, é muitas vezes fatal.'
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
        'Mas eu me pergunto: será que existem Dourados lá, olhando para esta mesma parede, só que do outro lado?',
        'Será que sentem a nossa falta, como nós sentimos a deles?',
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
      title: 'Impacto Invisível',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'É um impacto invisível para vocês. Vocês veem a água, a energia.',
        'Nós vemos a ausência. O primo que nunca vamos encontrar, a linhagem que nunca vai se misturar.',
        'Enfraquece a nossa espécie.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'escada_estranha' }
      ]
    },
    {
      id: 'resposta_solitaria',
      title: 'Rio Como Poça',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'É. Nadar neste "lago" imenso e saber que seu mundo, que deveria ser um caminho infinito, agora tem um muro no meio...',
        'Faz o maior dos rios parecer uma poça d\'água.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'escada_estranha' }
      ]
    },
    {
      id: 'resposta_escada_ajude',
      title: 'Solução de Humano',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Talvez. Mas quantos de nós conseguem usá-la? Quantos a encontram?',
        'É uma solução de humano, não de rio.',
        'Uma tentativa de consertar algo que eles não deveriam ter quebrado.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'escada_estranha' }
      ]
    },
    {
      id: 'resposta_fronteiras',
      title: 'Sangue Quer Correr Livre',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Exatamente. Vocês desenham linhas nos mapas, constroem muros, cercas.',
        'E fizeram o mesmo com nosso rio.',
        'Mas o sangue do rio ainda quer correr livre, não importa quantas barreiras vocês coloquem.'
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
      title: 'Perna Quebrada e Muleta',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Sim, é uma tentativa. É o reconhecimento de que erraram.',
        'Mas é como quebrar a perna de alguém e depois oferecer uma muleta estranha.',
        'Agradecemos a muleta, mas preferíamos ter a perna inteira.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'luz_sombra' }
      ]
    },
    {
      id: 'resposta_funciona',
      title: 'Labirinto Exaustivo',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Alguns sim, principalmente os menores.',
        'Mas para um Dourado grande, um peixe de explosão, é um labirinto exaustivo.',
        'Muitos chegam lá em cima sem forças para continuar a jornada e desovar.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'luz_sombra' }
      ]
    },
    {
      id: 'resposta_artificial',
      title: 'Língua Estrangeira',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Artificial é a palavra perfeita. O rio tem seus próprios degraus, suas próprias passagens.',
        'Nós evoluímos por milhões de anos para entendê-los.',
        'Isso aqui... é uma língua estrangeira que temos que aprender em uma única vida.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'luz_sombra' }
      ]
    },
    {
      id: 'resposta_nao_usa',
      title: 'Instinto Negado',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Eu já tentei. Cheguei na metade. O cheiro da água é estranho, a correnteza é falsa.',
        'Meu instinto me disse que aquele não era o caminho certo.',
        'Meu corpo quer a força do rio verdadeiro, não um eco engarrafado.'
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
        'Yara se afasta da escada e para no meio da imensa coluna de água da represa.',
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
        'Tudo isso... toda essa mudança, toda essa dificuldade... para que as luzes da cidade de vocês se acendam à noite.',
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
      title: 'Nada é de Graça',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Mas deveriam. Nada é de graça.',
        'Cada interruptor que vocês apertam tem um custo em algum lugar.',
        'Hoje, o custo está sendo pago por nós, com a nossa liberdade e o nosso futuro.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'cardume_esperanca' }
      ]
    },
    {
      id: 'resposta_outras_formas',
      title: 'Trabalhar com a Natureza',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Seria a solução mais sábia. Formas que não criem paredes.',
        'Formas que usem o sol, o vento... forças que não precisam ser aprisionadas para serem usadas.',
        'Formas que trabalhem com a natureza, não contra ela.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'cardume_esperanca' }
      ]
    },
    {
      id: 'resposta_preco_alto',
      title: 'Sem Voz',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Obrigada por dizer isso. É alto. É um preço que nós não concordamos em pagar.',
        'Foi uma decisão tomada por vocês, mas que afetou milhões de vidas que não tiveram voz.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'cardume_esperanca' }
      ]
    },
    {
      id: 'resposta_entendessem',
      title: 'Veia do Planeta',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Que um rio não é um cano d\'água. É uma veia do planeta. É um ser vivo.',
        'E quando vocês barram um rio, estão causando uma trombose na Terra.',
        'A doença pode demorar a aparecer, mas uma hora, todo o corpo sente.'
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
      title: 'Persistência Fura Rocha',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Resiliente. Sim. Nós nos dobramos, mas tentamos não quebrar.',
        'A água nos ensina que a persistência pode furar a rocha mais dura.',
        'Talvez, um dia, ela contorne até mesmo o concreto.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'mergulho_final' }
      ]
    },
    {
      id: 'resposta_poderosa',
      title: 'Honrar a Memória',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Não é uma visão, é uma necessidade.',
        'Se acreditarmos que tudo está perdido, então realmente estará.',
        'Lutar, nadar, caçar, tentar... é a única forma de honrar a memória do rio livre que corre em nós.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'mergulho_final' }
      ]
    },
    {
      id: 'resposta_resistencia',
      title: 'Coragem de Corrigir',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'É a única esperança.',
        'A esperança de que, um dia, os humanos olhem para esta parede e vejam não uma fonte de energia, mas um erro.',
        'E que tenham a coragem de corrigi-lo.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'mergulho_final' }
      ]
    },
    {
      id: 'resposta_forcas',
      title: 'Promessa dos Jovens',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'A "memória do rio", que eu lhe falei. O instinto.',
        'E olhar para os mais jovens.',
        'Cada Douradinho que escapa dos "fios que mordem" e cresce forte é uma promessa.',
        'Eles são a força que nos move.'
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
      title: 'Como a Mudança Começa',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'A memória é o primeiro passo.',
        'Se você se lembrar, outros podem se lembrar através de você.',
        'É assim que a mudança começa.'
      ],
      result: { 
        title: 'Fase 3 Concluída — O Rio Interrompido', 
        summary: 'Você conheceu Yara e aprendeu sobre o impacto das barragens nos rios e na vida aquática. A jornada pelo Iguaçu continua...', 
        nextPhaseId: '4' 
      }
    },
    {
      id: 'final_progresso',
      title: 'Progresso Verdadeiro',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Que bom. O verdadeiro progresso não deveria deixar ninguém para trás.',
        'Nem mesmo um peixe dourado num rio interrompido.'
      ],
      result: { 
        title: 'Fase 3 Concluída — O Rio Interrompido', 
        summary: 'Você conheceu Yara e aprendeu sobre o impacto das barragens nos rios e na vida aquática. A jornada pelo Iguaçu continua...', 
        nextPhaseId: '4' 
      }
    },
    {
      id: 'final_luta',
      title: 'Dourado Nunca Para',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'Sempre. Um Dourado nunca para de lutar.',
        'Está em nosso nome e em nossa natureza.',
        'Nade bem na sua própria correnteza.'
      ],
      result: { 
        title: 'Fase 3 Concluída — O Rio Interrompido', 
        summary: 'Você conheceu Yara e aprendeu sobre o impacto das barragens nos rios e na vida aquática. A jornada pelo Iguaçu continua...', 
        nextPhaseId: '4' 
      }
    },
    {
      id: 'final_voz',
      title: 'Consciência Mais Alta',
      backgroundUrl: represa,
      characterUrl: yara,
      speaker: 'YARA',
      texts: [
        'É a melhor promessa que você poderia fazer.',
        'As paredes de concreto são altas, mas talvez a voz da consciência de vocês possa ser mais alta.',
        'Adeus, visitante.'
      ],
      result: { 
        title: 'Fase 3 Concluída — O Rio Interrompido', 
        summary: 'Você conheceu Yara e aprendeu sobre o impacto das barragens nos rios e na vida aquática. A jornada pelo Iguaçu continua...', 
        nextPhaseId: '4' 
      }
    }
  ]
},
    {
  id: '4',
  title: 'FASE 4 — Ponte Histórica',
  startScreenId: 'intro',
  screens: [
    {
      id: 'intro',
      title: 'Um Encontro sob o Gigante de Ferro',
      backgroundUrl: ponte,
      speaker: 'NARRADOR',
      texts: [
        'A noite cai sobre as cidades-gêmeas de União da Vitória e Porto União.',
        'Sob os arcos da imponente Ponte Machado da Costa, que une os dois estados, o mundo é feito de sombras e do som constante da água do Rio Iguaçu.',
        'Perto de um dos pilares de sustentação, a terra se mexe.',
        'Um focinho farejador surge, seguido por uma casca blindada.',
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
        'A maioria dos seres de duas pernas não gosta da noite.',
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
      title: 'Cauteloso por Natureza',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Não se preocupe. Sou um animal assustado por natureza.',
        'O mundo aqui em cima é muito barulhento e imprevisível.',
        'A gente aprende a ser cauteloso. Agradeço sua gentileza.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'rio_zangado' }
      ]
    },
    {
      id: 'resposta_terra_conta',
      title: 'Camadas de História',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Ela conta sobre o rio. Sobre as vezes em que ele se zangou e cresceu, deixando marcas de areia e lodo bem fundo.',
        'Conta sobre as raízes que sumiram.',
        'E conta sobre os objetos estranhos que os humanos deixam para trás.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'rio_zangado' }
      ]
    },
    {
      id: 'resposta_interessante',
      title: 'Vida de Equilíbrios',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Interessante, sim. E barulhento.',
        'A ponte treme e ruge o tempo todo.',
        'É como viver sob o céu e sob uma montanha de ferro ao mesmo tempo.',
        'É uma vida de equilíbrios.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'rio_zangado' }
      ]
    },
    {
      id: 'resposta_incrivel',
      title: 'Casca e Escudo',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Obrigado. Minha casca é minha casa e meu escudo.',
        'Ela me protege das ameaças de cima e me ajuda a cavar a terra abaixo.',
        'É tudo que eu tenho, e é o suficiente.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'rio_zangado' }
      ]
    },
    {
      id: 'rio_zangado',
      title: 'O Rio Zangado',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'NARRADOR',
      texts: [
        'Richard enfia o focinho na terra e remexe por um instante, tirando uma minhoca.',
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
        'Este solo é diferente. Embaixo da camada de grama e terra seca, existe uma camada grossa de areia, onde não deveria haver.',
        'Meus avós contaram a história. Foi de uma vez em que o rio se cansou de ser pequeno e decidiu visitar a cidade inteira.',
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
      title: 'A Maior de Todas',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Sim. A maior de todas. A água subiu, subiu, cobriu tudo isso aqui.',
        'A ponte parecia um barquinho de papel. Os humanos ficaram com medo.',
        'O rio apenas retomou o que sempre foi seu por direito: a planície de inundação.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'margens_parede' }
      ]
    },
    {
      id: 'resposta_poder',
      title: 'Poder e Memória',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Poder e memória. Ele quis lembrar a todos que, por mais que vocês construam pontes e muros, é ele quem manda no fim das contas.',
        'A natureza é paciente, mas não esquece seus antigos caminhos.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'margens_parede' }
      ]
    },
    {
      id: 'resposta_aterrorizante',
      title: 'Limpeza Natural',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Foi. Muitos se perderam. Tiveram que fugir para as partes mais altas.',
        'Mas também foi uma limpeza. O rio levou embora muita sujeira e mostrou onde a vida deveria e não deveria construir seu lar.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'margens_parede' }
      ]
    },
    {
      id: 'resposta_marcas',
      title: 'Lembrete Constante',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Sim, a poucos palmos da superfície.',
        'Para mim, é um lembrete constante.',
        'Cada vez que minhas patas tocam essa camada de areia, eu me lembro de que vivemos sob a gentileza temporária de um gigante adormecido.'
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
        'Richard caminha um pouco, afastando-se da proteção da ponte e chegando mais perto da beira do rio.',
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
        'Depois da grande cheia, os humanos ficaram com mais medo. E o medo os fez construir isso. Paredes.',
        'Eles acham que podem colocar o rio em uma caixa.',
        'Antes, a margem era suave. Havia barrancos de terra para eu cavar minha toca, pequenos brejos cheios de insetos.',
        'Agora... é só pedra dura e estéril.'
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
      title: 'Segurança de Uma, Insegurança de Outras',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Sim, proteger as casas de vocês. Mas ao fazer isso, destruíram as nossas.',
        'É sempre assim. A segurança de uma espécie se torna a insegurança de dezenas de outras.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'tesouros_nao_alimentam' }
      ]
    },
    {
      id: 'resposta_perdeu_casa',
      title: 'Caminho Mais Perigoso',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Não esta toca, eu fiz essa sob a ponte. Mas perdi lugares para caçar.',
        'Perdi a facilidade de chegar na água para beber.',
        'Agora preciso andar muito mais, me expor mais. O caminho ficou mais longo e perigoso.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'tesouros_nao_alimentam' }
      ]
    },
    {
      id: 'resposta_margem_vida',
      title: 'Porta Trancada',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'É o lugar mais importante! É a fronteira entre dois mundos, o da terra e o da água.',
        'Capivaras, lontras, muitos pássaros... todos nós usávamos a margem como porta de entrada.',
        'Vocês trancaram a porta.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'tesouros_nao_alimentam' }
      ]
    },
    {
      id: 'resposta_fora_lugar',
      title: 'Cicatriz de Pedra',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'É uma cicatriz. Onde a terra deveria respirar, sentir a água subir e descer, agora há uma mordaça de pedra.',
        'O rio não pode mais depositar seus nutrientes, e a terra não pode mais lhe oferecer suas raízes.'
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
        'Enquanto fareja perto da parede de concreto, Richard para e cava rapidamente com as garras dianteiras.',
        'Ele desenterra algo que brilha à luz da lua: uma tampa de garrafa enferrujada.',
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
        'Veem? Outro tipo de marca que os humanos deixam. Camadas de história.',
        'Embaixo, a areia da grande cheia. Mais para cima, cacos de vidro, anéis de plástico, metais enferrujados.',
        'Eu cavo em busca de vida, de raízes, de larvas. E encontro o lixo de vocês.',
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
      title: 'A Terra Não Esquece',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Tempo. Para vocês, o lixo some quando o caminhão o leva.',
        'Para a terra, ele não some. Ele apenas se quebra em pedaços menores, se esconde no subsolo, mas continua aqui.',
        'A terra não esquece.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'monstro_ruge' }
      ]
    },
    {
      id: 'resposta_machucou',
      title: 'Perigo Invisível',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Eu, felizmente, tenho garras fortes.',
        'Mas já vi outros animais com cortes, ou presos em anéis de plástico.',
        'O perigo não está só no que é grande e visível.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'monstro_ruge' }
      ]
    },
    {
      id: 'resposta_arquivo',
      title: 'História Escrita com Lixo',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Exatamente. Vocês escrevem a história de vocês com palavras e fotos.',
        'E a escrevem no solo com o que descartam.',
        'Eu consigo dizer o quão perto estou da cidade apenas pela quantidade de plástico que encontro.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'monstro_ruge' }
      ]
    },
    {
      id: 'resposta_garimpar',
      title: 'Terra Mais Pobre',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Sim. É isso. Às vezes cavamos um palmo inteiro e só encontramos cascalho de construção e cacos.',
        'É um trabalho duro e, muitas vezes, frustrante.',
        'A terra está ficando mais pobre de vida.'
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
        'Toda a estrutura de metal range e vibra, e um pó fino de ferrugem e sujeira cai lentamente, brilhando contra as luzes da cidade.',
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
        'E atravessá-lo... atravessar a pista que o alimenta... é quase impossível.',
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
      title: 'Tempestade Eterna',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Vocês se acostumam. Mas para nós, que usamos a audição e a escuridão para sobreviver, é como viver em uma tempestade eterna.',
        'É confuso e exaustivo.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'ponte_testemunha' }
      ]
    },
    {
      id: 'resposta_progresso',
      title: 'Espaços que Sobram',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Ignora ou simplesmente não vê.',
        'Vocês olham para a frente, para o destino de vocês.',
        'Nós vivemos nos cantos, nas beiradas, nos espaços que sobram.',
        'O progresso de vocês é a compressão do nosso mundo.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'ponte_testemunha' }
      ]
    },
    {
      id: 'resposta_estressante',
      title: 'Predador na Cabeça',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'É sim. Meu coração dispara toda vez que um veículo pesado passa.',
        'Eu sei que a ponte é forte, mas meu instinto diz que o rugido de um predador está sempre acima da minha cabeça.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'ponte_testemunha' }
      ]
    },
    {
      id: 'resposta_estradas',
      title: 'Isolados',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Exatamente. Rios de correnteza rápida e impiedosa, cujas margens não oferecem descanso.',
        'Atravessar é um risco que poucos de nós se atrevem a correr.',
        'Ficamos isolados nesta pequena fatia de terra.'
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
        'O tatu-galinha olha para cima, para o emaranhado de vigas de ferro que formam a barriga da ponte.',
        'Sua irritação parece dar lugar a uma espécie de respeito relutante.'
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
        'Mas sabe... apesar de tudo, eu respeito esta velha senhora de ferro.',
        'Ela está aqui há muito tempo. Ela viu a "grande cheia". Ela vê o sol nascer e se pôr.',
        'Ela me dá um teto, mesmo que barulhento. Ela une as famílias de vocês.',
        'Ela é uma testemunha silenciosa de toda essa mudança.',
        'O que você acha que ela diria se pudesse falar?'
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
      title: 'Sábia Conselheira',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Eu gosto dessa ideia. Que ela, que depende tanto de suas fundações na terra, pedisse para que cuidassem melhor do solo e da água que a sustentam.',
        'Seria uma sábia conselheira.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'vida_espacos_sobrantes' }
      ]
    },
    {
      id: 'resposta_historias',
      title: 'Vê a Todos',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Sim! Histórias de humanos, com suas pressas e seus sonhos.',
        'E histórias de tatus, com nossos medos e nossas buscas por comida.',
        'Ela nos vê a todos, de cima.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'vida_espacos_sobrantes' }
      ]
    },
    {
      id: 'resposta_viu_demais',
      title: 'Peso Além dos Carros',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Com certeza. Ela viu o rio limpo e o rio sujo. Viu a mata e viu o concreto.',
        'Ela viu o "antes" e o "agora".',
        'Deve carregar um peso muito maior do que apenas o dos carros.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'vida_espacos_sobrantes' }
      ]
    },
    {
      id: 'resposta_orgulhosa_cansada',
      title: 'Entendendo a Ponte',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Orgulhosa por unir as pessoas, por resistir às cheias.',
        'E cansada do barulho, do descaso com o rio, de ver as margens adoecerem.',
        'Sim... acho que você a entende bem.'
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
        'Richard volta a farejar o chão, movendo-se com uma eficiência que vem de gerações de vida noturna.',
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
        'Nosso mundo encolheu. Então aprendemos a viver nas sobras. Nas frestas. Nos terrenos baldios. Embaixo de pontes.',
        'Nos tornamos especialistas em invisibilidade.',
        'Mas viver escondido não é a mesma coisa que viver em paz.',
        'Você acha que os humanos percebem que existimos nesses pequenos bolsões de vida?'
      ],
      choices: [
        { label: 'Acho que a maioria não faz a menor ideia.', toScreenId: 'resposta_nao_ideia' },
        { label: 'Algumas pessoas sim, as que prestam mais atenção.', toScreenId: 'resposta_algumas_pessoas' },
        { label: 'É impressionante como a vida encontra um caminho, mesmo nos lugares mais difíceis.', toScreenId: 'resposta_impressionante_vida' },
        { label: 'Talvez se vocês fossem mais vistos, seriam mais respeitados.', toScreenId: 'resposta_mais_vistos' }
      ]
    },
    {
      id: 'resposta_nao_ideia',
      title: 'Natureza Aqui',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'É o que eu imagino. Para a maioria, a natureza está "lá longe", na floresta.',
        'Não percebem que ela está aqui, teimando em sobreviver debaixo de seus pés e sobre suas cabeças.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'sabedoria_pequeno' }
      ]
    },
    {
      id: 'resposta_algumas_pessoas',
      title: 'Atenção é Cuidado',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Fico feliz em saber. A atenção é o primeiro passo do cuidado.',
        'Se alguém nos vê, talvez pense duas vezes antes de jogar uma garrafa pela janela do carro.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'sabedoria_pequeno' }
      ]
    },
    {
      id: 'resposta_impressionante_vida',
      title: 'Frestas Ficam Menores',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'É o que fazemos. É o nosso único talento, além de cavar.',
        'Encontrar um jeito. Mas estamos cansados.',
        'A cada nova construção, a cada nova parede, as frestas ficam menores.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'sabedoria_pequeno' }
      ]
    },
    {
      id: 'resposta_mais_vistos',
      title: 'Dilema da Visibilidade',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'É um dilema. Ser visto por um humano pode significar curiosidade e cuidado, ou pode significar medo e uma vassourada.',
        'A invisibilidade, por enquanto, é mais segura.'
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
        'Richard para e se senta sobre as patas traseiras, um gesto incomum.',
        'Ele parece pequeno e vulnerável sob a imensidão da ponte e da noite.'
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
      title: 'Cuidar do Chão',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'É verdade. Ao cavar, eu ajudo o ar e a água a entrar na terra. Eu a mantenho fofa.',
        'Talvez eu não possa derrubar a parede de concreto, mas posso cuidar do chão em que ela se apoia.',
        'Gosto disso.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'cheiro_chuva' }
      ]
    },
    {
      id: 'resposta_testemunha',
      title: 'Guardião da História',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Um guardião da história do subsolo... É uma posição de muita responsabilidade.',
        'Eu aceito. Vou continuar lendo o solo e ensinando aos meus filhos as lições que ele me conta.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'cheiro_chuva' }
      ]
    },
    {
      id: 'resposta_juntos',
      title: 'Exército Silencioso',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Como um formigueiro. Uma única formiga não é nada, mas juntas elas constroem reinos.',
        'Preciso me lembrar disso. Eu, os gambás, as corujas... somos um exército silencioso.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'cheiro_chuva' }
      ]
    },
    {
      id: 'resposta_sobrevive',
      title: 'Pequena Vitória',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Resistência... Sim. Cada dia que eu sobrevivo aqui, que encontro comida, que fujo do perigo e volto para a minha toca, é uma pequena vitória.',
        'É dizer ao mundo de vocês: "nós ainda estamos aqui".'
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
        'O vento muda de direção, trazendo o cheiro de chuva e de terra molhada do oeste.',
        'Richard levanta o focinho e aspira o ar profundamente.',
        'Seus instintos estão em alerta.'
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
        'A chuva está vindo. Para mim, chuva é vida. Traz as minhocas para a superfície.',
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
      title: 'Sistema de Esgoto Natural',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Exatamente. Vocês usam o ciclo da água como seu sistema de esgoto particular.',
        'Mas esquecem que a água suja em um lugar, é a água que alguém, rio abaixo, terá que beber.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'amanhecer_retirada' }
      ]
    },
    {
      id: 'resposta_problema_chuva',
      title: 'Mensageira da Doença',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Não a chuva em si, mas o que ela carrega.',
        'Ela se tornou a mensageira da doença da cidade.',
        'O rio a recebe de braços abertos, sem saber que ela traz veneno.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'amanhecer_retirada' }
      ]
    },
    {
      id: 'resposta_conectado',
      title: 'Órgão no Corpo da Natureza',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Sempre esteve. Vocês que se esqueceram.',
        'Vocês constroem cidades como se fossem mundos separados, mas não são.',
        'A cidade é um órgão que vive no corpo da natureza. E o que ela expele, o resto do corpo precisa filtrar.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'amanhecer_retirada' }
      ]
    },
    {
      id: 'resposta_solucao_chuva',
      title: 'Limpeza da Cidade',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Sim. Manter a cidade limpa.',
        'Se as ruas estiverem limpas, a chuva só levará folhas e poeira.',
        'A limpeza da cidade é a saúde do rio. É simples assim.'
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
        'A atividade de Richard está chegando ao fim.',
        'Ele caminha de volta para a entrada de sua toca, um buraco discreto na terra escura.'
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
      title: 'Guardião das Histórias',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'De nada, prezado(a) visitante.',
        'As histórias só têm valor quando são compartilhadas.',
        'Agora você também é um guardião delas.'
      ],
      result: { 
        title: 'Fase 4 Concluída — O Historiador do Subsolo', 
        summary: 'Você conheceu Richard e aprendeu sobre a vida urbana vista de baixo, os impactos das construções e a resiliência dos pequenos. A jornada final aguarda...', 
        nextPhaseId: '5' 
      }
    },
    {
      id: 'final_atencao',
      title: 'O Chão Está Vivo',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Faça isso. Veja as pequenas plantas quebrando o concreto. Veja as formigas trabalhando.',
        'O chão está vivo. Ele lhe contará segredos se você tiver paciência.'
      ],
      result: { 
        title: 'Fase 4 Concluída — O Historiador do Subsolo', 
        summary: 'Você conheceu Richard e aprendeu sobre a vida urbana vista de baixo, os impactos das construções e a resiliência dos pequenos. A jornada final aguarda...', 
        nextPhaseId: '5' 
      }
    },
    {
      id: 'final_perspectiva',
      title: 'Professores e Alunos',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Fico feliz. Somos todos professores e alunos.',
        'Vocês nos ensinam sobre o poder e a pressa.',
        'Nós lhes ensinamos sobre a paciência e a resiliência.'
      ],
      result: { 
        title: 'Fase 4 Concluída — O Historiador do Subsolo', 
        summary: 'Você conheceu Richard e aprendeu sobre a vida urbana vista de baixo, os impactos das construções e a resiliência dos pequenos. A jornada final aguarda...', 
        nextPhaseId: '5' 
      }
    },
    {
      id: 'final_cuidados',
      title: 'Cuidem do Nosso Teto',
      backgroundUrl: ponte,
      characterUrl: tatu,
      speaker: 'RICHARD',
      texts: [
        'Essa é uma promessa muito bonita.',
        'Saber disso me faz descansar mais tranquilo.',
        'Cuidem bem do nosso teto.'
      ],
      result: { 
        title: 'Fase 4 Concluída — O Historiador do Subsolo', 
        summary: 'Você conheceu Richard e aprendeu sobre a vida urbana vista de baixo, os impactos das construções e a resiliência dos pequenos. A jornada final aguarda...', 
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
        'O som não é um barulho, é uma presença física: o rugido de centenas de quedas d\'água despencando por paredões de rocha.',
        'Você está nas Cataratas do Iguaçu.',
        'Em uma poça calma, formada pela névoa de uma queda menor, um cágado de casco enrugado e pescoço listrado repousa sobre uma pedra lisa.',
        'Seus olhos, pequenos e antigos, observam você.'
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
        'Há muitas, muitas estações eu observo os dois grandes rios que passam por aqui: o rio de água, que sempre esteve, e o rio de gente, que nunca para de chegar.',
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
      title: 'Força do Rio',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Inacreditável, sim. É a força do rio se mostrando.',
        'Uma lembrança de que a natureza tem um poder que os humanos admiram, mas raramente compreendem em sua totalidade.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'oferendas' }
      ]
    },
    {
      id: 'resposta_rio_gente',
      title: 'Dois Rios',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'É o que eles me parecem. Um fluxo constante que chega, passa pelas passarelas como se fossem um leito de rio, e depois vai embora.',
        'A diferença é o que cada rio deixa para trás.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'oferendas' }
      ]
    },
    {
      id: 'resposta_barulho',
      title: 'Coração do Mundo',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Este barulho? Este é o coração do mundo batendo. É música.',
        'O barulho que me incomoda são os gritos agudos e os apitos que o rio de gente produz.',
        'São sons que não pertencem à harmonia do Trovão.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'oferendas' }
      ]
    },
    {
      id: 'resposta_velho',
      title: 'Dom da Observação',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Velho o suficiente para que meu casco tenha a mesma cor das rochas.',
        'Vi a mata ser mais densa e vi a cidade se aproximar.',
        'A longa vida me deu o dom da observação. E o que observo me preocupa.'
      ],
      choices: [
        { label: 'Continuar conversando', toScreenId: 'oferendas' }
      ]
    },
    {
      id: 'oferendas',
      title: 'As Oferendas que o Rio Não Aceita',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'NARRADOR',
      texts: [
        'Goioxim desliza suavemente da pedra para a água, movendo-se com uma graça inesperada.',
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
        'O rio de água, quando leva uma folha, a transforma em alimento para os peixes pequenos. Quando leva um galho, ele vira abrigo.',
        'Tudo o que o rio de água carrega, ele reaproveita.',
        'Mas o rio de gente deixa oferendas estranhas... cascas coloridas que não apodrecem, frutas de vidro que quebram e cortam, fios que prendem.',
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
      title: 'Mistério do Descarte',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        '"Lixo". É a palavra de vocês. Para mim, é um mistério.',
        'Por que carregar algo tão longe apenas para abandoná-lo?',
        'A natureza nos ensina a carregar apenas o essencial.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_cansada' }
      ]
    },
    {
      id: 'resposta_nada_desperdicado',
      title: 'O Grande Ciclo',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Esse é o grande ciclo. A sustentabilidade.',
        'Uma folha que cai serve de adubo. Um animal que morre alimenta a terra.',
        'Tudo tem um propósito e um lugar. O ciclo de vocês parece quebrado. Ele termina no "descarte".'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_cansada' }
      ]
    },
    {
      id: 'resposta_triste_poluicao',
      title: 'Pequenas Feridas',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'A beleza resiste. Mas são pequenas feridas que não cicatrizam.',
        'Uma a uma, elas podem adoecer o corpo inteiro.',
        'A poluição é a doença da falta de cuidado.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'agua_cansada' }
      ]
    },
    {
      id: 'resposta_mais_estranha',
      title: 'O Sapato Solitário',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Uma vez, um sapato. Apenas um. Fiquei imaginando a história do humano de um pé só que voltou para casa.',
        'Mas, falando sério, os piores são os pequenos plásticos.',
        'Eles se quebram em pedaços minúsculos e os peixes os comem, pensando que é comida.'
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
        'Eu vivo no fim do caminho. Toda a jornada do Rio Iguaçu termina aqui, antes de ele se entregar ao grande Rio Paraná.',
        'E esta água... ela chega com memória.',
        'Às vezes, ela chega com o gosto da poluição da cidade da capivara Mia.',
        'Às vezes, chega lenta e sem força, com a lembrança da parede de pedra que parou o peixe Yara.',
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
      title: 'Um Corpo Só',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Tudo. Como em seu corpo, uma dor no pé pode lhe dar dor de cabeça.',
        'Um rio é um corpo só. Não adianta limpar a sala se o quarto está sujo.',
        'Para as Cataratas estarem saudáveis, todo o rio precisa estar.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'verdadeira_lembranca' }
      ]
    },
    {
      id: 'resposta_poetico',
      title: 'Química e Memória',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Não é poesia, é química. É a falta de oxigênio, a presença de substâncias que não deveriam estar aqui.',
        'Mas eu prefiro chamar de memória. Ajuda a lembrar que a água é viva e sente o que lhe fazem.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'verdadeira_lembranca' }
      ]
    },
    {
      id: 'resposta_como_sente',
      title: 'O Diário do Rio',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'O tempo. Quando se vive tanto, aprende-se a notar as pequenas mudanças.',
        'O cheiro da névoa, a cor da espuma, os tipos de alga que crescem nas pedras.',
        'São as letras com as quais o rio escreve seu diário.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'verdadeira_lembranca' }
      ]
    },
    {
      id: 'resposta_termometro',
      title: 'Resultado da Jornada',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Exatamente. O Trovão D\'Água pode parecer forte e eterno, mas sua voz pode ficar rouca.',
        'A força da queda depende da saúde da água que chega.',
        'Somos o resultado de toda a jornada.'
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
        'Todos estão com celulares e câmeras, tentando capturar a imagem perfeita, o som perfeito.'
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
        'O rio de gente tem uma obsessão em capturar as coisas. Capturam a imagem, capturam o som.',
        'Às vezes, tentam capturar uma pedra, uma borboleta. Eles chamam de "lembrança".',
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
      title: 'Bagagem Que Não Pesa',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Exato. O sentimento da névoa no rosto. O tremor do chão sob os pés. O respeito por essa força.',
        'Essa é uma bagagem que não pesa e que ninguém pode tirar de você.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'passo_lento' }
      ]
    },
    {
      id: 'resposta_fotos',
      title: 'Semente Não É Árvore',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Sim, a imagem é uma semente. Pode despertar em outros a vontade de vir e de cuidar.',
        'Mas a semente não é a árvore. A imagem não é a experiência.',
        'É importante não confundir o mapa com o território.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'passo_lento' }
      ]
    },
    {
      id: 'resposta_roubar',
      title: 'Multiplicar o Gesto',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Sim. Uma única pedrinha parece inofensiva. Mas imagine se cada um do rio de gente levasse uma?',
        'Em pouco tempo, a praia inteira desapareceria.',
        'O cuidado está em multiplicar o gesto por todos.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'passo_lento' }
      ]
    },
    {
      id: 'resposta_deveriam_levar',
      title: 'Uma Promessa',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Uma promessa. A promessa de cuidar dos rios de suas próprias cidades.',
        'De usar menos "cascas que não apodrecem".',
        'Levem daqui a inspiração para serem melhores vizinhos da natureza onde quer que vivam.'
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
        'Ele personifica a paciência, em total contraste com a pressa dos visitantes que correm de um ponto de observação para outro.'
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
        'Eu me movo devagar. A vida me ensinou que não se perde nada por ir devagar. Na verdade, ganha-se tudo.',
        'O rio de gente corre. Tenta ver tudo em um dia, em poucas horas.',
        'Eles olham, mas não veem. Ouvem, mas não escutam.',
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
      title: 'Ritmo Antigo',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Eu entendo. Mas é por isso que lugares como este existem. Para lembrá-los de que existe outro ritmo.',
        'Um ritmo mais antigo e mais sábio.',
        'Visitar o Trovão D\'Água deveria ser como uma meditação, não uma corrida.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'caminho_mundo' }
      ]
    },
    {
      id: 'resposta_o_que_ve',
      title: 'Vida nos Detalhes',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Eu vejo o pequeno beija-flor que faz ninho atrás da cortina d\'água.',
        'Vejo o padrão que a espuma desenha na água. Vejo a forma como a luz do sol se quebra na névoa e forma o arco-íris.',
        'Detalhes. A vida é feita de detalhes.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'caminho_mundo' }
      ]
    },
    {
      id: 'resposta_fabula',
      title: 'Aproveitar o Caminho',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'A fábula é sábia. A lebre pode chegar primeiro, mas a tartaruga aproveitou o caminho.',
        'E no final, o que importa não é apenas chegar ao fim, mas como você viveu a jornada.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'caminho_mundo' }
      ]
    },
    {
      id: 'resposta_proprio_tempo',
      title: 'Tempo da Natureza',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Sim. O tempo da rocha. O tempo da água. O tempo da semente. Nenhum deles pode ser apressado.',
        'A sustentabilidade é o ato de aprender a respeitar o tempo da natureza e a dançar no ritmo dela.'
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
        'Essas trilhas de metal são curiosas. Elas protegem vocês da força do rio, e protegem o rio da pisada de milhares de pés. É um acordo.',
        'Mas elas também criam uma separação. O humano anda por cima, a natureza vive por baixo.',
        'O acordo só funciona se o humano se lembrar que a passarela não é o mundo todo. O mundo de verdade está para fora dela.'
      ],
      choices: [
        { label: 'As passarelas são necessárias para organizar a visitação.', toScreenId: 'resposta_necessarias' },
        { label: 'É verdade, ficamos confinados ao caminho e esquecemos da imensidão da floresta.', toScreenId: 'resposta_confinados' },
        { label: 'Elas são como veias em um corpo maior.', toScreenId: 'resposta_veias' },
        { label: 'O que acontece quando as pessoas saem do caminho?', toScreenId: 'resposta_saem_caminho' }
      ]
    },
    {
      id: 'resposta_necessarias',
      title: 'Rio Segue Seu Leito',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Sim, a organização é uma forma de cuidado. Como o rio que segue seu leito.',
        'O problema é quando se pensa que o leito é a única parte importante do rio, esquecendo das margens.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pequenos_gigantes' }
      ]
    },
    {
      id: 'resposta_confinados',
      title: 'Janela, Não Casa',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Exato. A passarela é uma janela, não a casa inteira.',
        'Usem a janela para se maravilhar com o jardim, mas não pensem que o jardim se resume ao que vocês veem através dela.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pequenos_gigantes' }
      ]
    },
    {
      id: 'resposta_veias',
      title: 'Veias que Levam Vida',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Gostei da imagem. E veias precisam levar vida, e não tirar.',
        'Que o caminho de vocês sempre leve respeito para a natureza, e traga de volta a admiração.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'pequenos_gigantes' }
      ]
    },
    {
      id: 'resposta_saem_caminho',
      title: 'Quebra de Confiança',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Elas amassam plantas pequenas, assustam ninhos, deixam cheiros que confundem os animais.',
        'Elas quebram o acordo. Cada passo fora da trilha é uma pequena quebra de confiança com a natureza.'
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
        'Um bando de andorinhões-de-cascata, pássaros que fazem seus ninhos atrás das cortinas d\'água, mergulha em alta velocidade, cruzando o ar pesado de névoa.'
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
        'Olhe para eles. Pequenos e frágeis. Mas eles têm a coragem de viver no coração do Trovão.',
        'Eles nos ensinam que não é preciso ser grande para ser forte.',
        'Cada ser tem seu papel. O andorinhão, o quati, o tatu... e vocês, os humanos.',
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
      title: 'Não Dono, Guardião',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Guardiões. Gosto disso.',
        'Um guardião não é um dono. É alguém que cuida de algo precioso para que as futuras gerações também possam apreciá-lo.',
        'Sim, é um bom papel.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'licao_agua' }
      ]
    },
    {
      id: 'resposta_responsabilidade',
      title: 'Poder e Sabedoria',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'A mais pura verdade. Vocês podem construir paredes de concreto e passarelas de metal. Nenhum outro animal pode.',
        'Esse poder exige uma sabedoria que vocês ainda estão aprendendo a ter.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'licao_agua' }
      ]
    },
    {
      id: 'resposta_desequilibrar',
      title: 'Honestidade é o Primeiro Passo',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Essa é uma observação honesta. E a honestidade é o primeiro passo para a mudança.',
        'Reconhecer o desequilíbrio é o que lhes dá a chance de buscar a harmonia novamente.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'licao_agua' }
      ]
    },
    {
      id: 'resposta_pertencer',
      title: 'Vocês São Natureza',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Talvez seja essa a maior de todas as sabedorias.',
        'Entender que vocês não são visitantes na natureza, ou donos dela. Vocês são natureza.',
        'Aprender a pertencer é aprender a cuidar de si mesmo.'
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
        'A água que espirra de uma pequena queda lava o casco de Goioxim, que fecha os olhos por um momento, como se apreciasse a sensação.'
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
        'A sustentabilidade é como a água. Não é sobre a força bruta, mas sobre a persistência inteligente.',
        'Sobre encontrar o caminho que flui com a vida, não contra ela.',
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
      title: 'Passagem Sem Cicatrizes',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Sim. Um rastro suave, que a próxima chuva possa apagar.',
        'Viver de forma que sua passagem não deixe cicatrizes.',
        'É um belo objetivo.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'vento_leva' }
      ]
    },
    {
      id: 'resposta_adaptar',
      title: 'Lei da Adaptação',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Adaptar-se. É a lição de todas as espécies que sobrevivem.',
        'O mundo não se adapta a você; você se adapta ao mundo.',
        'Vocês, humanos, tentaram inverter essa lei. A natureza está apenas lhes mostrando os resultados.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'vento_leva' }
      ]
    },
    {
      id: 'resposta_paciente',
      title: 'Cada Gota Conta',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Paciência e persistência. Sim. Não desanimar porque a mudança é lenta.',
        'Cada gota conta para encher o pote. Cada gesto sustentável conta para curar o mundo.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'vento_leva' }
      ]
    },
    {
      id: 'resposta_pensar',
      title: 'Reflexão Precede Ação',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'E isso já é uma ótima resposta. A reflexão precede a ação.',
        'A água passa muito tempo formando uma nuvem antes de se tornar chuva.',
        'Leve o tempo que precisar.'
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
        'Uma brisa mais forte sopra através das quedas, carregando a névoa densa sobre a floresta e sobre você.',
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
        'O vento que nos molha com a névoa é o mesmo que leva as sementes para a floresta e que leva o som do Trovão para longe.',
        'Tudo está conectado.',
        'O que você faz aqui, hoje, o vento pode levar como uma mensagem para o resto do mundo.',
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
      title: 'Boas Sementes',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Esperança e mudança. São boas sementes.',
        'Que o vento as plante em corações férteis.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'proxima_gota' }
      ]
    },
    {
      id: 'resposta_tempo',
      title: 'O Agora é Sempre',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'O tempo é como o leito de um rio. Sempre há um agora.',
        'E o agora é sempre a hora certa para começar a fazer o certo.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'proxima_gota' }
      ]
    },
    {
      id: 'resposta_beleza',
      title: 'Valor da Existência',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Sim. Que esta beleza não seja vista como um recurso a ser consumido, mas como um tesouro a ser guardado.',
        'O maior valor dela está em sua existência.'
      ],
      choices: [
        { label: 'Continuar', toScreenId: 'proxima_gota' }
      ]
    },
    {
      id: 'resposta_aprendeu_ouvir',
      title: 'Silêncio da Escuta',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Essa... é a melhor de todas as mensagens.',
        'Se um humano aprendeu a ouvir, talvez outros também possam.',
        'O silêncio da escuta é o começo de toda a sabedoria.'
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
        'O sol começa a se pôr, pintando a névoa com tons de laranja e rosa.',
        'O dia de visitação está terminando.',
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
        'Cada gota que cai aqui hoje, amanhã estará mais perto do mar. Ela continuará sua jornada.',
        'A minha jornada é aqui, observando os ciclos.',
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
      title: 'Cada Gota Economizada',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Bom. Lembre-se que cada gota economizada em sua casa é uma gota que pode ajudar a manter o Trovão rugindo.'
      ],
      result: { 
        title: 'Jornada Completa — O Ciclo do Trovão D\'Água', 
        summary: 'Você completou toda a jornada pelo Rio Iguaçu, da nascente às Cataratas. Conheceu cinco guardiões que compartilharam suas histórias e sabedoria. Agora, a responsabilidade está em suas mãos. Cada escolha importa. Cada gota conta.', 
        nextPhaseId: undefined 
      }
    },
    {
      id: 'final_limpo',
      title: 'Limpar o Caminho',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Uma promessa nobre. Seja não jogando lixo na rua, seja escolhendo produtos que não poluam.',
        'Há muitas formas de limpar o caminho.'
      ],
      result: { 
        title: 'Jornada Completa — O Ciclo do Trovão D\'Água', 
        summary: 'Você completou toda a jornada pelo Rio Iguaçu, da nascente às Cataratas. Conheceu cinco guardiões que compartilharam suas histórias e sabedoria. Agora, a responsabilidade está em suas mãos. Cada escolha importa. Cada gota conta.', 
        nextPhaseId: undefined 
      }
    },
    {
      id: 'final_jornada',
      title: 'Cuidar do Todo',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Essa é a grande sabedoria. Da nascente à foz, tudo é um só.',
        'Ao cuidar de qualquer parte, você cuida do todo.',
        'Obrigado.'
      ],
      result: { 
        title: 'Jornada Completa — O Ciclo do Trovão D\'Água', 
        summary: 'Você completou toda a jornada pelo Rio Iguaçu, da nascente às Cataratas. Conheceu cinco guardiões que compartilharam suas histórias e sabedoria. Agora, a responsabilidade está em suas mãos. Cada escolha importa. Cada gota conta.', 
        nextPhaseId: undefined 
      }
    },
    {
      id: 'final_historia',
      title: 'A Voz Ecoa',
      backgroundUrl: cataratas,
      characterUrl: tartaruga,
      speaker: 'GOIOXIM',
      texts: [
        'Então a gota levará sua voz consigo. E a minha voz ecoará através da sua.',
        'É assim que a mudança viaja.',
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