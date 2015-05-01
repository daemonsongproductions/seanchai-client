import DS from 'ember-data';

var Store = DS.Store.extend({
  find_section: function(story_slug, order) {
    return this.find('story_section', order + "?story_id=" + story_slug);
    //var adapter = this.adapterFor('story_section')
    //return adapter.ajax(adapter.buildURL('story_section', order), 'GET', {data: {story_id: story_slug}});
  }
});

export default Store;
