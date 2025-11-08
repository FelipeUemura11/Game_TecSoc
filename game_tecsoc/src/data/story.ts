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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'É um lugar incrivelmente pacífico.', toScreenId: 'sombra_na_agua' },
        { label: 'Nunca imaginei que a origem de um rio tão grande fosse assim.', toScreenId: 'sombra_na_agua' },
        { label: 'Essa árvore onde você está é linda!', toScreenId: 'sombra_na_agua' },
        { label: 'Sim, e você o torna ainda mais bonito!', toScreenId: 'sombra_na_agua' }
      ]
    },
    // Telas 'resposta_pacifico', 'resposta_origem', 'resposta_arvore', 'resposta_elogio' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Por que você se sentiria sozinha em um lugar tão cheio de vida?', toScreenId: 'palavra_assustadora' },
        { label: 'É uma cor linda. Deveria ter orgulho.', toScreenId: 'palavra_assustadora' },
        { label: 'O que quer dizer com "por quanto tempo"?', toScreenId: 'palavra_assustadora' },
        { label: 'Tem algo te preocupando, Rubi?', toScreenId: 'palavra_assustadora' }
      ]
    },
    // Telas 'resposta_vida', 'resposta_orgulho', 'resposta_tempo', 'resposta_preocupacao' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Sim, é um conceito terrível.', toScreenId: 'ninhos_vazios' },
        { label: 'Já ouvi falar, mas nunca pensei muito sobre isso.', toScreenId: 'ninhos_vazios' },
        { label: 'Não exatamente. O que causa isso?', toScreenId: 'ninhos_vazios' },
        { label: 'Deve ser muito assustador pensar nisso.', toScreenId: 'ninhos_vazios' }
      ]
    },
    // Telas 'resposta_terrivel', 'resposta_nunca_pensou', 'resposta_causas', 'resposta_assustador' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Que triste ver tantos lares abandonados.', toScreenId: 'barulho_distante' },
        { label: 'O que aconteceu com as outras araras?', toScreenId: 'barulho_distante' },
        { label: 'Você não tem sua própria família?', toScreenId: 'barulho_distante' },
        { label: 'Talvez eles apenas tenham se mudado.', toScreenId: 'barulho_distante' }
      ]
    },
    // Telas 'resposta_triste', 'resposta_aconteceu', 'resposta_familia', 'resposta_mudaram' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Nem todos os humanos são assim.', toScreenId: 'luz_esperanca' },
        { label: 'Eu sinto muito, Rubi. Às vezes não pensamos nas consequências.', toScreenId: 'luz_esperanca' },
        { label: 'Deve ser assustador viver com esse medo constante.', toScreenId: 'luz_esperanca' },
        { label: 'O que exatamente vocês perdem quando uma árvore é derrubada?', toScreenId: 'luz_esperanca' }
      ]
    },
    // Telas 'resposta_nem_todos', 'resposta_desculpas', 'resposta_medo_constante', 'resposta_perdem' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Acho que sei de quem você está falando. São pesquisadores!', toScreenId: 'papel_rio' },
        { label: 'Eles não te dão medo?', toScreenId: 'papel_rio' },
        { label: 'O que você acha que eles querem?', toScreenId: 'papel_rio' },
        { label: 'Isso é bom! É um sinal de que alguns se importam.', toScreenId: 'papel_rio' }
      ]
    },
    // Telas 'resposta_pesquisadores', 'resposta_medo_pesquisadores', 'resposta_querem', 'resposta_importam' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'A saúde da água é a saúde da terra.', toScreenId: 'pergunta_direta' },
        { label: 'Então, cuidar dos rios é uma forma de proteger os animais?', toScreenId: 'pergunta_direta' },
        { label: 'É uma grande responsabilidade para um pequeno riacho.', toScreenId: 'pergunta_direta' },
        { label: 'A poluição também é um grande perigo.', toScreenId: 'pergunta_direta' }
      ]
    },
    // Telas 'resposta_saude_agua', 'resposta_cuidar_rios', 'resposta_responsabilidade', 'resposta_poluicao' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Plantar mais árvores, para que vocês tenham comida e lar.', toScreenId: 'som_esperanca' },
        { label: 'Criar leis mais duras contra o desmatamento e o tráfico de animais.', toScreenId: 'som_esperanca' },
        { label: 'Ensinar outras pessoas, especialmente as crianças, sobre a importância de vocês.', toScreenId: 'som_esperanca' },
        { label: 'Apoiar os "pesquisadores" e os projetos que protegem a floresta.', toScreenId: 'som_esperanca' }
      ]
    },
    // Telas 'resposta_plantar', 'resposta_leis', 'resposta_ensinar', 'resposta_apoiar' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Que notícia maravilhosa, Rubi!', toScreenId: 'promessa' },
        { label: 'Vá encontrá-lo!', toScreenId: 'promessa' },
        { label: 'Fico tão feliz por você!', toScreenId: 'promessa' },
        { label: 'A esperança nunca deve ser perdida.', toScreenId: 'promessa' }
      ]
    },
    // Telas 'resposta_maravilhosa', 'resposta_va', 'resposta_feliz', 'resposta_esperanca_nunca' REMOVIDAS
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
        // Todas as escolhas levam para uma tela final consolidada
        { label: 'Eu prometo que vou me lembrar, Rubi.', toScreenId: 'final_consolidado' },
        { label: 'Vou aprender mais sobre como ajudar.', toScreenId: 'final_consolidado' },
        { label: 'Sua história me inspirou. Vou contar para outras pessoas.', toScreenId: 'final_consolidado' },
        { label: 'Você não está sozinha. Nós nos importamos.', toScreenId: 'final_consolidado' }
      ]
    },
    // Telas 'final_lembrar', 'final_aprender', 'final_contar', 'final_importar' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Prazer em conhecer, Mia. É um lugar bem tranquilo.', toScreenId: 'flores_nao_murcham' },
        { label: '"Memória do rio"? O que é isso?', toScreenId: 'flores_nao_murcham' },
        { label: 'Você parece gostar muito de água.', toScreenId: 'flores_nao_murcham' },
        { label: 'Então o Rio Iguaçu é diferente daqui?', toScreenId: 'flores_nao_murcham' }
      ]
    },
    // Telas 'resposta_tranquilo', 'resposta_memoria', 'resposta_agua', 'resposta_diferente' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Que tipo de flores são essas?', toScreenId: 'agua_gosto_estranho' },
        { label: 'Elas não são flores de verdade, são?', toScreenId: 'agua_gosto_estranho' },
        { label: 'Isso não parece algo bom.', toScreenId: 'agua_gosto_estranho' },
        { label: 'Por que os peixes não chegam perto?', toScreenId: 'agua_gosto_estranho' }
      ]
    },
    // Telas 'resposta_tipo_flores', 'resposta_nao_flores', 'resposta_nao_bom', 'resposta_peixes_longe' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Você está falando de poluição química?', toScreenId: 'silencio_peixes' },
        { label: 'Como assim, "gosto diferente"?', toScreenId: 'silencio_peixes' },
        { label: 'Isso deve ser muito perigoso para vocês.', toScreenId: 'silencio_peixes' },
        { label: 'E de onde vem essa "chuva estranha"?', toScreenId: 'silencio_peixes' }
      ]
    },
    // Telas 'resposta_quimica', 'resposta_gosto', 'resposta_perigoso', 'resposta_origem_chuva' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Um problema afeta todos os outros, então.', toScreenId: 'historias_cristal' },
        { label: 'Vocês, capivaras, comem peixes?', toScreenId: 'historias_cristal' },
        { label: 'É triste pensar no rio ficando mais vazio.', toScreenId: 'historias_cristal' },
        { label: 'Ninguém faz nada para limpar o rio?', toScreenId: 'historias_cristal' }
      ]
    },
    // Telas 'resposta_teia', 'resposta_comem_peixes', 'resposta_triste_vazio', 'resposta_limpar' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'É difícil imaginar um rio tão limpo perto de uma cidade grande.', toScreenId: 'origem_problema' },
        { label: 'Essa deve ser uma memória muito preciosa para sua família.', toScreenId: 'origem_problema' },
        { label: 'O que você acha que mudou tão rápido?', toScreenId: 'origem_problema' },
        { label: 'Você gostaria de ter conhecido o rio assim?', toScreenId: 'origem_problema' }
      ]
    },
    // Telas 'resposta_cidade', 'resposta_preciosa', 'resposta_mudou', 'resposta_gostaria' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Acho que muitas pessoas esquecem que o esgoto e o lixo vão para algum lugar.', toScreenId: 'refugio_agridoce' },
        { label: 'Não é por maldade. Acho que é falta de atenção.', toScreenId: 'refugio_agridoce' },
        { label: 'É mais fácil jogar fora do que cuidar.', toScreenId: 'refugio_agridoce' },
        { label: 'É uma pergunta muito importante, Mia.', toScreenId: 'refugio_agridoce' }
      ]
    },
    // Telas 'resposta_algum_lugar', 'resposta_atencao', 'resposta_facil', 'resposta_importante' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Eu entendo seu sentimento. É uma segurança com um preço.', toScreenId: 'grande_duvida' },
        { label: 'Pelo menos aqui sua espécie está protegida.', toScreenId: 'grande_duvida' },
        { label: 'Isso mostra o quanto as coisas pioraram lá fora.', toScreenId: 'grande_duvida' },
        { label: 'Você preferiria viver no rio, mesmo com os perigos?', toScreenId: 'grande_duvida' }
      ]
    },
    // Telas 'resposta_preco', 'resposta_protegida', 'resposta_pioraram', 'resposta_preferiria' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Separar o lixo para que ele possa ser reutilizado.', toScreenId: 'rio_que_une' },
        { label: 'Usar menos plástico, como sacolas e garrafas.', toScreenId: 'rio_que_une' },
        { label: 'Nunca jogar lixo no chão, sempre no lugar certo.', toScreenId: 'rio_que_une' },
        { label: 'Não jogar óleo de cozinha ou produtos químicos na pia.', toScreenId: 'rio_que_une' }
      ]
    },
    // Telas 'resposta_separar', 'resposta_usar_menos', 'resposta_lugar_certo', 'resposta_oleo' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Uma mensagem de cuidado e respeito.', toScreenId: 'pedido_calmo' },
        { label: 'Você me fez pensar em algo que eu nunca tinha parado para refletir.', toScreenId: 'pedido_calmo' },
        { label: 'Que somos parte da mesma natureza que ele.', toScreenId: 'pedido_calmo' },
        { label: 'Que estamos tentando consertar nossos erros.', toScreenId: 'pedido_calmo' }
      ]
    },
    // Telas 'resposta_cuidado', 'resposta_reflexao', 'resposta_parte', 'resposta_consertar' REMOVIDAS
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
        // Todas as escolhas levam para uma tela final consolidada
        { label: 'Pode deixar, Mia. Eu levarei.', toScreenId: 'final_consolidado' },
        { label: 'Sua história mudou a forma como eu vejo os rios.', toScreenId: 'final_consolidado' },
        { label: 'Vou fazer minha parte, eu prometo.', toScreenId: 'final_consolidado' },
        { label: 'Obrigado por compartilhar sua sabedoria, Mia.', toScreenId: 'final_consolidado' }
      ]
    },
    // Telas 'final_levarei', 'final_mudou', 'final_prometo', 'final_sabedoria' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Olá, Yara. Você é um peixe impressionante!', toScreenId: 'parede_impede' },
        { label: 'O que quer dizer com "o que restou dele"?', toScreenId: 'parede_impede' },
        { label: 'Por que não é liberdade? Parece um lugar enorme.', toScreenId: 'parede_impede' },
        { label: 'É um mundo muito silencioso aqui embaixo.', toScreenId: 'parede_impede' }
      ]
    },
    // Telas 'resposta_impressionante', 'resposta_restou', 'resposta_liberdade', 'resposta_silencioso' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Deve ser frustrante bater contra uma parede o tempo todo.', toScreenId: 'danca_interrompida' },
        { label: 'Por que os humanos construíram isso?', toScreenId: 'danca_interrompida' },
        { label: 'E o que existe do outro lado?', toScreenId: 'danca_interrompida' },
        { label: 'Não há mesmo nenhuma forma de atravessar?', toScreenId: 'danca_interrompida' }
      ]
    },
    // Telas 'resposta_frustrante', 'resposta_porque', 'resposta_outro_lado', 'resposta_atravessar' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'O que acontece se vocês não conseguem subir o rio?', toScreenId: 'agua_preguicosa' },
        { label: 'Piracema... é uma palavra bonita para uma jornada tão importante.', toScreenId: 'agua_preguicosa' },
        { label: 'Então a barragem impede a reprodução de vocês?', toScreenId: 'agua_preguicosa' },
        { label: 'Todos os peixes fazem essa viagem?', toScreenId: 'agua_preguicosa' }
      ]
    },
    // Telas 'resposta_nao_sobem', 'resposta_palavra_bonita', 'resposta_reproducao', 'resposta_todos' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'A represa mudou a personalidade do rio.', toScreenId: 'canoas_sem_remo' },
        { label: 'Isso afeta a sua respiração?', toScreenId: 'canoas_sem_remo' },
        { label: 'E a comida? Também mudou?', toScreenId: 'canoas_sem_remo' },
        { label: 'Então não é só uma barreira, é uma mudança completa no ambiente.', toScreenId: 'canoas_sem_remo' }
      ]
    },
    // Telas 'resposta_personalidade', 'resposta_respiracao', 'resposta_comida', 'resposta_mudanca_completa' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Você quer dizer as linhas de pesca?', toScreenId: 'familias_divididas' },
        { label: 'O barulho deve ser ensurdecedor aqui embaixo.', toScreenId: 'familias_divididas' },
        { label: 'É triste que a diversão de alguns seja o perigo de outros.', toScreenId: 'familias_divididas' },
        { label: 'Vocês aprenderam a desviar desses perigos?', toScreenId: 'familias_divididas' }
      ]
    },
    // Telas 'resposta_linhas', 'resposta_barulho', 'resposta_triste_diversao', 'resposta_desviar' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Nunca tinha pensado nesse aspecto, na separação das populações.', toScreenId: 'escada_estranha' },
        { label: 'É uma ideia muito solitária.', toScreenId: 'escada_estranha' },
        { label: 'Talvez a "escada" que você mencionou ajude nisso.', toScreenId: 'escada_estranha' },
        { label: 'A natureza não conhece fronteiras, mas os humanos são bons em criá-las.', toScreenId: 'escada_estranha' }
      ]
    },
    // Telas 'resposta_separacao', 'resposta_solitaria', 'resposta_escada_ajude', 'resposta_fronteiras' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Pelo menos é uma tentativa de ajudar.', toScreenId: 'luz_sombra' },
        { label: 'Funciona? Muitos peixes conseguem passar?', toScreenId: 'luz_sombra' },
        { label: 'Parece muito artificial em comparação com um rio.', toScreenId: 'luz_sombra' },
        { label: 'Por que você não a usa?', toScreenId: 'luz_sombra' }
      ]
    },
    // Telas 'resposta_tentativa', 'resposta_funciona', 'resposta_artificial', 'resposta_nao_usa' REMOVIDAS
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
        'Tudo isso... toda essa mudança... para que as luzes da cidade de vocês se acendam à noite.',
        'Eu entendo que vocês precisam de energia.',
        'Mas essa "luz" de vocês vale a sombra que ela lança sobre o rio?',
        'Vale o silêncio da nossa dança?'
      ],
      choices: [
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'É uma pergunta difícil. A maioria das pessoas nem pensa nesse dilema.', toScreenId: 'cardume_esperanca' },
        { label: 'Acho que precisamos encontrar outras formas de gerar energia.', toScreenId: 'cardume_esperanca' },
        { label: 'Visto daqui de baixo, o preço parece alto demais.', toScreenId: 'cardume_esperanca' },
        { label: 'O que você gostaria que os humanos entendessem?', toScreenId: 'cardume_esperanca' }
      ]
    },
    // Telas 'resposta_dilema', 'resposta_outras_formas', 'resposta_preco_alto', 'resposta_entendessem' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'A natureza é incrivelmente resiliente.', toScreenId: 'mergulho_final' },
        { label: 'Essa é uma visão muito poderosa, Yara.', toScreenId: 'mergulho_final' },
        { label: 'Essa resistência é a maior esperança que vocês têm.', toScreenId: 'mergulho_final' },
        { label: 'O que lhes dá forças para continuar?', toScreenId: 'mergulho_final' }
      ]
    },
    // Telas 'resposta_resiliente', 'resposta_poderosa', 'resposta_resistencia', 'resposta_forcas' REMOVIDAS
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
        // Todas as escolhas levam para uma tela final consolidada
        { label: 'Eu não vou esquecer, Yara. Prometo.', toScreenId: 'final_consolidado' },
        { label: 'Sua história me deu muito o que pensar sobre o progresso.', toScreenId: 'final_consolidado' },
        { label: 'Boa sorte na sua jornada. Continue lutando.', toScreenId: 'final_consolidado' },
        { label: 'Seja a voz do rio. Eu ajudarei a ecoá-la.', toScreenId: 'final_consolidado' }
      ]
    },
    // Telas 'final_prometo', 'final_progresso', 'final_luta', 'final_voz' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Prazer, Richard. Não quis assustá-lo.', toScreenId: 'rio_zangado' },
        { label: 'O que a terra conta para você?', toScreenId: 'rio_zangado' },
        { label: 'É um lugar interessante para se morar.', toScreenId: 'rio_zangado' },
        { label: 'Um tatu-galinha! Que animal incrível.', toScreenId: 'rio_zangado' }
      ]
    },
    // Telas 'resposta_assustar', 'resposta_terra_conta', 'resposta_interessante', 'resposta_incrivel' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Você está falando de uma grande inundação?', toScreenId: 'margens_parede' },
        { label: 'O rio quis mostrar seu poder, então.', toScreenId: 'margens_parede' },
        { label: 'Isso deve ter sido aterrorizante para os animais da época.', toScreenId: 'margens_parede' },
        { label: 'E essas marcas ainda estão aqui, debaixo dos nossos pés?', toScreenId: 'margens_parede' }
      ]
    },
    // Telas 'resposta_inundacao', 'resposta_poder', 'resposta_aterrorizante', 'resposta_marcas' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Eles fizeram isso para proteger a cidade, eu imagino.', toScreenId: 'tesouros_nao_alimentam' },
        { label: 'Então você perdeu sua casa por causa disso?', toScreenId: 'tesouros_nao_alimentam' },
        { label: 'A margem de um rio é um lugar cheio de vida, não é?', toScreenId: 'tesouros_nao_alimentam' },
        { label: 'O concreto parece tão fora de lugar aqui.', toScreenId: 'tesouros_nao_alimentam' }
      ]
    },
    // Telas 'resposta_proteger', 'resposta_perdeu_casa', 'resposta_margem_vida', 'resposta_fora_lugar' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'É triste pensar que o lixo que jogamos fora fica enterrado por tanto tempo.', toScreenId: 'monstro_ruge' },
        { label: 'Você já se machucou com alguma dessas coisas?', toScreenId: 'monstro_ruge' },
        { label: 'O solo se tornou um arquivo da nossa poluição.', toScreenId: 'monstro_ruge' },
        { label: 'É como se vocês tivessem que garimpar pela comida.', toScreenId: 'monstro_ruge' }
      ]
    },
    // Telas 'resposta_enterrado', 'resposta_machucou', 'resposta_arquivo', 'resposta_garimpar' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'A poluição sonora e luminosa é um problema que nem notamos.', toScreenId: 'ponte_testemunha' },
        { label: 'O progresso humano muitas vezes ignora a vida selvagem.', toScreenId: 'ponte_testemunha' },
        { label: 'Deve ser muito estressante viver com esse barulho constante.', toScreenId: 'ponte_testemunha' },
        { label: 'As estradas são como rios perigosos para vocês.', toScreenId: 'ponte_testemunha' }
      ]
    },
    // Telas 'resposta_poluicao_sonora', 'resposta_progresso', 'resposta_estressante', 'resposta_estradas' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Talvez ela pedisse mais cuidado com o rio que passa sob ela.', toScreenId: 'vida_espacos_sobrantes' },
        { label: 'Ela contaria histórias de todos que já a atravessaram.', toScreenId: 'vida_espacos_sobrantes' },
        { label: 'Acho que ela diria que viu coisas demais.', toScreenId: 'vida_espacos_sobrantes' },
        { label: 'Talvez ela se sentisse orgulhosa e cansada ao mesmo tempo.', toScreenId: 'vida_espacos_sobrantes' }
      ]
    },
    // Telas 'resposta_cuidado_rio', 'resposta_historias', 'resposta_viu_demais', 'resposta_orgulhosa_cansada' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Acho que a maioria não faz a menor ideia.', toScreenId: 'sabedoria_pequeno' },
        { label: 'Algumas pessoas sim, as que prestam mais atenção.', toScreenId: 'sabedoria_pequeno' },
        { label: 'É impressionante como a vida encontra um caminho.', toScreenId: 'sabedoria_pequeno' },
        { label: 'Talvez se vocês fossem mais vistos, seriam mais respeitados.', toScreenId: 'sabedoria_pequeno' }
      ]
    },
    // Telas 'resposta_nao_ideia', 'resposta_algumas_pessoas', 'resposta_impressionante_vida', 'resposta_mais_vistos' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Você mantém o solo saudável. Isso já é uma grande coisa.', toScreenId: 'cheiro_chuva' },
        { label: 'Talvez o seu papel seja ser uma testemunha, um guardião da história.', toScreenId: 'cheiro_chuva' },
        { label: 'Muitos pequenos juntos podem fazer uma grande mudança.', toScreenId: 'cheiro_chuva' },
        { label: 'Você sobrevive. E isso, por si só, é um ato de resistência.', toScreenId: 'cheiro_chuva' }
      ]
    },
    // Telas 'resposta_solo_saudavel', 'resposta_testemunha', 'resposta_juntos', 'resposta_sobrevive' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'É o ciclo da natureza sendo usado para espalhar a sujeira humana.', toScreenId: 'amanhecer_retirada' },
        { label: 'Então, para o rio, a chuva se tornou um problema?', toScreenId: 'amanhecer_retirada' },
        { label: 'Tudo está conectado, não é? A cidade, o rio, o ar...', toScreenId: 'amanhecer_retirada' },
        { label: 'Existe algo que se possa fazer para a chuva voltar a ser só... chuva?', toScreenId: 'amanhecer_retirada' }
      ]
    },
    // Telas 'resposta_ciclo', 'resposta_problema_chuva', 'resposta_conectado', 'resposta_solucao_chuva' REMOVIDAS
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
        // Todas as escolhas levam para uma tela final consolidada
        { label: 'Obrigado por compartilhar suas histórias, Richard.', toScreenId: 'final_consolidado' },
        { label: 'Eu vou prestar mais atenção ao chão sob meus pés.', toScreenId: 'final_consolidado' },
        { label: 'Sua perspectiva me ensinou muito.', toScreenId: 'final_consolidado' },
        { label: 'Tenha um bom descanso. O mundo aqui de cima fica aos nossos cuidados.', toScreenId: 'final_consolidado' }
      ]
    },
    // Telas 'final_historias', 'final_atencao', 'final_perspectiva', 'final_cuidados' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Olá, Goioxim. Que lugar inacreditável.', toScreenId: 'oferendas' },
        { label: '"Rio de gente"? É uma forma interessante de descrever os turistas.', toScreenId: 'oferendas' },
        { label: 'Você não se cansa de todo esse barulho?', toScreenId: 'oferendas' },
        { label: 'Você deve ser muito velho para ter visto tantas estações.', toScreenId: 'oferendas' }
      ]
    },
    // Telas 'resposta_inacreditavel', 'resposta_rio_gente', 'resposta_barulho', 'resposta_velho' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Você quer dizer o lixo que as pessoas deixam para trás.', toScreenId: 'agua_cansada' },
        { label: 'É incrível como na natureza nada é desperdiçado.', toScreenId: 'agua_cansada' },
        { label: 'Deve ser triste ver um lugar tão bonito ser poluído assim.', toScreenId: 'agua_cansada' },
        { label: 'Qual foi a coisa mais estranha que você já viu aqui?', toScreenId: 'agua_cansada' }
      ]
    },
    // Telas 'resposta_lixo', 'resposta_nada_desperdicado', 'resposta_triste_poluicao', 'resposta_mais_estranha' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Então tudo o que acontece rio acima, afeta vocês aqui?', toScreenId: 'verdadeira_lembranca' },
        { label: 'É poético pensar que a água carrega memórias.', toScreenId: 'verdadeira_lembranca' },
        { label: 'Como você consegue sentir essas diferenças?', toScreenId: 'verdadeira_lembranca' },
        { label: 'Isso faz deste lugar um grande termômetro da saúde do rio.', toScreenId: 'verdadeira_lembranca' }
      ]
    },
    // Telas 'resposta_tudo_afeta', 'resposta_poetico', 'resposta_como_sente', 'resposta_termometro' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'A melhor lembrança é a experiência de estar aqui.', toScreenId: 'passo_lento' },
        { label: 'Mas as fotos nos ajudam a lembrar e a mostrar essa beleza para outros.', toScreenId: 'passo_lento' },
        { label: 'É verdade, tirar algo de um lugar é como roubar um pedaço dele.', toScreenId: 'passo_lento' },
        { label: 'O que você acha que as pessoas deveriam levar daqui?', toScreenId: 'passo_lento' }
      ]
    },
    // Telas 'resposta_experiencia', 'resposta_fotos', 'resposta_roubar', 'resposta_deveriam_levar' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Vivemos em um mundo muito acelerado. É difícil ir devagar.', toScreenId: 'caminho_mundo' },
        { label: 'O que você vê, que nós não vemos em nossa pressa?', toScreenId: 'caminho_mundo' },
        { label: 'A tartaruga vence a lebre, como na fábula.', toScreenId: 'caminho_mundo' },
        { label: 'É uma boa lição. A natureza tem seu próprio tempo.', toScreenId: 'caminho_mundo' }
      ]
    },
    // Telas 'resposta_acelerado', 'resposta_o_que_ve', 'resposta_fabula', 'resposta_proprio_tempo' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'As passarelas são necessárias para organizar a visitação.', toScreenId: 'pequenos_gigantes' },
        { label: 'É verdade, ficamos confinados ao caminho.', toScreenId: 'pequenos_gigantes' },
        { label: 'Elas são como veias em um corpo maior.', toScreenId: 'pequenos_gigantes' },
        { label: 'O que acontece quando as pessoas saem do caminho?', toScreenId: 'pequenos_gigantes' }
      ]
    },
    // Telas 'resposta_necessarias', 'resposta_confinados', 'resposta_veias', 'resposta_saem_caminho' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Acho que nosso papel deveria ser o de guardiões.', toScreenId: 'licao_agua' },
        { label: 'Com o poder que temos, vem uma grande responsabilidade.', toScreenId: 'licao_agua' },
        { label: 'No momento, parece que nosso papel é o de desequilibrar as coisas.', toScreenId: 'licao_agua' },
        { label: 'Eu não tenho certeza. Talvez seja aprender a pertencer.', toScreenId: 'licao_agua' }
      ]
    },
    // Telas 'resposta_guardioes', 'resposta_responsabilidade', 'resposta_desequilibrar', 'resposta_pertencer' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Consumindo menos, deixando um rastro mais suave.', toScreenId: 'vento_leva' },
        { label: 'Adaptando minhas necessidades ao que o planeta pode oferecer.', toScreenId: 'vento_leva' },
        { label: 'Sendo mais paciente e persistente nas minhas ações.', toScreenId: 'vento_leva' },
        { label: 'É uma pergunta profunda. Preciso pensar sobre isso.', toScreenId: 'vento_leva' }
      ]
    },
    // Telas 'resposta_rastro_suave', 'resposta_adaptar', 'resposta_paciente', 'resposta_pensar' REMOVIDAS
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
        // Todas as escolhas pulam as reações e vão direto para a próxima cena
        { label: 'Uma mensagem de esperança e de mudança.', toScreenId: 'proxima_gota' },
        { label: 'Que ainda há tempo de consertar nossos erros.', toScreenId: 'proxima_gota' },
        { label: 'Que a beleza deste lugar vale qualquer esforço para protegê-lo.', toScreenId: 'proxima_gota' },
        { label: 'Que um humano esteve aqui e aprendeu a ouvir.', toScreenId: 'proxima_gota' }
      ]
    },
    // Telas 'resposta_esperanca', 'resposta_tempo', 'resposta_beleza', 'resposta_aprendeu_ouvir' REMOVIDAS
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
        // Todas as escolhas levam para uma tela final consolidada
        { label: 'Prometo pensar nela antes de desperdiçar água.', toScreenId: 'final_consolidado' },
        { label: 'Prometo ajudar a manter seu caminho limpo.', toScreenId: 'final_consolidado' },
        { label: 'Prometo me lembrar da jornada dela e da importância de cada parte do rio.', toScreenId: 'final_consolidado' },
        { label: 'Prometo contar sua história.', toScreenId: 'final_consolidado' }
      ]
    },
    // Telas 'final_desperdicar', 'final_limpo', 'final_jornada', 'final_historia' REMOVIDAS
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