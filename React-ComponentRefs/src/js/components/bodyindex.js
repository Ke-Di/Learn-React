import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';
const defaultProps = {
	username: '这是一个默认的用户名'
};
export default class BodyIndex extends React.Component {
	constructor() {
		super(); //调用基类的所有的初始化方法
		this.state = {
			username: "Parry",
			age: 20
		}; //初始化赋值
	};
	changeUserInfo(age) {
		this.setState({age: age});
		//改变某个元素的样式：
		//第一种方式  （在安全和性能方面是有问题的，不提倡。）
		// var mySubmitBotton  = document.getElementById('submitButton');
		// console.log(mySubmitBotton);
		// ReactDOM.findDOMNode(mySubmitBotton).style.color = 'red';

		//第二种方式
		console.log(this.refs.submitButton);
		this.refs.submitButton.style.color = 'red';
	};
	handleChildValueChange(event) {
		this.setState({age: event.target.value});
	};
	render() {
		// setTimeout(()=>{
		//   //更改 state 的时候
		//   this.setState({username: "IMOOC",age : 30});
		// },4000);
		return (
			<div>
				<h2>页面的主体内容</h2>
				<p>接收到的父页面的属性：userid: {this.props.userid}
					username: {this.props.username}</p>
				<p>age: {this.state.age}</p>
				{/*第一种方式*/}
				{/*<input id="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this, 99)}/>*/}
				{/*第二种方式*/}
				<input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this, 99)}/>
				<BodyChild {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
			</div>
		)
	}
}
BodyIndex.propTypes = {
	userid: React.PropTypes.number.isRequired
};
BodyIndex.defaultProps = defaultProps;
