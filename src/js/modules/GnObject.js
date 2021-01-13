// classe générique
export default class GnObject {


  // remplacer des parametres dans un template
  tmplReplace(data) {
    data = data.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, '{{$1}}');
    for (let propriete in this) {
      data = data.replace(
        "{{" + propriete + "}}",
        this[propriete]
      );
    }
    return data
  }

}
