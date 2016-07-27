var projects =[];

function Project (opts) {

  this.title = opts.title;
  this.coder = opts.coder;
  this.coderURL = opts.coderURL;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Project.prototype.toHtml = function() {
  var source = $('#article-template').html();
  var template = Handlebars.compile(source);

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
  this.publishStatus = this.publishedOn ? ' published ' + this.daysAgo + ' days ago ' : '(draft)';

//   var $newProject = $('article.template').clone();
//   $newProject.removeClass('template');
//   if (!this.publishedOn) {
//     $newArticle.addClass('draft');
//   }
//
//   $newProject.attr('data-category', this.category);
//   $newProject.attr('data-coder', this.coder);
//   $newProject.find('.byline a').html(this.coder);
//   $newProject.find('.byline a').attr('href', this.coderURL);
//   $newProject.find('h2:first').html(this.title);
//   $newProject.find('.project-body').html(this.body);
//   $newProject.find('time[pubdate]').attr('datetime', this.publishedOn);
//   $newProject.find('time[pubdate]').attr('title', this.publishedOn);
//   $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago');
//   $newProject.append('<hr>');
//   return $newProject;
//
// };

  var Html = template(this);
  // $('#articles').append(Html);  CODE Doesn't append
  return Html;
};
projectData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
