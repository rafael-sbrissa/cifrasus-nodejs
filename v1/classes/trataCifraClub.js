function trataCifraClub() {}

trataCifraClub.prototype.getCifraHtml = function(data) {
    var cifra = {};
    //console.log(_getCapo(data));
    cifra.artist = _getArtist(data);
    cifra.title = _getTitle(data);
    cifra.tone = _getTone(data);
    cifra.capo = _getCapo(data);
    cifra.phrases = [{}];

    console.log(cifra);
    return cifra;
};

module.exports = function(app) {
    return trataCifraClub;
};

function _getArtist(data) {
    var reg_exp_artist = /<h2 class="t3".*?><a.*?>(.*?)<\/a><\/h2>/g;
    resultados = reg_exp_artist.exec(String(data));
    resultado = '';


    if (resultados[1]) {
        resultado = resultados[1];

    }
    //console.log(resultado);
    return resultado;
}

function _retornaValor(item, index) {
    console.log('Index:[' + index + '] = ' + item);
}

function _getTitle(data) {
    var reg_exp_title = /<h1 class="t1".*?>(.*?)<\/h1>/g;
    resultados = reg_exp_title.exec(String(data));
    resultado = '';
    if (resultados[1]) {
        resultado = resultados[1];

    }
    return resultado;
}

function _getTone(data) {
    var reg_exp_tone = /<span id="cifra_tom".*?>\s+?Tom:\s+?<a .*?>(.*?)<\/a>(\s+?\(.*?\)\s+?)?<\/span>/g;
    resultados = reg_exp_tone.exec(String(data));
    resultado = '';
    if (resultados != null) {
        if (resultados[1] != undefined) {
            resultado = resultados[1];

        }
        if (resultados[2] != undefined) {
            resultado = resultados[1] + " " + resultados[2].trim();
        }
    }
    return resultado;
}

function _getChords(data) {
    /**
     * Regular Expression to extract all chords
     */
    var REG_EXP_CHORDS = '/\<b.*?\>(.*?)\<\/b\>/s';
    /**
     * Regular Expression to extract clean chords
     */
    var REG_EXP_CLEAN_CHORDS = /(\<b\>|\<\/b\>)/g;
    /**
     * Regular Expression to extract the root note
     */
    var REG_EXP_ROOT_NOTE = '/^[A-G]#?b?/s';
}

function _getIntro(data) {

}

function _getCapo(data) {
    var reg_exp_capo = /<span id="cifra_capo".*?>[\s+?]?(.*?)<a.*?>(.*?)<\/a><\/span>/g;
    resultados = reg_exp_capo.exec(String(data));
    resultado = '';
    //resultados.forEach(_retornaValor);
    if (resultados != null) {
        if (resultados[1] != undefined && resultados[2] != undefined) {
            resultado = resultados[1].trim() + " " + resultados[2].trim();
        }
    }
    return resultado;
}

function _getLirics(data) {
    /**
     * Regular Expression to extract lyric content
     */
    var REG_EXP_LYRIC = '/\<pre id\=[\"]ct_cifra[\"].*?\>(.*?)\<\/pre\>/s';
}

function _getParts() {

    /**
     * Regular Expression to remove artist link
     */
    var REG_EXP_ARTIST_RM_LINK = '/\<a.*?\>(.*?)\<\/a\>/s';



    /**
     * Regular Expression to extract the bass note
     */
    var REG_EXP_BASS = '/\/[A-G]#?b?/s';
}