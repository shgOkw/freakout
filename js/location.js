$(window).on('load', function () {
  var tgtDomain = 'http://localhost/freakout'; //置換対象のドメインを設定
  var nowDomain =
    $(location).attr('protocol') +
    '//' +
    $(location).attr('host') +
    '/freakout';
  if (tgtDomain) {
    //tgtDomainの入力の有無を判定
    if (tgtDomain != nowDomain) {
      //現在ドメインと対象ドメインの不一致を判定
      $('a[href^="' + tgtDomain + '"]').each(function () {
        var replace = null;
        var replace = $(this)
          .attr('href')
          .replace(new RegExp(tgtDomain, 'g'), nowDomain);
        $(this).attr('href', replace);
      });
      $('link[href^="' + tgtDomain + '"]').each(function () {
        var replace = null;
        var replace = $(this)
          .attr('href')
          .replace(new RegExp(tgtDomain, 'g'), nowDomain);
        $(this).attr('href', replace);
      });
      $('img[src^="' + tgtDomain + '"]').each(function () {
        var replace = null;
        var replace = $(this)
          .attr('src')
          .replace(new RegExp(tgtDomain, 'g'), nowDomain);
        $(this).attr('src', replace);
      });
    }
  }
});
