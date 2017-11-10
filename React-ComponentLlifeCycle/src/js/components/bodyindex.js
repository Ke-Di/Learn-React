import React from 'react';
export default class BodyIndex extends React.Component{

  componentWillMount(){
    //定义页面将要加载时的逻辑
    console.log("BodyIndex - componentWillMount");
  }

  componentDidMount(){
    //定义页面完成加载时的逻辑
    console.log("BodyIndex - componentDidMount");
  }
    
  render(){

    var userName = '';
    var boolInput = false;

    var html = "IMOOC&nbsp;LESSON";

    //comments

    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>{userName=='' ? '用户还没有登录' : '用户名：' + userName}</p>
        <p><input type='button' value = {userName} disabled={boolInput}/></p>
        {/*注释*/}
        <p>{html}</p> {/*特殊字符需要进行 Unicode 的转码*/}
      {/*内置的转码方式*/}
        <p dangerouslySetInnerHTML ={{__html : html}}></p>
      </div>
    )
  }
}
