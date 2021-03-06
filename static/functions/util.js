function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return r[2];
  }
}

function isObject(o) {
  return typeof o === 'object';
}

function isFunction(o) {
  return typeof o === 'function';
}
