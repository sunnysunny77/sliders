const events = (obj, type, callback, opt) => {
  if (obj) {
    obj.addEventListener(type, callback, opt);
  }
};