var articles = [];

function Article(data) {//constructor function for blogArticles
  this.title = data.title,
  this.category = data.category,
  this.author = data.author,
  this.authorUrl = data.authorUrl,
  this.publishedOn = data.publishedOn,
  this.body = data.body;
};

Article.prototype.toHtml = function () {//converts articles into html
  var $newArticle = $('article.template').clone();//clones the template class from the id article

  $newArticle.data('category', this.category);

  $newArticle.find('h1').html(this.title);
  $newArticle.find('address').html(this.author);
  $newArticle.find('time').html(this.publishedOn);
  $newArticle.find('.article-body').html(this.body);//creates html from the article constructor to the JQ object, now to append it to the DOM.

  //enter jQuery code to grab template code and fill in with content from blogArticles.js
  //need to fill in: name, title, body text, Url, publication Date
  //publication date displays when hovering over Title

  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);

  $newArticle.find('time').html('about' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + 'days ago');

  $newArticle.append('<hr>');

  $newArticle.removeClass('template');//removes template class from cloned article

  return $newArticle;
};

$(document).ready(function () {

  rawData.sort(function (a, b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(post) {
    articles.push(new Article(post));
  });

  articles.forEach(function(a){
    $('#articles').append(a.toHtml());
  });
});
