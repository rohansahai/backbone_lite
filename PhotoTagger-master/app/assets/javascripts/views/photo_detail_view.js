(function(root){
  var Tagger = root.Tagger = (root.Tagger || {});

  var PhotoDetailView = Tagger.PhotoDetailView = function (photo){
    this.photo = photo;
    this.$el = $("<div></div>");
    this.template = JST['photo_detail'];

    this.$el.on("click", "a#photosListView", this.showList.bind(this));
    this.$el.on("click", "img", this.popTagSelectView.bind(this));
    //Tagger.Photo.on('add', this.render.bind(this));
  };


  _.extend(PhotoDetailView.prototype, {
    render: function () {
      var renderedTemplate = this.template({
        photo: this.photo
      });
      this.$el.html(renderedTemplate);
      return this
    },
    popTagSelectView: function(event){
      console.log(event.offsetX, event.offsetY);
    },
    showList: function (event) {
      event.preventDefault();
      Tagger.showPhotosIndex();
    }
  });




})(this)
