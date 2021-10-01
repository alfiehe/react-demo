import React from 'react';

const toLearn = ['react', 'vue', 'webpack', 'nodejs'];

const TextComponent = () => <div>hello, i am function component</div>;

class Index extends React.Component {
  status = false;
  renderFoot = () => <div>i am foot</div>
  render() {
    return <div>
      {/* element 元素类型 */}
      <h2>Hello World</h2>
      {/* fragment 类型 */}
      <React.Fragment>
        <div>👽👽</div>
      </React.Fragment>
      {/* text文本类型 */}
      my name is daiboy
      {/* 数组节点类型 */}
      {
        toLearn.map(it => <div key={it}>let us learn { it }</div>)
      }
      {/* 组件类型 */}
      <TextComponent />
      {/* 三元运算 */}
      {
        this.status ? <TextComponent /> : <div>三元运算</div>
      }
      {/* 函数执行 */}
      { this.renderFoot() }
      <button onClick={ () => console.log(this.render()) }>打印render后的内容</button>
    </div>
  }
}

export default Index;
