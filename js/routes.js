// WHERE THE ROUTING WILL BE CALLED
page('/', projectsController.index);
page('/blog', blogController.index);
page('/resume', resumeController.index);
page('/github', githubController.index);

page('*', function() {
  console.log('Please update Shockwave');
});

page();
