const SCALE_MODEL = "BC-768";

const HEALTHPLANET_API_CLIENT_ID = "	15523.f9IHWe6Zvs.apps.healthplanet.jp";
const HEALTHPLANET_API_CLIENT_SECRET = "1701397316266-hO4Ug0MJzHbYRwY5mSnJY1KwkiteJnC3mQ8XtM3b";

const GOOGLE_API_CLIENT_ID = "331561416677-pmm1lcsipuh7ob7sodku3kkdfr2euoqc.apps.googleusercontent.com";
const GOOGLE_API_CLIENT_SECRET = "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";

const FITBIT_API_CLIENT_ID = "23RH89";
const FITBIT_API_CLIENT_SECRET = "7027a010be29e0311fc4915277872cfd";

function setProps(){
  const property = PropertiesService.getScriptProperties();
  property.setProperty('HEALTHPLANET_API_CLIENT_ID',HEALTHPLANET_API_CLIENT_ID);
  property.setProperty('HEALTHPLANET_API_CLIENT_SECRET',HEALTHPLANET_API_CLIENT_SECRET);
  property.setProperty('GOOGLE_API_CLIENT_ID',GOOGLE_API_CLIENT_ID);
  property.setProperty('GOOGLE_API_CLIENT_SECRET',GOOGLE_API_CLIENT_SECRET);
  property.setProperty('FITBIT_API_CLIENT_ID',FITBIT_API_CLIENT_ID);
  property.setProperty('FITBIT_API_CLIENT_SECRET',FITBIT_API_CLIENT_SECRET);
}
