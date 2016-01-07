var articles = [];

function article(data) {//constructor function for blogArticles
  this.title = data.title,
  this.category = data.category,
  this.author = data.author,
  this.authorUrl = data.authorUrl,
  this.publishedOn = data.publishedOn,
  this.body = data.body;
}

article.prototype.toHtml = function () {//converts articles into html
  var $newArticle = $('#article.template').clone();

  $newArticle.data('category', this.category);

  //enter jQuery code to grab template code and fill in with content from blogArticles.js  
  //need to fill in: name, title, body text, Url, publication Date
  //publication date displays when hovering over Title

  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);

  $newArticle.find('time').html('about' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + 'days ago');

  $newArticle.append('<hr>');

  $newArticle.removeClass('.template');//removes template class from cloned article

  return $newArticle;
};

rawData.sort(function (a, b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new article(ele));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#articles').append(a.tohtml());
});
