let fullInformation = [document.querySelector(".campo_inf"), document.querySelector("#name"), document.querySelector("#sex"), document.querySelector("#age"),document.querySelector("#summaryHistory"), document.querySelector("#Equip"), document.querySelector("#img_info")]
let deleteInformationBnt = document.querySelector(".icon_close")
let personaImg = [document.querySelector("#persona1"), document.querySelector("#persona2")]

let infoBasicH =[
document.querySelector("#nameHuman"),document.querySelector('#resultH'),document.querySelector(".infoBasicH div"),document.querySelector('#moreInfoH')]




let infoBasicG =[document.querySelector("#nameGods"), document.querySelector('#resultG'),document.querySelector(".infoBasicG div"),document.querySelector('#moreInfoG')]

let humanityClassCompetitor = [ document.querySelector('.human1'), document.querySelector('.human2'),document.querySelector(".human3"),document.querySelector(".human4"), document.querySelector(".human5"),document.querySelector(".human6"),document.querySelector(".human7"), document.querySelector(".human8") ]
   
    
let godsClassCompetitor = [ document.querySelector('.god1'),document.querySelector('.god2'),document.querySelector(".god3"), document.querySelector(".god4"), document.querySelector(".god5"), document.querySelector(".god6"),  document.querySelector(".god7"), document.querySelector(".god8")]
   
  
   
let GodsNumber = 0
let humanNumber = 0

function Competitors(img,name,result,age, sex, summaryHistory, equip, img_info){
    this.img = img
    this.name = name
    this.result = result
    this.age = age
    this.sex = sex
    this.summaryHistory = summaryHistory
    this.equip = equip
     this.img_info = img_info
}

let luBu = new Competitors("./assets/lubu.svg","Lu bu","","Idade: 38 anos no momento de sua morte por registros históricos. Em torno de 1800 anos como uma alma.","Gênero: Masculino"," Lu Bu é o herói mais poderoso de toda a China, e é considerado como o homem mais forte desde do início da história da humanidade. Igualmente a Thor, Lu Bu é uma pessoa que passou boa parte de sua vida em uma grande tristeza por não sentir a emoção de viver em sua vida, chegando a extrema depressão e aparentando até querer morrer por tédio em sua vida, Sua caminhada começou quando criança, aniquilando qualquer coisa que estivesse pela sua frente e que tentasse confronta-lo, e com isso, várias pessoas começaram a segui-lo e admirar ele como um iludo, e com isso conseguindo seu exercito."," Perfuradora de Céus: A lança de Lü Bu em forma de Volund garantida pela valquíria Randgriz. Lü Bu desde sempre teve um bom manejo com lanças, tendo afiado suas habilidades invés das próprias lanças em si ao longo de sua vida até o dia em que ele se tornou capaz de dividir os próprios céus com uma lança ordinária.","./assets/lubu_info.svg")

let adao = new Competitors("./assets/adao.svg","Adão","","Idade: Éon (Mais de bilhões de anos)","Gênero: Masculino",'Adão foi o Pai da Humanidade, o primeiro e original homem criado à imagem e semelhança de um deus. Ele é o homem do Arquivo No.00000000001 e foi referido como a "Esperança da Humanidade" Adam é mostrado ser um homem extremamente bonito. Possuindo um corpo magro e musculoso, cabelo loiro platinado e um par de olhos azuis penetrantes. Sua beleza é tanta que todas as mulheres presentes na partida, sejam elas humanas ou deusas, o acharam universalmente um homem incrivelmente atraente e "fofo",A única roupa que ele usa é uma folha de figueira cobrindo sua região inferior.'," Soco-Inglês: Volund de Adão, concedido por Reginleif. O soco-inglês não têm nenhuma habilidade especial além de ajudar os socos de Adam a ter um impacto mais forte sobre o inimigo.",'./assets/adao_info.svg')


let sasakiKojiro = new Competitors("./assets/sasaki.svg","Sasaki Kojiro","", ' Idade: 26 no momento de sua morte. Em torno de 417 como alma, embora pareça estar nos 50 ou 60 fisicamente.','Gênero: Masculino','Sasaki Kojiro foi um espadachim do período feudal conhecido como o maior perdedor da história no mangá, não tendo realmente vencido algum combate direto, e perdido muitos. Sasaki Kojiro é apresentado como um andarilho que busca a perfeição de sua esgrima, perdendo para um oponente ou desistindo rápido da batalha e retirando-se para estudar o método de combate de seus inimigos por um tempo, para aderir ao seu próprio estilo, repetindo esse processo por muitos anos até o fatídico dia em que duelou contra Miyamoto Musashi, no qual ele perdeu e ganhou o título de maior perdedor da história.','Monohoshinzao: A Volund de Kojiro em forma de uma nodachi (uma katana bem longa), espada que Kojiro treinou em vida com. Kojiro a utiliza num método de esgrima impecável no qual já foi conhecido por ter cortado uma andorinha em pleno vôo','./assets/sasaki_info.svg')

let jack = new Competitors("./assets/jack.svg","Jack","",' Idade: Entre 20 ou 30 anos fisicamente, possivelmente em torno de 150 anos~ como alma.','Gênero: Masculino','Jack, o Estripador é um famoso assassino em série da Inglaterra no século XIX, onde ironicamente sua fama está em seu anonimato, com ninguém sabendo quem ele é até os dias atuais onde ocorre o mangá. Jack era o filho de uma prostituta que assassinou sua mãe por conta de ter sido enganado com um falso sentimento de amor, mas desde seu primeiro assassinato, Jack se sentiu em êxtase ao ver a "cor" da alma de sua mãe que denotava desespero (um de seus olhos tinha a capacidade de ver os sentimentos das pessoas traduzidos como cores), isso o motivou a se tornar um assassino','Luvas Divinas: Um acessório divino fornecido pelo "Volund" da Valquíria Hlökk. Sua habilidade especial permite que Jack transforme qualquer coisa que toque em uma arma divina, aumentando drasticamente sua força destrutiva e durabilidade, a luva foi sua principal arma, mas no combate usou várias outras, mas só foram utilizáveis pelo poder dessa arma','./assets/jack_info.svg')

let raiden  = new Competitors("./assets/raiden.svg","Raiden Tameemon","",'Idade: 58 no momento de sua morte; em torno de 175 como alma.','Gênero: Masculino','Raiden Tameemon , nome de nascimento Tarōkichi Seki , é o representante da Humanidade na quinta rodada do Ragnarok , enfrentando Shiva .Raiden Tameemon, também conhecido como o " Peerless Rikishi " (Murui Rikishi ) tem os músculos mais fortes da história da humanidade e foi um famoso lutador de sumô japonês; considerado o melhor de todos os tempos.','Mawashi de Carne e Osso (Chōkingai Kotsushime Mawashi ): Uma Arma Divina na forma de um mawashi fornecida pelo Völundr da 3ª Valquíria , Thrud . Isso dá a Raiden a capacidade de usar toda a sua força, sem impedimentos por sua rara condição médica, Cem Selos (百閉, Hyakuhei ) : Um conjunto de músculos que selaria a força de seus outros. Raiden criou o selo para evitar que seus músculos esmagassem seus próprios ossos.', './assets/raiden_info.svg')

let buda  = new Competitors("./assets/buda.svg","Buda","",'Idade:2500+ Anos (criador do Budismo, sendo cerca de 20 anos mais velho que a religião)','Gênero: Masculino','Indo contra Zerofuku, apesar de inicialmente ser listado como representante dos deuses. Buda é uma divindade proeminente e líder do Panteão Budista, sendo o fundador do Budismo, um dos Quatro Sábios, bem como um dos poucos seres divinos, ao lado de Héracles e das Valquírias, que não são a favor da destruição da humanidade. Buda era anteriormente um humano com o nome de "Gautama Siddhartha" e uma famosa figura filosófica vinda do Antigo Nepal','Cajado dos Seis Reinos: Buda empunha uma roda de oração enorme na forma de um cajado. O cajado armazena o poder dos seis Budas guardiões dos seis reinos do budismo, permitindo que ele mude sua forma para outro tipo de arma ou ferramenta com base em suas emoções, Grande Espada do Nirvana: A arma divina definitiva que ninguém, exceto aqueles que alcançaram o Grande Nirvana nas Terras Puras, podem criar. Esta arma assume a forma de uma Shichishito (espada de sete braços) ', './assets/buda_info.svg')

let Qin  = new Competitors("./assets/qin_shi_huang.svg","Qin shi Huang","",'Idade: 2200+','Gênero:Masculino','Seu nome verdadeiro é "Ying Zheng", com Qin Shi Huang ou "Shi Huang Di", Shikōtei ) sendo um título que significa literalmente "Primeiro Imperador de Qin". Ele é o fundador da Dinastia Qin e o primeiro imperador a unificar a China, amplamente considerado o maior imperador de toda a história chinesa.Ele também foi referido como " O Rei Onde Tudo Começou ", Hajimari no Ō ), o " Rei dos Homens O Maior Rei"','Venda : Uma venda decorada com uma listra padronizada. Foi dado a ele, como presente, por sua mãe adotiva com o objetivo de obscurecer parcialmente sua visão, Zhijiatao (lit. Nail Guards ): Qin Shi Huang possui cinco Zhijiatao no total, dois em sua mão direita e três em sua esquerda, que são vistos como símbolos de nobreza e riqueza na China antiga,spaldares Todo-Poderoso: Uma Arma Divina na forma de ombreiras e armadura nos braços e mãos, fornecida pelo Völundr da 10ª ValquíriaEspada Shi Huang Goujian, Shikō Kōsenken :O poder do nome de Alvitr é "Host-Guard". Isso se refere a ter a maior defesa, que também é um ataque.','./assets/Qin_info.svg')

let nikola  = new Competitors("./assets/Nikola_Tesla.svg","Nikola Tesla","",'Idade:161 anos','Gênero:Masculino','Conhecido como o " Cientista Louco Supremo de Seu Tempo " ( Seiki no Maddo Saientisuto ), Tesla é um dos cientistas mais famosos e renomados de todos os tempos, devido às suas invenções e descobertas que mudaram o mundo para sempre, Ele também é conhecido como o " Filho da Luz  O Único Feiticeiro da História Humana" Jinrui Shijō Yuiitsu no Mahōtsukai).','Super Autômato β (Sūpā Ōtomaton Bēta ): Uma Arma Divina na forma de uma armadura mecânica dourada e azul projetada pelo próprio Tesla com a ajuda de seus colegas cientistas e fornecida pelo Völundr da 9ª Valquíria , Göndul . Concede-lhe proteção adicional ao lado de uma grande variedade de outros poderes científicos, tais como: Eletrocinese, levitação e teletransporte.', './assets/nikola_tesla_info.svg')



// deuses

let thor = new Competitors("./assets/thor.png","Thor","",'Idade: Pelo menos Milênios.','Sexo: Masculino','Thor é uma divindade proeminente no panteão nórdico, sendo o deus nórdico do trovão, e também é frequentemente considerado o guerreiro e deus mais forte dos nórdicos. Ele é conhecido como o " Thunder Berserker "','Mjölnir (Destruidor) (雷槌ミョルニル, Myoruniru ): A arma primária de Thor, um enorme martelo maior que seu corpo. O martelo é principalmente coberto de cinza com padrões dourados semelhantes a veias e vários revestimentos marrons semelhantes a carapaças, Járngreipr (manoplas de ferro) (鉄の手袋ヤールングレイプル, Yārungureipuru ): Um par de luvas capaz de resistir a qualquer ataque. Segundo a lenda, Thor deve usar Járngreipr para proteger sua mão do calor do Mjölnir. Mas isso é um mal-entendido','./assets/thor_info.svg')


let zeus = new Competitors("./assets/zeus.svg","Zeus","",'Sexo: Masculino','Idade Éon (Possui mais de um bilhão de anos.)','Zeus estava encarregado do conselho de Deuses como seu presidente, discutindo se deveria ou não exterminar a humanidade. Todos os deuses concordam, mas Brunhilde foi a única que se opôs e apontou uma cláusula que dava aos humanos uma chance de lutar. Todos os deuses se opuseram à ideia de Brunhilde de Ragnarök até que ela insultou seu orgulho, enfurecendo Zeus que mata seu dragão de estimação e usa seu martelo para destruir a maior parte do chão para iniciar Ragnarök.','Punhos e Tecnicas','./assets/zeus_info.svg')


let poseidon = new Competitors("./assets/poseidon.svg","Poseidon","",'Sexo: Masculino','Idade Éon (Possui mais de 1 bilhão de anos.)','Poseidon nasceu como o terceiro irmão dos deuses gregos mais antigos. Ele parecia insensível e apático desde o nascimento, sem prestar atenção ao irmão mais velho, Adamas, para seu desgosto. Quando Adamas tentou derrubar Zeus, Poseidon o matou sem esforço e apagou sua memória da história. Hermes, que testemunhou o incidente, espalhou o boato de que havia um traidor entre os deuses gregos. Apenas um punhado de deuses sabem sobre o incidente e por que Adamas foi removido da história.','Tridente: Uma grande arma em forma de lança com três pontas afiadas em sua extremidade. Poseidon geralmente empurra seu tridente para frente para espetar seus oponentes.', './assets/poseidon_info.svg')


let hercules = new Competitors("./assets/hercules.svg","Hércules","",'Sexo: Masculino','Idade: 4000+',
'Hércules é uma divindade proeminente no Panteão grego , sendo o Deus da Fortitude (不屈の闘神, Fukutsu no Tōjin ). Ele também é um dos poucos seres divinos, junto com Buda e as Valquírias , que não são a favor do fim da Humanidade Heimdall o descreve como o " Enviado da Justiça " (正義の使者, Seigi no Shisha ) tanto para os Deuses quanto para os Humanos, Heracles era anteriormente um humano com o nome de " Alcides " ( ア ル ケ イ デ ス , Arukeidesu ), vindo da Grécia Antiga e ascendeu à Divindade ao beber a Ambrosia.','Lion Club : Um clube de prata mágico que assume a forma de uma variedade de animais, incluindo um leão, uma águia e um touro. Cada vez que Heracles usa uma de suas técnicas de 12 Trabalhos para mudar a forma de seu clube, as tatuagens em seu corpo se espalham, aproximando-o da morte.','./assets/hercules_info.svg')


let shiva = new Competitors("./assets/shiva.svg","Shiva","",'Sexo: Masculino','Idade: 4000+','Shiva é uma divindade proeminente e líder do Panteão Hindu Ele é um Deus Chefe e conhecido como o " Bhairava do Cosmos " (Uchū no Bairava ), o " Deus Mais Forte da Destruição " (Saikyō no Hakaishin ) e o maior lutador do Céu .','Tesouro Escondido do Mundo Indiano dos Deuses (Indo Shinkai no Hihō )  Conhecida como "Dança de Guerra de Shiva" (Shiva no Hissatsu Buyō ),Tandava (Renascimento do Samsara) (Tāndava ) Devido a sua dança intensa, o corpo de Shiva fica superaquecido e entra em combustão, Krittivasa (Dança Flamejante da Garra do Tigre) (Kurittivāsasu )  Shiva pula no ar e desfere um chute poderoso enquanto queima simultaneamente seus pés, eva Loka (Dança da Chama do Ato Final) (Dēva Rōka ) Um poderoso chute giratório usado por Shiva,','./assets/shiva_info.svg')

let zeroFuku = new Competitors("./assets/zerofuku.svg","Zerofuku","",'Sexo: Masculino',
'Idade: 2500+','Zerofuku é o deus do infortúnio. Ele também é a fusão dos Sete Deuses da Sorte , sendo sua forma original antes de se separarem no passado. O nome "Zerofuku" se traduz em "fortuna zero", mas também pode ser interpretado como "infortúnio".','Misery Cleaver: Zerofuku empunha um machado de batalha divino conhecido como "Misery Cleaver", que ele criou de sua própria carne, sangue e ossos. O Misery Cleaver era inicialmente um machado de batalha de tamanho normal, que tinha um cabo de cor clara e tentáculos carnudos pretos saindo da maior parte do machado, Sword Transformation: O Misery Cleaver assume a forma de uma forma de espinha semelhante a uma espada com dezenas de pontas afiadas, Storm Formation: O Misery Cleaver assume a forma de uma chuva de incontáveis lâminas conectadas a um único cabo. Cada lâmina parece ter vida própria, ','./assets/zerofubu_info.svg')

let hades = new Competitors("./assets/hades.svg","Hades","", 'Sexo: Masculino', 'Idade: Eras', 'Ele é uma divindade proeminente dentro do Panteão grego , sendo o " Rei do Netherworld " (冥界の王, Meikai no Ō ). Hades também é considerado como " O Deus em quem os outros deuses mais confiam " (神が最も信頼する神, Kami ga Mottomo Shinrai suru Kami ).', 'Bidente (二叉槍バイデント, Baidento ): Arma pessoal de Hades que consiste em duas pontas de prata retorcidas, uma arma de haste roxo-azulada escura e uma ponta arredondada de prata na outra ponta, Ichor: Desmos (Lança do Destino de Quatro Sangues) (宿命の四血槍イーコール・デスモズ, Īkōru Desumosu ) O trunfo de Hades. Ao infundir Pluto Ichor em seu bidente, Hades atualiza sua arma em Ichor: Desmos , que consiste em duas pontas afiadas com uma longa lâmina passando pelo meio e todas convergem em uma ponta manchada de sangue.','./assets/hades_info.svg')

let belzebu = new Competitors("./assets/belzebu.svg","Belzebu","",'Sexo: Masculino','Desconhecido (Eons, possivelmente)','Belzebu é uma divindade proeminente no Panteão Filisteu e no Panteão Abraâmico . Ele é conhecido por vários títulos. Para os humanos , ele é comumente conhecido como o " Senhor das Moscas " ( Hae no Ō ). Para os Deuses, ele às vezes é conhecido como " Anátema " (Anatema ), o que indica que ele é o amaldiçoado por Satanás.Ele também carrega outros títulos como o " Sacerdote da Gula " (Bōshoku no Shisai ), o " Regente dos Espíritos Malignos " ( Akuryō-domo no Shihai-sha ), o " Deus da Escuridão " (Yami no Kami ) e ele é adorado pelos cananeus como " Baal-Zebul " (Bāru-Zeburu ).','O Cajado de Apomyius ( Apomyuiosu no Tsue ): Quando se trata de batalha, a arma de escolha de Belzebu é um cajado que consiste em uma caveira de prata como cabo, haste vermelha e ponta arredondada de prata.','./assets/belzebu_info.svg')





humanityClassCompetitor[0].addEventListener('click',function mudarH(){
    humanNumber = 1
   
    result()
    infoBasicH[0].innerHTML = luBu.name
    personaImg[0].src = luBu.img
    infoBasicH[1].innerHTML = luBu.result
    infoBasicH[2].style ="visibility: visible;"
    infoBasicH[3].style = "visibility: visible;"
   
    
})
humanityClassCompetitor[1].addEventListener('click',function mudarH1(){
    humanNumber = 2
    infoBasicH[0].innerHTML = ""
    infoBasicH[1].innerHTML = ""
   result1()
   
    infoBasicH[0].innerHTML = adao.name
    personaImg[0].src = adao.img
    infoBasicH[1].innerHTML = adao.result
    infoBasicH[2].style ="visibility: visible;"
    infoBasicH[3].style = "visibility: visible;"
   
    
})
humanityClassCompetitor[2].addEventListener('click', function mudarH2(){
    humanNumber = 3
    result2()
    infoBasicH[0].innerHTML = sasakiKojiro.name
    personaImg[0].src = sasakiKojiro.img
    infoBasicH[2].style ="visibility: visible;"
    infoBasicH[3].style = "visibility: visible;"
})
 humanityClassCompetitor[3].addEventListener('click',function mudarH3(){

   humanNumber = 4
    result3()
   infoBasicH[0].innerHTML =  jack.name
   personaImg[0].src = jack.img
   infoBasicH[2].style ="visibility: visible;"
    infoBasicH[3].style = "visibility: visible;"
  
 })
 humanityClassCompetitor[4].addEventListener('click',function mudarH4(){
    humanNumber = 5
    result4()
    personaImg[0].src = raiden.img
    infoBasicH[0].innerHTML = raiden.name
    infoBasicH[1].innerHTML = raiden.result
    infoBasicH[2].style ="visibility: visible;"
    infoBasicH[3].style = "visibility: visible;"

 })
humanityClassCompetitor[5].addEventListener('click',function mudarH5(){
    humanNumber = 6
    result5()
    infoBasicH[0].innerHTML = buda.name
    personaImg[0].src = buda.img
    infoBasicH[2].style ="visibility: visible;"
    infoBasicH[3].style = "visibility: visible;"
})

humanityClassCompetitor[6].addEventListener('click',function mudarH6(){
    humanNumber = 7
    result6()
    infoBasicH[0].innerHTML = Qin.name
    personaImg[0].src = Qin.img
    infoBasicH[2].style ="visibility: visible;"
    infoBasicH[3].style = "visibility: visible;"
})
humanityClassCompetitor[7].addEventListener('click',function mudarH7(){
    humanNumber = 8
    result7()
    infoBasicH[0].innerHTML = nikola.name
    personaImg[0].src = nikola.img
    infoBasicH[2].style ="visibility: visible;"
    infoBasicH[3].style = "visibility: visible;"
})


// deuses

godsClassCompetitor[0].addEventListener('click',function mudarG(){
    GodsNumber = 1
    personaImg[1].src = ""
    infoBasicG[0].innerHTML = "" 
    result()
    
    infoBasicG[0].innerHTML = thor.name   
    personaImg[1].src = thor.img
    infoBasicG[2].style ="visibility: visible;"
    infoBasicG[3].style = "visibility: visible;"
})
godsClassCompetitor[1].addEventListener('click',function mudarG1(){
    GodsNumber = 2
    personaImg[1].src = ""
     infoBasicG[0].innerHTML = ""
    result1()

    personaImg[1].src = zeus.img
     infoBasicG[0].innerHTML = zeus.name 
     infoBasicG[2].style ="visibility: visible;"
    infoBasicG[3].style = "visibility: visible;"
})
godsClassCompetitor[2].addEventListener('click',function mudarG2(){
    personaImg[1].src = ""
    infoBasicG[0].innerHTML = ""
    GodsNumber = 3
   
    result2()
    personaImg[1].src = poseidon.img
    infoBasicG[0].innerHTML = poseidon.name
    infoBasicG[1].innerHTML = poseidon.result
    infoBasicG[2].style ="visibility: visible;"
    infoBasicG[3].style = "visibility: visible;"
})
godsClassCompetitor[3].addEventListener('click', function mudarG5(){
    personaImg[1].src = ""
    infoBasicG[0].innerHTML =""
    GodsNumber = 6
    result5()

    personaImg[1].src = zeroFuku.img
    infoBasicG[0].innerHTML = zeroFuku.name
    infoBasicG[2].style ="visibility: visible;"
    infoBasicG[3].style = "visibility: visible;"
    
})
godsClassCompetitor[4].addEventListener('click',function mudarG3(){
    personaImg[1].src = ""
    infoBasicG[0].innerHTML =""
    GodsNumber = 5
    result4()

    personaImg[1].src = shiva.img
    infoBasicG[0].innerHTML = shiva.name
    infoBasicG[2].style ="visibility: visible;"
    infoBasicG[3].style = "visibility: visible;"
})

godsClassCompetitor[5].addEventListener('click',function mudarG4(){
    personaImg[1].src = ""
    infoBasicG[0].innerHTML =""
    GodsNumber = 4
    result3()

    personaImg[1].src = hercules.img
    infoBasicG[0].innerHTML = hercules.name
    infoBasicG[2].style ="visibility: visible;"
    infoBasicG[3].style = "visibility: visible;"
})
godsClassCompetitor[7].addEventListener('click',function mudarG6(){
    personaImg[1].src = ""
    infoBasicG[0].innerHTML =""
    GodsNumber = 7
    result6()

    personaImg[1].src = hades.img
    infoBasicG[0].innerHTML = hades.name
    infoBasicG[2].style ="visibility: visible;"
    infoBasicG[3].style = "visibility: visible;"
})
godsClassCompetitor[6].addEventListener('click',function mudarG7(){
    personaImg[1].src = ""
    infoBasicG[0].innerHTML =""
    GodsNumber = 8
    result7()

    personaImg[1].src = belzebu.img
    infoBasicG[0].innerHTML = belzebu.name
    infoBasicG[2].style ="visibility: visible;"
    infoBasicG[3].style = "visibility: visible;"
})


infoBasicH[3].addEventListener('click',()=>{
    fullInformation[0].style = "visibility: visible;"
    switch(humanNumber) {
        case 1:
        fullInformation[1].innerHTML = luBu.name
        fullInformation[2].innerHTML = luBu.sex
        fullInformation[3].innerHTML = luBu.age
        fullInformation[4].innerHTML = luBu.summaryHistory
        fullInformation[5].innerHTML = luBu.equip
        fullInformation[6].src = luBu.img_info
        break;
        case 2:
            fullInformation[1].innerHTML = adao.name
            fullInformation[2].innerHTML = adao.sex
            fullInformation[3].innerHTML = adao.age
            fullInformation[4].innerHTML = adao.summaryHistory
            fullInformation[5].innerHTML = adao.equip
            fullInformation[6].src = adao.img_info
            break;
            case 3:
                fullInformation[1].innerHTML = sasakiKojiro.name
                fullInformation[2].innerHTML = sasakiKojiro.sex
                fullInformation[3].innerHTML = sasakiKojiro.age
                fullInformation[4].innerHTML = sasakiKojiro.summaryHistory
                fullInformation[5].innerHTML = sasakiKojiro.equip
                fullInformation[6].src = sasakiKojiro.img_info
                break;
                case 4:
                fullInformation[1].innerHTML = jack.name
                fullInformation[2].innerHTML = jack.sex
                fullInformation[3].innerHTML = jack.age
                fullInformation[4].innerHTML = jack.summaryHistory
                fullInformation[5].innerHTML = jack.equip
                fullInformation[6].src = jack.img_info
                break;
                case 5:
                fullInformation[1].innerHTML = raiden.name
                fullInformation[2].innerHTML = raiden.sex
                fullInformation[3].innerHTML = raiden.age
                fullInformation[4].innerHTML = raiden.summaryHistory
                fullInformation[5].innerHTML = raiden.equip
                fullInformation[6].src = raiden.img_info
                break;
                case 6:
                fullInformation[1].innerHTML = buda.name
                fullInformation[2].innerHTML = buda.sex
                fullInformation[3].innerHTML = buda.age
                fullInformation[4].innerHTML = buda.summaryHistory
                fullInformation[5].innerHTML = buda.equip
                fullInformation[6].src = buda.img_info
                break
                case 7:
                fullInformation[1].innerHTML = Qin.name
                fullInformation[2].innerHTML = Qin.sex
                fullInformation[3].innerHTML = Qin.age
                fullInformation[4].innerHTML = Qin.summaryHistory
                fullInformation[5].innerHTML = Qin.equip
                fullInformation[6].src = Qin.img_info
                break;
                case 8:
                fullInformation[1].innerHTML = nikola.name
                fullInformation[2].innerHTML = nikola.sex
                fullInformation[3].innerHTML = nikola.age
                fullInformation[4].innerHTML = nikola.summaryHistory
                fullInformation[5].innerHTML = nikola.equip
                fullInformation[6].src = nikola.img_info
              
    }

})

infoBasicG[3].addEventListener('click', ()=>{
    fullInformation[0].style = "visibility: visible;"
    switch(GodsNumber){
        case 1:
            fullInformation[1].innerHTML = thor.name
            fullInformation[2].innerHTML = thor.age
            fullInformation[3].innerHTML = thor.sex
            fullInformation[4].innerHTML = thor.summaryHistory
            fullInformation[5].innerHTML = thor.equip
            fullInformation[6].src = thor.img_info
            break
            case 2:
                fullInformation[1].innerHTML = zeus.name
                fullInformation[2].innerHTML = zeus.age
                fullInformation[3].innerHTML = zeus.sex
                fullInformation[4].innerHTML = zeus.summaryHistory
                fullInformation[5].innerHTML = zeus.equip
                fullInformation[6].src = zeus.img_info
                break
                case 3:
                fullInformation[1].innerHTML = poseidon.name
                fullInformation[2].innerHTML = poseidon.age
                fullInformation[3].innerHTML = poseidon.sex
                fullInformation[4].innerHTML = poseidon.summaryHistory
                fullInformation[5].innerHTML = poseidon.equip
                fullInformation[6].src = poseidon.img_info
                break
                case 4:
                fullInformation[1].innerHTML = hercules.name
                fullInformation[2].innerHTML = hercules.age
                fullInformation[3].innerHTML = hercules.sex
                fullInformation[4].innerHTML = hercules.summaryHistory
                fullInformation[5].innerHTML = hercules.equip
                fullInformation[6].src = hercules.img_info
                break
                case 5:
                fullInformation[1].innerHTML = shiva.name
                fullInformation[2].innerHTML = shiva.age
                fullInformation[3].innerHTML = shiva.sex
                fullInformation[4].innerHTML = shiva.summaryHistory
                fullInformation[5].innerHTML = shiva.equip
                fullInformation[6].src = shiva.img_info
                break
                case 6:
                fullInformation[1].innerHTML = zeroFuku.name
                fullInformation[2].innerHTML = zeroFuku.age
                fullInformation[3].innerHTML = zeroFuku.sex
                fullInformation[4].innerHTML = zeroFuku.summaryHistory
                fullInformation[5].innerHTML = zeroFuku.equip
                fullInformation[6].src = zeroFuku.img_info
                break
                case 7:
                fullInformation[1].innerHTML = hades.name
                fullInformation[2].innerHTML = hades.age
                fullInformation[3].innerHTML = hades.sex
                fullInformation[4].innerHTML = hades.summaryHistory
                fullInformation[5].innerHTML = hades.equip
                fullInformation[6].src = hades.img_info
                break
                case 8:
                fullInformation[1].innerHTML = belzebu.name
                fullInformation[2].innerHTML = belzebu.age
                fullInformation[3].innerHTML = belzebu.sex
                fullInformation[4].innerHTML = belzebu.summaryHistory
                fullInformation[5].innerHTML = belzebu.equip
                fullInformation[6].src = belzebu.img_info
                break
    }
})

deleteInformationBnt.addEventListener('click',()=>{
    fullInformation[0].style = "visibility: hidden;"
})



function result(){
   
    if (GodsNumber == 1 && humanNumber == 1){
        personaImg[0].style = "filter: gray;-webkit-filter: grayscale(100%);"
        infoBasicH[1].innerHTML = luBu.result = "perdeu"
    }else{
        personaImg[0].style = ""
        infoBasicH[1].innerHTML = luBu.result = ""
        personaImg[1].style=""
        infoBasicG[1].innerHTML = thor.result = ""
    }
   
}

function result1(){

    if (humanNumber == 2 && GodsNumber == 2){
        personaImg[0].style = "filter: gray;-webkit-filter: grayscale(100%);"
        infoBasicH[1].innerHTML = adao.result = "perdeu"
    }else{
        personaImg[0].style = ""
        infoBasicH[1].innerHTML = adao.result = ""
        personaImg[1].style=""
        infoBasicG[1].innerHTML = zeus.result = ""
    }

}
function result2(){


    if(humanNumber == 3 && GodsNumber == 3){
        personaImg[1].style = "filter: gray;-webkit-filter: grayscale(100%);"
        infoBasicG[1].innerHTML = poseidon.result = "perdeu"
    }else{
        personaImg[1].style=""
        infoBasicG[1].innerHTML = poseidon.result = ""
        personaImg[0].style = ""
        infoBasicH[1].innerHTML = sasakiKojiro.result = ""
    }
    
}

function result3(){
    if(humanNumber == 4 && GodsNumber == 4){
        personaImg[1].style = "filter: gray;-webkit-filter: grayscale(100%);"
        infoBasicG[1].innerHTML = hercules.result = "perdeu"
    }else{
        personaImg[1].style=""
        infoBasicG[1].innerHTML = hercules.result = ""
        personaImg[0].style = ""
        infoBasicH[1].innerHTML = jack.result = ""
    }
}

    function result4(){
    if(humanNumber == 5 && GodsNumber == 5){
        personaImg[0].style = "filter: gray;-webkit-filter: grayscale(100%);"
        infoBasicH[1].innerHTML = raiden.result = "perdeu"
    }else{
        personaImg[1].style=""
        infoBasicG[1].innerHTML = shiva.result = ""
        personaImg[0].style = ""
        infoBasicH[1].innerHTML = raiden.result = ""
    }
    }
    function result5(){
        if(humanNumber == 6 && GodsNumber == 6){
            personaImg[1].style = "filter: gray;-webkit-filter: grayscale(100%);"
            infoBasicG[1].innerHTML = zeroFuku.result = "perdeu"
        }else{
            personaImg[0].style=""
            infoBasicG[1].innerHTML = zeroFuku.result = ""
            personaImg[1].style = ""
            infoBasicH[1].innerHTML = buda.result = ""
        }
        }
        function result6(){
            if(humanNumber == 7 && GodsNumber == 7){
                personaImg[1].style = "filter: gray;-webkit-filter: grayscale(100%);"
                infoBasicG[1].innerHTML = hades.result = "perdeu"
            }else{
                personaImg[0].style=""
                infoBasicG[1].innerHTML = hades.result = ""
                personaImg[1].style = ""
                infoBasicH[1].innerHTML = Qin.result = ""
                }
            }

            function result7(){
   
                if (GodsNumber == 8 && humanNumber == 8){
                    personaImg[0].style = "filter: gray;-webkit-filter: grayscale(100%);"
                    infoBasicH[1].innerHTML = nikola.result = "perdeu"
                }else{
                    personaImg[0].style = ""
                    infoBasicH[1].innerHTML = nikola.result = ""
                    personaImg[1].style=""
                    infoBasicG[1].innerHTML = belzebu.result = ""
                }
               
            }
            