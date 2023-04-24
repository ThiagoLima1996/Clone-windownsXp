//import image
import imgLixeira from './assents/img/icone-de-lixeira.png'
import imgExplore from './assents/img/icone-internet-explorer.png'
import imgVolume from './assents/img/icone-de-volume.png'
import imgSeguranca from './assents/img/icone-de-segurança.png'
import imgMidia from './assents/img/icone-de-media.png'
import btnImg from './assents/img/icone-de-iniciar.png'
import imgLogoff from './assents/img/icone-de-logoff.png'
import imgDesligar from './assents/img/icone-de-desligar.png'

//export dos icones para a area de trabalho
export const iconsDesktop = [
    {
        nome: "Lixeira",
        img: imgLixeira
    },
    {
        nome: "Explore",
        img: imgExplore
    }
]

//export para a barra de tarefas
export const taskbar = [
    {
        img: imgVolume
    },
    {
        img: imgSeguranca
    },
    {
        img: imgMidia
    }
]

export const btnImgStart = {
    img: btnImg
}

export const btnFooter = [
    {
        img: imgLogoff,
        nome: "Logoff",
        id: "logoff"
    },
    {
        img: imgDesligar,
        nome: "Desligar",
        id: "desligar"
    }
];

export const iconsMenu = [
    {
        titulo: "Explore",
        subtitulo: "Internet Explore",
        img: imgExplore
    },
    {
        titulo: "Lixeira",
        subtitulo: "Lixeira",
        img: imgLixeira
    },
    {
        titulo: "Midia play",
        subtitulo: "windowns midia player",
        img: imgMidia
    }
]