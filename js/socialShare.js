var providers = {
    'facebook': 'https://www.facebook.com/sharer.php?u=^URL^',
    'twitter': 'https://twitter.com/share?url=^URL^&text=^TEXT^',
    'g+': 'https://plus.google.com/share?url=^URL^'
}
function socialShare(provider, shareLink, text) {
    var link = providers[provider].replace('^URL^', shareLink).replace('^TEXT^', text);

    window.open(link, 'Compartilhar', 'height=640, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
}
