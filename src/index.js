import css from './default.css';
import fonts from './icono.min.css';

document.addEventListener('DOMContentLoaded', function(){
    let container = document.querySelector('div.indeprods')
    if(container) {
        container.innerHTML = 
            buildHeader() + 
            buildBody() + 
            buildFooter()
    } else {
        console.error("ERR: Please set a div with .indeprods class selector!")
    }

    document.querySelector('div.indeprods .show-list').addEventListener('click', function(){
        document.querySelector('div.indeprods').classList.add('list-mode');
    })
    document.querySelector('div.indeprods .hide-list').addEventListener('click', function(){
        document.querySelector('div.indeprods').classList.remove('list-mode');
    });
})

function buildALink(name, link) {
    return `<a href="${link}" target="_blank">${name}</a>`
}

function buildHeader() {
    return `<div class="indeprods-header">
                <span class="title">友链</span>
                <a href="javascript:void(0)" class="show-list">
                    <i class="icono-list"></i>
                </a>
                <a href="javascript:void(0)" class="hide-list">
                    <i class="icono-tiles"></i>
                </a>
            </div>`
}

function buildFooter() {
    return ``
}

function buildBody() {
    let links = [
        {
            name: 'cmlanche',
            link: 'https://cmlanche.com'
        },
        {
            name: 'boseny',
            link: 'http://bosenythink.com/',
        },
        {
            name: 'taizizz',
            link: 'https://laogen.site/',
        },
        {
            name: '梦瑶奇缘',
            link: 'https://www.idiot6.com/'
        },
        {
            name: 'foolish1024',
            link: 'https://foolish1024.github.io/'
        },
        {
            name: '没有如果',
            link: 'https://blog.r136.dev'
        },
        {
            name: 'Northernlights',
            link: 'https://northernlights.ink/'
        },
        {
            name: 'hugo',
            link: 'https://blog.hugoxia.com/'
        },
        {
            name: 'w.im',
            link: 'https://w.im/'
        },
        {
            name: '888.dev',
            link: 'https://888.dev'
        },
        {
            name: 'codeshif',
            link: 'https://www.codeshif.com/'
        },
        {
            name: 'Echo Pan',
            link: 'https://freedom.moe/'
        },
        {
            name: '顾北',
            link: 'http://www.hellosw.com.cn/'
        },
        {
            name: '风继续吹',
            link: 'https://www.v2ux.com/blog/'
        },
        {
            name: 'lovedai2010',
            link: 'https://codegulu.cn/'
        },
        {
            name: 'zhang-yi',
            link: 'https://zhangyi2099.github.io/'
        }
    ]

    let bodyHtml = '<div class="indeprods-body">';
    for(let link of links) {
        bodyHtml += `<div class="box">${buildALink(link.name, link.link)}</div>`
    }
    bodyHtml += '</div>'

    return bodyHtml
}