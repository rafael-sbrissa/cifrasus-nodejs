function trataCifraClub(data) {
    this._data = data;
}

trataCifraClub.prototype.getCifraHtml = function() {
    console.log('aqui');
};

module.exports = function(app) {
    return trataCifraClub;
};

function _getParts() {
    /**
     * Regular Expression to extract Title
     */
    var REG_EXP_TITLE = '/\<h1 id\=[\"]ai_musica[\"].*?\>(.*?)\<\/h1\>/s';

    /**
     * Regular Expression to extract artist name
     */
    var REG_EXP_ARTIST = '/\<h2 id\=[\"]ai_artista[\"].*?\>(.*?)\<\/h2\>/s';

    /**
     * Regular Expression to remove artist link
     */
    var REG_EXP_ARTIST_RM_LINK = '/\<a.*?\>(.*?)\<\/a\>/s';

    /**
     * Regular Expression to extract lyric content
     */
    var REG_EXP_LYRIC = '/\<pre id\=[\"]ct_cifra[\"].*?\>(.*?)\<\/pre\>/s';

    /**
     * Regular Expression to extract all chords
     */
    var REG_EXP_CHORDS = '/\<b.*?\>(.*?)\<\/b\>/s';

    /**
     * Regular Expression to extract clean chords
     */
    var REG_EXP_CLEAN_CHORDS = '/(\<b\>|\<\/b\>)/s';
    /**
     * Regular Expression to extract the root note
     */
    var REG_EXP_ROOT_NOTE = '/^[A-G]#?b?/s';
    /**
     * Regular Expression to extract the bass note
     */
    var REG_EXP_BASS = '/\/[A-G]#?b?/s';
}