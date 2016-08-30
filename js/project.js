// var projects =[];   Remove global variable and move inside constructor
(function(module) {
  function Project (opts) {

    this.title = opts.title;
    this.coder = opts.coder;
    this.coderUrl = opts.coderUrl;
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
    Project.all = projectData.map(function(ele) { // refactor forEach code
      return new Project(ele);
    });
  };
  Project.checkForProjectChange = function(callback) {
    $.getJSON('/data/projectData.json', function(projectData, status, XHR) {
      Project.loadAll(projectData);
      localStorage.eTag = JSON.stringify(XHR.getResponseHeader('eTag'));
      localStorage.projectData = JSON.stringify(projectData);
      // projectView.startIndexPage();
      callback();
    });
  };

  Project.loadProjectStorage = function(callback) {
    Project.loadAll(JSON.parse(localStorage.projectData));
    // projectView.startIndexPage();
    callback();
  };

  Project.fetchAll = function(callback) {
    if (localStorage.projectData) {
      $.ajax({
        url: '/data/projectData.json',
        type: 'head',
        success: function(data, status, jqXHR) {
          if (JSON.parse(localStorage.eTag) === jqXHR.getResponseHeader('eTag')) {
            Project.loadProjectStorage(callback);
            console.log('localStorage Loaded');
          } else {
            Project.checkForProjectChange(callback);
            console.log('localStorage Updated');
          }
        }
      });
    } else {
      console.log('localStorage Retreived');
      Project.checkForProjectChange(callback);
    }
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

// Statistics of the projects
  Project.stats = function() {
    return {
      numProjects: Project.all.length,
      numWords: Project.numwords(),
      Coders: Project.allCoders(),
    };
  };

  module.Project = Project;
})(window);
