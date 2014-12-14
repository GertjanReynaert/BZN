import Ember from "ember";
import Rollback from "../../mixins/rollback";

export default Ember.Route.extend(Rollback, {
  model: function(params) {
    var articles = this.modelFor("articles");
    return articles.findBy("code", params.code);
  }
});
