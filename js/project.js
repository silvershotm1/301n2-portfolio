var projects =[];

function Project (opts) {
  this.coder = opts.coder;
  this.codeUrl = opts.codeUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Project.prototype.toHtml = function() {
  var $newProject = $('project.template').clone();
  $newProject.removeClass('template');
<<<<<<< Updated upstream
=======
  if (!this.publishedOn) {
    $newArticle.addClass('draft');
  }

  $newProject.attr('data-category', this.category);
  $newProject.attr('data-coder', this.coder);
  $newProject.find('.byline a').html(this.coder);
  $newProject.find('.byline a').attr('href', this.coderURL);
  $newProject.find('h2:first').html(this.title);
  $newProject.find('.project-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago');
>>>>>>> Stashed changes
  $newProject.append('<hr>');
  return $newProject;

};
// rawData.sort(function(a,b) {
//   return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });
//
// rawData.forEach(function(ele) {
//   articles.push(new Article(ele));
// })
//
// articles.forEach(function(a){
//   $('#articles').append(a.toHtml())
// });
