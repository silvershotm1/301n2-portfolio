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
