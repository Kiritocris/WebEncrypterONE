const imageEncoder = document.getElementById('imageEncoder')
const labelEncoder = document.getElementById('labelEncoder')
const textareaEncoder = document.getElementById('textToEncoder')
const buttonsEncoder = document.getElementById('buttonsEncoder')

const imageDecoder = document.getElementById('imageDecoder')
const labelDecoder = document.getElementById('labelDecoder')
const textareaDecoder = document.getElementById('textToDecrypt')
const buttonsDecoder = document.getElementById('buttonsDecoder')


const Codec = {
    a : 'ai',
    e : 'enter',
    i : 'imes',
    o : 'ober',
    u : 'ufat'
}

const Decodec = {
    ai : 'a',
    enter : 'e',
    imes : 'i',
    ober : 'o',
    ufat : 'u'
}

function CopyMessageToEncode(){ 
    textareaDecoder.select()
    document.execCommand("copy");
}

function CopyMessageToDecode(){
    textareaEncoder.select()
    document.execCommand("copy");
}

function textEnconder(){
    let message = textareaEncoder.value;
    let encoding = message.split('')
    let msgenc = []
    encoding.forEach(element => {
        msgenc.push(Object.hasOwn(Codec,element )? Codec[element]: element)
    });
    msgenc = msgenc.join('')
    textareaDecoder.value = msgenc
    textareaDecoder.className = "Space ToolActive"
    labelEncoder.className = "Space ToolActive"
}

function textDecoder(){
    let message = textareaDecoder.value;
    let msgdec = message.replace(/enter/g, "e");
    msgdec = msgdec.replace(/imes/g, "i");
    msgdec = msgdec.replace(/ai/g, "a");
    msgdec = msgdec.replace(/ober/g, "o");
    msgdec = msgdec.replace(/ufat/g, "u");

    textareaEncoder.value = msgdec
    textareaEncoder.className = "Space ToolActive"
    labelEncoder.className = "Space ToolActive"
    
}

function ActiveEncoder(){
    imageEncoder.className = "Tool ToolActive"
    imageDecoder.className = "Tool ToolDeactive"

    textareaEncoder.className = "Space ToolActive"
    textareaDecoder.className = "ToolHide"

    buttonsEncoder.className = "ToolActive"
    buttonsDecoder.className = "ToolHide"

    labelEncoder.className = "Space ToolActive"
    labelDecoder.className = "ToolHide"
}

function ActiveDecrypter(){
    imageDecoder.className = "Tool ToolActive"
    imageEncoder.className = "Tool ToolDeactive"

    textareaDecoder.className = "Space ToolActive"
    textareaEncoder.className = "ToolHide"

    buttonsDecoder.className = "ToolActive" 
    buttonsEncoder.className = "ToolHide"

    labelEncoder.className = "ToolHide"
    labelDecoder.className = "Space ToolActive"
}

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */