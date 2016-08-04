// var projects =[];   Remove global variable and move inside constructor

function Project (opts) {

  this.title = opts.title;
  this.coder = opts.coder;
  this.coderURL = opts.coderURL;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}
Project.all = [];  // Add variable inside constructor
Project.prototype.toHtml = function() {

  var source = $('#article-template').html();
  var template = Handlebars.compile(source);

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
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  this.body = marked(this.body);

  var Html = template(this);
  return Html;
};
Project.loadAll = function(projectData) {
  projectData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  projectData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};
Project.fetchAll = function() {
  console.log('Hello World!');
  if (localStorage.projectData) {
    Project.loadAll(JSON.parse(localStorage.projectData));
    projectView.initNewProjectPage();
  } else {
    var $data = $.get('data/projectData.json', function(data) {
      console.log(data);
      return data;
    });
    $data.done( function(data) {
      Project.loadAll(data);
    });
    $data.done( function(data) {
      localStorage.setItem('projectData', JSON.stringify())
    }

}

// projects.forEach(function(a){        NO NEED FOR CODE- COME BACK TO THIS LATER
//   $('#projects').append(a.toHtml());
// });
