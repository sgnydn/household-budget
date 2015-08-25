import DS from 'ember-data';
import ENV from 'hbudget/config/environment';

import  ActiveModelAdapter  from 'active-model-adapter';
export default
ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: ENV.APP.SERVER_URL

});
