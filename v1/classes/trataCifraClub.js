function trataCifraClub(data) {
    this._data = data;
}

trataCifraClub.prototype.getCifraHtml = function(data) {
    _getArtist(data);
    //console.log(_getArtist(data));
};

module.exports = function(app) {
    return trataCifraClub;
};

function _getArtist(data) {
    /**
     * Regular Expression to extract artist name
     */
    var REG_EXP_ARTIST = '/\<h2 id\=[\"]ai_artista[\"].*?\>(.*?)\<\/h2\>/s';
    page = String(data);
    console.log(page);
    return page.match(REG_EXP_ARTIST);
}

function _getTitle(data) {
    /**
     * Regular Expression to extract Title
     */
    var REG_EXP_TITLE = '/\<h1 id\=[\"]ai_musica[\"].*?\>(.*?)\<\/h1\>/s';
}

function _getChords(data) {
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