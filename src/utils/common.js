/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
export const nameof = variableObject => Object.keys(variableObject)[0];

export const debounce = (fn, timeout, callBefore) => {
  var d, e;
  return function() {
    function h() {
      (d = null), callBefore || (e = fn.apply(f, g));
    }
    var f = this,
      g = arguments;
    return (
      clearTimeout(d), (d = setTimeout(h, timeout)), callBefore && !d && (e = fn.apply(f, g)), e
    );
  };
};
