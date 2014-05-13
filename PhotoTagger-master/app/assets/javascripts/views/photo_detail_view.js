(function(root){
  var Tagger = root.Tagger = (root.Tagger || {});

  var PhotoDetailView = Tagger.PhotoDetailView = function (photo){
    this.photo = photo;
    this.$el = $("<div></div>");
    this.template = JST['photo_detail'];

    //Tagger.Photo.on('add', this.render.bind(this));
  };


  _.extend(PhotoDetailView.prototype, {
    render: function () {
      var renderedTemplate = this.template({
        photo: this.photo
      });
      this.$el.html(renderedTemplate);
      this.$el.submit('#fighter-form', this.handleFighterCreate.bind(this));
    }
  });




})(this)
