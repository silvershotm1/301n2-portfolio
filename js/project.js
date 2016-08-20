// var projects =[];   Remove global variable and move inside constructor
(function(module) {
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

    var source = $('#project-template').html();
    var template = Handlebars.compile(source);


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

  // projectData.forEach(function(ele) {
  //   Project.all.push(new Project(ele));
    Project.all = projectData.map(function(ele) { // refactor forEach code
      return new Project(ele);
    });
  };
  Project.fetchAll = function(callback) {  // Named Function
    if (localStorage.projectData) {
      Project.loadAll(JSON.parse(localStorage.projectData));
      // projectView.startIndexPage();
      callback();
      console.log('You have local storage!');
    } else {
      console.log('Getting Local Storage');
      $.getJSON('data/projectData.json', function(projectData) {
        Project.loadAll(projectData);
        localStorage.setItem('projectData', JSON.stringify(projectData));
        // projectView.startIndexPage();
        callback();
      });
    };
  };
  // Counts number of words in a Project
  Project.numWordsAll = function() {
    return Project.all.map(function(project) {
      return project.body.split(' ').length;
    })
    .reduce(function(a,b) {
      return a + b;
    });
  };
  // Array of Coder Names
  Project.allCoders = function() {
    return Project.all.map(function(project){
      return project.coder;
    })
    .filter(function(coder, index, arr){
      return arr.indexOf(coder) === index;

    });
  };

  Project.numWordsByCoder = function() {

    return Project.allCoders().map(function(coder) {
      return {
        name: coder,
        numWords: Project.all.reduce(function(a,b) {
          if(b.coder === coder) {
            a.push(b.body.split(' ').length);
          }
          return a;
        },[])
        .reduce(function(a,b) {
          return a + b;
        })
      };
    });
  };

  module.Project = Project;
})(window);
