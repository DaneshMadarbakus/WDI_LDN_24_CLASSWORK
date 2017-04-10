angular
.module('twitter')
.controller('PostsIndexCtrl', PostsIndexCtrl)
.controller('PostsNewCtrl', PostsNewCtrl)
.controller('PostsShowCtrl', PostsShowCtrl)
.controller('PostsUpdateCtrl', PostsUpdateCtrl);

PostsIndexCtrl.$inject = ['Post'];
function PostsIndexCtrl(Post) {
  const vm = this;

  vm.all = Post.query();
}

PostsNewCtrl.$inject = ['User', 'Post', '$state'];
function PostsNewCtrl(User, Post, $state) {
  const vm = this;

  vm.users = User.query();

  function submit() {
    Post.save(vm.post)
    .$promise
    .then(() => $state.go('postsIndex'));
  }

  vm.submit = submit;
}

PostsShowCtrl.$inject = ['Post', '$stateParams'];
function PostsShowCtrl(Post, $stateParams) {
  const vm = this;

  Post
    .get($stateParams)
    .$promise
    .then(response => {
      vm.post = response;
    });
}

PostsUpdateCtrl.$inject = ['Post', '$stateParams'];
function PostsUpdateCtrl(Post, $stateParams) {
  const vm = this;

  Post
    .get($stateParams)
    .$promise
    .then(response => {
      vm.post = response;
    });

  vm.edit = () => {
  Post
    .update($stateParams, vm.post);
  };
}
