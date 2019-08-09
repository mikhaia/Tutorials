var json = '<c:out value="${data}" />';

json = json.replace(/({|, )([a-z_]+)=/g, '$1"$2":');
// json = json.replace(/":([\s\S]+?)}/g, '":"$1"}');
json = json.replace(/"([a-z]+)":"([A-z]+)}/g, '"$1":"$2"}');
json = json.replace(/":([\s\S]+?)(,\s")/g, '":"$1, "');
json = json.replace(/":"{/g, "\":{");
json = json.replace(/}",/g, "},");

document.write('<code style="background: yellow">');
document.write(json);
document.write('</code>');

/* Second version */

var json = '<c:out value="${data}" />';
json = json.replace(/([^=,{}\[\]]+)/g, "'$1'");
json = json.replace(/=/g, ' : ');
document.write('<code>');
document.write(json);
document.write('</code>');
