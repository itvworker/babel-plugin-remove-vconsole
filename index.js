
var name;
const visitor = {
  // 二元表达式类型节点的访问者
  ImportDeclaration(path, { opts }) {
    if(path.node.source.value=== 'vconsole' &&  process.env.NODE_ENV === 'production') {
        name = path.node.specifiers[0].local.name;
        path.remove();
    }
  },

  ExpressionStatement(path) {
    if(path.node.expression.type==='NewExpression' && path.node.expression.callee.name===name && process.env.NODE_ENV === 'production') {
        path.remove()
    } 
  }
}
module.exports = function () {
  return {
    visitor
  }
}