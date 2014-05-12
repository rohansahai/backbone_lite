(function(root){
  var Tagger = root.Tagger = (root.Tagger || {});

  var PhotoFormView = Tagger.PhotoFormView = function (){
    this.$el = $("<div></div>");
    this.template = JST['photo_form'];
  };

  _.extend(PhotoFormView.prototype, {
    render: function(){
      var renderedTemplate = this.template();
      this.$el.html(renderedTemplate);
      return this;
    }
  });


})(this)