//Ctrl+Left+A

ACtl.runInPageCtx( ()=>{
    console.clear()
    
    function get_nfce_info() {
        chaveNFCe = document.querySelector(`.chave`).cloneNode(true).textContent.replace(/\s+/g,'').trim()
        nfceInfoGeral = document.querySelector(`div.ui-collapsible:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)`).cloneNode(true).textContent.replace(/\s+/g,' ').trim().split(` `)
        notaDataEmissao = nfceInfoGeral[7] + ` ` + nfceInfoGeral[8]
        notaNomeContratante = document.getElementById(`u20`).cloneNode(true).textContent.replace(/\s+/g,' ')
        notaPrecoTotal = document.querySelector(`[class='totalNumb txtMax']`).cloneNode(true).textContent
    
        navigator.clipboard.writeText(`${chaveNFCe}\t${notaDataEmissao}\t${notaPrecoTotal}\t${notaNomeContratante}`)
    }
    
    get_nfce_info()
    })